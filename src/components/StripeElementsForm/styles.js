import styled, { css } from 'styled-components'

export const ErrorMessage = styled.p`
  color: #D81212;
  font-size: 24px;
  padding-left: 10px;
  font-weight: bold;
  opacity: 0.8;
  ${props => props.theme?.rtl && css`
    padding-right: 10px;
    padding-left: 0px;
  `}
`
