import React, { useState, useEffect } from 'react'
import { useLanguage, ReviewProduct as ReviewProductController } from 'ordering-components'
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
  CommentsList,
  WrapperProductLogo,
  ProductLogo
} from './styles'
import AiOutlineLike from '@meronex/icons/ai/AiOutlineLike'
import AiOutlineDislike from '@meronex/icons/ai/AiOutlineDislike'
import MdClose from '@meronex/icons/md/MdClose'
import BsArrowRight from '@meronex/icons/bs/BsArrowRight'
import { TextArea } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'
import { reviewCommentList } from '../../../../../utils'
import { useTheme } from 'styled-components'

const SingleProductReview = (props) => {
  const {
    product,
    handleChangeFormState,
    formState
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [isLike, setIsLike] = useState(true)
  const [isExtraComment, setIsExtraComment] = useState(false)
  const [comments, setComments] = useState([])
  const [extraComment, setExtraComment] = useState('')
  const [currentValue, setCurrentValue] = useState(5)

  const commentsList = reviewCommentList('product')

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
    const value = isLike ? 5 : 1
    setCurrentValue(value)
    if (value !== currentValue) setComments([])
    if (comments?.length === 0 && !extraComment && formState.changes?.length === 0 && isLike) return
    let _comments = ''
    if (comments.length > 0) {
      comments.map(comment => (_comments += comment.content + '. '))
    }
    const _comment = _comments + extraComment
    let found = false
    const _changes = formState.changes.map(item => {
      if (item?.product_id === product?.product_id) {
        found = true
        return {
          product_id: product?.product_id,
          comment: _comment,
          qualification: isLike ? 5 : 1
        }
      }
      return item
    })
    if (!found) {
      _changes.push({
        product_id: product?.product_id,
        comment: _comment,
        qualification: isLike ? 5 : 1
      })
    }
    handleChangeFormState && handleChangeFormState(_changes)
  }, [comments, extraComment, isLike])

  return (
    <SingleProductReviewContainer>
      {(product?.images || theme.images?.dummies?.businessLogo) && (
        <WrapperProductLogo>
          <ProductLogo bgimage={product?.images || theme.images?.dummies?.businessLogo} />
        </WrapperProductLogo>
      )}
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
          commentsList[isLike ? 'like' : 'dislike']?.map((commentItem, i) => (
            <ButtonCustomized
              key={i}
              type='button'
              active={isSelectedComment(commentItem.key)}
              onClick={() => handleChangeComment(commentItem)}
              initialIcon
            >
              {commentItem.content}
              {
                isSelectedComment(commentItem.key) && <MdClose />
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
      setIsProductReviewed && setIsProductReviewed(true)
      closeReviewProduct && closeReviewProduct()
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
        {order?.products && order.products.length > 0 && order?.products.map(productsOrder => (
          productsOrder?.length ?  productsOrder?.map((product, i) => !product?.deleted && (
             <SingleProductReview
              {...props}
              key={i}
              product={product}
            />
          )) : !productsOrder?.deleted && (
            <SingleProductReview
              {...props} 
              key={productsOrder?.id}
              product={productsOrder}
            />
          )
        ))}
        <ActionBlock>
          <span onClick={closeReviewProduct}>{t('SKIP', 'Skip')}</span>
          <Button
            color={!formState.loading ? 'primary' : 'secondary'}
            type='submit'
            disabled={formState.loading || formState?.changes?.length === 0}
            className='review-sent'
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
    UIComponent: ReviewProductUI,
    isToast: true
  }
  return <ReviewProductController {...reviewProductProps} />
}

export default ReviewProduct
