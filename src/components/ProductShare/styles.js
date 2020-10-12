import styled from 'styled-components'

export const IconShare = styled.div`
  position: fixed;
  position: absolute;
  font-size: 25px;
  right: 14px;
  top: 2px;
  z-index: 9999995;

  svg {
    cursor: pointer;
    color: #D81212;
  }
`

export const ShareButtons = styled.div`
  visibility: ${({ showShareButton }) => showShareButton ? 'initial' : 'hidden'};
  right: 0px;
  top: 28px;
  position: absolute !important;
`
