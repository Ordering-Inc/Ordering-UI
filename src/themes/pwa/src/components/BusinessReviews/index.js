import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessReviews as BusinessReviewController, useLanguage } from 'ordering-components'
import { useTheme } from '../../../../../contexts/ThemeContext'
import moment from 'moment'

import {
  BusinessReviewsContainer,
  ReviewOf,
  Content,
  Review,
  ReviewsNotFound,
  SkeletonContainer,
  ReviewsHeaderWrapper,
  ReviewsProgressWrapper,
  ReviewsProgressContent,
  ReviewsProgressBar,
  ReviewsMarkPoint,
  ReviewTime,
  ReviewItemHeader,
  ReviewItemContent,
  SearchContainer
} from './styles'

import BsFillStarFill from '@meronex/icons/bs/BsFillStarFill'

export const BusinessReviewsUI = (props) => {
  const { stars, reviewsList, handleClickOption } = props
  const [, t] = useLanguage()
  const [theme] = useTheme()

  const handleOnChange = (evt) => {
    if (evt.target.value === '') handleClickOption('all')
    else handleClickOption(evt.target.value)
  }

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
            <ReviewsHeaderWrapper noReviews={reviewsList?.reviews.length === 0}>
              {
                !reviewsList.loading ? (
                  <>
                    <BsFillStarFill />
                    <h2>{`${stars} (${reviewsList?.reviews.length} ${t('REVIEWS', 'Reviews')})`}</h2>
                  </>
                ) : (
                  <Skeleton width={100} height={30} />
                )
              }
            </ReviewsHeaderWrapper>
            <ReviewOf>
              {!reviewsList.loading
                ? (
                  <SearchContainer>
                    <input
                      type='number'
                      min='1'
                      max='5'
                      onChange={handleOnChange}
                      placeholder={t('SEARCH', 'Search')}
                      style={{ backgroundImage: `url(${theme?.images?.general?.searchIcon})` }}
                    />
                  </SearchContainer>
                )
                : <Skeleton width={200} height={30} />}
            </ReviewOf>
            <ReviewsProgressWrapper>
              <p>{t('REVIEW_ORDER', 'Review order')}</p>
              <ReviewsProgressContent>
                <ReviewsProgressBar style={{ width: `${(stars / 5) * 100}%` }} />
                <ReviewsMarkPoint style={{ left: '0' }}>{t('TERRIBLE', 'Terrible')}</ReviewsMarkPoint>
                <ReviewsMarkPoint style={{ left: '25%' }}>{t('BAD', 'Bad')}</ReviewsMarkPoint>
                <ReviewsMarkPoint style={{ left: '50%' }}>{t('OKAY', 'Okay')}</ReviewsMarkPoint>
                <ReviewsMarkPoint style={{ left: '75%' }}>{t('GOOD', 'Good')}</ReviewsMarkPoint>
                <ReviewsMarkPoint style={{ right: '0' }}>{t('GREAT', 'Great')}</ReviewsMarkPoint>
              </ReviewsProgressContent>
            </ReviewsProgressWrapper>
            <Content id='content'>
              {!reviewsList.loading ? reviewsList?.reviews.map((review) => (
                <Review key={review.id} id='review'>
                  <ReviewItemHeader>
                    <ReviewTime>{moment(review?.created_at).format('LLL')}</ReviewTime>
                  </ReviewItemHeader>
                  <ReviewItemContent>{review?.comment}</ReviewItemContent>
                </Review>
              )) : (
                <>
                  {[...Array(2)].map((item, i) => (
                    <SkeletonContainer key={i}>
                      <div>
                        <Skeleton width={100} height={30} />
                        <Skeleton width={100} />
                      </div>
                      <div>
                        <Skeleton width={150} height={50} />
                      </div>
                    </SkeletonContainer>
                  ))}

                </>
              )}
              {!reviewsList.loading && reviewsList?.reviews.length === 0 && (
                <ReviewsNotFound>{t('NO_REVIEWS', 'No reviews')}</ReviewsNotFound>
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
