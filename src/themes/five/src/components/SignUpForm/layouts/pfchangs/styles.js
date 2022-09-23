import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: ${({ isPopup }) => isPopup ? '500px' : 'calc(100vh - 65px)'};
  padding: 0 10px;
  box-sizing: border-box;

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
  flex-wrap: wrap;
  justify-content: space-between;
  input {
    &::placeholder, .PhoneInputInput::placeholder {
      color: ${props => props.theme.colors?.lightGray} !important;
    }

    &:-ms-input-placeholder, .PhoneInputInput:-ms-input-placeholder {
      color: ${props => props.theme.colors?.lightGray} !important;
    }

    &::-ms-input-placeholder, .PhoneInputInput::-ms-input-placeholder {
      color: ${props => props.theme.colors?.lightGray} !important;
    }
  }

  div.phone_number {
    margin: 10px 0px;
    width: 100%;
  }

  input.form:not(:last-child) {
    margin: 5px 0px;
    padding: 8px 20px;
  }

  button {
    margin-top: 10px;
    padding: 5px;
    width: 100%;
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.darkTextColor};
`

export const SkeletonWrapper = styled.div`
  span{
    margin: 10px 0;
    border-radius: 30px;
  }
`

export const SkeletonSocialWrapper = styled(SkeletonWrapper)`
  width: ${({ isPopup }) => isPopup ? '100%' : '80%'};
  span{
    margin-top: 0;
  }
`

export const ReCaptchaWrapper = styled.div`
  margin: 12px auto;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 5px 0px;

  
  @media (min-width: 800px) {
    ${({ isHalf }) => isHalf && css`
      width: 48%;
    `}
  }
`
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  
  input{
    box-sizing: border-box;
    width: 100%;

    ${props => props.theme.rtl ? css`
      padding-right: 40px !important;
    ` : css`
      padding-left: 40px !important;
    `}
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

  ${props => props.theme?.rtl && css`
    right: 15px;
    left: initial;
  `}

  svg {
    font-size: 16px;
    color: #B1BCCC;
  }
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

export const PromotionsWrapper = styled(TermsConditionWrapper)``

export const CheckboxArea = styled.div``

export const ValidationText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.colors.danger500};
`

export const DateContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  input{
    width: 100%;
    box-sizing: border-box;
  }
`
