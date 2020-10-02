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

  svg {
    vertical-align: text-top;
  }
`

export const Options = styled.div`
  position: absolute;
  background-color: #CCC;
  margin-top: 7px;
  z-index: 10;
  border-width: 1px;
  border-style: solid;
  border-color: #CCC;
  border-radius: 15px;
  overflow: hidden;
  ${({ position }) => position?.toLowerCase() === 'left' && css`
    left: 0;
    margin-left: -1px;
  `}
  ${({ position }) => position?.toLowerCase() === 'right' && css`
    right: 0;
    margin-right: -1px;
    @media (max-width: 380px) {
      margin-right: 8px;
    }
  `}
`

export const Selected = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  /* padding-right: 36px; */

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 11;

  svg {
    vertical-align: text-top;
    display: flex;
    margin-left: 7px;
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
  font-size: 16px;

  svg {
    vertical-align: text-top;
  }
`

export const SelectImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 1000px;
  margin-right: 5px;
  overflow: hidden;


  img {
    width: 100%;
    height: 100%;
  }
`
