import React from 'react'
import { MdClose } from 'react-icons/md'
import { Popup, useLanguage } from 'ordering-components'
import {
  ModalDialog,
  ModalWrap,
  ModalBackDrop,
  ModalActions,
  ModalTitle,
  // ModalContent,
  ModalIcon,
  Container
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
    cancelText
  } = props
  const [, t] = useLanguage()
  return (
    <ModalWrap className='popup'>
      <ModalDialog>
        <ModalIcon>
          <MdClose onClick={() => onClose()} />
        </ModalIcon>
        {title && <ModalTitle>{title}</ModalTitle>}
        {children}
        {(onCancel || onAccept) && (
          <ModalActions>
            {onCancel && <Button outline onClick={() => onCancel()}>{cancelText || t('CANCEL')}</Button>}
            {onAccept && <Button color='primary' onClick={() => onAccept()}>{acceptText || t('ACCEPT')}</Button>}
          </ModalActions>)}
      </ModalDialog>
    </ModalWrap>
  )
}

export const Modal = (props) => {
  const ModalProps = {
    ...props,
    UIComponent: ModalUI
  }

  return (
    <Container zx={props.zx}>
      <ModalBackDrop className='popup-backdrop' />
      <Popup {...ModalProps} />
    </Container>
  )
}
