import styled from 'styled-components'

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
  margin: 20px 0px;

  button {
    width: 70%;
    padding: 5px 20px;
    color: #FFF;
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
  }

  h1 {
    font-size: 20px;
    margin: 0px 60px;
    text-align: center;
  }
`
