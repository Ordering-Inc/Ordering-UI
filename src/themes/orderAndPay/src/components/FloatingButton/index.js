import React from 'react'
import { FloatingButton as FloatingButtonController } from 'ordering-components'
import { Button } from '../../styles/Buttons'

import {
  Container
} from './styles'

const FloatingButtonUI = (props) => {
  const {
    btnText,
    title,
    handleButtonClick,
    disabled,
    isSecondaryBtn
  } = props

  const isIOS = window.navigator.userAgent.includes('iPhone')

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <Container isIOS={isIOS}>
        <h1>{title}</h1>
        <Button
          color={isSecondaryBtn ? 'secundary' : 'primary'}
          onClick={handleButtonClick}
          disabled={disabled}
        >
          {btnText}
        </Button>
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const FloatingButton = (props) => {
  const floatingButtonProps = {
    ...props,
    UIComponent: FloatingButtonUI
  }

  return (
    <FloatingButtonController {...floatingButtonProps} />
  )
}
