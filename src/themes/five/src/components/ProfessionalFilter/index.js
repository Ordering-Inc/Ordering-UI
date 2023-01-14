import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import {
  Container,
  ProfessionalItem,
  ContentWrapper,
  ProfessionalListing
} from './styles'
import { Modal } from '../Modal'
import { ProfessionalProfile } from '../ProfessionalProfile'
import { AutoScroll } from '../AutoScroll'
import { ProfessionalInfo } from '../ProfessionalInfo'
import { SingleProfessionalCard } from '../SingleProfessionalCard'

export const ProfessionalFilter = (props) => {
  const {
    professionals,
    professionalSelected,
    handleChangeProfessionalSelected,
    handleUpdateProfessionals
  } = props

  const [, t] = useLanguage()
  const [open, setOpen] = useState(false)
  const [reviewOpen, setReviewOpen] = useState(false)
  const [currentProfessional, setCurrentProfessional] = useState(null)

  const handleOpenProfile = (e, professional) => {
    if (e.target.closest('.info') || e.target.closest('.favorite')) return
    setCurrentProfessional(professional)
    setOpen(true)
  }

  const handleCloseProfile = () => {
    setCurrentProfessional(null)
    setOpen(false)
    setReviewOpen(false)
  }

  const onUpdateProfessionals = (id, changes) => {
    const updatedProfessional = professionals.find(professional => professional.id === id)
    handleUpdateProfessionals({ ...updatedProfessional, ...changes })
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
              {professionals.map(professional => (
                <SingleProfessionalCard
                  isSmallPhoto
                  handleProfessionalClick={handleOpenProfile}
                  active={professional?.id === professionalSelected?.id}
                  key={professional.id}
                  professional={professional}
                  handleUpdateProfessionals={onUpdateProfessionals}
                />
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
