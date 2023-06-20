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
  width: ${({ width }) => width || '50%'};
  height: ${({ height }) => height};
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
  overflow: auto;
  max-height: calc(var(--vh, 1vh) * 90);
  @media (max-width: 860px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    max-height: calc(var(--vh, 1vh) * 100);
    border-radius: 0px;
  }
`

export const ModalDialogInnerContainer = styled.div`
  position: relative;
  padding: ${({ padding }) => padding || '20px'};
  overflow: ${({ overflow }) => overflow || 'auto'};
  background-color: ${({ isTransparent, theme }) => isTransparent ? 'transparent' : theme.colors.backgroundPage || '#FFF'};
  width: 100%;
  height: 100%;
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0px 0px;

  button {
    width: 100%;
    border-radius: 32px;
    opacity: 1;
    max-width: 300px;
    margin-top: 10px;
    height: 60px;
  }
`
export const ModalHeader = styled.div`
  display: flex;
`
export const ModalTitle = styled.h2`
  text-align: left;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0px;
  color: #010300;
  opacity: 1;
  margin: 0px 0px;
  margin-bottom: 20px;
  text-transform: capitalize;
  flex: 1;
  ${props => props.theme?.rtl && css`
    text-align: right;
    padding-right: 10px;
    padding-left: 0px;
  `}
`

export const ModalOrderTypes = styled.div`
  margin-right: 15px;
  ${props => props.theme?.rtl && css`
    padding-left: 15px;
    padding-right: 0px;
  `}
`
export const ModalIcon = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 30px;
  cursor: pointer;
  z-index: 1;
  ${props => props.theme?.rtl && css`
    left: 5px;
    right: initial;
  `}
`
