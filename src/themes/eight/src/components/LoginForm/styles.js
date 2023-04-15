import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 72px)'};

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
  align-items: center;
  margin: 35px auto;

  @media (min-width: 992px) {
    margin: 50px auto;
    width: 55%;
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px){
    width: 45%;
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }
`

export const Title = styled.h1`
  width: 80%;
  font-size: 32px;
  color: ${props => props.theme.colors.secundary};
  text-align: center;
  margin: 0 0 20px 0;
  font-weight: 700;
  line-height: 42px;

  @media (min-width: 768px) {
    max-width: 350px;
    line-height: initial;
  }

  @media (min-width: 992px) {
    font-size: 40px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
  }
`

export const Description = styled.p`
  color: ${props => props.theme.colors.grayDark};
  width: 80%;
  font-size: 16px;
  margin: 0px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: initial;
    font-size: 18px;
  }
`

export const LoginWith = styled.div`
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
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  display: flex;
  flex-direction: column;

  input {
    border-width: 2px !important;
  }

  button {
    margin-top: 15px;
    width: 100%;
  }

  @media (min-width: 768px) {
    button {
      width: fit-content;
    }
  }
`

export const RedirectLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;

  span {
    color: ${props => props.theme.colors.grayDark};
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary} !important;
    text-decoration: none;
    font-weight: 500;

    &:link, &:visited {
      color: ${props => props.theme.colors.primary} !important;;
    }
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  ${({ register }) => register && css`
    width: 80%;

    @media (min-width: 481px) {
      width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
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
   width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
   margin-top: 10px;

  button {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 6px 30px;
    color: #000000;

    img {
      width: 30px;
    }
  }
`

export const SkeletonSocialWrapper = styled.div`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
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
  max-height: 100%;
  bottom: 0px;
  ${props => props.theme?.rtl ? css`
    left: 10px;
  ` : css`
    right: 10px;
  `}
  span{
    cursor: pointer;
  } 
`

export const WrapperPassword = styled.div`
  position: relative;
  margin-top: 40px;
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

export const DottedBorderBound = styled.div`
  border-bottom: 6px dotted ${props => props.theme.colors.grayMedium};
  width: 80%;
  ${({ bottom }) => bottom ? css`
    margin: 45px 0 10px 0;
  ` : css`
    margin: 20px 0 35px 0;
  `}
`
