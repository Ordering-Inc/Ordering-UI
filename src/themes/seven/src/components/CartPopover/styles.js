import styled, { css } from 'styled-components'

export const HeaderItem = styled.div`
  cursor: pointer;
  width: 86px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  span {
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    margin: 0;
  }
  svg {
    font-size: 24px;
    margin-right: 10px;
    ${props => props.theme?.rtl && css`
        margin-right: 0px;
        margin-left: 10px;
    `}

    path {
      fill: #fff;
    }
  }

  @media (min-width: 1200px) {
    height: 48px;
  }
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  color: #333;
  border-radius: 10px;
  max-width: 520px;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  padding: 15px;
  box-sizing: border-box;
`

export const PopoverArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`
export const Header = styled.div`
  position: relative;  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    color: ${props => props.theme.colors.primary}
  }

  svg {
    position: absolute;
    top: 7px;
    right: 7px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    transition: 0.1s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
`
