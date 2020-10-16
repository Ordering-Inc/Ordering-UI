import styled from 'styled-components'

export const IconShare = styled.div`
  position: fixed;
  position: absolute;
  font-size: 25px;
  right: 14px;
  top: -11px;
  z-index: 9999995;
  margin: 0 10px;

  svg {
    cursor: pointer;
    color: #333;
  }

  @media (max-width: 1200px) {
    top: 0px;
    left: 0px;
  }
`

export const ShareButtons = styled.div`
  visibility: ${({ showShareButton }) => showShareButton ? 'visible' : 'hidden'};
  right: 0px;
  top: 28px;
  position: absolute !important;
`
