import styled, { css } from 'styled-components'

export const Container = styled.div`
`
export const PaymethodsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 15px);
  margin-left: -15px;
`
export const PayCard = styled.div`
  width: calc(50% - 30px);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  text-align: center;

  ${props => props.isDisabled && css`
    pointer-events: none;
  `}

  > div {
    max-width: 88px;
    width: 100%;
    border: 1px solid #DEE2E6;
    border-radius: 7.6px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    box-sizing: border-box;

    > svg {
      font-size: 25px;
      path {
        fill: #DEE2E6;
      }
    }
  }

  p {
    margin: 0px;
    font-size: 13px;
    text-align: center;
    color: #DEE2E6;
    white-space: nowrap;
  }

  @media (min-width: 351px) {
    width: calc(33% - 30px);
  }

  @media (min-width: 513px) {
    width: calc(25% - 30px);
  }

  @media (min-width: 768px) {
    width: calc(25% - 30px);
  }

  @media (min-width: 1200px) {
    width: calc(20% - 30px);
  }

  ${({ isActive }) => isActive && css`
    > div {
      border: 1px solid ${props => props.theme.colors.primary};
      svg path {
        fill: ${props => props.theme.colors.primary};
      }
    }
    p {
      color: ${props => props.theme.colors.headingColor};
    }
  `}
`
export const WalletPaymentOptionContainer = styled.div`
  padding-top: 20px;
`
export const WalletOptionContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.gray200};
  ${(props) => props.isBottomBorder && css`
    border-bottom: 1px solid ${(props) => props.theme.colors.gray200};
  `}
  padding: 20px 0;

  > label {
    flex: 1;
    margin: 0 10px;
  }
`
export const PayCardSelected = styled.div`
  padding: 30px 0px 0px;
`
export const CardItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;

  span {
    display: flex;
  }

  .checks svg {
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
  }

  .brand img {
    width: 24px;
  }

  > * {
    margin-right: 10px
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }
`
