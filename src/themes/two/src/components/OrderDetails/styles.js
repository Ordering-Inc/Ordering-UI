import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 60px;
`

export const WrapperContainer = styled.div`
  width: ${({ isLoading }) => isLoading ? '100%' : '91%'};
  margin: auto;
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
`

export const Header = styled.div`
  width: 100%;
  position: relative;
  min-height: 200px;

  @media (min-width: 768px) {
    min-height: 340px;
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
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 7px;
  min-height: 140px;

  @media (min-width: 678px) {
    position: absolute;
    top: 0;
    width: 50%;
    border-radius: ${props => props.theme?.rtl ? '0 7px 7px 0' : '7px 0 0 7px'};
    min-height: 160px;
  }

  @media (min-width: 768px) {
    min-height: 300px;
  }
`

export const HeaderText = styled.div`
  display: flex;
  color: ${props => props.theme.colors.primaryContrast};
  text-align: center;

  ${({ column }) => column && css`
    flex-direction: column;
  `};
  ${({ column }) => !column && css`
    justify-content: space-between;
    align-items: center;
  `};

  h1 {
    margin: 0;
    font-size: 22px;
  }

  p {
    font-size: 14px;
  }

  @media (min-width: 480px) {
    margin: 0px 20px;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  padding: 0 10px;
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
  h1 {
    cursor: pointer;
    width: 100%;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.darkTextColor};
  }

  p {
    color: ${props => props.theme.colors.grayTextColor};
    margin-bottom: 0px;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 18px;
    }
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

    svg {
      font-size: 24px;
    }
  }
`

export const OrderInfo = styled.div`
  padding: 0 30px;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  @media (max-width: 1200px) {
    padding: 0 10px;
  }
`

export const OrderData = styled.div`
  h1 {
    width: 100%;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.darkTextColor};
    span {
      &:not(:first-child) {
        color: ${props => props.theme.colors.primary};
        font-size: 24px;
        cursor: pointer;
      }
    }
  }

  p {
    color: ${props => props.theme.colors.grayTextColor};
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 24px;
    }
  }
`
export const OrderBusiness = styled(OrderInfo)`
`

export const StatusBar = styled.div`
  position: relative;
  height: 7px;
  margin: 25px 0px 40px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
  ${props => props.theme?.rtl && css`
    background: linear-gradient(to left, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)
  `}

  > div {
    position: absolute;
    top: -8px;
    width: 100%;
    display: flex;

    div {
      width: calc(100% / 3);
      text-align: right;
    }
  }
`

export const Step = styled.span`
  background: #fff;
  padding: 0 5px;
  svg {
    color: ${props => props.theme.colors.disabled};
    font-size: 24px;
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
`

export const OrderStatus = styled.div`
  width: 45%;
  max-width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    padding: 5px 10px;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    text-align: center;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 13px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }

  @media (min-width: 410px) {
    span {
      font-size: initial;
    }
  }

  @media (min-width: 768px) {
    width: 25%;
    max-width: 25%;
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

export const SectionTitle = styled.h1`
  margin: 0px;
  font-size: 26px;

  @media (max-width: 410px) {
    font-size: 24px;
  }
`

export const OrderCustomer = styled(OrderInfo)`
  h1 {
    font-size: 24px;
    margin-bottom: 0px;
  }

  p {
    color: ${props => props.theme.colors.grayTextColor};
    font-size: 18px;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
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

export const InfoBlock = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  h1,
  span {
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h1 {
    font-size: 20px;
  }

  span {
    font-size: 18px;
    opacity: 0.8;
  }
`

export const Map = styled.div`
  width: 60%;
  height: calc(100vh - 120px);
  margin-bottom: 10px;

  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }

  ${({ isSkeleton }) => isSkeleton && css`
    padding-top: 37px;
  `}

  @media (max-width: 992px) {
    height: 30vh;
    min-height: 200px;
    width: 100%;
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
    padding: 0 30px;
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

  @media (max-width: 1200px) {
    table {
      padding: 0 10px;
    }
  }

  @media (min-width: 678px) {
    table {
      font-size: 18px;
    }
  }
`

export const ReviewsAction = styled.div`
  margin: 30px 0 20px;
  padding: 20px;
  cursor: pointer;
  background: #F7F7F7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0px;
  }
  >div {
    > div {
      display: flex;
      column-gap: 5px;
  
      svg {
        color: ${props => props.theme.colors.grayTextColor};
      }
    }
  }

  svg {
    font-size: 24px;
  }
  
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
      transform: rotate(-90deg)
    `}
  }
`
export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin-bottom: 30px;
`

export const SkeletonBlockWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  line-height: 40px;
  width: 100%;
`

export const ShareOrder = styled(OrderInfo)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;

  svg {
    font-size: 24px;
  }

  > div {
    display: flex;
    align-items: center;
    column-gap: 10px;

    p {
      margin: 0px;
      font-size: 18px;
      span {
        &:not(:first-child) {
          font-weight: 500;
          padding: 0 5px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    > div {
      p {
        font-size: 14px;
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
  transform: translate(75%, -25%);
  svg{
    font-size: 16px;
    color: ${props => props.theme?.colors?.primary}
  }
`
export const WrapBack = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  cursor: pointer;
`
