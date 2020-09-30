import React, { useState, useEffect } from 'react'
import { useOrder } from 'ordering-components'
import { Modal } from '../Modal'
import { Container, UpsellingContainer, Item, Image, Details } from './styles'
import { Button } from '../../styles/Buttons'

export const UpsellingPage = (props) => {
  const { onSave, products } = props
  const [orderState, { addProduct }] = useOrder()
  const [upsellingProducts, setUpsellingProducts] = useState([])
  const [modalOpen, setModalOpen] = useState(true)

  useEffect(() => {
    handleProductsOfCart()
  }, [products])

  /**
   * products of the cart
   */
  const handleProductsOfCart = () => {
    const cartProducts = Object.values(orderState.carts).map(cart => {
      return cart?.products.map(product => {
        return product
      })
    })
    getUpsellingProducts(cartProducts)
  }

  /**
   *
   * filt products if they are already in the cart
   * @param {array} cartProducts
   */
  const getUpsellingProducts = (cartProducts) => {
    setUpsellingProducts(products.filter(product => product.upselling && cartProducts.map(cartProduct => {
      return product.id !== cartProduct.id
    })))
  }

  /**
   * adding product to the cart from upselling
   * @param {object} product Product object
   */
  const handleAddProductUpselling = async (product) => {
    const successful = await addProduct(product)
    if (successful) {
      onSave(product)
    }
  }

  return (
    <Modal title='Do you want something else?' open={modalOpen} onClose={() => setModalOpen(false)}>
      <Container>
        <UpsellingContainer>
          {
            upsellingProducts.map(product => (
              <Item key={product.id}>
                <Image>
                  <img src={product.images} />
                </Image>
                <Details>
                  <div>
                    <p>{product.name}</p>
                  </div>
                  <p>${product.price}</p>
                  <Button color='primary' onClick={handleAddProductUpselling}>Add</Button>
                </Details>
              </Item>
            ))
          }
        </UpsellingContainer>
        <Button color='secondary' outline onClick={() => setModalOpen(false)}>
          No, Thanks
        </Button>
      </Container>
    </Modal>
  )
}

/* export const UpsellingPage = (props) => {
  const UpsellingPageProps = {
    ...props,
    UIComponent: UpsellingPageUI
  }

  return <UpsellingPageController {...UpsellingPageProps} />
} */
