import React, { useState } from 'react'
import { useLanguage, useEvent, useOrder, FavoriteList } from 'ordering-components'
import { NotFoundSource } from '../NotFoundSource'
import { Button } from '../../styles/Buttons'
import MdKeyboardArrowLeft from '@meronex/icons/md/MdKeyboardArrowLeft'
import MdKeyboardArrowRight from '@meronex/icons/md/MdKeyboardArrowRight'
import { useTheme } from 'styled-components'

import {
  Container,
  ErrorMessage,
  BusinessListWrapper,
  ArrowButtonWrapper,
  LoadMoreCard
} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { SingleOrderCard } from '../SingleOrderCard'

SwiperCore.use([Navigation])

const FavoriteOrdersUI = (props) => {
  const {
    handleUpdateFavoriteList,
    favoriteList,
    pagination,
    getFavoriteList
  } = props

  const [, t] = useLanguage()
  const [events] = useEvent()
  const theme = useTheme()

  const [reorderLoading, setReorderLoading] = useState(false)
  const pastOrders = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17]

  const [, { reorder }] = useOrder()

  const handleGoToOrderList = () => {
    events.emit('go_to_page', { page: 'orders' })
  }

  const getOrderStatus = (s) => {
    const status = parseInt(s)
    const orderStatus = [
      { key: 0, value: t('PENDING', theme?.defaultLanguages?.PENDING || 'Pending') },
      { key: 1, value: t('COMPLETED', theme?.defaultLanguages?.COMPLETED || 'Completed') },
      { key: 2, value: t('REJECTED', theme?.defaultLanguages?.REJECTED || 'Rejected') },
      { key: 3, value: t('DRIVER_IN_BUSINESS', theme?.defaultLanguages?.DRIVER_IN_BUSINESS || 'Driver in business') },
      { key: 4, value: t('PREPARATION_COMPLETED', theme?.defaultLanguages?.PREPARATION_COMPLETED || 'Preparation Completed') },
      { key: 5, value: t('REJECTED_BY_BUSINESS', theme?.defaultLanguages?.REJECTED_BY_BUSINESS || 'Rejected by business') },
      { key: 6, value: t('REJECTED_BY_DRIVER', theme?.defaultLanguages?.REJECTED_BY_DRIVER || 'Rejected by Driver') },
      { key: 7, value: t('ACCEPTED_BY_BUSINESS', theme?.defaultLanguages?.ACCEPTED_BY_BUSINESS || 'Accepted by business') },
      { key: 8, value: t('ACCEPTED_BY_DRIVER', theme?.defaultLanguages?.ACCEPTED_BY_DRIVER || 'Accepted by driver') },
      { key: 9, value: t('PICK_UP_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_COMPLETED_BY_DRIVER || 'Pick up completed by driver') },
      { key: 10, value: t('PICK_UP_FAILED_BY_DRIVER', theme?.defaultLanguages?.PICK_UP_FAILED_BY_DRIVER || 'Pick up Failed by driver') },
      { key: 11, value: t('DELIVERY_COMPLETED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_COMPLETED_BY_DRIVER || 'Delivery completed by driver') },
      { key: 12, value: t('DELIVERY_FAILED_BY_DRIVER', theme?.defaultLanguages?.DELIVERY_FAILED_BY_DRIVER || 'Delivery Failed by driver') },
      { key: 13, value: t('PREORDER', theme?.defaultLanguages?.PREORDER || 'PreOrder') },
      { key: 14, value: t('ORDER_NOT_READY', theme?.defaultLanguages?.ORDER_NOT_READY || 'Order not ready') },
      { key: 15, value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER || 'Order picked up completed by customer') },
      { key: 16, value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_STATUS_CANCELLED_BY_CUSTOMER || 'Order cancelled by customer') },
      { key: 17, value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', theme?.defaultLanguages?.ORDER_NOT_PICKEDUP_BY_CUSTOMER || 'Order not picked up by customer') },
      { key: 18, value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS || 'Driver almost arrived to business') },
      { key: 19, value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', theme?.defaultLanguages?.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER || 'Driver almost arrived to customer') },
      { key: 20, value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS || 'Customer almost arrived to business') },
      { key: 21, value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', theme?.defaultLanguages?.ORDER_CUSTOMER_ARRIVED_BUSINESS || 'Customer arrived to business') },
      { key: 22, value: t('ORDER_LOOKING_FOR_DRIVER', theme?.defaultLanguages?.ORDER_LOOKING_FOR_DRIVER || 'Looking for driver') },
      { key: 23, value: t('ORDER_DRIVER_ON_WAY', theme?.defaultLanguages?.ORDER_DRIVER_ON_WAY || 'Driver on way') }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const onRedirectPage = (data) => {
    events.emit('go_to_page', data)
  }

  const handleReorder = async (orderId) => {
    setReorderLoading(true)
    try {
      const { error, result } = await reorder(orderId)
      if (!error) {
        onRedirectPage && onRedirectPage({ page: 'checkout', params: { cartUuid: result.uuid } })
        return
      }
      setReorderLoading(false)
    } catch (err) {
      setReorderLoading(false)
    }
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container>
        {
          !favoriteList?.loading && favoriteList?.favorites?.length === 0 && (
            <NotFoundSource>
              <Button
                outline
                color='primary'
                onClick={() => handleGoToOrderList()}
                style={{ height: '44px' }}
              >
                {t('ADD_FAVORITE', 'Add favorite')}
              </Button>
            </NotFoundSource>
          )
        }
        <BusinessListWrapper>
          <ArrowButtonWrapper className='swiper-button-prev' isLoading={favoriteList?.loading}>
            <MdKeyboardArrowLeft />
          </ArrowButtonWrapper>
          <Swiper
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1700: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            freeMode
            watchSlidesProgress
            className='swiper-businesses'
            preventClicksPropagation={false}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
          >
            {!favoriteList?.loading && (
              <>
                {
                  favoriteList?.favorites?.map((order, i) => (
                    <SwiperSlide key={i}>
                      <SingleOrderCard
                        order={order}
                        onRedirectPage={onRedirectPage}
                        getOrderStatus={getOrderStatus}
                        pastOrders={pastOrders.includes(order?.status)}
                        handleReorder={handleReorder}
                        handleUpdateOrderList={handleUpdateFavoriteList}
                      />
                    </SwiperSlide>
                  ))
                }
                {pagination?.totalPages && pagination?.currentPage < pagination?.totalPages && (
                  <SwiperSlide>
                    <LoadMoreCard>
                      <Button
                        color='primary'
                        outline
                        onClick={() => getFavoriteList(pagination?.currentPage + 1)}
                      >
                        {t('LOAD_MORE_ORDERS', 'Load more orders')}
                      </Button>
                    </LoadMoreCard>
                  </SwiperSlide>
                )}
              </>
            )}

            {favoriteList?.loading && (
              [...Array(5).keys()].map(i => (
                <SwiperSlide key={i}>
                  <SingleOrderCard
                    isSkeleton
                    order={{}}
                    onRedirectPage={onRedirectPage}
                    getOrderStatus={getOrderStatus}
                    handleReorder={handleReorder}
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>
          <ArrowButtonWrapper className='swiper-button-next' isLoading={favoriteList?.loading}>
            <MdKeyboardArrowRight />
          </ArrowButtonWrapper>
        </BusinessListWrapper>
        {favoriteList?.error && favoriteList?.error.length > 0 && favoriteList?.favorites?.length === 0 && (
          favoriteList?.error.map((e, i) => (
            <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
          ))
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const FavoriteOrders = (props) => {
  const favoriteOrdersProps = {
    ...props,
    UIComponent: FavoriteOrdersUI,
    favoriteURL: 'favorite_orders',
    originalURL: 'orders'
  }
  return <FavoriteList {...favoriteOrdersProps} />
}
