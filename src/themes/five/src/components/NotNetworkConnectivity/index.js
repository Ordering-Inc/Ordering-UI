import React, { useState, useEffect } from 'react'
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

  const errorImage = props.image || theme.images?.general?.notNetwork
  const [base64ImageString, setBase64ImageString] = useState(null)

  const getBase64ImageFromUrl = async (imageUrl) => {
    const response = await fetch(imageUrl)
    const blob = await response.blob()
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.addEventListener('load', function () {
        resolve(reader.result)
      }, false)
      reader.onerror = (error) => {
        return reject(error)
      }
      reader.readAsDataURL(blob)
    })
  }

  useEffect(() => {
    getBase64ImageFromUrl(errorImage).then(base64 => {
      setBase64ImageString(base64)
    })
  }, [])

  return (
    <>
      <Container id='container' isOnline={props.isOnline ?? onlineStatus}>
        <h1>{t('MOBILE_NO_INTERNET', 'No internet connection')}</h1>
        <p>{t('NETWORK_OFFLINE_MESSAGE', 'Your connection appears to be off-line. Try to refresh the page')}</p>
        <Image>
          {base64ImageString && (
            <img id='not-network' src={base64ImageString} alt='Not network' width='640' height='320' loading='lazy' />
          )}
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

export default NotNetworkConnectivity
