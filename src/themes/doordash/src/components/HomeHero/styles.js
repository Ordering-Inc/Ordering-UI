import React from 'react'
import styled, { css } from 'styled-components'

export const HeroContainerStyled = styled.div`
  width: 100%;
  height: 400px;

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
    height: 600px;
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

    ${props => props.heroAlignment === 'left' && css`
      align-items: flex-start;
    `}
    ${props => props.heroAlignment === 'center' && css`
      align-items: center;
    `}
    ${props => props.heroAlignment === 'right' && css`
      align-items: flex-end;
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
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  font-size: 25px;
  font-weight: 500;

  ${props => (props.theme?.rtl && !(props.heroAlignment === 'center')) && css`
    text-align: right;
  `}

  ${props => props.heroAlignment === 'center' && css`
    text-align: center;
  `}
  ${props => props.heroAlignment === 'left' && css`
    text-align: left;
  `}
  ${props => props.heroAlignment === 'right' && css`
    text-align: right;
  `}

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

export const Slogan = styled.h1`
  margin: 0px;
  text-align: left;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin-bottom: 40px;

  ${props => (props.theme?.rtl && !(props.heroAlignment === 'center')) && css`
    text-align: right;
  `}

  ${props => props.heroAlignment === 'center' && css`
    text-align: center;
  `}
  ${props => props.heroAlignment === 'left' && css`
    text-align: left;
  `}
  ${props => props.heroAlignment === 'right' && css`
    text-align: right;
  `}

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

export const WrapInput = styled.label`
  position: relative;
  cursor: pointer;

  ${({ withIcon }) => withIcon && css`
    width: 290px;
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

    @media (min-width: 768px) {
      width: 420px;
    }
  `}
  
  div{
    color: #AFAFAF;
    position: absolute;
    left: 60px;
    display: inline-block;
    ${props => props.theme?.rtl && css`
      left: initial;
      right: 15px;
    `}
  }

  svg {
    color: #AFAFAF;
    position: absolute;
    font-size: 22px;

    margin: 0 20px;
  }

  .ArrowRight {
    background-color: ${props => props.theme?.colors?.primary};
    color: #FFF;
    border-radius: 50%;
    margin: 0;
    padding: 9px;
    top: -8px;
    ${props => props.theme?.rtl ? css`
      left: 0px;
    ` : css`
      right: 0px;
    `}

    @media (min-width: 768px) {
      padding: 12px;
      top: -11px;
    }
  }

  .LocationMarker {
    ${props => props.theme?.rtl ? css`
      right: 0px;
    ` : css`
      left: 0px;
    `}
  }
`

export const InputSpan = styled.span`
  background: #FFF;
  color: #010300;
  border: 1px solid #DBDCDB;
  border-radius: 30px;
  font-size: 16px;
  padding: 9px 50%;
  outline: none;
  color: #AFAFAF;
  border-color: #FFF;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 12px 50%;
  }
`

export const LogoHeader = styled.div`

  img {
    ${props => !props.hasLogoHero && css`
      display: none;
    `}
    width: 150px;
    margin: 0;
    vertical-align: middle;

    ${props => props.theme?.rtl && css`
      margin-left: 0;
    `}

    @media (min-width: 768px) {
      width: 200px;
    }
  }
`
