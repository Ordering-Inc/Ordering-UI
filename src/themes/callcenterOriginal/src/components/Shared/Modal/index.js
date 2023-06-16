import React, { useEffect } from 'react'
import { XLg } from 'react-bootstrap-icons'
import { Popup, useLanguage } from 'ordering-components'
import { Button, IconButton } from '../../../styles'
import {
  ModalDialog,
  ModalActions,
  ModalTitle,
  ModalIcon,
  ModalHeader,
  ModalDialogInnerContainer
} from './styles'

const ModalUI = (props) => {
  const {
    title,
    children,
    onAccept,
    onCancel,
    onClose,
    acceptText,
    cancelText,
    isTransparent,
    hideCloseDefault,
    className
  } = props
  const [, t] = useLanguage()

  const onCloseModal = (e) => {
    if (e.code === 'Escape') {
      onClose && onClose()
    }
  }

  useEffect(() => {
    if (!props.open) return
    document.addEventListener('keydown', onCloseModal)
    return () => document.removeEventListener('keydown', onCloseModal)
  }, [props.open])
  return (
    <ModalDialog
      className={`popup-dialog ${className || ''}`}
      height={props.height}
      width={props.width}
    >
      <ModalDialogInnerContainer
        padding={props.padding}
        isTransparent={isTransparent}
        overflow={props.overflow}
        className='dialog-inner'
      >
        {!hideCloseDefault && (
          <ModalIcon className='modal-close-icon'>
            <IconButton
              color='black'
              onClick={() => onClose()}
            >
              <XLg />
            </IconButton>
          </ModalIcon>
        )}
        <ModalHeader>
          {title && (
            <ModalTitle>
              {title}
            </ModalTitle>
          )}
        </ModalHeader>
        {children}
        {(onCancel || onAccept) && (
          <ModalActions>
            {onAccept && <Button color='darkBlue' onClick={() => onAccept()}>{acceptText || t('ACCEPT')}</Button>}
            {onCancel && <Button color='primary' onClick={() => onCancel()}>{cancelText || t('CANCEL')}</Button>}
          </ModalActions>)}
      </ModalDialogInnerContainer>
      
    </ModalDialog>
  )
}

export const Modal = (props) => {
  const ModalProps = {
    ...props,
    UIComponent: ModalUI
  }

  return (
    <Popup {...ModalProps} />
  )
}
