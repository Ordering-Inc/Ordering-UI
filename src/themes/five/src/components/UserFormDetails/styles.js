import styled, { css } from 'styled-components'

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  div.phone_number {
    margin-bottom: 20px;
    width: 100%;
  }
  input.form {
    padding: 5px 0px;
    font-size: 14px;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    &:disabled {
      background-color: rgba(239, 239, 239, 0.3);
      cursor: not-allowed;
    }
  }
  button {
    width: 100%;
    padding: 7px 0;
  }
  @media (min-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ActionsForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    flex: 1;
    margin-top: 10px;
    padding: 7px 0px;
    width: 49%;
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
  width: 100%;

  p {
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.colors.darkTextColor};
    width: 100%;
    text-align: left;
    margin: 0 0 7px 0;
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

  > div {
    width: 100%;
    border-radius: 7.6px;
    text-align: left;
    background: #F8F9FA !important;
    border-color: #F8F9FA;
    height: 44px;

    > div:first-child {
      height: 44px;
    }

    #list {
      width: 100%;
      border-radius: 7.6px;
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

export const NotificationsGroupSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 15px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #E9ECEF;
  
  > p {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.colors.darkTextColor};
    width: 100%;
    text-align: left;
  }
`

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const TextLinkWrapper = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  span {
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`
