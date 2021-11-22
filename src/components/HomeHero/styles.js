import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: calc(100vh - 97px);

  button{
    padding-top: 5px;
    padding-bottom: 5px;
  }

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
    padding: 0px 20px 0px;

    ${props => props.theme?.rtl && css`
      padding: 0px 20px 0px;
    `}

    button {
      width: 180px;
    }

    input {
      width: 90%;
      margin-bottom: 15px;
    }

    @media (min-width: 425px) {
      input {
        width: 97%;
      }
    }

    @media (min-width: 768px) {
      padding: 0px 40px 0px;

      ${props => props.theme?.rtl && css`
        padding: 0px 40px 0px;
      `}
    }
`

export const Title = styled.h1`
  margin: 0px;
  text-align: left;
  font: normal normal normal 80px ${props => props.theme.fonts.special?.name || 'Georgia'};
  letter-spacing: 0px;
  color: ${props => props.theme.colors.titleHomeColor ?? '#FFFFFF'};
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font-size: 35px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}
`

export const Slogan = styled.p`
  margin: 0px;
  text-align: left;
  font-size: 18px;
  letter-spacing: 0px;
  color: ${props => props.theme.colors.subtitleHomeColor ?? '#FFFFFF'};
  opacity: 1;
  margin-bottom: 15px;

  ${props => props.theme?.rtl && css`
      text-align: right;
  `}

  @media (min-width: 480px) {
    font-size: 24px;
  }
`

export const WrapInput = styled.label`
  position: relative;
  cursor: pointer;

  ${({ withIcon }) => withIcon && css`
    width: calc(100% - 20px);
    box-sizing: border-box;

    &::before {
      content: "";
      position: absolute;
      right: 5px;
      top: 0;
      bottom: 18px;
      width: 15px;

      ${props => props.theme?.rtl && css`
        left: 5px;
        right: initial;
     `}
    }

    @media (min-width: 1024px) {
      width: calc(50% - 20px);
    }
  `}
  
  div{
    color: #FFF;
    position: relative;
    bottom: 25px;
    left: 15px;
    ${props => props.theme?.rtl && css`
      left: initial;
      right: 15px;
    `}
  }

  svg {
    color: #FFF;
    position: absolute;
    font-size: 22px;

    margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}

    ${props => props.theme?.rtl ? css`
      left: 0px;
    ` : css`
      right: 0px;
    `}

  }
`

export const InputSpan = styled.span`
  background: #FFF;
  color: #010300;
  border: 1px solid #DBDCDB;
  border-radius: 30px;
  font-size: 16px;
  padding: 7px 50%;
  outline: none;
  color: #FFF;
  border-color: #FFF;
  cursor: pointer;
  background: rgba(0,0,0,0.1);
`
