import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  height: ${({ isPhoto }) => isPhoto ? 'auto' : '25px'};

  svg {
    color: ${({ isHome }) => isHome ? '#FFF' : '#000'};
    height: 25px;
    width: 25px;
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

export const PopoverList = styled.div`
  display: flex;
  flex-direction: column;
`

const PopoverListItemStyles = css`
  display: flex;
  padding: 7px 15px;
  border-bottom: 1px solid #eee;
  align-items: center;
  color: #333;
  font-size: 18px;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  :hover {
    cursor: pointer;
    background-color: #eee;
  }

  :last-child {
    border-bottom: 0;
  }
`

export const PopoverListItem = styled.div`
  ${PopoverListItemStyles}
`

export const PopoverListLink = styled.a`
  ${PopoverListItemStyles}
  text-decoration: none;
  ${({ active }) => active && css`
    background-color: #eee;
  `}
`
