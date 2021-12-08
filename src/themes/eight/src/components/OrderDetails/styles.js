import React from 'react'
import styled, { css } from 'styled-components'

export const TitleBar = styled.div`
  border: 1px solid #E9ECEF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  padding: 18px 5px;
  text-align: center;
  color: ${props => props.theme.colors.grayDark};
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  min-height: calc(100vh - 180px);

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
export const WrapLeftContainer = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    width: 50%;
  }
`

export const WrapLeftInnerContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    max-width: 500px;
    width: 100%;
    margin: initial;
  }
  @media (min-width: 1400px) {
    max-width: 600px;
  }
`

export const WrapRightInnerContainer = styled.div`
  @media (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  @media (min-width: 1024px) {
    max-width: 500px;
    margin: initial;
  }
  @media (min-width: 1024px) {
    ${props => props.theme?.rtl ? css`
      padding: 0 30px 0 20px;
    ` : css`
      padding: 0 20px 0 30px;
    `}
  }

  @media (min-width: 1400px) {
    max-width: 600px;
    ${props => props.theme?.rtl ? css`
      padding: 0 50px 0 20px;
    ` : css`
      padding: 0 20px 0 50px;
    `}
  }
`

export const WrapRightContainer = styled.div`
  background-color: ${props => props.theme.colors.secundaryLight};
  padding: 30px 20px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    padding: 30px 0px;
    width: 50%;
  }
`

export const Header = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  margin-top: 10px;

  > button {
    background: transparent;
  }
`

export const HeaderText = styled.div`
  display: flex;
  color: ${props => props.theme.colors.grayDark};

  ${({ column }) => column && css`
    flex-direction: column;
  `};
  ${({ column }) => !column && css`
    justify-content: space-between;
    align-items: center;
  `};

  h1 {
    margin: 0;
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    p {
      font-size: 18px;
    }

    h1 {
      font-size: 32px;
    }
  }
`

export const OrderBusiness = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 1;
  margin-bottom: 20px;
  padding-bottom: 35px;
  border-bottom: 8px solid #F8F9FA;
`

export const BusinessWrapper = styled.div`
  width: 90%;
  display: flex;
`
export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  p {
    margin: 3px 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
  }

  @media (min-width: 380px) {
    width: 75%;
  }
`

export const ActionsBlock = styled.div`
  width: 10%;
  display: flex;
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
  border-bottom: 8px solid #F8F9FA;
  padding-bottom: 35px;

  h1, p {
    margin: 0px;
  }
  h1 {
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.colors.grayDark};
  }
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: ${props => props.theme.colors.grayDark};
  }

  p.uuid {
    display: none;
  }

  @media (min-width: 768px){
    h1 {
      font-size: 32px;
    }
  }

  @media (min-width: 512px) {
    p.uuid {
      display: block;
    }
  }
`

const StatusBarStyled = styled.div`
  height: 8px;
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
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.colors.grayDark};
  padding-top: 10px;
`

export const SectionTitle = styled.h1`
  margin: 0px;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.grayDark};
  text-transform: capitalize;
`

export const OrderCustomer = styled.div`
  display: flex;
  margin: 0px 0px 20px;
  width: 100%;
  padding-bottom: 35px;
  border-bottom: 8px solid #F8F9FA;
`

export const InfoBlock = styled.div`
  p {
    margin: 3px 0;
    color: ${props => props.theme.colors.grayDark};
    font-size: 15px;
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
    border-radius: 7.6px;
  }
`

export const WrapDriverInfo = styled.div`
  border-top: 8px solid ${props => props.theme.colors.gray};
  padding-top: 20px;
`

export const OrderDriver = styled(OrderCustomer)`
  justify-content: space-between;
  align-items: center;
  border-bottom: none;
  padding-bottom: 0px;
`

export const WrapperDriver = styled.div`
  display: flex;
  width: 100%;
`

export const OrderProducts = styled(OrderCustomer)`
  flex-direction: column;
  border-bottom: none;
  padding-bottom: 0px;
  > div {
    background: transparent;
    border-bottom: none;
  }
`

export const OrderBill = styled.div`
  border-top: 1px solid ${props => props.theme.colors.gray};
  padding-top: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  table {
    width: 100%;
    font-size: 12px;
    color: ${props => props.theme.colors.grayDark};
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
    border-top: 1px solid ${props => props.theme.colors.gray};
    margin-top: 15px;
    tr {
      font-size: 20px;
      td:nth-child(1) {
        font-weight: bold;
        padding-top: 10px;
      }
      td:nth-child(2) {
        font-weight: bold;
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
  width: fit-content;
  margin: 5px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};
  opacity: 0.6;
  text-decoration: underline;

  &:hover {
    opacity: 1;
  }
`

export const ShareOrder = styled.div`
  display: flex;
  margin: 0px;
  justify-content: space-between;
  z-index: 1;
  padding-bottom: 35px;

  h1 {
    font-size: 20px;
    margin: 0px;
    color: ${props => props.theme.colors.grayDark};
    font-weight: 500;
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
    z-index: 1;
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
