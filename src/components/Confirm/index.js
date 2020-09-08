import React from 'react'
import { Popup } from 'ordering-components'
import { PopupDialog, PopupWrap, PopupBackDrop, PopupActions, PopupTitle, PopupContent } from './styles'

import { Button } from '../../styles/Buttons'

const ConfirmUI = (props) => {
  const {
    title,
    content,
    onAccept,
    onCancel,
    onClose,
    acceptText,
    closeText
  } = props
  return (
    <PopupWrap className='popup'>
      <PopupDialog>
        {title && <PopupTitle>{title}</PopupTitle>}
        {content && <PopupContent>{content}</PopupContent>}
        {(onCancel || onAccept || onClose) && (
          <PopupActions>
            {onClose && <Button outline onClick={() => onClose()}>{closeText}</Button>}
            {onCancel && <Button onClick={() => onCancel()}>Cancel</Button>}
            {onAccept && <Button color='primary' onClick={() => onAccept()}>{acceptText}</Button>}
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
