import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;

  h2 {
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
    margin: 0px;
  }
`
export const IconContent = styled.div`
  cursor: pointer;
  margin: 0 5px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 25px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  color: #FFF;

  svg {
    font-size: 22px;
  }

  span {
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`

export const BackDropContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  background-color: #000;
  opacity: 0.6;
  left: 0;
  z-index: 1000;
`

export const SidebarContent = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1005;
  top: 0;
  background: ${props => props.theme.colors?.backgroundPage};
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: ${({ isHome }) => isHome ? 'rgba(0, 0, 0, 0.7) 0px 8px 24px;' : 'rgba(0, 0, 0, 0.2) 0px 8px 24px;'};

  ${props => props.theme?.rtl ? css`
      left: 0;
  ` : css`
      right: 0;
  `}

  @media (max-height: 450px) {
    padding-top: 15px;
  }
`

export const MenuClose = styled.div`
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: ${props => props.theme.colors.primary};
  svg {
    font-size: 24px;
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
`
