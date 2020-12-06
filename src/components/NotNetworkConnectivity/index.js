import React from 'react'
import { useTheme } from 'styled-components'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'

import {
  Container,
  Image
} from './styles'

export const NotNetworkConnectivity = () => {
  const onlineStatus = useOnlineStatus()
  const theme = useTheme()

  return (
    <Container style={{ display: onlineStatus ? 'none' : 'flex' }}>
      <Image>
        <img src={theme.images?.general?.notNetwork} alt='Not network' width='640' height='320' />
      </Image>
    </Container>
  )
}
