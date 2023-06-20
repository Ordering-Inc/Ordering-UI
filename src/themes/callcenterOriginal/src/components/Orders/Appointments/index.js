import React, { useState } from 'react'
import { useLanguage, useConfig, useUtils, Appointments as AppointmentsController } from 'ordering-components'
import { List as MenuIcon, ChevronRight } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { BusinessSelectHeader } from '../../Stores/BusinessSelectHeader'
import moment from 'moment'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarHeader } from './CalendarHeader'
import { EventComponent } from './EventComponent'
import { OrderDetails } from '../OrderDetails'
import { SpinnerLoader } from '../../Shared'

import {
  Container,
  SpinnerLoaderWrapper,
  Header,
  HeaderTitleContainer,
  BusinessName,
  BusinessSelectorWrapper,
  CalendarWrapper,
  WarningText
} from './styles'

const localizer = momentLocalizer(moment)

const AppointmentsUI = (props) => {
  const {
    selectedBusiness,
    setSelectedBusiness,
    businessCalendarEvents
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parseDate }] = useUtils()

  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [showSelectHeader, setShowSelectHeader] = useState(false)
  const [openDetails, setOpenDetails] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const isEnabledAppointmentsFeature = configs?.appointments?.value

  const changeBusinessState = (business) => {
    setShowSelectHeader(false)
    setSelectedBusiness(business)
  }

  const handleOpenDetails = (event) => {
    setOpenDetails(true)
    setSelectedAppointment(event)
  }

  return (
    <Container>
      {businessCalendarEvents.loading && (
        <SpinnerLoaderWrapper>
          <SpinnerLoader />
        </SpinnerLoaderWrapper>
      )}
      <Header>
        <HeaderTitleContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <div>
            <h1>{t('APPOINTMENT', 'Appointment')}</h1>
            {isEnabledAppointmentsFeature && (
              <BusinessSelectorWrapper>
                <BusinessName onClick={() => setShowSelectHeader(!showSelectHeader)}>
                  {selectedBusiness?.name || t('SELECT_BUSINESS', 'Select a business')}
                </BusinessName>
                {showSelectHeader && (
                  <BusinessSelectHeader
                    close={() => setShowSelectHeader(false)}
                    isOpen={showSelectHeader}
                    changeBusinessState={changeBusinessState}
                  />
                )}
                <ChevronRight />
                <span className='calendar'>{t('CALENDAR', 'Calendar')}</span>
              </BusinessSelectorWrapper>
            )}
          </div>
        </HeaderTitleContainer>
      </Header>

      {isEnabledAppointmentsFeature ? (
        <CalendarWrapper>
          <Calendar
            localizer={localizer}
            formats={{ timeGutterFormat: configs?.format_time?.value === '24' ? 'HH:mm' : 'HH:mm A' }}
            defaultView={Views.MONTH}
            events={businessCalendarEvents.result}
            startAccessor={event => {
              return moment(parseDate(event.start, { outputFormat: 'YYYY-MM-DD HH:mm:ss' })).toDate()
            }}
            endAccessor={event => {
              return moment(parseDate(event.end, { outputFormat: 'YYYY-MM-DD HH:mm:ss' })).toDate()
            }}
            views={['month', 'week', 'day']}
            showMultiDayTimes={false}
            messages={{
              showMore: total => `+${total} ${t('MORE', 'More')}`
            }}
            onSelectEvent={event => handleOpenDetails(event)}
            components={{
              toolbar: CalendarHeader,
              event: EventComponent
            }}
          />
        </CalendarWrapper>
      ) : (
        <WarningText>{t('APPOINTMENTS_FEATURE_NOT_ENABLED', 'The appointments feature is not enabled.')}</WarningText>
      )}

      {openDetails && (
        <OrderDetails
          isServiceOrder
          open={openDetails}
          orderId={selectedAppointment?.order_id}
          onClose={() => {
            setOpenDetails(false)
            setSelectedAppointment(null)
          }}
        />
      )}
    </Container>
  )
}

export const Appointments = (props) => {
  const appointmentsProps = {
    ...props,
    UIComponent: AppointmentsUI
  }
  return <AppointmentsController {...appointmentsProps} />
}
