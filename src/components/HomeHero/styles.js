import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
  button{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
    min-height: 500px;
  `}
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
    padding: 0px 0px 0px 40px;
    ${props => props.theme?.rtl && css`
      padding: 0px 40px 0px 0px;
    `} 
    button {
      width: 180px;
    }
    input {
      width: 97%;
      margin-bottom: 15px;
    }
    @media (max-width: 480px) {
      font-size: 40px;
    }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font: normal normal normal 80px ${props => props.theme.fonts.special?.name || 'Georgia'};
  letter-spacing: 0px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  ${props => props.theme?.rtl && css`
      text-align: right;
  `} 
  @media (max-width: 480px) {
    font-size: 40px;
  }
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 1.5em;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin-bottom: 15px;
  ${props => props.theme?.rtl && css`
       text-align: right;
    `} 
  @media (max-width: 480px) {
    font-size: 18px;
  }
`

export const WrapInput = styled.label`
  position: relative;
  
  input {
    color: #FFF;
    border-color: #FFF;
    cursor: pointer;
    background: rgba(0,0,0,0.1);

    ::placeholder {
      color: #FFF;
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: #FFF;
    }
  }

  svg {
    color: #FFF;
    position: absolute;
    right: 0px;
    font-size: 22px;
    top: 8px;
    ${props => props.theme?.rtl && css`
      left: 0px;
      right: initial
  `}
  }

  @media (max-width: 480px) {
      svg{
        top: 24px;
      }
    }
  

  ${({ withIcon }) => withIcon && css`
    width: calc(50% + 70px);
    &::before {
      content: "";
      position: absolute;
      right: 5px;
      top: 0;
      bottom: 18px;
      width: 15px;
      /* background: url(${withIcon}) center / contain no-repeat; */
      ${props => props.theme?.rtl && css`
        left: 5px;
        right: initial;
     `}
    }
    @media (max-width: 480px) {
      &::before {
        right: 0px;
        bottom: 0px;
         ${props => props.theme?.rtl && css`
          left: 0px;
          bottom: 0px
       `}
      }
    }
  `}
`
