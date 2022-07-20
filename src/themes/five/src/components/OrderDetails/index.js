import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  OrderDetails as OrderDetailsController
} from 'ordering-components'

import { NotFoundSource } from '../NotFoundSource'

import {
  Container,
  SkeletonBlockWrapp,
  SkeletonBlock,
  WrapperLeftContainer,
  WrapperRightContainer,
  SkeletonWrapper
} from './styles'
import { useTheme } from 'styled-components'
import { Appointment } from './Layout/Appointment'

const OrderDetailsUI = (props) => {
  const {
    handleOrderRedirect,
    isCustomerMode
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()

  const { order, loading, businessData, error } = props.order

  const [isService, setIsService] = useState(false)

  console.log(order, businessData, 'this is data')

  const isOriginalLayout = theme?.layouts?.confirmation?.components?.layout?.type === 'original'

  useEffect(() => {
    if (!order) return
    let _isService = false
    order.products.forEach(product => {
      if (product?.type === 'service') {
        _isService = true
      }
    })
    setIsService(_isService)
  }, [order])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container isCustomerMode={isCustomerMode || isOriginalLayout}>
        {loading && !error && !(isCustomerMode || isOriginalLayout) && (
          <SkeletonWrapper>
            <WrapperLeftContainer>
              <SkeletonBlockWrapp>
                <SkeletonBlock width={90}>
                  <Skeleton height={40} width={230} />
                  <Skeleton height={20} width={80} />
                  <Skeleton height={15} />
                  <Skeleton height={20} width={210} style={{ marginBottom: '50px' }} />
                  <Skeleton height={40} width={230} />
                  <Skeleton height={20} width={180} />
                  <Skeleton height={20} width={210} />
                  <Skeleton height={20} width={150} />
                  <Skeleton height={20} width={170} style={{ marginBottom: '50px' }} />
                  <Skeleton height={40} width={230} />
                  <Skeleton height={20} width={180} />
                  <Skeleton height={20} width={210} />
                  <Skeleton height={20} width={150} />
                  <Skeleton height={20} width={170} style={{ marginBottom: '50px' }} />
                </SkeletonBlock>
              </SkeletonBlockWrapp>
            </WrapperLeftContainer>
            <WrapperRightContainer>
              <SkeletonBlockWrapp>
                <SkeletonBlock width={90}>
                  <Skeleton height={40} width={230} />
                  <Skeleton height={20} />
                  <Skeleton height={45} width={100} />
                  <Skeleton height={60} />
                  <Skeleton height={300} />
                  <Skeleton height={60} />
                  <Skeleton height={25} />
                  <Skeleton height={25} />
                  <Skeleton height={25} />
                </SkeletonBlock>
              </SkeletonBlockWrapp>
            </WrapperRightContainer>
          </SkeletonWrapper>
        )}

        {loading && !error && (isCustomerMode || isOriginalLayout) && (
          <SkeletonWrapper isCustomerMode={isCustomerMode || isOriginalLayout}>
            <>
              <SkeletonBlockWrapp>
                <SkeletonBlock width={90} isCustomerMode={isCustomerMode || isOriginalLayout}>
                  <Skeleton height={40} width={300} />
                  <Skeleton height={15} width={120} />
                  <Skeleton height={15} />
                  <Skeleton height={20} width={900} style={{ marginBottom: '50px' }} />
                  <Skeleton height={60} width={900} />
                  <Skeleton height={200} width={900} />
                  <Skeleton height={20} width={900} />
                  <Skeleton height={20} width={900} />
                  <Skeleton height={20} width={900} style={{ marginBottom: '50px' }} />
                  <Skeleton height={40} width={900} />
                  <Skeleton height={20} width={900} />
                  <Skeleton height={20} width={900} />
                  <Skeleton height={20} width={900} />
                  <Skeleton height={20} width={900} style={{ marginBottom: '50px' }} />
                </SkeletonBlock>
              </SkeletonBlockWrapp>
            </>
          </SkeletonWrapper>
        )}
        {!loading && !error && !isService && (
          <div>Original</div>
        )}
        {!loading && !error && isService && (
          <Appointment {...props} />
        )}
        {!loading && error && (
          error.includes('ERROR_ACCESS_EXPIRED') ? (
            <NotFoundSource
              content={t(error[0], 'Sorry, the order has expired.')}
            />
          ) : (
            <NotFoundSource
              content={t('NOT_FOUND_ORDER', theme?.defaultLanguages?.NOT_FOUND_ORDER || 'Sorry, we couldn\'t find the requested order.')}
              btnTitle={t('ORDERS_REDIRECT', theme?.defaultLanguages?.ORDERS_REDIRECT || 'Go to Orders')}
              onClickButton={handleOrderRedirect}
            />
          )
        )}
      </Container>
      {
        props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))
      }
      {
        props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))
      }
    </>
  )
}

export const OrderDetails = (props) => {
  const [, t] = useLanguage()
  const userCustomer = JSON.parse(window.localStorage.getItem('user-customer'))
  const orderDetailsProps = {
    ...props,
    userCustomerId: userCustomer?.id,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    orderTypes: props.orderTypes || [
      {
        value: 1,
        text: t('DELIVERY', 'Delivery')
      },
      {
        value: 2,
        text: t('PICKUP', 'Pickup')
      },
      {
        value: 3,
        text: t('EAT_IN', 'Eat in')
      },
      {
        value: 4,
        text: t('CURBSIDE', 'Curbside')
      },
      {
        value: 5,
        text: t('DRIVE_THRU', 'Drive thru')
      }
    ],
    UIComponent: OrderDetailsUI
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
