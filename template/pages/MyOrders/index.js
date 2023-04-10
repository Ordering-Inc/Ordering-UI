import React from 'react'
import { useSite, useEvent, useOrderingTheme } from 'ordering-components'
import { MyOrders as MyOrdersController } from '../../../src/themes/five/src/components/MyOrders'
import { HelmetTags } from '../../components/HelmetTags'
import settings from '../../config'
import { checkSiteUrl } from '../../Utils'
import { useWindowSize } from '../../../src/hooks/useWindowSize'

export const MyOrders = (props) => {
  const [events] = useEvent()
  const [{ site }] = useSite()
  const [orderingTheme] = useOrderingTheme()
  const websiteThemeType = orderingTheme?.theme?.my_products?.components?.website_theme?.components?.type
  const websiteThemeBusinessSlug = orderingTheme?.theme?.my_products?.components?.website_theme?.components?.business_slug
  const updatedBusinessSlug = (websiteThemeType === 'single_store' && websiteThemeBusinessSlug) || settings?.businessSlug
  const websiteThemeFranchiseSlug = orderingTheme?.theme?.my_products?.components?.website_theme?.components?.franchise_slug
  const updatedFranchiseSlug = (websiteThemeType === 'franchise' && websiteThemeFranchiseSlug) || settings?.franchiseSlug

  const windowSize = useWindowSize()
  const businessUrlTemplate = checkSiteUrl(site?.business_url_template, '/store/:business_slug')
  const productUrlTemplate = checkSiteUrl(site?.product_url_template, '/store/:business_slug?category=:category_id&product=:product_id')

  const ordersProps = {
    ...props,
    franchiseId: updatedFranchiseSlug,
    businessId: updatedBusinessSlug,
    hideOptions: windowSize.width < 576,
    onRedirectPage: (data) => {
      if (data.page === 'business') {
        const businessSlug = data.params?.store
        if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
          events.emit('go_to_page', { page: 'business', params: { business_slug: businessSlug } })
        } else {
          events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${businessSlug}` })
        }
      } else {
        events.emit('go_to_page', data)
      }
    },
    onProductRedirect: ({ slug, category, product }) => {
      if (!category && !product) {
        if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
          return events.emit('go_to_page', { page: 'business', params: { business_slug: slug } })
        } else {
          return events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${slug}` })
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
    },
    isAsCustomer: true,
    onBusinessClick: (business) => {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        events.emit('go_to_page', { page: 'business', params: { business_slug: business.slug } })
      } else {
        events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${business.slug}` })
      }
    }
  }
  return (
    <>
      <HelmetTags page='orders' />
      <MyOrdersController {...ordersProps} />
    </>
  )
}

export default MyOrders
