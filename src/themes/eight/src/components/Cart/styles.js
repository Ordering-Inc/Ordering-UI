import styled, { css } from 'styled-components'

export const CartContainer = styled.div`
  ${({ isCustomMode }) => !isCustomMode && css`
    border-bottom: 1px solid #F0F0F0;
  `}

  ${({ isCheckout }) => isCheckout && css`
    margin-right: -10px;
    margin-left: -10px;
  `}
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
  padding: 10px 20px;
  background-color: #FFF;
  margin-top: 30px;

  table {
    width: 100%;
    font-size: 16px;
    font-weight: 300;

    td span {
      unicode-bidi: bidi-override;
    }

    tr td:nth-child(2) {
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

  @media (min-width: 411px) {
    table {
      font-size: 18px;
    }
  }

  @media (min-width: 681px) {
    padding: 10px;
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
    width: 90%;
    transition: unset;
    &:disabled{
      opacity: 0.5;
      cursor: not-allowed
    }
  }
`

export const CustomCartBottom = styled.div`
  position: fixed;
  bottom: 0px;
  background: #FFF;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 25px 20px;
  z-index: 1000;
  box-sizing: border-box;

  ${props => props.theme?.rtl ? css`
    right: 0px;
  ` : css`
    left: 0px;
  `}
`

export const CartActionsGroupContainer = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`
