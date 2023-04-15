import styled, { css } from 'styled-components'

export const OrdersDashboardSLAControlsContainer = styled.div`
  display: flex;

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

export const OrderTimeStatusSelectWrapper = styled.div`
  .timeStatusSelect {
    width: 168px;
    height: 43px;
    line-height: 43px;
    border: none;
    background: #F8F9FA;
    margin: 0 10px;
    >div:first-child {
      height: 100%;
    }
  }

  .list-wrapper {
    min-width: 168px;
  }

  .search-bar-container {
    padding: 7px 11px;
    width: 100%;
    input {
      border-radius: 7.6px;
      width: 100%;
    }
  }

  .search-bar-container {
    svg {
      top: 13px;
    }
    input {
      height: 40px;
    }
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  column-gap: 5px;

  p {
    margin: 0px;
    white-space: nowrap;
    font-size: 14px;
    line-height: 26px;
    color: ${props => props.theme.colors.secundaryContrast};
  }

  ${({ noPadding }) => noPadding && css`
    padding: 0px;
  `}
`
export const Timestatus = styled.div`
  width: 4px;
  height: 22px;
  border-radius: 20px 20px 20px 20px;
  margin-right: 5px;
  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0;
 `}
  ${({ timeState }) => timeState === 'in_time' && css`
    background-color: #00D27A;
  `}
  ${({ timeState }) => timeState === 'at_risk' && css`
    background-color: #FFC700;
  `}
  ${({ timeState }) => timeState === 'delayed' && css`
    background-color: #E63757;
  `}
`
