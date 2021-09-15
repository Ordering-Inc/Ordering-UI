import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useLanguage, useUtils } from 'ordering-components'
import { ReviewDriver as ReviewDriverController } from './naked'
import MdClose from '@meronex/icons/md/MdClose'
import {
  ReviewDriverContainer,
  Comments,
  Send,
  BusinessLogo,
  WrapperBusinessLogo,
  ReviewsProgressWrapper,
  ReviewsProgressContent,
  ReviewsProgressBar,
  ReviewsMarkPoint,
  LogoAndReviewWrapper,
  CommentsList
} from './styles'
import { Alert } from '../Confirm'

import { TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

const ReviewDriverUI = (props) => {
  const { reviews, order, handleSendDriverReview, formState, closeReviewDriver, setIsDriverReviewed, setReviews } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const { handleSubmit, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })
  const [comment, setComment] = useState(null)
  const [extraComment, setExtraComment] = useState('')

  const commentsList = [
    t('FAST_AND_EFFICIENT', 'Fast and efficient'),
    t('DELIVERY_PERFECT', 'Delivery perfect'),
    t('EXCELLENT_COMMUNICATION', 'Excellent communication'),
    t('CORDIAL_SERVICE', 'Cordial service')
  ]

  const handleChangeReviews = (index) => {
    switch (index) {
      case 'terrible':
        setReviews({ ...reviews, qualification: 1 })
        break
      case 'bad':
        setReviews({ ...reviews, qualification: 2 })
        break
      case 'okay':
        setReviews({ ...reviews, qualification: 3 })
        break
      case 'good':
        setReviews({ ...reviews, qualification: 4 })
        break
      case 'great':
        setReviews({ ...reviews, qualification: 5 })
        break
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
      setIsDriverReviewed && setIsDriverReviewed(true)
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

  const onSubmit = values => {
    setAlertState({ ...alertState, success: true })
    handleSendDriverReview()
  }

  const handleChangeComments = (text) => {
    if (comment === text) setComment(null)
    else setComment(text)
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    if (!formState.loading && !formState.result?.error && alertState.success) {
      closeReviewDriver()
    }
  }

  useEffect(() => {
    const _comment = comment ? (extraComment !== '' ? `${comment}. ${extraComment}` : `${comment}.`) : extraComment
    setReviews({ ...reviews, comment: _comment })
  }, [comment, extraComment])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <>
        <LogoAndReviewWrapper>
          <WrapperBusinessLogo>
            {(order?.business?.logo || theme.images?.dummies?.businessLogo) && (
              <BusinessLogo bgimage={optimizeImage(order?.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
            )}
          </WrapperBusinessLogo>
          <ReviewsProgressWrapper>
            <p>{t('HOW_WAS_YOUR_DRIVER', 'How was your driver?')}</p>
            <ReviewsProgressContent>
              <ReviewsProgressBar style={{ width: `${((reviews?.qualification - 1) / 4) * 100}%` }} />
              <ReviewsMarkPoint
                style={{ left: theme.rtl ? 'initial' : '0', right: theme?.rtl ? '0' : 'initial' }}
                active={reviews?.qualification === 1}
                onClick={() => handleChangeReviews('terrible')}
              >
                <span>{t('TERRIBLE', 'Terrible')}</span>
              </ReviewsMarkPoint>
              <ReviewsMarkPoint
                style={{ left: theme.rtl ? 'initial' : '25%', right: theme?.rtl ? '25%' : 'initial' }}
                active={reviews?.qualification === 2}
                pass={reviews?.qualification > 2}
                onClick={() => handleChangeReviews('bad')}
                className='mark-point'
              >
                <span>
                  {t('BAD', 'Bad')}
                  <span />
                </span>
              </ReviewsMarkPoint>
              <ReviewsMarkPoint
                style={{ left: theme.rtl ? 'initial' : '50%', right: theme?.rtl ? '50%' : 'initial' }}
                active={reviews?.qualification === 3}
                pass={reviews?.qualification > 3}
                onClick={() => handleChangeReviews('okay')}
                className='mark-point'
              >
                <span>
                  {t('OKAY', 'Okay')}
                  <span />
                </span>
              </ReviewsMarkPoint>
              <ReviewsMarkPoint
                style={{ left: theme.rtl ? 'initial' : '75%', right: theme?.rtl ? '75%' : 'initial' }}
                active={reviews?.qualification === 4}
                pass={reviews?.qualification > 4}
                onClick={() => handleChangeReviews('good')}
                className='mark-point'
              >
                <span>
                  {t('GOOD', 'Good')}
                  <span />
                </span>
              </ReviewsMarkPoint>
              <ReviewsMarkPoint
                style={{ left: theme.rtl ? '0' : 'initial', right: theme?.rtl ? 'initial' : '0' }}
                active={reviews?.qualification === 5}
                onClick={() => handleChangeReviews('great')}
              >
                <span>{t('GREAT', 'Great')}</span>
              </ReviewsMarkPoint>
            </ReviewsProgressContent>
          </ReviewsProgressWrapper>
          <CommentsList>
            <p>{t('COMMENTS', 'Comments')}</p>
            {
              commentsList?.map((commentItem, i) => (
                <Button
                  key={i}
                  color={comment === commentItem ? 'primary' : 'secundary'}
                  onClick={() => handleChangeComments(commentItem)}
                  initialIcon
                >
                  {commentItem}
                  {
                    comment === commentItem && <MdClose />
                  }
                </Button>
              ))
            }
          </CommentsList>
        </LogoAndReviewWrapper>
        <ReviewDriverContainer onSubmit={handleSubmit(onSubmit)}>
          <Comments>
            <p>{t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')}</p>
            <TextArea
              placeholder={t('COMMENTS', 'Comments')}
              name='comment'
              value={extraComment}
              onChange={(e) => setExtraComment(e.target.value)}
              autoComplete='off'
            />
          </Comments>
          {
            props.afterMidElements?.map((MidElement, i) => (
              <React.Fragment key={i}>
                {MidElement}
              </React.Fragment>))
          }
          {
            props.afterMidComponents?.map((MidComponent, i) => (
              <MidComponent key={i} {...props} />))
          }
          <Send>
            <Button
              color={!formState.loading ? 'primary' : 'secondary'}
              type='submit'
              disabled={formState.loading}
            >
              {!formState.loading ? (
                t('SEND_REVIEW', 'Send review')
              ) : t('LOADING', 'Loading')}
            </Button>
          </Send>
          <Alert
            title={t('ORDER_REVIEW', 'Order Review')}
            content={alertState.content}
            acceptText={t('ACCEPT', 'Accept')}
            open={alertState.open}
            onClose={() => closeAlert()}
            onAccept={() => closeAlert()}
            closeOnBackdrop={false}
          />
        </ReviewDriverContainer>
      </>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ReviewDriver = (props) => {
  const reviewDriverProps = {
    ...props,
    UIComponent: ReviewDriverUI
  }

  return <ReviewDriverController {...reviewDriverProps} />
}
