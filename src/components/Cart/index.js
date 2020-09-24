import React from 'react'
import moment from 'moment'
import { Cart as CartController, useOrder } from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { BusinessItemAccordion } from '../BusinessItemAccordion'
import { formatPrice } from '../../utils'

import {
  CartContainer,
  OrderBill,
  CheckoutAction
} from './styles'

const CartUI = (props) => {
  const {
    cart,
    changeQuantity,
    getProductMax,
    offsetDisabled,
    removeProduct
  } = props
  const [orderState] = useOrder()
  const momentFormatted = moment.utc(orderState?.option?.moment).local().format('YYYY-MM-DD HH:mm')

  return (
    <CartContainer>
      <BusinessItemAccordion
        orderTotal={cart?.total}
        business={cart?.business}
        isClosed={!cart?.valid}
        moment={momentFormatted}
      >
        {cart?.products?.length && cart?.products.map(product => (
          <ProductItemAccordion
            key={product.code}
            isCartProduct
            product={product}
            changeQuantity={changeQuantity}
            getProductMax={getProductMax}
            offsetDisabled={offsetDisabled}
            removeProduct={removeProduct}
          />
        ))}
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
        </OrderBill>
        <CheckoutAction>
          <Button color='primary'>
            Checkout
          </Button>
        </CheckoutAction>
      </BusinessItemAccordion>
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
