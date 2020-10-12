import React from 'react'

import notNetwork from '../../../template/assets/images/offline-img.svg'

import {
  Container,
  Image
} from './styles'

export const NotNetworkConnectivity = () => {
  return (
    <Container>
      <Image>
        <img src={notNetwork} alt='no-internet-img' />
      </Image>
    </Container>
  )
}
