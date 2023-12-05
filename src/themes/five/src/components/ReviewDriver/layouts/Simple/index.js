import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLanguage, ReviewDriver as ReviewDriverController } from 'ordering-components'
import MdClose from '@meronex/icons/md/MdClose'
import IfillStar from '@meronex/icons/ai/AiFillStar'
import IUnfillStar from '@meronex/icons/ai/AiOutlineStar'

import {
  Container,
  ReviewDriverContainer,
  Comments,
  ReviewsProgressWrapper,
  ReviewsProgressContent,
  LogoAndReviewWrapper,
  CommentsList,
  CommentButton,
  Send
} from './styles'

import { reviewCommentList } from '../../../../../../../utils'
import { Alert } from '../../../Confirm'
import { TextArea } from '../../../../styles/Inputs'
import { Button } from '../../../../styles/Buttons'

const ReviewDriverUI = (props) => {
  const {
    dirverReviews,
    formState,
    setDriverReviews,
    setIsReviewed,
    handleSendDriverReview
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, errors } = useForm()
  const [comments, setComments] = useState([])
  const [extraComment, setExtraComment] = useState('')
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  const commentsList = reviewCommentList('driver')

  const qualificationList = [
    { key: 1, text: t('TERRIBLE', 'Terrible'), middleNode: false, left: 0, right: 'initial' },
    { key: 2, text: t('BAD', 'Bad'), middleNode: true, left: '25%', right: '75%' },
    { key: 3, text: t('OKAY', 'Okay'), middleNode: true, left: '50%', right: '50%' },
    { key: 4, text: t('GOOD', 'Good'), middleNode: true, left: '75%', right: '25%' },
    { key: 5, text: t('GREAT', 'Great'), middleNode: false, left: 'initial', right: 0 }
  ]

  const handleChangeReviews = (index) => {
    if (index) setDriverReviews({ ...dirverReviews, qualification: index, comment: '' })
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
      setIsReviewed && setIsReviewed()
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
    if (dirverReviews?.qualification === 0) {
      setAlertState({
        open: true,
        content: [`${t('REVIEW_QUALIFICATION_REQUIRED', 'Review qualification is required')}`]
      })
      return
    }
    setAlertState({ ...alertState, success: true })
    handleSendDriverReview()
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
    setDriverReviews({ ...dirverReviews, comment: _comment })
  }, [comments, extraComment])

  return (
    <Container>
      <LogoAndReviewWrapper>
        <ReviewsProgressWrapper>
          <p style={{ fontWeight: 'bold' }}>{t('HOW_WAS_YOUR_DRIVER', 'How was your driver?')}</p>
          <ReviewsProgressContent>
            {
              qualificationList?.map(qualification => (
                <div
                  key={qualification?.key}
                >
                  {qualification?.key <= dirverReviews?.qualification
                    ? <IfillStar onClick={() => handleChangeReviews(qualification?.key)} />
                    : <IUnfillStar onClick={() => handleChangeReviews(qualification?.key)} />}
                </div>
              ))
            }
          </ReviewsProgressContent>
        </ReviewsProgressWrapper>
        {dirverReviews?.qualification <= 3 && (
          <CommentsList>
            <p>{commentsList[dirverReviews?.qualification || 1]?.title}</p>
            {
              commentsList[dirverReviews?.qualification || 1]?.list?.map((commentItem, i) => (
                <CommentButton
                  key={i}
                  active={isSelectedComment(commentItem.key)}
                  onClick={() => handleChangeComment(commentItem)}
                  initialIcon
                >
                  {commentItem.content}
                  {isSelectedComment(commentItem.key) && <MdClose />}
                </CommentButton>
              ))
            }
          </CommentsList>
        )}
      </LogoAndReviewWrapper>
      <ReviewDriverContainer onSubmit={handleSubmit(onSubmit)}>
        <Comments>
          <p>{t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')}</p>
          <TextArea
            name='comment'
            value={extraComment}
            onChange={(e) => setExtraComment(e.target.value)}
            autoComplete='off'
          />
        </Comments>
        <Send>
          <Button
            color={!formState.loading ? 'primary' : 'secondary'}
            type='submit'
            disabled={formState.loading}
            className='review-sent'
          >
            {!formState.loading ? (
              t('SEND_REVIEW', 'Send review')
            ) : t('LOADING', 'Loading')}
          </Button>
        </Send>
        <Alert
          title={t('DRIVER_REVIEW', 'Driver Review')}
          content={alertState.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
      </ReviewDriverContainer>
    </Container>
  )
}

export const ReviewDriver = (props) => {
  const reviewDriverProps = {
    ...props,
    UIComponent: ReviewDriverUI,
    isToast: true
  }

  return <ReviewDriverController {...reviewDriverProps} />
}

export default ReviewDriver
