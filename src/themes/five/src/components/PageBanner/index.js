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
    pageBannerState,
    isCustomerMode,
    handleCustomProductBannerClick,
    business
  } = props

  const [{ site }] = useSite()
  const [events] = useEvent()

  const businessUrlTemplate = checkSiteUrl(site?.business_url_template, '/store/:business_slug')
  const productUrlTemplate = checkSiteUrl(site?.product_url_template, '/store/:business_slug?category=:category_id&product=:product_id')

  const onProductRedirect = ({ slug, category, product }) => {
    if (!category && !product) {
      if (isCustomerMode) {
        return events.emit('go_to_page', { page: 'business', params: { store: slug } })
      } else {
        if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
          return events.emit('go_to_page', { page: 'business', params: { business_slug: slug }, replace: false })
        } else {
          return events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${slug}`, replace: false })
        }
      }
    }
    events.emit('product_banner_clicked')
    if (isCustomerMode) {
      return events.emit('go_to_page', {
        page: 'business',
        params: { store: slug },
        search: `?category=${category}&product=${product}`,
        replace: true
      })
    } else {
      if (productUrlTemplate === '/store/:business_slug/:category_slug/:product_slug' || productUrlTemplate === '/:business_slug/:category_slug/:product_slug') {
        return events.emit('go_to_page', {
          page: 'product',
          params: {
            business_slug: slug,
            category_slug: category,
            product_slug: product
          },
          replace: false
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
          replace: false
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
          replace: false
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
          replace: false
        })
      }
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
      const productId = urlParams.get('product')
      const categoryId = urlParams.get('category')
      const foundCategory = business?.categories?.find(category => category.id === Number(categoryId))
      const foundProduct = foundCategory?.products?.find(product => product.id === Number(productId))
      if (business?.slug === slug && foundProduct) {
        handleCustomProductBannerClick(foundProduct)
      } else {
        onProductRedirect({ slug, category: categoryId, product: productId })
      }
    }
  }

  return (
    <>
      {pageBannerState.loading ? (
        <BannerContainer>
          <Skeleton height={250} />
        </BannerContainer>
      ) : (
        pageBannerState.banner?.items?.length > 0 && (
          <BannerContainer>
            <Swiper
              navigation={pageBannerState.banner?.items?.length > 1}
              spaceBetween={0}
              shortSwipes={false}
              loop={pageBannerState.banner?.items.length > 1}
              touchStartPreventDefault={false}
              slidesPerView={1}
            >
              {pageBannerState.banner?.items.map((img, i) => (
                <SwiperSlide
                  key={i}
                  onClick={() => handleGoToPage(img?.action)}
                >
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
