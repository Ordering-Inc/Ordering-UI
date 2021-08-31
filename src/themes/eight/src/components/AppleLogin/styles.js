import styled from 'styled-components'
import { darken } from 'polished'

export const AppleButton = styled.button`
  border-radius: 30px;
  line-height: 30px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .3s ease-in-out;

  background-color: #000;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  &:active {
    background: ${() => darken(0.07, '#000')};
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 20%);
  }
`

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    color: #000;
  }

  div {
    color: #FFF;
    font-weight: 500;
    font-size: 14px;
    margin: 0 28px;
  }
`

export const IconWrapper = styled.span`
  background-color: #FFF;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`
