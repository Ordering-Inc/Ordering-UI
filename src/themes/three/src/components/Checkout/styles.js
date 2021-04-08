import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 110px;

  @media (min-width: 992px) {
    padding-top: 65px;
  }
`

export const WrappContainer = styled.div`
  width: 91%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`

export const LeftContent = styled.div`
  width: 60%;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const RightContent = styled.div`
  width: 30%;
  @media (max-width: 992px) {
    width: 100%;
  }
`

export const RightInnerContainer = styled.div`
  position: sticky;
  top: 80px;
`

export const WrapperUserDetails = styled.div`
  width: 100%;
`

export const SectionTitle = styled.h3`
  font-size: 24px;
  margin: 0px;
`

export const DeliveryDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.secundary};
  padding-bottom: 20px;
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

export const DriverTipContainer = styled(PaymentMethodContainer)`
  h1 {
    border-bottom: 1px solid ${props => props.theme.colors.secundary};
    padding-bottom: 20px;
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
  margin-bottom: 20px;

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

export const WarningText = styled.p`
  margin: 10px auto;
  text-align: center;
  color: #D83520;
`

export const DeliveryScheduleContainer = styled.div`
  padding: 20px 0;
`
export const PaymentMethodHeader = styled(DeliveryDetailsContainer)`
`
export const RightContentItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 10px;

  svg {
    font-size: 24px;
  }

  ${({ bold }) => bold && css`
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
  `}

  ${({ lastItem }) => lastItem && css`
    padding-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.secundary};
  `}
`

export const PromoCodeButton = styled.div`
  text-align: center;
  span {
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
  }
`

export const WrapCheckoutDeliveryDetails = styled.div`
`
export const AddDeliveryInstrunction = styled.a`
  cursor: pointer;
  text-decoration: underline;
  font-weight: 600;
`
