import React from 'react'
import { BusinessReviews as BusinessReviewController } from 'ordering-components'

import { ReviewOf, Content } from './styles'
import { Input } from '../../styles/Inputs'
export const BusinessReviewsUI = (props) => {
  const { businessName, stars, reviewsList } = props
  return (
    <>
      <ReviewOf>
        <h3>Reviews of {businessName}</h3>
        <Input placeholder='Date' />
        <Input placeholder='Star' />
      </ReviewOf>
      <Content>
        <h3>stars {stars}</h3>
        {reviewsList.reviews.map((review, i) => (
          <div key={i} style={{ display: 'flex' }}>
            <h4>Nombre?</h4>
            stars: {review.total}
            <p>{review.comment}</p>
          </div>
        ))}
      </Content>
    </>
  )
}

export const BusinessReviews = (props) => {
  const BusinessReviewProps = {
    ...props,
    UIComponent: BusinessReviewsUI
  }
  return <BusinessReviewController {...BusinessReviewProps} />
}
