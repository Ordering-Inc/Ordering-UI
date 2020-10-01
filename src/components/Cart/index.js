import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import { Cart as CartController, useOrder, useLanguage } from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { BusinessItemAccordion } from '../BusinessItemAccordion'
import { formatPrice } from '../../utils'

import { Confirm } from '../Confirm'
import { Modal } from '../Modal'
import { CouponControl } from '../CouponControl'
import { ProductForm } from '../ProductForm'

import {
  CartContainer,
  OrderBill,
  CheckoutAction,
  CouponContainer
} from './styles'

const CartUI = (props) => {
  const {
    cart,
    isProducts,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    removeProduct,
    onClickCheckout,
    isHideCheckoutButtom
  } = props
  const history = useHistory()
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const momentFormatted = !orderState?.option?.moment ? 'right Now' : moment.utc(orderState?.option?.moment).local().format('YYYY-MM-DD HH:mm')
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState(null)

  const handleDeleteClick = (product) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: () => {
        removeProduct(product)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const handleEditProduct = (product) => {
    setCurProduct(product)
    setModalIsOpen(true)
  }

  const handleClickCheckout = () => {
    history.push(`/checkout/${cart.uuid}`)
    onClickCheckout()
  }

  useEffect(() => {
    return () => {
      setConfirm({ ...confirm, open: false })
    }
  }, [])

  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
    }
  }

  return (
    <CartContainer>
      <BusinessItemAccordion
        orderTotal={cart?.total}
        business={cart?.business}
        isClosed={!cart?.valid_schedule}
        moment={momentFormatted}
        isProducts={isProducts}
        isValidProducts={cart?.valid_products}
      >
        {cart?.products?.length && cart?.products.map(product => (
          <ProductItemAccordion
            key={product.code}
            isCartProduct
            product={product}
            changeQuantity={changeQuantity}
            getProductMax={getProductMax}
            offsetDisabled={offsetDisabled}
            onDeleteProduct={handleDeleteClick}
            onEditProduct={handleEditProduct}
          />
        ))}
        {cart?.valid_products && (
          <OrderBill>
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>{formatPrice(cart?.subtotal || 0)}</td>
                </tr>
                <tr>
                  <td>Tax (10%)</td>
                  <td>{formatPrice(cart?.tax || 0)}</td>
                </tr>
                <tr>
                  <td>Delivery Fee</td>
                  <td>{formatPrice(cart?.delivery_price || 0)}</td>
                </tr>
                <tr>
                  <td>Driver tips (0%)</td>
                  <td>{formatPrice(cart?.driver_tip || 0)}</td>
                </tr>
                <tr>
                  <td>Service Fee(9%)</td>
                  <td>{formatPrice(cart?.service_fee || 0)}</td>
                </tr>
                {cart?.discount > 0 && (
                  <tr>
                    <td>Discount</td>
                    <td>{formatPrice(cart?.discount || 0)}</td>
                  </tr>
                )}
              </tbody>
            </table>
            <CouponContainer>
              <CouponControl
                businessId={cart.business_id}
              />
            </CouponContainer>
            <table className='total'>
              <tbody>
                <tr>
                  <td>Total</td>
                  <td>{formatPrice(cart?.total)}</td>
                </tr>
              </tbody>
            </table>
          </OrderBill>
        )}
        {onClickCheckout && isHideCheckoutButtom && (
          <CheckoutAction>
            <Button
              color='primary'
              onClick={() => handleClickCheckout()}
            >
              Checkout
            </Button>
          </CheckoutAction>
        )}
      </BusinessItemAccordion>
      <Confirm
        title={t('PRODUCT', 'Product')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
      <Modal
        width='70%'
        open={openProduct}
        closeOnBackdrop={false}
        onClose={() => setModalIsOpen(false)}
      >
        <ProductForm
          isCartProduct
          productCart={curProduct}
          businessId={curProduct?.business_id}
          categoryId={curProduct?.category_id}
          productId={curProduct?.id}
          onSave={handlerProductAction}
        />
      </Modal>
    </CartContainer>
  )
}

export const Cart = (props) => {
  const cartProps = {
    ...props,
    UIComponent: CartUI
  }

  return (
    <CartController {...cartProps} />
  )
}
