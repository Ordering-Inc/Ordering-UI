import React from 'react'
import { MdClose } from 'react-icons/md'
import { Popup, useLanguage } from 'ordering-components'
import {
  PopupDialog,
  PopupWrap,
  PopupBackDrop,
  PopupActions,
  PopupTitle,
  PopupContent,
  PopupIcon
} from './styles'

import { Button } from '../../styles/Buttons'

const ConfirmUI = (props) => {
  const {
    title,
    content,
    onAccept,
    onCancel,
    onClose,
    acceptText,
    cancelText
  } = props
  const [, t] = useLanguage()
  return (
    <PopupWrap className='popup'>
      <PopupDialog>
        <PopupIcon>
          <MdClose onClick={() => onClose()} />
        </PopupIcon>
        {title && <PopupTitle>{title}</PopupTitle>}
        {content && <PopupContent>{content}</PopupContent>}
        {(onCancel || onAccept || onClose) && (
          <PopupActions>
            {onCancel && <Button outline onClick={() => onCancel()}>{cancelText || t('CANCEL')}</Button>}
            {onAccept && <Button color='primary' onClick={() => onAccept()}>{acceptText || t('ACCEPT')}</Button>}
          </PopupActions>)}
      </PopupDialog>
    </PopupWrap>
  )
}

export const Confirm = (props) => {
  const popupProps = {
    ...props,
    UIComponent: ConfirmUI
  }

  return (
    <>
      <PopupBackDrop className='popup-backdrop' />
      <Popup {...popupProps} />
    </>
  )
}
