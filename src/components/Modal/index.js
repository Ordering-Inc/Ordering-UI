import React from 'react'
import MdClose from '@meronex/icons/md/MdClose'
import { Popup, useLanguage } from 'ordering-components'
import {
  ModalDialog,
  ModalActions,
  ModalTitle,
  ModalIcon,
  ModalHeader
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
    isTransparent,
    hideCloseDefault
  } = props
  const [, t] = useLanguage()
  return (
    <ModalDialog
      className='popup-dialog'
      width={props.width}
      padding={props.padding}
      isTransparent={isTransparent}
    >
      {!hideCloseDefault && (
        <ModalIcon>
          <MdClose onClick={() => onClose()} />
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
