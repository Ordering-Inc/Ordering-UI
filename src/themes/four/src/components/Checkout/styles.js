import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  background-color: ${props => props.theme.colors.backgroundPage};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const WrappContainer = styled.div`
  width: 90%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  background-color: #FFF;

  @media (min-width: 513px) {
    width: 80%;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    background-color: transparent;
  }
`

export const LeftContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${({ isSkeleton }) => isSkeleton && css`
    padding: 20px;
  `}
  @media (min-width: 992px) {
    width: calc(100% - 420px);
    background-color: #FFF;
  }
`

export const RightContainer = styled.div`
  width: 100%;
  ${({ isSkeleton }) => isSkeleton && css`
    padding: 20px;
  `}
  @media (min-width: 992px) {
    width: 400px;
  }
`

export const RightInnerContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 992px) {
    background-color: #FFF;
    position: sticky;
    top: 0px;
  }
`

export const WrapperUserDetails = styled.div`
  width: 100%;
`

export const UserDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const BusinessDetailsContainer = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid #CCC;
`
export const Accordion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.6s ease;
  position: relative;
  padding: 20px 0;

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    transition: transform 0.6s ease;
  }

  svg {
    color: ${props => props.theme.colors?.grayColor};
    font-size: 20px;
  }

  h1 {
    margin: 0px;
    font-size: 20px;
    display: flex;
    align-items: center;

    svg {
      ${props => props.theme?.rtl ? css`
        margin-left: 10px;
      ` : css`
        margin-right: 10px;
      `}
    }
  }

  &.active h1 svg {
    color: ${props => props.theme.colors.primary};
  }
`
export const AccordionContent = styled.div`
  overflow: hidden;
  transition: min-height 0.6s ease;

  > div {
    margin: 0px;
    padding-bottom: 20px;
  }
`

export const PaymentMethodContainer = styled(BusinessDetailsContainer)``

export const DriverTipContainer = styled.div`
  h1 {
    font-size: 24px;
    text-align: center;
  }
`

export const CartContainer = styled(PaymentMethodContainer)`
  margin-bottom: 20px;
  border-bottom: none;
  h1 {
    font-size: 20px;
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
    box-sizing: border-box;
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
  color: ${props => props.theme.colors?.grayColor};
`

export const OrderBill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: #FFF;
  color: ${props => props.theme.colors?.blackColor};

  table {
    padding: 10px 0;
    width: 100%;
    font-size: 16px;
    font-weight: 300;

    td span {
      unicode-bidi: bidi-override;
    }

    tr td:nth-child(2) {
      font-weight: 500;
      text-align: right;
      ${props => props.theme?.rtl && css`
        text-align: left;
    `}
    }
  }
  table.driverTip {
    border-top: 1px solid #EAEAEA;
    button {
      font-size: 14px;
      padding: 0 10px;
      text-transform: uppercase;
    }

    .recommendTxt {
      color: ${props => props.theme.colors?.grayColor};
      font-size: 13px;
    }
  }
  table.total {
    border-top: 1px solid #EAEAEA;
    tr {
      td:nth-child(1) {
        font-weight: bold;
      }
      td:nth-child(2) {
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  @media (min-width: 411px) {
    table {
      font-size: 18px;
    }
  }
`
export const CouponContainer = styled.div`
  width: 100%;
  margin: 10px;
`

export const Exclamation = styled.div`
  position: relative;
  display: inline-flex;
  cursor: pointer;
  margin-left: 5px;
  top: 3px;
`
