import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import {
  Cart as CartController,
  useOrder,
  useLanguage,
  useEvent,
  useUtils,
  useValidationFields,
  useConfig
} from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { ProductItemAccordion } from '../ProductItemAccordion'
import MdClose from '@meronex/icons/md/MdClose'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'

import { Confirm } from '../Confirm'
import { Modal } from '../Modal'
import { CouponControl } from '../CouponControl'
import { ProductForm } from '../ProductForm'
import { UpsellingPage } from '../UpsellingPage'
import { TaxInformation } from '../TaxInformation'

import {
  CartContainer,
  OrderBill,
  CheckoutAction,
  CouponContainer,
  CartSticky,
  Divider,
  UpsellingPageTitleWrapper,
  Title,
  Container,
  ModalIcon,
  ContainerTop,
  Exclamation
} from './styles'
import { verifyDecimals } from '../../../../../utils'

const CartUI = (props) => {
  const {
    cart,
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
    isCustomMode,
    handleGoBack
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [{ parsePrice, parseNumber }] = useUtils()
  const [validationFields] = useValidationFields()
  const [{ configs }] = useConfig()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState({})
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [isUpselling, setIsUpselling] = useState(false)
  const [openTaxModal, setOpenTaxModal] = useState({ open: false, data: null })

  const isCouponEnabled = validationFields?.fields?.checkout?.coupon?.enabled

  const isIOS = window.navigator.userAgent.includes('iPhone')

  const handleDeleteClick = (product) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: () => {
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

  // const handleClearProducts = () => {
  //   setConfirm({
  //     open: true,
  //     content: t('QUESTION_DELETE_PRODUCTS', 'Are you sure that you want to delete all products?'),
  //     handleOnAccept: () => {
  //       clearCart(cart?.uuid)
  //       setConfirm({ ...confirm, open: false })
  //     }
  //   })
  // }

  const handleUpsellingPage = () => {
    setOpenUpselling(false)
    setCanOpenUpselling(false)
    handleClickCheckout()
  }

  const checkOutBtnClick = () => {
    if (isCustomMode) handleClickCheckout()
    else setOpenUpselling(true)
  }

  const getIncludedTaxes = () => {
    if (cart?.taxes === null) {
      return cart.business.tax_type === 1 ? cart?.tax : 0
    } else {
      return cart?.taxes.reduce((taxIncluded, tax) => {
        return taxIncluded + (tax.type === 1 ? tax.summary?.tax : 0)
      }, 0)
    }
  }

  useEffect(() => {
    if (isCustomMode) setIsUpselling(true)
  }, [isCustomMode])

  return (
    <Container isCheckout={isCheckout}>
      {!isCheckout && (
        <>
          <ContainerTop>
            <ModalIcon>
              <BsArrowLeft size={20} color={theme.colors.arrowColor} onClick={() => handleGoBack()} />
            </ModalIcon>
            <Title>{t('YOUR_CART', 'Your cart')}</Title>
          </ContainerTop>
        </>
      )}
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <CartContainer className='cart' isCheckout={isCheckout}>
        <CartSticky isCartOnProductsList={isCartOnProductsList} isCheckout={isCheckout}>
          <div>
            {cart?.products?.length > 0 && cart?.products.map(product => (
              <ProductItemAccordion
                key={product.code}
                isCartPending={isCartPending}
                isCartProduct
                product={product}
                isCheckout={isCheckout}
                changeQuantity={changeQuantity}
                getProductMax={getProductMax}
                offsetDisabled={offsetDisabled}
                onDeleteProduct={handleDeleteClick}
                onEditProduct={handleEditProduct}
              />
            ))}
            {cart?.valid_products && (
              <OrderBill isCheckout={isCheckout}>
                <table>
                  <tbody>
                    <tr>
                      <td>{t('SUBTOTAL', 'Subtotal')}</td>
                      <td>{parsePrice(cart?.subtotal + getIncludedTaxes())}</td>
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
                    {
                      cart.taxes?.length > 0 && cart.taxes.filter(tax => tax.type === 2 && tax?.rate !== 0).map(tax => (
                        <tr key={tax.id}>
                          <td>
                            {tax.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                            <span>{`(${verifyDecimals(tax?.rate, parseNumber)}%)`}</span>
                            <Exclamation onClick={() => setOpenTaxModal({ open: true, data: tax })}>
                              <BsInfoCircle size='20' color={theme.colors.primary} />
                            </Exclamation>
                          </td>
                          <td>{parsePrice(tax?.summary?.tax || 0)}</td>
                        </tr>
                      ))
                    }
                    {
                      cart?.fees?.length > 0 && cart?.fees?.filter(fee => !(fee.fixed === 0 && fee.percentage === 0))?.map(fee => (
                        <tr key={fee.id}>
                          <td>
                            {fee.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                            ({parsePrice(fee?.fixed)} + {fee.percentage}%)
                            <Exclamation onClick={() => setOpenTaxModal({ open: true, data: fee })}>
                              <BsInfoCircle size='20' color={theme.colors.primary} />
                            </Exclamation>
                          </td>
                          <td>{parsePrice(fee?.summary?.fixed + fee?.summary?.percentage || 0)}</td>
                        </tr>
                      ))
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
                  </tbody>
                </table>
                {isCouponEnabled && !isCartPending && ((isCheckout || isCartPopover) && !(isCheckout && isCartPopover)) && (
                  <CouponContainer>
                    <CouponControl
                      businessId={cart.business_id}
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
            {!isCheckout && (
              <Divider />
            )}

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

            {(openUpselling || isUpselling) && (
              <>
                <UpsellingPageTitleWrapper>
                  <p>{t('DO_YOU_WANT_SOMETHING_ELSE', 'Do you want something else?')}</p>
                  <MdClose size={26} onClick={() => setIsUpselling(false)} />
                </UpsellingPageTitleWrapper>
                <UpsellingPage
                  setIsUpselling={setIsUpselling}
                  businessId={cart.business_id}
                  isCustomMode={isCustomMode}
                  cartProducts={cart.products}
                  business={cart.business}
                  handleUpsellingPage={handleUpsellingPage}
                  openUpselling={openUpselling}
                  canOpenUpselling={canOpenUpselling}
                  setCanOpenUpselling={setCanOpenUpselling}
                />
              </>
            )}
          </div>
          {(onClickCheckout || isForceOpenCart) && !isCheckout && cart?.valid_products && (
            <CheckoutAction isIOS={isIOS}>
              <Button
                color={(!cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) || !cart?.valid_address) ? 'secundary' : 'primary'}
                onClick={checkOutBtnClick}
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
            </CheckoutAction>
          )}
        </CartSticky>
        <Modal
          width='60%'
          open={openProduct}
          closeOnBackdrop
          onClose={() => setModalIsOpen(false)}
          hideCloseDefault
          padding='20px 0 0 0'
          customModal
          isProductForm
        >
          <ProductForm
            isCartProduct
            productCart={curProduct}
            businessSlug={cart?.business?.slug}
            businessId={cart?.business_id}
            categoryId={curProduct?.category_id}
            productId={curProduct?.id}
            onSave={handlerProductAction}
            onClose={() => setModalIsOpen(false)}
            productName={curProduct.name}
          />
        </Modal>
        <Modal
          width='70%'
          open={openTaxModal.open}
          padding='20px'
          closeOnBackdrop
          title={`${openTaxModal.data?.name ||
            t('INHERIT_FROM_BUSINESS', 'Inherit from business')} (${typeof openTaxModal.data?.rate === 'number' ? `${openTaxModal.data?.rate}%` : `${parsePrice(openTaxModal.data?.fixed ?? 0)} + ${openTaxModal.data?.percentage}%`}) `}
          onClose={() => setOpenTaxModal({ open: false, tax: null })}
          modalTitleStyle={{ display: 'flex', justifyContent: 'center' }}
        >
          <TaxInformation data={openTaxModal.data} products={cart.products} />
        </Modal>
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
      </CartContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </Container>
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
