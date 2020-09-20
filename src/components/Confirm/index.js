import React from 'react'
import { MdClose } from 'react-icons/md'
import { Popup, useLanguage } from 'ordering-components'
import {
  PopupDialog,
  PopupWrap,
  PopupActions,
  PopupTitle,
  PopupContent,
  PopupIcon
} from './styles'

import { Button } from '../../styles/Buttons'

const ConfirmUI = (props) => {
  const {
    title,
    children,
    content,
    onAccept,
    onCancel,
    onClose,
    acceptText,
    cancelText
  } = props
  const [, t] = useLanguage()
  return (
    <>
      <PopupWrap className='popup'>
        <PopupDialog className='popup-dialog'>
          <PopupIcon>
            <MdClose onClick={() => onClose()} />
          </PopupIcon>
          {title && <PopupTitle>{title}</PopupTitle>}
          <PopupContent>
            {content && typeof content === 'string' && content}
            {content && typeof content === 'object' && Array.isArray(content) && (
              <ul>
                {content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {children}
          </PopupContent>
          {(onCancel || onAccept || onClose) && (
            <PopupActions>
              {onCancel && <Button outline onClick={() => onCancel()}>{cancelText || t('CANCEL')}</Button>}
              {onAccept && <Button color='primary' onClick={() => onAccept()}>{acceptText || t('ACCEPT')}</Button>}
            </PopupActions>)}
        </PopupDialog>
      </PopupWrap>
    </>
  )
}

export const Confirm = (props) => {
  const popupProps = {
    ...props,
    UIComponent: ConfirmUI
  }

  return (
    <Popup {...popupProps} />
  )
}

export const Alert = Confirm
