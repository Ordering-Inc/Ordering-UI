import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { BusinessReviews as BusinessReviewController, useLanguage, useOrderingTheme } from 'ordering-components'
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
  const [orderingTheme] = useOrderingTheme()
  const handleOnChange = (evt) => {
    if (evt.target.value === '') handleClickOption('all')
    else handleClickOption(evt.target.value)
  }

  const showRanking = !orderingTheme?.theme?.business_view?.components?.reviews?.components?.ranking?.hidden
  const showReviewDate = !orderingTheme?.theme?.business_view?.components?.reviews?.components?.review_date?.hidden
  const showCustomerComments = !orderingTheme?.theme?.business_view?.components?.reviews?.components?.customer_comments?.hidden
  const showSearch = !orderingTheme?.theme?.business_view?.components?.reviews?.components?.search?.hidden
  const hideElement = !(!showReviewDate && !showCustomerComments)

  const reviewPoints = [t('TERRIBLE', 'Terrible'), t('BAD', 'Bad'), t('OKAY', 'Okay'), t('GOOD', 'Good'), t('GREAT', 'Great')]

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
            {showSearch && (
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
            )}
            {showRanking && (
              <ReviewsProgressWrapper>
                <p>{t('CUSTOMER_REVIEWS', 'Customers reviews')}</p>
                <ReviewsProgressContent>
                  <ReviewsProgressBar style={{ width: `${(stars / 5) * 100}%` }} />
                  {reviewPoints.map((reviewPoint, i) => {
                    const isLastReviewPoint = i === reviewPoints?.length - 1
                    return (
                      <ReviewsMarkPoint
                        key={i}
                        style={{
                          left: theme.rtl !== isLastReviewPoint ? 'initial' : `${25 * (isLastReviewPoint ? 0 : i)}%`,
                          right: theme.rtl !== isLastReviewPoint ? `${25 * (isLastReviewPoint ? 0 : i)}%` : 'initial'
                        }}
                      >
                        {reviewPoint}
                      </ReviewsMarkPoint>
                    )
                  })}
                </ReviewsProgressContent>
              </ReviewsProgressWrapper>
            )}
            {hideElement && (
              <Content id='content'>
                {!reviewsList.loading ? reviewsList?.reviews.map((review) => (
                  <Review key={review.id} id='review'>
                    {showReviewDate && (
                      <ReviewItemHeader>
                        <ReviewTime>{moment(review?.created_at).format('LLL')}</ReviewTime>
                      </ReviewItemHeader>
                    )}
                    {showCustomerComments && (
                      <ReviewItemContent>{review?.comment}</ReviewItemContent>
                    )}
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
            )}

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
