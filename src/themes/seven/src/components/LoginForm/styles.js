import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  min-height: ${({ isPopup }) => isPopup ? '500px' : 'auto'};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 850px) {
    min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(94vh - 70px)'};
  }

  @media (min-width: 1200px) {
    min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(80vh - 90px)'};
  }

  >* {
    box-sizing: border-box;
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: flex-start;
  margin: auto;

  @media (min-width: 768px) {
    ${({ isPopup }) => isPopup && css`
      margin: 0px;
    `}

    width: ${({ isPopup }) => isPopup ? '100%' : '70%'};
  }

  @media (min-width: 992px) {
    width: ${({ isPopup }) => isPopup ? '100%' : '45%'};
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }
`

export const LoginWith = styled.div`
  font-size: 14px;
  width: 100%;
  text-transform: lowercase !important;

  .consume-side-padding {
    padding-left: 0px;
    ${props => props.theme?.rtl && css`
      padding-left: 10px;
      padding-right: 0px;
    `}
  }

  @media (min-width: 425px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 992px) {
    font-size: ${({ isPopup }) => isPopup ? '13px' : '18px'};
  }

  @media (min-width: 1200px) {
    ${({ isPopup }) => isPopup && css`
      font-size: 17px;
    `};
  }
`

export const FormInput = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input {
    height: 38px;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
  }

  input:not(:last-child) {
    margin: 10px 0px;
    @media (min-width: 768px) {
      margin: 0px 0px 25px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

`

export const RedirectLink = styled.div`
  position: relative;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
  width: 100%;
`

export const SocialButtons = styled.div`
   width: 100%;

  button {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px 30px;
    color: #000000;
    border-radius: 0px;
    background-color: transparent;
    border: 1px solid;
    img {
      width: 30px;
    }

    div {
      font-size: 0.8em;
      margin: 0 10px;
    }
  }

  button:first-child{
    border-color: #365988;
    color: #365988;
    font-weight: 700;
  }

  button:nth-child(2){
    border-color: #000000;
    color: #000000;
    font-weight: 700;
  }

  button:nth-child(2){
    border-color: #666666;
    color: #666666;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const SkeletonSocialWrapper = styled.div`
  width: 100%;
  span{
    border-radius: 0px;
    margin-bottom: 10px
  }

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`

export const TogglePassword = styled.span`
  position: absolute;
  top: 14px;
  right: 10px;
  font-weight: 300;
  color: #333;
  font-size: 26px;
  max-height: 100%;
  
  span{
    cursor: pointer;
  }

  @media (min-width: 768px) {
    top: 4px;
  } 
`

export const WrapperPassword = styled.div`
  position: relative;
  width: 100%;
  input{
    box-sizing: border-box;
    padding-right: 40px;
  }
`
export const OtpWrapper = styled.div`
  .otp-container{
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
    
    .otp-input{
      width: 30px;
      height: 30px;
      padding: 12px 20px;
      border: 2px solid #CCC;
      border-radius: 16px;
      background-color: #FFF;
      outline: none;
      font-size: 20px;
      font-weight: bold; 

      &:focus{
        border-color: ${() => darken(0.07, '#CCC')} !important;
      }

      &::placeholder,
      &::-webkit-input-placeholder {
        color: #DBDCDB;
      }
      &:-ms-input-placeholder {
        color: #DBDCDB;
      }
    }
  }
`

export const CountdownTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  
  span {
    &:first-child {
      font-size: 30px;
      font-weight: bold;
      color: ${props => props.theme.colors.primary}
    }
    &:last-child {
      font-size: 24px;
      color: #DBDCDB;
      cursor: pointer;
      :hover {
        color: ${() => darken(0.07, '#DBDCDB')} !important;
      }
      :active {
        color: ${() => darken(0.09, '#DBDCDB')} !important;
      }
    }
  }

`

export const ReCaptchaWrapper = styled.div`
  margin: 12px auto;
`
export const FormTitle = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 34px;
    margin-top: 30px;
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 75%;
    margin-right: auto;
    ${props => props.theme?.rtl && css`
        margin-right: unset;
        margin-left: auto;
    `}
  }
`
export const FormInline = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  button {
    width: 100%;
    padding: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .forgot {
    span {
      color: ${props => props.theme.colors.primary};
      width: 100%;
    }

    a {
      position: absolute;
      z-index: 10;
      opacity: 0;
      text-decoration: none;
      width: 100%;
    }
  }

  .phone_number {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 48.6795%;
  }
`

export const FormBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-left: none;
  border-right: none;
  align-items: center;
`

export const CreateAccount = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  a {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  button {
    font-size: 16px;
    line-height: 26px;
    color: #666666;
    padding: 11px 14px;
    border-radius: 0;
    background-color: transparent;
  }
`
export const FormSubTitle = styled.p`
  margin-top: 7px;
  line-height: 20px;
`
