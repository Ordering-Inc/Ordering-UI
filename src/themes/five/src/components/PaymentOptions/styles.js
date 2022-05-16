import styled, { css } from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const PaymentMethodsList = styled.div`
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

  &.active {
    > div {
      border: 1px solid ${props => props.theme.colors.primary};
      svg path {
        fill: ${props => props.theme.colors.primary};
      }
    }
    p {
      color: ${props => props.theme.colors.headingColor};
    }
  }

  /* &:not(.active) {
    border: ${({ isSkeleton }) => isSkeleton ? '0' : '1px solid #EAEAEA'};
  } */
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

  .brand svg {
    font-size: 26px;
  }

  > * {
    margin-right: 10px
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
      margin-right: 0;
    `}
  }
`
