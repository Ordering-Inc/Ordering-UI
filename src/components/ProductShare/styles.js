import styled, { css } from 'styled-components'

export const IconShare = styled.div`
  position: sticky;
  margin: 0px;
  top: 0px;
  font-size: 22px;
  right: 16px;
  z-index: 9999995;

  ${props => props.theme?.rtl ? css`
      right: 0px;
    ` : css`
      left: 0px;
  `}

  svg {
    cursor: pointer;
    color: #333;
  }


  @media(min-width: 769px){
    position: relative;
  }

  @media (min-width: 1201px) {
    position: absolute;
    margin: 0 10px;
    left: initial;

    ${props => props.theme?.rtl && css`
      left: 14px;
      right: initial;
    `}
  }
`

export const ShareButtons = styled.div`
  visibility: ${({ showShareButton }) => showShareButton ? 'visible' : 'hidden'};
  top: 28px;
  width: 40px;
  position: absolute !important;

  ${props => props.theme?.rtl ? css`
    right: -12px;
  ` : css`
    left: -12px;
  `}

  @media (min-width: 1201px) {
    ${props => props.theme?.rtl ? css`
      left: 0px;
    ` : css`
      right: 0px;
    `}
  }
`
