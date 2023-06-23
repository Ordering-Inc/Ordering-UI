import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  > input {
    width: 100%;
    border: 1px solid ${props => props.theme.colors.borderColor} !important;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    outline: none;
    padding: 10px 15px;
    border-radius: 8px;
    ${props => props.theme?.rtl ? css`
      padding-left: 40px;
    ` : css`
      padding-right: 40px;
    `}
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};

    &::placeholder {
      color: #909BA9;
    }
  }

  svg {
    position: absolute;
    ${props => props.theme?.rtl ? css`
      left: 15px;
    ` : css`
      right: 15px;
    `}
    font-size: 16px;
    color: ${props => props.theme.colors.lightGray};

    &.close {
      cursor: pointer;
    }
  }

  @media (max-width: 1200px) {
    flex: 1;

    input {
      width: 100%;
      box-sizing: border-box;
    }
  }
`
