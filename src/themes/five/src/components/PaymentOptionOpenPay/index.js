import React, { useState, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  PaymentOptionOpenPay as PaymentOptionOpenPayController,
  useSession,
  useLanguage
} from 'ordering-components'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useTheme } from 'styled-components'
import { Modal } from '../Modal'
import { Alert, Confirm } from '../Confirm'
import { NotFoundSource } from '../NotFoundSource'
import validateInfo from './ValidateInfo'
import {
  OptionStripeContainer,
  WarningMessage,
  CardItem,
  CardItemContent,
  CardItemActions,
  BlockLoading,
  ActionsContent,
  CardItemActionsWrapper,
  CardForm,
  Row,
  InputContainer
} from './styles'
import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'

const PaymentOptionOpenPayUI = (props) => {
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
  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cardSecurityCode: '',
    focus: ''
  })

  const [errors, setErrors] = useState({})

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

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validateInfo(values).variant === 'success') {
      setAddCardOpen(false)
      handleNewCard(values)
    } else {
      setErrors(validateInfo(values))
    }
  }

  const closeAlert = () => {
    setErrors({
      ...errors,
      show: false,
      border: true
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
          <Button onClick={() => setAddCardOpen(true)} color='primary'>
            {t('ADD_NEW_CARD', 'Add new card')}
          </Button>
        )}

        <Modal
          title={t('ADD_NEW_CARD', 'Add new card')}
          className='modal-info'
          open={addCartOpen}
          onClose={() => setAddCardOpen(false)}
        >
          <CardForm>
            <Row>
              <InputContainer isValid={errors.cname} showBorder={errors.border}>
                <Input
                  data-openpay-card='holder_name'
                  id='holderName'
                  value={values.cardName}
                  name='cardName'
                  onChange={handleChange}
                  placeholder={t('HOLDER_NAME', 'Holder Name')}
                />
              </InputContainer>
            </Row>
            <Row>
              <InputContainer isValid={errors.cnumber} showBorder={errors.border}>
                <Input
                  data-openpay-card='card_number'
                  id='cardNumber'
                  value={values.cardNumber}
                  name='cardNumber'
                  onChange={handleChange}
                  maxLength={16}
                  placeholder={t('CARD_NUMBER', 'Card number')}
                />
              </InputContainer>
            </Row>
            <Row>
              <InputContainer isValid={errors.year} showBorder={errors.border}>
                <Input
                  name='cardYear'
                  data-openpay-card='expiration_year'
                  id='expirationYear'
                  onChange={handleChange}
                  maxLength={2}
                  placeholder={t('EXPIRATION_YEAR', 'Expiration year')}
                />
              </InputContainer>
              <InputContainer isValid={errors.month} showBorder={errors.border}>
                <Input
                  name='cardMonth'
                  data-openpay-card='expiration_month'
                  id='expirationMonth'
                  onChange={handleChange}
                  maxLength={2}
                  placeholder={t('EXPIRATION_MONTH', 'Expiration month')}
                />
              </InputContainer>
              <InputContainer isValid={errors.cvv} showBorder={errors.border}>
                <Input
                  name='cardSecurityCode'
                  data-openpay-card='cvv2'
                  id='cvv2'
                  maxLength={4}
                  onChange={handleChange}
                  placeholder='CVV'
                />
              </InputContainer>
            </Row>
            <Button onClick={handleSubmit} color='primary'>
              {t('ADD_CARD', 'Add Card')}
            </Button>
          </CardForm>
        </Modal>
        <Alert
          title={t('PAYMENT_METHODS', 'Payment methods')}
          content={errors.message}
          acceptText={t('ACCEPT', 'Accept')}
          open={errors.show}
          onClose={() => closeAlert()}
          onAccept={() => closeAlert()}
          closeOnBackdrop={false}
        />
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

        {token && cardsList?.loading && (
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
      ...card,
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
          <img src={getIconCard(card?.brandCardName)} alt={card?.brandCardName} />
        </div>
        <span>
          {card?.brandCardName} {card?.last4}
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

export const PaymentOptionOpenPay = (props) => {
  const paymentOptionStripeProps = {
    ...props,
    UIComponent: PaymentOptionOpenPayUI
  }
  return (
    <PaymentOptionOpenPayController {...paymentOptionStripeProps} />
  )
}
