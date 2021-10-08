import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 65px)'};

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`

export const FormSide = styled(Side)`
  flex-direction: column;

  @media (min-width: 992px) {
    width: 100%;
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.darkTextColor};
`

export const LoginWith = styled.div`
  width: ${({ isPopup }) => isPopup ? '100%' : '80%'};
  border-bottom: 1px solid #E9ECEF;
  font-size: 14px;

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
  width: ${({ isPopup }) => isPopup ? '100%' : '80%'};
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  input:not(:last-child) {
    margin: 10px 0px;
    padding: 8px 20px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
  }

  .phone_number {
    margin: 10px 0;
  }
`

export const RedirectLink = styled.div`
  padding: 10px;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0px;
  font-size: 14px;
  font-weight: 400;

  span {
    margin-right: 5px;
    color: black;
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
    flex-direction: row;
    justify-content: center;
    width: calc(100% - 20px);
    align-items: center;
    @media (min-width: 481px) {
      width: ${({ isPopup }) => isPopup ? 'calc(100% - 20px)' : 'calc(80% - 20px)'};
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
   width: ${({ isPopup }) => isPopup ? '100%' : '80%'};
   margin-top: 10px;

  button {
    width: 100%;
    padding: 6px 40px;
    color: #000000;

    img {
      width: 16px;
    }

    div {
      font-size: 14px;
    }
  }
`

export const SkeletonSocialWrapper = styled.div`
  width: ${({ isPopup }) => isPopup ? '100%' : '80%'};
  span{
    border-radius: 30px;
    margin-bottom: 10px
  }
`

export const TogglePassword = styled.span`
  position: absolute;
  font-weight: 300;
  color: #333;
  font-size: 26px;
  transform: translate(-150%, 10%);
  max-height: 100%;
  svg{
    vertical-align: text-bottom;
  }
  ${props => props.theme?.rtl && css`
    transform: translate(150%, 10%);
  `}
  span{
    cursor: pointer;
  }

`

export const InputWrapper = styled.div`
  position: relative;

  input{
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px !important;
    padding-left: 40px !important;
    margin: 10px 0;
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

export const InputBeforeIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;

  svg {
    font-size: 16px;
    color: #B1BCCC;

  }
`

export const LoginDivider = styled.div`
  display: flex;
  align-items: center;
  width: ${({ isPopup }) => isPopup ? '100%' : '80%'};
  margin: 30px 0;

  p {
    margin: 0;
    width: 70px;
    font-size: 14px;
    color: #748194;
    text-align: center;
  }
`

export const DividerLine = styled.div`
  height: 1px;
  background: #E9ECEF;
  flex-grow: 1;
`

export const ModalIcon = styled.span`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 2;
  display: flex;

  svg{
    margin-bottom: 25px;
  }

  h1{
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(min-width: 769px){
    position: absolute;
    top: -10px;
  }
`
