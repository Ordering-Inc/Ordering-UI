import styled, { css } from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
`

export const CartSticky = styled.div`
  ${({ isCartOnProductsList }) => isCartOnProductsList && css`
    overflow-y: auto;
    max-height: 70vh;
    position: sticky;
    top: 20px;
  `}
  width: 100%;
`

export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  background-color: ${isCheckout => isCheckout ? 'transparent' : '#FFF'};
  table {
    width: 100%;
    font-size: 14px;
    font-weight: 300;

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

    @media (min-width: 576px) {
      font-size: 16px;
    }
  }
  table.total {
    border-top: 1px solid #EAEAEA;
    padding-top: 10px;
    tr {
      td {
        font-weight: bold;
        color: ${props => props.theme.colors.darkTextColor};
      }
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
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  box-sizing: border-box;

  p {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.colors.darkTextColor};
  }

  button {
    padding: 10px 30px;
    width: 100%;
    &:disabled{
      opacity: 0.5;
      cursor: not-allowed
    }
    @media (min-width: 576px) {
      width: 50%;
    }
  }

  ${({ isFixed }) => isFixed && css`
    position: fixed;
    bottom: 0px;
    left: 0px;
    box-sizing: border-box;
    padding: 10px 15px;
    background: white;
    z-index: 10;
    margin: 0;
  `}
`

export const Divider = styled.div`
  display: none;
  background: #F8F9FA;  
  height: 8px;
  width: calc(100% + 20px);
  margin-left: -10px;

  @media (min-width: 768px) {
    display: block;
    width: calc(100% + 60px);
    margin-left: -30px;
  }
`

export const CouponQuestion = styled.div`
  width: 100%;
  p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0px;
  }

  span {
    margin: 0 10px;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }
`

export const Exclamation = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  top: 3px;
`
