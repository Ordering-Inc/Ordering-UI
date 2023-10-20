"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactStripeJs = require("@stripe/react-stripe-js");
var _orderingComponents = require("ordering-components");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  },
  showIcon: true
};
var CardFormUI = function CardFormUI(props) {
  var _validationFields$fie, _validationFields$fie2;
  var error = props.error,
    errorExpiry = props.errorExpiry,
    errorCvc = props.errorCvc,
    loading = props.loading,
    handleSubmit = props.handleSubmit,
    handleChange = props.handleChange,
    isSplitForm = props.isSplitForm,
    handleChangeExpiry = props.handleChangeExpiry,
    handleChangeCvc = props.handleChangeCvc,
    errorZipcode = props.errorZipcode;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var zipCodeEnabled = validationFields === null || validationFields === void 0 || (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.card) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.zipcode) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.enabled;
  var zipCodeRequired = validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.card) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.zipcode) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.required;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormStripe, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_styles2.FormRow, null, !isSplitForm ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, error)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CardNumberField, null, /*#__PURE__*/_react.default.createElement("label", null, t('CARD_NUMBER', 'Card number')), /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardNumberElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, error)), /*#__PURE__*/_react.default.createElement(_styles2.CardExpiryCvcField, null, /*#__PURE__*/_react.default.createElement(_styles2.CardExpiryField, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXPIRE_DATE', 'Expire date')), /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardExpiryElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChangeExpiry
  }), /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, errorExpiry)), /*#__PURE__*/_react.default.createElement(_styles2.CardCvcField, null, /*#__PURE__*/_react.default.createElement("label", null, t('CVC', 'CVC')), /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardCvcElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChangeCvc
  }), /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, errorCvc))), zipCodeEnabled && /*#__PURE__*/_react.default.createElement(_styles2.CardZipcodeField, null, /*#__PURE__*/_react.default.createElement("label", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement(_styles2.ZipcodeField, {
    name: "zipcode",
    placeholder: "".concat(t('ZIPCODE', 'Zipcode')).concat(zipCodeRequired ? '*' : ''),
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChange,
    pattern: "[0-9]",
    type: "number"
  }), errorZipcode && /*#__PURE__*/_react.default.createElement(_styles2.ErrorMessage, null, t('ZIPCODE_IS_INCOMPLETED', 'The zipcode is incompleted.'))))), /*#__PURE__*/_react.default.createElement(_styles2.FormActions, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: loading
  }, loading ? t('LOADING', 'Loading...') : t('ADD_CARD', 'Add card')))));
};
var CardForm = exports.CardForm = function CardForm(props) {
  var cardFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CardFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CardForm, cardFormProps);
};