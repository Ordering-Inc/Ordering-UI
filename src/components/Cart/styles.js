import styled from 'styled-components'

export const CartContainer = styled.div``

export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  table {
    width: 80%;
    font-size: 18px;
    tr td:nth-child(2) {
      text-align: right;
    }
  }
`

export const CheckoutAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  button {
    padding: 10px 30px;
    color: #FFF;
    width: 80%;
  }
`
