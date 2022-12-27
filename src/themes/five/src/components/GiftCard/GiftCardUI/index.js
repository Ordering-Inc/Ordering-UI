import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { Modal } from '../../Modal'
import { Button } from '../../../styles/Buttons'
import BsGift from '@meronex/icons/bs/BsGift'
import { PurchaseGiftCard } from '../PurchaseGiftCard'
import { RedeemGiftCard } from '../RedeemGiftCard'

import {
  Container,
  TitleWrapper,
  ActionWrapper
} from './styles'

export const GiftCardUI = (props) => {
  const [, t] = useLanguage()
  const [openModal, setOpenModal] = useState(null)

  return (
    <Container>
      <TitleWrapper>
        <h1>{t('GIFT_CARD', 'Gift card')}</h1>
        <BsGift />
      </TitleWrapper>
      <ActionWrapper>
        <Button
          color='primary'
          onClick={() => setOpenModal('purchase')}
        >
          {t('PURCHASE_GIFT_CARD', 'Purchase gift card')}
        </Button>
        <Button
          outline
          color='primary'
          className='light'
          onClick={() => setOpenModal('redeem')}
        >
          {t('REDEEM_GIFT_CARD', 'Redeem gift card')}
        </Button>
      </ActionWrapper>
      <Modal
        width='700px'
        open={openModal === 'purchase'}
        onClose={() => setOpenModal(null)}
      >
        <PurchaseGiftCard />
      </Modal>
      <Modal
        width='700px'
        open={openModal === 'redeem'}
        onClose={() => setOpenModal(null)}
      >
        <RedeemGiftCard
          onClose={() => setOpenModal(null)}
        />
      </Modal>
    </Container>
  )
}
