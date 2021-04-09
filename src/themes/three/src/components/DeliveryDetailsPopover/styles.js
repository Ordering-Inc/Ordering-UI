import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.colors?.secundary};
  color: ${props => props.theme.colors?.secundaryContrast};
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 5px 15px;
  border-radius: 20px;

  p {
    margin: 0px;
    white-space: nowrap;
    &: first-child {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100px;
    }
  }

  svg {
    margin-right: 5px;
    ${props => props.theme?.rtl && css`
      margin-left: 5px;
      margin-right: 0px;
    `} 
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
