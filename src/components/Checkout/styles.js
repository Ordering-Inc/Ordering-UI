import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const WrappContainer = styled.div`
  width: 90%;
  margin: auto;

  @media (min-width: 513px) {
    width: 80%;
  }
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  flex-wrap: wrap;

  div {
    width: 100%;
  }
`

export const BusinessDetailsContainer = styled(UserDetailsContainer)`
  div {
    h1 {
      margin: 0px;
      font-size: 24px;
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px 0px;
  h1 {
    margin: 0px;
    font-size: 24px;
  }
`

export const DriverTipContainer = styled(PaymentMethodContainer)``

export const CartContainer = styled(PaymentMethodContainer)`
  margin-bottom: 20px;
  h1 {
    margin: 20px 0px;
  }
`

export const WrapperPlaceOrderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0px 10px;

  button {
    width: 100%;
    padding: 5px 20px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media (min-width: 513px) {
    button {
      width: 70%;
    }
  }
`

export const WarningMessage = styled.div`
  width: 100%;
  height: 150px;
  max-height: 300px;
  background-color: #F2BB40;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  border-radius: 10px;
  position: relative;

  svg {
    position: absolute;
    font-size: 30px;
    top: 0;
    left: 0;
    margin: 11px;
    ${props => props.theme?.rtl && css`
        right: 0;
        left: initial
    `}
  }

  h1 {
    font-size: 20px;
    margin: 0px 60px;
    text-align: center;
  }
`

export const NotFoundImage = styled.div`
  max-width: 300px;

  img {
    width: 300px;
  }
`

export const CartsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;

  @media (min-width: 381px) {
    width: 80%;
  }
`

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  background: #F8F8F8 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  margin: 20px 0px;
  padding: 10px;
`

export const CartItemWrapper = styled.div`
  width: 60%;
  display: flex;
`

export const LogoWrapper = styled.div`
  align-self: center;
  width: 50px;
  height: 50px;
  min-height: 50px;
  max-width: 50px;

  @media (min-width: 481px){
    max-width: 75px;
    max-height: 75px;
    height: 75px;
    width: 75px;
  }
`

const CartItemLogoStyled = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: contain;
  object-fit: cover;
  background-position: center;
  min-height: 50px;
  border-radius: 10px;

  @media (min-width: 481px){
    width: 100%;
    height: 100%;
    min-height: 75px;
  }
`

export const CartItemLogo = (props) => {
  return (
    <CartItemLogoStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </CartItemLogoStyled>
  )
}

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  h1,
  p {
    margin: 3px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h1 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    opacity: 0.8;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }
  }
`

export const CartItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;

  button {
    cursor: pointer;
    font-size: 14px;
    &:disabled{
      opacity: 0.5;
      cursor: not-allowed;
    }
    @media (min-width: 361px) {
      font-size: 16px;
    }
  }

  span {
    font-weight: bold;
  }

  @media (min-width: 577px) {
    font-size: 16px;
  }
`

export const WarningText = styled.p`
  margin: 10px auto 15px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`
