import styled, { css } from 'styled-components'
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 769px) {
    display: none;
  }
`
export const IconContent = styled.button`
  border: none;
  position: relative;
  max-width: 100%;
  margin: 0px;
  display: inline-flex;
  min-height: 35px;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  text-align: center;
  box-shadow: transparent 0px 0px 0px 1px inset;
  width: 35px;
  height: 35px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  svg {
    flex-shrink: 0;
    font-size: 30px;
    color: #6C757D;
  }
`
export const SidebarContent = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1005;
  top: 75px;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 25px;  
  ${props => props.theme?.rtl ? css`
      left: 0;
  ` : css`
      right: 0;
  `}
  @media (max-height: 450px) {
    padding-top: 15px;
  }

  .selected-option {
    padding: 0;
  }
`
export const MenuLink = styled.div`
  position: relative;
  cursor: pointer;
  appearance: none;
  border: none;
  padding: 0px 16px;
  margin: 0px;
  text-align: inherit;
  display: block;
  width: 100%;
  background: ${({ isHome, theme }) => isHome ? '#333' : `${theme.colors.backgroundPage}`};
  outline: none !important;
  box-sizing: border-box;
  ${({ isCustomer }) => isCustomer && css`
    border-bottom: 1px solid black;
    @media (min-width: 451px) {
      display: none;
    }
  `};
  ${({ inSide }) => inSide && css`
    display: inline-flex;
    padding: 0px 15px 5px;
    border: 1px solid #000000;
    width: fit-content;
    float: right;
    border-radius: 100px;
    margin: 0 20px;
  `}
  button:nth-child(2) {
    margin: 0 10px;
  }
  @media (max-height: 450px) {
    font-size: 18px;
  }
`
export const WrappContent = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding-top: 7px;
  #select-input {
    width: 100%;
    p {
      max-width: 100%;
    }
    #list {
      width: 100%;
    }
  }
`
export const MenuLinkIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  svg {
    flex-shrink: 0;
    color: #000;
    width: 18px;
    height: 18px;
    color:  ${props => props.theme.colors.fontPrimary};   
  }
`
export const MenuLinkText = styled.div`
  margin: 0 7px;
`
export const TextInfo = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.04ch;
  text-transform: uppercase;
  text-align: left;
  margin: 0px;
  padding: 0px;
  display: block;
  font-variant-ligatures: no-common-ligatures;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color:  ${props => props.theme.colors.fontPrimary};
  ${props => props.theme?.rtl && css`
    text-align: right;
    display: inline-block;
  `}
`
export const MenuLinkSeparator = styled.div`
  grid-area: -1 / 1 / auto / -1;
  div {
    width: 100%;
    padding-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    ${props => props.theme?.rtl ? css`
      padding-right: 0px;
      margin: 15px 0px -16px -16px;
    ` : css`
      padding-left: 0px;
      margin: 15px -16px -16px 0px;
    `}
  }
`
export const Hr = styled.div`
  display: block;
  width: 100%;
  margin: 0px;
  border: none;
  height: 1px;
  margin-top: 5px;
  background: ${props => props.theme.colors.borderColor};
`
export const SideBarOver = styled.div`
  position: absolute;
  top: 75px;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: #1f1f1fb3;
`
