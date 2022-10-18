import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  ${({ zx }) => zx && css`
    .popup {
      z-index: ${zx} !important;
    }
  `}
`

export const ModalDialog = styled.div`
  position: relative;
  background-color: ${({ isTransparent }) => isTransparent ? 'transparent' : '#FFF'};
  padding: ${({ padding }) => padding || '30px 20px'};
  width: 100vw;
  border-radius: 0px;
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
  height: ${({ height }) => height || '100%'};;
  max-height: 100vh;
  overflow: auto;
  overflow-x: ${({ disableOverflowX }) => disableOverflowX ? 'hidden' : 'auto'};
  @media (min-width: 769px) {
    width: ${({ width }) => width || '50%'};
    max-height: 90vh;
    border-radius: ${({ theme }) => theme?.general?.components?.modal?.components?.style?.borderRadius || '10px'};
    height: auto;
    ${({ isSlideBar, slideBarPosition, open }) => isSlideBar && css`
      position: fixed;
      max-height: 100vh;
      height: 100%;
      min-width: 0px;
      width: 0%;
      right: ${slideBarPosition !== 'left' ? 0 : 'initial'};
      left: ${slideBarPosition === 'left' ? 0 : 'initial'};

      ${open ? css`
        animation: slide-in 0.25s forwards;
        -webkit-animation: slide-in 0.25s forwards;
      ` : css`
        animation: slide-out 0.25s forwards;
        -webkit-animation: slide-out 0.25s forwards; 
      `}

      > h1, > h2 {
        text-align: center;
      }

      @-webkit-keyframes slide-in {
       100% { width: 25%; min-width: 400px; }
      }

      @keyframes slide-in {
        100% { width: 25%; min-width: 400px; }
      }

      @keyframes slide-out {
        0% { width: 25%; min-width: 400px; }
        100% { width: 0%; min-width: 0px; }
      }

      @-webkit-keyframes slide-out {
        0% { width: 25%; min-width: 400px; }
        100% { width: 0%; min-width: 0px; }
      }
    `}
  }
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px 0px;
  button {
    width: 100%;
    border-radius: 32px;
    opacity: 1;
    height: 45px;
    &:nth-child(1) {
      margin-right: 25px;
      ${props => props.theme?.rtl && css`
        margin-left: 25px;
        margin-right: 0px;
      `}
    }
  }
`
export const ModalHeader = styled.div`
  display: flex;
  margin-top: 30px;

  @media(min-width: 450px){
    margin-top: 0;
  }

`

export const ModalTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0px;
  color: #010300;
  opacity: 1;
  margin: 0px 0px;
  margin-bottom: 20px;
  padding-left: 10px;
  /* text-transform: capitalize; */
  flex: 1;
  ${props => props.theme?.rtl && css`
    text-align: left;
    padding-right: 10px;
    padding-left: 0px;
  `}
  ${({ theme }) => theme?.general?.components?.layout?.type === 'pfchangs' && css`
    font-family: ${theme?.fonts?.special?.name};
  `}
  &::first-letter {
    text-transform: capitalize;
  }
`

export const ModalOrderTypes = styled.div`
  margin-right: 15px;
  ${props => props.theme?.rtl && css`
    padding-left: 15px;
    padding-right: 0px;
  `}
`
export const ModalIcon = styled.span`
  position: fixed;
  left: 25px;
  top: 30px;
  font-size: 30px;
  cursor: pointer;
  z-index: 2;
  ${props => (props.theme?.rtl || props.theme?.layouts?.general?.components?.layout?.type === 'pfchangs') && css`
    right: 25px;
    left: initial;
  `}
  ${({ isProductForm }) => isProductForm && css`
    top: 18px;
  `}
  svg{
    /* background: rgba(255,255,255,0.5); */
    transition: all .2s ease-in;

    &:hover {
      background-color: #1507260a;

      > svg {
        color:  #151b26;
      }
    }

    &:active {
      background-color: ${() => darken(0.07, '#CCC')};
    }
  
    border-radius: 50%;
  }

  @media(min-width: 769px){
    position: absolute;
  }
`

export const ModalBackHeader = styled.div`
  height: 70px;
  background-color: white;
  width: 100%;
  position: fixed;
  z-index: 2;

  @media (min-width: 769px) {
    display: none;
  }
`
