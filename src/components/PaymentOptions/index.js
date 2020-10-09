import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { IoIosCash, IoIosCard, IoIosRadioButtonOn } from 'react-icons/io'
import { FaStripe, FaCcStripe, FaStripeS } from 'react-icons/fa'
import { GrStripe } from 'react-icons/gr'
import { PaymentOptions as PaymentOptionsController, getLanguage } from 'ordering-components'

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

const getPayIcon = (method) => {
  switch (method) {
    case 1:
      return <IoIosCash />
    case 22:
      return <FaStripe />
    case 28:
      return <FaCcStripe />
    case 31:
      return <FaStripeS />
    case 32:
      return <GrStripe />
    default:
      return <IoIosCard />
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
  const [, t] = getLanguage()

  return (
    <PaymentMethodsContainer>
      <PaymentMethodsList>
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
        />
      )}

      {stripeOptions.includes(paymethodSelected?.gateway) && paymethodData?.card && (
        <PayCardSelected>
          <CardItemContent>
            <span className='checks'>
              <IoIosRadioButtonOn />
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
        open={['stripe', 'stripe_connect'].includes(paymethodSelected?.gateway) && !paymethodData.id}
        onClose={() => handlePaymethodClick(null)}
        title='Select a card'
      >
        {['stripe', 'stripe_connect'].includes(paymethodSelected?.gateway) && (
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
        className='modal-info'
        open={['stripe_redirect'].includes(paymethodSelected?.gateway) && !paymethodData.type}
        onClose={() => handlePaymethodClick(null)}
        title='Stripe Redirect'
      >
        <StripeRedirectForm
          businessId={props.businessId}
          currency={props.currency}
          paymethods={[{ name: 'Bancontact', value: 'bancontact' }]}
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
