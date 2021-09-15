import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage, useUtils } from 'ordering-components'
import { ReviewDriver as ReviewDriverController } from './naked'
import MdClose from '@meronex/icons/md/MdClose'

import { Alert } from '../Confirm'
import { TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

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

const ReviewDriverUI = (props) => {
  const { reviews, order, handleSendDriverReview, formState, closeReviewDriver, setIsDriverReviewed, setReviews } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const { handleSubmit, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })
  const [extraComment, setExtraComment] = useState('')
  const [comments, setComments] = useState([])

  const commentsList = [
    { key: 0, content: t('FAST_AND_EFFICIENT', 'Fast and efficient') },
    { key: 1, content: t('DELIVERY_PERFECT', 'Delivery perfect') },
    { key: 2, content: t('EXCELLENT_COMMUNICATION', 'Excellent communication') },
    { key: 3, content: t('CORDIAL_SERVICE', 'Cordial service') }
  ]

  const qualificationList = [
    { key: 1, text: t('TERRIBLE', 'Terrible'), middleNode: false, left: 0, right: 'initial' },
    { key: 2, text: t('BAD', 'Bad'), middleNode: true, left: '25%', right: '75%' },
    { key: 3, text: t('OKAY', 'Okay'), middleNode: true, left: '50%', right: '50%' },
    { key: 4, text: t('GOOD', 'Good'), middleNode: true, left: '75%', right: '25%' },
    { key: 5, text: t('GREAT', 'Great'), middleNode: false, left: 'initial', right: 0 }
  ]

  const handleChangeReviews = (index) => {
    switch (index) {
      case 1:
        setReviews({ ...reviews, qualification: 1 })
        break
      case 2:
        setReviews({ ...reviews, qualification: 2 })
        break
      case 3:
        setReviews({ ...reviews, qualification: 3 })
        break
      case 4:
        setReviews({ ...reviews, qualification: 4 })
        break
      case 5:
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
    if (reviews?.qualification === 0) {
      setAlertState({
        open: true,
        content: [`${t('REVIEW_QUALIFICATION_REQUIRED', 'Review qualification is required')}`]
      })
      return
    }
    setAlertState({ ...alertState, success: true })
    handleSendDriverReview()
  }

  const handleChangeComment = (commentItem) => {
    const found = comments.find((comment) => comment?.key === commentItem.key)
    if (found) {
      const _comments = comments.filter((comment) => comment?.key !== commentItem.key)
      setComments(_comments)
    } else {
      setComments([...comments, commentItem])
    }
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

  const isSelectedComment = (commentKey) => {
    const found = comments.find((comment) => comment?.key === commentKey)
    return found
  }

  useEffect(() => {
    let _comments = ''
    if (comments.length > 0) {
      comments.map(comment => (_comments += comment.content + '. '))
    }
    const _comment = _comments + extraComment
    setReviews({ ...reviews, comment: _comment })
  }, [comments, extraComment])

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
              <ReviewsProgressBar style={{ width: `${(reviews?.qualification === 0 ? 0 : (reviews?.qualification - 1) / 4) * 100}%` }} />
              {
                qualificationList?.map(qualification => (
                  <ReviewsMarkPoint
                    key={qualification?.key}
                    style={{
                      left: theme.rtl ? (qualification?.middleNode ? 'initial' : qualification?.right) : qualification?.left,
                      right: theme?.rtl ? qualification?.left : (qualification?.middleNode ? 'initial' : qualification?.right)
                    }}
                    active={reviews?.qualification === qualification?.key}
                    pass={reviews?.qualification >= qualification?.key}
                    className={qualification?.middleNode ? 'mark-point' : ''}
                    onClick={() => handleChangeReviews(qualification?.key)}
                  >
                    <span>
                      {qualification?.text}
                      <span />
                    </span>
                  </ReviewsMarkPoint>
                ))
              }
            </ReviewsProgressContent>
          </ReviewsProgressWrapper>
          <CommentsList>
            <p>{t('COMMENTS', 'Comments')}</p>
            {
              commentsList?.map((commentItem, i) => (
                <Button
                  key={i}
                  color={isSelectedComment(commentItem.key) ? 'primary' : 'secundary'}
                  onClick={() => handleChangeComment(commentItem)}
                  initialIcon
                >
                  {commentItem.content}
                  {
                    isSelectedComment(commentItem.key) && <MdClose />
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
