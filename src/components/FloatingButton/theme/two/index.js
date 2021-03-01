import React from 'react'
import { FloatingButton as FloatingButtonController } from 'ordering-components'
import { Button } from '../../../../styles/Buttons'

import {
  Container,
  BtnValue
} from './styles'

const FloatingButtonUI = (props) => {
  const {
    btnText,
    btnValue,
    handleButtonClick,
    disabled,
    isSecondaryBtn
  } = props

  return (
    <Container>
      <Button
        color={isSecondaryBtn ? 'secundary' : 'primary'}
        onClick={handleButtonClick}
        disabled={disabled}
      >
        {btnText}
        <BtnValue>
          {btnValue}
        </BtnValue>
      </Button>
    </Container>
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
