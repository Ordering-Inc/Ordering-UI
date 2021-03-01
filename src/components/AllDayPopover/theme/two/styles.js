import styled, { css } from 'styled-components'
export const Container = styled.div`
  display: inline-block;
`
export const HeaderItem = styled.div`
color: ${props => props.theme.colors.darkTextColor};
display: flex;
align-items: center;
padding-left: 15px;

h3 {
    cursor: pointer;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  box-shadow: 0px 3px 6px #00000065;
  border-radius: 10px;
  padding: 15px;
  width: 200px;
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
export const TimeItem = styled.div`
  cursor: pointer;
  padding: 5px;
  p {
    margin: 0px;
    &:first-child {
      font-size: 14px;
      font-weight: 500;
      color: ${props => props.theme.colors.darkTextColor};
    }
    &:not(:first-child) {
      font-size: 10px;
      color: ${props => props.theme.colors.grayTextColor};
      display: flex;
      align-items: center;
    }
  }
  ${({ active }) => active && css`
    p {
      color: ${props => props.theme.colors.primary} !important;
    }
  `}

`
