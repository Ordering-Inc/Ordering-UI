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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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