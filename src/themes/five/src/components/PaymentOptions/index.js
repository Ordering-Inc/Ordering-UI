import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import IosRadioButtonOn from '@meronex/icons/ios/IosRadioButtonOn'
import BilStripe from '@meronex/icons/bi/BilStripe'
import FaCcStripe from '@meronex/icons/fa/FaCcStripe'
import FaStripeS from '@meronex/icons/fa/FaStripeS'
import GrStripe from '@meronex/icons/gr/GrStripe'
import EnPaypal from '@meronex/icons/en/EnPaypal'
import { Cash, CreditCard } from 'react-bootstrap-icons'
import {
  PaymentOptions as PaymentOptionsController,
  useLanguage,
  useOrder,
  useSession,
  useConfig
} from 'ordering-components'

import { Modal } from '../Modal'
import { Alert } from '../Confirm'
import { PaymentOptionCash } from '../PaymentOptionCash'
import { PaymentOptionStripe } from '../PaymentOptionStripe'
import { PaymentOptionPaypal } from '../../../../../components/PaymentOptionPaypal'
import { StripeElementsForm } from '../StripeElementsForm'
import { StripeRedirectForm } from '../StripeRedirectForm'
import { NotFoundSource } from '../NotFoundSource'

import { getIconCard } from '../../../../../utils'
import { PaymentOptionSquare } from '../../../../../components/PaymentOptionSquare'
import {
  PaymentMethodsContainer,
  PaymentMethodsList,
  PayCard,
  PayCardSelected,
  CardItemContent
} from './styles'

const stripeOptions = ['stripe_direct', 'stripe', 'stripe_connect']
const stripeRedirectOptions = [
  { name: 'Bancontact', value: 'bancontact' },
  { name: 'Alipay', value: 'alipay' },
  { name: 'Giropay', value: 'giropay' },
  { name: 'iDEAL', value: 'ideal' }
]

const getPayIcon = (method) => {
  switch (method) {
    case 1:
      return <Cash />
    case 22:
      return <BilStripe />
    case 28:
      return <FaCcStripe />
    case 31:
      return <FaStripeS />
    case 32:
      return <GrStripe />
    case 3:
      return <EnPaypal />
    case 2:
      return <CreditCard2 />
    default:
      return <CreditCard />
  }
}

