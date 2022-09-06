import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  ${({ pfchangs }) => pfchangs && css`
    color: #fff;
  `}
`

export const WrapperContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  min-height: auto;
  position: relative;

  @media (min-width: 993px) {
    min-height: calc(100vh - 337px);
    box-sizing: border-box;
  }
`

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const HeaderInfo = styled.div`
  width: 80%;
  margin-bottom: 20px;

  h1, p {
    margin: 0;
    color: ${props => props.theme.colors.darkTextColor};
  }

  h1 {
    margin-bottom: 22px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
`

export const OrderBusiness = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 7.6px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px 0px #0000001F;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

export const BusinessWrapper = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${props => props.borderBottom && css`
    padding-bottom: 15px;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  `}
  ${props => props.borderTop && css`
    margin-top: 15px;
    border-top: 1px solid ${props => props.theme.colors.lightGray};
  `}
  img {
    width: 100px;
    height: 100px;
    border-radius: 7.6px;
    margin-right: 0;

    @media (min-width: 400px) {
      margin-right: 40px;
    }
  }

  @media (min-width: 400px) {
    flex-direction: row;
    width: ${props => props.w ?? '100%'};
  }
`

export const BtsOrderStatus = styled.div`
  width: calc(100% - 20px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  div + div {
    margin-left: 30px;
  }
`

export const BusinessInfo = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-right: 0;
  margin-top: 10px;

  h1,
  p {
    margin: 0;
    color: ${props => props.theme.colors.darkTextColor};
    overflow-wrap: anywhere;
  }

  h2 {
    font-weight: 500;
    font-size: 18px;
    margin: 0px 0px 5px 0px;
  }
  p {
    font-size: 14px;
    margin-bottom: 5px;
  }

  @media (min-width: 400px) {
    margin-right: 15px;
    margin-top: 0;
  }
`

export const ActionsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
    color: #B1BCCC;
  }

  @media (min-width: 380px) {
    svg {
      font-size: 20px;
    }
  }
`

export const OrderInfo = styled.div`
  width: 100%;
  margin: 0px 0px 35px;
  position: relative;
  h1, p {
    margin: 0px;
    color: ${props => props.theme.colors.darkTextColor};
  }
  h1 {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 32px;
  }
  p {
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .date {
    margin-bottom: 6px;
  }

  .types {
    margin-bottom: 6px;
    font-size: 16px;
  }

  .order-status {
    font-weight: 600;
    font-size: 16px;
  }
`

export const ReviewOrderLink = styled.span`
  margin: 0;
  cursor: pointer;
  text-decoration-line: underline;
  user-select: none;
  ${({ active }) => active ? css`
    color: ${props => props.theme?.colors.primary};
  ` : css`
    color: #B1BCCC;
    cursor: not-allowed;
    span {
      pointer-events: none;
    }
  `}
  ${({ isMargin }) => isMargin && css`
    margin: 0px 10px;
  `}
`

const StatusBarStyled = styled.div`
  height: 12px;
  margin: 18px 0px 8px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%);
  `}
`

export const StatusBar = (props) => {
  return (
    <StatusBarStyled {...props}>
      {props.children}
    </StatusBarStyled>
  )
}

export const SectionTitle = styled.h1`
  margin: 20px 0 0 0;
  font-size: 20px;
  font-weight: 500;
`

export const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin: 0px 0px 5px 0px;
  }
`

export const OrderCustomer = styled(BusinessInfo)`
  display: flex;
  flex-direction: column;
  border-radius: 7.6px;
  padding: 20px;
  box-shadow: 0px 4px 10px 0px #0000001F;
  margin-bottom: 30px;
`

export const PhotoBlock = styled.img`
  border-radius: 7.6px;
  width: 100px;
  height: 100px;
  margin-right: 40px;
`

export const Map = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 350px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }

  img {
    object-fit: cover;
  }
`

export const OrderDriver = styled(OrderCustomer)``

export const WrapperDriver = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  div.photo {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 48px;
      height: 48px;
      margin-right: 10px;
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
  flex-direction: column;
  margin-bottom: 25px;
  margin-top: 10px;
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
  }

  table.total {
    border-top: 1px solid #BFBFBF;
    margin-top: 15px;
    tr {
      font-size: 14px;
      td:nth-child(1) {
        font-weight: 600;
        font-size: 20px;
        padding-top: 10px;
      }
      td:nth-child(2) {
        font-weight: 600;
        font-size: 20px;
        padding-top: 10px;
      }
    }
  }

  table.comments {
    margin-top: 20px;
    align-items: center;
    tr {
      td:nth-child(1) {
        font-weight: bold;
      }
    }
  }

  @media (min-width: 678px) {
    table {
      font-size: 16px;
    }
  }
`

export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  div.wrap {
    & > div:first-child {
      left: 0;
    }
    button {
      border-radius: 7.6px;
    }
  }
  
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
      & > div:first-child {
        left: 0;
      }
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

export const WrapperLeftContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`

export const WrapperRightContainer = styled(WrapperLeftContainer)``

export const Divider = styled.div`
  height: 8px;
  background: #F8F9FA;
  width: calc(100% + 40px);
  margin-left: -20px;

  @media(min-width: 769px) {
    width: calc(100% + 80px);
    margin-left: -40px;
  }
`

export const MyOrderActions = styled.div``

export const ReviewWrapper = styled.div`
  .review-sent {
    border-radius: 7.6px;
  }
`

export const Exclamation = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  top: 3px;
`

export const CommentContainer = styled.div`
  margin: 0;
  h3 {
    margin: 0;
  }
`
export const NewOrder = styled.div`
  button {
    width: 160px;
  }
`
export const OrderActions = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
  button {
    display: flex;
    align-items: center;
    font-size: 14px;
    justify-content: space-around;
    min-width: 200px;
    max-height: 53px;
  }
  > h1 {
    text-align: center;
  }
`

export const ReOrder = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;

  button {
    padding: 5px 16px;
    min-width: unset;
    margin: 5px 5px;

    @media (min-width: 650px) {
      margin: 0px 5px;
    }
  }

  @media (min-width: 650px) {
    flex-direction: row;
  }
`

export const BusinessTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const OrderPreferences = styled(OrderCustomer)``

export const HeaderTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  h1{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
  }
`

export const PlaceSpotSection = styled.div`

`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const OrderHistoryContainer = styled.div``

export const HistoryItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 28px 23px;
  border-bottom: 1px solid ${props => props.theme.colors.gray200};

  > svg {
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors.primary};
  }
`

export const DetailWrapper = styled.div`
  margin-left: 50px;
  ${props => props.theme.rtl && css`
    margin-left: 0px;
    margin-right: 50px;
  `}

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  button {
    width: 100%;
    height: 44px;
    position: relative;

    svg {
      position: absolute;
      top: 10px;
      font-size: 22px;
      right: 16px;
      ${props => props.theme.rtl && css`
        left: 16px;
        right: initial;
        transform: rotate(180deg);
      `}
    }
  }
`

export const MapWrapper = styled.div`
  width: 100%;
  margin-top: 20px;

  @media (min-width: 769px) {
    width: 50%;
    margin-top: 0px;
  }
`

export const BusinessExternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    width: 50%;
  }
`
