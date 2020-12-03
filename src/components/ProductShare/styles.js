import styled, { css } from 'styled-components'

export const IconShare = styled.div`
  position: sticky;
  margin: 0px;
  top: 10px;
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
    top: 0;
  }

  @media (min-width: 1201px) {
    position: sticky;
    left: 94%;
    width: 0;

    ${props => props.theme?.rtl && css`
      right: 94%;
      left: initial;
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
