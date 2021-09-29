import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 65px)'};

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
  margin-top: 25px;

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

    div {
      font-size: 0.8em;
    }
  }
`

export const SkeletonWrapper = styled.div`
  span{
    margin: 10px 0;
    border-radius: 30px;
  }
`

export const SkeletonSocialWrapper = styled.div`
  width: 90%;
  margin-top: 25px;

  span{
    border-radius: 30px;
    margin-bottom: 10px
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

export const ReCaptchaWrapper = styled.div`
  margin: 12px auto;
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
