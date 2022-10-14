import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  background: ${props => darken(0.07, props.theme.colors.primary)};
  line-height: 30px;
  padding: 0 20px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 125px;
  color: ${({ color }) => color || '#FFF'};
  font-size: 14px;
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
        padding-left: 0;
    `}
    }
  `}
  ${({ outline }) => outline && css`
      background: transparent;
      color: ${props => props.theme.colors.primaryContrast};
      border-color: ${props => props.theme.colors.primaryContrast};
      text-align: center;
      &:active {
        background: ${props => props.theme.colors.primaryContrast};
        color: ${props => props.theme.colors.secundaryContrast};
      }
  `}

  ${({ color }) => color === 'primary' && css`
    background: ${props => props.theme.colors.primary};
    color: #FFF;
    border-color: ${props => props.theme.colors.primary};
    &:active {
      background: ${props => darken(0.07, props.theme.colors.primary)};
    }
    ${({ outline }) => outline && css`
      background: ${props => props.theme.colors.primary};
      color: #FFF;
      border-color: ${props => props.theme.colors.primary};
      &:active {
        color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.primary};
      }
      &:hover {
        background: ${props => darken(0.07, props.theme.colors.primary)};
        color: #FFF;
      }
    `}
  `}
`
