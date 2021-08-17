import styled, { css } from 'styled-components'

export const IconShare = styled.div`
  margin: 0px;
  font-size: 22px;
  z-index: 9999995;
  background: rgba(255,255,255,0.5);
  border-radius: 50%;
  svg {
    cursor: pointer
  }
  
`

export const ShareButtons = styled.div`
  visibility: ${({ showShareButton }) => showShareButton ? 'visible' : 'hidden'};
  position: absolute !important;
  display: flex;

  ${props => props.theme?.rtl ? css`
    left: 5px;
  ` : css`
    right: 5px;
  `}
  
`
