import React, { useState, useEffect } from 'react'
import { Cart as CartController, useOrder, useLanguage, useEvent, useUtils, useValidationFields, useConfig } from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { BusinessItemAccordion } from '../BusinessItemAccordion'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { ProductForm } from '../ProductForm'
import { UpsellingPage } from '../UpsellingPage'

import { Confirm } from '../../../../../components/Confirm'
import { Modal } from '../../../../../components/Modal'
import { CouponControl } from '../../../../../components/CouponControl'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { verifyDecimals } from '../../../../../utils'
import { CartStoresListing } from '../CartStoresListing'

import {
  CartContainer,
  OrderBill,
  CheckoutAction,
  CouponContainer,
  CartSticky,
  CustomCartBottom,
  CartActionsGroupContainer
} from './styles'

const CartUI = (props) => {
  const {
    currentCartUuid,
    cart,
    clearCart,
    isProducts,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    removeProduct,
    onClickCheckout,
    isCheckout,
    isCartPending,
    isCartPopover,
    isForceOpenCart,
    isCartOnProductsList,
    handleCartOpen,

    isCustomMode,
    handleGoBack
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [{ parsePrice, parseNumber, parseDate }] = useUtils()
  const [validationFields] = useValidationFields()
  const [{ configs }] = useConfig()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openProduct, setModalIsOpen] = useState(false)
  const [openChangeStore, setOpenChangeStore] = useState(false)
  const [curProduct, setCurProduct] = useState({})
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const windowSize = useWindowSize()
  const isCouponEnabled = validationFields?.fields?.checkout?.coupon?.enabled

  const businessId = Object.values(orderState.carts).find(_cart => _cart?.uuid === cart.uuid)?.business_id ?? {}

  const momentFormatted = !orderState?.option?.moment
    ? t('RIGHT_NOW', 'Right Now')
    : parseDate(orderState?.option?.moment, { outputFormat: 'YYYY-MM-DD HH:mm' })

  const handleDeleteClick = (product) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: () => {
        setOpenUpselling(false)
        setCanOpenUpselling(false)
        removeProduct(product, cart)
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
    events.emit('cart_popover_closed')
    onClickCheckout && onClickCheckout()
  }

  const handleStoreRedirect = (slug) => {
    events.emit('go_to_page', { page: 'business', params: { store: slug } })
    if (windowSize.width <= 768) {
      onClickCheckout && onClickCheckout()
    }
  }

  const handleBusinessCartRedirect = (slug) => {
    events.emit('go_to_page', { page: 'business_cart', params: { store: slug } })
    onClickCheckout && onClickCheckout()
  }

  useEffect(() => {
    events.emit('get_current_view')
    return () => {
      setConfirm({ ...confirm, open: false })
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
        handleGoBack && handleGoBack()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const handleUpsellingPage = () => {
    setOpenUpselling(false)
    setCanOpenUpselling(false)
    handleClickCheckout()
  }

  const handleChangeStore = () => {
    setOpenChangeStore(true)
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <CartContainer
        className='cart'
        isCustomMode={isCustomMode}
        isCheckout={isCheckout}
      >
        <CartSticky isCartOnProductsList={isCartOnProductsList}>
          <BusinessItemAccordion
            isCustomMode={isCustomMode}
            isCartPending={isCartPending}
            currentCartUuid={currentCartUuid}
            uuid={cart?.uuid}
            isCheckout={isCheckout}
            orderTotal={cart?.total}
            // business={cart?.business}
            isClosed={!cart?.valid_schedule}
            moment={momentFormatted}
            isProducts={isProducts}
            isValidProducts={cart?.valid_products}
            isForceOpenAccordion={isForceOpenCart}
            isCartOnProductsList={isCartOnProductsList}
            handleClearProducts={handleClearProducts}
            handleStoreRedirect={handleStoreRedirect}
            handleCartOpen={handleCartOpen}
            handleChangeStore={handleChangeStore}
          >
            {cart?.products?.length > 0 && cart?.products.map(product => (
              <ProductItemAccordion
                key={product.code}
                isCustomMode={isCustomMode}
                isCartPending={isCartPending}
                isCartProduct
                product={product}
                changeQuantity={changeQuantity}
                getProductMax={getProductMax}
                offsetDisabled={offsetDisabled}
                onDeleteProduct={handleDeleteClick}
                onEditProduct={handleEditProduct}
              />
            ))}
            {(openUpselling || isCustomMode) && (
              <UpsellingPage
                uuid={cart.uuid}
                isCustomMode={isCustomMode}
                businessId={cart.business_id}
                cartProducts={cart.products}
                business={cart.business}
                handleUpsellingPage={handleUpsellingPage}
                openUpselling={openUpselling}
                setOpenUpselling={setOpenUpselling}
                canOpenUpselling={canOpenUpselling}
                setCanOpenUpselling={setCanOpenUpselling}
              />
            )}
            {cart?.valid_products && (
              <OrderBill className='order-bill'>
                <table>
                  <tbody>
                    <tr>
                      <td>{t('SUBTOTAL', 'Subtotal')}</td>
                      <td>{cart.business.tax_type === 1 ? parsePrice((cart?.subtotal + cart?.tax) || 0) : parsePrice(cart?.subtotal || 0)}</td>
                    </tr>
                    {cart?.discount > 0 && cart?.total >= 0 && (
                      <tr>
                        {cart?.discount_type === 1 ? (
                          <td>
                            {t('DISCOUNT', 'Discount')}{' '}
                            <span>{`(${verifyDecimals(cart?.discount_rate, parsePrice)}%)`}</span>
                          </td>
                        ) : (
                          <td>{t('DISCOUNT', 'Discount')}</td>
                        )}
                        <td>- {parsePrice(cart?.discount || 0)}</td>
                      </tr>
                    )}
                    {cart?.subtotal_with_discount > 0 && cart?.discount > 0 && cart?.total >= 0 && (
                      <tr>
                        {cart?.business?.tax_type === 1 ? (
                          <>
                            <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
                            <td>{parsePrice(cart?.subtotal_with_discount + cart?.tax || 0)}</td>
                          </>
                        ) : (
                          <>
                            <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
                            <td>{parsePrice(cart?.subtotal_with_discount || 0)}</td>
                          </>
                        )}
                      </tr>
                    )}
                    {
                      cart.business.tax_type !== 1 && (
                        <tr>
                          <td>
                            {t('TAX', 'Tax')}{' '}
                            <span>{`(${verifyDecimals(cart?.business?.tax, parseNumber)}%)`}</span>
                          </td>
                          <td>{parsePrice(cart?.tax || 0)}</td>
                        </tr>
                      )
                    }
                    {orderState?.options?.type === 1 && cart?.delivery_price > 0 && (
                      <tr>
                        <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                        <td>{parsePrice(cart?.delivery_price)}</td>
                      </tr>
                    )}
                    {cart?.driver_tip > 0 && (
                      <tr>
                        <td>
                          {t('DRIVER_TIP', 'Driver tip')}{' '}
                          {cart?.driver_tip_rate > 0 &&
                          parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
                          !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
                        (
                          <span>{`(${verifyDecimals(cart?.driver_tip_rate, parseNumber)}%)`}</span>
                        )}
                        </td>
                        <td>{parsePrice(cart?.driver_tip)}</td>
                      </tr>
                    )}
                    {cart?.service_fee > 0 && (
                      <tr>
                        <td>
                          {t('SERVICE_FEE', 'Service Fee')}{' '}
                          <span>{`(${verifyDecimals(cart?.business?.service_fee, parseNumber)}%)`}</span>
                        </td>
                        <td>{parsePrice(cart?.service_fee)}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                {isCouponEnabled && !isCartPending && (isCartPopover && !(isCheckout && isCartPopover)) && (
                  <CouponContainer>
                    <CouponControl
                      businessId={businessId}
                      price={cart.total}
                    />
                  </CouponContainer>
                )}
                <table className='total'>
                  <tbody>
                    <tr>
                      <td>{t('TOTAL', 'Total')}</td>
                      <td>{cart?.total >= 1 && parsePrice(cart?.total)}</td>
                    </tr>
                  </tbody>
                </table>
              </OrderBill>
            )}
            {(onClickCheckout || isForceOpenCart) && !isCheckout && cart?.valid_products && !isCustomMode && (
              <CheckoutAction>
                <Button
                  color={(!cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) || !cart?.valid_address) ? 'secundary' : 'primary'}
                  onClick={() => handleBusinessCartRedirect(cart?.business?.slug)}
                  disabled={(openUpselling && !canOpenUpselling) || !cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) || !cart?.valid_address}
                >
                  {!cart?.valid_address ? (
                    t('OUT_OF_COVERAGE', 'Out of Coverage')
                  ) : !cart?.valid_maximum ? (
                  `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
                  ) : (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ? (
                  `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
                  ) : !openUpselling ^ canOpenUpselling ? t('VIEW_ORDER', 'View Order') : t('LOADING', 'Loading')}
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
            padding='0'
            closeOnBackdrop
            onClose={() => setModalIsOpen(false)}
          >
            <ProductForm
              isCartProduct
              productCart={curProduct}
              businessSlug={cart?.business?.slug}
              businessId={businessId}
              categoryId={curProduct?.category_id}
              productId={curProduct?.id}
              onSave={handlerProductAction}
            />
          </Modal>
          <Modal
            width='70%'
            title={t('CHANGE_STORE', 'Change store')}
            open={openChangeStore}
            padding='20px'
            closeOnBackdrop
            modalTitleStyle={{ display: 'flex', justifyContent: 'center' }}
            onClose={() => setOpenChangeStore(false)}
          >
            <CartStoresListing
              pageChangeStore='business_cart'
              cartuuid={cart?.uuid}
              onClose={() => setOpenChangeStore(false)}
            />
          </Modal>
        </CartSticky>
      </CartContainer>
      {isCustomMode && (
        <CustomCartBottom>
          <CartActionsGroupContainer>
            <Button
              color='primaryContrast'
              onClick={() => handleClearProducts()}
            >
              {orderState?.loading ? t('LOADING', 'Loading') : t('CANCEL_ORDER', 'Cancel order')}
            </Button>
            <Button
              color='primaryGradient'
              onClick={() => handleClickCheckout()}
              disabled={(openUpselling && !canOpenUpselling) || !cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) || !cart?.valid_address}
            >
              {!cart?.valid_address ? (
                t('OUT_OF_COVERAGE', 'Out of Coverage')
              ) : !cart?.valid_maximum ? (
              `${t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order')}: ${parsePrice(cart?.maximum)}`
              ) : (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) ? (
              `${t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:')} ${parsePrice(cart?.minimum)}`
              ) : !openUpselling ^ canOpenUpselling ? t('CHECKOUT', 'Checkout') : t('LOADING', 'Loading')}
            </Button>
          </CartActionsGroupContainer>
        </CustomCartBottom>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
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
