import styled, { css } from 'styled-components'

export const IconShare = styled.div`
  position: fixed;
  margin: 0px;
  top: 10px;
  font-size: 22px;
  right: 16px;
  left: 10px;
  z-index: 9999995;
  background: rgba(255,255,255,0.5);
  height: 30px;
  border-radius: 50%;
  width: 30px;
  svg {
    position: relative;
    cursor: pointer;
    color: #333;
    left: 3px;
    ${props => props.theme?.rtl && css`
      left: 0;
      right: 5px;
    `}
  }
  ${props => props.theme?.rtl && css`
    left: 16px;
    right: 10px;
  `}


  @media(min-width: 769px){
    position: relative;
    left: 5px;
    ${props => props.theme?.rtl && css`
      left: 0;
      right: 5px;
    `}
    top: 0;
    svg{
      position: static;
    }
  }

  @media (min-width: 1201px) {
    position: sticky;
    left: calc(100% - 45px);
    width: 0;
    ${props => props.theme?.rtl && css`
      right: calc(100% - 45px);
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
