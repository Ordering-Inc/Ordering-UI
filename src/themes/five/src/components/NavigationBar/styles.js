import styled, { css } from 'styled-components'

export const NavigationBarContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10vw;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  box-sizing: border-box;
  z-index: 1005;
`

export const NavigationLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 18px;
    color: #B1BCCC;
  }

  p {
    margin-top: 2px;
    margin-bottom: 0px;
    color: #B1BCCC;
    font-size: 12px;
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }

    p {
      color: ${props => props.theme.colors.headingColor};
    }
  `}
`
