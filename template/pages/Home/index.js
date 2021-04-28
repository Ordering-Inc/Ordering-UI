import React, { useState, useEffect } from 'react'
import { useLanguage, useOrder, useApi } from 'ordering-components'
import { HomeHero } from '../../../src/themes/two/src/components/HomeHero'
import { AddressForm } from '../../../src/themes/two/src/components/AddressForm'
import { Modal } from '../../../src/themes/two/src/components/Modal'
import { HelmetTags } from '../../components/HelmetTags'
import Skeleton from 'react-loading-skeleton'

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
  const [orderState] = useOrder()
  const [ordering] = useApi()
  const [modals, setModals] = useState(false)
  const [homeState, setHomeState] = useState({ body: null, loading: false, error: null })
  const requestsState = {}

  const getPage = async () => {
    setHomeState({ ...homeState, loading: true })
    try {
      const source = {}
      requestsState.page = source
      const { content: { error, result } } = await ordering.pages('homedoordash').get({ cancelToken: source })
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

  return (
    <>
      <HelmetTags page='home' />
      <HomeContainer>
        <HomeHero
          {...props}
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
          homeState.body && (
            <div dangerouslySetInnerHTML={{
              __html: homeState.body
            }}
            />
          )
        }
        <Modal
          title={t('ADDRESS', 'Address')}
          open={modals}
          onClose={() => setModals(false)}
        >
          <AddressForm
            useValidationFileds
            address={orderState?.options?.address || {}}
            onClose={() => setModals(false)}
            onSaveAddress={() => setModals(false)}
            onCancel={() => setModals(false)}
          />
        </Modal>
      </HomeContainer>
    </>
  )
}
