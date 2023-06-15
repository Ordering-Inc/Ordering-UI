import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  PaymentOptionStripe as PaymentOptionStripeController,
  useSession,
  useLanguage,
  useValidationFields
} from 'ordering-components'
import { StripeElementsForm } from '../StripeElementsForm'

import IosRadioButtonOn from '@meronex/icons/ios/IosRadioButtonOn'
import IosRadioButtonOff from '@meronex/icons/ios/IosRadioButtonOff'
import { Trash } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'

import { Confirm, Modal, NotFoundSource } from '../../../Shared'
import { getIconCard } from '../../../../../../../utils'

import {
  OptionStripeContainer,
  WarningMessage,
  CardItem,
  CardItemContent,
  CardItemActions,
  BlockLoading,
  AddNewCard,
  CardItemActionsWrapper
} from './styles'

export const PaymentOptionStripeUI = (props) => {
  const {
    deleteCard,
    cardsList,
    handleCardClick,
    handleNewCard,
    paymethodSelected,
    cardSelected,
    gateway
  } = props
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [validationFields] = useValidationFields()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const [addCartOpen, setAddCardOpen] = useState(false)
  const validateZipcodeCard =
    validationFields?.fields?.card?.zipcode?.enabled && validationFields?.fields?.card?.zipcode?.required

  const paymethodsWithoutSaveCards = ['credomatic']

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

  useEffect(() => {
    if (!cardsList?.loading && cardsList?.cards?.length === 0 && !paymethodsWithoutSaveCards.includes(gateway)) {
      setAddCardOpen(true)
    }
  }, [cardsList?.loading])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <OptionStripeContainer>
        {!token && <WarningMessage>{t('NEED_LOGIN_TO_USE', 'Sorry, you need to login to use this method')}</WarningMessage>}

        {token && !cardsList.loading && cardsList.cards && cardsList.cards.length === 0 && (
          <CardItem>
            <span>{t('NO_CARDS', 'No cards')}</span>
          </CardItem>
        )}

        {token && cardsList.error && cardsList.error.length > 0 && (
          <NotFoundSource
            content={cardsList?.error[0]?.message || cardsList?.error[0]}
          />
        )}
        {token && cardsList.cards && cardsList.cards.length > 0 && (
          <>
            {cardsList?.cards?.map((card, i) =>
              <PaymentCard
                {...props}
                key={i}
                handleCardClick={() => handleCardClick(card)}
                handleDeleteCard={() => handleDeleteCard(card)}
                card={card}
                defaultSelected={i === 0}
                active={(paymethodSelected || cardSelected?.id) === card.id}
                cardSelected={cardSelected}
                paymethodSelected={paymethodSelected}
                validateZipcodeCard={validateZipcodeCard}
              />
            )}
          </>
        )}
        {token && !cardsList.loading && !paymethodsWithoutSaveCards.includes(gateway) && (
          <AddNewCard>
            <span onClick={() => setAddCardOpen(true)}>{t('ADD_NEW_CARD', 'Add new card')}</span>
          </AddNewCard>
        )}

        <Modal
          title={t('ADD_NEW_CARD', 'Add new card')}
          className='modal-info'
          open={addCartOpen}
          onClose={() => setAddCardOpen(false)}
        >
          <StripeElementsForm
            businessIds={props.businessIds}
            businessId={props.businessId}
            publicKey={props.publicKey}
            toSave
            requirements={props.clientSecret}
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
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const PaymentCard = (props) => {
  const {
    handleDeleteCard,
    card,
    handleCardClick,
    onSelectCard,
    active,
    cardSelected,
    validateZipcodeCard
  } = props

  const [isShowActions, setIsShowActions] = useState(false)
  const [, t] = useLanguage()
  const cardActionsRef = useRef(null)
  const actionWrapperRef = useRef(null)
  const theme = useTheme()

  const handleClickOutside = (e) => {
    if (!isShowActions) return
    const outsideCalendar = !cardActionsRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShowActions(false)
    }
  }

  const handleChangeDefaultCard = (e) => {
    if (actionWrapperRef.current?.contains(e.target) || (!card?.zipcode && validateZipcodeCard)) return
    handleCardClick(card)
    onSelectCard && onSelectCard({
      ...cardSelected,
      id: card.id,
      type: 'card',
      card: {
        brand: card.brand,
        last4: card.last4,
        zipcode: card.zipcode
      }
    })
  }

  useEffect(() => {
    if (!cardSelected) return
    onSelectCard && onSelectCard({
      ...cardSelected,
      id: cardSelected?.id,
      type: 'card',
      card: {
        brand: cardSelected?.card?.brand,
        last4: cardSelected?.card?.last4,
        zipcode: cardSelected?.card?.zipcode
      }
    })
  }, [cardSelected])

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowActions])

  return (
    <CardItem onClick={handleChangeDefaultCard} isCursor invalid={!card?.zipcode && validateZipcodeCard}>
      <CardItemContent>
        <span className='checks'>
          {active ? <IosRadioButtonOn /> : <IosRadioButtonOff />}
        </span>
        <div>
          <img src={getIconCard(card?.brand)} alt={card?.brand} />
        </div>
        <span>
          XXXX-XXXX-XXXX-{card?.last4}
        </span>
        {!card?.zipcode && validateZipcodeCard && (
          <p>
            ({t('MISSING_ZIPCODE', 'Missing zipcode')})
          </p>
        )}
      </CardItemContent>
      <CardItemActions>
        <CardItemActionsWrapper ref={actionWrapperRef}>
          <span ref={cardActionsRef}>
            <Trash color={theme.colors.lightGray} onClick={() => handleDeleteCard()} />
          </span>
        </CardItemActionsWrapper>
      </CardItemActions>
    </CardItem>
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
