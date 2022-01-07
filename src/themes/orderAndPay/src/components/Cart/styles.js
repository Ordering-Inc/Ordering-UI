import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: ${({ isCheckout }) => isCheckout ? '0px' : '20px 40px'};
  height: ${({ isCheckout }) => !isCheckout && '100vh'};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #fff;
`
export const CartContainer = styled.div`

  ${({ isCheckout }) => !isCheckout && css`
    flex: 1;
    display: flex;
    flex-direction: column;
  `};
  width: 100%;
`

export const CartSticky = styled.div`
  ${({ isCartOnProductsList }) => isCartOnProductsList && css`
    overflow-y: auto;
    max-height: 70vh;
    position: sticky;
    top: 20px;
  `}
  ${({ isCheckout }) => !isCheckout && css`
      display: flex;
      flex-direction: column;
      flex: 1;
      > div:first-child {
        margin-bottom: 20px;
      }
  `}

  width: 100%;
`
export const ContainerTop = styled.div`
  display: flex;
`
export const OrderBill = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: ${isCheckout => isCheckout ? 'transparent' : '#FFF'};
  table {
    width: 100%;
    font-size: 12px;
    font-weight: 300;
    border-top: 1px solid #E9ECEF;
    padding-top: 10px;
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
export const BorderProductAccordion = styled.div`
  border-bottom: 1px solid #D9D9D9;
  margin-left : 15px;
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
  padding: 0 6px;
  box-sizing: border-box;
  margin-left: 3px;
  margin-bottom: ${({ isIOS }) => isIOS ? '20px' : '10px'};
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
  }

  @media (min-width: 767px){
    top: 60px;
  }

  @media (max-width: 430px){
    top: 60px;
  }

  @media (max-width: 376px){
    top: 100px;
  }
`

export const Divider = styled.div`
  background: #fff;
  height: 8px;
  width: calc(100% + 20px);
  margin: 20px 0;
  @media (min-width: 768px) {
    width: calc(100%);
  }
`

export const UpsellingPageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px;
  margin-left: 3px;
  p {
    font-weight: 500;
    font-size: 16px;
    color: ${props => props.theme?.colors.darkTextColor};
  }

  svg {
    font-size: 20px;
    cursor: pointer;
    color: #748194;
    ${props => props.theme?.rtl && css`
      margin-right: 30px;
      margin-left: 0px;
    `}
  }
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.theme.colors.darkTextColor};
`

export const ModalIcon = styled.div`
  margin: 13px 0px;
  display: flex;
  align-items:center;
  margin-right: 20px;
`

export const Exclamation = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  top: 3px;
`
