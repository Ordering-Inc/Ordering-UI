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
  errors.message = 'An unknown error occured. Please try again later'
  errors.cname = false
  errors.cnumber = false
  errors.month = false
  errors.year = false
  errors.ccvv = false

  // Card CVV expiration
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message = 'Credit card CVC is not complete'
  } else if (creditCard.cvv.isValid || values.cardSecurityCode?.length === 4) {
    errors.ccvv = true
  } else {
    errors.message = 'Credit card CVC is invalid'
  }

  // Card Expiration Verification
  if (values.cardMonth === null || !values.cardMonth.trim()) {
    errors.message = 'Credit card expiration month is not complete'
  } else if (creditCard.expirationMonth.isValid) {
    errors.month = true
  } else {
    errors.message = 'Credit card expiration month is invalid'
  }

  if (values.cardYear === null || !values.cardYear.trim()) {
    errors.message = 'Credit card expiration year is not complete'
  } else if (creditCard.expirationYear.isValid) {
    errors.year = true
  } else {
    errors.message = 'Credit card expiration year is invalid'
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
    errors.message = 'Credit card number is not complete'
  } else if (creditCard.isValid) {
    errors.cnumber = true
  } else {
    errors.message = 'Credit card number is invalid'
  }

  // Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = 'Cardholder name is not complete'
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true
  } else {
    errors.message = 'Cardholder name is invalid'
  }

  if (
    errors.cname &&
    errors.cnumber &&
    errors.year &&
    errors.month &&
    errors.ccvv
  ) {
    errors.variant = 'success'
    errors.message = 'Credit Card is valid'
  }

  return errors
}
