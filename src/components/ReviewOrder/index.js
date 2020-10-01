import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { OrderReview as ReviewOrderController, useLanguage } from 'ordering-components'
import { ReviewOrderContainer, Reviews, Categories, Category, Stars, Comments, Send } from './styles'
import { Alert } from '../Confirm'
import { AiFillStar } from 'react-icons/ai'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

const ReviewOrderUI = (props) => {
  const { stars, handleChangeInput, handleChangeRating, handleSendReview, formState } = props
  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [hover, setHover] = useState(stars)
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        success: false,
        content: formState.result?.result || [t('ERROR')]
      })
    }
    if (!formState.loading && !formState.result?.error && alertState.success) {
      setAlertState({
        ...alertState,
        open: true,
        title: t('REVIEW_SUCCESS'),
        content: t('REVIEW_SUCCESS')
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
        <input type='radio' name={name} value={i + 1} onClick={(e) => handleChangeRating(e)} />
        <AiFillStar color={(i + 1) <= (hover[name] || stars[name]) ? 'yellow' : 'gray'} size={25} onMouseEnter={() => setHover({ [name]: (i + 1) })} />
      </label>
    ))
  )
  return (
    <ReviewOrderContainer onSubmit={handleSubmit(onSubmit)}>
      <Reviews>
        <h2>Reviews:</h2>
        <Categories>
          <Category onMouseLeave={() => setHover(stars)}>
            <p>Quality of Product:</p>
            <Stars>
              <StarsComponent name='quality' />
            </Stars>
          </Category>
          <Category onMouseLeave={() => setHover(stars)}>
            <p>Punctuality:</p>
            <Stars>
              <StarsComponent name='punctiality' />
            </Stars>
          </Category>
          <Category onMouseLeave={() => setHover(stars)}>
            <p>Service:</p>
            <Stars>
              <StarsComponent name='service' />
            </Stars>
          </Category>
          <Category onMouseLeave={() => setHover(stars)}>
            <p>Product Packaging:</p>
            <Stars>
              <StarsComponent name='packaging' />
            </Stars>
          </Category>
        </Categories>
      </Reviews>
      <Comments>
        <h2>Comments:</h2>
        <Input
          placeholder='Comments' name='comments' onChange={(e) => handleChangeInput(e)} ref={register({
            required: 'The field comments is required'
          })}
        />
      </Comments>
      <Send>
        <Button color='primary' type='submit'>Send a Review</Button>
      </Send>
      <Alert
        title={t('ORDER REVIEW')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
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
