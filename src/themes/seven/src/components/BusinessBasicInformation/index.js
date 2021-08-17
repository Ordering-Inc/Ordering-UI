import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components'
import {
  BusinessContainer,
  BusinessName,
  BusinessHeader,
  CloseOverall
} from './styles'

export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
    businessState
  } = props
  const { business, loading } = businessState
  const [, t] = useLanguage()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>)
      )}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />)
      )}
      <BusinessContainer isSkeleton={isSkeleton} id='container'>
        <BusinessName isClosed={!business?.open}>
          {!loading ? (
            <p className='bold'>{business?.name}</p>
          ) : (
            <Skeleton width={150} height={25} />
          )}
        </BusinessName>
        <BusinessHeader isClosed={!business?.open} bgimage={business?.header} />
        {!business?.open && (
          <CloseOverall>
            {!isSkeleton && <h1>{t('CLOSED', 'Closed')}</h1>}
          </CloseOverall>
        )}
      </BusinessContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />)
      )}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>)
      )}
    </>
  )
}
