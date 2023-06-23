import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const WrapperCheckPassword = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: ${props => props.theme.colors?.headingColor};

  h3 {
    font-size: 24px;
    margin: 0px;
    font-weight: 600;
  }

  button {
    margin-top: 40px;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`
export const FormController = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
    font-size: 14px;
  }

  .PhoneInputInput {
    height: 43px;
    border-radius: 8px !important;
  }
  .PhoneInputCountry {
    height: 43px;
    padding: 8px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.backgroundPage};
    * {
      padding: 0px;
    }
  }
`
export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin: 30px 0 15px 0;
`

export const Tab = styled.div`
  padding: 10px 0;
  font-size: 14px;
  cursor: pointer;
  ${props => props.theme?.rtl ? css`
    margin-left: 15px;
  ` : css`
    margin-right: 15px;
  `}
  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    border-bottom: 1px solid;
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors.lightGray};
  `}
`
export const CountdownTimer = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
  
  span {
    font-size: 30px;
    font-weight: 700;
  }
`
export const OtpWrapper = styled.div`
  width: 100%;
  .otp-container{
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
    
    .otp-input{
      width: 50px !important;
      height: 45px;
      border-radius: 8px;
      background-color: ${props => props.theme.colors.backgroundPage};
      outline: none;
      border: 1px solid ${props => props.theme.colors.borderColor};
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
export const ResendCode = styled.span`
  color: ${props => props.disabled ? props.theme.colors.disabled : props.theme.colors.primary};
  font-size: 20px;
  align-self: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`
