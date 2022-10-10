import React from 'react'
import { convertHoursToMinutes } from '../../../../../../../utils'
import {
  BusinessInformation as BusinessInformationController,
  useLanguage,
  useOrderingTheme,
  useEvent
} from 'ordering-components'

import {
  BusinessInformationContainer,
  BusinessContent,
  SectionTitle,
  ScheduleBlock,
  ScheduleSection,
  ScheduleContainer,
  ModalIcon,
  Description,
  BusinessTitle,
  Divider,
  BusinessTitleContainer,
  AditionalInformationContainer,
  PaymethodsAccepted,
  ChangeLocation
} from './styles'
import MdClose from '@meronex/icons/md/MdClose'

export const BusinessInformationUI = (props) => {
  const {
    business,
    businessSchedule,
    onClose
  } = props

  const [, t] = useLanguage()

  const daysOfWeek = [
    t('SUNDAY', 'Sunday'),
    t('MONDAY', 'Monday'),
    t('TUESDAY', 'Tuesday'),
    t('WEDNESDAY', 'Wednesday'),
    t('THURSDAY', 'Thurday'),
    t('FRIDAY', 'Friday'),
    t('SATURDAY', 'Saturday')
  ]

  const [orderingTheme] = useOrderingTheme()
  const [events] = useEvent()

  const showSchedule = !orderingTheme?.theme?.business_view?.components?.information?.components?.schedule?.hidden

  const scheduleFormatted = ({ hour, minute }) => {
    const AmOrPm = hour >= 12 ? 'pm' : 'am'
    const _hour = (hour % 12) || 12
    const checkTime = (val) => val < 10 ? `0${val}` : val
    return `${checkTime(_hour)}:${checkTime(minute)}${AmOrPm}`
  }

  const handleGoToHome = () => {
    events.emit('go_to_page', { page: 'home' })
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessInformationContainer>
        <ModalIcon>
          <MdClose onClick={() => onClose(false)} />
        </ModalIcon>
        <BusinessContent>
          <BusinessTitleContainer>
            <BusinessTitle>{business?.name}</BusinessTitle>
          </BusinessTitleContainer>
          <p>{business?.address}</p>
          {(business?.cellphone || business?.phone) && (
            <p>{business?.cellphone || business?.phone}</p>
          )}
          <p>{t('DELIVERY_TIME', 'Delivery Time')}: {convertHoursToMinutes(business?.delivery_time)}</p>
          <p>{t('PICKUP_TIME', 'Pickup Time')}: {convertHoursToMinutes(business?.pickup_time)}</p>
          <ChangeLocation onClick={() => handleGoToHome()}>{t('CHANGE_LOCATION', 'Change location')}</ChangeLocation>
          {business.description && (
            <Description>{business.description}</Description>
          )}
        </BusinessContent>
        <Divider />
        <AditionalInformationContainer>
          {businessSchedule?.length > 0 && (
            <>
              {showSchedule && (
                <ScheduleSection>
                  <SectionTitle>{t('OPENING_TIME', 'Opening time')}</SectionTitle>
                  <ScheduleContainer>
                    {businessSchedule.map((schedule, i) => (
                      <ScheduleBlock key={i}>
                        <h4>{daysOfWeek[i]}</h4>
                        {schedule.enabled ? (
                          <div>
                            <p>{scheduleFormatted(schedule.lapses[0].open)}</p>
                            <div>-</div>
                            <p>{scheduleFormatted(schedule.lapses[0].close)}</p>
                          </div>
                        ) : (
                          <p className='close'>{t('CLOSED', 'Closed')}</p>
                        )}
                      </ScheduleBlock>
                    ))}
                  </ScheduleContainer>
                </ScheduleSection>
              )}
            </>
          )}
          <PaymethodsAccepted>
            <SectionTitle>{t('PAYMETHODS_ACEPTED', 'Paymethods accepted')}</SectionTitle>
            <p>
              {business?.paymethods?.map(({ paymethod }, i) => (
                <span key={paymethod?.id}>{paymethod?.name}{i + 1 !== business?.paymethods?.length && ', '}</span>
              ))}
            </p>
          </PaymethodsAccepted>
        </AditionalInformationContainer>
      </BusinessInformationContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const BusinessInformation = (props) => {
  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  }

  const BusinessInformationProps = {
    ...props,
    UIComponent: BusinessInformationUI,
    googleMapsControls
  }
  return <BusinessInformationController {...BusinessInformationProps} />
}
