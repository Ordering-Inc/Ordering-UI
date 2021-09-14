import React, {useState, useEffect} from 'react';
import {useSession, useApi} from 'ordering-components'
// import { loadStripe } from "@stripe/stripe-js";
import {
  // PaymentRequestButtonElement, 
  useStripe
} from '@stripe/react-stripe-js';
// import {
//   CardElement,
//   useElements,
// } from "@stripe/react-stripe-js";

import {PayCard} from '../PaymentOptions/styles'

export const GooglePay = (props) => {
  const {handlePaymentMethodClick, isDisabled, isSelected, cart, icon, text} = props

  const stripe = useStripe();
  const [{token}] = useSession()
  const [ordering] = useApi()

  const [paymentRequest, setPaymentRequest] = useState(null);

  const handleClick = () => {
    handlePaymentMethodClick({id: 99, gateway: 'stripe', name: 'Google pay'}, true)
    console.log(cart)
    paymentRequest.show()
  }

  const handlePay = async (e) => {
    console.log(e);
    try {
      const result = await fetch(`${ordering.root}/carts/change_paymethod`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          business_id: cart.business_id,
          paymethod_data: JSON.stringify({
            id: e.paymentMethod.id,
            type: e.paymentMethod.type,
            source_id: e.paymentMethod.id,
            card: {
              brand: e.paymentMethod.card.brand,
              last4: e.paymentMethod.card.last4
            }
          }),
          paymethod_id: 99
        })
      }).then(r => r.json());
      // console.log(result)
      e.complete('success');
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: cart.total * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      // Check the availability of the Payment Request API.
      pr.canMakePayment().then(result => {
        if (result) {
          setPaymentRequest(pr);
          pr.on('paymentmethod', handlePay)
        }
      });
    }
  }, [stripe]);

  // if (paymentRequest) {
  //   return <PaymentRequestButtonElement options={{paymentRequest}} />
  // }

  if (paymentRequest) {
    return (
      <PayCard
        onClick={handleClick}
        isDisabled={isDisabled}
        className={`card ${isSelected === 33 ? 'active' : ''}`}
      >
        {icon}
        <p>{text}</p>
      </PayCard>
    );
  }

  return <div>hola</div>;
}
