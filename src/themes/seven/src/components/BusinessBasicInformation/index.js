import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components'
import {
  BusinessContainer,
  BusinessName,
  BusinessHeader,
  CloseOverall,
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
