import React, { useState } from 'react'
import { OrderReview as ReviewOrderController } from 'ordering-components'
import { ReviewOrderContainer, Reviews, Categories, Category, Stars, Comments,Send } from './styles'
import { Modal } from '../Modal'
import { AiFillStar } from 'react-icons/ai'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
 
const ReviewOrderUI = (props) => {
  const { open } = props
  const [reviewOpen, setReviewOpen] = useState(open)
  const [rating, setRating] = useState(0)

  const StarsComponent = () => (
    [...Array(5)].map((star, i) => (
      <label key={i}>
        <input type='radio' name='rating' value={i + 1} onClick={() => setRating(i + 1)} />
        <AiFillStar color={(i + 1) <= rating ? 'yellow' : 'gray'} size={25} />
      </label>
    ))
  )

  return (
    <Modal open={reviewOpen} onClose={() => setReviewOpen(false)} closeOnBackdrop={false} title='Write a Review'>
      <ReviewOrderContainer>
        <Reviews>
          <h2>Reviews:</h2>
          <Categories>
            <Category>
              <p>Quality of Product:</p>
              <Stars>
                <StarsComponent name='rating' />
              </Stars>
            </Category>
            <Category>
              <p>Punctuality:</p>
              <Stars>
                <StarsComponent name='rating' />
              </Stars>
            </Category>
            <Category>
              <p>Service:</p>
              <Stars>
                <StarsComponent name='rating' />
              </Stars>
            </Category>
            <Category>
              <p>Product Packaging:</p>
              <Stars>
                <StarsComponent name='rating' />
              </Stars>
            </Category>
          </Categories>
        </Reviews>
        <Comments>
          <Category>
            <h2>Comments:</h2>
            <Input placeholder='Comments' />
          </Category>
        </Comments>
        <Send>
          <Button color='primary'>Send a Review</Button>
        </Send>
      </ReviewOrderContainer>
    </Modal>
  )
}

export const ReviewOrder = (props) => {
  const ReviewOrderProps = {
    ...props,
    UIComponent: ReviewOrderUI
  }

  return <ReviewOrderController {...ReviewOrderProps} />
}
