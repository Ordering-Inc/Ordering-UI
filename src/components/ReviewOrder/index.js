import React, { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'

import { OrderReview as ReviewOrderController, useLanguage } from 'ordering-components'
import { ReviewOrderContainer, Reviews, Categories, Category, Stars, Comments, Send } from './styles'
import { Alert } from '../Confirm'
import AiFillStar from '@meronex/icons/ai/AiFillStar'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { ThemeContext } from 'styled-components'

const ReviewOrderUI = (props) => {
  const { stars, handleChangeInput, handleChangeRating, handleSendReview, formState } = props
  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [hover, setHover] = useState(stars)
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })
  const { colors } = useContext(ThemeContext)

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
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const StarsComponent = ({ name }) => (
    [...Array(5)].map((star, i) => (
      <label key={i} onMouseLeave={() => setHover(stars)}>
        <input
          type='radio'
          name={name}
          value={i + 1}
          onClick={(e) => handleChangeRating(e)}
        />
        <AiFillStar color={(i + 1) <= (hover[name] || stars[name]) ? colors.primary : 'gray'} size={25} onMouseEnter={() => setHover({ [name]: (i + 1) })} />
      </label>
    ))
  )
  return (
    <ReviewOrderContainer onSubmit={handleSubmit(onSubmit)}>
      <Reviews>
        <h2>{t('REVIEWS', 'Reviews')}:</h2>
        <Categories>
          <Category onMouseLeave={() => setHover(stars)}>
            <p>{t('QUALITY', 'Quality of Product')}:</p>
            <Stars>
              <StarsComponent name='quality' />
            </Stars>
          </Category>
          <Category onMouseLeave={() => setHover(stars)}>
            <p>{t('PUNCTUALITY', 'Punctuality')}:</p>
            <Stars>
              <StarsComponent name='punctiality' />
            </Stars>
          </Category>
          <Category onMouseLeave={() => setHover(stars)}>
            <p>{t('SERVICE', 'Service')}:</p>
            <Stars>
              <StarsComponent name='service' />
            </Stars>
          </Category>
          <Category onMouseLeave={() => setHover(stars)}>
            <p>{t('PRODUCT_PACKAGING', 'Product Packaging')}:</p>
            <Stars>
              <StarsComponent name='packaging' />
            </Stars>
          </Category>
        </Categories>
      </Reviews>
      <Comments>
        <h2>{t('COMMENTS', 'Comments')}:</h2>
        <Input
          placeholder={t('COMMENTS', 'Comments')}
          name='comments'
          onChange={(e) => handleChangeInput(e)}
          ref={register({
            required: t('FIELD_COMMENT_REQUIRED', 'The field comments is required')
          })}
          autoComplete='off'
        />
      </Comments>
      <Send>
        <Button color='primary' type='submit'>{t('SEND_REVIEW', 'Send a Review')}</Button>
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
  )
}

export const ReviewOrder = (props) => {
  const ReviewOrderProps = {
    ...props,
    UIComponent: ReviewOrderUI
  }

  return <ReviewOrderController {...ReviewOrderProps} />
}
