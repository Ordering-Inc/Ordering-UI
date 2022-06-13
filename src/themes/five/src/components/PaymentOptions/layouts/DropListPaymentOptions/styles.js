import styled, { css } from 'styled-components'
export const PaymentMethodsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const PaymentMethodsList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (min-width: 841px) {
    justify-content: space-around;
  }

  #select-input {
    padding: 0 10px;
    width: 100%;
    border-radius: 5px;

    & > #list {
      width: 100%;
      border-radius: 5px;
    }

    @media (min-width: 381px) {
      padding: 0;
    }
  }
`
export const PayCard = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  ${props => props.theme?.rtl && css`
    margin-left: 10px;
    margin-right: 0;
  `}
  ${props => props.isDisabled && css`
    pointer-events: none;
  `}
  svg path {
    fill: #000;
  }
  svg {
    font-size: 24px;
  }
  p {
    margin: 0px 7px;
    font-size: 16px;
  }
  &.active {
    p {
      color: ${props => props.theme.colors.primary};    
    }
    svg path,
    svg circle {
      fill: ${props => props.theme.colors.primary};
    }
  }
  &:not(.active) {
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
