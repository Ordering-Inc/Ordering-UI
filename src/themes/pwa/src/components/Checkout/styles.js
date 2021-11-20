import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: auto;
  overflow-x: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  @media (min-width: 993px) {
    min-height: calc(100vh - 87px);
    box-sizing: border-box;
  }
`

export const WrapperLeftContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;

  > svg {
    color: #748194;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  @media (min-width: 576px) {
    padding: 40px 20px;
  }

  @media (min-width: 1024px) {
    width: 50%;
    padding: 40px 50px 45px 40px;
  }
`

export const WrapperRightContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;

  @media (min-width: 1024px) {
    background: #F8F9FA;
    width: 50%;
    padding: 40px;
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
  @media(min-width: 1024px) {
    border-bottom: 1px solid #E9ECEF;
  }

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
    font-weight: 600;
    font-size: 16px;
    margin: 0px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${props => props.theme.colors.darkTextColor};
    @media (min-width: 381px) {
      font-size: 20px;
    }
  }

  #select-input {
    font-size: 14px;

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
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0px 20px;
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
    font-weight: 600;
    font-size: 20px;
    color: ${props => props.theme?.colors.darkTextColor};

    @media(min-width: 500px) {
      font-size: 24px;
    }

    @media(min-width: 768px) {
      font-size: 32px;
    }
  }
`
export const CheckOutDivider = styled.div`
  height: 8px;
  width: calc(100% + 40px);
  margin-left: -20px;
  background: #F8F9FA;

  @media(min-width: 1024px) {
    width: calc(100% + 100px);
    margin-left: -40px;
  }
`

export const DriverTipDivider = styled.div`
  height: 8px;
  width: calc(100% + 40px);
  margin-left: -20px;
  background: #F8F9FA;

  @media(min-width: 1024px) {
    width: calc(100% + 80px);
    margin-left: -40px;
    background: #E9ECEF;
  }
`

export const ReverseWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media(min-width: 1024px) {
    flex-direction: column;
  }
`
