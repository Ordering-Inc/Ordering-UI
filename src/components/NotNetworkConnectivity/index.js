import React from 'react'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'
import notNetwork from '../../../template/assets/images/offline-img.svg'

import {
  Container,
  Image
} from './styles'

export const NotNetworkConnectivity = () => {
  const onlineStatus = useOnlineStatus()

  return (
    <Container style={{ display: onlineStatus ? 'none' : 'flex' }}>
      <Image>
        <img src={notNetwork} alt='no-internet-img' />
      </Image>
    </Container>
  )
}
