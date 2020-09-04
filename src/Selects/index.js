import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Option = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: ${darken(0.03, '#CCC')};
  }

  ${props => props.selected && css`
    background-color: ${darken(0.07, '#CCC')};
  
    &:hover {
      background-color: ${darken(0.07, '#CCC')};
    }
  `}

  :first-child {
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: #AAA;
  }

  svg {
    vertical-align: text-top;
  }
`

export const Options = styled.div`
  position: absolute;
  width: 100%;
  background-color: #CCC;
  margin-top: -18px;
  margin-left: -1px;
  padding-top: 18px;
  z-index: 0;
  border-width: 1px;
  border-style: solid;
  border-color: #CCC;
  border-radius: 0 0 17px 17px;
  overflow: hidden;
`

export const Selected = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  position: relative;
  padding-right: 36px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 1;

  svg {
    vertical-align: text-top;
  }
`

export const Select = styled.div`
  display: inline-block;
  height: 34px;
  border-radius: 34px;
  line-height: 34px;
  border-width: 1px;
  border-style: solid;
  border-color: #CCC;
  background-color: #CCC;
  color: #333;
  position: relative;

  ${props => props.open && css`
    background-color: ${darken(0.07, '#CCC')};
  `}
`

export const Chevron = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 16px;

  svg {
    vertical-align: text-top;
  }
`
