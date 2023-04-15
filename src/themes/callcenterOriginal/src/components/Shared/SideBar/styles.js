import styled, { css } from 'styled-components'

export const BarContainer = styled.div`
  display: flex;
  width: 0;
  position: fixed;
  z-index: 1005;
  top: 0;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  overflow-x: hidden;
  ${({ noAnimation }) => !noAnimation && css`
    transition: 0.3s;
  `}
  height: calc(var(--vh, 1vh) * 100);
  ${({ isBorderShow }) => isBorderShow ? css`
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  ` : css`
    box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);
  `}

  ${props => props.theme?.rtl ? css`
    left: 0;
    padding-left: ${({ moveDistance }) => moveDistance ? `${moveDistance}px` : '0px'};
  ` : css`
    right: 0;
    padding-right: ${({ moveDistance }) => moveDistance ? `${moveDistance}px` : '0px'};
  `}

  > button {
    position: absolute;
    z-index: 10;
    top: 20px;
    ${props => props.theme?.rtl ? css`
      left: ${({ moveDistance }) => moveDistance ? `${moveDistance + 20}px` : '20px'};
    ` : css`
      right: ${({ moveDistance }) => moveDistance ? `${moveDistance + 20}px` : '20px'};
    `}
  }

  ${({ IconTop }) => IconTop && css`
    > button {
      top: ${IconTop}
    }
  `}
`
