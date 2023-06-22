import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 7.6px;
  padding: 7px 13px;
  margin: 0px;

  ${({ isOpen, isChew }) => (isOpen && !isChew) && css`
    background: #F8F9FA;
  `}

  svg {
    color: ${({ isHome }) => isHome ? '#FFF' : '#000'};
    height: 40px;
    width: 40px;
  }

  .menu-list {
    font-size: 16px;
    width: auto;
    height: auto;
    margin-right: 20px;
    ${props => props.theme?.rtl && css`
      margin-left: 20px;
      margin-right: 0;
    `}
    color: ${props => props.isChew ? props.theme.colors.backgroundPage : props.theme.colors.darkTextColor};
  }

  img {
    width: 42px;
    height: 42px;
    border-radius: 7.6px;
  }
`

export const PopoverBody = styled.div`
  background-color: ${(props) => props.theme?.colors?.backgroundPage};
  color: #333;
  padding: 20px 15px;
  border-radius: 10px;
  max-width: 500px;
  min-width: 300px !important;
  z-index: 10002;
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
  border-radius: 7.6px;

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `}
  }

  :hover {
    cursor: pointer;
    background-color: #f8f8f8;
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

  ${props => props.theme?.rtl && css`
    margin-right: -15px;
    margin-left: 0;
  `}
`

export const UserImgWrapper = styled.div`
  position: relative;
  display: flex;
`

export const RoundMark = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #E63757;
  top: -3px;
  right: -6px;
`
