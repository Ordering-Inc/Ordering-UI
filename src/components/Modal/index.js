import React from 'react'
import { MdClose } from 'react-icons/md'
import { Popup, useLanguage } from 'ordering-components'
import {
  ModalDialog,
  ModalActions,
  ModalTitle,
  ModalIcon
} from './styles'

import { Button } from '../../styles/Buttons'

const ModalUI = (props) => {
  const {
    title,
    children,
    onAccept,
    onCancel,
    onClose,
    acceptText,
    cancelText,
    hideCloseDefault
  } = props
  const [, t] = useLanguage()
  return (
    <ModalDialog className='popup-dialog' width={props.width} padding={props.padding}>
      {!hideCloseDefault && (
        <ModalIcon>
          <MdClose onClick={() => onClose()} />
        </ModalIcon>
      )}
      {title && <ModalTitle>{title}</ModalTitle>}
      {children}
      {(onCancel || onAccept) && (
        <ModalActions>
          {onCancel && <Button outline onClick={() => onCancel()}>{cancelText || t('CANCEL')}</Button>}
          {onAccept && <Button color='primary' onClick={() => onAccept()}>{acceptText || t('ACCEPT')}</Button>}
        </ModalActions>)}
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
