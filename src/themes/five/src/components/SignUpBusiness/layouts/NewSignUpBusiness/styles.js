import styled, { css } from 'styled-components'
import React from 'react'

export const SignupBusinessContainer = styled.div`
  ${({ bgImage }) => bgImage && css`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  padding: 25px 30px 30px;

  > div {
    width: 100%;
    max-width: 580px;
    box-sizing: border-box;
  }

  @media (min-width: 993px) {
    flex-direction: row;
    padding: 120px 130px;
    > div {
      width: calc(50% - 12px);
    }
  }
`
export const SignupDescriptionContainer = styled.div`
  margin-right: 0;
  margin-top: 45px;

  @media (min-width: 993px) {
    margin-right: 24px;
    margin-top: 0;
  }
`

export const SignupDescriptionTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 60px;
  color: ${props => props.theme.colors.colorTextSignForm};

  @media (min-width: 430px) {
    font-size: 37px;
  }

  @media (min-width: 1275px) {
    font-size: 48px;
  }
`

export const SignupDescriptionContent = styled.div`
  margin-top: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  color: ${props => props.theme.colors.colorTextSignForm};

  @media (min-width: 430px) {
    font-size: 20px;
  }

  @media (min-width: 993px) {
    margin-top: 15px;
  }

  @media (min-width: 1275px) {
    font-size: 24px;
  }
`
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
  > input {
    font-size: 20px;
    box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);
  }
  > .formStyle {
    & > .phone_number {
      border-radius: 7.6px;
      font-size: 20px;
      box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);
    }
    & > input {
      border-radius: 7.6px;
      font-size: 20px;
      box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);
    }
  }
  > .formButton {
    width: 128px;
    padding: 15px 0;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
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
      margin-right: 20px;
    ` : css`
      margin-left: 20px;
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
  background-color: ${props => props.theme.colors.colorTextSignForm};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 31px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 25px 30px 25px;
  > h1 {
    width: 100%;
    margin-bottom: 25px;
    margin-top: 15;
    font-weight: 500;
    font-size: 24px;
  }

  @media (min-width: 769px) {
    padding: 42px 58px 65px;
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
export const SignUpTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 10px !important;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 65px;
  color: ${props => props.theme.colors.black};
`