import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MyOrders as MyOrdersController,
  GoogleMaps,
  WrapperGoogleMaps
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
import { Modal } from '../Modal'
import { Messages } from '../Messages'
import { ReviewOrder } from '../ReviewOrder'
import { Button } from '../../styles/Buttons'
export const MyOrdersUI = (props) => {
  const { activeOrders, previousOrders } = props
  const GoogleMapsMap = WrapperGoogleMaps(GoogleMaps)
  const [open, setOpen] = useState(false)
  const [openReview, setOpenReview] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [order, setOrder] = useState({})

  const handleMessages = (orderID, order) => {
    setOrderId(orderID)
    setOrder(order)
    setOpen(true)
  }

  const handleReviewOpen = (order, orderId) => {
    setOrder(order)
    setOrderId(orderId)
    setOpenReview(true)
  }

  return (
    <MyOrdersContainer>
      {activeOrders && (
        <>
          <MyOrdersTitle>
            <h3>Active Orders</h3>
          </MyOrdersTitle>
          <ActiveOrders>
            {activeOrders.map((order) => (
              <Card key={order.id}>
                <Map>
                  <GoogleMapsMap
                    apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
                    location={order.business?.location}
                    mapControls={{
                      zoomControl: false,
                      streetViewControl: true,
                      fullscreenControl: true,
                      mapTypeId: 'satellite', // 'roadmap', 'satellite', 'hybrid', 'terrain'
                      mapTypeControl: true,
                      mapTypeControlOptions: {
                        mapTypeIds: ['roadmap', 'satellite']
                      }
                    }}
                  />
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
                  <Link to={'/order/' + order.id}>
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
      {previousOrders && (
        <>
          <MyOrdersTitle>
            <h3>My Orders Past</h3>
          </MyOrdersTitle>
          <OrdersPast>
            {previousOrders.map((order) => (
              <IndividualOrderPast key={order.id}>
                {console.log(order)}
                <OrderPastContent>
                  <Logo>
                    <img src={order.business?.logo} />
                  </Logo>
                  <BusinessInformation>
                    <h5>{order.business.name}</h5>
                    <p>{order.created_at}</p>
                    <p name='view' onClick={() => handleMessages(order.id, order)}>View order</p>
                  </BusinessInformation>
                </OrderPastContent>
                <Reorder>
                  <p>{order.status === 1 || order.status === 11 ? 'Complete' : ''}</p>
                  {(order.status === 1 || order.status === 11) && !order.review && (
                    <Button color='primary' onClick={() => handleReviewOpen(order, order.id)}>Review Now</Button>
                  )}
                  <Button color='primary'>Reorder</Button>
                </Reorder>
              </IndividualOrderPast>
            ))}
          </OrdersPast>
        </>
      )}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Messages open={open} setOpen={setOpen} orderId={orderId} order={order} />
      </Modal>
      <Modal open={openReview} onClose={() => setOpenReview(false)} title={order ? 'Write a Review #' + order?.id : 'LOADING...'}>
        <ReviewOrder order={order} />
      </Modal>
    </MyOrdersContainer>
  )
}

export const MyOrders = (props) => {
  const MyOrdersProps = {
    ...props,
    UIComponent: MyOrdersUI
  }

  return <MyOrdersController {...MyOrdersProps} />
}
