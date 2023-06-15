import React from 'react'
import { useLanguage } from 'ordering-components'
import { navigate } from 'react-big-calendar/lib/utils/constants'
import { ChevronRight, ChevronLeft, Grid3x2 } from 'react-bootstrap-icons'
import MdcViewWeekOutline from '@meronex/icons/mdc/MdcViewWeekOutline'
import MdcViewWeek from '@meronex/icons/mdc/MdcViewWeek'
import MdcViewAgendaOutline from '@meronex/icons/mdc/MdcViewAgendaOutline'
import MdcViewDayOutline from '@meronex/icons/mdc/MdcViewDayOutline'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { IconButton } from '../../../styles'

import {
  CalendarHeaderContainer,
  CalendarLabelContainer,
  ViewButtonsWrapper
} from './styles'

export const CalendarHeader = (props) => {
  const {
    label,
    view,
    views,
    onView,
    onNavigate
  } = props

  const [, t] = useLanguage()

  const viewsList = {
    month: { title: t('MONTH', 'Month'), icon: <Grid3x2 /> },
    week: { title: t('WEEK', 'Week'), icon: <MdcViewWeekOutline /> },
    work_week: { title: t('WORK_WEEK', 'Work week'), icon: <MdcViewWeek /> },
    day: { title: t('DAY', 'Day'), icon: <MdcViewDayOutline /> },
    agenda: { title: t('AGENDA', 'Agenda'), icon: <MdcViewAgendaOutline /> }
  }

  return (
    <CalendarHeaderContainer>
      <CalendarLabelContainer>
        <IconButton
          color='black'
          onClick={() => onNavigate(navigate.PREVIOUS)}
        >
          <ChevronLeft />
        </IconButton>
        <span className='label'>{label}</span>
        <IconButton
          color='black'
          onClick={() => onNavigate(navigate.NEXT)}
        >
          <ChevronRight />
        </IconButton>
      </CalendarLabelContainer>
      <ViewButtonsWrapper>
        {views.map((name, i) => (
          <OverlayTrigger
            key={i}
            placement='bottom'
            overlay={
              <Tooltip>{viewsList[name].title}</Tooltip>
            }
          >
            <IconButton
              color={view === name ? 'primary' : 'black'}
              onClick={() => onView(name)}
            >
              {viewsList[name].icon}
            </IconButton>
          </OverlayTrigger>
        ))}
      </ViewButtonsWrapper>
    </CalendarHeaderContainer>
  )
}
