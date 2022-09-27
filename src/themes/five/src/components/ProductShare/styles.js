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
    top: 0;

    svg{
      position: static;
    }

    ${props => props.theme?.rtl && css`
      left: 0;
      right: 5px;
    `}
  }

  @media (min-width: 1201px) {
    position: sticky;
    width: 0;

    &:nth-child(1) > svg {
      background-color: white;
      padding: 5px;
      border-radius: 9px;
      margin: 5px 0px;
    }

    ${props => props.theme?.rtl && css`
      right: 0;
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
    top: 35px;
    left: 0px;
    right: 0px;
  }
`
export const CopyButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    > span {
      opacity: 0.7;
    }
  }
  > span {
    background-color: #0166ff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;

    svg {
      font-size: 24px;
      color: #FFF;
    }
  }
`
export const ProductCopyURLContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;

  p {
    text-align: center;
    &.name {
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      margin-bottom: 0;
      margin-top: 15px;
    }

    &.description {
      font-size: 14px;
      line-height: 24px;
      margin: 0;
    }
  }

  button {
    margin-top: 50px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;

    svg {
      font-size: 24px;
    }
  }

  @media (min-width: 768px) {
    button {
      width: 100%;
      margin-top: 115px;
    }
  }
`
export const ProductImageWrapper = styled.div`
  width: 95px;
  height: 95px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
