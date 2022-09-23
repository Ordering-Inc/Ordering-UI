import React from 'react'
import { InfoCircle, Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import { useSession } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { SingleProfessionalCard as SingleProfessionalCardController } from './naked'
import {
  Container,
  UserPhoto,
  InfoWrapper,
  ActionWrapper
} from './styles'

const SingleProfessionalCardUI = (props) => {
  const {
    professional,
    isSkeleton,
    handleFavoriteProfessional
  } = props

  const [{ auth }] = useSession()

  const handleChangeFavorite = () => {
    if (auth) {
      handleFavoriteProfessional && handleFavoriteProfessional(!professional?.favorite)
    }
  }

  return (
    <Container>
      {isSkeleton ? (
        <Skeleton style={{ width: '86px', height: '86px' }} />
      ) : (
        <UserPhoto bgimage={professional?.photo} />
      )}
      <InfoWrapper>
        <h4>{isSkeleton ? <Skeleton height={18} width={120} /> : <>{professional?.name} {professional?.last_name}</>}</h4>
        {isSkeleton ? <Skeleton height={15} width={80} /> : <>{professional?.occupation && <p>{professional?.occupation}</p>}</>}
        <ActionWrapper>
          {isSkeleton ? (
            <>
              <Skeleton width={16} height={16} />
              <Skeleton width={16} height={16} style={{ margin: '0px 7px' }} />
            </>
          ) : (
            <>
              <InfoCircle />
              <span onClick={() => handleChangeFavorite()}>
                {professional?.favorite ? <Like /> : <DisLike />}
              </span>
            </>
          )}
        </ActionWrapper>
      </InfoWrapper>
    </Container>
  )
}

export const SingleProfessionalCard = (props) => {
  const singleProfessionalCardProps = {
    ...props,
    UIComponent: SingleProfessionalCardUI
  }
  return <SingleProfessionalCardController {...singleProfessionalCardProps} />
}
