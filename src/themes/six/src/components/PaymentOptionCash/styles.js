import styled, { css } from 'styled-components'
export const PaymentCashContainer = styled.div`
  margin: 15px 0px 0px;
`
export const FormCash = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    font-size: 13px;
    ${props => props.theme?.rtl && css`
        margin-left: 20px;
        margin-right: 0;
    `}
    color: ${props => props.theme.colors.fontSecundary};
  }
  @media (min-width: 381px) {
    label {
      font-size: 18px;
    }
  }
`
export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  input {
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 7px;
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
