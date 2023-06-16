import styled, { css } from 'styled-components'

export const OrdersListContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;
  ${({ isSelectedOrders }) => isSelectedOrders && css`
    margin-top: 0px;
    padding: 20px 0 0 0;
  `}
  @media print {
    display: none;
  }
`
export const OrdersContent = styled.div`

`
export const OrdersInnerContent = styled.div`
`
export const WrapperIndicator = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background: #151824;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  font-size: 24px;
`

export const WrapItemView = styled.div`
  width: 100%;
`
export const OrderSubFilterControls = styled.div`
  display: flex;
  width: 100%;

  ${({ isColumn }) => isColumn ? css`
    flex-direction: column;
    > div:last-child {
      margin-top: 0;
      margin-bottom: 10px;
      > div {
        justify-content: space-between;
        width: 100%;
      }
    }
  ` : css`
    flex-direction: row;
    justify-content: space-between;
  `}
`
export const OrderStatusSubFilterWrapper = styled.div`
  flex: 1;
  display: inline-block;

  ${props => props.theme?.rtl ? css`
    margin-left: 15px;
  ` : css`
    margin-right: 20px;
  `}
  ${({ isColumn }) => isColumn ? css`
    width: 100%;
  ` : css`
    width: 50%;
  `}
`
