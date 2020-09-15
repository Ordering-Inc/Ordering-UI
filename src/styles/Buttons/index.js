import styled, { css } from 'styled-components'
import { darken } from 'polished'

const theme = {
  colors: {
    primary: '#D81313',
    primaryContrast: '#FFF',
    secundary: '#9A9A9A',
    secundaryContrast: '#000'
  }
}

export const Button = styled.button`
  background: #CCC;
  color: #FFF;

  border: 1px solid #CCC;
  border-radius: 30px;
  line-height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:active {
    background: ${() => darken(0.07, '#CCC')};
  }

  ${({ outline }) => outline && css`
    background: #FFF;
    color: #CCC;
    border-color: #CCC;

    &:active {
      color: #FFF;
      background: ${darken(0.07, '#CCC')};
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
    background: ${() => theme.colors.primary};
    color: ${() => theme.colors.primaryContrast};
    border-color: ${() => theme.colors.primary};

    &:active {
      background: ${() => darken(0.07, theme.colors.primary)};
    }

    ${({ outline }) => outline && css`
      background: #FFF;
      color: ${() => theme.colors.primary};
      border-color: ${() => theme.colors.primary};

      &:active {
        color: ${() => theme.colors.primaryContrast};
        background: ${() => theme.colors.primary};
      }
    `}

    ${({ circle }) => circle && css`
      background: ${theme.colors.primary};
      color: ${theme.colors.primaryContrast};
      border-color: ${theme.colors.primary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;

      &:active {
        border-color: ${() => darken(0.07, theme.colors.primary)};
        background: ${() => darken(0.07, theme.colors.primary)};
      }
    `}

    ${({ circle, outline }) => circle && outline && css`
      background: #FFF;
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;

      &:active {
        border-color: ${theme.colors.primary};
        background: ${theme.colors.primary};
      }
    `}
  `}

  ${({ color }) => color === 'secundary' && css`
    background: ${() => theme.colors.secundary};
    color: ${() => theme.colors.secundaryContrast};
    border-color: ${() => theme.colors.secundary};

    &:active {
      background: ${() => darken(0.07, theme.colors.secundary)};
    }

    ${({ outline }) => outline && css`
      background: #FFF;
      color: ${() => theme.colors.secundary};
      border-color: ${() => theme.colors.secundary};

      &:active {
        color: ${() => theme.colors.secundaryContrast};
        background: ${() => darken(0.05, theme.colors.secundary)};
      }
    `}

    ${({ circle }) => circle && css`
      background: ${theme.colors.secundary};
      color: ${theme.colors.secundaryContrast};
      border-color: ${theme.colors.secundary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;

      &:active {
        color: ${theme.colors.secundaryContrast};
        border-color: ${() => darken(0.07, theme.colors.secundary)};
        background: ${() => darken(0.07, theme.colors.secundary)};
      }
    `}

    ${({ circle, outline }) => circle && outline && css`
      background: #FFF;
      color: ${theme.colors.secundary};
      border-color: ${theme.colors.secundary};
      padding: 0;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border-radius: 50%;

      &:active {
        border-color: ${theme.colors.secundary};
        background: ${theme.colors.secundary};
        color: ${theme.colors.secundaryContrast};
      }
    `}
  `}
`
