import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from '../../../../styles/Buttons'

import {
  NotFound,
  NotFoundImage
} from './styles'

export const NotFoundSource = (props) => {
  const {
    image,
    content,
    btnTitle,
    conditioned,
    onClickButton
  } = props

  const theme = useTheme()

  const errorImage = image || theme.images?.general?.notFound

  return (
    <NotFound id='not-found-source'>
      {errorImage && (
        <NotFoundImage>
          <img src={errorImage} alt='Not Found' width='300' height='260' loading='lazy' />
        </NotFoundImage>
      )}
      {content && conditioned && !errorImage && <h1>{content}</h1>}
      {content && !conditioned && <h1>{content}</h1>}
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
