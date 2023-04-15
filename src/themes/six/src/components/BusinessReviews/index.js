import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessReviews as BusinessReviewController, useLanguage } from 'ordering-components'

import { BusinessReviewsContainer, ReviewOf, WrapperStars, Content, ReviewContainer, Comments, ReviewsNotFound, Comment, ScoresContainer, Scores, ScoreDiv, SkeletonContainer, TotalStar } from './styles'
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
        content: t('ALL','ALL'),
        showOnSelected: t('ALL','ALL')
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
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <BusinessReviewsContainer>
        {reviewsList.error ? <h2>{t('ERROR_UNKNOWN', 'An error has ocurred')}</h2> : (
          <>
            <ReviewOf>
              {!reviewsList.loading ? <h2>{t('REVIEWS_OF', 'Reviews of')} {businessName}</h2> : <Skeleton width={200} />}
              <WrapperStars>
                {!reviewsList.loading ? <h3><AiOutlineStar color='#D81212' />{stars}</h3> : <Skeleton width={100} height={30} />}
                {!reviewsList.loading
                  ? (
                    <span>
                      <Select
                        name='desktop'
                        options={options}
                        defaultValue={options[0].value}
                        onChange={(val) => handleClickOption(val)}
                        notAsync
                        InitialIcon={AiOutlineStar}
                      />
                    </span>
                  )
                  : <Skeleton width={200} height={30} />}
              </WrapperStars>
            </ReviewOf>
            <Content id='content'>
              {!reviewsList.loading ? reviewsList?.reviews.map((review) => (
                <div key={review.id} id='review'>
                  <ReviewContainer>
                    <Comments>
                      <TotalStar>
                        <AiOutlineStar color='#D81212' /> {review.total}
                      </TotalStar>
                      <Comment>
                        <p title={review.comment}>{review.comment}</p>
                      </Comment>
                    </Comments>
                  </ReviewContainer>
                  <ScoresContainer>
                    <Scores>
                      <Score star={review.quality} text={t('REVIEW_QUALITY', 'Quality of products')} />
                      <Score star={review.delivery} text={t('REVIEW_PUNCTUALITY', 'Punctuality')} />
                      <Score star={review.service} text={t('REVIEW_SERVICE', 'Service')} />
                      <Score star={review.package} text={t('REVIEW_PRODUCT_PACKAGING', 'Product Packaging')} />
                    </Scores>
                  </ScoresContainer>
                </div>
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
      </BusinessReviewsContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
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
