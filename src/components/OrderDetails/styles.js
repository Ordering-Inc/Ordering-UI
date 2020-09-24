import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
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
`

export const Header = (props) => {
  const style = {}

  return (
    <HeaderStyled style={style}>
      {props.children}
    </HeaderStyled>
  )
}

export const HeaderInfo = styled.div`
  background-color: #D81212;
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 20px 40px 20px 20px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
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
  min-height: 83px;
  border-radius: 10px;
`

export const HeaderText = styled.div`
  display: flex;
  color: #FFF;
  margin: 20px 0px;
  text-align: center;

  ${({ column }) => column && css`
    flex-direction: column;
  `};
  ${({ column }) => !column && css`
    justify-content: space-between;
    align-items: center;
  `};

  h1 {
    margin: 0px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 80px;
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

export const BusinessLogoWrapper = styled.div`
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
  h1, p {
    margin: 3px 15px;
  }

  h1 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
    opacity: 0.8;
  }
`

export const BusinessActions = styled.div`
  max-width: 20%;
  display: flex;
  align-items: center;
  > * {
    margin-right: 10px;
  }
  svg {
    font-size: 24px;
    cursor: pointer;
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
`

const StatusBarStyled = styled.div`
  height: 7px;
  margin: 10px 0px 0px;
`

export const StatusBar = (props) => {
  return (
    <StatusBarStyled
      {...props}
      style={{ background: `linear-gradient(to right, #D81212 ${props.percentage}%,#BFBFBF ${props.percentage}%)` }}
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
    border: 1px solid #D81212;
    color: #D81212;
    text-align: center;
    border-radius: 10px;
    font-weight: bold;
    text-transform: uppercase;
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
`

export const CustomerTitle = styled.h1`
  margin-top: 0px;
  font-size: 26px;
`

export const OrderCustomer = styled.div`
  display: flex;
  margin: 10px 0px 20px;
`

export const WrapperCustomerPhoto = styled(BusinessLogoWrapper)`
  border-radius: 100%;
  margin-right: 10px;
`
const CustomerPhotoStyled = styled.div`
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
  border-radius: 100%;
`

export const CustomerPhoto = (props) => {
  return (
    <CustomerPhotoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </CustomerPhotoStyled>
  )
}

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  h1, span {
    margin: 0px;
  }

  h1 {
    font-size: 20px;
  }

  span {
    font-size: 18px;
    opacity: 0.8;
  }
`

export const DriverTitle = styled(CustomerTitle)``

export const OrderDriver = styled(OrderCustomer)`
  justify-content: space-between;
`

export const WrapperDriver = styled.div`
  display: flex;
`

export const WrapperDriverPhoto = styled(WrapperCustomerPhoto)``

const DriverPhotoStyled = styled.div`
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
  border-radius: 100%;
`

export const DriverPhoto = (props) => {
  return (
    <DriverPhotoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </DriverPhotoStyled>
  )
}

export const DriverInfo = styled(CustomerInfo)``

export const DriverActions = styled(BusinessActions)``

export const OrderBillTitle = styled(CustomerTitle)``

export const OrderProducts = styled(OrderCustomer)`
  flex-direction: column;
`

export const WrapperProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #BFBFBF;
  padding: 10px 0px;

  div.info {
    display: flex;
    align-items: center;
    width: 80%;
    p {
      font-size: 20px;
      margin: 0px 5px;
      svg {
        cursor: pointer;
      }
    }
  }

  div.price {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    span {
      font-weight: bold;
      font-size: 20px;
    }
  }
`

export const WrapperProductImage = styled(BusinessLogoWrapper)``

const ProductImageStyled = styled.div`
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

export const ProductImage = (props) => {
  return (
    <ProductImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </ProductImageStyled>
  )
}

export const ProductInfo = styled(CustomerInfo)`
  margin-left: 10px;
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
        color: #D81212;
        padding-top: 10px;
      }
    }
  }
`

export const ReviewsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    padding: 10px 30px;
    color: #FFF;
    width: 40%;
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
    color: #D81212;
    cursor: pointer;
    font-weight: bold;
  }
  svg {
    margin-left: 5px;
    transform: rotate(90deg)
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
