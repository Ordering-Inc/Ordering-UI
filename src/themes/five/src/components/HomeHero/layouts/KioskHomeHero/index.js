import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useConfig, useSession } from 'ordering-components'
import {
  HomeContainer,
  HeroContainer,
  ContentWrapper
} from './styles'

import { LogoHeader } from '../../../Header/styles'
import { Button } from '../../../../styles/Buttons'
import { Modal } from '../../../Modal'
import { OrderTypeSelectorContent } from '../../../OrderTypeSelectorContent/layouts/Kiosk'
import { LogoutPopup } from '../../../LogoutPopup'

export const KioskHomeHero = (props) => {
  const { handleGoToBusiness } = props

  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const theme = useTheme()
  const [configState] = useConfig()

  const [modalIsOpen, setModalIsOpen] = useState({ open: false, page: '' })

  const excludeTypes = [1]
  const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => !excludeTypes.includes(Number(value)) && Number(value)) || []

  const handleActionModal = ({ values, isDisabled, isClean }) => {
    if (isClean) {
      setModalIsOpen({ open: false, page: '' })
      return
    }
    if (isDisabled) return
    setModalIsOpen({ ...modalIsOpen, ...values })
  }

  return (
    <HomeContainer
      onClick={() => handleActionModal({
        values: { open: true, page: 'types' },
        isDisabled: modalIsOpen.open
      })}
    >
      <HeroContainer bgimage={theme.images?.general?.homeHero}>
        <ContentWrapper contentPosition='top' style={{ zIndex: modalIsOpen.open ? 0 : 9999 }}>
          <div style={{ alignItems: 'center' }}>
            <LogoHeader
              disabledResponsive
              imgW='250px'
              imgH='70px'
            >
              <img
                alt='Logotype'
                width='250px'
                height='70px'
                src={theme?.images?.logos?.logotype}
                loading='lazy'
                onClick={() => handleActionModal({
                  values: { open: true, page: 'types' }
                })}
                onTouchMove={() => auth ? handleActionModal({
                  values: { open: true, page: 'logout' }
                }) : {}}
              />
            </LogoHeader>
          </div>
        </ContentWrapper>
        <ContentWrapper contentPosition='bottom'>
          <div style={{ alignItems: 'center' }}>
            <Button
              color='primary'
              name='find-business'
              style={{ width: 'auto' }}
            >
              {t('TOUCH_ANYWHERE_TO_ORDER', theme?.defaultLanguages?.TOUCH_ANYWHERE_TO_ORDER || 'Touch anywhere to order')}
            </Button>
          </div>
        </ContentWrapper>
      </HeroContainer>
      <Modal
        open={modalIsOpen.open}
        onClose={() => handleActionModal({ isClean: true })}
        width='100%'
        customStyle={{
          height: '100%',
          maxHeight: '100vh',
          borderRadius: 0
        }}
      >
        {modalIsOpen.page === 'types' && (
          <OrderTypeSelectorContent
            title={t('PLEASE_SELECT_YOUR_ORDER_TYPE', 'Please select your order type')}
            onClose={() => {
              handleActionModal({ isClean: true })
              handleGoToBusiness && handleGoToBusiness()
            }}
            configTypes={!configState?.loading && configTypes?.length > 0 ? configTypes : null}
            defaultValue={!(!configState?.loading && configTypes?.length > 0) && 1}
          />
        )}
        {modalIsOpen.page === 'logout' && (
          <LogoutPopup onClose={() => handleActionModal({ isClean: true })} />
        )}
      </Modal>
    </HomeContainer>
  )
}
