import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useOrder } from '../../contexts/OrderContext'
// import { useConfig } from '../../contexts/ConfigContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useEvent } from '../../contexts/EventContext'
import { useOrder, useConfig, useApi, useEvent } from 'ordering-components'

export const ProductForm = (props) => {
  const {
    UIComponent,
    useOrderContext,
    onSave,
    handleCustomSave,
    isStarbucks,
    isService,
    professionalSelected
  } = props

  const requestsState = {}

  const [ordering] = useApi()
  /**
   * Events context
  */
  const [events] = useEvent()
  /**
   * Original product state
   */
  const [product, setProduct] = useState({ product: props.product, loading: false, error: null })

  /**
   * Product cart state
   */
  const [productCart, setProductCart] = useState({ ingredients: {}, options: {} })

  /**
   * Errors state
   */
  const [errors, setErrors] = useState({})

  /**
   * Suboption by default when there is only one
   */
  const [defaultSubOptions, setDefaultSubOptions] = useState([])

  /**
   * Custom Suboption by default
   */
  const [customDefaultSubOptions, setCustomDefaultSubOptions] = useState([])

  /**
   * Edit mode
   */
  const editMode = typeof props.productCart?.code !== 'undefined'

  /**
   * Order context manager
   */
  const [orderState, { addProduct, updateProduct }] = useOrder()

  /**
   * Remove to balances in edit mode
   */
  const removeToBalance = editMode ? props.productCart.quantity : 0

  /**
   * Current cart
   */
  const cart = orderState.carts?.[`businessId:${props.businessId}`]

  /**
   * Total products in cart
   */
  const cartProducts = Object.values(orderState.carts).reduce((products, _cart) => [...products, ..._cart?.products], [])

  /**
   * Total the current product in cart
   */
  const productBalance = cartProducts.reduce((sum, _product) => sum + (product.product && _product.id === product.product.id ? _product.quantity : 0), 0)

  /**
   * Total product in cart
   */
  const totalBalance = (productBalance || 0) - removeToBalance

  /**
   * Config context manager
   */
  const [stateConfig] = useConfig()

  /**
   * Max total product in cart by config
   */
  const maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance

  /**
   * Max total product in cart by config
   */
  let maxCartProductInventory = (product.product?.inventoried ? product.product?.quantity : undefined) - totalBalance

  /**
   * True if product is sold out
   */
  const isSoldOut = product.product?.inventoried && product.product?.quantity === 0

  /**
   * Fix if maxCartProductInventory is not valid
   */
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig

  /**
   * Max product quantity
   */
  const maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory)

  /**
   * Init product cart status
   * @param {object} product Product to init product cart status
   */
  const initProductCart = (product) => {
    const ingredients = {}
    for (const key in product.ingredients) {
      const ingredient = product.ingredients[key]
      ingredients[`id:${ingredient.id}`] = {
        selected: true
      }
    }
    const newProductCart = {
      ...props.productCart,
      id: product.id,
      price: product.price,
      name: product.name,
      businessId: props.businessId,
      categoryId: product.category_id,
      inventoried: product.inventoried,
      stock: product.quantity,
      ingredients: props.productCart?.ingredients || ingredients,
      options: props.productCart?.options || {},
      comment: props.productCart?.comment || null,
      quantity: props.productCart?.quantity || 1
    }
    newProductCart.unitTotal = getUnitTotal(newProductCart)
    newProductCart.total = newProductCart.unitTotal * newProductCart.quantity
    setProductCart(newProductCart)
  }

  /**
   * Get unit total for product cart
   * @param {object} productCart Current product status
   */
  const getUnitTotal = (productCart) => {
    let subtotal = 0
    for (let i = 0; i < product.product?.extras?.length; i++) {
      const extra = product.product?.extras[i]
      for (let j = 0; j < extra.options?.length; j++) {
        const option = extra.options[j]
        for (let k = 0; k < option.suboptions?.length; k++) {
          const suboption = option.suboptions[k]
          if (productCart.options[`id:${option.id}`]?.suboptions[`id:${suboption.id}`]?.selected) {
            const suboptionState = productCart.options[`id:${option.id}`].suboptions[`id:${suboption.id}`]
            const quantity = option.allow_suboption_quantity ? suboptionState.quantity : 1
            const price = option.with_half_option && suboption.half_price && suboptionState.position !== 'whole' ? suboption.half_price : suboption.price
            subtotal += price * quantity
          }
        }
      }
    }
    return product.product?.price + subtotal
  }

  /**
   * Load product from API
   */
  const loadProductWithOptions = async () => {
    try {
      setProduct({ ...product, loading: true })
      const source = {}
      requestsState.product = source
      const { content: { result } } = await ordering
        .businesses(props.businessId)
        .categories(props.categoryId)
        .products(props.productId)
        .get({ cancelToken: source })

      setProduct({
        ...product,
        loading: false,
        product: result
      })
    } catch (err) {
      setProduct({
        ...product,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Remove related option by respect_to
   * @param {object} cart Current cart
   * @param {number} suboptionId Suboption id
   */
  const removeRelatedOptions = (productCart, suboptionId) => {
    product.product.extras.forEach(_extra => {
      _extra.options.forEach(_option => {
        if (_option.respect_to === suboptionId) {
          const suboptions = productCart.options[`id:${_option.id}`]?.suboptions
          if (suboptions) {
            Object.keys(suboptions).map(suboptionKey => removeRelatedOptions(productCart, parseInt(suboptionKey.split(':')[1])))
          }
          if (productCart.options[`id:${_option.id}`]) {
            productCart.options[`id:${_option.id}`].suboptions = {}
          }
        }
      })
    })
  }

  /**
   * Get changes for ingredients state
   * @param {object} state Current ingrediente state
   * @param {object} ingredient Current ingredient
   */
  const handleChangeIngredientState = (state, ingredient) => {
    productCart.ingredients[`id:${ingredient.id}`] = state
    setProductCart({
      ...productCart,
      ingredients: productCart.ingredients
    })
  }

  /**
   * Change product state with new suboption state
   * @param {object} state New state with changes
   * @param {object} suboption Suboption object
   * @param {objecrt} option Option object
   * @param {object} product Product object
   */
  const handleChangeSuboptionState = (state, suboption, option) => {
    const newProductCart = JSON.parse(JSON.stringify(productCart))
    if (!newProductCart.options) {
      newProductCart.options = {}
    }
    if (!newProductCart.options[`id:${option.id}`]) {
      newProductCart.options[`id:${option.id}`] = {
        id: option.id,
        name: option.name,
        suboptions: {}
      }
    }
    if (!state.selected) {
      delete newProductCart.options[`id:${option.id}`].suboptions[`id:${suboption.id}`]
      removeRelatedOptions(newProductCart, suboption.id)
    } else {
      if (option.min === option.max && option.min === 1) {
        const suboptions = newProductCart.options[`id:${option.id}`].suboptions
        if (suboptions) {
          Object.keys(suboptions).map(suboptionKey => removeRelatedOptions(newProductCart, parseInt(suboptionKey.split(':')[1])))
        }
        if (newProductCart.options[`id:${option.id}`]) {
          newProductCart.options[`id:${option.id}`].suboptions = {}
        }
      }
      newProductCart.options[`id:${option.id}`].suboptions[`id:${suboption.id}`] = state
    }

    let newBalance = Object.keys(newProductCart.options[`id:${option.id}`].suboptions).length
    if (option.limit_suboptions_by_max) {
      newBalance = Object.values(newProductCart.options[`id:${option.id}`].suboptions).reduce((count, suboption) => {
        return count + suboption.quantity
      }, 0)
    }

    if (newBalance <= option.max) {
      newProductCart.options[`id:${option.id}`].balance = newBalance
      newProductCart.unitTotal = getUnitTotal(newProductCart)
      newProductCart.total = newProductCart.unitTotal * newProductCart.quantity
      setProductCart(newProductCart)
    }
  }

  const handleChangeSuboptionDefault = (defaultOptions) => {
    const newProductCart = JSON.parse(JSON.stringify(productCart))
    if (!newProductCart.options) {
      newProductCart.options = {}
    }
    defaultOptions.map(({ option, state, suboption }) => {
      if (!newProductCart.options[`id:${option.id}`]) {
        newProductCart.options[`id:${option.id}`] = {
          id: option.id,
          name: option.name,
          suboptions: {}
        }
      }
      if (!state.selected) {
        delete newProductCart.options[`id:${option.id}`].suboptions[`id:${suboption.id}`]
        removeRelatedOptions(newProductCart, suboption.id)
      } else {
        if (option.min === option.max && option.min === 1) {
          const suboptions = newProductCart.options[`id:${option.id}`].suboptions
          if (suboptions) {
            Object.keys(suboptions).map(suboptionKey => removeRelatedOptions(newProductCart, parseInt(suboptionKey.split(':')[1])))
          }
          if (newProductCart.options[`id:${option.id}`]) {
            newProductCart.options[`id:${option.id}`].suboptions = {}
          }
        }
        newProductCart.options[`id:${option.id}`].suboptions[`id:${suboption.id}`] = state
      }

      let newBalance = Object.keys(newProductCart.options[`id:${option.id}`].suboptions).length
      if (option.limit_suboptions_by_max) {
        newBalance = Object.values(newProductCart.options[`id:${option.id}`].suboptions).reduce((count, suboption) => {
          return count + suboption.quantity
        }, 0)
      }

      if (newBalance <= option.max) {
        newProductCart.options[`id:${option.id}`].balance = newBalance
        newProductCart.unitTotal = getUnitTotal(newProductCart)
        newProductCart.total = newProductCart.unitTotal * newProductCart.quantity
      }
    })
    setProductCart(newProductCart)
  }

  /**
   * Change product state with new comment state
   * @param {object} e Product comment
   */
  const handleChangeCommentState = (e) => {
    const comment = e.target.value ?? ''
    productCart.comment = comment.trim()
    setProductCart({
      ...productCart,
      comment: comment.trim()
    })
  }

  /**
   * Check options to get errors
   */
  const checkErrors = () => {
    const errors = {}
    if (!product.product) {
      return errors
    }
    product.product.extras.forEach(extra => {
      extra.options.map(option => {
        const suboptions = productCart.options[`id:${option.id}`]?.suboptions
        const quantity = suboptions
          ? (option.limit_suboptions_by_max
            ? Object.values(suboptions).reduce((count, suboption) => {
              return count + suboption.quantity
            }, 0) : Object.keys(suboptions).length)
          : 0
        let evaluateRespectTo = false
        if (option.respect_to && productCart.options) {
          const options = productCart.options
          for (const key in options) {
            const _option = options[key]
            if (_option.suboptions[`id:${option.respect_to}`]?.selected) {
              evaluateRespectTo = true
              break
            }
          }
        }
        const evaluate = option.respect_to ? evaluateRespectTo : true
        if (option?.suboptions?.length > 0 && evaluate) {
          if (option.min > quantity) {
            errors[`id:${option.id}`] = true
          } else if (option.max < quantity) {
            errors[`id:${option.id}`] = true
          }
        }
      })
    })
    setErrors(errors)
    return errors
  }

  /**
   * Handle when click on save product
   */
  const handleSave = async () => {
    if (handleCustomSave) {
      handleCustomSave && handleCustomSave()
    }
    const errors = checkErrors()
    if (Object.keys(errors).length === 0) {
      let successful = true
      if (useOrderContext) {
        successful = false
        const currentChanges = cart || { business_id: props.businessId }
        const changes = !isService
          ? { ...currentChanges }
          : {
            ...currentChanges,
            professional_id: professionalSelected?.id,
            service_start: orderState.options?.moment
          }
        if (!props.productCart?.code) {
          successful = await addProduct(productCart, changes, false, !!isService)
        } else {
          successful = await updateProduct(productCart, changes, false, !!isService)
          if (successful) {
            events.emit('product_edited', productCart)
          }
        }
      }
      if (successful) {
        onSave(productCart, !props.productCart?.code)
      }
    }
  }

  const increment = () => {
    if (maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity) {
      return
    }
    productCart.quantity++
    productCart.unitTotal = getUnitTotal(productCart)
    productCart.total = productCart.unitTotal * productCart.quantity
    setProductCart({
      ...productCart
    })
  }

  const decrement = () => {
    if (productCart.quantity === 0) {
      return
    }
    productCart.quantity--
    productCart.unitTotal = getUnitTotal(productCart)
    productCart.total = productCart.unitTotal * productCart.quantity
    setProductCart({
      ...productCart
    })
  }

  const handleChangeProductCartQuantity = (quantity) => {
    if (maxProductQuantity <= 0 || quantity > maxProductQuantity) {
      return
    }
    productCart.quantity = quantity || 0
    productCart.total = productCart.unitTotal * productCart.quantity
    setProductCart({
      ...productCart
    })
  }

  /**
   * Check if option must show
   * @param {object} option Option to check
   */
  const showOption = (option) => {
    let showOption = true
    if (option.respect_to) {
      showOption = false
      if (productCart.options) {
        const options = productCart.options
        for (const key in options) {
          const _option = options[key]
          if (_option.suboptions[`id:${option.respect_to}`]?.selected) {
            showOption = true
            break
          }
        }
      }
    }

    if (option?.suboptions?.length === 0) showOption = false

    return showOption
  }

  /**
   * Init product cart when product changed
   */
  useEffect(() => {
    if (product.product) {
      initProductCart(product.product)
    }
  }, [product.product, props.productCart])

  /**
   * Check error when product state changed
   */
  useEffect(() => {
    checkErrors()
  }, [productCart])

  /**
   * Listening product changes
   */
  useEffect(() => {
    setProduct({ ...product, product: props.product })
  }, [props.product])

  /**
   * Check if there is an option required with one suboption
   */
  useEffect(() => {
    if (product?.product && Object.keys(product?.product).length) {
      const options = [].concat(...product.product.extras.map(extra => extra.options.filter(
        option => (
          (option.min === 1 &&
            option.max === 1 &&
            option.suboptions.filter(suboption => suboption.enabled).length === 1) ||
          option.suboptions.filter(suboption => suboption.preselected).length > 0
        )
      )))

      if (!options?.length) {
        return
      }

      const suboptions = []
        .concat(...options.map(option => option.suboptions))
        .filter(suboption => suboption.enabled)

      const states = suboptions.map((suboption, i) => {
        const price = options[i]?.with_half_option && suboption?.half_price && suboption?.position !== 'whole'
          ? suboption.half_price
          : suboption.price

        return {
          id: suboption.id,
          name: suboption.name,
          position: suboption.position || 'whole',
          price,
          quantity: 1,
          selected: true,
          total: price
        }
      })
      let suboptionsArray = []
      options.map((option) => {
        const defaultSuboptions = option.suboptions
          .filter(suboption => suboption?.enabled && (suboption?.preselected || option?.suboptions?.length === 1))
          .map((suboption) => {
            return {
              option: option,
              suboption: suboption,
              state: states.find(state => state?.id === suboption?.id)
            }
          })
        suboptionsArray = [...suboptionsArray, ...defaultSuboptions]
      })
      setDefaultSubOptions(suboptionsArray)
      setCustomDefaultSubOptions(suboptionsArray)
    }
  }, [product.product])

  if (isStarbucks) {
    useEffect(() => {
      if (product?.product && Object.keys(product?.product).length) {
        const options = [].concat(...product.product.extras.map(extra => extra.options.filter(
          option => (
            option.name === 'Tamaño' &&
            option.suboptions.filter(suboption => suboption.name === 'Grande (16oz - 437ml)').length === 1
          )
        )))
        if (!options?.length) {
          return
        }
        const suboptions = []
          .concat(...options.map(option => option.suboptions))
          .filter(suboption => suboption.name === 'Grande (16oz - 437ml)')
        // console.log(suboptions)

        const states = suboptions.map((suboption, i) => {
          const price = options[i].with_half_option && suboption.half_price && suboption?.position !== 'whole'
            ? suboption.half_price
            : suboption.price

          return {
            id: suboption.id,
            name: suboption.name,
            position: suboption.position || 'whole',
            price,
            quantity: 1,
            selected: true,
            total: price
          }
        })
        const defaultOptions = options.map((option, i) => {
          return {
            option: option,
            suboption: suboptions[i],
            state: states[i]
          }
        })
        setDefaultSubOptions([...customDefaultSubOptions, ...defaultOptions])
      }
    }, [customDefaultSubOptions])
  }
  /**
   * Check if defaultSubOption has content to set product Cart
   */
  useEffect(() => {
    if (defaultSubOptions?.length) {
      handleChangeSuboptionDefault(defaultSubOptions)
    }
  }, [defaultSubOptions])

  /**
   * Load product on component mounted
   */
  useEffect(() => {
    if (!props.product && (!props.businessId || !props.categoryId || !props.productId)) {
      throw new Error('`businessId` && `categoryId` && `productId` are required if `product` was not provided.')
    }
    if (!props.product && props.businessId && props.categoryId && props.productId) {
      loadProductWithOptions()
    }
    return () => {
      if (requestsState.product) {
        requestsState.product.cancel()
      }
    }
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            productObject={product}
            productCart={productCart}
            errors={errors}
            editMode={editMode}
            isSoldOut={isSoldOut}
            maxProductQuantity={maxProductQuantity}
            increment={increment}
            decrement={decrement}
            handleChangeProductCartQuantity={handleChangeProductCartQuantity}
            handleSave={handleSave}
            showOption={showOption}
            handleChangeIngredientState={handleChangeIngredientState}
            handleChangeSuboptionState={handleChangeSuboptionState}
            handleChangeCommentState={handleChangeCommentState}
          />
        )
      }
    </>
  )
}

ProductForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * `businessId`
   */
  businessId: PropTypes.number.isRequired,
  /**
   * `categoryId` is required if `product` prop is not present
   */
  categoryId: PropTypes.number,
  /**
   * `productId` is required if `product` prop is not present
   */
  productId: PropTypes.number,
  /**
   * `product` is required if `businessId`, `categoryId` or `productId` is not present
   */
  product: PropTypes.object,
  /**
   * Product from cart
   */
  productCart: PropTypes.object,
  /**
   * useOrderContext
   */
  useOrderContext: PropTypes.bool,
  /**
   * Function to save event
   */
  onSave: PropTypes.func
}

ProductForm.defaultProps = {
  productCart: {},
  useOrderContext: true,
  balance: 0
}
