import styled from 'styled-components'

export const PaymentCashContainer = styled.div`
  margin: 20px 0px 0px;
`

export const FormCash = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    font-size: 18px;
    margin-right: 20px;
  }

  @media (max-width: 380px) {
    label {
      font-size: 16px;
    }
  }
`

export const WrapperInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    flex-direction: column;
    input {
      margin-top: 10px;
      width: 100%;
      box-sizing: border-box;
    }
  }
`

export const ErrorText = styled.p`
  margin: 10px 0px 0px;
  color: #D81212;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 380px) {
    font-size: 14px;
  }
`