const CreditCard2 = () => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 10.8095C0.214008 10.5448 0.518751 10.3843 0.79596 10.1926C2.18389 9.23434 3.58245 8.29464 4.92594 7.28367C5.36397 6.95666 5.73379 6.55718 6.19497 6.25772C6.69996 5.93251 7.23873 5.8313 7.82194 6.01516C7.97274 6.06308 8.04345 6.02055 8.12856 5.91035C8.59475 5.30545 9.21362 5 10.0121 5C13.8989 5.00679 17.7852 5.00799 21.6711 5.00359C22.8876 4.98563 23.9664 5.91395 23.9983 7.09621C23.9983 9.4236 24.0021 11.751 23.9983 14.0784C23.9991 14.3409 23.9457 14.6009 23.8413 14.8437C23.7369 15.0864 23.5835 15.307 23.3899 15.493C23.1963 15.6789 22.9663 15.8264 22.713 15.9271C22.4597 16.0279 22.1882 16.0798 21.9139 16.08C20.6186 16.0883 19.3233 16.0883 18.028 16.08C17.8221 16.08 17.7333 16.1177 17.7001 16.3393C17.5881 17.0999 17.3572 17.8204 16.7214 18.3469C16.132 18.8344 15.4699 18.9991 14.7253 18.7062C14.5895 18.6523 14.5269 18.7122 14.4443 18.7853C14.0194 19.1644 13.5351 19.4291 12.9356 19.3986C12.3192 19.3668 11.7692 19.1805 11.4338 18.6349C11.3556 18.508 11.2899 18.5187 11.1754 18.5876C10.4457 19.056 9.08847 19.0919 8.63292 18.26C8.5597 18.1288 8.49212 18.0995 8.34069 18.157C7.62921 18.4265 6.88393 18.5223 6.12301 18.5559C4.82269 18.6158 3.52363 18.693 2.22393 18.7631C1.67139 18.793 1.11885 18.8296 0.565683 18.8493C0.301614 18.8583 0.0988693 18.7457 0.00250302 18.4942V18.2247C0.117642 17.9414 0.371698 17.8791 0.646405 17.8653C2.67698 17.7396 4.71381 17.6695 6.74063 17.5347C8.72052 17.4245 9.43138 16.1189 10.7761 14.9941C10.8634 14.9199 10.9642 14.8617 11.0734 14.8222C11.3806 14.7138 11.6891 14.6066 11.9901 14.4832C13.0983 14.0101 14.9311 13.2746 14.8379 11.8827C14.7415 10.7801 13.5163 11.064 12.7917 11.4036C11.0039 12.1864 9.23552 13.0123 7.44023 13.7801C7.16114 13.8939 6.87705 13.7861 6.76379 13.5525C6.65052 13.319 6.74376 13.0686 7.00282 12.9213C7.1302 12.8492 7.26452 12.789 7.40393 12.7416C7.58791 12.6787 7.64235 12.5619 7.64109 12.3822C7.64485 10.6538 7.61419 8.9235 7.65361 7.19623C7.66425 6.99679 7.58165 6.94887 7.4152 6.92013C7.07291 6.86023 6.80634 7.00757 6.56354 7.20761C6.23753 7.47532 5.93153 7.7664 5.59488 8.02034C4.06365 9.16726 2.47111 10.2363 0.888572 11.3168C0.509365 11.5755 0.267197 11.5282 0 11.1688V10.8095ZM13.1133 15.1109H21.7287C22.5522 15.1109 22.9871 14.6917 22.9884 13.9077C22.9884 12.4403 22.9884 10.9732 22.9884 9.50625C22.9884 9.19781 22.9884 9.19661 22.6636 9.19661C18.0973 9.19661 13.5311 9.19661 8.96519 9.19661C8.79186 9.19661 8.66483 9.2026 8.66796 9.42779C8.67797 10.2663 8.67422 11.1048 8.66796 11.9432C8.66796 12.1229 8.72303 12.1517 8.8876 12.0774C9.39509 11.8468 9.9032 11.6168 10.4182 11.4018C11.2198 11.0676 11.977 10.6418 12.7961 10.3519C13.3223 10.1657 13.8649 10.0429 14.423 10.1507C15.3879 10.3357 16.0193 11.3449 15.8316 12.3553C15.5944 13.7472 14.276 14.4569 13.1133 15.1133V15.1109ZM15.8041 7.29445H22.6398C23.0059 7.29445 23.0472 7.24294 22.9577 6.90276C22.81 6.34397 22.2838 5.97144 21.6286 5.97144C17.7598 5.97144 13.8907 5.97144 10.0215 5.97144C9.37756 5.97144 8.88635 6.33079 8.70738 6.92432C8.61352 7.23875 8.65669 7.29505 8.99398 7.29505L15.8041 7.29445ZM13.2347 16.0806H12.8843C12.3799 16.0806 12.368 16.0806 12.3048 16.5513C12.2529 16.9424 12.1678 17.3299 12.1866 17.73C12.2054 18.13 12.3674 18.3079 12.7685 18.3978C13.2184 18.4984 13.5332 18.2858 13.8192 18.0025C13.8993 17.9234 14.0175 17.8438 14.0069 17.7282C13.9575 17.2329 14.0069 16.7448 14.0826 16.2566C14.1014 16.1339 14.0451 16.077 13.9124 16.077C13.6884 16.0865 13.4625 16.0836 13.2372 16.083L13.2347 16.0806ZM15.005 17.1987C14.9997 17.2959 14.9997 17.3932 15.005 17.4904C15.0388 17.7899 15.1301 17.8647 15.443 17.8599C15.8366 17.8539 16.0919 17.63 16.299 17.3461C16.5375 17.0197 16.6182 16.6358 16.6958 16.2536C16.7221 16.1237 16.6582 16.0788 16.5287 16.08C16.1232 16.083 15.7152 16.0841 15.3122 16.08C15.1727 16.08 15.1107 16.1428 15.1013 16.2644C15.0807 16.5789 14.9918 16.8855 15.0075 17.2011L15.005 17.1987ZM9.98642 17.9426C10.487 17.9426 11.1403 17.5168 11.2079 17.1454C11.2586 16.8657 11.2861 16.5824 11.318 16.3004C11.3255 16.2309 11.3531 16.1381 11.2605 16.1009C11.2177 16.0817 11.1704 16.0738 11.1233 16.0781C11.0763 16.0824 11.0314 16.0988 10.9933 16.1255C10.9393 16.1686 10.8881 16.2148 10.84 16.2638C10.4501 16.6298 10.0953 17.0304 9.6748 17.3664C9.56091 17.4575 9.4245 17.5347 9.48144 17.7126C9.53838 17.8905 9.70045 17.9067 9.85251 17.9354C9.89687 17.9413 9.94166 17.9437 9.98642 17.9426V17.9426Z' fill='#DEE2E6' />
    </svg>
  )
}

