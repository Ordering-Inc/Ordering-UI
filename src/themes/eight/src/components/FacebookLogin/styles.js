import styled from 'styled-components'
import { darken } from 'polished'

export const FacebookButton = styled.button`
  border-radius: 30px;
  line-height: 30px;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .3s ease-in-out;

  background-color: #3D5A99;
  border: 1px solid #3D5A99;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  &:active {
    background: ${() => darken(0.07, '#3D5A99')};
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
    color: #067CEA;
  }

  div {
    color: #FFF;
    font-weight: 500;
    font-size: 14px;
    margin: 0 15px;
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
