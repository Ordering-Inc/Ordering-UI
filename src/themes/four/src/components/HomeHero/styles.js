import styled, { css } from 'styled-components'
import React from 'react'

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  @media (min-width: 821px) {
    padding-top: 0px;
  }
`

export const HeroImageStyled = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: -20px;

  ${({ bgimage }) => bgimage && css`
    img {
      max-width: 100%;
      height: auto;
    }
  `}
  @media (min-width: 821px) {
    top: 0px;
  }
`

export const HeroImage = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <HeroImageStyled {...props} style={style}>
      {props.children}
    </HeroImageStyled>
  )
}

export const FormContainer = styled.div`
  margin: 80px 0;
  z-index: 1;
  background-color: #FFFFFF;
  box-shadow: 0px 3px 20px #00000098;
  border-radius: 8px;
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 30px 60px;
    min-width: 550px;
  }

  @media (min-width: 992px) {
    min-width: 650px;
  }

  @media (max-width: 760px) {
    width: 91%;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;

  h1 {
    font-size: 22px;
    text-align: center;
    color: ${props => props.theme.colors?.blackColor};
  }

  button {
    padding-top: 5px;
    padding-bottom: 5px;
    width: 91%;
    margin: 20px 0;
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 27px;
    }
  }
`

export const LogoWrapper = styled.div`
  width: 200px;
  height: 66px;
  img {
    width: 100%;
    height: 100%;
  }
`

export const InputContainer = styled.div`
  border: 1px solid ${props => props.theme.colors?.grayColor};
  border-radius: 8px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 91%;
  box-sizing: border-box;

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
  }

  span {
    color: ${props => props.theme.colors?.grayColor};
    ${props => props.theme?.rtl ? css`
      border-right: 2px solid ${props => props.theme.colors?.grayColor};
      margin-right: 20px;
      padding-right: 20px;
    ` : css`
      border-left: 2px solid ${props => props.theme.colors?.grayColor};
      margin-left: 20px;
      padding-left: 20px;
    `}
  }
`

export const RedirectLink = styled.div`
  text-align: center;
  span {
    color: ${props => props.theme.colors?.grayColor};
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
  a {
    color: ${props => props.theme.colors.primary};
    &:link,
    &:visited {
      color: ${props => props.theme.colors.primary} !important;
      text-decoration: none !important;
    }
  }
`
