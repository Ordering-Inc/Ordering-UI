import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import Card from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  getCardType
} from './cardUtils'
import { useForm } from 'react-hook-form'
import { Button, Input } from '../../../../styles'
import { FormContainer, InputContainer } from './styles'

export const CardFormCustom = (props) => {
  const {
    handleNewCard,
    setAddCardOpen
  } = props

  const [, t] = useLanguage()
  const [formState, setFormState] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: ''
  })

  const formMethods = useForm()

  const handleInputFocus = (e) => {
    setFormState({
      ...formState,
      focus: e.target.name
    })
  }

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  const onSubmit = (values) => {
    const cardBrand = getCardType(values?.number)
    const lastFourDigits = values?.number.substr(-4)
    const card = {
      type: 'card',
      brand: cardBrand,
      last4: lastFourDigits,
      ccnumber: values?.number?.replace(/\s/g, ''),
      ccexp: values?.expiry?.replace('/', ''),
      cvv: values?.cvc
    }
    handleNewCard(card)
    setAddCardOpen(false)
  }

  return (
    <FormContainer id='PaymentForm'>
      <Card
        cvc={formState.cvc}
        expiry={formState.expiry}
        focused={formState.focus}
        name={formState.name}
        number={formState.number}
        placeholders={{
          name: t('YOUR_NAME_HERE', 'Your name here')
        }}
      />
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <InputContainer>
          <Input
            type='tel'
            name='number'
            placeholder={t('CARD_NUMBER', 'Card number')}
            inputMode='numeric'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            pattern='[\d| ]{16,22}'
            format={formatCreditCardNumber}
            maxLength={19}
            ref={
              formMethods.register({
                required: t('CARD_NUMBER_REQUIRED', 'Card number is required'),
                pattern: /^[\d| ]{16,22}$/i
              })
            }
            isError={formMethods.errors.number}
          />
        </InputContainer>
        <InputContainer>
          <Input
            type='text'
            name='name'
            placeholder={t('NAME', 'Name')}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            ref={
              formMethods.register({
                required: t('NAME_REQUIRED', 'Name is required')
              })
            }
            isError={formMethods.errors.name}
          />
        </InputContainer>
        <InputContainer>
          <Input
            type='text'
            name='expiry'
            pattern='\d\d/\d\d'
            placeholder={t('EXPIRY', 'Expiry')}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            format={formatExpirationDate}
            ref={
              formMethods.register({
                required: t('EXPIRY_DATE_REQUIRED', 'Expiry date required')
              })
            }
            isError={formMethods.errors.expiry}
          />
          <Input
            type='text'
            name='cvc'
            placeholder={t('CVC', 'CVC')}
            pattern='\d{3,4}'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            format={formatCVC}
            ref={
              formMethods.register({
                required: t('CVC_REQUIRED', 'CVC is required')
              })
            }
            isError={formMethods.errors.cvc}
          />
        </InputContainer>
        <Button
          borderRadius='8px'
          type='submit'
          color='primary'
          disabled={Object.keys(formMethods.errors)?.length > 0}
        >
          {t('SAVE', 'Save')}
        </Button>
      </form>
    </FormContainer>
  )
}
