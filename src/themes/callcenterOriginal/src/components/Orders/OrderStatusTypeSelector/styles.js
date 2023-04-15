import styled, { css } from 'styled-components'

export const OrderStatusTypeSelectWrapper = styled.div`
  .list-wrapper {
    min-width: 297px;
  }

  .orderStatus {
    width: 100%;
  }

  .search-bar-container {
    padding: 10px 11px;
    width: 100%;
    input {
      border-radius: 7.6px;
      width: 100%;
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
  }

  ${({ isSubTitle }) => !isSubTitle ? css`
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
      margin-right: 5px;
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
      margin-left: 5px;
    `}

    p {
      padding: 0 10px;
      color: ${props => props.theme.colors.secundaryContrast} !important;
    }
  ` : css`
    p {
      color: ${props => props.theme.colors.secundaryLight};
    }
  `}

  ${({ noPadding }) => noPadding && css`
    padding: 0px;
  `}
`

export const PlaceholderTitle = styled(Option)`
  padding: 10px;
`
