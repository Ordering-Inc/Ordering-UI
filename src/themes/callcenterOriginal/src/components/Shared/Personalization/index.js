import React from 'react'
import { useTheme } from 'styled-components'
import { useLanguage } from 'ordering-components'
import { Button } from '../../../styles'
import {
  Container,
  WrapperButton
} from './styles'

export const Personalization = (props) => {
  const {
    isShowTitle
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  return (
    <Container>
      {isShowTitle && (
        <h1>{t('PERSONALIZATION', 'Personalization')}</h1>
      )}
      <p>
        {t('PERSONALIZATION_TITLE', 'If you are looking for something  special for your Ordering Solution')},
        <a href='https://orderingco.typeform.com/to/qHPQtU' target='_blank' rel='noopener noreferrer'>{t('SEND_US_SPECIAL_WISH', 'send us your special wish.')}</a>
      </p>
      <img src={theme?.images.general?.personalization} loading='lazy' />
      <WrapperButton>
        <Button
          borderRadius='8px'
          color='primary'
          onClick={() => window.open('https://orderingco.typeform.com/to/qHPQtU', '_blank')}
        >
          {t('CONTACT_US', 'Contact us')}
        </Button>
      </WrapperButton>
    </Container>
  )
}
