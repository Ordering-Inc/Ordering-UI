import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const Button = styled.button`
  background: #ACB2B6;
  color: #FFF;
  border: 1px solid #ACB2B6;
  border-radius: 30px;
  line-height: 30px;
  padding: 6px 20px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .3s ease-in-out;
  font-weight: 500;
  &:active {
    background: ${() => darken(0.07, '#ACB2B6')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 20%);
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
  ${({ outline }) => outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
    &:hover {
      background: ${darken(0.07, '#CCC')};
      color: #FFF;
    }
  `}
  ${({ circle }) => circle && css`
    background: #CCC;
    color: #FFF;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}
  ${({ circle, outline }) => circle && outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;
    padding: 0;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 50%;
    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
    }
  `}
  ${({ color }) => color === 'primaryGradient' && css`
    background: linear-gradient(${props => lighten(0.1, props.theme.colors.primary)}, ${props => darken(0.1, props.theme.colors.primary)});
    color: ${props => props.theme.colors.primaryContrast};
    border-color: ${props => props.theme.colors.primary};
    &:active {
      background: linear-gradient(${props => props.theme.colors.primary}, ${props => darken(0.2, props.theme.colors.primary)})
    }
  `}
  ${({ color }) => color === 'primaryContrast' && css`
    background: ${props => props.theme.colors.primaryContrast};
    color: ${props => props.theme.colors.primary};
    border-color: transparent;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    &:active {
      background: ${props => darken(0.07, props.theme.colors.primaryContrast)};
      border-color: ${props => props.theme.colors.primary};
    }
  `}
  ${({ color }) => color === 'primary' && css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-color: ${props => props.theme.colors.primary};
    &:active {
      background: ${props => darken(0.07, props.theme.colors.primary)};
    }
    ${({ outline }) => outline && css`
      background: #FFF;
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      &:active {
        color: ${props => props.theme.colors.primaryContrast};
        background: ${props => props.theme.colors.primary};
      }
      &:hover {
        background: ${props => darken(0.07, props.theme.colors.primary)};
        color: #FFF;
      }
    `}
    ${({ circle }) => circle && css`
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primaryContrast};
      border-color: ${props => props.theme.colors.primary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      &:active {
        border-color: ${props => darken(0.07, props.theme.colors.primary)};
        background: ${props => darken(0.07, props.theme.colors.primary)};
      }
    `}
    ${({ circle, outline }) => circle && outline && css`
      background: #FFF;
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      &:active {
        border-color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.primary};
      }
    `}
  `}
  ${({ color }) => color === 'secundary' && css`
    background: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.secundaryContrast};
    border-color: ${props => props.theme.colors.secundary};
    &:active {
      background: ${props => darken(0.07, props.theme.colors.secundary)};
    }
    ${({ outline }) => outline && css`
      background: #FFF;
      color: ${props => props.theme.colors.secundary};
      border-color: ${props => props.theme.colors.secundary};
      &:active {
        color: ${props => props.theme.colors.secundaryContrast};
        background: ${props => darken(0.05, props.theme.colors.secundary)};
      }
      &:hover {
        background: ${props => darken(0.07, props.theme.colors.secundary)};
        color: #FFF;
      }
    `}
    ${({ circle }) => circle && css`
      background: ${props => props.theme.colors.secundary};
      color: ${props => props.theme.colors.secundaryContrast};
      border-color: ${props => props.theme.colors.secundary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      &:active {
        color: ${props => props.theme.colors.secundaryContrast};
        border-color: ${props => darken(0.07, props.theme.colors.secundary)};
        background: ${props => darken(0.07, props.theme.colors.secundary)};
      }
    `}
    ${({ circle, outline }) => circle && outline && css`
      background: #FFF;
      color: ${props => props.theme.colors.secundary};
      border-color: ${props => props.theme.colors.secundary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;
      &:active {
        border-color: ${props => props.theme.colors.secundary};
        background: ${props => props.theme.colors.secundary};
        color: ${props => props.theme.colors.secundaryContrast};
      }
    `}
  `}
`
