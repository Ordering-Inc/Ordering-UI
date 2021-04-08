import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: calc(100vh - 97px);
  margin-top: 65px;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  @media (min-width: 821px) {
    height: calc(100vh - 65px);
  }
`

export const HeroContainer = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <HeroContainerStyled {...props} style={style}>
      {props.children}
    </HeroContainerStyled>
  )
}

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 91%;
  margin: 0 auto;
`
export const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 32px;
  @media (max-width: 576px) {
    font-size: 24px;
  }
`
export const WrapSignLink = styled.div`
  display: flex;

  a {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    span {
      text-decoration: underline;
    }
  }
`
