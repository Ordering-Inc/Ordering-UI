import React from 'react'
import {
  Container,
  Logo,
  Content,
  Spinner
} from './styles'

export const SpinnerLoader = (props) => {
  const {
    primary,
    logotype,
    content,
    style
  } = props
  return (
    <Container style={style} primary={primary}>
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
      <Spinner className='spinner'>
        <div className='spinner-content'>
          <div />
        </div>
      </Spinner>
    </Container>
  )
}
