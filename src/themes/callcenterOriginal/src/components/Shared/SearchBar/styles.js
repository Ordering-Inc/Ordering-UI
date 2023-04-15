import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 10px;
    ${props => props.theme?.rtl ? css`
      right: 15px;
    ` : css`
      left: 15px;
    `}
    font-size: 20px;
    color: ${props => props.theme.colors.lightGray};
  }

  > input {
    width: 250px;
    border: 1px solid ${props => props.theme.colors.borderColor} !important;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    border-radius: 22px;
    outline: none;
    padding: 10px 8px;
    ${props => props.theme?.rtl ? css`
      padding-right: 40px;
    ` : css`
      padding-left: 40px;
    `}
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};

    &::placeholder {
      color: #909BA9;
    }
  }

  ${({ isCustomLayout }) => isCustomLayout && css`
    input {
      border-radius: 8px;
      width: 100%;
      padding: 10px 15px;
    }

    svg {
      ${props => props.theme?.rtl ? css`
        right: initial;
        left: 10px;
      ` : css`
        left: initial;
        right: 10px;
      `}
    }
  `}

  @media (max-width: 1200px) {
    flex: 1;

    input {
      width: 100%;
      box-sizing: border-box;
    }
  }
`
