import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
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
  align-items: center;
  margin: auto;

  @media (min-width: 992px) {
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '100%' : '80%'};
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
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
  font-size: 12px;

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
    width: calc(95% - 20px);

    @media (min-width: 481px) {
      width: ${({ isPopup }) => isPopup ? 'calc(95% - 20px)' : 'calc(80% - 20px)'};
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

  button {
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

export const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  margin-top: 50px;
  margin-bottom: 20px;
  width: ${({ isPopup }) => isPopup ? '100%' : '80%'};
  color: ${props => props.theme.colors.darkTextColor};
  @media (min-width: 576px) {
    margin-top: 0;
    margin-bottom: 30px;
    width: unset;
  }
`

export const SkeletonWrapper = styled.div`
  span{
    margin: 10px 0;
    border-radius: 30px;
  }
`

export const SkeletonSocialWrapper = styled(SkeletonWrapper)`
  width: ${({ isPopup }) => isPopup ? '95%' : '80%'};
  span{
    margin-top: 0;
  }
`

export const WrapperPassword = styled.div`
  position: relative;
  input{
    box-sizing: border-box;
    width: 100%;
    padding-right: 40px !important;
    padding-left: 40px !important;
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
export const LoginDivider = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
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
export const InputWrapper = styled.div`
  position: relative;
  
  input{
    box-sizing: border-box;
    width: 100%;
    padding-left: 40px !important;
    margin: 10px 0;
  }
`
export const InputBeforeIcon = styled.div`
  position: absolute;
  top: 0px;
  left: 15px;
  display: flex;
  align-items: center;
  height: 100%;

  svg {
    font-size: 16px;
    color: #B1BCCC;
  }
`
