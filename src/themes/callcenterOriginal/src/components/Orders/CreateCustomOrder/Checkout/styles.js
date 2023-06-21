import styled, { css } from 'styled-components'

export const Conatiner = styled.div`

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
export const Flag = styled.span`
  font-size: 13px;
  margin: 0px;
  text-transform: capitalize;
  color: #E63757;
  font-weight: 500;

  @media (min-width: 381px) {
    font-size: 14px;
  }
`
export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px 0px;
`
export const WarningText = styled.p`
  margin: 10px auto;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`
export const WrapperPlaceOrderButton = styled.div`
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  span {
    font-weight: 600;
    font-size: 16px;

    @media (min-width: 1200px) {
      font-size: 18px;
      padding-left: 20px;
    }
  }

  button {
    min-height: 44px;
    border-radius: 7.6px;
  }
`
