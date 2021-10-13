import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
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
  margin: 50px auto;

  @media (min-width: 992px) {
    ${({ isSignupEmail }) => isSignupEmail && css`
      width: 55%;
    `}
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px) {
    ${({ isSignupEmail }) => isSignupEmail && css`
      width: 45%;
    `}
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }
`

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.secundary};
  text-align: center;
  margin: 0 0 10px 0;

  @media (min-width: 768px) {
    font-size: 32px;
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
  font-size: 14px;
  margin: 0px;
  max-width: 700px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 992px) {
    font-size: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  display: flex;
  flex-direction: column;

  input {
    border-width: 2px !important;
  }

  > div {
    margin: 10px 0px;
    width: 100%;
  }

  button {
    margin: 20px auto;
    width: fit-content;
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
    color: ${props => props.theme.colors.grayDark};
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    &:link, &:visited {
      color: ${props => props.theme.colors.primary};
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
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  display: flex;
  flex-direction: column;
  margin: 80px 0 60px;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  
  button {
    width: 100%;
    margin: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
    max-width: 600px;

    img {
      width: 30px;
    }
  }

  @media (min-width: 1300px) {
    ${({ isPopup }) => isPopup ? css`
      flex-direction: column;
    ` : css`
      flex-direction: row;
    `}
  }
`

export const SkeletonWrapper = styled.div`
  span{
    margin: 10px 0;
    border-radius: 30px;
  }
`

export const SkeletonSocialWrapper = styled(SkeletonWrapper)`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  margin: 80px 0 60px;

  display: flex;
  flex-direction: column;

  span {
    margin: 10px;
    width: 100%;
  }

  @media (min-width: 1300px) {
    flex-direction: row;
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
