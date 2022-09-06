import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: auto;

  h1{
    color: #fff
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
  }
  margin-top: 20px;
  @media (min-width: 993px) {
    min-height: calc(100vh - 337px);
    box-sizing: border-box; 
    ${({ isLoading }) => isLoading && css`
      margin-top: 76px;
    `}
  }
`

export const WrapperLeftContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;

  @media (min-width: 769px) {
    width: 55%;
    max-width: 700px;
    padding: 0px 60px 55px 40px;
  }
`

export const WrapperRightContainer = styled.div`
  width: 100%;
  background: #000;
  box-sizing: border-box;
  padding-bottom: 20px;
  border: 1px solid #fff;
  margin-top: 76px;
  height: max-content;
  @media (min-width: 769px) {
    width: 50%;
    max-width: 500px;
    padding-bottom: 40px;
  }
`

export const WrapperUserDetails = styled.div`
  width: 100%;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
      font-weight: 600;
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
    font-size: 20px;
    color: ${props => props.theme.colors.darkTextColor};
  }

  > div {
    border: 1px solid #fff;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 0px;
  }
`

export const DriverTipContainer = styled(PaymentMethodContainer)`
  h1 {
    font-size: 16px
  }
  > div {
    border: 1px solid #fff;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 0px;
  }
`

export const CartContainer = styled(PaymentMethodContainer)`
  margin-bottom: 20px;
  padding: 0 20px;
`

export const WalletPaymentOptionContainer = styled(PaymentMethodContainer)`
  padding-top: 20px;
`

export const WrapperPlaceOrderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
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

export const WarningMessage = styled.span`
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
    font-size: 16px;
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
  margin-top: 40px;
  .checkout-title {
    margin: 0;
    font-weight: 600;
    font-size: 32px;
    color: ${props => props.theme?.colors.darkTextColor};
  }

  
`
export const CheckOutDivider = styled.div`
  height: 8px;
  width: calc(100% + 40px);
  margin-left: -20px;
  background: #F8F9FA;

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

export const DeliveryOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  #select-input {
    margin-bottom: 10px;
  }
  #list {
    width: 100%;
  }

  > div {
    width: 100%;
    background-color: #F8F9FA!important;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    height: 44px;
    border: none;
    border-radius: 7.6px;
    color: #909BA9 !important;

    > div:first-child {
      padding-top: 5px;
      padding-bottom: 5px;
      justify-content: space-between;
    }
    > div#list {
      width: 100%;
      background-color: #F8F9FA!important;
      border: 1px solid #F8F9FA;
      border-radius: 7.6px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }
  }
`

export const CartHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }

  span {
    font-size: 13px;
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
    user-select: none;
  }

  h1, span {
    margin: 5px 0px;
  }

  @media (min-width: 300px) {
    flex-direction: row;
    align-items: center;
  }
`

export const SelectSpotContainer = styled.div``

export const WrapperActionsInput = styled.div`
  input {
    width: 100%;
  }
  h1 {
    font-size: 20px;
  }
`

export const HandoffContainer = styled.div`
  h1 {
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    margin: 0px 10px 0px 0px;
    ${props => props.theme?.rtl && css`
      margin: 0px 0px 0px 10px;
  `}
  }
`

export const ItemHeader = styled.div`
  border: 1px solid #fff;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`

export const HandoffContent = styled.div`
  border: 1px solid #fff;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`

export const BusinessDetails = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  img{
    width: 100%;
    height: 200px;
  }
  > div {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2  {
      font-size: 18px;
      font-weight: 500;
      margin: 0;
    }
    span {
      text-decoration: underline;
      font-size: 16px;
    }
  }
`

export const GoBackContainer = styled.div`
  width: 100%;
  position: relative;
  top: 25px;
  .back-arrow {
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 5px;
    color: #fff;
  }
`

export const TipsSkeleton = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`
