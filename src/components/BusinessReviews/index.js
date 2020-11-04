import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessReviews as BusinessReviewController, useLanguage } from 'ordering-components'

import { ReviewOf, Content, ReviewContainer, Comments, ReviewsNotFound, Comment, Scores, ScoreDiv, SkeletonContainer } from './styles'
import { Select } from '../../styles/Select'

import AiOutlineStar from '@meronex/icons/ai/AiOutlineStar'

const Score = ({ star, text }) => (
  <ScoreDiv>
    <span>
      <AiOutlineStar color='#D81212' /> {star}
    </span>
    <p>{text}</p>
  </ScoreDiv>
)

export const BusinessReviewsUI = (props) => {
  const { businessName, stars, reviewsList, handleClickOption } = props
  const [, t] = useLanguage()
  const values = ['all', 1, 2, 3, 4, 5]
  const options = reviewsList.loading ? [] : values.map(value => {
    if (value === 'all') {
      return {
        value: value,
        content: value.toUpperCase(),
        showOnSelected: value.toUpperCase()
      }
    } else {
      return {
        value: value,
        content: value,
        showOnSelected: value
      }
    }
  })
  return (
    <>
      {reviewsList.error ? <h2>{t('ERROR_UNKNOWN', 'An error has ocurred')}</h2> : (
        <>
          <ReviewOf>
            {!reviewsList.loading ? <h3>{t('REVIEWS_OF', 'Reviews of')} {businessName}</h3> : <Skeleton width={200} />}
            {!reviewsList.loading ? <Select options={options} defaultValue={options[0].value} onChange={(val) => handleClickOption(val)} notAsync InitialIcon={AiOutlineStar} /> : <Skeleton width={200} height={30} />}
          </ReviewOf>
          <Content>
            <h3>{!reviewsList.loading ? <><AiOutlineStar color='#D81212' />{stars}</> : <Skeleton width={100} height={30} />}</h3>
            {!reviewsList.loading ? reviewsList?.reviews.map((review) => (
              <ReviewContainer key={review.id}>
                <Comments>
                  <div>
                    <h4>{t('REVIEW_COMMENT', 'Name of user')}</h4>
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
            )) : (
              <>
                {[...Array(2)].map((item, i) => (
                  <SkeletonContainer key={i}>
                    <div>
                      <Skeleton width={100} height={30} />
                      <Skeleton width={100} />
                      <Skeleton width={100} />
                    </div>
                    <div>
                      <Skeleton width={150} height={50} />
                      <Skeleton width={150} height={50} />
                      <Skeleton width={150} height={50} />
                      <Skeleton width={150} height={50} />
                    </div>
                  </SkeletonContainer>
                ))}

              </>
            )}
            {!reviewsList.loading && reviewsList?.reviews.length === 0 && (
              <ReviewsNotFound>{t('REVIEWS_NOT_FOUND', 'Reviews Not Found')}</ReviewsNotFound>
            )}
          </Content>
        </>
      )}
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
