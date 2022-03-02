import styled, { css } from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const PaymentMethodsList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (min-width: 841px) {
    justify-content: space-around;
  }
`

export const PayCardOption = styled.div`
  white-space: nowrap;
  color: ${props => props.theme.colors.grayDark};

  ${({ isSkeleton }) => isSkeleton && css`
    span {
      width: 100%;
      border-radius: 30px;
    }
  `}
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

export const WrapPaymethodSelect = styled.div`
  width: 100%;
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
`

export const PayCard = styled.div`
  width: calc(50% - 12px);
  height: 60px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 10px;
  margin-top: 10px;
  text-align: center;

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

  @media (min-width: 351px) {
    width: calc(33% - 12px);
  }

  @media (min-width: 513px) {
    width: calc(25% - 12px);
  }

  @media (min-width: 641px) {
    width: calc(20% - 12px);
  }

  @media (min-width: 841px) {
    width: calc(18% - 12px);
  }

  svg {
    font-size: 30px;
  }

  p {
    margin: 0px;
    font-size: 12px;
  }

  &.active {
    border: 1px solid ${props => props.theme.colors.primary};
      svg {
        color: ${props => props.theme.colors.primary}
      }
      svg path {
      fill: ${props => props.theme.colors.primary};
    }
  }

  &:not(.active) {
    border: ${({ isSkeleton }) => isSkeleton ? '0' : '1px solid #EAEAEA'};
  }
`
