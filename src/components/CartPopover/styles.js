import styled from 'styled-components'
import { darken } from 'polished'

export const HeaderItem = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  span {
    display: flex;
    align-items: center;
    column-gap: 15px;
    p {
     color: #fff;
     margin: 0px;
    }
    svg {
      color: #fff;
      font-size: 24px;
    }
  }

  &:active {
    background-color:  ${props => darken(0.07, props.theme.colors.primary)};
  }
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  color: #333;
  padding: 15px;
  border-radius: 10px;
  max-width: 500px;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`

export const PopoverArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`
