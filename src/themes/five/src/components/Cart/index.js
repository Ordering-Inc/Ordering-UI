import React, { useState, useEffect } from 'react'
import { Cart as CartController, useOrder, useLanguage, useEvent, useUtils, useValidationFields, useConfig, useOrderingTheme, useSite } from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { BusinessItemAccordion } from '../BusinessItemAccordion'
import { useTheme } from 'styled-components'
import { Confirm } from '../Confirm'
import { Modal } from '../Modal'
import { CouponControl } from '../../../../../components/CouponControl'
import { ProductForm } from '../ProductForm'
import { UpsellingPage } from '../UpsellingPage'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { TaxInformation } from '../TaxInformation'
import { TextArea } from '../../styles/Inputs'
import { SpinnerLoader } from '../../../../../components/SpinnerLoader'
import { CartStoresListing } from '../../../../franchise/src/components/CartStoresListing'
import {
  CartContainer,
  OrderBill,
  CheckoutAction,
  CouponContainer,
  CartSticky,
  Divider,
  Spinner,
  CommentContainer,
  IconContainer,
  NoValidProductMessage
} from './styles'
import { verifyDecimals } from '../../../../../utils'
import BsInfoCircle from '@meronex/icons/bs/BsInfoCircle'
import MdCloseCircle from '@meronex/icons/ios/MdCloseCircle'

