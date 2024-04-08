import React from 'react'
import { useLanguage } from 'ordering-components'
import { OrderBillSection } from '../OrderDetails/OrderBillSection'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { Button } from '../../styles/Buttons'
import { OrderDetailContainer, WrapperPlaceOrderButton } from './styles'

export const OrderDetail = (props) => {
  const {
    item,
    placingOrder,
    customerAddress,
    onClick
  } = props

  const [, t] = useLanguage()

  return (
    <OrderDetailContainer>

      <h3>{customerAddress}</h3>
      <div>
        {item?.products.filter(product => !product?.calendar_event).map(product => (
          <ProductItemAccordion
            key={product.id}
            product={product}
            isCartProduct
            showArrowIcon
            isDisabledEdit
            toppingsRemoved={item?.toppings_removed?.[product?.code]}
          />
        ))}
      </div>
      <OrderBillSection order={item} />
      <WrapperPlaceOrderButton>
        <Button
          color='primary'
          disabled={placingOrder}
          onClick={() => onClick()}
        >
          {placingOrder ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order')}
        </Button>
      </WrapperPlaceOrderButton>
    </OrderDetailContainer>
  )
}
