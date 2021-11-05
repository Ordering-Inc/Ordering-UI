import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px 40px;
  margin-bottom: 60px;
  box-sizing: border-box;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

export const WrapperLeftContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 769px) {
    width: 55%;
    padding: 55px 60px 55px 40px;
  }
`

export const WrapperRightContainer = styled.div`
  width: 100%;
  background: #fff;
  box-sizing: border-box;

  @media (min-width: 769px) {
    width: 45%;
    padding: 55px 40px;
  }
`

export const WrapperUserDetails = styled.div`
  width: 100%;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid #E9ECEF;
`

export const BusinessDetailsContainer = styled(UserDetailsContainer)`
  border: none;
  div {
    h1 {
      text-transform: capitalize;
      margin: 0px;
      font-weight: 500;
      font-size: 16px;
    }
    p {
      font-size: 14px;
      margin: 5px 0;
      color: ${props => props.theme.colors.darkTextColor};
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px 0px;
  h1 {
    margin: 0px;
    font-weight: 500;
    font-size: 16px;
    color: ${props => props.theme.colors.darkTextColor};
  }
`

export const DriverTipContainer = styled(PaymentMethodContainer)`
  > p {
    margin: 0;
    font-size: 16px;
    color: #909BA9;
  }
`

export const CartContainer = styled(PaymentMethodContainer)`
  margin-bottom: 20px;
  h1 {
    margin: 20px 0px;
  }
`

export const WrapperPlaceOrderButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px 10px;

  button {
    width: 100%;
    padding: 5px 20px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

export const WarningMessage = styled.div`
  width: 100%;
  height: fit-content;
  max-height: fit-content;
  min-height: 150px;
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
        left: initial;
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

export const WarningText = styled.p`
  margin: 10px auto;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`

export const WrapperLeftContent = styled.div`
  width: 100%;

  .checkout-title {
    margin: 0;
    margin-bottom: 50px;
    font-weight: 600;
    font-size: 20px;
    color: ${props => props.theme?.colors.darkTextColor};
  }
`
export const CheckOutDivider = styled.div`
  height: 8px;
  width: calc(100% + 40px);
  margin-left: -20px;
  background: #fff;

  @media(min-width: 769px) {
    width: calc(100% + 100px);
    margin-left: -40px;
  }
`

export const DriverTipDivider = styled.div`
  height: 8px;
  width: calc(100% + 40px);
  margin-left: -20px;
  background: #E9ECEF;

  @media(min-width: 769px) {
    width: calc(100% + 80px);
    margin-left: -40px;
  }
`
export const ModalIcon = styled.div`
  margin-top: 3px;
  margin-bottom: 20px;
`

export const TotalCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #E9ECEF;
  position: fixed;
  bottom: -5px;
  right: 0;
  width: 100%;
  background-color: #FFF;
  button{
    margin-bottom: ${({ isIOS }) => isIOS ? '10px' : '0'};
    height: 52px;
    font-weight: 600;
    font-size: 12px;
    width: 45%;
  }
  p{
    font-size: 16px;
  }
  @media (min-width: 340px){
    button{
      font-size: 14px;
    }
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  input{
    width: 100%;
    border-radius: 7.6px;
    border: 1px solid #DEE2E6;
  }
`

export const Table = styled.div`
 display: flex;
 flex-direction: column;
 h2{
   font-weight: 500;
   font-size: 16px;
   display: flex;
   align-items: center;
   color: ${props => props.theme.colors.darkTextColor};
   margin-bottom: 20px;
 }
`

export const PlaceName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${({ isDisabled }) => isDisabled ? 0.5 : 1};
  font-weight: 400;
  border-bottom: 1px solid #E9ECEF;
  margin-bottom: 10px;
  p{
    font-size: 10px;
    color: ${props => props.theme.colors.darkTextColor};
  }
  span{
    font-size: 12px;
    color: #909BA9;
  }
`

export const PlaceNumber = styled.div`

`

export const TypeContainer = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  button: {
    width: 100%;
    border-radius: 7.6px;
    height: 44px;
  }
  h1{
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.darkTextColor};
    margin-bottom: 25px;
  }
  label{
    font-size: 12px;
    margin-bottom: 10px;
  }
`
