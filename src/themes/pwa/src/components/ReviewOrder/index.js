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
  Header
} from './styles'
import { Alert } from '../Confirm'

import { TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

const ReviewOrderUI = (props) => {
  const { stars, order, handleSendReview, formState, closeReviewOrder, setIsReviewed, setStars, handleIsReviewed } = props
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const { handleSubmit, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })
  const [comment, setComment] = useState(null)
  const [extraComment, setExtraComment] = useState('')

  const commentsList = [
    t('IT_WASNT_TASTY', "It wasn't tasty"),
    t('IT_DOESNT_PACK_WELL', "It doesn't pack well"),
    t('IT_ISNT_WORTH_WHAT_IT_COSTS', "It isn't worth what it costs"),
    t('TOO_SLOW', 'Too slow'),
    t('SUSTAINABLE_PACKAGING_WASNT_USED', "Sustainable packaging wasn't used"),
    t('THEY_DID_NOT_FOLLOW_THE_ORDER_NOTES', 'They did not follow the order notes')
  ]

  const handleChangeStars = (index) => {
    switch (index) {
      case 'terrible':
        setStars({ ...stars, quality: 1, punctiality: 1, service: 1, packaging: 1 })
        break
      case 'bad':
        setStars({ ...stars, quality: 2, punctiality: 2, service: 2, packaging: 2 })
        break
      case 'okay':
        setStars({ ...stars, quality: 3, punctiality: 3, service: 3, packaging: 3 })
        break
      case 'good':
        setStars({ ...stars, quality: 4, punctiality: 4, service: 4, packaging: 4 })
        break
      case 'great':
        setStars({ ...stars, quality: 5, punctiality: 5, service: 5, packaging: 5 })
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
      setIsReviewed && setIsReviewed(true)
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
    handleSendReview()
    handleIsReviewed && handleIsReviewed(order.id)
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
      closeReviewOrder()
    }
  }

  useEffect(() => {
    const _comment = comment ? (extraComment !== '' ? `${comment}. ${extraComment}` : `${comment}.`) : extraComment
    setStars({ ...stars, comments: _comment })
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
          <Header>
            {order ? `${t('REVIEW_ORDER', 'Review order')}` : t('LOADING', theme?.defaultLanguages?.LOADING || 'Loading...')}
          </Header>
          <WrapperBusinessLogo>
            {(order?.business?.logo || theme.images?.dummies?.businessLogo) && (
              <BusinessLogo bgimage={optimizeImage(order?.business?.logo || theme.images?.dummies?.businessLogo, 'h_200,c_limit')} />
            )}
          </WrapperBusinessLogo>
          <ReviewsProgressWrapper>
            <p>{t('HOW_WAS_YOUR_ORDER', 'How was your order?')}</p>
            <ReviewsProgressContent>
              <ReviewsProgressBar style={{ width: `${((stars?.quality - 1) / 4) * 100}%` }} />
              <ReviewsMarkPoint
                style={{ left: theme.rtl ? 'initial' : '0', right: theme?.rtl ? '0' : 'initial' }}
                active={stars?.quality === 1}
                onClick={() => handleChangeStars('terrible')}
              >
                {t('TERRIBLE', 'Terrible')}
              </ReviewsMarkPoint>
              <ReviewsMarkPoint
                style={{ left: theme.rtl ? 'initial' : '25%', right: theme?.rtl ? '25%' : 'initial' }}
                active={stars?.quality === 2}
                onClick={() => handleChangeStars('bad')}
              >
                {t('BAD', 'Bad')}
              </ReviewsMarkPoint>
              <ReviewsMarkPoint
                style={{ left: theme.rtl ? 'initial' : '50%', right: theme?.rtl ? '50%' : 'initial' }}
                active={stars?.quality === 3}
                onClick={() => handleChangeStars('okay')}
              >
                {t('OKAY', 'Okay')}
              </ReviewsMarkPoint>
              <ReviewsMarkPoint
                style={{ left: theme.rtl ? 'initial' : '75%', right: theme?.rtl ? '75%' : 'initial' }}
                active={stars?.quality === 4}
                onClick={() => handleChangeStars('good')}
              >
                {t('GOOD', 'Good')}
              </ReviewsMarkPoint>
              <ReviewsMarkPoint
                style={{ left: theme.rtl ? '0' : 'initial', right: theme?.rtl ? 'initial' : '0' }}
                active={stars?.quality === 5}
                onClick={() => handleChangeStars('great')}
              >
                {t('GREAT', 'Great')}
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
        <ReviewOrderContainer onSubmit={handleSubmit(onSubmit)}>
          <Comments>
            <p>{t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')}</p>
            <TextArea
              placeholder={t('COMMENTS', 'Comments')}
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
            >
              {!formState.loading ? (
                <>{t('CONTINUE', 'Continue')}<BsArrowRight /></>
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
    UIComponent: ReviewOrderUI
  }

  return <ReviewOrderController {...ReviewOrderProps} />
}
