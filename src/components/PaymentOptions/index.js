import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import IosCash from '@meronex/icons/ios/IosCash'
import IosCard from '@meronex/icons/ios/IosCard'
import IosRadioButtonOn from '@meronex/icons/ios/IosRadioButtonOn'
import FaStripe from '@meronex/icons/Fa/FaStripe'
import FaCcStripe from '@meronex/icons/Fa/FaCcStripe'
import FaStripeS from '@meronex/icons/Fa/FaStripeS'
import GrStripe from '@meronex/icons/gr/GrStripe'
import { PaymentOptions as PaymentOptionsController, useLanguage } from 'ordering-components'

import { Modal } from '../Modal'
import { PaymentOptionCash } from '../PaymentOptionCash'
import { PaymentOptionStripe } from '../PaymentOptionStripe'
import { StripeElementsForm } from '../StripeElementsForm'
import { StripeRedirectForm } from '../StripeRedirectForm'

import { getIconCard } from '../../utils'

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
      return <IosCash />
    case 22:
      return <FaStripe />
    case 28:
      return <FaCcStripe />
    case 31:
      return <FaStripeS />
    case 32:
      return <GrStripe />
    default:
      return <IosCard />
  }
}

const PaymentOptionsUI = (props) => {
  const {
    orderTotal,
    paymethodSelected,
    paymethodData,
    paymethodsList,
    handlePaymethodClick,
    handlePaymethodDataChange
  } = props
  const [, t] = useLanguage()

  useEffect(() => {
    if (paymethodsList.paymethods.length === 1) {
      handlePaymethodClick && handlePaymethodClick(paymethodsList.paymethods[0])
    }
  }, [paymethodsList.paymethods])

  return (
    <PaymentMethodsContainer>
      <PaymentMethodsList className='payments-list'>
        {paymethodsList.paymethods.length > 0 && (
          paymethodsList.paymethods.sort((a, b) => a.id - b.id).map(paymethod => (
            <PayCard
              key={paymethod.id}
              className={`${paymethodSelected?.id === paymethod.id ? 'active' : ''}`}
              onClick={() => handlePaymethodClick(paymethod)}
            >
              {getPayIcon(paymethod.id)}
              <p>
                {paymethod.name}
              </p>
            </PayCard>
          ))
        )}

        {paymethodsList.loading && (
          [...Array(6).keys()].map(i => (
            <PayCard key={i} isSkeleton>
              <Skeleton key={i} width={100} height={60} style={{ marginLeft: '10px' }} />
            </PayCard>
          ))
        )}

        {paymethodsList.error && paymethodsList.error.length > 0 && (
          paymethodsList.error.map((e, i) => (
            <p key={i}>{t('ERROR', 'ERROR')}: [{e}]</p>
          )))}

        {!paymethodsList.loading && !paymethodsList.error && paymethodsList.paymethods.length === 0 && (
          <p>{t('NO_PAYMENT_METHODS', 'No payment methods!')}</p>
        )}
      </PaymentMethodsList>

      {paymethodSelected?.gateway === 'cash' && (
        <PaymentOptionCash
          orderTotal={orderTotal}
          onChangeData={handlePaymethodDataChange}
          setErrorCash={props.setErrorCash}
        />
      )}

      {stripeOptions.includes(paymethodSelected?.gateway) && paymethodData?.card && (
        <PayCardSelected>
          <CardItemContent>
            <span className='checks'>
              <IosRadioButtonOn />
            </span>
            <span className='brand'>
              {getIconCard(paymethodData?.card?.brand)}
            </span>
            <span>
              XXXX-XXXX-XXXX-{paymethodData?.card?.last4}
            </span>
          </CardItemContent>
        </PayCardSelected>
      )}

      {/* Stripe */}
      <Modal
        className='modal-info'
        open={paymethodSelected?.gateway === 'stripe' && !paymethodData.id}
        onClose={() => handlePaymethodClick(null)}
        title='Select a card'
      >
        {paymethodSelected?.gateway === 'stripe' && (
          <PaymentOptionStripe
            paymethod={paymethodSelected}
            businessId={props.businessId}
            publicKey={paymethodSelected.credentials.publishable}
            payType={paymethodsList?.name}
            onSelectCard={handlePaymethodDataChange}
            onCancel={() => handlePaymethodClick(null)}
          />
        )}
      </Modal>

      {/* Stripe Connect */}
      <Modal
        className='modal-info'
        open={paymethodSelected?.gateway === 'stripe_connect' && !paymethodData.id}
        onClose={() => handlePaymethodClick(null)}
        title='Select a card'
      >
        {paymethodSelected?.gateway === 'stripe_connect' && (
          <PaymentOptionStripe
            paymethod={paymethodSelected}
            businessId={props.businessId}
            publicKey={paymethodSelected.credentials.stripe.publishable}
            clientSecret={paymethodSelected.credentials.publishable}
            payType={paymethodsList?.name}
            onSelectCard={handlePaymethodDataChange}
            onCancel={() => handlePaymethodClick(null)}
          />
        )}
      </Modal>

      {/* Stripe direct */}
      <Modal
        className='modal-info'
        open={paymethodSelected?.gateway === 'stripe_direct' && !paymethodData.id}
        onClose={() => handlePaymethodClick(null)}
        title='Add card'
      >
        {paymethodSelected?.gateway === 'stripe_direct' && (
          <StripeElementsForm
            businessId={props.businessId}
            publicKey={paymethodSelected.credentials.publishable}
            handleSource={handlePaymethodDataChange}
            onCancel={() => handlePaymethodClick(null)}
          />
        )}
      </Modal>

      {/* Stripe Redirect */}
      <Modal
        title='Stripe Redirect'
        className='modal-info'
        open={['stripe_redirect'].includes(paymethodSelected?.gateway) && !paymethodData.type}
        onClose={() => handlePaymethodClick(null)}
      >
        <StripeRedirectForm
          businessId={props.businessId}
          currency={props.currency}
          paymethods={stripeRedirectOptions}
          handleStripeRedirect={handlePaymethodDataChange}
        />
      </Modal>
    </PaymentMethodsContainer>
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
