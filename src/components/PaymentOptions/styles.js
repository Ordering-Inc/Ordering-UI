import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const PaymentMethodsList = styled.div`
  display: flex;
  justify-content: space-around;
`

export const PayCard = styled.div`
  width: 130px;
  height: 60px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  svg {
    font-size: 30px;
  }

  p {
    margin: 0px;
    font-size: 12px;
  }

  &.active {
    border: 1px solid #D81212;
  }

  &:not(.active) {
    border: 1px solid #EAEAEA;
  }
`
