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

  const puntajes = ['All', 1, 2, 3, 4, 5]
  const _options = reviewsList.loading ? [] : puntajes.map(puntaje => {
    return {
      value: puntaje,
      content: puntaje,
      showOnSelected: puntaje
    }
  })
  const [, t] = useLanguage()
  return (
    <>
      {!reviewsList.loading ? (
        <>
          <ReviewOf>
            <h3>{t('REVIEWS_OF', 'Reviews of')} {businessName}</h3>
            <Select placeholder={t('DATE', 'Date')} />
            <Select options={_options} defaultValue={puntajes[0]} onChange={(val) => handleClickOption(val)} />
          </ReviewOf>
          <Content>
            <h3><AiOutlineStar color='#D81212' />{stars}</h3>
            {reviewsList?.reviews.map((review) => (
              <ReviewContainer key={review.id}>
                <Comments>
                  <div>
                    <h4>{t('REVIEW_COMMENT', 'Nombre?')}</h4>
                  </div>
                  <div>
                    <p><AiOutlineStar color='#D81212' /> {review.total}</p>
                  </div>
                  <Comment>
                    <p title={review.comment}>{review.comment}</p>
                  </Comment>
                </Comments>
                <Scores>
                  <Score star={review.quality} text={t('REVIEW_QUALITY', 'Quality of products')} />
                  <Score star={review.delivery} text={t('REVIEW_PUNCTUALITY', 'Punctuality')} />
                  <Score star={review.service} text={t('REVIEW_SERVICE', 'Service')} />
                  <Score star={review.package} text={t('REVIEW_PRODUCT_PACKAGING', 'Product Packaging')} />
                </Scores>
              </ReviewContainer>
            ))}
          </Content>
        </>
      ) : t('LOADING', 'loading')}
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
