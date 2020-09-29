import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { IoIosCash, IoIosCard } from 'react-icons/io'
import { FaStripe, FaCcStripe, FaStripeS } from 'react-icons/fa'
import { GrStripe } from 'react-icons/gr'
import { PaymentOptions as PaymentOptionsController } from 'ordering-components'

import { Modal } from '../Modal'
import { PaymentOptionCash } from '../PaymentOptionCash'

import {
  PaymentMethodsContainer,
  PaymentMethodsList,
  PayCard
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
            <Skeleton key={i} width={130} height={60} style={{ marginLeft: '10px' }} />
          ))
        )}

        {paymethodsList.error && paymethodsList.error.length > 0 && (
          paymethodsList.error.map((e, i) => (
            <p key={i}>ERROR: [{e}]</p>
          )))}

        {!paymethodsList.loading && !paymethodsList.error && paymethodsList.paymethods.length === 0 && (
          <p>No payment methods!</p>
        )}
      </PaymentMethodsList>

      {paymethodSelected?.gateway === 'cash' && (
        <PaymentOptionCash
          orderTotal={orderTotal}
          onChangeData={handlePaymethodDataChange}
        />
      )}

      {stripeOptions.includes(paymethodSelected?.paymethod?.gateway) && paymethodSelected.data?.card && (
        <p>Card: **** **** **** {paymethodSelected.data?.card?.last4} ({paymethodSelected.data?.card?.brand})</p>
      )}

      {/* Stripe direct */}
      {/* <Modal
        className='modal-info'
        open={paymethodSelected?.gateway === 'stripe_direct' && !paymethodData.id}
        onCancel={() => handlePaymethodClick(null)}
        onClose={() => handlePaymethodClick(null)}
        title='Add card'
      >
        <button onClick={() => handlePaymethodClick(null)}>x</button>
        {paymethodSelected?.gateway === 'stripe_direct' && (
          <div>
            <StripeElementsForm
              businessId={props.businessId}
              publicKey={paymethodSelected.credentials.publishable}
              handleSource={handlePaymethodDataChange}
            />
          </div>
        )}
      </Modal> */}

      {/* Stripe */}
      {/* <Modal
        className='modal-info'
        open={['stripe', 'stripe_connect'].includes(paymethodSelected?.gateway) && !paymethodData.id}
        onCancel={() => handlePaymethodClick(null)}
        onClose={() => handlePaymethodClick(null)}
        title='Select a card'
      >
        <button onClick={() => handlePaymethodClick(null)}>x</button>
        {['stripe', 'stripe_connect'].includes(paymethodSelected?.gateway) && (
          <div>
            <PaymentOptionStripe
              paymethod={paymethodSelected}
              businessId={props.businessId}
              publicKey={paymethodSelected.credentials.publishable}
              payType={paymethodsList?.name}
              handleSelectCard={handlePaymethodDataChange}
            />
          </div>
        )}
      </Modal> */}

      {/* Stripe Redirect */}
      {/* <Modal
        className='modal-info'
        open={['stripe_redirect'].includes(paymethodSelected?.gateway) && !paymethodData.type}
        onAccept={() => handlePaymethodClick(null)}
        onClose={() => handlePaymethodClick(null)}
        title='Stripe Redirect'
      >
        <button onClick={() => handlePaymethodClick(null)}>x</button>
        <div>
          <StripeRedirectForm
            businessId={props.businessId}
            user={user}
            currency={props.currency}
            paymethods={[{ name: 'Bancontact', value: 'bancontact' }]}
            handleStripeRedirect={handlePaymethodDataChange}
          />
        </div>
      </Modal> */}
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
