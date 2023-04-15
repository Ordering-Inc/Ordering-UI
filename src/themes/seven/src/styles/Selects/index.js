import styled, { css } from 'styled-components'

export const Option = styled.div`
  padding: 7px 15px;
  min-width: 100px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  font-weight: 100;
  &:hover {
    background-color: #dddddd;
  }
  ${props => props.selected && css`
    background-color: #dddddd;
    &:hover {
      background-color: #dddddd;
    }
  `}
  svg {
    vertical-align: text-top;
  }
  ${({ withIcons }) => withIcons && css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      svg {
        margin-right: 3px;
        ${props => props.theme?.rtl && css`
          margin-left: 3px;
          margin-right: 0px;
       `}
      }
  `}
`

export const Options = styled.div`
  position: absolute;
  background-color: #fff;
  margin-top: 7px;
  z-index: 10000;
  width: auto;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  overflow: hidden;

  ${({ position }) => position?.toLowerCase() === 'left' && css`
    left: 0;
    margin-left: -1px;
  `}
  ${({ position }) => position?.toLowerCase() === 'right' && css`
    right: 0;
    margin-right: -1px;
    ${props => props.theme?.rtl && css`
        margin-left: -1px;
        margin-right: 0px;
        left: 0;
        right: initial;
    `}
  `}

  ${({ fullwidth }) => fullwidth && css`
    width: 100%;    
  `}
`

export const Selected = styled.div`
  font-size: 16px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${props => props.theme.colors.primary};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 11;

  ${({ fullwidth }) => fullwidth && css`
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
  `}
`

export const Select = styled.div`
  padding: 11px 16px;
  color: #000000;  
  background-color: transparent;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  ${props => props.disabled && css`
    pointer-events: none;
  `} 
  border: 1px solid ${props => props.theme.colors.primary};
  ${({ noborder }) => noborder && css`
    border: none;
  `}

  ${({ fullwidth }) => fullwidth && css`
    width: 100%;
    display: inline-block;
    height: 34px;
    line-height: 34px;
    @media (min-width: 768px) {
      height: 40px;
      line-height: 40px;
    }
  `} 
`

export const Chevron = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  margin-left: 5px;
  ${props => props.theme?.rtl && css`
        margin-right: 5px;
        margin-left: 0;
    `}
`

export const Header = styled.div`
  flex: 1;
`

export const SelectImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 1000px;
  margin-left: 5px;
  overflow: hidden;
  ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
  `}
  img {
    width: 100%;
    height: 100%;
  }
`
