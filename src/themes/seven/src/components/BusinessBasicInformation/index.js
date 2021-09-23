import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useUtils, useOrder } from 'ordering-components'
import {
  BusinessContainer,
  BusinessName,
  BusinessHeader,
  CloseOverall,
  BuinessMeta,
  MetaItem,
  ScheduleDate,
  ScheduleTime,
  ScheduleTitle
} from './styles'

export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
    businessState
  } = props
  const { business, loading } = businessState
  const [, t] = useLanguage()
  const [{ parsePrice }] = useUtils()
  const [orderState] = useOrder()

  const scheduleFormatted = ({ hour, minute }) => {
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(hour)}:${checkTime(minute)}`
  }

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
            <>
              <h2 className='bold'>{business?.name}</h2>
              {(business?.today?.enabled) && (
                <ScheduleDate>
                  <ScheduleTitle> {t('TODAY_DATE', "Today's Hours")}{' : '} </ScheduleTitle>
                  <ScheduleTime>{scheduleFormatted(business.today.lapses[0].open)}</ScheduleTime>
                  <ScheduleTime> {' - '}</ScheduleTime>
                  <ScheduleTime>{scheduleFormatted(business.today.lapses[0].close)}</ScheduleTime>
                </ScheduleDate>
              )}
              {(
                <BuinessMeta>
                  {business?.delivery_price >= 0 ? (
                    <>
                      {orderState?.options?.type === 1 && (
                        <MetaItem>
                          <span>{t('DELIVERY_PRICE', 'Delivery Price')}{' : '}</span>
                          {business && parsePrice(business?.delivery_price)}
                        </MetaItem>
                      )}
                    </>
                  ) : (
                    <Skeleton width={70} />
                  )}
                  {business?.distance && (
                    <>
                      {business?.distance || business?.distance > 0 ? (
                        <>
                          <MetaItem>
                            <span>{t('DISTANCE', 'Distance')}{' : '}</span>
                            {business?.distance.toFixed(2)}
                          </MetaItem>
                        </>
                      ) : (
                        <Skeleton width={70} />
                      )}
                    </>
                  )}
                </BuinessMeta>
              )}
            </>
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
