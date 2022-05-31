import styled, { css } from 'styled-components'

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
    border-radius: 10px;
    height: auto;
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
  ${props => props.theme?.rtl && css`
    right: 25px;
    left: initial;
  `}
  ${({ isProductForm }) => isProductForm && css`
    top: 18px;
  `}
  svg{
    /* background: rgba(255,255,255,0.5); */
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
