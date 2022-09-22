import React from 'react'
import { useUtils, useLanguage, ProfessionalInfo as ProfessionalInfoController } from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import Skeleton from 'react-loading-skeleton'
import {
  Container,
  PhotoWrapper,
  ProfessionalPhoto,
  InfoWrapper,
  OccupationWrapper,
  Description,
  Divider,
  ReviewWrapper,
  ReviewItemContatiner,
  ReviewQualityContainer,
  ReviewBarContainer,
  ReviewQualityTextContainer,
  Comment,
  ReviewBar,
  NotReviewed
} from './styles'

const ProfessionalInfoUI = (props) => {
  const {
    userState,
    userReviewState
  } = props

  const [{ optimizeImage }] = useUtils()
  const [, t] = useLanguage()

  const getReviewPercent = (quality) => {
    switch (quality) {
      case 1:
        return 0
      case 2:
        return 25
      case 3:
        return 50
      case 4:
        return 75
      case 5:
        return 100
      default:
        return quality / 5 * 100
    }
  }

  return (
    <Container>
      <PhotoWrapper>
        {userState?.loading ? (
          <Skeleton
            width={250}
            height={250}
          />
        ) : (
          <>
            {userState?.user?.photo ? (
              <ProfessionalPhoto
                bgimage={optimizeImage(userState?.user?.photo, 'h_200,c_limit')}
              />
            ) : <FaUserAlt />}
          </>
        )}
      </PhotoWrapper>
      <InfoWrapper>
        <h2>{userState?.loading ? <Skeleton width={120} height={20} /> : userState?.user?.name}</h2>
        <OccupationWrapper>
          {userState?.loading ? <Skeleton width={100} height={15} /> : <p>{userState?.user?.occupation?.name}</p>}
        </OccupationWrapper>
        {userState?.user?.occupation?.description && (
          <Description>{userState?.user?.occupation?.description}</Description>
        )}
      </InfoWrapper>
      <Divider />
      <ReviewWrapper>
        <h2>{t('REVIEWS', 'Reviews')}</h2>
        {userReviewState.loading ? (
          [...Array(5).keys()].map(i => (
            <ReviewItemContatiner key={i}>
              <ReviewQualityContainer>
                <ReviewBarContainer>
                  <Skeleton height={10} />
                </ReviewBarContainer>
              </ReviewQualityContainer>
              <ReviewQualityTextContainer>
                <p><Skeleton width={40} /></p>
                <p><Skeleton width={40} /></p>
                <p><Skeleton width={40} /></p>
                <p><Skeleton width={40} /></p>
                <p><Skeleton width={40} /></p>
              </ReviewQualityTextContainer>
              <Comment>
                <div><Skeleton width={300} /></div>
                <div><Skeleton width={200} /></div>
              </Comment>
            </ReviewItemContatiner>
          ))
        ) : (
          userReviewState?.reviews.map(review => (
            <ReviewItemContatiner key={review?.id}>
              <ReviewQualityContainer>
                <ReviewBarContainer>
                  <ReviewBar
                    percentage={getReviewPercent(review?.qualification)}
                  />
                </ReviewBarContainer>
                <ReviewQualityTextContainer>
                  <p>{t('TERRIBLE', 'Terrible')}</p>
                  <p>{t('BAD', 'Bad')}</p>
                  <p>{t('OKAY', 'Okay')}</p>
                  <p>{t('GOOD', 'Good')}</p>
                  <p>{t('GREAT', 'Great')}</p>
                </ReviewQualityTextContainer>
              </ReviewQualityContainer>
              <Comment>{review?.comment}</Comment>
            </ReviewItemContatiner>
          ))
        )}

        {!userReviewState.loading && userReviewState.reviews.length === 0 && (
          <NotReviewed>
            {t('ERROR_REVIEW_FIND', 'The review does not exist.')}
          </NotReviewed>
        )}
      </ReviewWrapper>
    </Container>
  )
}

export const ProfessionalInfo = (props) => {
  const professionalInfoProps = {
    ...props,
    UIComponent: ProfessionalInfoUI
  }
  return <ProfessionalInfoController {...professionalInfoProps} />
}
