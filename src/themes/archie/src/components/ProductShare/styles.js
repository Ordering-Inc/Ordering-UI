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
    left: 10px;
    top: 40px;
    margin-top: -35px;
    box-sizing: border-box;
    padding-left: 3px;
    padding-top: 2px;
    border-radius: 0px;

    svg{
      position: static;
    }

    ${props => props.theme?.rtl && css`
      left: unset;
      right: 10px;
    `}
  }
`

export const ShareButtons = styled.div`
  visibility: ${({ showShareButton }) => showShareButton ? 'visible' : 'hidden'};
  top: 28px;
  width: 40px;
  position: absolute !important;

  ${props => props.theme?.rtl ? css`
    right: 0px;
  ` : css`
    left: 0px;
  `}

  @media (min-width: 1201px) {
    top: 35px;
    left: 0px;
    right: 0px;
  }
`
