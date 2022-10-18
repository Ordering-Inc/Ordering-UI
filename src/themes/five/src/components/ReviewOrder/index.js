import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useLanguage, useUtils, OrderReview as ReviewOrderController } from 'ordering-components'
import MdClose from '@meronex/icons/md/MdClose'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import {
  ReviewOrderContainer,
  Comments,
  Send,
  BusinessLogo,
  WrapperBusinessLogo,
  ReviewsProgressWrapper,
  ReviewsProgressContent,
  ReviewsProgressBar,
  ReviewsMarkPoint,
  LogoAndReviewWrapper,
  CommentsList,
  CommentButton,
  ContinueContainer
} from './styles'
import { Alert } from '../Confirm'
import { Alert as AlertPFChangs } from '../Confirm/layouts/pfchangs'
import { TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'
import { reviewCommentList } from '../../../../../utils'

const ReviewOrderUI = (props) => {
  const { stars, order, handleSendReview, formState, closeReviewOrder, setIsReviewed, setStars } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const { handleSubmit, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })
  const [comments, setComments] = useState([])
  const [extraComment, setExtraComment] = useState('')

  const AlertComponent = theme?.layouts?.general?.components?.layout?.type === 'pfchangs'
    ? AlertPFChangs
    : Alert

  const commentsList = reviewCommentList('order')

  const qualificationList = [
    { key: 1, text: t('TERRIBLE', 'Terrible'), middleNode: false, left: 0, right: 'initial' },
    { key: 2, text: t('BAD', 'Bad'), middleNode: true, left: '25%', right: '75%' },
    { key: 3, text: t('OKAY', 'Okay'), middleNode: true, left: '50%', right: '50%' },
    { key: 4, text: t('GOOD', 'Good'), middleNode: true, left: '75%', right: '25%' },
    { key: 5, text: t('GREAT', 'Great'), middleNode: false, left: 'initial', right: 0 }
  ]

  const handleChangeStars = (index) => {
    if (index) setStars({ ...stars, quality: index, punctiality: index, service: index, packaging: index, comments: '' })
    setComments([])
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

  const isSelectedComment = (commentKey) => {
    const found = comments.find((comment) => comment?.key === commentKey)
    return found
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
      setIsReviewed && setIsReviewed(true)
      closeReviewOrder && closeReviewOrder()
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
    if (Object.values(stars).some((value) => value === 0)) {
      setAlertState({
        open: true,
        content: stars.quality === 0 ? [`${t('REVIEW_QUALIFICATION_REQUIRED', 'Review qualification is required')}`] : []
      })
      return
    }
    setAlertState({ ...alertState, success: true })
    handleSendReview()
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    let _comments = ''
    if (comments.length > 0) {
      comments.map(comment => (_comments += comment.content + '. '))
    }
    const _comment = _comments + extraComment
    setStars({ ...stars, comments: _comment })
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
            <p>{t('HOW_WAS_YOUR_ORDER', 'How was your order?')}</p>
            <ReviewsProgressContent>
              <ReviewsProgressBar style={{ width: `${(stars?.quality === 0 ? 0 : (stars?.quality - 1) / 4) * 100}%` }} />
              {
                qualificationList?.map(qualification => (
                  <ReviewsMarkPoint
                    key={qualification?.key}
                    style={{
                      left: theme?.rtl ? (qualification?.middleNode ? 'initial' : qualification?.right) : qualification?.left,
                      right: theme?.rtl ? qualification?.left : (qualification?.middleNode ? 'initial' : qualification?.right)
                    }}
                    active={stars?.quality === qualification?.key}
                    pass={stars?.quality >= qualification?.key}
                    className={qualification?.middleNode ? 'mark-point' : ''}
                    onClick={() => handleChangeStars(qualification?.key)}
                  >
                    <span>{qualification?.text}<span /></span>
                  </ReviewsMarkPoint>
                ))
              }
            </ReviewsProgressContent>
          </ReviewsProgressWrapper>
          <CommentsList>
            <p>{commentsList[stars?.quality || 1]?.title}</p>
            {
              commentsList[stars?.quality || 1]?.list?.map((commentItem, i) => (
                <CommentButton
                  key={i}
                  active={isSelectedComment(commentItem?.key)}
                  onClick={() => handleChangeComment(commentItem)}
                  initialIcon
                >
                  {commentItem.content}
                  {
                    isSelectedComment(commentItem?.key) && <MdClose />
                  }
                </CommentButton>
              ))
            }
          </CommentsList>
        </LogoAndReviewWrapper>
        <ReviewOrderContainer onSubmit={handleSubmit(onSubmit)}>
          <Comments>
            <p>{t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')}</p>
            <TextArea
              name='comments'
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
            <span onClick={closeReviewOrder}>{t('SKIP', 'Skip')}</span>
            <Button
              color={!formState.loading ? 'primary' : 'secondary'}
              type='submit'
              disabled={formState.loading}
              className='review-sent'
            >
              {!formState.loading ? (
                <ContinueContainer><p>{t('CONTINUE', 'Continue')}</p><BsArrowRight /></ContinueContainer>
              ) : t('LOADING', 'Loading')}
            </Button>
          </Send>
          <AlertComponent
            title={t('ORDER_REVIEW', 'Order Review')}
            content={alertState.content}
            acceptText={t('ACCEPT', 'Accept')}
            open={alertState.open}
            onClose={() => closeAlert()}
            onAccept={() => closeAlert()}
            closeOnBackdrop={false}
          />
        </ReviewOrderContainer>
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

export const ReviewOrder = (props) => {
  const ReviewOrderProps = {
    ...props,
    UIComponent: ReviewOrderUI,
    isToast: true,
    defaultStar: props?.defaultStar ?? 0
  }

  return <ReviewOrderController {...ReviewOrderProps} />
}
