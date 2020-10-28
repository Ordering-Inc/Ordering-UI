import React from 'react'
import styled, { css, useTheme } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const WrapperContainer = styled.div`
  width: 90%;
  margin: auto;
`

const HeaderStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  border-radius: 16px;
  max-height: 350px;

  @media (max-width: 768px) {
    background-position: bottom;
  }
`

export const Header = (props) => {
  const theme = useTheme()
  const style = {}
  style.backgroundImage = `url(${theme.images?.general?.orderDetailsHeader})`

  return (
    <HeaderStyled style={style}>
      {props.children}
    </HeaderStyled>
  )
}

export const HeaderInfo = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px 20px 30px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  ${props => props.theme?.rtl && css`
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  @media (max-width: 660px) {
    width: 55%;
  }

  @media (max-width: 380px) {
    width: 60%;
  }
`

export const HeaderLogo = styled.div`
  ${({ bgimage }) => bgimage && css`
    background-image: url(${bgimage});
  `}

  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: contain;
  object-fit: cover;
  min-height: 75px;
  border-radius: 10px;

  @media (max-width: 660px) {
    min-height: 60px;
  }
`

export const HeaderText = styled.div`
  display: flex;
  color: ${props => props.theme.colors.primaryContrast};
  text-align: center;
  margin: 0px 20px;

  ${({ column }) => column && css`
    flex-direction: column;
  `};
  ${({ column }) => !column && css`
    justify-content: space-between;
    align-items: center;
  `};

  h1 {
    margin: 0px;
    font-size: 24px;
  }

  @media (max-width: 576px) {
    margin: 0px;

    h1 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 80px;

  @media (max-width: 768px) {
    margin: 10px 0px;
  }
`

export const OrderBusiness = styled.div`
  display: flex;
  justify-content: space-between;
  background: #F8F8F8 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  margin: 20px 0px;
  padding: 10px;
`

export const BusinessWrapper = styled.div`
  width: 80%;
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
  justify-content: center;
  width: 75%;
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
  p {
    font-size: 15px;
    opacity: 0.8;
  }

  @media (max-width: 380px) {
    width: 65%;
  }
`

export const ActionsBlock = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > * {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
  `}
  }
  svg {
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 390px) {
    flex-direction: column;

    svg {
      font-size: 20px;
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
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1, p {
    margin: 0px;
  }
  h1 {
    margin-bottom: 5px;
  }
  p:nth-child(1) {
    opacity: 0.8;
  }
  p.date {
    font-weight: bold;
  }

  @media (max-width: 576px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 75%;
  }

  @media (max-width: 410px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`

const StatusBarStyled = styled.div`
  height: 7px;
  margin: 10px 0px 0px;
  background: ${props => `linear-gradient(to right, ${props.theme.colors.primary} ${props.percentage}%, ${props.theme.colors.disabled} ${props.percentage}%)`};
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
  max-width: 15%;
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
  }

  @media (max-width: 576px) {
    width: 20%;
    max-width: 20%;
  }

  @media (max-width: 410px) {
    width: 25%;
    max-width: 25%;

    span {
      font-size: 13px;
    }
  }
`

export const StatusImage = styled.div`
  img {
    display: flex;
    width: 80px;
    height: 80px;
    box-sizing: border-box;
    position: relative;
    background-repeat: no-repeat, repeat;
    background-size: contain;
    object-fit: contain;
    border-radius: 10px;
    margin-top: 15px;
  }

  @media (max-width: 410px) {
    img {
      width: 70px;
      height: 70px;
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
      margin-right: 10px;
      ${props => props.theme?.rtl && css`
        margin-left: 10px;
        margin-right: 0;
      `}
    }
  }

`

export const PhotoBlock = styled.img`
  border-radius: 50%;
  width: 75px;
  margin-right: 10px;
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
  align-items: center;
  flex-direction: column;
  table {
    width: 80%;
    font-size: 18px;
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
`

export const ReviewsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px;

  button {
    width: 70%;
    padding: 5px 20px;
    color: #FFF;
    cursor: pointer;
  }

  @media (max-width: 512px) {
    button {
      width: 100%;
    }
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
`

export const SkeletonBlockWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  line-height: 40px;
`
