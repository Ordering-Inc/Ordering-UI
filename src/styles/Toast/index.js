import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useToast, ToastType } from 'ordering-components'

const ToastBar = styled.div`
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  bottom: 30px;

  /* Animations to fade the snackbar in and out */
  @-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }

  @keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }

  @-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
  }

  @keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
  }

`

export const Toast = () => {
  const [toastConfig, { hideToast }] = useToast()
  const toastRef = useRef()

  useEffect(() => {
    if (!toastConfig && !toastRef.current) {
      return
    }

    const toast = document.getElementById('toast-bar')
    toast.style.visibility = 'visible'
    toast.style.animation = 'fadein 0.5s, fadeout 0.5s 2.5s'
    setTimeout(() => {
      toast.style.visibility = 'hidden'
      hideToast()
    }, duration)
  }, [toastConfig])

  if (!toastConfig) {
    return null
  }

  const { type, message, duration } = toastConfig

  let backgroundColor = '#6ba4ff'

  switch (type) {
    case ToastType.Info:
      backgroundColor = '#6ba4ff'
      break
    case ToastType.Error:
      backgroundColor = '#D83520'
      break
    case ToastType.Success:
      backgroundColor = '#73bd24'
      break
  }

  return (
    <ToastBar backgroundColor={backgroundColor} id='toast-bar' ref={toastRef}>{message}</ToastBar>
  )
}
