import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Option = styled.div`
  display: flex;
  align-items: center;

  svg {
    min-width: 14px;
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }
`

export const OrderTypeWrapper = styled.span`
  div {
    max-width: 120px;
  }
  @media (min-width: 380px) {
    div{
      max-width: initial;
    }
  }
`
export const SelectOne = styled.div`
  display: inline-block;
  height: 34px;
  border-radius: 34px;
  line-height: 34px;
  border-width: 0px;
  border-style: solid;
  background-color: ${({ isHome }) => isHome ? 'rgba(247,247,247,0.3)' : '#CCC'} !important;
  color: ${({ isHome }) => isHome ? '#FFF' : '#333'} !important;
  position: relative;
`
export const Selected = styled.div`
  padding-left: 9px;
  padding-right: 9px;
  font-size: 13px;
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 11;
  @media (min-width: 381px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`
export const Header = styled.div`
  flex: 1;
  svg {
    font-size: 18px;
  }
`
export const SelectedOption = styled.p`
  margin: 0;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (min-width: 380px) {
      max-width: initial;
  }
`

export const ContentOption = styled(SelectedOption)`
  max-width: initial;
`
