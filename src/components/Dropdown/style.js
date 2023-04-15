import styled, { css } from 'styled-components'
import { Image } from '../Image'

export const DropdownStyled = styled.div`
  display: flex;
  background-color: #FFF;
  padding: 5px;
  border-radius: 1000px;
  color: #333;
  z-index: 1001;
`

export const DropdownToggleStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  /* img {
    width: 28px;
    height: 28px;
    margin-right: 5px;
    border-radius: 1000px;

    :last-child {
      margin-right: 0;
    }
  } */
`

export const DropdownMenuStyled = styled.div`
  display: flex;
  background-color: #FFF;
  /* padding: 15px; */
  flex-direction: column;
  color: #333;
  z-index: 2;
  border-radius: 10px;
  /* overflow: hidden; */
`

export const Arrow = styled.div`
  width: 0; 
  height: 0; 
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`

const DropdownItemShared = css`
  display: flex;
  padding: 10px 15px;
  cursor: pointer;
  color: #333;
  align-items: center;
  border-bottom: 1px solid #eee;

  svg {
    margin-right: 7px;
    ${props => props.theme?.rtl && css`
      margin-left: 7px;
      margin-right: 0px;
    `}
  }

  :hover {
    background-color: #eee;
  }
  :active {
    background-color: #ddd;
  }

  :first-child {
    border-radius: 10px 10px 0 0;
  }

  :nth-last-child(2) {
    border-bottom: 0px;
    border-radius: 0 0 10px 10px;
  }
`

export const DropdownItemStyled = styled.div`
  ${DropdownItemShared}
`

export const DropdownItemLink = styled.a`
  ${DropdownItemShared}
  text-decoration: none;
`

export const DropDownCircleImage = styled(Image)`
  width: 28px;
  height: 28px;
  margin-right: 5px;
  border-radius: 1000px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  ${props => props.theme?.rtl && css`
    margin-left: 5px;
    margin-right: 0;
  `}

  /* svg {
    display: flex;
  } */

  :last-child {
    ${props => props.theme?.rtl ? css`
        margin-left: 0;
    ` : css`
        margin-right: 0;
    `}
  }
`
