import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 15px 15px 15px;
  box-sizing: border-box;
  min-height: calc(100vh - 280px);

  @media (min-width: 769px) {
    width: 70%;
  }
  
  h2 {
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
  
  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
  }
`
export const HeaderContainer = styled.div`
  h1 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 400;
    margin: 0;
    span.name {
      font-weight: 700;
      margin: 0 10px;
    }
  }
  p {
    font-size: 14px;
    margin: 6px 0;
  }
`
export const CustomerInfoContainer = styled.div`
  border-radius: 7.6px;
  border: 1px solid ${props => props.theme.colors.gray200};
  padding: 30px 25px;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
`
export const CustomerDetails = styled.div`
  flex: 1;
  > div {
    display: flex;
    margin-top: 24px;
  }
`
export const PaymentDetails = styled.div`
  flex: 1;
  h3.address {
    margin-top: 30px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    margin: 10px 0;
  }
`
export const PhotoWrapper = styled.div`
  width: 75px;
  height: 75px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7.6px;
  }
  svg {
    width: 80%;
    height: 80%;
  }
  ${props => props.theme?.rtl ? css`
    margin-left: 34px;
  ` : css`
    margin-right: 34px;
  `}
`
export const CustomerData = styled.div`
  p {
    font-size: 14px;
    line-height: 24px;
    margin: 2px 0;
  }
`
export const OrderSummary = styled.div`
  border-radius: 7.6px;
  border: 1px solid ${props => props.theme.colors.gray200};
  padding: 30px 25px;
  background-color: ${props => props.theme.colors.grayDividerColor};
  margin: 50px 0 42px 0;

  table {
    width: 100%;
    tr {
      td {
        font-size: 14px;
        line-height: 24px;
        padding: 4px 0;
        &:last-child {
          ${props => props.theme?.rtl ? css`
            text-align: left;
          ` : css`
            text-align: right;
          `}
        }
      }
    }
  }
`
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.gray200};
  margin: 5px 0;
`
export const SingleOrderContainer = styled.div`
  border-radius: 7.6px;
  border: 1px solid ${props => props.theme.colors.gray200};
  padding: 30px 25px;
  margin-bottom: 66px;
  p.order-status {
    font-size: 14px;
    line-height: 24px;
    margin: 0;
  }
  p.order-total {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 28px 0 0 0;
    ${props => props.theme?.rtl ? css`
      text-align: left;
    ` : css`
      text-align: right;
    `}
  }
`
export const SingleOrderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    > div {
      display: flex;
      align-items: center; 
      @media (max-width: 769px) {
        flex-direction: column;
      }
      p {
        line-height: 24px;
        font-size: 14px;
        margin: 3px 0;
        &.date {
          margin: 0 5px;
        }
      }
    }
  }

  button {
    height: 43px;
  }
`
export const OrderBusinessDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
`
export const OrderBusinessWrapper = styled.div`
  display: flex;
`
export const BusinessData = styled.div`
  p {
    font-size: 14px;
    line-height: 21px;
    margin: 2px 0;
    &.bold {
      font-weight: 500;
    }
  }
`
export const ActionsBlock = styled.div`
  display: flex;
  span {
    cursor: pointer;
    font-size: 16px;
    color: ${props => props.theme.colors.lightGray};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`
export const StatusBar = styled.div`
  height: 12px;
  margin-bottom: 12px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.grayDividerColor} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.grayDividerColor} ${props.percentage}%);
  `}
`
export const MessagesIcon = styled.span`
  position: relative;
  cursor: pointer;
`
export const ExclamationWrapper = styled.div`
  position: absolute;
  transform: translate(75%, -25%);
  svg{
    font-size: 16px;
    color: ${props => props.theme?.colors?.primary}
  }
`
