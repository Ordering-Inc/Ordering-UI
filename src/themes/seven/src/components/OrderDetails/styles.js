import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
`
export const Layout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
export const LeftPanel = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`
export const RightPanel = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.secundaryBackground};
  @media (min-width: 1024px) {
    width: 50%;
  }
`
export const PanelRow = styled.div`
  padding: 4% 6%;
  box-sizing: border-box;
`

export const WrapperContainer = styled.div`
  width: ${({ isLoading }) => isLoading ? '100%' : '80%'};
  margin: auto;
`

export const Header = styled.div`
  width: 100%;
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    box-sizing: border-box;
    padding: 7px 16px;
    font-size: .86rem;
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    color: #000000;
    margin: 0;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    color: #212629;
    margin: 0px;
  }
`

export const OrderBusiness = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 1;
  padding-bottom: 20px;
  margin: 10px 0px 20px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
   width: 100%;
  p {
    font-size: 14px;
    line-height: 24px;
    width: 100%;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #212629;
    margin: 0;
  }
  @media (min-width: 380px) {
    width: 75%;
  }
`

export const ActionsBlock = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  svg {
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 380px) {
    flex-direction: row;
    svg {
      font-size: 20px;
    }
  }
`

export const OrderInfo = styled.div`
  width: 100%;
`

export const OrderData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4, p {
    margin: 0px;
  }
  h4 {
    margin-bottom: 5px;
    font-size: 20px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    color: #212629;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

const StatusBarStyled = styled.div`
  height: 14px;
  margin: 10px 0px 0px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%);
  `}
`

export const StatusBar = (props) => {
  return (
    <StatusBarStyled
      {...props}
      // style={{ background: `linear-gradient(to right, #D81212 ${props.percentage}%, #BFBFBF ${props.percentage}%)` }}
    >
      {props.children}
    </StatusBarStyled>
  )
}

export const OrderStatus = styled.div`
  margin-top: 40px;
  span {
    display: inline-block;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    margin-top: 16px;
    color: #000000;
    text-transform: uppercase;
  }
`

export const SectionTitle = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  text-transform: uppercase;
  font-weight: 700;
`

export const OrderCustomer = styled.div`
  display: flex;
  margin: 10px 0px 20px;
  width: 100%;

  div.photo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 70px;
      height: 70px;
      margin: 0 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }
  }

`

export const PhotoBlock = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin: 0 10px;
  ${props => props.theme?.rtl && css`
    margin-left: 10px;
    margin-right: 0;
  `}
`

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 14px;
    line-height: 24px;
    color: #212629;
    margin: 0;

  }
`

export const Map = styled.div`
  width: 100%;
  height: 20vh;
  margin-bottom: 10px;

  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }
`

export const OrderDriver = styled(OrderCustomer)`
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`

export const WrapperDriver = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  div.photo {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.theme.colors.borderColor};
    width: 48px;
    height: 47px;
    border-radius: 7px;
    overflow: hidden;

    svg {
      width: 48px;
      height: 47px;
    }
  }

  div.name {
    margin: 0 10px;
    p {
      font-size: 16px;
      line-height: 26px;
      color: #212629;
    }
  }

`
export const OrderProducts = styled(OrderCustomer)`
  flex-direction: column;
`
export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  table {
    width: 100%;
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

  table.bill-sub-option {
    tr td{
      font-size: 12px;
      line-height: 22px;
      color: #212629;
    }
    padding-top: 20px;
  }
  
  table.total {
    padding-top: 10px;
    tr td {
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
      color: #212629;
    }
  }

  @media (min-width: 411px) {
    table {
      font-size: 18px;
    }
  }
`

export const ReviewsAction = styled.div`
  width: 100%;
  margin: 20px 0px;
  font-size: 16px;
  line-height: 26px;
  color: ${props => props.theme.colors.primary};
  padding-bottom: 5px;
`

export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin-bottom: 30px;
  span:nth-child(2),span:nth-child(5){
      span{
        height: 100px;
      }
    }
  @media (min-width: 768px){
    span:nth-child(2), span:nth-child(5){
      span{
        height: 200px;
      }
    }
  }
`

export const SkeletonBlockWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  line-height: 40px;
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
export const Hr = styled.div`
  width: 100%;
  height: ${({ height }) => height ? `${height}px` : '10px'};
  background: ${({ color }) => color ? `${color}` : '#DDDDDD'};
`
export const PageTitle = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: #000000;
  text-transform: uppercase;
`
