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
  table.total {
    border-top: 1px solid #EAEAEA;
    padding-top: 10px;
    tr {
      td:nth-child(1) {
        font-weight: bold;
      }
      td:nth-child(2) {
        font-weight: bold;
        color: #D81212;
      }
    }
  }

  @media (max-width: 410px) {
    table {
      font-size: 16px;
    }
  }
`

export const CouponContainer = styled.div`
  width: 100%;
  margin: 10px 0px;
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
