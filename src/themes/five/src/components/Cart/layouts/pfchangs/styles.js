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

export const CheckoutAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  box-sizing: border-box;
  h4 {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.colors.darkTextColor};
  }

  button {
    padding: 10px 30px;
    min-width: 150px;
    width: 50%;
    height: 50px;
    font-size: 16px;
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

export const SpotSelect = styled.select`
  ${({ isCheckout }) => isCheckout ? css`
    background: ${props => props.theme?.colors.backgroundPage};
  ` : css`
    background: ${props => props.theme?.colors.grayDividerColor};
  `}
  border-radius: 7.6px;
  height: 25px;
  border: none;
  font-size: 12px;
  outline: none;
  margin: 0 5px 0 15px;
  padding: 0 3px;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;

  ${props => props.theme.rtl && css`
    margin: 0 15px 0 5px;
  `}
`
export const NoValidProductMessage = styled.p`
  font-size: 14px;
`

export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: ${isCheckout => isCheckout ? 'transparent' : '#FFF'};
  box-sizing: border-box;
  table {
    width: 100%;
    font-size: 14px;
    color: #fff;
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
    }
  }
  table.total {
    border-top: 1px solid #EAEAEA;
    padding-top: 10px;
    tr {
      td {
        font-weight: bold;
        color: ${({ theme }) => theme?.colors?.tertiary || '#fff'};
        font-size: 16px;
      }
    }
  }
  table.comments {
    margin-top: 20px;
    tr {
      padding: 0;
      td:nth-child(1) {
        padding: 0;
        font-weight: bold;
      }
    }
    textarea {
      width: 100%;
      box-sizing: border-box;
      height: 77px;
      padding-right: 60px;
    }
  }
  table.spot {
    tr {
      td:nth-child(1) {
        font-weight: bold;
      }
      td:nth-child(2) {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`

export const CouponContainer = styled.div`
  width: 100%;
  margin: 0px;
  padding: 0 20px;
  box-sizing: border-box;
  input {
    flex: 1;
    &::placeholder,
    &::-webkit-input-placeholder {
      color: #aaa;
    }
    &:-ms-input-placeholder {
      color: #aaa;
    }
    ${({ theme }) => theme?.colors?.tertiary && css`
      border: 1px solid rgb(230,230,230) !important;
    `}
  }

  input, button {
    border-radius: 0;
    border: 0;
    height: 44px;
    box-sizing: border-box;
  }

`

export const IconContainer = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  height: 20px;
  svg:nth-child(1){
    position: relative;
    top: -1px;
  }
  svg:nth-child(2){
    position: relative;
    top: -3px;
  }
`

export const Spinner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-20%, 15%);
`

export const CommentSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  h2 {
    font-size: 16px;
    color: ${({ theme }) => theme?.colors?.tertiary || '#fff'};
  }
  textarea {
    width: 100%;
    height: 76px;
    &::placeholder,
    &::-webkit-input-placeholder {
      color: #aaa;
    }
    &:-ms-input-placeholder {
      color: #aaa;
    }
  }
`

export const SelectedItemsTitle = styled.div`
  padding: 0 20px;
  margin: 10px 0px;
  h2{ 
    font-size: 18px;
  }
`

export const CartError = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  p{
    width: 50%;
    text-align: center;
    font-size: 14px;
    margin: 0;
    color: ${({ theme }) => theme?.colors?.primary};
  }
`