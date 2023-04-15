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

import { NotFoundSource } from '../../../../../components/NotFoundSource'

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
    setDefaultCard,
    cardDefault
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [isShowActions, setIsShowActions] = useState(false)
  const cardActionsRef = useRef(null)

  const getIconCard = (brand = '') => {
    const value = brand.toLowerCase()
    switch (value) {
      case 'visa':
        return theme.images?.general?.visa
      case 'mastercard':
        return theme.images?.general?.mastercard
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

  const handleChangeDefaultCard = () => {
    setDefaultCard(card)
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [isShowActions])

  return (
    <CardItem>
      <CardItemContent>
        <div>
          <img src={getIconCard(card?.brand)} alt={card?.brand} />
        </div>
        <span>
          {card?.brand} {card?.last4}
        </span>
      </CardItemContent>
      <CardItemActions>
        {
          card?.id === cardDefault?.id && (
            <span>{t('DEFAULT', 'Default')}</span>
          )
        }
        <CardItemActionsWrapper>
          <span ref={cardActionsRef}>
            <FiMoreVertical onClick={() => setIsShowActions(true)} />
          </span>
          {
            isShowActions && (
              <ActionsContent>
                <div onClick={handleChangeDefaultCard}>{t('USE_AS_DEFAULT', 'Use as default')}</div>
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
