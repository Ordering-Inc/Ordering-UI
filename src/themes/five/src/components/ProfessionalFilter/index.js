import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import {
  Container,
  ProfessionalItem,
  ProfessionalPhoto,
  ContentWrapper,
  ProfessionalListing
} from './styles'
import { Modal } from '../Modal'
import { ProfessionalProfile } from '../ProfessionalProfile'
import { AutoScroll } from '../AutoScroll'

export const ProfessionalFilter = (props) => {
  const {
    professionals,
    professionalSelected,
    handleChangeProfessionalSelected
  } = props

  const [, t] = useLanguage()
  const [open, setOpen] = useState(false)
  const [currentProfessional, setCurrentProfessional] = useState(null)

  const handleOpenProfile = (professional) => {
    setCurrentProfessional(professional)
    setOpen(true)
  }

  const handleCloseProfile = () => {
    setCurrentProfessional(null)
    setOpen(false)
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
                  onClick={() => handleOpenProfile(professional)}
                >
                  {professional?.photo ? <ProfessionalPhoto bgimage={professional?.photo} /> : <FaUserAlt />}
                  <p className='name'>{professional?.name} {professional?.lastname}</p>
                </ProfessionalItem>
              ))}
            </AutoScroll>
          </ProfessionalListing>
        </ContentWrapper>
      </Container>
      <Modal
        open={open}
        width='760px'
        onClose={() => handleCloseProfile()}
      >
        <ProfessionalProfile
          currentProfessional={currentProfessional}
          onClose={handleCloseProfile}
          handleChangeProfessionalSelected={handleChangeProfessionalSelected}
        />
      </Modal>
    </>
  )
}
