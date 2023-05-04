"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateInfo;
var _cardValidator = _interopRequireDefault(require("card-validator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function validateInfo(values) {
  var _values$cardSecurityC, _creditCard$card, _creditCard$card$code;
  var errors = {};
  var creditCard = _cardValidator.default.number(values.cardNumber);
  creditCard.expirationMonth = _cardValidator.default.expirationMonth(values.cardMonth);
  creditCard.expirationYear = _cardValidator.default.expirationYear(values.cardYear);
  creditCard.cvv = _cardValidator.default.cvv(values.cardSecurityCode);
  creditCard.cardholderName = _cardValidator.default.cardholderName(values.cardName);
  creditCard.postalCode = _cardValidator.default.postalCode(values.cardPostalCode);
  errors.show = true;
  errors.border = false;
  errors.variant = 'danger';
  errors.message = 'AN_UNKNOWN_ERROR_OCCURED_PLEASE_TRY_AGAIN';
  errors.cname = false;
  errors.cnumber = false;
  errors.month = false;
  errors.year = false;
  errors.ccvv = false;

  // Card CVV expiration
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.message = 'CREDIT_CARD_CVC_IS_NOT_COMPLETE';
  } else if (((_values$cardSecurityC = values.cardSecurityCode) === null || _values$cardSecurityC === void 0 ? void 0 : _values$cardSecurityC.length) === (creditCard === null || creditCard === void 0 ? void 0 : (_creditCard$card = creditCard.card) === null || _creditCard$card === void 0 ? void 0 : (_creditCard$card$code = _creditCard$card.code) === null || _creditCard$card$code === void 0 ? void 0 : _creditCard$card$code.size)) {
    errors.ccvv = true;
  } else {
    errors.message = 'CREDIT_CARD_CVC_IS_INVALID';
  }

  // Card Expiration Verification
  if (values.cardMonth === null || !values.cardMonth.trim()) {
    errors.message = 'CREDIT_CARD_EXPIRATION_MONTH_IS_NOT_COMPLETE';
  } else if (creditCard.expirationMonth.isValid) {
    errors.month = true;
  } else {
    errors.message = 'CREDIT_CARD_EXPIRATION_MONTH_IS_INVALID';
  }
  if (values.cardYear === null || !values.cardYear.trim()) {
    errors.message = 'CREDIT_CARD_EXPIRATION_YEAR_IS_NOT_COMPLETE';
  } else if (creditCard.expirationYear.isValid) {
    errors.year = true;
  } else {
    errors.message = 'CREDIT_CARD_EXPIRATION_YEAR_IS_INVALID';
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
    errors.message = 'CREDIT_CARD_NUMBER_IS_NOT_COMPLETE';
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = 'CREDIT_CARD_NUMBER_IS_INVALID';
  }

  // Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.message = 'CARDHOLDER_NAME_IS_NOT_COMPLETE';
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = 'CARDHOLDER_NAME_IS_INVALID';
  }
  if (errors.cname && errors.cnumber && errors.year && errors.month && errors.ccvv) {
    errors.variant = 'success';
    errors.message = 'CREDIT_CARD_IS_VALID';
  }
  return errors;
}