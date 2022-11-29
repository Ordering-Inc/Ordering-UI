import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: auto;

  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
  position: relative;
    * {
      color: ${({ theme }) => theme?.colors?.tertiary || '#fff'};
    }
  `}

  @media (min-width: 769px) {
    flex-direction: row;
    ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
      justify-content: center;
    `}
  }

  @media (min-width: 993px) {
    min-height: calc(100vh - 337px);
    box-sizing: border-box;
  }
`

export const WrapperLeftContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 55px 20px 30px;

  @media (min-width: 769px) {
    width: 55%;
    padding: 55px 60px 55px 40px;
  }

  @media (min-width: 820px) {
    padding: 30px 60px 55px 40px;
    ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
      max-width: 700px;
      padding: 30px 20px 20px 30px;
    `}
  }
`

export const WrapperRightContainer = styled.div`
  width: 100%;
  background: #F8F9FA;
  box-sizing: border-box;
  padding: 40px 20px;
  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    background: transparent;
  `}
  @media (min-width: 769px) {
    width: 45%;
    padding: 55px 40px;
    ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
      padding: 30px 20px 20px 30px;
      width: 50%;
      max-width: 500px;
      margin-top: 50px;
    `}
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

  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    padding: 0px 30px 30px 30px;
    margin-top: 0;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    margin-bottom: 20px;
    background: ${({ theme }) => theme?.colors?.tertiaryContrast || '#000'};
  `}
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

    
  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    border: 1px solid #fff;
    background: ${({ theme }) => theme?.colors?.tertiaryContrast || '#000'};
    padding: 30px;
  `}
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

  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    border: 1px solid #fff;
    background: ${({ theme }) => theme?.colors?.tertiaryContrast || '#000'};
    padding: 30px;
    margin: 0;
  `}
`

export const DriverTipContainer = styled(PaymentMethodContainer)`
  > p {
    margin: 0;
    font-size: 16px;
    color: #909BA9;
  }
  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    margin-bottom: 20px;
  `}
`

export const CartContainer = styled(PaymentMethodContainer)`
  margin-bottom: 20px;
  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    padding: 0;
  `}
`

export const WalletPaymentOptionContainer = styled(PaymentMethodContainer)`
  padding-top: 20px;
  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    border-top: none;
  `}
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
    font-size: 32px;
    color: ${props => props.theme?.colors.darkTextColor};
  }

  .back-arrow {
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 5px;
  }

  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
      box-sizing: border-box;
      margin-top: 50px;
    `}
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

  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    padding: 20px 20px;
    border: 1px solid #fff;
    margin-bottom: 20px;
    background: ${({ theme }) => theme?.colors?.tertiaryContrast || '#000'};
    #select-input {
      margin-bottom: 0px;
    }
    > div {
      background-color: ${({ theme }) => theme?.colors?.tertiaryContrast || '#000'} !important;
      border: 1px solid #fff;
      border-radius: 0px;
      color: #fff !important;
      padding: 0px 10px;
      box-sizing: border-box;

      > div#list {
        background-color: ${({ theme }) => theme?.colors?.tertiaryContrast || '#000'} !important;
        border: 1px solid #fff;
        border-radius: 0px;
      }
    }
  `}
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

  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    span {
      color: #fff;
    }
  `}

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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme?.layouts?.checkout?.components?.layout?.type === 'pfchangs' && css`
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 22px;
    svg{
      margin-right: 10px;
    }
  `}
`

export const SubtitleContainer = styled.div`
  padding: 20px 20px 20px 30px;
  border-left: 1px solid #fff;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  background: ${({ theme }) => theme?.colors?.tertiaryContrast || '#000'};
  h2 {
    font-size: 16px;
    margin: 0;
  }
`

export const ItemHeader = styled.div`
  border: 1px solid #fff;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme?.colors?.tertiaryContrast || '#000'};
`

export const BusinessDetails = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  background: ${({ theme }) => theme?.colors?.tertiaryContrast || '#000'};
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
      cursor: pointer;
    }
  }
`
export const MasterCardCoupon = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #fff;
  padding: 0px !important;
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme?.colors?.tertiaryContrast || '#000'};
  img {
    width: 100%
  }
`

export const GoToMenu = styled.div`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 200px;
  transform: translateY(75%);
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 14px;
    margin: 0;
  }
  svg {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    top: 4px;
    position: relative;
  }
  @media (min-width: 768px) {
    left: 230px;
    transform: translateY(100%);
    p {
      font-size: 16px;
    }
    svg {
      width: 22px;
      height: 22px;
    }
  }
`

export const BackIcon = styled.div`
  * {
    color: ${({ theme }) => theme?.colors?.primary};
  }
`

export const ColumnDivider = styled.div`
  height: 30px;
  width: 1px;
  background: #fff;
  position: relative;
  right: 20px;
`
export const RewardContainer = styled.div`
  padding: 0px 10px 25px 10px;
  text-align: left;
`
export const RewardDisclaimerContainer = styled.div`
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
`
export const RewardBox = styled.div`
  margin: 10px auto;
  padding: 5px 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0px -1px 10px 0px rgb(138 138 138 / 60%);
  -moz-box-shadow: 0px -1px 10px 0px rgba(138,138,138,0.6);
  box-shadow: 0px -1px 10px 0px rgb(138 138 138 / 60%);
  text-align: left;
  > div {
    color: #003C4A;
    font-size: 16px;
    margin: 7px 0;
  }
`
export const RewardBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div.image-reward {
    display: flex;
  }
  div.value {
    font-weight: bold;
    margin: auto 0px;
  }
`
