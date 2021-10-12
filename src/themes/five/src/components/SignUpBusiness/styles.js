import styled, { css } from 'styled-components'
import React from 'react'

export const SignupBusinessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 150px 70px;

  > div {
    width: 50%;
  }
`

export const SignUpHeroWrapper = styled.div`
  padding-right: 70px;
  box-sizing: border-box;

  ${props => props.theme.rtl && css`
    padding-right: 0px;
    padding-left: 70px;
  `}
`

export const SignUpHeroStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 300px;
  border-radius: 7.6px;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`

export const SignUpHero = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <SignUpHeroStyled {...props} style={style}>
      {props.children}
    </SignUpHeroStyled>
  )
}

export const SignUpFormWrapper = styled.div`
  h1 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 30px;
    margin-top: 0;
  }
`
