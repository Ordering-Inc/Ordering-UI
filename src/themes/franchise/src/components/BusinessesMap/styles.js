import styled, { css } from 'styled-components'

export const WrapperMap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  > div {
    position: relative !important; 
    width: 100% !important;
    height: 100% !important;
  }

  ${({ disabled }) => disabled && css`
    pointer-events: none
  `}
`
