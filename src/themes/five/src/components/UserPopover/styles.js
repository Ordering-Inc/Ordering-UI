import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  height: ${({ isPhoto }) => isPhoto ? 'auto' : '25px'};
  display: flex;
  align-items: center;

  svg {
    color: ${({ isHome }) => isHome ? '#FFF' : '#000'};
    height: 25px;
    width: 25px;
  }

  .menu-list {
    font-size: 16px;
    width: auto;
    height: auto;
    margin: 0 10px;
    color: ${props => props.theme.colors.darkTextColor};
  }
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  color: #333;
  padding: 20px 15px;
  border-radius: 10px;
  max-width: 500px;
  min-width: 300px !important;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`

export const PopoverList = styled.div`
  display: flex;
  flex-direction: column;
`

const PopoverListItemStyles = css`
  display: flex;
  padding: 7px 15px;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  color: #000000;

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

export const ExtraOptions = styled.div`
  a, div {
    font-weight: normal;
  }
`

export const Divider = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  width: calc(100% + 30px);
  margin-left: -15px;
  height: 1px;
  background: #E9ECEF;
`
