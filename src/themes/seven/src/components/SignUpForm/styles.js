import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
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
  align-items: center;
  margin: auto;

  @media (min-width: 769px) {
    ${({ isPopup }) => isPopup && css`
      margin: 0px;
    `}
  }

  @media (min-width: 992px) {
    width: ${({ isPopup }) => isPopup ? '100%' : '45%'};
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
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
export const SkeletonWrapper = styled.div`
  width: 100%;
  span{
    margin: 10px 0;
    border-radius: 0px;
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

export const WrapperPassword = styled.div`
  position: relative;
  width: 100%;
  input{
    box-sizing: border-box;
    padding-right: 40px;
  }
`

export const TogglePassword = styled.span`
  position: absolute;
  top: 4px;
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
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 34px;
    margin-top: 30px;
    margin-bottom: 25px;
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
  margin-bottom: 15px;

  button {
    width: 100%;
    padding: 5px;
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
    .PhoneInputInput {
      font-size: 14px;
      padding: 10px 11px;
    }
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

export const AccountLogin = styled.div`
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
export const WrapperBirthday = styled.div`
  width: 100%;
  display: block;
  .react-datepicker-popper {
    display: block;
  }

  .birthdate-input::placeholder {
      color: #dbdcdb;
  }
`
export const ConditionCheck = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
  span {
    display: flex;
    font-size: 14px;
    align-items: center;
  }
  .condition-checkbox {
    color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  .condition-link-text {
    margin: 0 6px;
  }
  .condition-link {
    color: ${props => props.theme.colors.primary};
  }
`
export const Terms = styled.div`
  margin-bottom: 15px;
  height: 150px;
  overflow-y: scroll;
`
