import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 7.6px;
  padding: 7px 13px;
  margin: 0 10px;

  ${({ isOpen }) => isOpen && css`
    background: #F8F9FA;
  `}

  .menu-list {
    font-size: 16px;
    width: auto;
    height: auto;
    margin-right: 20px;
    ${props => props.theme?.rtl && css`
      margin-left: 20px;
      margin-right: 0;
    `}
    color: ${props => props.theme.colors.darkTextColor};
  }

  img {
    width: 42px;
    height: 42px;
    border-radius: 7.6px;
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

export const AdminSection = styled.div`
  border: 1px solid ${({ theme }) => theme?.colors?.primary};
  background: #fff;
  height: 30px;
  width: 120px;
  color: ${({ theme }) => theme?.colors?.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
  p {
    margin: 0;
    font-size: 14px;
  }
  svg{
    width: 14px;
    height: 14px;
  }
`
