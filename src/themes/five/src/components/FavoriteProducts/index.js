import React from 'react'
import { useLanguage, useEvent, FavoriteList } from 'ordering-components'
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
    handleUpdateFavoriteList,
    favoriteList,
    pagination,
    getFavoriteList
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
          !favoriteList?.loading && favoriteList?.favorites?.length === 0 && (
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
          <ArrowButtonWrapper className='swiper-button-prev' isLoading={favoriteList?.loading}>
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
            {!favoriteList?.loading && (
              <>
                {
                  favoriteList?.favorites?.map((product, i) => (
                    <SwiperSlide key={i}>
                      <SingleProductCard
                        key={i}
                        isSoldOut={product.inventoried && !product.quantity}
                        product={product}
                        onProductClick={() => {}}
                        handleUpdateProducts={handleUpdateFavoriteList}
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
                        onClick={() => getFavoriteList(pagination?.currentPage + 1)}
                      >
                        {t('LOAD_MORE_PRODUCTS', 'Load more products')}
                      </Button>
                    </ProductCard>
                  </SwiperSlide>
                )}
              </>
            )}

            {favoriteList?.loading && (
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

export const FavoriteProducts = (props) => {
  const favoriteProductsProps = {
    ...props,
    UIComponent: FavoriteProductsUI,
    favoriteURL: 'favorite_products',
    originalURL: 'products'
  }
  return <FavoriteList {...favoriteProductsProps} />
}
