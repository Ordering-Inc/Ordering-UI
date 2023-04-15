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

  @media (min-width: 381px) {
    label {
      font-size: 18px;
    }
  }
`

export const WrapperInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    flex-direction: row;
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
