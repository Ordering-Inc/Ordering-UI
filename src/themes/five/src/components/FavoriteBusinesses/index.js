import React, { useState, useEffect } from 'react'
import { useLanguage, useOrder, useEvent } from 'ordering-components'
import { FavoriteBusinesses as FavoriteBusinessesController } from './naked'
import { BusinessController } from '../BusinessController'
import { BusinessPreorder } from '../BusinessPreorder'
import { NotFoundSource } from '../NotFoundSource'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'
import MdKeyboardArrowLeft from '@meronex/icons/md/MdKeyboardArrowLeft'
import MdKeyboardArrowRight from '@meronex/icons/md/MdKeyboardArrowRight'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import {
  Container,
  ErrorMessage,
  BusinessListWrapper,
  ArrowButtonWrapper,
  BusinessCard
} from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation])

const FavoriteBusinessesUI = (props) => {
  const {
    favoriteBusinessList,
    handleUpdateBusinessList,
    pagination,
    getFavoriteBusinessList
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()
  const [events] = useEvent()
  const { width } = useWindowSize()

  const [isPreorder, setIsPreorder] = useState(false)
  const [preorderBusiness, setPreorderBusiness] = useState(null)

  const handleClickBusiness = (business) => {
    events.emit('go_to_page', { page: 'business', params: { store: business.slug } })
  }

  const handleGoToBusinessList = () => {
    events.emit('go_to_page', { page: 'search' })
  }

  const handleClosePreorder = () => {
    setIsPreorder(false)
    setPreorderBusiness(null)
  }

  useEffect(() => {
    if (preorderBusiness) setIsPreorder(true)
  }, [preorderBusiness])

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
          !favoriteBusinessList?.loading && favoriteBusinessList?.businesses.length === 0 && (
            <NotFoundSource
              content={t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')}
            >
              <Button
                outline
                color='primary'
                onClick={() => handleGoToBusinessList()}
                style={{ height: '44px' }}
              >
                {t('CHANGE_ADDRESS', 'Select other Address')}
              </Button>
            </NotFoundSource>
          )
        }
        <BusinessListWrapper>
          <ArrowButtonWrapper className='swiper-button-prev' isLoading={favoriteBusinessList?.loading}>
            <MdKeyboardArrowLeft />
          </ArrowButtonWrapper>
          <Swiper
            spaceBetween={0}
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
              993: {
                slidesPerView: 3,
                spaceBetween: 50
              }
            }}
            freeMode={width > 400}
            watchSlidesProgress
            className='swiper-businesses'
            preventClicksPropagation={false}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
          >
            {!favoriteBusinessList?.loading && (
              <>
                {
                  favoriteBusinessList?.businesses?.map((business) => (
                    <SwiperSlide key={business?.id}>
                      <BusinessController
                        className='card'
                        business={business}
                        isBusinessOpen={business.open}
                        handleCustomClick={handleClickBusiness}
                        orderType={orderState?.options?.type}
                        // isCustomLayout={isCustomLayout}
                        // isCustomerMode={isCustomerMode}
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
                        handleUpdateBusinessList={handleUpdateBusinessList}
                      />
                    </SwiperSlide>
                  ))
                }
                {pagination?.totalPages && pagination?.currentPage < pagination?.totalPages && (
                  <SwiperSlide>
                    <BusinessCard>
                      <Button
                        color='primary'
                        outline
                        onClick={() => getFavoriteBusinessList(pagination?.currentPage + 1)}
                      >
                        {t('LOAD_MORE_BUSINESSES', 'Load more businesses')}
                      </Button>
                    </BusinessCard>
                  </SwiperSlide>
                )}
              </>
            )}

            {favoriteBusinessList?.loading && (
              [...Array(8).keys()].map(i => (
                <SwiperSlide key={i}>
                  <BusinessController
                    className='card'
                    business={{}}
                    isSkeleton
                    orderType={orderState?.options?.type}
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>
          <ArrowButtonWrapper className='swiper-button-next' isLoading={favoriteBusinessList?.loading}>
            <MdKeyboardArrowRight />
          </ArrowButtonWrapper>
        </BusinessListWrapper>
        {favoriteBusinessList?.error && favoriteBusinessList?.error.length > 0 && favoriteBusinessList?.businesses.length === 0 && (
          favoriteBusinessList?.error.map((e, i) => (
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

export const FavoriteBusinesses = (props) => {
  const favoriteBusinessesProps = {
    ...props,
    UIComponent: FavoriteBusinessesUI
  }
  return <FavoriteBusinessesController {...favoriteBusinessesProps} />
}
