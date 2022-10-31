import styled, { css } from 'styled-components'

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #fff;
  box-sizing: border-box;
  div.phone_number {
    margin-bottom: 20px;
    width: 100%;
  }
  button {
    width: 100%;
    padding: 7px 0;
  }
  ${({ isCheckout }) => isCheckout && css`
    border: none;
  `}
`

export const ActionsForm = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  button {
    margin-top: 10px;
    padding: 7px 0px;
    width: 125px;
    box-sizing: border-box;

    &:disabled {
      cursor: not-allowed;
    }

    &:nth-child(2) {
      margin-left: 10px;
    }
  }

  ${props => props.theme?.rtl && css`
    button {
      &:nth-child(1) {
        margin-right: 0px;
      }
      &:last-child {
        margin-right: 5px;
      }
    }
  `}
`

export const SkeletonForm = styled.div`
  width: 100%;
  justify-content: center;
  height: auto;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 0px;
  > * {
    width: 100%;
    margin: 10px 0;
    display: inline;
    height: 50px;
    span{
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 768px){
    justify-content: flex-start;
    > * {
      width: calc(50% - 10px);
      margin: 5px;
    }
  }
`

export const InputGroup = styled.div`
  box-sizing: border-box;
  width: 50%;
  padding: 0 10px;
  p {
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    width: 100%;
    text-align: left;
    margin: 0 0 7px 0;
  }
  input {
    padding: 10px;
  }
`

export const Divider = styled.div`
  background: #F8F9FA;
  height: 8px;
  width: 100%;
  margin-bottom: 20px;
`

export const InputPhoneNumberWrapper = styled(InputGroup)`
  .PhoneInput {
    border-bottom: 1px solid #E9ECEF;
    input {
      border: none;
      border-radius: 0px;
      padding: 5px;
    }
  }
`

export const LanguageSelectorWrapper = styled(InputGroup)`
  margin-bottom: 20px;
  width: 150px;
  padding: 0;
  * {
    color: #000 !important;
  }
  > div {
    width: 100%;
    border-radius: 0;
    text-align: left;
    background: #F8F9FA !important;
    border-color: #F8F9FA;
    height: 44px;

    > div:first-child {
      height: 44px;
    }

    #list {
      width: 100%;
      border-radius: 0;
      background: #F8F9FA !important;
      border-color: #F8F9FA;
      box-shadow: 0px 10px 12px 1px #e6e6e6;
    }
  }
`

export const PromotionsWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  width: 100%;
  > label {
    font-size: 16px;
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

export const Title = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: flex-start;
  color: #fff;
  padding: 15px;
  h2{
    font-size: 16px;
  }
`

export const UserInformationContainer = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 15px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  p{
    margin: 2px 0;
  }
  span {
    color: ${({ theme }) => theme?.colors?.gold};
    cursor: pointer;
    text-decoration: underline;
    text-align: right;
    display: flex;
  }
  ${({ isCheckout }) => isCheckout && css`
    padding: 0;
  `}
`

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`

export const CountryFlag = styled.div`
  margin-right: 5px;
  .PhoneInputCountryIcon {
    width: 25px;
  }
  .PhoneInputInput {
    display: none;
  }
  .PhoneInputCountrySelect {
    display: none;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    box-sizing: border;
  }
  input.form {
    padding: 5px;
    font-size: 14px;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    &:disabled {
      background-color: rgba(239, 239, 239, 0.3);
      cursor: not-allowed;
    }
  }
  ${({ isCheckout }) => isCheckout && css`
    input {
      color: #000 !important;
    }
  `}
  @media (min-width: 768px){
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`
