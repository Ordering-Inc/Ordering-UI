import styled, { css } from 'styled-components'

export const IconShare = styled.div`
  position: absolute;
  font-size: 25px;
  right: 14px;
  top: -11px;
  z-index: 9999995;
  margin: 0 10px;
  ${props => props.theme?.rtl && css`
    left: 14px;
    right: initial;
  `}
  svg {
    cursor: pointer;
    color: #333;
  }

  @media (max-width: 1200px) {
    position: sticky;
    top: 0px;
    ${props => props.theme?.rtl ? css`
      right: 0px;
    ` : css`
      left: 0px;
    `}
  }
`

export const ShareButtons = styled.div`
  visibility: ${({ showShareButton }) => showShareButton ? 'visible' : 'hidden'};
  top: 28px;
  position: absolute !important;
  ${props => props.theme?.rtl ? css`
      left: 0px;
    ` : css`
      right: 0px;
    `}
  @media (max-width: 1200px) {
    width: 40px;
    ${props => props.theme?.rtl ? css`
      right: -12px;
    ` : css`
      left: -12px;
    `}
  }
`
