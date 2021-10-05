import styled, { css } from 'styled-components'

export const PaymentCashContainer = styled.div`
  margin: 20px 0px 0px;
`

export const FormCash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    font-size: 16px;
    margin-right: 20px;
    ${props => props.theme?.rtl && css`
        margin-left: 20px;
        margin-right: 0;
    `}
  }
`

export const WrapperInput = styled.div`
  label {
    font-size: 12px;
    font-weight: 400;
  }
  
  input {
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
  }
`

export const ErrorText = styled.p`
  margin: 10px 0px 0px;
  color: #D81212;
  font-size: 14px;
  font-weight: bold;

  @media (min-width: 381px) {
    font-size: 20px;
  }
`