const CartUI = (props) => {
  const {
    currentCartUuid,
    clearCart,
    isProducts,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    removeProduct,
    onClickCheckout,
    isCheckout,
    useKioskApp,
    isMultiCheckout,
    isCartPending,
    isCartPopover,
    isForceOpenCart,
    isCartOnProductsList,
    handleCartOpen,
    isCustomMode,
    isStore,
    handleChangeComment,
    commentState,
    handleRemoveOfferClick,
    setPreorderBusiness
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [{ parsePrice, parseNumber, parseDate }] = useUtils()
  const [orderingTheme] = useOrderingTheme()
  const [validationFields] = useValidationFields()
  const [{ configs }] = useConfig()
  const [{ site }] = useSite()
  const windowSize = useWindowSize()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [openProduct, setModalIsOpen] = useState(false)
  const [curProduct, setCurProduct] = useState({})
  const [openUpselling, setOpenUpselling] = useState(false)
  const [canOpenUpselling, setCanOpenUpselling] = useState(false)
  const [openTaxModal, setOpenTaxModal] = useState({ open: false, tax: null })
  const [isUpselling, setIsUpselling] = useState(false)
  const [openChangeStore, setOpenChangeStore] = useState(false)

  const businessUrlTemplate = site?.business_url_template || '/store/:business_slug'

  const isCouponEnabled = validationFields?.fields?.checkout?.coupon?.enabled
  const checkoutMultiBusinessEnabled = configs?.checkout_multi_business_enabled?.value === '1'
  const openCarts = (Object.values(orderState?.carts)?.filter(cart => cart?.products && cart?.products?.length && cart?.status !== 2 && cart?.valid_schedule && cart?.valid_products && cart?.valid_address && cart?.valid_maximum && cart?.valid_minimum) || null) || []

  const cart = orderState?.carts?.[`businessId:${props.cart.business_id}`]
  const viewString = isStore ? 'business_view' : 'header'
  const hideCartComments = orderingTheme?.theme?.[viewString]?.components?.cart?.components?.comments?.hidden
  const walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet')
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet')
    }
  }

  const momentFormatted = !orderState?.option?.moment
    ? t('RIGHT_NOW', 'Right Now')
    : parseDate(orderState?.option?.moment, { outputFormat: 'YYYY-MM-DD HH:mm' })

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
    if (checkoutMultiBusinessEnabled && openCarts.length > 1) {
      events.emit('go_to_page', { page: 'multi_checkout' })
    } else {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid: cart.uuid } })
    }
    events.emit('cart_popover_closed')
    onClickCheckout && onClickCheckout()
  }

  const handleStoreRedirect = (slug) => {
    if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
      events.emit('go_to_page', { page: 'business', params: { business_slug: slug } })
    } else {
      events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${slug}` })
    }

    if (windowSize.width <= 768) {
      onClickCheckout && onClickCheckout()
    }
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
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  const handleUpsellingPage = () => {
    setOpenUpselling(false)
    setCanOpenUpselling(false)
    handleClickCheckout()
  }

  const checkOutBtnClick = () => {
    handleClickCheckout()
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

  const getIncludedTaxesDiscounts = () => {
    return cart?.taxes?.filter(tax => tax?.type === 1)?.reduce((carry, tax) => carry + (tax?.summary?.tax_after_discount ?? tax?.summary?.tax), 0)
  }

  const onRemoveOffer = (id) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OFFER', 'Are you sure that you want to delete the offer?'),
      title: t('OFFER', 'Offer'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleRemoveOfferClick(id)
      }
    })
  }

  const handleChangeStore = () => {
    setOpenChangeStore(true)
  }

  useEffect(() => {
    if (isCustomMode) setIsUpselling(true)
  }, [isCustomMode])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <CartContainer className='cart'>
        <CartSticky isCartOnProductsList={isCartOnProductsList}>
          <BusinessItemAccordion
            isCartPending={isCartPending}
            currentCartUuid={currentCartUuid}
            uuid={cart?.uuid}
            isCheckout={isCheckout}
            orderTotal={cart?.total}
            business={cart?.business}
            isClosed={!cart?.valid_schedule}
            moment={momentFormatted}
            isProducts={isProducts}
            isValidProducts={cart?.valid_products}
            isForceOpenAccordion={isForceOpenCart}
            isCartOnProductsList={isCartOnProductsList}
            handleClearProducts={handleClearProducts}
            handleStoreRedirect={handleStoreRedirect}
            handleCartOpen={handleCartOpen}
            isStore={isStore}
            total={cart?.total}
            handleClickCheckout={handleClickCheckout}
            checkoutButtonDisabled={(openUpselling && !canOpenUpselling) || !cart?.valid_maximum || (!cart?.valid_minimum && !(cart?.discount_type === 1 && cart?.discount_rate === 100)) || !cart?.valid_address}
            setPreorderBusiness={setPreorderBusiness}
            handleChangeStore={!useKioskApp && handleChangeStore}
            isMultiCheckout={isMultiCheckout}
          >
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
                isStore={isStore}
              />
            ))}
            {!cart?.valid_products && (
              <NoValidProductMessage>
                {t('REMOVE_NOT_AVAILABLE_CART_PRODUCTS', 'To continue with your checkout, please remove from your cart the products that are not available.')}
              </NoValidProductMessage>
            )}
            {cart?.valid_products && (
              <OrderBill isCheckout={isCheckout}>
                <table className='order-info'>
                  <tbody>
                    <tr>
                      <td>{t('SUBTOTAL', 'Subtotal')}</td>
                      <td>{parsePrice(cart?.subtotal + getIncludedTaxes())}</td>
                    </tr>
                    {cart?.discount > 0 && cart?.total >= 0 && cart?.offers?.length === 0 && (
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
                      cart?.offers?.length > 0 && cart?.offers?.filter(offer => offer?.target === 1)?.map(offer => (
                        <tr key={offer.id}>
                          <td className='icon'>
                            {offer.name}
                            {offer.rate_type === 1 && (
                              <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                            )}
                            <IconContainer>
                              <BsInfoCircle size='20' color={theme.colors.primary} onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_1' })} />
                              <MdCloseCircle size='24' color={theme.colors.primary} onClick={() => onRemoveOffer(offer?.id)} />
                            </IconContainer>
                          </td>
                          <td>
                            - {parsePrice(offer?.summary?.discount)}
                          </td>
                        </tr>
                      ))
                    }
                    {
                      cart?.offers?.filter(offer => offer?.target === 1)?.length > 0 &&
                      cart?.subtotal_with_discount > 0 &&
                      cart?.discount > 0 &&
                      cart?.total >= 0 &&
                      (
                        <tr>
                          <td>{t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')}</td>
                          {cart?.business?.tax_type === 1 ? (
                            <td>{parsePrice(cart?.subtotal_with_discount + getIncludedTaxesDiscounts() ?? 0)}</td>
                          ) : (
                            <td>{parsePrice(cart?.subtotal_with_discount ?? 0)}</td>
                          )}
                        </tr>
                      )
                    }
                    {
                      cart?.taxes?.length > 0 && cart?.taxes?.filter(tax => tax?.type === 2 && tax?.rate !== 0).map(tax => (
                        <tr key={tax?.id}>
                          <td className='icon'>
                            {tax.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                            <span>{`(${verifyDecimals(tax?.rate, parseNumber)}%)`}</span>
                            <IconContainer onClick={() => setOpenTaxModal({ open: true, data: tax, type: 'tax' })}>
                              <BsInfoCircle size='20' color={theme.colors.primary} />
                            </IconContainer>
                          </td>
                          <td>{parsePrice(tax?.summary?.tax_after_discount ?? tax?.summary?.tax ?? 0)}</td>
                        </tr>
                      ))
                    }
                    {
                      cart?.fees?.length > 0 && cart?.fees?.filter(fee => !(fee.fixed === 0 && fee.percentage === 0)).map((fee, i) => (
                        <tr key={fee.id ?? i}>
                          <td className='icon'>
                            {fee.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business')}
                            ({fee?.fixed > 0 && `${parsePrice(fee?.fixed)}${fee.percentage > 0 ? ' + ' : ''}`}{fee.percentage > 0 && `${fee.percentage}%`})
                            <IconContainer onClick={() => setOpenTaxModal({ open: true, data: fee, type: 'fee' })}>
                              <BsInfoCircle size='20' color={theme.colors.primary} />
                            </IconContainer>
                          </td>
                          <td>{parsePrice(fee?.summary?.fixed + (fee?.summary?.percentage_after_discount ?? fee?.summary?.percentage) ?? 0)}</td>
                        </tr>
                      ))
                    }
                    {
                      cart?.offers?.length > 0 && cart?.offers?.filter(offer => offer?.target === 3)?.map(offer => (
                        <tr key={offer.id}>
                          <td className='icon'>
                            {offer.name}
                            {offer?.rate_type === 1 && (
                              <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                            )}
                            <IconContainer>
                              <BsInfoCircle size='20' color={theme.colors.primary} onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_3' })} />
                              <MdCloseCircle size='24' color={theme.colors.primary} onClick={() => onRemoveOffer(offer?.id)} />
                            </IconContainer>
                          </td>
                          <td>
                            - {parsePrice(offer?.summary?.discount)}
                          </td>
                        </tr>
                      ))
                    }
                    {orderState?.options?.type === 1 && cart?.delivery_price > 0 && (
                      <tr>
                        <td>{t('DELIVERY_FEE', 'Delivery Fee')}</td>
                        <td>{parsePrice(cart?.delivery_price)}</td>
                      </tr>
                    )}
                    {
                      cart?.offers?.length > 0 && cart?.offers?.filter(offer => offer?.target === 2)?.map(offer => (
                        <tr key={offer.id}>
                          <td className='icon'>
                            {offer.name}
                            {offer?.rate_type === 1 && (
                              <span>{`(${verifyDecimals(offer?.rate, parsePrice)}%)`}</span>
                            )}
                            <IconContainer>
                              <BsInfoCircle size='20' color={theme.colors.primary} onClick={() => setOpenTaxModal({ open: true, data: offer, type: 'offer_target_2' })} />
                              <MdCloseCircle size='24' color={theme.colors.primary} onClick={() => onRemoveOffer(offer?.id)} />
                            </IconContainer>
                          </td>
                          <td>
                            - {parsePrice(offer?.summary?.discount)}
                          </td>
                        </tr>
                      ))
                    }
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
                      <td>{parsePrice(cart?.total >= 0 ? cart?.total : 0)}</td>
                    </tr>
                  </tbody>
                </table>
                {cart?.status !== 2 && !hideCartComments && (
                  <table className='comments'>
                    <tbody>
                      <tr>
                        <td>{t('COMMENTS', 'Comments')}</td>
                      </tr>
                      <tr>
                        <CommentContainer>
                          <TextArea
                            defaultValue={cart?.comment}
                            placeholder={t('SPECIAL_COMMENTS', 'Special Comments')}
                            onChange={(e) => handleChangeComment(e.target.value)}
                          />
                          {commentState?.loading && (
                            <Spinner>
                              <SpinnerLoader
                                style={{ height: 100 }}
                              />
                            </Spinner>
                          )}
                        </CommentContainer>
                      </tr>
                    </tbody>
                  </table>
                )}

                {cart?.payment_events?.length > 0 && (
                  <div
                    style={{
                      width: '100%',
                      marginTop: 10
                    }}
                  >
                    {cart?.payment_events?.map(event => (
                      <div
                        key={event.id}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 10
                        }}
                      >
                        <span>
                          {walletName[cart?.wallets?.find(wallet => wallet.id === event.wallet_id)?.type]?.name}
                        </span>
                        <span>
                          -{parsePrice(event.amount, { isTruncable: true })}
                        </span>
                      </div>
                    ))}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 10
                      }}
                    >
                      <span
                        style={{ fontWeight: 'bold' }}
                      >
                        {t('TOTAL_TO_PAY', 'Total to pay')}
                      </span>
                      <span
                        style={{ fontWeight: 'bold' }}
                      >
                        {parsePrice(cart?.balance)}
                      </span>
                    </div>
                  </div>
                )}
              </OrderBill>
            )}
            {(onClickCheckout || isForceOpenCart) && !isCheckout && cart?.valid_products && (
              <CheckoutAction>
                <p>{cart?.total >= 1 && parsePrice(cart?.total)}</p>
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
          </BusinessItemAccordion>
          {!isStore && <Divider />}
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
            width='700px'
            open={openProduct}
            padding='0'
            closeOnBackdrop
            onClose={() => setModalIsOpen(false)}
            disableOverflowX
          >
            <ProductForm
              isCartProduct
              productCart={curProduct}
              businessSlug={cart?.business?.slug}
              businessId={cart?.business_id}
              categoryId={curProduct?.category_id}
              productId={curProduct?.id}
              onSave={handlerProductAction}
            />
          </Modal>
          <Modal
            width='70%'
            open={openTaxModal.open}
            padding='20px'
            closeOnBackdrop
            title={`${openTaxModal.data?.name ||
              t('INHERIT_FROM_BUSINESS', 'Inherit from business')} ${openTaxModal.data?.rate_type !== 2 ? `(${typeof openTaxModal.data?.rate === 'number' ? `${openTaxModal.data?.rate}%` : `${parsePrice(openTaxModal.data?.fixed ?? 0)} + ${openTaxModal.data?.percentage}%`})` : ''}  `}
            onClose={() => setOpenTaxModal({ open: false, data: null, type: '' })}
            modalTitleStyle={{ display: 'flex', justifyContent: 'center' }}
          >
            <TaxInformation
              type={openTaxModal.type}
              data={openTaxModal.data}
              products={cart.products}
              useKioskApp={useKioskApp}
            />
          </Modal>
          {(openUpselling || isUpselling) && (
            <UpsellingPage
              useKioskApp={useKioskApp}
              businessId={cart.business_id}
              isCustomMode={isCustomMode}
              cartProducts={cart.products}
              business={cart.business}
              handleUpsellingPage={handleUpsellingPage}
              openUpselling={openUpselling}
              canOpenUpselling={canOpenUpselling}
              setCanOpenUpselling={setCanOpenUpselling}
            />
          )}
        </CartSticky>

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
            pageChangeStore='business'
            cartuuid={cart?.uuid}
            onClose={() => setOpenChangeStore(false)}
          />
        </Modal>

      </CartContainer>
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
