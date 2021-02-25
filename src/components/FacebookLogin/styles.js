import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const FacebookButton = styled.button`
  background-color: #3B5998;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 15px !important;
  border-radius: 50px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  svg {
    font-size: 28px;
    color: #fff;
  }

  div {
    margin: 0 auto;
    color: #fff;
    display: flex;
    align-items: center;
    column-gap: 20px;
    font-size: 16px !important;
    ${({ isCustomTitle }) => isCustomTitle && css`
      color: ${props => props.theme.colors.primary};
      font-size: 18px !important;
      font-weight: 500;
    `}
  }

  &:active {
    background: ${() => darken(0.07, '#3B5998')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ isCustomTitle }) => isCustomTitle && css`
    background-color: transparent;
    margin-bottom: 0px;
  `}
`
