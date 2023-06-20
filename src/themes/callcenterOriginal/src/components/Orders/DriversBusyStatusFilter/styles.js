import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  button {
    margin: 10px;
    white-space: nowrap;
    font-size: 14px;
    margin: 10px 0;
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}

    svg {
      font-size: 20px;

      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`
