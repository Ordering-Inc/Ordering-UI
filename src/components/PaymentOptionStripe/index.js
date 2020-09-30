import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { PaymentOptionStripe as PaymentOptionStripeController, useSession, useLanguage } from 'ordering-components'

import { IoIosRadioButtonOn, IoIosRadioButtonOff } from 'react-icons/io'
import { VscTrash } from 'react-icons/vsc'

import { getIconCard } from '../../utils'

import { Modal } from '../Modal'
import { Confirm } from '../Confirm'
import { StripeElementsForm } from '../StripeElementsForm'

import { Button } from '../../styles/Buttons'

import {
  OptionStripeContainer,
  WarningMessage,
  CardItem,
  CardItemContent,
  CardItemActions,
  WrapperItems,
  ActionsModal,
  BlockLoading
} from './styles'

const PaymentOptionStripeUI = (props) => {
  const {
    onSelectCard,
    onCancel,
    deleteCard,
    cardSelected,
    cardsList,
    handleCardClick,
    handleNewCard
  } = props
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const [addCartOpen, setAddCardOpen] = useState(false)

  const _handleNewCard = (card) => {
    setAddCardOpen(false)
    handleNewCard(card)
  }

  const handleDeleteCard = (card) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CARD', 'Are you sure that you want to delete the card?'),
      handleOnAccept: () => {
        deleteCard(card)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  return (
    <OptionStripeContainer>
      {!token && <WarningMessage>Sorry, you need to login to use this method</WarningMessage>}

      {token && !cardsList.loading && cardsList.cards && cardsList.cards.length === 0 && (
        <CardItem>
          <span>No cards</span>
        </CardItem>
      )}

      {token && cardsList.error && cardsList.error.length > 0 && (
        cardsList.error.map((e, i) => (
          <p key={i}>ERROR: [{e}]</p>
        ))
      )}

      {token && cardsList.cards && cardsList.cards.length > 0 && (
        <WrapperItems>
          {cardsList.cards.map((card, i) => (
            <CardItem key={i}>
              <CardItemContent onClick={() => handleCardClick(card)}>
                <span className='checks'>
                  {card.id === cardSelected?.id ? (
                    <IoIosRadioButtonOn />
                  ) : (
                    <IoIosRadioButtonOff />
                  )}
                </span>
                <span className='brand'>
                  {getIconCard(card.brand)}
                </span>
                <span>
                  XXXX-XXXX-XXXX-{card.last4}
                </span>
              </CardItemContent>
              <CardItemActions>
                <VscTrash onClick={() => handleDeleteCard(card)} />
              </CardItemActions>
            </CardItem>
          ))}
        </WrapperItems>
      )}

      {token && !cardsList.loading && (
        <WrapperItems>
          <Button className='addcard' color='primary' onClick={() => setAddCardOpen(true)}>
            {t('ADD_CARD', 'Add Card')}
          </Button>
          <ActionsModal>
            <Button onClick={() => onCancel()}>
              {t('CANCEL', 'Cancel')}
            </Button>
            <Button color='primary' onClick={() => onSelectCard(cardSelected)} disabled={!cardSelected}>
              {t('ACCEPT', 'Accept')}
            </Button>
          </ActionsModal>
        </WrapperItems>
      )}

      <Modal
        className='modal-info'
        open={addCartOpen}
        onClose={() => setAddCardOpen(false)}
        title='Add credit or debit card'
      >
        <StripeElementsForm
          businessId={props.businessId}
          publicKey={props.publicKey}
          toSave
          // clientSecret={props.clientSecret}
          onCancel={() => setAddCardOpen(false)}
          onNewCard={_handleNewCard}
        />
      </Modal>

      <Confirm
        title={t('CARD', 'Card')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />

      {token && cardsList.loading && (
        [...Array(5).keys()].map(i => (
          <BlockLoading key={i}>
            <Skeleton height={50} />
          </BlockLoading>
        ))
      )}
    </OptionStripeContainer>
  )
}

export const PaymentOptionStripe = (props) => {
  const paymentOptionStripeProps = {
    ...props,
    UIComponent: PaymentOptionStripeUI
  }
  return (
    <PaymentOptionStripeController {...paymentOptionStripeProps} />
  )
}
