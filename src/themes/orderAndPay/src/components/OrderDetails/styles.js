import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  box-sizing: border-box;
`

export const WrapperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SkeletonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const HeaderInfo = styled.div`
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
  margin: 10px 0px;
`

export const OrderBusiness = styled.div`
  display: flex;
  margin: 20px 0 35px 0;
`

export const BusinessWrapper = styled.div`
  width: 90%;
  display: flex;
`

export const BusinessInfo = styled.div`
  h1,
  p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${props => props.theme.colors.darkTextColor};
  }

  h2 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
  }
`

export const ActionsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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
`

export const OrderInfo = styled.div`
  width: 100%;
  h1, p {
    margin: 0px;
    color: ${props => props.theme.colors.darkTextColor};
  }
  h1 {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 20px;
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

  .order-status {
    font-weight: 600;
    font-size: 16px;
  }
`
export const ReviewOrderLink = styled.a`
  cursor: pointer;
  text-decoration-line: underline;
  user-select: none;
  ${({ active }) => active ? css`
    color: ${props => props.theme?.colors.primary};
  ` : css`
    color: #B1BCCC;
    pointer-events: none;
  `}
`

const StatusBarStyled = styled.div`
  height: 12px;
  margin: 18px 0px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, #F8F9FA ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, #F8F9FA ${props.percentage}%)
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

export const SectionTitle = styled.h1`
  margin: 20px 0 0 0;
  font-size: 20px;
  font-weight: 500;
`

export const OrderCustomer = styled(BusinessInfo)`
  margin: 25px 0px 35px;
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

export const Map = styled.div`
  width: calc(100% + 40px);
  height: 150px;
  margin-left: -20px;
  margin-bottom: 10px;

  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
  }

  @media (min-width: 768px) {
    width: calc(100% + 80px);
    margin-left: -40px;
  }
`

export const OrderDriver = styled(OrderCustomer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #E9ECEF;
`

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
  border-top: 1px solid #BFBFBF;
  padding-top: 10px;
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
    margin-top: 5px;
    tr {
      font-size: 12px;
      td:nth-child(1) {
        font-weight: 600;
        font-size: 14;
        padding-top: 10px;
      }
      td:nth-child(2) {
        font-weight: 600;
        font-size: 14px;
        padding-top: 10px;
      }
    }
  }

  @media (min-width: 678px) {
    table {
      font-size: 14px;
    }
  }
`

export const ReviewsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;

  button {
    width: 100%;
    padding: 5px 20px;
    color: #FFF;
    cursor: pointer;
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
`

export const MessagesIcon = styled.span`
  position: relative;
  cursor: pointer;
`

export const ExclamationWrapper = styled.div`
  position: absolute;
  transform: ${({ driver }) => driver ? 'translate(50%,-25%)' : 'translate(300%, -25%)'};
  svg{
    font-size: 16px;
    color: ${props => props.theme?.colors?.primary}
  }
`

export const WrapperLeftContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

`

export const WrapperRightContainer = styled(WrapperLeftContainer)`
`

export const Divider = styled.div`
  height: 8px;
  background: #F8F9FA;
  width: calc(100% + 40px);
  margin-left: -20px;
`

export const MyOrderActions = styled.div`

`

export const ModalIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin-top: 3px;
  margin-bottom: 20px;
`

export const IconsContainer = styled.div`
  display: flex;
  svg{
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.arrowColor};
  }
`

export const Exclamation = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  top: 3px;
`
