import React, { useState } from 'react'
import { InfoCircle, Heart as DisLike, HeartFill as Like } from 'react-bootstrap-icons'
import { useSession, SingleProfessionalCard as SingleProfessionalCardController } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { ProfessionalInfo } from '../ProfessionalInfo'
import { Modal } from '../Modal'
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
  const [open, setOpen] = useState(false)

  const handleChangeFavorite = () => {
    if (auth) {
      handleFavoriteProfessional && handleFavoriteProfessional(!professional?.favorite)
    }
  }

  const handleOpenProfileInfo = () => {
    setOpen(true)
  }

  return (
    <>
      <Container>
        {isSkeleton ? (
          <Skeleton style={{ width: '86px', height: '86px' }} />
        ) : (
          <UserPhoto bgimage={professional?.photo} />
        )}
        <InfoWrapper>
          <h4>{isSkeleton ? <Skeleton height={18} width={120} /> : <>{professional?.name} {professional?.last_name}</>}</h4>
          {isSkeleton ? <Skeleton height={15} width={80} /> : <>{professional?.occupation?.name && <p>{professional?.occupation?.name}</p>}</>}
          <ActionWrapper>
            {isSkeleton ? (
              <>
                <Skeleton width={16} height={16} />
                <Skeleton width={16} height={16} style={{ margin: '0px 7px' }} />
              </>
            ) : (
              <>
                <InfoCircle className='info' onClick={() => handleOpenProfileInfo()} />
                <span onClick={() => handleChangeFavorite()}>
                  {professional?.favorite ? <Like /> : <DisLike />}
                </span>
              </>
            )}
          </ActionWrapper>
        </InfoWrapper>
      </Container>
      <Modal
        open={open}
        width='760px'
        padding='0'
        onClose={() => setOpen(false)}
      >
        <ProfessionalInfo
          userId={professional?.id}
        />
      </Modal>
    </>
  )
}

export const SingleProfessionalCard = (props) => {
  const singleProfessionalCardProps = {
    ...props,
    UIComponent: SingleProfessionalCardUI
  }
  return <SingleProfessionalCardController {...singleProfessionalCardProps} />
}
