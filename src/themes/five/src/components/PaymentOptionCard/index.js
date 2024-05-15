import { PaymentOptionStripe, useLanguage, useSession } from 'ordering-components'
import React, { useEffect, useState } from 'react'
import { CardFormCustom } from '../CardFormCustom'
import Modal from '../Modal'
import { PaymentOptionStripeUI } from '../PaymentOptionStripe'
import { AddNewCard } from '../PaymentOptionStripe/styles'

const PaymentOptionCardUI = (props) => {
  const {
    deleteCard,
    cardsList,
    handleCardClick,
    handleNewCard,
    paymethodSelected,
    cardSelected,
    gateway,
    paymethodsWithoutSaveCards,
    onSelectCard
  } = props

  const [, t] = useLanguage()
  const [{ token }] = useSession()

  const [addCardOpen, setAddCardOpen] = useState(false)

  useEffect(() => {
    if (cardsList?.cards?.length > 0) {
      setAddCardOpen(true)
    }
  }, [cardsList?.cards])

  return (
    <>
      <PaymentOptionStripeUI
        deleteCard={deleteCard}
        cardsList={cardsList}
        handleCardClick={handleCardClick}
        handleNewCard={handleNewCard}
        paymethodSelected={paymethodSelected}
        cardSelected={cardSelected}
        gateway={gateway}
        onSelectCard={onSelectCard}
      />

      {token && !cardsList.loading && (!cardSelected || !paymethodsWithoutSaveCards.includes(gateway)) && (
        <AddNewCard>
          <span onClick={() => setAddCardOpen(true)}>{t('ADD_NEW_CARD', 'Add new card')}</span>
        </AddNewCard>
      )}

      <Modal
        open={addCardOpen}
        onClose={() => setAddCardOpen(false)}
        title={t('ADD_NEW_CARD', 'Add new card')}
      >
        <CardFormCustom handleNewCard={handleNewCard} setAddCardOpen={setAddCardOpen} />
      </Modal>
    </>
  )
}

export const PaymentOptionCard = (props) => {
  const paymentOptionStripeProps = {
    ...props,
    UIComponent: PaymentOptionCardUI
  }
  return (
    <PaymentOptionStripe {...paymentOptionStripeProps} />
  )
}
