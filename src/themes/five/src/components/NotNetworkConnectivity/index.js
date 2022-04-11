import React from 'react'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { useOnlineStatus } from '../../../../../hooks/useOnlineStatus'
import { Button } from '../../styles/Buttons'

import {
  Container,
  Image,
  ButtonWrapper
} from './styles'

export const NotNetworkConnectivity = (props) => {
  const [, t] = useLanguage()
  const onlineStatus = useOnlineStatus()
  const theme = useTheme()

  return (
    <>
      <Container id='container' isOnline={props.isOnline ?? onlineStatus}>
        <h1>{t('MOBILE_NO_INTERNET', 'No internet connection')}</h1>
        <p>{t('NETWORK_OFFLINE_MESSAGE', 'Your connection appears to be off-line. Try to refresh the page')}</p>
        <Image>
          <img id='not-network' src={props.image || theme.images?.general?.notNetwork} alt='Not network' width='640' height='320' loading='lazy' />
        </Image>
        <ButtonWrapper>
          <Button
            color='primary'
            onClick={() => window.location.reload()}
          >
            {t('REFRESH', 'Refresh')}
          </Button>
        </ButtonWrapper>
      </Container>
    </>
  )
}
