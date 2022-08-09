import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  background: #CCC;
  border: 1px solid #CCC;
  line-height: 30px;
  padding: 0 20px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ color }) => color || '#FFF'};
  &:active {
    background: ${() => darken(0.07, '#CCC')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${({ bgtransparent }) => bgtransparent && css`
      background: transparent !important;
  `}
  ${({ initialIcon }) => initialIcon && css`
    text-align: left;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
    img{
      vertical-align: middle;
    }
    span {
      padding-left: 15%
      ${props => props.theme?.rtl && css`
        padding-right: 15%;
        padding-left: 0
    `}
    }
  `}
`
