import React, { useEffect, useState } from 'react'
import { useApi, useEvent, useSite, useOrderingTheme } from 'ordering-components'
import { HomeHero } from '../../../src/themes/five/src/components/HomeHero'
import { KioskHomeHero } from '../../../src/themes/five/src/components/HomeHero/layouts/KioskHomeHero'
import { useHistory } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import Skeleton from 'react-loading-skeleton'
import settings from '../../config'

import { PageBanner } from '../../../src/themes/five/src/components/PageBanner'

import {
  HomeContainer,
  SkeletonContainer,
  SkeletonHeader,
  SkeletonContent,
  SkeletonInformation,
  SkeletonSide
} from './styles'
import { checkSiteUrl } from '../../Utils'

export const HomePage = (props) => {
  const history = useHistory()
  const [homeState, setHomeState] = useState({ body: null, loading: false, error: null })
  const [ordering] = useApi()
  const [events] = useEvent()
  const [{ site }] = useSite()
  const [{ theme }] = useOrderingTheme()

  const requestsState = {}
  const isKioskApp = settings?.use_kiosk
  const businessUrlTemplate = checkSiteUrl(site?.business_url_template, '/store/:business_slug')
  const homeContent = theme?.my_products?.components?.theme_settings?.components?.values?.homepage_content

  const handlerFindBusiness = () => {
    history.push('/search')
  }

  const handleGoToBusiness = () => {
    if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
      events.emit('go_to_page', { page: 'business', params: { business_slug: settings?.businessSlug } })
    } else {
      events.emit('go_to_page', { page: 'business', search: `?${businessUrlTemplate.split('?')[1].replace(':business_slug', '')}${settings?.businessSlug}` })
    }
  }

  const getPage = async () => {
    setHomeState({ ...homeState, loading: true })
    try {
      const source = {}
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages('originalHomeContent').get({ cancelToken: source })
      setHomeState({ ...homeState, loading: false })
      if (!error) {
        setHomeState({ ...homeState, body: result.body })
      } else {
        setHomeState({ ...homeState, error: result })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setHomeState({ ...homeState, loading: false, error: [err.message] })
      }
    }
  }

  useEffect(() => {
    if (!isKioskApp) {
      getPage()
    }
    return () => {
      if (requestsState.page) {
        requestsState.page.cancel()
      }
    }
  }, [])

  const homeHeroProps = {
    ...props,
    onFindBusiness: handlerFindBusiness
  }

  return (
    <>
      <HelmetTags page='home' />
      {isKioskApp ? (
        <KioskHomeHero handleGoToBusiness={handleGoToBusiness} />
      ) : (
        <HomeContainer>
          <HomeHero
            {...homeHeroProps}
          />
          {
            homeState.loading && (
              <SkeletonContainer>
                <SkeletonHeader>
                  <Skeleton width='100%' height='100%' />
                </SkeletonHeader>
                <SkeletonContent>
                  <SkeletonInformation>
                    <Skeleton width='100%' height='100px' />
                    <Skeleton width='100%' height='100px' />
                    <Skeleton width='100%' height='100px' />
                    <Skeleton width='100%' height='100px' />
                  </SkeletonInformation>
                  <SkeletonSide>
                    <Skeleton width='100%' height='100%' />
                  </SkeletonSide>
                </SkeletonContent>
              </SkeletonContainer>
            )
          }
          {
            (homeContent || homeState.body) && (
              <div dangerouslySetInnerHTML={{
                __html: (homeContent || homeState.body)
              }}
              />
            )
          }
          <PageBanner position='web_home_page' />
        </HomeContainer>
      )}
    </>
  )
}
