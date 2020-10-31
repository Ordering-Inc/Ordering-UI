import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const WrappContainer = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 512px) {
    width: 90%;
  }
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  flex-wrap: wrap;

  div.user {
    width: 50%;
  }

  div.business {
    width: 50%;
    h1 {
      margin: 0px;
      font-size: 24px;
    }

    @media (min-width: 993px) {
      text-align: center;
    }
  }

  @media (max-width: 760px) {
    div.user,
    div.business {
      width: 100%;
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
    width: 70%;
    padding: 5px 20px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  @media (max-width: 512px) {
    button {
      width: 100%;
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

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  margin: 10px auto;

  h1 {
    opacity: 0.5;
    text-align: center;
  }

  @media (max-width: 576px) {
    width: 80%;
    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 20px;
    }
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
  width: 80%;
  margin: auto;

  @media (max-width: 380px) {
    width: 90%;
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
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
  @media (max-width: 480px){
    align-self: center;
    width: 50px;
    height: 50px;
    min-height: 50px;
    max-width: 50px;
  }
`

const CartItemLogoStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: contain;
  object-fit: cover;
  background-position: center;
  min-height: 75px;
  border-radius: 10px;
  @media (max-width: 480px){
    width: 50px;
    height: 50px;
    min-height: 50px;
    
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
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }

  @media(max-width: 480px){
    width: 70%;
    h1,
    p {
      margin: 3px 10px;
    }
    h1{
      font-size: 16px;
    }
    p{
      font-size: 12px;
    }
  }
`

export const CartItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    cursor: pointer;
    &:disabled{
      opacity: 0.5;
      cursor: not-allowed;
    }
    @media (max-width: 360px) {
      font-size: 14px;
    }
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`

export const InvalidAddress = styled.p`
  margin: 10px auto 15px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`
