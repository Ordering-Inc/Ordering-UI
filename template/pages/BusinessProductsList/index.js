import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useApi, useEvent, useSite } from 'ordering-components'
import { BusinessProductsListing } from '../../../src/themes/five/src/components/BusinessProductsListing'
import { HelmetTags } from '../../components/HelmetTags'
import { capitalize } from '../../../src/utils'
import settings from '../../config'
import { checkSiteUrl } from '../../Utils'

export const BusinessProductsList = (props) => {
  const [{ site }] = useSite()
  const { search } = useLocation()
  const [helmetMetaTags, setHelmetMetaTags] = useState({
    title: '',
    description: '',
    keywords: ''
  })

  let businessSlug = ''
  const businessUrlTemplate = checkSiteUrl(site?.business_url_template, '/store/:business_slug')
  const productUrlTemplate = checkSiteUrl(site?.product_url_template, '/store/:business_slug?category=:category_id&product=:product_id')
  
  if (businessUrlTemplate.includes('?')) {
    const businessParameter = businessUrlTemplate.replace('/store?', '').replace('=:business_slug', '')
    const params = new URLSearchParams(search)
    businessSlug = params.get(businessParameter)
  } else {
    const { business_slug } = useParams()
    businessSlug = business_slug
  }
  const [ordering] = useApi()

  let categoryId
  let productId
  let tableNumber

  if (productUrlTemplate === '/store/:business_slug/:category_slug/:product_slug' ||
    productUrlTemplate === '/:business_slug/:category_slug/:product_slug' ||
    productUrlTemplate.includes('/store/:category_slug/:product_slug')
  ) {
    const { category_slug, product_slug } = useParams()
    categoryId = category_slug
    productId = product_slug
  }

  if ((productUrlTemplate.includes('/store/:business_slug') && productUrlTemplate.includes('category_id')) ||
    (productUrlTemplate.includes('/:business_slug') && !productUrlTemplate.includes('store'))
  ) {
    if (search) {
      const ids = productUrlTemplate.split('?')[1].split('&')
      const categoryParameter = ids[0].replace('=:category_id', '')
      const productParameter = ids[1].replace('=:product_id', '')
      const params = new URLSearchParams(search)
      categoryId = params.get(categoryParameter)
      productId = params.get(productParameter)
    }
  }

  if (search) {
    const params = new URLSearchParams(search)
    tableNumber = params.get('table_number')
  }

  if (tableNumber) {
    const tableNumberFromStorage = window.localStorage.getItem('table_number')
    if (tableNumberFromStorage) {
      window.localStorage.removeItem('table_number')
    }

    window.localStorage.setItem(
      'table_number',
      JSON.stringify({
        tableNumber,
        slug: businessSlug
      })
    )
  }

  const [events] = useEvent()

  const businessProductsProps = {
    ...props,
    ordering,
    avoidBusinessLoading: true,
    isCustomLayout: settings?.use_marketplace,
    useKioskApp: settings?.use_kiosk,
    isSearchByName: true,
    isSearchByDescription: true,
    slug: businessSlug,
    categoryId,
    productId,
    businessProps: [
      'id',
      'name',
      'header',
      'logo',
      'name',
      'open',
      'about',
      'ribbon',
      'description',
      'address',
      'location',
      'timezone',
      'schedule',
      'service_fee',
      'delivery_price',
      'distance',
      'delivery_time',
      'gallery',
      'pickup_time',
      'reviews',
      'featured',
      'offers',
      'food',
      'laundry',
      'alcohol',
      'groceries',
      'slug',
      'products',
      'zones',
      'front_layout',
      'professionals',
      'facebook_profile',
      'instagram_profile',
      'tiktok_profile',
      'pinterest_profile',
      'whatsapp_number',
      'snapchat_profile',
      'previously_products'
    ],
    handleSearchRedirect: () => {
      events.emit('go_to_page', { page: 'search' })
    },
    onProductRedirect: ({ slug, category, product }) => {
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
            business_slug: slug,
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
            business_slug: slug,
          },
          search: `?${categoryParameter}=${category}&${productParameter}=${product}`,
          replace: true
        })
      }
    },
    onCheckoutRedirect: (cartUuid) => {
      events.emit('go_to_page', { page: 'checkout', params: { cartUuid } })
    },
    onChangeMetaTag: (title, description, keywords) => {
      setHelmetMetaTags({
        title: title,
        description: description,
        keywords: keywords
      })
    },
    onBusinessClick: (business) => {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        events.emit('go_to_page', { page: 'business', params: { business_slug: business.slug } })
      } else {
        events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${business.slug}` })
      }
    }
  }

  useEffect(() => {
    if (businessSlug) {
      const metaTitle = capitalize(businessSlug)
      setHelmetMetaTags({
        ...helmetMetaTags,
        title: metaTitle,
      })
    }
  }, [businessSlug])

  return (
    <>
      <HelmetTags page='business' helmetMetaTags={helmetMetaTags} />
      <BusinessProductsListing {...businessProductsProps} />
    </>
  )
}
