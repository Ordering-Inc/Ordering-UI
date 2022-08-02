import React, { useState, useEffect } from 'react'
import { useLanguage, useOrder, useEvent, FavoriteList as FavoriteListController } from 'ordering-components'
import { BusinessController } from '../BusinessController'
import { BusinessPreorder } from '../BusinessPreorder'
import { NotFoundSource } from '../NotFoundSource'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { AutoScroll } from '../AutoScroll'
import { SingleProductCard } from '../SingleProductCard'
import { useTheme } from 'styled-components'
import { SingleOrderCard } from '../SingleOrderCard'

import {
  Container,
  ErrorMessage,
  FavoriteListWrapper,
  ReadMoreCard,
  FavoriteListing
} from './styles'

const FavoriteListUI = (props) => {
  const {
    favoriteList,
    handleUpdateFavoriteList,
    pagination,
    getFavoriteList,
    isBusiness,
    isProduct,
    isOrder,
    handleReorder,
    reorderState
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const { width } = useWindowSize()
  const theme = useTheme()

  const [isPreorder, setIsPreorder] = useState(false)
  const [preorderBusiness, setPreorderBusiness] = useState(null)

  const pastOrders = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17]

  const handleClickBusiness = (business) => {
    events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
  }

  const handleGoToList = () => {
    if (isOrder) {
      events.emit('go_to_page', { page: 'orders' })
      return
    }
    events.emit('go_to_page', { page: 'search' })
  }

  const handleClosePreorder = () => {
    setIsPreorder(false)
    setPreorderBusiness(null)
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

  const onProductClick = (product) => {
    const slug = product?.category?.business?.slug
    const categoryId = product?.category?.id
    const productId = product?.id

    if (!categoryId && !productId) {
      return window.location.pathname.includes('/store/')
        ? events.emit('go_to_page', { page: 'business', params: { store: slug }, replace: true })
        : events.emit('go_to_page', { page: 'business_slug', params: { store: slug }, replace: true })
    }
    return window.location.pathname.includes('/store/')
      ? events.emit('go_to_page', {
        page: 'business',
        params: { store: slug },
        search: `?category=${categoryId}&product=${productId}`,
        replace: true
      })
      : events.emit('go_to_page', {
        page: 'business_slug',
        params: { store: slug },
        search: `?category=${categoryId}&product=${productId}`,
        replace: true
      })
  }

  const closeOrderModal = (e) => {
    const outsideModal = !window.document.getElementById('app-modals') ||
      !window.document.getElementById('app-modals').contains(e.target)
    if (outsideModal) {
      const _businessId = 'businessId:' + reorderState?.result?.business_id
      sessionStorage.setItem('adjust-cart-products', _businessId)
      onRedirectPage && onRedirectPage({ page: 'business', params: { store: reorderState?.result?.business?.slug } })
    }
  }

  useEffect(() => {
    if (preorderBusiness) setIsPreorder(true)
  }, [preorderBusiness])

  useEffect(() => {
    if (!isOrder) return
    if (reorderState?.error) {
      window.addEventListener('click', closeOrderModal)
      return () => {
        window.removeEventListener('click', closeOrderModal)
      }
    }

    if (!reorderState?.error && reorderState.loading === false && reorderState?.result?.business_id) {
      const _businessId = 'businessId:' + reorderState?.result?.business_id
      const cartProducts = orderState?.carts?.[_businessId]?.products
      const available = cartProducts.every(product => product.valid === true)
      const orderProducts = favoriteList?.favorites.find(order => order?.id === reorderState?.result?.orderId)?.products

      if (available && reorderState?.result?.uuid && (cartProducts?.length === orderProducts?.length)) {
        onRedirectPage && onRedirectPage({ page: 'checkout', params: { cartUuid: reorderState?.result.uuid } })
      } else {
        sessionStorage.setItem('adjust-cart-products', _businessId)
        cartProducts?.length !== orderProducts?.length && sessionStorage.setItem('already-removed', 'removed')
        onRedirectPage && onRedirectPage({ page: 'business', params: { store: reorderState?.result?.business?.slug } })
      }
    }
  }, [reorderState])

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
          !favoriteList?.loading && favoriteList?.favorites.length === 0 && (
            <NotFoundSource>
              <Button
                outline
                color='primary'
                onClick={() => handleGoToList()}
                style={{ height: '44px' }}
              >
                {t('ADD_FAVORITE', 'Add favorite')}
              </Button>
            </NotFoundSource>
          )
        }
        <FavoriteListWrapper isLoading={favoriteList?.loading || favoriteList?.favorites?.length === 0}>
          <FavoriteListing isOrder={isOrder} isProduct={isProduct}>
            <AutoScroll scrollId='favorite'>
              {isBusiness && (
                <>
                  {!favoriteList?.loading && favoriteList?.favorites?.map((business, i) => (
                    <BusinessController
                      key={business.id}
                      className='card'
                      business={business}
                      isBusinessOpen={business.open}
                      handleCustomClick={handleClickBusiness}
                      orderType={orderState?.options?.type}
                      onPreorderBusiness={setPreorderBusiness}
                      businessHeader={business?.header}
                      businessFeatured={business?.featured}
                      businessOffers={business?.offers}
                      businessLogo={business?.logo}
                      businessReviews={business?.reviews?.total}
                      businessDeliveryPrice={business?.delivery_price}
                      businessDeliveryTime={business?.delivery_time}
                      businessPickupTime={business?.pickup_time}
                      businessDistance={business?.distance}
                      handleUpdateBusinessList={handleUpdateFavoriteList}
                      firstCard={i === 0 && width > 681}
                    />
                  ))}
                  {favoriteList?.loading && (
                    [...Array(5).keys()].map(i => (
                      <BusinessController
                        key={i}
                        className='card'
                        business={{}}
                        isSkeleton
                        orderType={orderState?.options?.type}
                      />
                    ))
                  )}
                </>
              )}
              {isProduct && (
                <>
                  {
                    !favoriteList?.loading && favoriteList?.favorites?.map((product, i) => (
                      <SingleProductCard
                        key={`${product.id}_${i}`}
                        isSoldOut={product.inventoried && !product.quantity}
                        product={product}
                        onProductClick={() => onProductClick(product)}
                        handleUpdateProducts={handleUpdateFavoriteList}
                        isFavorite
                      />
                    ))
                  }
                  {favoriteList?.loading && (
                    [...Array(5).keys()].map(i => (
                      <SingleProductCard
                        key={`skeleton:${i}`}
                        isSkeleton
                      />
                    ))
                  )}
                </>
              )}
              {isOrder && (
                <>
                  {
                    !favoriteList?.loading && favoriteList?.favorites?.map((order, i) => (
                      <SingleOrderCard
                        key={`${order?.id}_${i}`}
                        order={order}
                        onRedirectPage={onRedirectPage}
                        getOrderStatus={getOrderStatus}
                        pastOrders={pastOrders.includes(order?.status)}
                        handleReorder={handleReorder}
                        handleUpdateOrderList={handleUpdateFavoriteList}
                        isFavorite
                      />
                    ))
                  }
                  {favoriteList?.loading && (
                    [...Array(5).keys()].map(i => (
                      <SingleOrderCard
                        key={i}
                        isSkeleton
                        order={{}}
                        onRedirectPage={onRedirectPage}
                        getOrderStatus={getOrderStatus}
                        handleReorder={handleReorder}
                      />
                    ))
                  )}
                </>
              )}
              {!favoriteList?.loading && pagination?.totalPages && pagination?.currentPage < pagination?.totalPages && (
                <ReadMoreCard>
                  <Button
                    color='primary'
                    outline
                    onClick={() => getFavoriteList(pagination?.currentPage + 1)}
                  >
                    {t('LOAD_MORE_ITEMS', 'Load more items')}
                  </Button>
                </ReadMoreCard>
              )}
            </AutoScroll>
          </FavoriteListing>
        </FavoriteListWrapper>
        {favoriteList?.error && favoriteList?.error.length > 0 && favoriteList?.favorites.length === 0 && (
          favoriteList?.error.map((e, i) => (
            <ErrorMessage key={i}>{t('ERROR', 'ERROR')}: [{e?.message || e}]</ErrorMessage>
          ))
        )}
      </Container>
      <Modal
        open={isPreorder}
        width='760px'
        onClose={() => handleClosePreorder()}
      >
        <BusinessPreorder
          business={preorderBusiness}
          handleClick={handleClickBusiness}
          showButton
        />
      </Modal>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const FavoriteList = (props) => {
  const favoriteListProps = {
    ...props,
    UIComponent: FavoriteListUI
  }
  return <FavoriteListController {...favoriteListProps} />
}
