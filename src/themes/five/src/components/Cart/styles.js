import styled, { css } from 'styled-components'
import { lighten } from 'polished'

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
  padding: 10px 0px;
  background-color: ${isCheckout => isCheckout ? 'transparent' : '#FFF'};
  table {
    width: 100%;
    font-size: 14px;

    td span {
      unicode-bidi: bidi-override;
    }

    tr td:nth-child(2) {
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
    `}
    }

    .icon {
      display: flex;
      align-items: center;
      max-height: 25px;
      svg:nth-child(2){
        position: relative;
        top: 2px;
      }
    }
  }
  table.total {
    border-top: 1px solid #EAEAEA;
    padding-top: 10px;
    tr {
      td {
        font-weight: bold;
        color: ${props => props.theme.colors.darkTextColor};
        font-size: 16px;
      }
    }
  }
  table.comments {
    margin-top: 20px;
    tr {
      td:nth-child(1) {
        font-weight: bold;
      }
    }
    textarea {
      width: 100%;
      box-sizing: border-box;
      border-radius: 7.6px;
      height: 77px;
      padding-right: 60px;
    }
  }
`

export const CouponContainer = styled.div`
  width: 100%;
  margin: 10px;

  input, button {
    border-radius: 7.6px;
  }
`

export const CheckoutAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;

  p {
    margin: 0;
    font-weight: 600;
    font-size: 18px;
    color: ${props => props.theme.colors.darkTextColor};
  }

  button {
    padding: 10px 30px;
    min-width: 150px;
    width: 50%;
    &:disabled{
      opacity: 0.5;
      cursor: not-allowed
    }
  }
`

export const Divider = styled.div`
  background: #F8F9FA;
  height: 8px;
  width: 100%;
  margin-left: 0;

  @media (min-width: 768px) {
    width: calc(100% + 60px);
    margin-left: -30px;
  }
`

export const Exclamation = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  top: 3px;
`

export const Spinner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-20%, 15%);
`

export const CommentContainer = styled.td`
  position: relative;
  .spinner-content > div{
    width: 50px;
    height: 50px;
  }
`

export const IconContainer = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  top: ${props => props.top || '3px'};
  svg:nth-child(2){
    position: relative;
    top: -2px
  }
`

export const SavedContainer = styled.span`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme?.colors?.primaryContrast};
  background: ${props => lighten('0.2', props.theme?.colors?.primary)};
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
