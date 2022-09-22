import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { Heart as DisLike, HeartFill as Like, InfoCircle } from 'react-bootstrap-icons'
import {
  Container,
  ProfessionalItem,
  ProfessionalPhoto,
  ContentWrapper,
  ProfessionalListing,
  InfoWrapper,
  HeartIconWrapper,
  IconWrapper
} from './styles'
import { Modal } from '../Modal'
import { ProfessionalProfile } from '../ProfessionalProfile'
import { AutoScroll } from '../AutoScroll'
import { ProfessionalInfo } from '../ProfessionalInfo'

export const ProfessionalFilter = (props) => {
  const {
    professionals,
    professionalSelected,
    handleChangeProfessionalSelected
  } = props

  const [, t] = useLanguage()
  const [open, setOpen] = useState(false)
  const [reviewOpen, setReviewOpen] = useState(false)
  const [currentProfessional, setCurrentProfessional] = useState(null)

  const handleOpenProfile = (e, professional) => {
    if (e.target.closest('.info')) return
    setCurrentProfessional(professional)
    setOpen(true)
  }

  const handleOpenReview = (professional) => {
    setReviewOpen(true)
    setCurrentProfessional(professional)
  }

  const handleCloseProfile = () => {
    setCurrentProfessional(null)
    setOpen(false)
    setReviewOpen(false)
  }

  return (
    <>
      <Container>
        <h2>{t('PROFESSIONALS', 'Professionals')}</h2>
        <ContentWrapper>
          <ProfessionalListing>
            <AutoScroll scrollId='professionalId'>
              <ProfessionalItem
                active={!professionalSelected}
                onClick={() => handleChangeProfessionalSelected(null)}
              >
                <p>{t('ANY_PROFESSIONAL_MEMBER', 'Any professional member')}</p>
              </ProfessionalItem>
              {professionals.map((professional, i) => (
                <ProfessionalItem
                  key={i}
                  active={professional?.id === professionalSelected?.id}
                  onClick={(e) => handleOpenProfile(e, professional)}
                >
                  {professional?.photo ? <ProfessionalPhoto bgimage={professional?.photo} /> : <FaUserAlt />}
                  <InfoWrapper>
                    <p className='name'>{professional?.name} {professional?.lastname}</p>
                    <IconWrapper>
                      <InfoCircle className='info' onClick={() => handleOpenReview(professional)} />
                      <HeartIconWrapper>
                        {professional?.favorite ? <Like /> : <DisLike />}
                      </HeartIconWrapper>
                    </IconWrapper>
                  </InfoWrapper>
                </ProfessionalItem>
              ))}
            </AutoScroll>
          </ProfessionalListing>
        </ContentWrapper>
      </Container>
      <Modal
        open={open}
        width='760px'
        padding='0'
        onClose={() => handleCloseProfile()}
      >
        <ProfessionalProfile
          currentProfessional={currentProfessional}
          onClose={handleCloseProfile}
          handleChangeProfessionalSelected={handleChangeProfessionalSelected}
        />
      </Modal>
      <Modal
        open={reviewOpen}
        width='760px'
        padding='0'
        onClose={() => handleCloseProfile()}
      >
        <ProfessionalInfo
          userId={currentProfessional?.id}
        />
      </Modal>
    </>
  )
}
