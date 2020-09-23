import React, { useState, useEffect } from 'react'
import { BusinessReviews as BusinessReviewController } from 'ordering-components'

import { ReviewOf, Content, ReviewContainer, Comments, Comment, Scores, ScoreDiv } from './styles'
import { Select } from '../../styles/Select'

import { AiOutlineStar, AiOutlineCalendar } from 'react-icons/ai'

const Score = ({ star, text }) => (
  <ScoreDiv>
    <AiOutlineStar color='#D81212' /> {star}
    <p>{text}</p>
  </ScoreDiv>
)

export const BusinessReviewsUI = (props) => {
  const { businessName, stars, reviewsList } = props

  const [actualReviews, setActualReviews] = useState(reviewsList.reviews)

  useEffect(() => {
    if (reviewsList.reviews) {
      const reviews = reviewsList.reviews.length &&
      reviewsList.reviews.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })
      setActualReviews(reviews)
    }
  }, [])

  useEffect(() => {
    setActualReviews(reviewsList.reviews)
  }, [reviewsList.reviews])

  console.log(reviewsList)
  const onChangeOption = (val = null) => {
    const reviews = val !== 'All' ? reviewsList.reviews.filter(review => (review.total >= val) && (review.total < val + 1))
      : reviewsList.reviews

    setActualReviews(reviews)
  }
  const puntajes = ['All', 1, 2, 3, 4, 5]
  const options = puntajes.map(puntaje => {
    return {
      value: puntaje,
      content: puntaje,
      showOnSelected: puntaje
    }
  })
  return (
    <>
      {!reviewsList.loading ? (
        <>
          <ReviewOf>
            <h3>Reviews of {businessName}</h3>
            <Select placeholder='Date' />
            <Select options={options} defaultValue={puntajes[0]} onChange={(val) => onChangeOption(val)} />
          </ReviewOf>
          <Content>
            <h3><AiOutlineStar color='#D81212' /> {stars}</h3>
            {actualReviews.map((review) => (
              <ReviewContainer key={review.id}>
                <Comments>
                  <div>
                    <h4>Nombre?</h4>
                  </div>
                  <div>
                    <p><AiOutlineStar color='#D81212' /> {review.total}</p>
                  </div>
                  <Comment>
                    <p title={review.comment}>{review.comment}</p>
                  </Comment>
                </Comments>
                <Scores>
                  <Score star={review.quality} text='Quality of products' />
                  <Score star={review.delivery} text='Punctuality' />
                  <Score star={review.service} text='Service' />
                  <Score star={review.package} text='Product Packaging' />
                </Scores>
              </ReviewContainer>
            ))}
          </Content>
        </>
      ) : 'laading'}
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
