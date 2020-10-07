import React from 'react'
import { BusinessReviews as BusinessReviewController, useLanguage } from 'ordering-components'

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
  const { businessName, stars, reviewsList, handleClickOption } = props
  const [, t] = useLanguage()
  const puntajes = [1, 2, 3, 4, 5]
  const _options = reviewsList.loading ? [] : puntajes.map(puntaje => {
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
            <Select options={_options} defaultValue={puntajes[puntajes.length - 1]} onChange={(val) => handleClickOption(val)} notAsync InitialIcon={AiOutlineStar} />
          </ReviewOf>
          <Content>
            <h3><AiOutlineStar color='#D81212' />{stars}</h3>
            {reviewsList?.reviews.map((review) => (
              <ReviewContainer key={review.id}>
                <Comments>
                  <div>
                    <p><AiOutlineStar color='#D81212' /> {review.total}</p>
                  </div>
                  <Comment>
                    <p title={review.comment}>{review.comment}</p>
                  </Comment>
                </Comments>
                <Scores>
                  <Score star={review.quality} text={t('QUALITY_OF_PRODUCTS', 'Quality of products')} />
                  <Score star={review.delivery} text={t('PUNCTUALITY', 'Punctuality')} />
                  <Score star={review.service} text={t('SERVICE', 'Service')} />
                  <Score star={review.package} text={t('PRODUCT_PACKAGING', 'Product Packaging')} />
                </Scores>
              </ReviewContainer>
            ))}
          </Content>
        </>
      ) : 'loading'}
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
