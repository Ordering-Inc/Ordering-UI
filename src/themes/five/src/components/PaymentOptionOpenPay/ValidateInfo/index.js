import valid from 'card-validator'

export default function validateInfo (values) {
  const errors = {}
  const creditCard = valid.number(values.cardNumber)

  creditCard.expirationMonth = valid.expirationMonth(values.cardMonth)
  creditCard.expirationYear = valid.expirationYear(values.cardYear)
  creditCard.cvv = valid.cvv(values.cardSecurityCode)
  creditCard.cardholderName = valid.cardholderName(values.cardName)
  creditCard.postalCode = valid.postalCode(values.cardPostalCode)

  errors.show = true
  errors.border = false
  errors.variant = 'danger'
  errors.message = 'AN_UNKNOWN_ERROR_OCCURED_PLEASE_TRY_AGAIN'
  errors.cname = false
  errors.cnumber = false
  errors.month = false
  errors.year = false
  errors.ccvv = false

  // Card CVV expiration
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message = 'CREDIT_CARD_CVC_IS_NOT_COMPLETE'
  } else if (creditCard.cvv.isValid || values.cardSecurityCode?.length === 4) {
    errors.ccvv = true
  } else {
    errors.message = 'CREDIT_CARD_CVC_IS_INVALID'
  }

  // Card Expiration Verification
  if (values.cardMonth === null || !values.cardMonth.trim()) {
    errors.message = 'CREDIT_CARD_EXPIRATION_MONTH_IS_NOT_COMPLETE'
  } else if (creditCard.expirationMonth.isValid) {
    errors.month = true
  } else {
    errors.message = 'CREDIT_CARD_EXPIRATION_MONTH_IS_INVALID'
  }

  if (values.cardYear === null || !values.cardYear.trim()) {
    errors.message = 'CREDIT_CARD_EXPIRATION_YEAR_IS_NOT_COMPLETE'
  } else if (creditCard.expirationYear.isValid) {
    errors.year = true
  } else {
    errors.message = 'CREDIT_CARD_EXPIRATION_YEAR_IS_INVALID'
  }

  // //Card Type Verification
  // if (
  //   values.cardType === null ||
  //   !values.cardType.trim() ||
  //   creditCard.card === null
  // ) {
  //   errors.message = 'Credit card type is not complete'
  // } else if (
  //   creditCard.card.type &&
  //   creditCard.card.type.toUpperCase() === values.cardType.toUpperCase()
  // ) {
  //   errors.ctype = true
  // } else {
  //   errors.message = 'Credit card type is invalid'
  // }

  // Card Number Verification
  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.message = 'CREDIT_CARD_NUMBER_IS_NOT_COMPLETE'
  } else if (creditCard.isValid) {
    errors.cnumber = true
  } else {
    errors.message = 'CREDIT_CARD_NUMBER_IS_INVALID'
  }

  // Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = 'CARDHOLDER_NAME_IS_NOT_COMPLETE'
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true
  } else {
    errors.message = 'CARDHOLDER_NAME_IS_INVALID'
  }

  if (
    errors.cname &&
    errors.cnumber &&
    errors.year &&
    errors.month &&
    errors.ccvv
  ) {
    errors.variant = 'success'
    errors.message = 'CREDIT_CARD_IS_VALID'
  }

  return errors
}
