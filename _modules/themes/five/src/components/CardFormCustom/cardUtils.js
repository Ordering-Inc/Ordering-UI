"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCardType = exports.formatExpirationDate = exports.formatCreditCardNumber = exports.formatCVC = void 0;
var _payment = _interopRequireDefault(require("payment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var clearNumber = function clearNumber() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.replace(/\D+/g, '');
};
var formatCreditCardNumber = function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }
  var issuer = _payment.default.fns.cardType(value);
  var clearValue = clearNumber(value);
  var nextValue;
  switch (issuer) {
    case 'amex':
      nextValue = "".concat(clearValue.slice(0, 4), " ").concat(clearValue.slice(4, 10), " ").concat(clearValue.slice(10, 15));
      break;
    case 'dinersclub':
      nextValue = "".concat(clearValue.slice(0, 4), " ").concat(clearValue.slice(4, 10), " ").concat(clearValue.slice(10, 14));
      break;
    default:
      nextValue = "".concat(clearValue.slice(0, 4), " ").concat(clearValue.slice(4, 8), " ").concat(clearValue.slice(8, 12), " ").concat(clearValue.slice(12, 19));
      break;
  }
  return nextValue.trim();
};
exports.formatCreditCardNumber = formatCreditCardNumber;
var formatCVC = function formatCVC(value, prevValue) {
  var allValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var clearValue = clearNumber(value);
  var maxLength = 4;
  if (allValues.number) {
    var issuer = _payment.default.fns.cardType(allValues.number);
    maxLength = issuer === 'amex' ? 4 : 3;
  }
  return clearValue.slice(0, maxLength);
};
exports.formatCVC = formatCVC;
var formatExpirationDate = function formatExpirationDate(value) {
  var clearValue = clearNumber(value);
  if (clearValue.length >= 3) {
    return "".concat(clearValue.slice(0, 2), "/").concat(clearValue.slice(2, 4));
  }
  return clearValue;
};
exports.formatExpirationDate = formatExpirationDate;
var getCardType = function getCardType(number) {
  // visa
  var re = new RegExp('^4');
  if (number.match(re) != null) {
    return 'Visa';
  }

  // Mastercard
  // Updated for Mastercard 2017 BINs expansion
  if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) {
    return 'Mastercard';
  }
  // AMEX
  re = new RegExp('^3[47]');
  if (number.match(re) != null) {
    return 'AMEX';
  }

  // Discover
  re = new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)');
  if (number.match(re) != null) {
    return 'Discover';
  }

  // Diners
  re = new RegExp('^36');
  if (number.match(re) != null) {
    return 'Diners';
  }

  // Diners - Carte Blanche
  re = new RegExp('^30[0-5]');
  if (number.match(re) != null) {
    return 'Diners - Carte Blanche';
  }

  // JCB
  re = new RegExp('^35(2[89]|[3-8][0-9])');
  if (number.match(re) != null) {
    return 'JCB';
  }

  // Visa Electron
  re = new RegExp('^(4026|417500|4508|4844|491(3|7))');
  if (number.match(re) != null) {
    return 'Visa Electron';
  }
  return '';
};
exports.getCardType = getCardType;