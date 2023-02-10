import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: hidden;
  min-height: auto;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  min-height: calc(100vh - 320px);

  > h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 7px;
    margin-top: 0px;
    text-transform: capitalize;
  }

  @media (min-width: 769px) {
    ${({ hideOrders }) => !hideOrders ? css`
      padding: 40px;
      width: 100%;
    ` : css`
      padding: 0;
      width: 100%;

      @media (min-width: 993px) {
        min-height: 'auto';
      }
    `}
    margin-left: auto;
    margin-right: auto;
  }

`

export const Divider = styled.div`
  margin-top: 25px;
  background: #F8F9FA;
  height: 8px;
  width: 100%;
`

export const OrderGroupFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 15px;

  button {
    margin-top: 10px;
    display: flex;
    align-items: center;
    border-radius: 50px;
    margin-right: 10px;
    ${props => props.theme.rtl && css`
      margin-right: 0;
      margin-left: 10px;
    `}
    > svg {
      margin-left: 5px;
      ${props => props.theme.rtl && css`
        margin-right: 5px;
        margin-left: 0;
      `}
    }
  }
`

export const NoOrdersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  position: absolute;
  box-sizing: border-box;
  min-height: calc(100% - 120px);
  width: 100%;

  > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 25px;
  }

  button {
    height: 44px;
  }
`

export const MyOrdersMenuContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 5px 0px 0px 0px;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #D9D9D9;
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
  div.category {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 10px 0px;
    margin: 0 15px;
    &:nth-of-type(1) {
      margin-left: 0;
      ${props => props.theme.rtl && css`
        margin-left: 15px;
        margin-right: 15px;
      `}
    }
  }

  div.special {
    ${props => !props.featured && css`
      display: none
    `}
  }

  @media (min-width: 381px) {
    padding: 15px 0px 0px 0px;
  }
  @media (min-width: 992px) {
    width: auto;
  }
`
