import styled, { css } from 'styled-components'
import React from 'react'

export const SignUpDriverContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 15px;

  > div {
    width: 100%;
  }

  @media (min-width: 993px) {
    flex-direction: row;
    align-items: center;
    padding: 120px 70px;
    > div {
      width: 50%;
    }
  }
`

export const SignUpHeroWrapper = styled.div`
  margin-top: 15px;
  padding: 0px;
  box-sizing: border-box;

  @media (min-width: 993px) {
    padding-right: 70px;
    ${props => props.theme.rtl && css`
      padding-right: 0px;
      padding-left: 70px;
    `}
  }
`

export const SignUpHeroStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 380px;
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

export const FormInput = styled.form`
  width: 100%;
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

export const PhoneNumberWrapper = styled.div`
  .PhoneInput {
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    background: white;

    .PhoneInputCountry {
      padding-left: 20px;
      ${props => props.theme.rtl && css`
        padding-left: 0;
        padding-right: 20px;
      `}
    }

    input {
      border: none;
    }
  }
`

export const ReCaptchaWrapper = styled.div`
  margin: 12px auto;
`

export const WrapperPassword = styled.div`
  position: relative;
  width: 100%;
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

export const SkeletonWrapper = styled.div`
  span{
    margin: 10px 0;
    border-radius: 7.6px;
  }
`

export const FormSide = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: auto;

  > h1 {
    width: 100%;
    margin-bottom: 25px;
    margin-top: 15;
    font-weight: 500;
    font-size: 24px;
  }

  @media (min-width: 769px) {
    ${({ isPopup }) => isPopup && css`
      margin: 20px 0px;
    `}
  }

  @media (min-width: 992px) {
    width: 45%;
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }
`
