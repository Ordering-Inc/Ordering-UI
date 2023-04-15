import styled, { css } from 'styled-components'

export const SubFilterContainer = styled.div`
  padding: 20px 0;

  button {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
    font-size: 14px;
    white-space: nowrap;

    svg {
      font-size: 20px;

      ${props => props.theme?.rtl ? css`
        margin-right: 5px;
      ` : css`
        margin-left: 5px;
      `}
    }
  }
`
