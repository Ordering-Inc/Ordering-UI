import styled, { css } from 'styled-components'
import React from 'react'

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroContainerStyled = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-attachment: fixed;
  `}
`

export const HeroImage = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
  }

  return (
    <HeroContainerStyled {...props} style={style}>
      {props.children}
    </HeroContainerStyled>
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

export const ForgotPasswordContainer = styled.div`
  width: 100%;
  height: ${({ isPopup }) => isPopup ? '100vh' : 'auto'};
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    height: 100%;
    ${({ isPopup }) => isPopup && css`
      min-height: 500px;
    `}
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  @media (min-width: 992px) {
    margin: auto;
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  display: flex;
  flex-direction: column;

  * {
    padding: 8px 20px;
    margin: 10px;
  }

  input:not(:last-child) {
    margin-top: 10px;
    margin-bottom: 0px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
  }
`

export const RedirectLink = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
  font-size: 17px;

  span {
    margin-right: 5px;

    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  ${({ register }) => register && css`
    width: calc(90% - 20px);

    @media (min-width: 481px) {
      width: ${({ isPopup }) => isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)'};
    }
  `}

  @media (min-width: 425px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: ${({ isPopup }) => isPopup ? '13px' : '18px'};
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    ${({ isPopup }) => isPopup && css`
      font-size: 16px;
    `};
  }
`
