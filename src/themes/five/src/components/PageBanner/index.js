import React from 'react'
import {
  useSite,
  useEvent,
  PageBanner as PageBannerController
} from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { checkSiteUrl } from '../../../../../utils'

import {
  BannerContainer,
  ImageWrapper
} from './styles'

SwiperCore.use([Navigation])

const PageBannerUI = (props) => {
  const {
    pageBannerState
  } = props

  const [{ site }] = useSite()
  const [events] = useEvent()

  const businessUrlTemplate = checkSiteUrl(site?.business_url_template, '/store/:business_slug')
  const productUrlTemplate = checkSiteUrl(site?.product_url_template, '/store/:business_slug?category=:category_id&product=:product_id')

  const onProductRedirect = ({ slug, category, product }) => {
    if (!category && !product) {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        return events.emit('go_to_page', { page: 'business', params: { business_slug: slug }, replace: true })
      } else {
        return events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${slug}`, replace: true })
      }
    }
    if (productUrlTemplate === '/store/:business_slug/:category_slug/:product_slug' || productUrlTemplate === '/:business_slug/:category_slug/:product_slug') {
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          business_slug: slug,
          category_slug: category,
          product_slug: product
        },
        replace: true
      })
    }
    if (productUrlTemplate.includes('/store/:category_slug/:product_slug')) {
      const businessParameter = businessUrlTemplate.replace('/store?', '').replace('=:business_slug', '')
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          category_slug: category,
          product_slug: product
        },
        search: `?${businessParameter}=${slug}`,
        replace: true
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
        search: `?${categoryParameter}=${category}&${productParameter}=${product}`,
        replace: true
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
        search: `?${categoryParameter}=${category}&${productParameter}=${product}`,
        replace: true
      })
    }
  }

  const handleGoToPage = (action) => {
    if (!action?.url) return
    let slug
    if (action.type === 'business') {
      slug = action.url.split('store/')[1]
      onProductRedirect({ slug })
    }
    if (action.type === 'product') {
      slug = action.url.split('store/')[1]?.split('?')[0]
      const paramString = action.url.split('?')[1]
      const urlParams = new URLSearchParams(paramString)
      const product = urlParams.get('product')
      const category = urlParams.get('category')
      onProductRedirect({ slug, category, product })
    }
  }

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
                <SwiperSlide
                  key={i}
                >
                  <ImageWrapper
                    onClick={() => handleGoToPage(img?.action)}
                  >
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
