import React from 'react'
import { useTheme } from 'styled-components'
import { useOnlineStatus } from '../../../../../src/hooks/useOnlineStatus'

import {
  Container,
  Image
} from './styles'

export const NotNetworkConnectivity = (props) => {
  const onlineStatus = useOnlineStatus()
  const theme = useTheme()

  return (
    <Container id='container' isOnline={props.isOnline ?? onlineStatus}>
      <Image>
        <img id='not-network' src={props.image || theme.images?.general?.notNetwork} alt='Not network' width='640' height='320' loading='lazy' />
      </Image>
    </Container>
  )
}
