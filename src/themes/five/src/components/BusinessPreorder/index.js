import React from 'react'
import { useUtils, useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Select } from '../../styles/Select'
import { Button } from '../../styles/Buttons'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import DatePicker from 'react-horizontal-datepicker'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import {
  BusinessPreorderContainer,
  LogoWrapper,
  BusinessLogo,
  PreorderTypeWrapper,
  SelectWrapper,
  MenuWrapper,
  OrderTimeWrapper,
  Title,
  ButtonWrapper,
  TimeListWrapper,
  DateWrapper
} from './styles'

export const BusinessPreorder = (props) => {
  const {
    business
  } = props

  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const [, t] = useLanguage()
  const windowSize = useWindowSize()

  const selectedDay = (val) => {
    console.log(val)
  }

  const timeList = [
    { key: '10:00 AM', value: '10:00 AM' },
    { key: '10:30 AM', value: '10:30 AM' },
    { key: '11:00 AM', value: '11:00 AM' },
    { key: '11:30 AM', value: '11:30 AM' },
    { key: '12:00 PM', value: '12:00 PM' },
    { key: '12:30 PM', value: '12:30 PM' },
    { key: '1:00 PM', value: '1:00 PM' },
    { key: '1:30 PM', value: '1:30 PM' },
    { key: '2:00 PM', value: '2:00 PM' },
    { ey: '2:30 PM', value: '2:30 PM' },
    { key: '3:00 PM', value: '3:00 PM' },
    { key: '3:30 PM', value: '3:30 PM' },
    { key: '4:00 PM', value: '4:00 PM' },
    { key: '4:30 PM', value: '4:30 PM' },
    { key: '5:00 PM', value: '5:00 PM' },
    { key: '5:30 PM', value: '5:30 PM' },
    { key: '6:00 PM', value: '6:00 PM' },
    { key: '6:30 PM', value: '6:30 PM' }
  ]

  return (
    <BusinessPreorderContainer>
      <Title>{t('PREORDER', 'Preorder')}</Title>
      <LogoWrapper>
        <BusinessLogo bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
        <p>{business.name}</p>
      </LogoWrapper>
      <PreorderTypeWrapper>
        <p>{t('PREORDER_TYPE', 'Preorder type')}</p>
        <SelectWrapper>
          <Select
            options={[]}
            placeholder={t('BUSINESS_MENU', 'Business menu')}
          />
        </SelectWrapper>
      </PreorderTypeWrapper>
      <MenuWrapper>
        <p>{t('MENU', 'Menu')}</p>
        <SelectWrapper>
          <Select
            options={[]}
            placeholder={t('MENU_NAME', 'Menu name')}
          />
        </SelectWrapper>
      </MenuWrapper>
      <OrderTimeWrapper>
        <p>{t('ORDER_TIME', 'Order time')}</p>
        <DateWrapper>
          <DatePicker
            getSelectedDay={selectedDay}
            labelFormat='MMMM'
            color='#374e8c'
            shouldScroll={windowSize < 576}
          />
        </DateWrapper>

        <TimeListWrapper>
          {timeList.map((time, i) => (
            <div key={i}>
              <span>{time.value}</span>
            </div>
          ))}
        </TimeListWrapper>
      </OrderTimeWrapper>
      <ButtonWrapper>
        <Button
          color='primary'
        >
          {t('GO_TO_MENU', 'Go to menu')}
          <BsArrowRight />
        </Button>
      </ButtonWrapper>
    </BusinessPreorderContainer>
  )
}
