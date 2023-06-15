import styled, { css } from 'styled-components'

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 6px;
  height: 32px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  > svg {
    width: 20px;
    height: 20px;
    color: #B1BCCC;
  }

  &:hover {
    background-color: #1507260a;

    > svg {
      color:  #151b26;
    }
  }

  &:active {
    background-color: #1507261a;
  }

  ${({ color }) => color === 'black' && css`
    > svg {
      color: ${props => props.theme.colors.headingColor};
    }
    &:hover {
      background-color: ${props => props.theme.colors.secundary};
    }
    &:active {
      background-color: ${props => props.theme.colors.secundaryDarkContrast};
    }

    ${({ active }) => active && css`
      background-color: ${props => props.theme.colors.secundaryDarkContrast};
    `}
  `}

  ${({ color }) => color === 'primary' && css`
    > svg {
      color: ${props => props.theme.colors.primary};
    }
    &:hover {
      background-color: #1507260a;
      > svg {
        color: ${props => props.theme.colors.primary};
      }
    }
  `}
  ${({ isDisabled }) => isDisabled && css`
    pointer-events: none;
  `}
`

export const Button = styled.button`
  background: #CCC;
  color: #FFF;
  border: 1px solid #CCC;
  border-radius: ${({ borderRadius }) => !borderRadius ? '30px' : borderRadius};
  line-height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .2s ease-in;

  &:active {
    background: '#CCC';
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${({ rectangle }) => rectangle && css`
    border-radius: unset;
  `}

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
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
    color: #CCC;
    border-color: #CCC;
    &:active {
      color: #FFF;
      background: '#CCC';
    }
    &:hover {
      background: '#CCC';
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
      background: '#CCC';
    }
  `}
  ${({ circle, outline }) => circle && outline && css`
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
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
      background: '#CCC';
    }
  `}
  ${({ color }) => color === 'primary' && css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryContrast};
    border-color: ${props => props.theme.colors.primary};
    &:hover {
      background: ${props => props.theme.colors.primary};
    }
    &:active {
      background: ${props => props.theme.colors.primary};
    }
    ${({ outline }) => outline && css`
      background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
      color: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
      &:active {
        color: ${props => props.theme.colors.primaryContrast};
        background: ${props => props.theme.colors.primary};
      }
      &:hover {
        background: ${props => props.theme.colors.primary};
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
        border-color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.primary};
      }
    `}
    ${({ circle, outline }) => circle && outline && css`
      background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
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

  ${({ color }) => color === 'lightPrimary' && css`
    background: ${props => props.theme.colors.lightPrimary};
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.lightPrimary};
    &:hover {
      background: ${props => props.theme.colors.lightPrimary};
    }
    &:active {
      background: ${props => props.theme.colors.lightPrimary};
    }
  `}
  ${({ color }) => color === 'secundaryDark' && css`
    background: ${props => props.theme.colors.secundaryDarkContrast};
    color: ${props => props.theme.colors.secundaryDark};
    border-color: ${props => props.theme.colors.secundaryDarkContrast};
    &:hover {
      background: ${props => props.theme.colors.secundaryDarkContrast};
    }
    &:active {
      background: ${props => props.theme.colors.secundaryDarkContrast};
    }
  `}
  ${({ color }) => color === 'secundary' && css`
    background: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.secundaryContrast};
    border-color: ${props => props.theme.colors.secundary};
    &:hover {
      background: ${props => props.theme.colors.secundary};
    }
    &:active {
      background: ${props => props.theme.colors.secundary};
    }
    ${({ outline }) => outline && css`
      background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
      color: ${props => props.theme.colors.secundary};
      border-color: ${props => props.theme.colors.secundary};
      &:active {
        color: ${props => props.theme.colors.secundaryContrast};
        background: ${props => props.theme.colors.secundary};
      }
      &:hover {
        background: ${props => props.theme.colors.secundary};
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
        border-color: ${props => props.theme.colors.secundary};
        background: ${props => props.theme.colors.secundary};
      }
    `}
    ${({ circle, outline }) => circle && outline && css`
      background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
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
  ${({ color }) => color === 'black' && css`
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.black};
    &:hover {
      background: ${props => props.theme.colors.black};
    }
    &:active {
      background: ${props => props.theme.colors.black};
    }
  `}
`

export const LinkButton = styled.a`
  font-size: 14px;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  &:hover {
    text-decoration: underline;
  }

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    opacity: 0.5;
  `}
`
