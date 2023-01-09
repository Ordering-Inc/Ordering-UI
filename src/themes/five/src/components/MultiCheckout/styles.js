import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: auto;
  @media (min-width: 769px) {
    flex-direction: row;
  }
  @media (min-width: 993px) {
    min-height: calc(100vh - 337px);
    box-sizing: border-box;
  }
`
export const WrapperLeftContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 30px 20px;
  @media (min-width: 769px) {
    width: 55%;
    padding: 30px 60px 55px 40px;
  }
`
export const WrapperLeftContent = styled.div`
  width: 100%;
  .checkout-title {
    margin: 0;
    font-weight: 600;
    font-size: 32px;
    color: ${props => props.theme?.colors.darkTextColor};
  }
  .back-arrow {
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 5px;
  }
`
export const WrapperRightContainer = styled.div`
  width: 100%;
  background: #F8F9FA;
  box-sizing: border-box;
  padding: 40px 20px;
  @media (min-width: 769px) {
    width: 45%;
    padding: 55px 40px;
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
`

export const DriverTipContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0px 0px;
  h1 {
    margin: 0px;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.colors.darkTextColor};
  }
  > p {
    margin: 0;
    font-size: 16px;
    color: #909BA9;
  }
`

export const CartContainer = styled(PaymentMethodContainer)`
  margin-bottom: 20px;
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
  h1 {
    margin: 5px 0px;
  }
  @media (min-width: 300px) {
    flex-direction: row;
    align-items: center;
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
export const MultiCartPriceContainer = styled.div`
  margin-top: 38px;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${({ totalFeeEnabled }) => totalFeeEnabled ? '5px' : '38px'};
    margin-bottom: 5px;
    > h4 {
      font-size: 18px;
      margin: 0;
    }
  }
  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.darkGray};
    margin: 0;
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
export const WrapperPlaceOrderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
export const WarningText = styled.p`
  margin: 10px auto;
  text-align: center;
  color: ${props => props.theme.colors.danger500};
  font-size: 14px;
`
