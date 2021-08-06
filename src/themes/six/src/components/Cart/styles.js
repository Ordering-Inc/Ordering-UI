import styled, { css } from 'styled-components'
export const CartContainer = styled.div`
  width: 100%;
  >div {
    box-sizing: border-box;
  }
  @media (min-width: 1024px) {
   max-width: ${({ isCheckout }) => isCheckout ? 'unset' : '45vw'};
   margin: 0 auto;
  }
  /* border-bottom: 1px solid #F0F0F0; */
`
export const CartSticky = styled.div`
  width: 100%;
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
  padding: 25px 15px 20px;
  background-color: #FFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  box-sizing: border-box;

  ${({ isCheckout }) => isCheckout
    ? css`
        padding: 0;
        box-shadow: none;
        margin-top: 10px;
      `
    : css`
      margin-top: 35px;
      padding: 25px 15px 20px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);

    `
  }
  
  table {
    width: 100%;
    font-size: 16px;
    line-height: 19px;
    tr{
      display: flex;
      margin-bottom: 10px;
    }
    tr td:nth-child(1),
    tr td:nth-child(3) {
      width: fit-content;
      white-space: nowrap;
    }

    tr td:nth-child(2) {
      flex-grow: 1;
      padding: 0 15px;
    }

    tr td:nth-child(3) {
      font-weight: bold;
    }

    
  }
  table.total {
    padding-top: 10px;
    font-size: 24px;
    line-height: 29px;
    tr {
      td {
        font-weight: bold;
      }
    }
  }
`
export const CouponContainer = styled.div`
  width: 100%;
  margin: 10px;
`
export const CheckoutAction = styled.div`
  margin: 12px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    padding: 10px 30px;
    width: 50%;
    margin-left: auto;
    ${props => props.theme?.rtl && css`
      margin-right: auto;
      margin-left: unset;
    `}
    &:disabled{
      opacity: 0.5;
      cursor: not-allowed
    }
  }


  &.floting {
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 20px;
    margin: 0;
    button {
      width: 45%;
      @media (min-width: 1024px) {
        width: 25%;
      }
    }
  }

`

export const Container = styled.div`
  padding: 0px 20px;

  @media (min-width: 769px) {
    margin-bottom: 10px;
    padding: 0;
  }
`

export const NotCarts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: auto;

  img {
    width: 150px;
    height: auto;
    aspect-ratio: attr(width) / attr(height)
  }
  h1 {
    margin: 10px 0;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
    color: #000;
  }

  div {
    display: flex;
    width: 100%;
    button {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  }

  
`
export const DashLine = styled.span`
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 70%;
  border-bottom: 1px dashed ${props => props.theme.colors.borderColor};;
`
