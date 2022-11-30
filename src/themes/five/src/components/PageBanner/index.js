import React from 'react'
import { PageBanner as PageBannerController } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import {
  BannerContainer,
  ImageWrapper
} from './styles'

SwiperCore.use([Navigation])

const PageBannerUI = (props) => {
  const {
    pageBannerState
  } = props

  return (
    <>
      {pageBannerState.loading ? (
        <BannerContainer>
          <Skeleton height={250} />
        </BannerContainer>
      ) : (
        pageBannerState.banner?.items && (
          <BannerContainer>
            <Swiper
              navigation
              spaceBetween={0}
              loop={pageBannerState.banner?.items.length > 1}
            >
              {pageBannerState.banner?.items.map((img, i) => (
                <SwiperSlide key={i}>
                  <ImageWrapper>
                    <img src={img.url} className='banner-img' alt='' />
                  </ImageWrapper>
                </SwiperSlide>
              ))}
            </Swiper>
          </BannerContainer>
        )
      )}
    </>
  )
}

export const PageBanner = (props) => {
  const pageBannerProps = {
    ...props,
    UIComponent: PageBannerUI
  }
  return <PageBannerController {...pageBannerProps} />
}
