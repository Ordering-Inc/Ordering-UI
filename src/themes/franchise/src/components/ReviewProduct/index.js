import React, { useState, useEffect } from 'react'
import { ReviewProduct as ReviewProductController } from './naked'
import { useLanguage } from 'ordering-components'
import { useForm } from 'react-hook-form'

import {
  ReviewProductContainer,
  ActionBlock,
  ButtonCustomized,
  SingleProductReviewContainer,
  HandReviewWrapper,
  HandReviewContent,
  HandIconWrapper,
  AdditionCommentsWrapper,
  AddCommentHideShow,
  Comments,
  CommentsList
} from './styles'
import AiOutlineLike from '@meronex/icons/ai/AiOutlineLike'
import AiOutlineDislike from '@meronex/icons/ai/AiOutlineDislike'
import MdClose from '@meronex/icons/md/MdClose'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import { TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'

const SingleProductReview = (props) => {
  const {
    product,
    handleChangeFormState,
    formState
  } = props

  const [, t] = useLanguage()
  const [isLike, setIsLike] = useState(true)
  const [isExtraComment, setIsExtraComment] = useState(false)
  const [comment, setComment] = useState(null)
  const [extraComment, setExtraComment] = useState('')

  const commentsList = [
    t('IT_WASNT_TASTY', "It wasn't tasty"),
    t('SMALL_PORTION', 'Small portion'),
    t('WET_OR_LEAKY', 'Wet or leaky'),
    t('SLOPPY_PRESENTATION', 'Sloppy presentation'),
    t('COLD_OR_MELTED', 'Cold or melted')
  ]

  const handleChangeComments = (text) => {
    if (comment === text) setComment(null)
    else setComment(text)
  }

  useEffect(() => {
    if (!comment && !extraComment && formState.changes?.length === 0 && isLike) return
    const _comment = comment ? (extraComment !== '' ? `${comment}. ${extraComment}` : `${comment}.`) : extraComment
    let found = false
    const _changes = formState.changes.map(item => {
      if (item?.product_id === product?.id) {
        found = true
        return {
          product_id: product?.id,
          comment: _comment,
          qualification: isLike ? 5 : 1
        }
      }
      return item
    })
    if (!found) {
      _changes.push({
        product_id: product?.id,
        comment: _comment,
        qualification: isLike ? 5 : 1
      })
    }
    handleChangeFormState && handleChangeFormState(_changes)
  }, [comment, extraComment, isLike])

  return (
    <SingleProductReviewContainer>
      <HandReviewWrapper>
        <p>{product?.name}</p>
        <HandReviewContent>
          <HandIconWrapper onClick={() => setIsLike(true)} active={isLike}>
            <AiOutlineLike />
          </HandIconWrapper>
          <HandIconWrapper onClick={() => setIsLike(false)} active={!isLike}>
            <AiOutlineDislike />
          </HandIconWrapper>
        </HandReviewContent>
      </HandReviewWrapper>
      <CommentsList>
        {
          commentsList?.map((commentItem, i) => (
            <ButtonCustomized
              key={i}
              type='button'
              active={comment === commentItem}
              onClick={() => handleChangeComments(commentItem)}
              initialIcon
            >
              {commentItem}
              {
                comment === commentItem && <MdClose />
              }
            </ButtonCustomized>
          ))
        }
      </CommentsList>
      <AdditionCommentsWrapper>
        <AddCommentHideShow
          onClick={() => setIsExtraComment(!isExtraComment)}
          active={isExtraComment}
        >
          {t('ADDITIONAL_COMMENTS', 'Additional comments')}
        </AddCommentHideShow>
        {
          isExtraComment && (
            <Comments>
              <p>{t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')}</p>
              <TextArea
                name='comments'
                value={extraComment || ''}
                onChange={(e) => setExtraComment(e.target.value)}
                autoComplete='off'
              />
            </Comments>
          )
        }
      </AdditionCommentsWrapper>
    </SingleProductReviewContainer>
  )
}

const ReviewProductUI = (props) => {
  const {
    order,
    closeReviewProduct,
    formState,
    handleSendProductReview,
    setIsProductReviewed
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  const onSubmit = values => {
    setAlertState({ ...alertState, success: true })
    handleSendProductReview()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    if (!formState.loading && !formState.result?.error && alertState.success) {
      closeReviewProduct()
    }
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        success: false,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
    if (!formState.loading && !formState.result?.error && alertState.success) {
      setAlertState({
        ...alertState,
        open: true,
        title: t('REVIEW_SUCCESS_TITLE', 'Well done'),
        content: t('REVIEW_SUCCESS_CONTENT', 'Thank you, Review successfully submitted!')
      })
      setIsProductReviewed && setIsProductReviewed(true)
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        success: false,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ReviewProductContainer onSubmit={handleSubmit(onSubmit)}>
        {order?.products && order.products.length > 0 && order.products.map((product, i) => (
          <SingleProductReview
            {...props}
            key={i}
            product={product}
          />
        ))}
        <ActionBlock>
          <span onClick={() => setIsProductReviewed(true)}>{t('SKIP', 'Skip')}</span>
          <Button
            color={!formState.loading ? 'primary' : 'secondary'}
            type='submit'
            disabled={formState.loading || formState?.changes?.length === 0}
          >
            {!formState.loading ? (
              <>{t('CONTINUE', 'Continue')}<BsArrowRight /></>
            ) : t('LOADING', 'Loading')}
          </Button>
        </ActionBlock>
        <Alert
          title={t('PRODUCT_REVIEW', 'Product Review')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </ReviewProductContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ReviewProduct = (props) => {
  const reviewProductProps = {
    ...props,
    UIComponent: ReviewProductUI
  }
  return <ReviewProductController {...reviewProductProps} />
}
