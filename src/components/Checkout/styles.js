import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const WrappContainer = styled.div`
  width: 80%;
  margin: auto;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;

  div.user {
    width: 50%;
  }

  div.business {
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
    width: 50%;
    padding: 10px 20px;
    color: #FFF;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
    }
  }
`