const paypalBtnStyle = {
  color: 'gold',
  shape: 'pill',
  label: 'paypal',
  size: 'responsive'
}

const PaymentOptionsUI = (props) => {
  const {
    cart,
    errorCash,
    isLoading,
    isDisabled,
    useKioskApp,
    paymethodData,
    paymethodsList,
    setPaymethodData,
    handleOrderRedirect,
    handlePaymethodClick,
    handlePaymethodDataChange,
    isCustomerMode,
    isOpenMethod,
    onPaymentChange,
    setCreateOrder,
    onPlaceOrderClick,
    handlePlaceOrder,
    paymethods,
    hasCateringProducts,
    isHideCash
  } = props
  const [, t] = useLanguage()
  const [orderState, { applyCoupon, removeOffer }] = useOrder()
  const [{ configs }] = useConfig()

  const [{ token }] = useSession()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const paymethodSelected = props.paySelected || props.paymethodSelected

  const methodsPay = ['google_pay', 'apple_pay']

  const stripeDirectMethods = ['stripe_direct', ...methodsPay]

  const includeKioskPaymethods = ['cash', 'card_delivery']

  const list = paymethodsList ? paymethodsList?.paymethods : paymethods?.map(pay => pay.paymethod)

  const popupMethods = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect', 'paypal', 'square', 'google_pay', 'apple_pay']

  const excludePaymethods = isHideCash ? ['cash'] : [''] // hasCateringProducts?.result ? ['cash', 'card_delivery', 'wow_rewards'] : ['']

  const supportedMethods = list?.filter(p => useKioskApp ? includeKioskPaymethods.includes(p.gateway) : (isHideCash || hasCateringProducts?.result) ? !excludePaymethods.includes(p.gateway) : p)

  const handlePaymentMethodClick = (paymethod) => {
    if (cart?.balance > 0) {
      const isPopupMethod = popupMethods.includes(paymethod?.gateway)
      handlePaymethodClick(paymethod, isPopupMethod)
      return
    }
    setAlertState({
      open: true,
      content: [t('CART_BALANCE_ZERO', 'Sorry, the amount to pay is equal to zero and it is not necessary to select a payment method')]
    })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (supportedMethods?.length === 1 && !paymethodSelected && !popupMethods.includes(supportedMethods[0]?.gateway)) {
      handlePaymethodClick && handlePaymethodClick(supportedMethods[0])
    }
  }, [supportedMethods])

  useEffect(() => {
    if (paymethodSelected?.gateway !== 'cash' && errorCash) {
      props.setErrorCash(false)
    }
  }, [paymethodSelected])

  useEffect(() => {
    if (props.paySelected && props.paySelected?.data) {
      setPaymethodData(props.paySelected?.data)
      const isRequiredModal = ['paypal']
      if (isRequiredModal.includes(paymethodSelected?.gateway)) {
        handlePaymentMethodClick(null)
      }
    }
  }, [props.paySelected])

  useEffect(() => {
    if (methodsPay.includes(paymethodSelected?.gateway) && paymethodData?.id && paymethodSelected?.data?.card) {
      handlePlaceOrder()
    }

    if ((paymethodSelected?.gateway !== 'openpay' || hasCateringProducts?.result) && cart?.offers.length > 0) {
      if (!configs?.advanced_offers_module?.value) {
        applyCoupon({
          business_id: props?.businessId,
          coupon: null
        })
      } else {
        removeOffer({
          business_id: props?.businessId,
          offer_id: cart?.offers[0].id
        })
      }
    }
  }, [paymethodData, paymethodSelected])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <PaymentMethodsContainer>
        <PaymentMethodsList className='payments-list'>
          {!(paymethodsList.loading || isLoading) &&
            supportedMethods.length > 0 && (
              supportedMethods.sort((a, b) => a.id - b.id).map(paymethod => (
                <React.Fragment key={paymethod.id}>
                  {
                    (!isCustomerMode || (isCustomerMode && (paymethod.gateway === 'card_delivery' || paymethod.gateway === 'cash' || paymethod.gateway === '100_coupon'))) && (
                      <PayCard
                        isDisabled={isDisabled}
                        className={`card ${paymethodSelected?.id === paymethod.id ? 'active' : ''}`}
                        onClick={() => handlePaymentMethodClick(paymethod)}
                      >
                        <div>
                          {getPayIcon(paymethod.id)}
                        </div>
                        <p>
                          {t(paymethod.gateway.toUpperCase(), paymethod.name)}
                        </p>
                      </PayCard>
                    )
                  }
                </React.Fragment>
              ))
            )}

          {(paymethodsList.loading || isLoading) && (
            [...Array(5).keys()].map(i => (
              <PayCard key={i} isSkeleton>
                <Skeleton key={i} width={100} height={60} style={{ marginLeft: '10px' }} />
              </PayCard>
            ))
          )}

          {paymethodsList.error && paymethodsList.error.length > 0 && (
            <NotFoundSource
              content={paymethodsList?.error[0]?.message || paymethodsList?.error[0]}
            />
          )}

          {!(paymethodsList.loading || isLoading) &&
            !paymethodsList.error &&
            (!paymethodsList?.paymethods || supportedMethods.length === 0) &&
            (
              <p>{t('NO_PAYMENT_METHODS', 'No payment methods!')}</p>
            )}
        </PaymentMethodsList>

        {paymethodSelected?.gateway === 'cash' && (
          <PaymentOptionCash
            data={paymethodSelected?.data}
            orderTotal={cart?.balance ?? cart?.total}
            defaultValue={paymethodSelected?.data?.cash}
            onChangeData={handlePaymethodDataChange}
            setErrorCash={props.setErrorCash}
          />
        )}

        {isOpenMethod?.paymethod?.gateway === 'stripe' && isOpenMethod.paymethod?.gateway === 'stripe' && (
          <PaymentOptionStripe
            paymethod={isOpenMethod?.paymethod}
            businessId={props.businessId}
            publicKey={isOpenMethod?.paymethod?.credentials?.publishable}
            onPaymentChange={onPaymentChange}
            payType={isOpenMethod?.paymethod?.name}
            onSelectCard={handlePaymethodDataChange}
            onCancel={() => handlePaymethodClick(null)}
          />
        )}

        {stripeOptions.includes(paymethodSelected?.gateway) && paymethodData?.card && !isCustomerMode && (
          <PayCardSelected>
            <CardItemContent>
              <span className='checks'>
                <IosRadioButtonOn />
              </span>
              <span className='brand'>
                <img src={getIconCard(paymethodData?.card?.brand)} alt={paymethodData?.card?.brand} />
              </span>
              <span>
                XXXX-XXXX-XXXX-{paymethodData?.card?.last4}
              </span>
            </CardItemContent>
          </PayCardSelected>
        )}

        {/* Paypal */}
        <Modal
          className='modal-info'
          open={isOpenMethod?.paymethod?.gateway === 'paypal' && !paymethodData.id}
          onClose={() => handlePaymethodClick(null)}
          title={t('PAY_WITH_PAYPAL', 'Pay with PayPal')}
        >
          {isOpenMethod?.paymethod?.gateway === 'paypal' && (
            <PaymentOptionPaypal
              clientId={isOpenMethod?.paymethod?.credentials?.client_id}
              body={{
                paymethod_id: isOpenMethod?.paymethod?.id,
                amount: cart?.balance ?? cart.total,
                delivery_zone_id: cart.delivery_zone_id,
                cartUuid: cart.uuid
              }}
              btnStyle={paypalBtnStyle}
              noAuthMessage={
                !token
                  ? t('NEED_LOGIN_TO_USE', 'Sorry, you need to login to use this method')
                  : null
              }
              handlerChangePaypal={(uuid) => handleOrderRedirect && handleOrderRedirect(uuid)}
            />
          )}
        </Modal>

        {/* Stripe Connect */}
        <Modal
          title={t('SELECT_A_CARD', 'Select a card')}
          open={isOpenMethod?.paymethod?.gateway === 'stripe_connect' && !paymethodData.id}
          className='modal-info'
          onClose={() => handlePaymethodClick(null)}
        >
          {isOpenMethod?.paymethod?.gateway === 'stripe_connect' && (
            <PaymentOptionStripe
              paymethod={isOpenMethod?.paymethod}
              businessId={props.businessId}
              publicKey={isOpenMethod?.paymethod?.credentials?.stripe?.publishable}
              clientSecret={isOpenMethod?.paymethod?.credentials?.publishable}
              payType={paymethodsList?.name}
              onSelectCard={handlePaymethodDataChange}
              onCancel={() => handlePaymethodClick(null)}
            />
          )}
        </Modal>

        {/* Stripe direct, Google pay, Apple pay */}
        <Modal
          title={t('ADD_CARD', 'Add card')}
          open={stripeDirectMethods?.includes(isOpenMethod?.paymethod?.gateway) && !paymethodData.id}
          className='modal-info'
          onClose={() => handlePaymethodClick(null)}
        >
          {stripeDirectMethods?.includes(isOpenMethod?.paymethod?.gateway) && (
            <StripeElementsForm
              methodsPay={methodsPay}
              paymethod={isOpenMethod?.paymethod?.gateway}
              businessId={props.businessId}
              cart={cart}
              publicKey={isOpenMethod?.paymethod?.credentials?.publishable || isOpenMethod?.paymethod?.credentials?.publishable_key}
              handleSource={handlePaymethodDataChange}
              onCancel={() => handlePaymethodClick(null)}
              handlePlaceOrder={handlePlaceOrder}
            />
          )}
        </Modal>

        {/* Stripe Redirect */}
        <Modal
          title={t('STRIPE_REDIRECT', 'Stripe Redirect')}
          open={isOpenMethod?.paymethod?.gateway === 'stripe_redirect' && !paymethodData.type}
          className='modal-info'
          onClose={() => handlePaymethodClick(null)}
        >
          <StripeRedirectForm
            businessId={props.businessId}
            currency={props.currency}
            paymethods={stripeRedirectOptions}
            handleStripeRedirect={handlePaymethodDataChange}
          />
        </Modal>
        <Modal
          title={t('SQUARE', 'Square')}
          open={isOpenMethod?.paymethod?.gateway === 'square' && !paymethodData.token}
          onClose={() => handlePaymethodClick(null)}
        >
          <PaymentOptionSquare
            businessId={props.businessId}
            cartTotal={cart?.total}
            data={isOpenMethod?.paymethod?.credentials}
            body={{
              paymethod_id: isOpenMethod?.paymethod?.id,
              amount: cart.total,
              delivery_zone_id: cart.delivery_zone_id,
              cartUuid: cart.uuid
            }}
            onPlaceOrderClick={onPlaceOrderClick}
            setCreateOrder={setCreateOrder}
          />
        </Modal>
        <Alert
          title={t('PAYMENT_METHODS', 'Payment methods')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </PaymentMethodsContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const PaymentOptions = (props) => {
  const paymentOptions = {
    ...props,
    UIComponent: PaymentOptionsUI
  }
  return (
    <PaymentOptionsController {...paymentOptions} />
  )
}
