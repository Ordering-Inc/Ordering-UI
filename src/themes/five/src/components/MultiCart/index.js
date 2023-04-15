import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { WrapperLeftContainer, WrapperRightContainer, Container } from '../Checkout/styles'
import { MultiCartCreate } from 'ordering-components'

const MultiCartUI = () => {
  return (
    <Container>
      <WrapperLeftContainer>
        <Skeleton height={30} />
        <Skeleton height={100} style={{ marginBottom: '15px' }} />
        <Skeleton height={25} />
        <Skeleton height={50} style={{ marginBottom: '15px' }} />
        <Skeleton height={25} />
        <Skeleton height={50} style={{ marginBottom: '15px' }} />
        <Skeleton height={25} />
        <Skeleton height={25} />
      </WrapperLeftContainer>
      <WrapperRightContainer>
        <Skeleton height={25} />
        <Skeleton height={50} style={{ marginBottom: '20px' }} />
        <Skeleton height={25} />
        <Skeleton height={60} />
        <Skeleton height={80} style={{ marginBottom: '20px' }} />
        <Skeleton height={25} />
      </WrapperRightContainer>
    </Container>
  )
}

export const MultiCart = (props) => {
  const mulcartProps = {
    ...props,
    UIComponent: MultiCartUI
  }
  return <MultiCartCreate {...mulcartProps} />
}
