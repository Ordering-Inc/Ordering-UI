"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardFormCustom = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactCreditCards = _interopRequireDefault(require("react-credit-cards-2"));
require("react-credit-cards-2/es/styles-compiled.css");
var _cardUtils = require("./cardUtils");
var _reactHookForm = require("react-hook-form");
var _Inputs = require("../../styles/Inputs");
var _orderingComponents = require("ordering-components");
var _Buttons = _interopRequireDefault(require("../../styles/Buttons"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CardFormCustom = exports.CardFormCustom = function CardFormCustom(props) {
  var _Object$keys;
  var handleNewCard = props.handleNewCard,
    setAddCardOpen = props.setAddCardOpen;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var formMethods = (0, _reactHookForm.useForm)();
  var handleInputFocus = function handleInputFocus(e) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      focus: e.target.name
    }));
  };
  var handleInputChange = function handleInputChange(_ref) {
    var target = _ref.target;
    if (target.name === 'number') {
      target.value = (0, _cardUtils.formatCreditCardNumber)(target.value);
    } else if (target.name === 'expiry') {
      target.value = (0, _cardUtils.formatExpirationDate)(target.value);
    } else if (target.name === 'cvc') {
      target.value = (0, _cardUtils.formatCVC)(target.value);
    }
    setFormState(_objectSpread(_objectSpread({}, formState), {}, _defineProperty({}, target.name, target.value)));
  };
  var onSubmit = function onSubmit(values) {
    var _values$number, _values$expiry;
    var cardBrand = (0, _cardUtils.getCardType)(values === null || values === void 0 ? void 0 : values.number);
    var lastFourDigits = values === null || values === void 0 ? void 0 : values.number.substr(-4);
    var card = {
      type: 'card',
      brand: cardBrand,
      last4: lastFourDigits,
      ccnumber: values === null || values === void 0 || (_values$number = values.number) === null || _values$number === void 0 ? void 0 : _values$number.replace(/\s/g, ''),
      ccexp: values === null || values === void 0 || (_values$expiry = values.expiry) === null || _values$expiry === void 0 ? void 0 : _values$expiry.replace('/', ''),
      cvv: values === null || values === void 0 ? void 0 : values.cvc
    };
    handleNewCard(card);
    setAddCardOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.FormContainer, {
    id: "PaymentForm"
  }, /*#__PURE__*/_react.default.createElement(_reactCreditCards.default, {
    cvc: formState.cvc,
    expiry: formState.expiry,
    focused: formState.focus,
    name: formState.name,
    number: formState.number,
    locale: {
      valid: t('VALID_THRU', 'Valid thru')
    },
    placeholders: {
      name: t('YOUR_NAME_HERE', 'Your name here')
    }
  }), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "tel",
    name: "number",
    placeholder: t('CARD_NUMBER', 'Card number'),
    inputMode: "numeric",
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    pattern: "[\\d| ]{16,22}",
    format: _cardUtils.formatCreditCardNumber,
    maxLength: 19,
    ref: formMethods.register({
      required: t('CARD_NUMBER_REQUIRED', 'Card number is required'),
      pattern: /^[\d| ]{16,22}$/i
    }),
    isError: formMethods.errors.number
  })), /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    name: "name",
    placeholder: t('NAME', 'Name'),
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    ref: formMethods.register({
      required: t('NAME_REQUIRED', 'Name is required')
    }),
    isError: formMethods.errors.name
  })), /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    name: "expiry",
    pattern: "\\d\\d/\\d\\d",
    placeholder: t('EXPIRY', 'Expiry'),
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    format: _cardUtils.formatExpirationDate,
    ref: formMethods.register({
      required: t('EXPIRY_DATE_REQUIRED', 'Expiry date required')
    }),
    isError: formMethods.errors.expiry
  }), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    name: "cvc",
    placeholder: t('CVC', 'CVC'),
    pattern: "\\d{3,4}",
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    format: _cardUtils.formatCVC,
    ref: formMethods.register({
      required: t('CVC_REQUIRED', 'CVC is required')
    }),
    isError: formMethods.errors.cvc
  })), /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    type: "submit",
    color: "primary",
    disabled: ((_Object$keys = Object.keys(formMethods.errors)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0
  }, t('SAVE', 'Save'))));
};