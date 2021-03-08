import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 65px)'};
  background: ${props => props.theme.colors.lightGrayColor};
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    ${({ isPopup }) => !isPopup && css`
      padding-top: 60px;
    `}
  }
`
const Side = styled.div`
  display: flex;
  width: 100%;
`

export const FormSide = styled(Side)`
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background: #fff;
  padding-bottom: 40px;

  @media (min-width: 769px) {
    ${({ isPopup }) => isPopup && css`
      margin: 20px 0px;
    `}
  }

  @media (min-width: 992px) {
    min-width: 580px;
    width: ${({ isPopup }) => isPopup ? '100%' : '45%'};
    font-size: ${({ isPopup }) => isPopup ? '12px' : '1em'};
  }

  @media (min-width: 1200px){
    font-size: ${({ isPopup }) => isPopup ? '0.9em' : '1em'};
  }
`

export const FormInput = styled.form`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  display: flex;
  flex-direction: column;

  input {
    padding: 10px 20px;
  }

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
    padding: 10px 15px;
  }
`

export const RedirectLink = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px;
  font-size: 17px;

  span {
    margin-right: 5px;
    color: ${props => props.theme.colors.grayTextColor};

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
    border-radius: 10px;
  }
`

export const SkeletonSocialWrapper = styled(SkeletonWrapper)`
  width: ${({ isPopup }) => isPopup ? '90%' : '80%'};
  span{
    margin-top: 0;
  }
`
export const FormTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 0px;

  @media (max-width: 992px) {
    font-size: 32px;
  }
`
export const SignupWithEmail = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  p {
    color: ${props => props.theme.colors.grayTextColor};
    padding: 0 10px;
    font-size: 16px;
  }
`
export const Line = styled.div`
  flex: 1;
  border-bottom: 1px solid ${props => props.theme.colors.grayTextColor};
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  padding: 10px 0;
  label {
    font-weight: 500;
    font-size: 18px;
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
  svg{
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
`

export const WrapTermsAndAgree = styled.div`
  padding: 20px 0;
  color: ${props => props.theme.colors.grayTextColor};
  font-size: 18px;
  span {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`
