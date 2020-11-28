import React, { useEffect, useState } from 'react'
import { useLanguage, useApi } from 'ordering-components'
import { HomeHero } from '../../../src/components/HomeHero'
import { useHistory } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import Skeleton from 'react-loading-skeleton'
import { NotFoundSource } from '../../../src/components/NotFoundSource'

import {
  HomeContainer,
  SkeletonContainer,
  SkeletonHeader,
  SkeletonContent,
  SkeletonInformation,
  SkeletonSide
} from './styles'

export const HomePage = (props) => {
  const [, t] = useLanguage()
  const history = useHistory()
  const [body, setBody] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [ordering] = useApi()
  const requestsState = {}

  const handlerFindBusiness = () => {
    history.push('/search')
  }

  const getPage = async () => {
    setLoading(true)
    try {
      const source = {}
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages('orderingHome').get({ cancelToken: source })
      setLoading(false)
      if (!error) {
        setBody(result.body)
        setError(null)
      } else {
        setError(result)
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setLoading(false)
        setError([error.message])
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

  return (
    <>
      <HelmetTags page='home' />
      <HomeContainer>
        <HomeHero
          {...props}
          onFindBusiness={handlerFindBusiness}
        />
        {
          loading && (
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
          body && (
            <div dangerouslySetInnerHTML={{
              __html: body
            }}
            />
          )
        }
        {
          (!loading && error) &&
            <NotFoundSource
              content={t('ERROR_HOME', 'Ups... an error has occured')}
            />
        }
      </HomeContainer>
    </>
  )
}
