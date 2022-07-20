import React from 'react'
import { BusinessPreorder } from '../BusinessPreorder'
import { useLanguage, useUtils, useOrder } from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import {
  Container,
  PhotoWrapper,
  ProfessionalPhoto,
  NameWrapper,
  Divider,
  ScheduleWrapper,
  ButtonWrapper
} from './styles'
import { Button } from '../../styles/Buttons'

export const ProfessionalProfile = (props) => {
  const {
    currentProfessional,
    handleChangeProfessionalSelected,
    onClose
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage, parseDate }] = useUtils()
  const [orderStatus] = useOrder()

  const handleSelectProfessional = () => {
    handleChangeProfessionalSelected(currentProfessional)
    onClose && onClose()
  }

  return (
    <Container>
      <PhotoWrapper>
        {currentProfessional?.photo ? (
          <ProfessionalPhoto
            bgimage={optimizeImage(currentProfessional?.photo, 'h_200,c_limit')}
          />
        ) : <FaUserAlt />}
      </PhotoWrapper>
      <NameWrapper>
        <h2>{currentProfessional?.name} {currentProfessional?.lastname}</h2>
      </NameWrapper>
      <Divider />
      <ScheduleWrapper>
        <h2>{t('SCHEDULE', 'Schedule')}</h2>
        {currentProfessional?.schedule ? (
          <BusinessPreorder
            business={currentProfessional}
            isProfessional
            isDisabled
          />
        ) : (
          <p>{t('NO_SCHEDULE', 'No schedule')}</p>
        )}
      </ScheduleWrapper>
      <ButtonWrapper>
        <span>{orderStatus.options?.moment
          ? parseDate(orderStatus.options?.moment, { outputFormat: 'HH:mm a' })
          : t('ASAP_ABBREVIATION', 'ASAP')}
        </span>
        <Button
          onClick={() => handleSelectProfessional()}
          color='primary'
        >
          {t('BOOK', 'Book')}
        </Button>
      </ButtonWrapper>
    </Container>
  )
}
