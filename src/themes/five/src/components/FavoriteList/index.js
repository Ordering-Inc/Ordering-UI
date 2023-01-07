import React, { useState, useEffect } from 'react'
import { useLanguage, useOrder, useSite, useEvent, FavoriteList as FavoriteListController } from 'ordering-components'
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
import { checkSiteUrl, getOrderStatus } from '../../../../../utils'
import { SingleProfessionalCard } from '../SingleProfessionalCard'

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
    isProfessional,
    handleReorder,
    reorderState
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const [{ site }] = useSite()
  const { width } = useWindowSize()
  const theme = useTheme()

  const businessUrlTemplate = checkSiteUrl(site?.business_url_template, '/store/:business_slug')
  const productUrlTemplate = checkSiteUrl(site?.product_url_template, '/store/:business_slug?category=:category_id&product=:product_id')

  const [isPreorder, setIsPreorder] = useState(false)
  const [preorderBusiness, setPreorderBusiness] = useState(null)

  const pastOrders = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17]

  const handleClickBusiness = (business) => {
    if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
      events.emit('go_to_page', { page: 'business', params: { business_slug: business.slug } })
    } else {
      events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${business.slug}` })
    }
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

  const onRedirectPage = (data) => {
    events.emit('go_to_page', data)
  }

  const onProductClick = (product) => {
    const slug = product?.category?.business?.slug
    const categoryId = product?.category?.id
    const productId = product?.id

    if (!categoryId && !productId) {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        events.emit('go_to_page', { page: 'business', params: { business_slug: slug } })
      } else {
        events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${slug}` })
      }
      return
    }
    if (productUrlTemplate === '/store/:business_slug/:category_slug/:product_slug' || productUrlTemplate === '/:business_slug/:category_slug/:product_slug') {
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          business_slug: slug,
          category_slug: categoryId,
          product_slug: productId
        }
      })
    }
    if (productUrlTemplate.includes('/store/:category_slug/:product_slug')) {
      const businessParameter = businessUrlTemplate.replace('/store?', '').replace('=:business_slug', '')
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          category_slug: categoryId,
          product_slug: productId
        },
        search: `?${businessParameter}=${slug}`
      })
    }
    if (productUrlTemplate.includes('/store/:business_slug') && productUrlTemplate.includes('category_id')) {
      const ids = productUrlTemplate.split('?')[1].split('&')
      const categoryParameter = ids[0].replace('=:category_id', '')
      const productParameter = ids[1].replace('=:product_id', '')
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          business_slug: slug
        },
        search: `?${categoryParameter}=${categoryId}&${productParameter}=${productId}`
      })
    }
    if (productUrlTemplate.includes('/:business_slug') && !productUrlTemplate.includes('store')) {
      const ids = productUrlTemplate.split('?')[1].split('&')
      const categoryParameter = ids[0].replace('=:category_id', '')
      const productParameter = ids[1].replace('=:product_id', '')
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          business_slug: slug
        },
        search: `?${categoryParameter}=${categoryId}&${productParameter}=${productId}`
      })
    }
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

    if (!reorderState?.error && reorderState?.loading === false && reorderState?.result?.business_id) {
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
          <FavoriteListing isOrder={isOrder}>
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
              {isProfessional && (
                <>
                  {
                    !favoriteList?.loading && favoriteList?.favorites?.map((professional, i) => (
                      <SingleProfessionalCard
                        key={i}
                        professional={professional}
                        handleUpdateProfessionals={handleUpdateFavoriteList}
                      />
                    ))
                  }
                  {favoriteList?.loading && (
                    [...Array(5).keys()].map(i => (
                      <SingleProfessionalCard
                        key={i}
                        professional={{}}
                        isSkeleton
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
