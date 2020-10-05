import React from 'react'
import {
  Container,
  Logo,
  Content,
  Spinner
} from './styles'

export const SpinnerLoader = (props) => {
  const {
    logotype,
    content
  } = props
  return (
    <Container>
      {logotype && (
        <Logo>
          <img src={logotype} alt='logo' />
        </Logo>
      )}
      {content && (
        <Content>
          {content}
        </Content>
      )}
      <Spinner className='spinner' />
    </Container>
  )
}
