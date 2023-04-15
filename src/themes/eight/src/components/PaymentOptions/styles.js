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
    background-color: #FFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    height: 44px;
    border: none;

    > div:first-child {
      padding-top: 5px;
      padding-bottom: 5px;
      justify-content: space-between;
    }
    > div#list {
      width: 100%;
    }
  }
`
