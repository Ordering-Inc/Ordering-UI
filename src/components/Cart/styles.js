import styled, { css } from 'styled-components'

export const CartContainer = styled.div`
  border-bottom: 1px solid #F0F0F0;
`

export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: #FFF;
  table {
    width: 100%;
    font-size: 18px;
    font-weight: 300;
    tr td:nth-child(2) {
      font-weight: 500;
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
    `}
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
  margin: 10px;
`

export const CheckoutAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  button {
    padding: 10px 30px;
    color: #FFF;
    width: 80%;
    &:disabled{
      opacity: 0.5;
      cursor: not-allowed
    }
  }
`
