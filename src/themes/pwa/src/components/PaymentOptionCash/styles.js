import styled, { css } from 'styled-components'

export const PaymentCashContainer = styled.div`
  margin: 20px 0px 0px;
`

export const FormCash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WrapperInput = styled.div`
  width: 100%;
  label {
    font-size: 13px;
    @media (min-width: 1024px) {
      font-size: 14px;
    }
  }
  
  input {
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 44px;
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
