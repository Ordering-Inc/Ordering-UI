import styled, { css } from 'styled-components'

export const OrderDashboardControlsContainer = styled.div`
  display: flex;
  margin-top: 10px;

  button {
    height: 42px;
    ${props => props.theme?.rtl ? css`
      margin-left: 14px;
    ` : css`
      margin-right: 14px;
    `}

    svg {
      ${props => props.theme?.rtl ? css`
        margin-right: 5px;
      ` : css`
        margin-left: 5px;
      `}
    }
  }

  @media (min-width: 992px) {
    margin: 0px;
  }
`

export const InnerContnet = styled.div`
  display: flex;
  align-items: center;
`

export const WrapOrderStatusTypeSelector = styled.div`
  margin: 0 7px;
  > div {
    > div:first-child {
      border-color: ${props => props.theme.colors?.secundary};
      border-radius: 8px;
      background-color: ${props => props.theme.colors?.secundary};
      > div:first-child {
        padding-top: 4px;
        padding-bottom: 4px;
        > div:first-child {
          > div {
            border: none !important;
            p {
              color: ${props => props.theme.colors.secundaryContrast} !important;
              padding: 0 !important;
            }
          }
        }
      }
    }

    .list-wrapper {
      > div {
        padding: 0 10px;
      }
    }
  }
`
