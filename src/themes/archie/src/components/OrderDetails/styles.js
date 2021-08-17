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
    padding: 11px 50px;
  }
`

export const HeaderImg = styled.div`
  img {
    display: none;

    @media (min-width: 678px) {
      display: block;
      height: 200px;
      object-fit: cover;
      width: 100%;
      border-radius: 10px;
      aspect-ratio: attr(width) / attr(height)

      ${props => props.theme?.rtl && css`
        transform: scaleX(-1);
      `}
    }

    @media (min-width: 768px) {
      height: 340px;
    }
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
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`

export const OrderBusiness = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 1;
  padding-bottom: 20px;
  margin: 10px 0px 20px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const BusinessWrapper = styled.div`
  width: 90%;
  display: flex;
`

export const LogoWrapper = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
`

const BusinessLogoStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 75px;
  border-radius: 10px;
`

export const BusinessLogo = (props) => {
  return (
    <BusinessLogoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </BusinessLogoStyled>
  )
}

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

export const StatusImage = styled.div`
  img {
    display: flex;
    width: 70px;
    height: 70px;
    box-sizing: border-box;
    position: relative;
    background-repeat: no-repeat, repeat;
    background-size: contain;
    object-fit: contain;
    border-radius: 10px;
    margin-top: 15px;
  }

  @media (min-width: 410px) {
    img {
      width: 80px;
      height: 80px;
    }
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
`

export const WrapperDriver = styled.div`
  display: flex;
  width: 100%;

  div.photo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 70px;
      height: 70px;
      margin: 0px 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
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
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`

export const FootActions = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    font-weight: bold;
  }
  svg {
    margin-left: 5px;
    transform: rotate(90deg)
    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: 0px;
      transform: rotate(-90deg);
    `}
  }
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

export const ShareOrder = styled.div`
  display: flex;
  margin: 0 0 20px;
  justify-content: space-between;
  z-index: 1;

  h1 {
    font-size: 15px;
    margin: 0px;
  }

  p {
    font-size: 13px;
    margin: 0px;
  }

  button {
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 14px;
    align-items: center;
    background: ${props => props.theme.colors.backgroundPage};

    svg {
      left: 0;
      margin-right: 6px;
      color: ${props => props.theme.colors.primary};
    }

    &:hover {
      svg {
        color: #FFFFFF;
      }
    }
  }

  div.text {
    width: 60%;
  }

  div.wrap {
    display: flex;
    align-items: center;

    & > div:first-child {
      width: 100%;
      position: relative;
      div {
        right: 0px;
        left: initial;
        top: 35px;
      }
    }
  }

  @media (min-width: 1201px) {
    div.wrap {
      & > div:first-child {
        left: 0;
      }
    }
  }

  @media (min-width: 768px) {
    div.wrap {
      width: 30%;
    }

    h1 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
    }

    button {
      font-size: 18px;
      width: 100%;
      svg {
        position: absolute;
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 425px) {
    div.text {
      width: 70%;
    }

    h1 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }
  }
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
