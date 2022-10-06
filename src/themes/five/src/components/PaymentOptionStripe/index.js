import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  PaymentOptionStripe as PaymentOptionStripeController,
  useSession,
  useLanguage
} from 'ordering-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useTheme } from 'styled-components'

import { Modal } from '../Modal'
import { Confirm } from '../Confirm'
import { StripeElementsForm } from '../StripeElementsForm'

import { NotFoundSource } from '../NotFoundSource'

import {
  OptionStripeContainer,
  WarningMessage,
  CardItem,
  CardItemContent,
  CardItemActions,
  BlockLoading,
  AddNewCard,
  ActionsContent,
  CardItemActionsWrapper
} from './styles'

const PaymentOptionStripeUI = (props) => {
  const {
    deleteCard,
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
            {cardsList?.cards?.map((card, i) => (
              <PaymentCard
                {...props}
                key={i}
                handleCardClick={() => handleCardClick(card)}
                handleDeleteCard={() => handleDeleteCard(card)}
                card={card}
                defaultSelected={i === 0}
              />
            ))}
          </>
        )}
        {token && !cardsList.loading && (
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
    onSelectCard
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [isShowActions, setIsShowActions] = useState(false)
  const cardActionsRef = useRef(null)
  const actionWrapperRef = useRef(null)

  const getIconCard = (brand = '') => {
    const value = brand.toLowerCase()
    switch (value) {
      case 'visa':
        return theme.images?.general?.visa
      case 'mastercard':
        return theme.images?.general?.mastercard
      case 'amex':
        return theme.images?.general?.amex
      case 'diners':
        return theme.images?.general?.diners
      case 'discover':
        return theme.images?.general?.discover
      case 'jcb':
        return theme.images?.general?.jcb
      case 'unionpay':
        return theme.images?.general?.unionpay
      default:
        return theme.images?.general?.credit
    }
  }

  const handleClickOutside = (e) => {
    if (!isShowActions) return
    const outsideCalendar = !cardActionsRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShowActions(false)
    }
  }

  const handleChangeDefaultCard = (e) => {
    if (actionWrapperRef.current?.contains(e.target)) return
    handleCardClick(card)
    onSelectCard({
      id: card.id,
      type: 'card',
      card: {
        brand: card.brand,
        last4: card.last4
      }
    })
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowActions])

  return (
    <CardItem onClick={handleChangeDefaultCard} isCursor>
      <CardItemContent>
        <div>
          <img src={getIconCard(card?.brand)} alt={card?.brand} />
        </div>
        <span>
          {card?.brand} {card.last4}
        </span>
      </CardItemContent>
      <CardItemActions>
        <CardItemActionsWrapper ref={actionWrapperRef}>
          <span ref={cardActionsRef}>
            <FiMoreVertical onClick={() => setIsShowActions(true)} />
          </span>
          {
            isShowActions && (
              <ActionsContent>
                <div className='delete' onClick={handleDeleteCard}>{t('DELETE', 'Delete')}</div>
              </ActionsContent>
            )
          }
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
