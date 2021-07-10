import React from 'react'
import styled, { css } from 'styled-components'
export const Container = styled.div`
  display: flex;
  width: 100%;
`
export const WrapperContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
export const LeftPanel = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 1024px) {
    width: 40vw;
    padding: 0 50px;
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    max-height: calc(100vh - 65px);
    overflow-y: auto;
  }
`
export const RightPanel = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 1024px) {
    width: 60vw;
    padding: 0 100px;
    max-height: calc(100vh - 65px);
    overflow-y: auto;
  }
`
export const LeftContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: fit-content;
`
export const RightContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: fit-content;
`
export const Header = styled.div`
  width: 100%;
  position: relative;
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 10;
    top: 10px;
    left: 10px;
    color: #000;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px
    }
  }
`
export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const HeaderText = styled.div`
  display: flex;
  color: #000;
  ${({ column }) => column && css`
    flex-direction: column;
  `};
  ${({ column }) => !column && css`
    justify-content: space-between;
  `};
  h1 {
    margin-bottom: 0;
    font-size: 22px;
  }
  p {
    margin: 0px;
    font-size: 14px;
  }
  @media (min-width: 769px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 18px;
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
export const OrderBusiness = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 1;
  margin: 20px 0px;
  padding: 10px;
`
export const BusinessWrapper = styled.div`
  width: 90%;
  display: flex;
`
export const LogoWrapper = styled.div`
  max-width: 65px;
  max-height: 65px;
  height: 65px;
  width: 65px;
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
  justify-content: center;
  width: 65%;
  h1,
  p {
    margin: 3px 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h1 {
    font-size: 18px;
  }
`
export const ActionsBlock = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > * {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
  `}
  }
  svg {
    font-size: 20px;
    cursor: pointer;
  }
  @media (min-width: 380px) {
    flex-direction: row;
    align-items: flex-start;
    svg {
      font-size: 24px;
    }
  }
`
export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px 20px;
`
export const OrderData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1, p {
    margin: 0px;
  }
  h1 {
    margin-bottom: 5px;
    font-size: 24px;
  }
  p {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p.date {
    font-weight: 100;
    margin-bottom: 20px
  }
  @media (min-width: 1024px) {
    p.date {
      margin-bottom: 30px
    }
  }
  @media (min-width: 425px) {
    p {
      font-size: 18px;
    }
  }
`
const StatusBarStyled = styled.div`
  height: 10px;
  margin: 10px 0px 0px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, #fff ${props.percentage}%)`};
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
  display: inline-block;
  width: fit-content;
  padding: 5px 0;
  color: lightgray;
  text-transform: capitalize;
  font-weight: 600;
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
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 5px;
  width: 100%;
  color: ${props => props.theme.colors.fontSecundary};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};;
  text-transform: uppercase;
  margin-top:35px;
  @media (min-width: 1024px) {
    margin-top: 50px;
  }
  @media (max-width: 410px) {
    font-size: 14px;
    line-height: 16px;    
  }
`
export const OrderCustomer = styled.div`
  display: flex;
  margin: 10px 0px 20px;
  width: 100%;
  position: relative;
`
export const CustomerInfo = styled.div`
  width:93%;
  .photo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 65px;
  }
  svg {
    width: 65px;
    height: 65px;
    margin: 0 10px;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }
`
export const ShareOrderWrapper = styled.div`
  display: flex;
  padding-top: 15px;
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
export const InfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  h1,
  span {
    margin: 3px 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h1 {
    font-size: 18px;
  }
`
export const Map = styled.div`
  width: 100%;
  height: 50vh;
  margin-bottom: 10px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
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
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 6px #c4c0c0;
  border-radius: 7px;
  overflow: hidden;
  margin-top: 30px;
  box-sizing: border-box;
  @media (min-width: 1024px) {
    margin-top: 45px;
  }
  div:last-child {
    border-bottom: none;
  }
`
export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 6px #c4c0c0;
  border-radius: 7px;
  overflow: hidden;
  padding: 20px;
  margin-top: 30px;
  @media (min-width: 1024px) {
    margin-top: 45px;
  }
  table {
    width: 100%;
    font-size: 12px;
    td span {
      unicode-bidi: bidi-override;
    }
    tr td:nth-child(2) {
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
      `}
    }
  }
  table.total {
    border-top: 1px solid #BFBFBF;
    margin-top: 15px;
    tr {
      font-size: 20px;
      td:nth-child(1) {
        font-weight: bold;
        padding-top: 10px;
      }
      td:nth-child(2) {
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
        padding-top: 10px;
      }
    }
  }
  @media (min-width: 678px) {
    table {
      font-size: 18px;
    }
  }
`
export const ReviewsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0px;
  button {
    width: 50%;
    padding: 5px 20px;
    color: #FFF;
    cursor: pointer;
  }
  @media (min-width: 480px) {
    button {
      width: 20%;
    }
  }
`
export const FootActions = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
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
