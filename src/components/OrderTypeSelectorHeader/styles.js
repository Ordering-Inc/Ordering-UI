import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }
`
