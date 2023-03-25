import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useOrder } from 'ordering-components'
import IosRadioButtonOff from '@meronex/icons/ios/IosRadioButtonOff'
import RiRadioButtonFill from '@meronex/icons/ri/RiRadioButtonFill'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'

import { ButtonWrapper, CityItem, Container } from './styles'
import { Button } from '../../styles/Buttons'

export const CitiesControl = (props) => {
  const {
    cities,
    onClose,
    handleChangeCity
  } = props

  const [, t] = useLanguage()
  const [orderState] = useOrder()

  const [cityState, setCityState] = useState(orderState?.options?.city_id)

  const handleClick = () => {
    cityState !== orderState?.options?.city_id && handleChangeCity(cityState)
    onClose && onClose()
  }

  return (
    <Container>
      {
        orderState?.loading ? (
          <Skeleton height={40} count={3} style={{ marginBottom: '10px' }} />
        ) : (
          <>
            {cities?.map(city => city?.enabled && (
              <CityItem key={city?.id} onClick={() => setCityState(city?.id === cityState ? null : city?.id)}>
                <span className='radio'>
                  {city?.id === cityState
                    ? <RiRadioButtonFill className='city-checked' />
                    : <IosRadioButtonOff />}
                </span>
                {city?.name}
              </CityItem>
            ))}
            <ButtonWrapper>
              <Button color='primary' onClick={() => handleClick()}>
                {t('CONTINUE', 'Continue')}
              </Button>
              <BsArrowRight />
            </ButtonWrapper>
          </>
        )
      }
    </Container>
  )
}
