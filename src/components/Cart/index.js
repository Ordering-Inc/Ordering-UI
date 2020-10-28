import React, { useState, useEffect } from 'react'
import { Cart as CartController, useOrder, useLanguage, useEvent, useUtils } from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { BusinessItemAccordion } from '../BusinessItemAccordion'

import { Confirm } from '../Confirm'
import { Modal } from '../Modal'
import { CouponControl } from '../CouponControl'
import { ProductForm } from '../ProductForm'
import { UpsellingPage } from '../UpsellingPage'
import { useWindowSize } from '../../hooks/useWindowSize'

import {
  CartContainer,
  OrderBill,
  CheckoutAction,
  CouponContainer
} from './styles'

const CartUI = (props) => {
  const {
    cart,
    clearCart,
    isProducts,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    removeProduct,
    onClickCheckout
  } = props
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState({})
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [events] = useEvent()
  const [isCheckout, setIsCheckout] = useState(false)
  const [{ parsePrice, parseNumber, parseDate }] = useUtils()
  const windowSize = useWindowSize()

  const momentFormatted = !orderState?.option?.moment ? t('RIGHT_NOW', 'Right Now') : parseDate(orderState?.option?.moment, { outputFormat: 'YYYY-MM-DD HH:mm' })

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
    events.emit('go_to_page', { page: 'checkout', params: { cartUuid: cart.uuid } })
    onClickCheckout()
  }

  const handleStoreRedirect = (slug) => {
    events.emit('go_to_page', { page: 'business', params: { store: slug } })
    if (windowSize.width <= 768) {
      onClickCheckout()
    }
  }

  const handleChangeView = ({ page, params }) => {
    setIsCheckout(page === 'checkout' && params?.cartUuid === cart?.uuid)
  }

  useEffect(() => {
    events.on('change_view', handleChangeView)
    events.emit('get_current_view')
    return () => {
      setConfirm({ ...confirm, open: false })
      events.off('change_view', handleChangeView)
    }
  }, [])

  const handlerProductAction = (product) => {
    if (Object.keys(product).length) {
      setModalIsOpen(false)
    }
  }

  const handleClearProducts = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCTS', 'Are you sure that you want to delete all products?'),
      handleOnAccept: () => {
        clearCart(cart?.uuid)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const handleUpsellingPage = () => {
    setOpenUpselling(false)
    setCanOpenUpselling(false)
    handleClickCheckout()
  }

  return (
    <CartContainer>
      <BusinessItemAccordion
        uuid={cart?.uuid}
        isCheckout={isCheckout}
        orderTotal={cart?.total}
        business={cart?.business}
        isClosed={!cart?.valid_schedule}
        moment={momentFormatted}
        isProducts={isProducts}
        isValidProducts={cart?.valid_products}
        handleClearProducts={handleClearProducts}
        handleStoreRedirect={handleStoreRedirect}
      >
        {cart?.products?.length > 0 && cart?.products.map(product => (
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
                  <td>{t('SUBTOTAL', 'Subtotal')}</td>
                  <td>{parsePrice(cart?.subtotal || 0)}</td>
                </tr>
                <tr>
                  <td>{t('TAX', 'Tax')} ({parseNumber(cart?.business?.tax)}%)</td>
                  <td>{parsePrice(cart?.tax || 0)}</td>
                </tr>
                <tr>
                  <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                  <td>{parsePrice(cart?.delivery_price || 0)}</td>
                </tr>
                <tr>
                  <td>{t('DRIVER_TIP', 'Driver tip')} ({parseNumber(cart?.driver_tip_rate)}%)</td>
                  <td>{parsePrice(cart?.driver_tip || 0)}</td>
                </tr>
                <tr>
                  <td>{t('SERVICE_FEE', 'Service Fee')} ({parseNumber(cart?.business?.service_fee)}%)</td>
                  <td>{parsePrice(cart?.service_fee || 0)}</td>
                </tr>
                {cart?.discount > 0 && (
                  <tr>
                    <td>{t('DISCOUNT', 'Discount')}</td>
                    <td>{parsePrice(cart?.discount || 0)}</td>
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
                  <td>{t('TOTAL', 'Total')}</td>
                  <td>{parsePrice(cart?.total)}</td>
                </tr>
              </tbody>
            </table>
          </OrderBill>
        )}
        {onClickCheckout && !isCheckout && (
          <CheckoutAction>
            <Button
              color='primary'
              onClick={() => setOpenUpselling(true)}
              disabled={openUpselling && !canOpenUpselling}
            >
              {!openUpselling ^ canOpenUpselling ? t('CHECKOUT', 'Checkout') : t('LOADING', 'Loading')}
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
        onClose={() => setModalIsOpen(false)}
      >
        <ProductForm
          isCartProduct
          productCart={curProduct}
          businessSlug={cart?.business?.slug}
          businessId={curProduct?.business_id}
          categoryId={curProduct?.category_id}
          productId={curProduct?.id}
          onSave={handlerProductAction}
        />
      </Modal>
      {openUpselling && (
        <UpsellingPage
          businessId={cart.business_id}
          cartProducts={cart.products}
          handleUpsellingPage={handleUpsellingPage}
          openUpselling={openUpselling}
          canOpenUpselling={canOpenUpselling}
          setCanOpenUpselling={setCanOpenUpselling}
        />
      )}
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
