import styled, { css } from 'styled-components'

export const OrdersListContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: auto;
  height: calc(var(--vh,1vh) * 100);
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

export const HeaderTitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.colors.headingColor};
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin: 0px;
    text-transform: capitalize;
  }
  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}
    svg {
      width: 25px;
      height: 25px;
    }
  }
`
export const MainContentContainer = styled.div`
  margin-top: 15px;
`
export const TopContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 20px;
  border-bottom: 5px solid ${props => props.theme.colors.borderColor};
  @media (min-width: 992px) {
    flex-direction: row;
    #orderTable {
      max-height: calc(var(--vh, 1vh) * 100 - 475px);
    }
  }
`
export const WrapperDriversLocation = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 700px;
`
export const DriversContainer = styled.div`
  box-sizing: border-box;
  @media (min-width: 992px) {
    ${props => props.theme?.rtl ? css`
      border-left: 5px solid ${props => props.theme.colors.borderColor};
      padding-left: 8px;
    ` : css`
      border-right: 5px solid ${props => props.theme.colors.borderColor};
      padding-right: 8px;
    `}
  }
`

export const OrdersContainer = styled.div`
  box-sizing: border-box;
  ${props => props.theme?.rtl ? css`
    padding-right: 8px;
  ` : css`
    padding-left: 8px;
  `}
  @media (min-width: 992px) {
    width: calc(100% - 355px);
  }
`
