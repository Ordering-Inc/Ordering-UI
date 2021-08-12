import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    background-color: ${props => props.theme.colors.emptyPagebackground}; 
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`
export const HeroSide = styled(Side)`
  display: none;

  @media (min-width: 992px) {
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.primaryContrast};
    background-color:  ${props => props.theme.colors.primary};
  }
`

export const TitleHeroSide = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 50px;
  }

  h1,
  p {
    margin: 0px;
    color: ${props => props.theme.colors.colorTextSignForm};
  }
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: #fff;

  @media (min-width: 769px) {
    ${({ isPopup }) => isPopup && css`
      margin: 20px 0px;
    `}
  }  

  @media (min-width: 992px) {
    padding: 4% 0 3%;
    margin: ${({ isPopup }) => isPopup ? '0' : '4% auto'};
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
    width: ${({ isPopup }) => isPopup ? '100%' : '50%'};
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
    width: ${({ isPopup }) => isPopup ? '100%' : '35%'};
  }

  @media (min-width: 1450px){
    width: ${({ isPopup }) => isPopup ? '100%' : '30%'};
  }
`

export const LoginWith = styled.div`
  font-size: 14px;
  width: 90%;

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
  width: 90%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  input:not(:last-child) {
    margin: 11px 0px;
    padding: 10px 20px;
    border-radius: 7px;
  }

  input.PhoneInputInput{
    margin: 11px 0px;
    border-radius: 7px;
  }

  button {
    margin-top: 10px;
    padding: 7px;
    width: 135px;
    margin-left: auto;

    ${props => props.theme?.rtl && css`
      margin-right: auto;
    `}
  }
`

export const RedirectLink = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 90%;

  span {
    margin-right: 5px;
    color: ${props => props.theme.colors.primary};
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary} !important;
    text-decoration: underline !important;
  }

  ${({ register }) => register && css`
    width: 90%;

    @media (min-width: 481px) {
      width: 90%;
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
   width: 90%;
   margin-top: 10px;

  button {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 5px 30px;
    color: #000000;

    img {
      width: 30px;
    }

    div {
      font-size: 0.8em;
    }
  }
`

export const SkeletonSocialWrapper = styled.div`
  width: 90%;
  span{
    border-radius: 30px;
    margin-bottom: 10px
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

export const WrapperPassword = styled.div`
  position: relative;
  input{
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px;
  }
  .reveal::-ms-reveal {
      display: none;
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
