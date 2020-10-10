import React from 'react'
import notFound from '../../../template/assets/not-found.svg'
import { Button } from '../../styles/Buttons'

import {
  NotFound,
  NotFoundImage
} from './styles'

export const NotFoundSource = (props) => {
  const {
    content,
    btnTitle,
    onClickButton
  } = props

  return (
    <NotFound>
      <NotFoundImage>
        <img src={notFound} alt='notFound' />
      </NotFoundImage>
      <h1>{content}</h1>
      {!onClickButton && props.children && (
        props.children
      )}
      {onClickButton && (
        <div>
          <Button
            outline
            color='primary'
            onClick={() => onClickButton()}
          >
            {btnTitle}
          </Button>
        </div>
      )}
    </NotFound>
  )
}
