import React from 'react'
import styled, { css } from 'styled-components'
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

export const HeroContainerStyled = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: -20px;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-attachment: fixed;
  `}
  @media (min-width: 821px) {
    top: 0px;
  }
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

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .phone_number {
    input {
      border-radius: 8px;
    }
  }

  h1 {
    font-size: 22px;
    text-align: center;
    color: ${props => props.theme.colors?.blackColor};
    margin: 0px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 27px;
    }
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`
export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin: auto;

  @media (min-width: 769px) {
    ${({ isPopup }) => isPopup && css`
      margin: 20px 0px;
    `}
  }

  @media (min-width: 992px) {
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '100%'};
  display: flex;
  flex-direction: column;

  div.phone_number {
    margin: 10px 0px;
    width: 100%;
  }

  input.form:not(:last-child) {
    margin: 10px 0px;
    padding: 8px 20px;
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
    color: ${props => props.theme.colors?.grayColor};

    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    &:link,
    &:visited {
      color: ${props => props.theme.colors.primary} !important;
      text-decoration: none !important;
    }
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

export const SocialButtons = styled.div`
  width: ${({ isPopup }) => isPopup ? '90%' : '100%'};

  button {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 5px 30px;
    color: #000000;
    margin-bottom: 15px;

    img {
      width: 30px;
    }
  }
`

export const SkeletonWrapper = styled.div`
  span{
    margin: 10px 0;
    border-radius: 8px;
  }
`

export const SkeletonSocialWrapper = styled(SkeletonWrapper)`
  width: ${({ isPopup }) => isPopup ? '90%' : '100%'};
  span{
    margin-top: 0;
  }
`

export const WrapperPassword = styled.div`
  position: relative;
  input{
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px;
  }
`

export const TogglePassword = styled.span`
  position: absolute;
  font-weight: 300;
  padding: 10px 0;
  color: #333;
  font-size: 26px;
  transform: translate(-150%, 10%);
  max-height: 100%;
  ${props => props.theme?.rtl && css`
    transform: translate(150%, 10%);
  `}
  span{
    cursor: pointer;
  }
`

export const Slogan = styled.p`
  color: ${props => props.theme.colors?.grayColor};
  margin-top: 0px;
`

export const OrContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  span {
    padding: 0 10px;
    color: ${props => props.theme.colors?.grayColor};
    font-weight: 500;
  }
`

export const Line = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors?.grayColor};
  flex: 1;
`
export const TermsConditionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  > label {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 7px;
    ` : css`
      margin-left: 7px;
    `}

    > span:first-child {
      font-weight: 500;
      ${props => props.theme?.rtl ? css`
        margin-left: 7px;
      ` : css`
        margin-right: 7px;
      `}
    }

    > a {
      color: ${props => props.theme.colors.primary} !important;
    }
  }

  @media (min-width: 768px) {
    > label {
      font-size: 16px;
    }
  }
`

export const ReCaptchaWrapper = styled.div`
  margin: 12px auto;
`
