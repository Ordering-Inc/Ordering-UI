import styled, { css } from 'styled-components'

export const Container = styled.div`
  dispaly: flex;
  button {
    margin: 10px;
    white-space: nowrap;
    font-size: 14px;

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
