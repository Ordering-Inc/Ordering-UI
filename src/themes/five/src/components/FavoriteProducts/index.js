import React from 'react'
import { useLanguage, useEvent, FavoriteProducts as FavoriteProductsController } from 'ordering-components'
import { SingleProductCard } from '../SingleProductCard'
import { NotFoundSource } from '../NotFoundSource'
import { Button } from '../../styles/Buttons'
import MdKeyboardArrowLeft from '@meronex/icons/md/MdKeyboardArrowLeft'
import MdKeyboardArrowRight from '@meronex/icons/md/MdKeyboardArrowRight'

import {
  Container,
  ErrorMessage,
  BusinessListWrapper,
  ArrowButtonWrapper,
  ProductCard
} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation])

const FavoriteProductsUI = (props) => {
  const {
    handleUpdateProducts,
    favoriteProductList,
    pagination,
    getFavoriteProductList
  } = props

  const [, t] = useLanguage()
  const [events] = useEvent()

  const handleGoToBusinessList = () => {
    events.emit('go_to_page', { page: 'search' })
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
          !favoriteProductList?.loading && favoriteProductList?.products?.length === 0 && (
            <NotFoundSource>
              <Button
                outline
                color='primary'
                onClick={() => handleGoToBusinessList()}
                style={{ height: '44px' }}
              >
                {t('ADD_FAVORITE', 'Add favorite')}
              </Button>
            </NotFoundSource>
          )
        }
        <BusinessListWrapper>
          <ArrowButtonWrapper className='swiper-button-prev' isLoading={favoriteProductList?.loading}>
            <MdKeyboardArrowLeft />
          </ArrowButtonWrapper>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              550: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              769: {
                slidesPerView: 3,
                spaceBetween: 50
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
            {!favoriteProductList?.loading && (
              <>
                {
                  favoriteProductList?.products?.map((product, i) => (
                    <SwiperSlide key={i}>
                      <SingleProductCard
                        key={i}
                        isSoldOut={product.inventoried && !product.quantity}
                        product={product}
                        onProductClick={() => {}}
                        handleUpdateProducts={handleUpdateProducts}
                      />
                    </SwiperSlide>
                  ))
                }
                {pagination?.totalPages && pagination?.currentPage < pagination?.totalPages && (
                  <SwiperSlide>
                    <ProductCard>
                      <Button
                        color='primary'
                        outline
                        onClick={() => getFavoriteProductList(pagination?.currentPage + 1)}
                      >
                        {t('LOAD_MORE_PRODUCTS', 'Load more products')}
                      </Button>
                    </ProductCard>
                  </SwiperSlide>
                )}
              </>
            )}

            {favoriteProductList?.loading && (
              [...Array(5).keys()].map(i => (
                <SwiperSlide key={i}>
                  <SingleProductCard
                    key={`skeleton:${i}`}
                    isSkeleton
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>
          <ArrowButtonWrapper className='swiper-button-next' isLoading={favoriteProductList?.loading}>
            <MdKeyboardArrowRight />
          </ArrowButtonWrapper>
        </BusinessListWrapper>
        {favoriteProductList?.error && favoriteProductList?.error.length > 0 && favoriteProductList?.products?.length === 0 && (
          favoriteProductList?.error.map((e, i) => (
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

export const FavoriteProducts = (props) => {
  const favoriteProductsProps = {
    ...props,
    UIComponent: FavoriteProductsUI
  }
  return <FavoriteProductsController {...favoriteProductsProps} />
}
