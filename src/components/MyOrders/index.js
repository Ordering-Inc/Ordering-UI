import React from 'react'
import { Link } from 'react-router-dom'
import {
  MyOrders as MyOrdersController
} from 'ordering-components'
import {
  MyOrdersContainer,
  MyOrdersTitle,
  ActiveOrders,
  Card,
  Map,
  Content,
  Logo,
  BusinessInformation,
  OpenOrder,
  Price,
  OrdersPast,
  IndividualOrderPast,
  OrderPastContent,
  Reorder
} from './styles'

import { ProfileOptions } from '../UserProfileForm/ProfileOptions'
import { Button } from '../../styles/Buttons'
export const MyOrdersUI = (props) => {
  const { activeOrders, previousOrders } = props

  return (
    <>
      <ProfileOptions value='My Orders' />
      <MyOrdersContainer>
        {activeOrders.length > 0 && (
          <>
            <MyOrdersTitle>
              <h3>Active Orders</h3>
            </MyOrdersTitle>
            <ActiveOrders>
              {activeOrders.map((order) => (
                <Card key={order.id}>
                  <Map>
                    {console.log(order)}
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?size=500x190&center=${order.business.location.lat},${order.business.location.lng}&zoom=17&scale=2&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_45,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C${order.business.location.lat},${order.business.location.lng}&key=AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk`} />
                  </Map>
                  <Content>
                    <Logo>
                      <img src={order.business?.logo} />
                    </Logo>
                    <BusinessInformation>
                      <h5>{order.business.name}</h5>
                      <p>Order No. {order.id}</p>
                      <p>{order.created_at}</p>
                    </BusinessInformation>
                    <Price>
                      <h5>
                        ${order.products.reduce((acc, cur) => acc + cur.price, 0)}
                      </h5>
                      <p>{order.status === 0 ? 'pending' : ''}</p>
                    </Price>
                  </Content>
                  <OpenOrder>
                    <Link to={'/orders/' + order.id}>
                      <Button color='primary'>
                        Open Order
                      </Button>
                    </Link>
                  </OpenOrder>
                </Card>
              ))}
            </ActiveOrders>
          </>
        )}
        {previousOrders.length > 0 && (
          <>
            <MyOrdersTitle>
              <h3>My Orders Past</h3>
            </MyOrdersTitle>
            <OrdersPast>
              {previousOrders.map((order) => (
                <IndividualOrderPast key={order.id}>
                  {console.log(order)}
                  <OrderPastContent>
                    <Logo name='order_past'>
                      <img src={order.business?.logo} />
                    </Logo>
                    <BusinessInformation>
                      <h5>{order.business.name}</h5>
                      <p>{order.created_at}</p>
                      <Link to={'/orders/' + order.id}>
                        <p name='view'>View order</p>
                      </Link>
                    </BusinessInformation>
                  </OrderPastContent>
                  <Reorder>
                    <p>{order.status === 1 || order.status === 11 ? 'Complete' : ''}</p>
                    <Button color='primary'>Reorder</Button>
                  </Reorder>
                </IndividualOrderPast>
              ))}
            </OrdersPast>
          </>
        )}
      </MyOrdersContainer>
    </>
  )
}

export const MyOrders = (props) => {
  const MyOrdersProps = {
    ...props,
    UIComponent: MyOrdersUI
  }

  return <MyOrdersController {...MyOrdersProps} />
}
