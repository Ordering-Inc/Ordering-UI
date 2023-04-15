import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useUtils,
  ReviewCustomer as ReviewCustomerController
} from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import MdClose from '@meronex/icons/md/MdClose'
import { useTheme } from 'styled-components'
import { Button, TextArea } from '../../../styles'
import { Alert } from '../../Shared'

import { reviewCommentList } from '../../../../../../utils'

import {
  ReviewContainer,
  PhotoWrapper,
  Photo,
  CustomerName,
  ReviewsProgressWrapper,
  ReviewsProgressContent,
  ReviewsProgressBar,
  ReviewsMarkPoint,
  CommentsList,
  CommentButton,
  Comments
} from './styles'

const ReviewCustomerUI = (props) => {
  const {
    customer,
    reviewState,
    setReviewState,
    actionState,
    handleSendCustomerReview
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [comments, setComments] = useState([])
  const [extraComment, setExtraComment] = useState('')

  const qualificationList = [
    { key: 1, text: t('TERRIBLE', 'Terrible'), middleNode: false, left: 0, right: 'initial' },
    { key: 2, text: t('BAD', 'Bad'), middleNode: true, left: '25%', right: '75%' },
    { key: 3, text: t('OKAY', 'Okay'), middleNode: true, left: '50%', right: '50%' },
    { key: 4, text: t('GOOD', 'Good'), middleNode: true, left: '75%', right: '25%' },
    { key: 5, text: t('GREAT', 'Great'), middleNode: false, left: 'initial', right: 0 }
  ]

  const commentsList = reviewCommentList(1)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }
  const handleChangeQualification = (index) => {
    if (index) setReviewState({ ...reviewState, qualification: index, comment: '' })
    setComments([])
  }

  const isSelectedComment = (commentKey) => {
    const found = comments.find((comment) => comment?.key === commentKey)
    return found
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

  useEffect(() => {
    let _comments = ''
    if (comments.length > 0) {
      comments.map(comment => (_comments += comment.content + '. '))
    }
    const _comment = _comments + extraComment
    setReviewState({ ...reviewState, comment: _comment })
  }, [comments, extraComment])

  useEffect(() => {
    if (!actionState.error) return
    setAlertState({
      open: true,
      content: actionState.error
    })
  }, [actionState.error])

  return (
    <>
      <ReviewContainer>
        <h1>{t('REVIEW_CUSTOMER', 'Review customer')}</h1>
        <PhotoWrapper>
          {customer?.photo ? (
            <Photo bgimage={optimizeImage(customer?.photo, 'h_150,c_limit')} />
          ) : (
            <FaUserAlt />
          )}
        </PhotoWrapper>
        <CustomerName>{customer?.name} {customer?.middle_name} {customer?.lastname} {customer?.second_lastname}</CustomerName>

        <ReviewsProgressWrapper>
          <p>{t('HOW_WAS_THE_DELIVERY', 'How was the delivery?')}</p>
          <ReviewsProgressContent>
            <ReviewsProgressBar style={{ width: `${(reviewState?.qualification === 0 ? 0 : (reviewState?.qualification - 1) / 4) * 100}%` }} />
            {
              qualificationList?.map(qualification => (
                <ReviewsMarkPoint
                  key={qualification?.key}
                  style={{
                    left: theme?.rtl ? (qualification?.middleNode ? 'initial' : qualification?.right) : qualification?.left,
                    right: theme?.rtl ? qualification?.left : (qualification?.middleNode ? 'initial' : qualification?.right)
                  }}
                  active={reviewState?.qualification === qualification?.key}
                  pass={reviewState?.qualification >= qualification?.key}
                  className={qualification?.middleNode ? 'mark-point' : ''}
                  onClick={() => handleChangeQualification(qualification?.key)}
                >
                  <span>{qualification?.text}<span /></span>
                </ReviewsMarkPoint>
              ))
            }
          </ReviewsProgressContent>
        </ReviewsProgressWrapper>
        <CommentsList>
          <p>{commentsList[reviewState?.qualification || 1]?.title}</p>
          {
            commentsList[reviewState?.qualification || 1]?.list?.map((commentItem, i) => (
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
        <Comments>
          <p>{t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')}</p>
          <TextArea
            name='comments'
            value={extraComment}
            onChange={(e) => setExtraComment(e.target.value)}
            autoComplete='off'
          />
        </Comments>
        <Button
          borderRadius='8px'
          color='primary'
          onClick={() => handleSendCustomerReview()}
          disabled={actionState.loading}
        >
          {t('SEND_REVIEW', 'Send review')}
        </Button>
      </ReviewContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const ReviewCustomer = (props) => {
  const reviewProps = {
    ...props,
    UIComponent: ReviewCustomerUI
  }
  return <ReviewCustomerController {...reviewProps} />
}
