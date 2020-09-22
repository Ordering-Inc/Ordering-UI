import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ zx }) => zx && css`
    .popup {
      z-index: ${zx} !important;
    }
  `}
`

export const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1002 !important;
  outline: none;
  box-sizing: border-box;
  overflow-y: auto;
`

export const ModalDialog = styled.div`
  background-color: #FFF;
  padding: 20px;
  width: 50%;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 860px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
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
    }
  }
`

export const ModalTitle = styled.h2`
  text-align: left;
  font-size: 30px;
  letter-spacing: 0px;
  color: #010300;
  opacity: 1;
  margin: 0px 0px;
  margin-bottom: 20px;
  padding-left: 10px;
  text-transform: capitalize;
`

export const ModalIcon = styled.span`
  float: right;
  font-size: 30px;
  cursor: pointer;
`
