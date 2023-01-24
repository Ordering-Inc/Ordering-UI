import React from 'react'
import { Button } from '../../styles/Buttons'
import FdPageSearch from '@meronex/icons/fd/FdPageSearch'

import {
  NotFound,
  NotFoundImage,
  ButtonWrapper
} from './styles'

export const NotFoundSource = (props) => {
  const {
    image,
    content,
    btnTitle,
    conditioned,
    onClickButton
  } = props


  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <NotFound id='not-found-source'>
        <NotFoundImage>
          <FdPageSearch />
        </NotFoundImage>
        {content && conditioned && <h1>{content}</h1>}
        {content && !conditioned && <h1>{content}</h1>}
        {!onClickButton && props.children && (
          props.children
        )}
        {onClickButton && (
          <ButtonWrapper>
            <Button
              outline
              color='primary'
              onClick={() => onClickButton()}
            >
              {btnTitle}
            </Button>
          </ButtonWrapper>
        )}
      </NotFound>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
