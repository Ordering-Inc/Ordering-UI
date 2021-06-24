import styled from 'styled-components'
import { darken } from 'polished'

export const FacebookButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #4267B2;
  border: 1px solid #4267B2;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  &:active {
    background: ${() => darken(0.07, '#4267B2')};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    font-size: 28px;
    color: #FFF;
  }

  div {
    margin: 0 auto;
    color: #FFF;
    font-size: 16px;
    line-height: 30px;
  }
`
