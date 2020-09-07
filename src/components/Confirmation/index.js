import React, { useState } from 'react'
import { Popup } from 'ordering-components'
import { customStyles } from './styles'

const ConfirmationUI = (props) => {
  const {
    title,
    onAccept,
    onCancel,
    onClose
  } = props
  return (
    <>
      {title && <h2>{title}</h2>}
      <p>Do you want to delete Card</p>
      {(onCancel || onAccept || onClose) && (
        <div>
          {onAccept && <button onClick={() => onAccept()}>Accept</button>}
          {onCancel && <button onClick={() => onCancel()}>Cancel</button>}
          {onClose && <button onClick={() => onClose()}>Close</button>}
        </div>)}
    </>
  )
}

const [modalIsOpen, setIsOpen] = useState(false)

// const openModal = () => {
//   setIsOpen(true)
// }

const closeModal = () => {
  setIsOpen(false)
}

export const Confirmation = (props) => {
  const popupProps = {
    ...props,
    UIComponent: ConfirmationUI,
    open: modalIsOpen,
    style: customStyles,
    onAccept: () => closeModal(),
    onCancel: () => closeModal(),
    onClose: () => closeModal(),
    title: 'Confirmation'
  }
  return (
    <Popup {...popupProps} />
  )
}
