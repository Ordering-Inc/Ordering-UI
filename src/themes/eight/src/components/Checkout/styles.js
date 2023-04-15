import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  min-height: calc(100vh - 290px);

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

export const WrapperUserDetails = styled.div`
  width: 100%;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 20px;
  flex-wrap: wrap;
`

export const BusinessDetailsContainer = styled(UserDetailsContainer)`
  div {
    h1 {
      text-transform: capitalize;
      margin: 0px;
      font-size: 20px;
      color: ${props => props.theme.colors.grayDark};
      margin-bottom: 10px;
      font-weight: 500;
    }
    p {
      margin: 0;
      font-weight: 300;
      color: ${props => props.theme.colors.grayDark};
    }
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px 0px;
  h1 {
    margin: 0px;
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.colors.grayDark};
  }
`

export const DriverTipContainer = styled(PaymentMethodContainer)`
  margin: 0px;
  border-bottom: 8px solid #FFF;
  padding-bottom: 40px;

  h1 {
    margin-bottom: 0px;
  }
  h2 {
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.grayMedium};
    margin: 0px;
  }
`

export const CartContainer = styled(PaymentMethodContainer)`
  margin-bottom: 20px;
  h1 {
    margin: 20px 0px;
  }

  div.cart {
    border-bottom: none;
    > div {
      > div {
        box-shadow: none;
      }
    }
    
    div.business-item {
      display: none;
    }

    div.product-item {
      border-bottom: none;
      background: transparent;
    }

    div.order-bill {
      background: transparent;

      td {
        color: ${props => props.theme.colors.grayDark};
      }
    }
  }
`

export const WrapperPlaceOrderButton = styled.div`
  width: 100%;
  margin: 20px 0px 10px;

  button {
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

export const CouponContainer = styled.div`
  padding: 15px 0;
  margin-top: 20px;
  border-top: 1px solid ${props => props.theme.colors.gray};
  border-bottom: 1px solid ${props => props.theme.colors.gray};

  h1 {
    margin-top: 0px;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 500;
  }
`
