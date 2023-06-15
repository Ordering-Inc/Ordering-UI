import styled, { css } from 'styled-components'

export const Option = styled.div`
  font-size: 14px;
  ${({ padding }) => padding && css`
    padding: 5px 0;  
  `}
  ${({ isWeight }) => isWeight && css`
    font-weight: 600;  
  `}
`
