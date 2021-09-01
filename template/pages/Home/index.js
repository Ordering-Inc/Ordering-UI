import React, { useEffect, useState } from 'react'
import { useApi } from 'ordering-components'
import { HomeHero } from '../../../src/themes/eight/src/components/HomeHero'
import { useHistory } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import Skeleton from 'react-loading-skeleton'

import {
  HomeContainer,
  SkeletonContainer,
  SkeletonContent
} from './styles'

export const HomePage = (props) => {
  const history = useHistory()
  const [homeState, setHomeState] = useState({ body: null, loading: false, error: null })
  const [ordering] = useApi()
  const requestsState = {}

  const handlerFindBusiness = () => {
    history.push('/search')
  }

  const getPage = async () => {
    setHomeState({ ...homeState, loading: true })
    try {
      const source = {}
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages('homeChickFillA').get({ cancelToken: source })
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
    getPage()
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
      <HomeContainer>
        <HomeHero
          {...homeHeroProps}
        />
        {
          homeState.loading && (
            <SkeletonContainer>
              <SkeletonContent>
                <Skeleton width='100%' height='100%' />
              </SkeletonContent>
              <SkeletonContent>
                <Skeleton width='100%' height='100%' />
              </SkeletonContent>
            </SkeletonContainer>
          )
        }
        {
          homeState.body && (
            <div dangerouslySetInnerHTML={{
              __html: homeState.body
            }}
            />
          )
        }
      </HomeContainer>
    </>
  )
}
