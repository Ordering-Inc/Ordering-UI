import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import { useLanguage, useOrder, useEvent, OrderList } from 'ordering-components'
import { HorizontalOrdersLayout } from '../HorizontalOrdersLayout'
import { VerticalOrdersLayout } from '../../../../../components/VerticalOrdersLayout'

import {
  OptionTitle,
  OrdersContainer,
  SkeletonOrder,
  SkeletonCard,
  SkeletonContent,
  SkeletonText,
  SkeletonInformation,
  SkeletonReorder,
  SkeletonButton,
  BusinessControllerSkeleton,
  ProductsListing
} from './styles'
import { PreviousBusinessOrdered } from './PreviousBusinessOrdered'
import { PreviousProductsOrdered } from './PreviousProductsOrdered'
import { BusinessController } from '../BusinessController'
import { SingleProductCard } from '../SingleProductCard'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Alert } from '../Confirm'
import { PreviousProfessionalOrdered } from './PreviousProfessionalOrdered'
import { getOrderStatus } from '../../../../../utils'

const OrdersOptionUI = (props) => {
  const {
    horizontal,
    activeOrders,
    orderList,
    pagination,
    isBusinessesPage,
    loadMoreOrders,
    titleContent,
    customArray,
    onRedirectPage,
    businessesIds,
    orderStatus,
    isCustomLayout,
    isBusinessesLoading,
    pastOrders,
    preOrders,
    setIsEmptyPast,
    setIsEmptyActive,
    setIsEmptyPreorder,
    isCustomerMode,
    handleUpdateOrderList,
    reorderState,
    handleReorder,
    isBusiness,
    isProducts,
    isProfessionals,
    businessOrderIds,
    products,
    hideOrders,
    onProductRedirect,
    businessesSearchList,
    handleUpdateProducts,
    onBusinessClick,
    professionals,
    handleUpdateProfessionals,
    businesses,
    handleUpdateBusinesses,
    getPage,
    loadOrders,
    disableSkeletons
  } = props

  const [, t] = useLanguage()
  const [{ carts }] = useOrder()
  const [events] = useEvent()
  const { width } = useWindowSize()
  const { loading, error, orders: values } = orderList
  const [refreshOrders, setRefreshOrders] = useState(false)

  const _orders = customArray || values || []
  const uniqueOrders = []
  const ordersReduced = _orders.map(order => order?.cart_group_id
    ? _orders
      .filter(_order => _order?.cart_group_id === order?.cart_group_id)
      .map((_o, _, _ordersList) => {
        const obj = {
          ..._o,
          id: _ordersList.map(o => o.id),
          review: _o.review,
          user_review: _o.user_review,
          total: _ordersList.reduce((acc, o) => acc + o.summary.total, 0),
          business: _ordersList.map(o => o.business),
          business_id: _ordersList.map(o => o.business_id),
          products: _ordersList.map(o => o.products)
        }
        return obj
      }).find(o => o)
    : order)
  const orders = ordersReduced?.filter(order => {
    if (!order?.cart_group_id) return true
    const isDuplicate = uniqueOrders.includes(order?.cart_group_id)
    if (!isDuplicate) {
      uniqueOrders.push(order?.cart_group_id)
      return true
    }
    return false
  })

  const isShowTitles = businessesIds
    ? orders && orders.length > 0 && !orders.map(order => businessesIds && businessesIds.includes(order.business_id)).every(i => !i)
    : orders.length > 0

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const closeOrderModal = (e) => {
    const outsideModal = !window.document.getElementById('app-modals') ||
      !window.document.getElementById('app-modals').contains(e.target)
    if (outsideModal) {
      if (reorderState?.result?.business?.slug) {
        const _businessId = 'businessId:' + reorderState?.result?.business_id
        sessionStorage.setItem('adjust-cart-products', _businessId)
        onRedirectPage && onRedirectPage({ page: 'business', params: { store: reorderState?.result?.business?.slug } })
      }
    }
  }

  const handleChangePage = (page) => {
    getPage(page)
  }

  const showSkeletons = (!isBusiness && !isProducts && loading) || (businesses?.loading && isBusiness) || (products?.length === 0 && isProducts && ((!businessesSearchList && loading) || businessesSearchList?.loading))
  const onProductClick = (product, slug) => {
    if (slug) {
      onProductRedirect({
        slug,
        product: product.product_id,
        category: product.category_id
      })
      events.emit('product_clicked', product)
    } else {
      setAlertState({
        open: true,
        content: t('PRODUCT_HAS_NOT_BUSINESS_SLUG', 'The product selected has not business slug')
      })
    }
  }

  useEffect(() => {
    if (loading) return

    if (orders.length === 0) {
      activeOrders && setIsEmptyActive && setIsEmptyActive(true)
      pastOrders && setIsEmptyPast && setIsEmptyPast(true)
      preOrders && setIsEmptyPreorder && setIsEmptyPreorder(true)
    }
  }, [orders, activeOrders, pastOrders, preOrders])

  useEffect(() => {
    if (reorderState?.error) {
      window.addEventListener('click', closeOrderModal)
      return () => {
        window.removeEventListener('click', closeOrderModal)
      }
    }

    if (!reorderState?.error && reorderState.loading === false && reorderState?.result?.business_id) {
      const _businessId = 'businessId:' + reorderState?.result?.business_id
      const cartProducts = carts?.[_businessId]?.products
      const available = cartProducts.every(product => product.valid === true)
      const orderProducts = orders.find(order => order?.id === reorderState?.result?.orderId)?.products

      if (available && reorderState?.result?.uuid && (cartProducts?.length === orderProducts?.length)) {
        onRedirectPage && onRedirectPage({ page: 'checkout', params: { cartUuid: reorderState?.result.uuid } })
      } else {
        sessionStorage.setItem('adjust-cart-products', _businessId)
        cartProducts?.length !== orderProducts?.length && sessionStorage.setItem('already-removed', 'removed')
        onRedirectPage && onRedirectPage({ page: 'business', params: { store: reorderState?.result?.business?.slug } })
      }
    }
  }, [reorderState])

  useEffect(() => {
    if (refreshOrders) {
      loadOrders(false, false, false, true)
      setRefreshOrders(false)
    }
  }, [refreshOrders])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {(isCustomLayout ? ((isShowTitles || !isBusinessesPage) && !loading && !isBusinessesLoading) : ((isShowTitles || !isBusinessesPage) && !hideOrders)) && (
        <>
          {orders.length > 0 && (
            <OptionTitle isBusinessesPage={isBusinessesPage}>
              <h1>
                {titleContent || (activeOrders
                  ? t('ACTIVE', 'Active')
                  : (pastOrders ? t('PAST', 'Past') : t('UPCOMING', 'Upcoming')))}
              </h1>
            </OptionTitle>
          )}
        </>
      )}
      {isBusiness && businessOrderIds?.length > 0 && (
        <PreviousBusinessOrdered
          businesses={businesses}
          onRedirectPage={onRedirectPage}
          isLoadingOrders={loading}
          handleUpdateBusinesses={handleUpdateBusinesses}
        />
      )}

      {isProducts && (
        <PreviousProductsOrdered
          products={products}
          onProductClick={onProductClick}
          handleUpdateProducts={handleUpdateProducts}
          onBusinessClick={onBusinessClick}
        />
      )}

      {isProfessionals && (
        <PreviousProfessionalOrdered
          professionals={professionals}
          handleUpdateProfessionals={handleUpdateProfessionals}
        />
      )}

      {!disableSkeletons && (isCustomLayout ? (loading || businesses?.loading) : showSkeletons) && (
        <>
          {(businesses?.loading && isBusiness) ? (
            <BusinessControllerSkeleton>
              {[...Array(3).keys()].map((item, i) => (
                <BusinessController
                  key={i}
                  className='card'
                  business={{}}
                  isSkeleton
                  firstCard={i === 0 && width > 681}
                />
              ))}
            </BusinessControllerSkeleton>
          ) : loading && isProducts ? (
            <ProductsListing>
              {[...Array(3).keys()].map(i => (
                <SingleProductCard
                  key={`skeleton:${i}`}
                  isSkeleton
                />
              ))}
            </ProductsListing>
          ) : (
            <OrdersContainer
              isSkeleton
              activeOrders={horizontal}
              isBusinessesPage={isBusinessesPage}
            >
              {horizontal ? (
                <SkeletonOrder activeOrders={horizontal} isBusinessesPage={isBusinessesPage}>
                  {[...Array(3)].map((item, i) => (
                    <SkeletonCard key={i}>
                      <SkeletonContent activeOrders={horizontal}>
                        <div>
                          <Skeleton width={70} height={70} />
                        </div>
                        <SkeletonText>
                          <Skeleton width={100} />
                          <Skeleton width={80} />
                          <Skeleton width={120} />
                        </SkeletonText>
                      </SkeletonContent>
                      <SkeletonButton>
                        <Skeleton />
                      </SkeletonButton>
                    </SkeletonCard>
                  ))}
                </SkeletonOrder>
              ) : (
                [...Array(3)].map((item, i) => (
                  <SkeletonOrder key={i}>
                    <SkeletonContent>
                      <SkeletonInformation>
                        <div>
                          <Skeleton width={70} height={70} />
                        </div>
                        <SkeletonText>
                          <Skeleton width={100} />
                          <Skeleton width={120} />
                          <Skeleton width={80} />
                        </SkeletonText>
                      </SkeletonInformation>
                      <SkeletonReorder>
                        <Skeleton />
                        <Skeleton />
                      </SkeletonReorder>
                    </SkeletonContent>
                  </SkeletonOrder>
                ))
              )}
            </OrdersContainer>
          )}
        </>
      )}
      {(isCustomLayout ? !loading && !error && orders.length > 0 && !isBusinessesLoading && !hideOrders : !loading && !error && orders.length > 0 && !hideOrders) && (
        horizontal ? (
          <HorizontalOrdersLayout
            businessesIds={businessesIds}
            orders={orders?.filter(order => orderStatus?.includes(order.status)).sort((a, b) => moment(b?.delivery_datetime_utc)?.valueOf() - moment(a?.delivery_datetime_utc)?.valueOf())}
            pagination={pagination}
            onRedirectPage={onRedirectPage}
            loadMoreOrders={loadMoreOrders}
            isBusinessesPage={isBusinessesPage}
            reorderLoading={reorderState?.loading}
            customArray={customArray}
            getOrderStatus={getOrderStatus}
            handleReorder={handleReorder}
            activeOrders={activeOrders}
            handleUpdateOrderList={handleUpdateOrderList}
            pastOrders={pastOrders}
            isCustomerMode={isCustomerMode}
            isBusiness={isBusiness}
            isProducts={isProducts}
            titleContent={titleContent}
            handleChangePage={handleChangePage}
          />
        ) : (
          <VerticalOrdersLayout
            reorderLoading={reorderState?.loading}
            orders={orders.filter(order => orderStatus.includes(order.status)).sort((a, b) => moment(a?.delivery_datetime_utc).valueOf() - moment(b?.delivery_datetime_utc).valueOf())}
            pagination={pagination}
            customArray={customArray}
            loadMoreOrders={loadMoreOrders}
            onRedirectPage={onRedirectPage}
            getOrderStatus={getOrderStatus}
            handleReorder={handleReorder}
            handleUpdateOrderList={handleUpdateOrderList}
            setRefreshOrders={setRefreshOrders}
          />
        )
      )}
      <Alert
        title={t('MY_ORDERS', 'My orders')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const OrdersOption = (props) => {
  const getAllOrders = props.activeOrders && props.pastOrders && props.preOrders

  const orderListProps = {
    ...props,
    UIComponent: OrdersOptionUI,
    noGiftCardOrders: true,
    orderStatus: getAllOrders
      ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
      : props.activeOrders
        ? [0, 3, 4, 7, 8, 9, 14, 18, 19, 20, 21, 22, 23]
        : (props.pastOrders ? [1, 2, 5, 6, 10, 11, 12, 15, 16, 17] : [13]),
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: (getAllOrders || (props.activeOrders && !props.isBusinessesPage)) ? 30 : 10,
      controlType: 'infinity'
    }
  }

  return (
    <OrderList {...orderListProps} />
  )
}
