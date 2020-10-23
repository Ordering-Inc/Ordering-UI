import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link, useHistory } from 'react-router-dom'
import {
  MyOrders as MyOrdersController,
  useLanguage,
  useOrder
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
  Reorder,
  ImageContainer,
  SkeletonOrder,
  SkeletonCard,
  SkeletonMap,
  SkeletonContent,
  SkeletonText,
  SkeletonOrdersPast,
  SkeletonReorder
} from './styles'

import { ProfileOptions } from '../UserProfileForm/ProfileOptions'
import { Button } from '../../styles/Buttons'
import { formatPrice } from '../../utils'
import emptyPastOrders from '../../../template/assets/empty-past-orders.svg'
import emptyActiveOrders from '../../../template/assets/empty-active-orders.svg'

export const MyOrdersUI = (props) => {
  const { activeOrders, previousOrders } = props
  const history = useHistory()
  const [, t] = useLanguage()
  const [, { reorder }] = useOrder()
  const googleMapKey = 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
  const getGoogleMapImage = ({ lat, lng }) => {
    return `https://maps.googleapis.com/maps/api/staticmap?size=500x190&center=${lat},${lng}&zoom=17&scale=2&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_45,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C${lat},${lng}&key=${googleMapKey}`
  }

  const [reorderLoading, setReorderLoading] = useState(false)

  const handleReorder = async (orderId) => {
    setReorderLoading(true)
    try {
      const { error, result } = await reorder(orderId)
      if (!error) {
        history.push(`/checkout/${result.uuid}`)
      }
      setReorderLoading(false)
    } catch (err) {
      console.log(err)
      setReorderLoading(false)
    }
  }

  return (
    <>
      <ProfileOptions value='My Orders' />
      <MyOrdersContainer>
        {
          <>
            <MyOrdersTitle>
              <h3>{t('ACTIVE_ORDERS', 'Active Orders')}</h3>
            </MyOrdersTitle>
            {!activeOrders.loading && activeOrders.orders.length === 0 ? (
              <ImageContainer>
                <img src={emptyActiveOrders} />
              </ImageContainer>
            ) : (
              <ActiveOrders>
                {!activeOrders.loading ? activeOrders.orders.map(order => (
                  <Card key={order.id}>
                    <Map>
                      <img src={getGoogleMapImage(order?.business?.location)} alt='google-maps-img' />
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
                          {formatPrice(order.products.reduce((acc, cur) => acc + cur.price, 0))}
                        </h5>
                        <p>{order.status === 0 ? t('ORDER_PENDING', 'pending') : ''}</p>
                      </Price>
                    </Content>
                    <OpenOrder>
                      <Link to={'/orders/' + order.id}>
                        <Button color='primary'>
                          {t('OPEN_ORDER', 'Open order')}
                        </Button>
                      </Link>
                    </OpenOrder>
                  </Card>
                )) : (
                  <SkeletonOrder>
                    {[...Array(3)].map((item, i) => (
                      <SkeletonCard key={i}>
                        <SkeletonMap>
                          <Skeleton width={400} height={100} />
                        </SkeletonMap>
                        <SkeletonContent>
                          <div>
                            <Skeleton width={70} height={70} />
                          </div>
                          <SkeletonText>
                            <Skeleton width={100} />
                            <Skeleton width={80} />
                            <Skeleton width={120} />
                          </SkeletonText>
                        </SkeletonContent>
                      </SkeletonCard>
                    ))}
                  </SkeletonOrder>
                )}
              </ActiveOrders>
            )}
          </>
        }
        {
          <>
            <MyOrdersTitle>
              <h3>{t('ORDERS_PAST', 'My Orders Past')}</h3>
            </MyOrdersTitle>
            {!previousOrders.loading && previousOrders.orders.length === 0 ? (
              (
                <ImageContainer>
                  <img src={emptyPastOrders} />
                </ImageContainer>
              )
            ) : (
              <OrdersPast>
                {!previousOrders.loading ? previousOrders.orders.map((order) => (
                  <IndividualOrderPast key={order.id}>
                    <OrderPastContent>
                      <Logo name='order_past'>
                        <img src={order.business?.logo} />
                      </Logo>
                      <BusinessInformation>
                        <h5>{order.business.name}</h5>
                        <p>{order.created_at}</p>
                        <Link to={'/orders/' + order.id}>
                          <p name='view'>{t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')}</p>
                        </Link>
                      </BusinessInformation>
                    </OrderPastContent>
                    <Reorder>
                      <p>{order.status === 1 || order.status === 11 ? t('ORDER_COMPLETED', 'Complete') : ''}</p>
                      <Button color='primary' onClick={() => handleReorder(order.id)} disabled={reorderLoading}>{reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')}</Button>
                    </Reorder>
                  </IndividualOrderPast>
                )) : ([...Array(3)].map((item, i) => (
                  <SkeletonOrdersPast key={i}>
                    <SkeletonContent>
                      <div>
                        <Skeleton width={70} height={70} />
                      </div>
                      <SkeletonText>
                        <Skeleton width={100} />
                        <Skeleton width={120} />
                        <Skeleton width={80} />
                      </SkeletonText>
                      <SkeletonReorder>
                        <Skeleton width={80} />
                        <Skeleton width={150} height={40} />
                      </SkeletonReorder>
                    </SkeletonContent>
                  </SkeletonOrdersPast>
                )))}
              </OrdersPast>
            )}
          </>
        }
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
