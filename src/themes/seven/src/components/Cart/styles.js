import styled, { css } from 'styled-components'

export const CartContainer = styled.div`
  margin-bottom: 5px;
`

export const CartSticky = styled.div`
  ${({ isCartOnProductsList }) => isCartOnProductsList && css`
    overflow-y: auto;
    max-height: 70vh;
    position: sticky;
    top: 20px;
  `}
`

export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  table {
    width: 100%;
    td span {
      unicode-bidi: bidi-override;
    }

    tr td:nth-child(2) {
      font-weight: 500;
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
    `}
    }
  }

  table.bill-sub-option {
    tr td{
      font-size: 12px;
      line-height: 22px;
      color: #212629;
    }
    padding-top: 20px;
  }
  
  table.total {
    padding-top: 10px;
    tr td {
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
      color: #212629;
    }
  }

  @media (min-width: 411px) {
    table {
      font-size: 18px;
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
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  button {
    padding: 10px 30px;
    width: 100%;
    &:disabled{
      opacity: 0.5;
      cursor: not-allowed
    }
  }
`
export const CouponQuestion = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0px;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
    }
  } 
  span {
    margin: 0 10px;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }
`
