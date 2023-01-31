import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  background: #CCC;
  color: #FFF;
  border: 1px solid #CCC;
  border-radius: 7.6px;
  line-height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  &:active {
    background: ${() => darken(0.07, '#CCC')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${({ bgtransparent }) => bgtransparent && css`
      background: transparent !important;
      &:hover {
        background: ${darken(0.15, '#CCC')};
        color: ${props => darken(0.15, props.theme.colors.primary)} !important;
      }
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
  ${({ theme }) => theme?.general?.components?.buttons?.borderRadius && css`
      border-radius: ${theme?.general?.components?.buttons?.borderRadius};
  `}
  ${({ theme }) => Object.values(theme?.general?.components?.buttons?.shadow?.components || {}).some(val => !!val) && css`
    box-shadow: 
      ${theme?.general?.components?.buttons?.shadow?.components?.x || '0px'}
      ${theme?.general?.components?.buttons?.shadow?.components?.y || '0px'}
      ${theme?.general?.components?.buttons?.shadow?.components?.blur || '0px'}
      ${theme?.general?.components?.buttons?.shadow?.components?.spread || '0px'}
      ${theme?.general?.components?.buttons?.shadow?.components?.color || '#000'};
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
  ${({ color }) => color === 'primary' && css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-color: ${props => props.theme.colors.primary};
    &:active {
      background: ${props => darken(0.07, props.theme.colors.primary)};
    }
    &:hover {
      background: ${props => darken(0.07, props.theme.colors.primary)};
      color: #FFF;
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
  ${({ color }) => color === 'primaryContrast' && css`
    background: ${props => props.theme.colors.primaryContrast};
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primaryContrast};
    &:hover {
      background: ${props => darken(0.04, props.theme.colors.primaryContrast)};
    }
    &:active {
      background: ${props => darken(0.1, props.theme.colors.primaryContrast)};
    }
    ${({ naked }) => naked && css`
      background: transparent;
      border-color: transparent;
      &:active {
        background: transparent;
      }
      &:hover {
        background: transparent;
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
  ${({ color }) => color === 'gray' && css`
    background: ${props => props.theme.colors.grayDividerColor};
    color: ${props => props.theme.colors.darkGray};
    border-color: ${props => props.theme.colors.grayDividerColor};
    &:active {
      background: ${props => darken(0.05, props.theme.colors.grayDividerColor)};
    }
    &:hover {
      background: ${props => darken(0.07, props.theme.colors.grayDividerColor)};
    }
  `}
  ${({ color }) => color === 'lightGray' && css`
    background: ${props => props.theme.colors.gray200};
    color: ${props => props.theme.colors.secondaryDark};
    border-color: ${props => props.theme.colors.gray200};
    &:active {
      background: ${props => darken(0.05, props.theme.colors.gray200)};
    }
    &:hover {
      background: ${props => darken(0.07, props.theme.colors.gray200)};
    }
  `}
  ${({ color }) => color === 'red' && css`
    background: ${props => props.theme.colors.danger500};;
    color: ${props => props.theme.colors.backgroundPage};
    border-color: ${props => props.theme.colors.danger500};
    &:active {
      background: ${props => darken(0.05, props.theme.colors.danger500)};
    }
    &:hover {
      background: ${props => darken(0.07, props.theme.colors.danger500)};
    }
    ${({ outline }) => outline && css`
      background: ${props => props.theme.colors.backgroundPage};
      color: ${props => props.theme.colors.danger500};
      border-color: ${props => props.theme.colors.danger500};
      &:active {
        color: ${props => props.theme.colors.backgroundPage};
        background: ${props => props.theme.colors.danger500};
      }
      &:hover {
        background: ${props => darken(0.07, props.theme.colors.danger500)};
        color: ${props => props.theme.colors.backgroundPage};
      }
    `}
  `}
  ${({ color }) => color === 'black' && css`
    background: ${props => props.theme.colors.black};;
    color: ${props => props.theme.colors.backgroundPage};
    border-color: ${props => props.theme.colors.black};
    &:active {
      background: ${props => darken(0.05, props.theme.colors.black)};
    }
    &:hover {
      background: ${props => darken(0.07, props.theme.colors.black)};
    }
    ${({ outline }) => outline && css`
      background: ${props => props.theme.colors.backgroundPage};
      color: ${props => props.theme.colors.black};
      border-color: ${props => props.theme.colors.black};
      &:active {
        color: ${props => props.theme.colors.backgroundPage};
        background: ${props => props.theme.colors.black};
      }
      &:hover {
        background: ${props => darken(0.07, props.theme.colors.black)};
        color: ${props => props.theme.colors.backgroundPage};
      }
    `}
  `}
`

export default Button
