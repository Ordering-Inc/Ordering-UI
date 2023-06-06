"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactStripeJs = require("@stripe/react-stripe-js");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
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
  var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _validationFields$fie5, _validationFields$fie6, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
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
  var zipCodeEnabled = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : (_validationFields$fie2 = _validationFields$fie.card) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.zipcode) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled;
  var zipCodeRequired = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 ? void 0 : (_validationFields$fie5 = _validationFields$fie4.card) === null || _validationFields$fie5 === void 0 ? void 0 : (_validationFields$fie6 = _validationFields$fie5.zipcode) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.required;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.FormStripe, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement(_styles.FormRow, null, !isSplitForm ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, error)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CardNumberField, null, /*#__PURE__*/_react.default.createElement("label", null, t('CARD_NUMBER', 'Card number')), /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardNumberElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, error)), /*#__PURE__*/_react.default.createElement(_styles.CardExpiryCvcField, null, /*#__PURE__*/_react.default.createElement(_styles.CardExpiryField, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXPIRE_DATE', 'Expire date')), /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardExpiryElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChangeExpiry
  }), /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, errorExpiry)), /*#__PURE__*/_react.default.createElement(_styles.CardCvcField, null, /*#__PURE__*/_react.default.createElement("label", null, t('CVC', 'CVC')), /*#__PURE__*/_react.default.createElement(_reactStripeJs.CardCvcElement, {
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChangeCvc
  }), /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, errorCvc))), zipCodeEnabled && /*#__PURE__*/_react.default.createElement(_styles.CardZipcodeField, null, /*#__PURE__*/_react.default.createElement("label", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement(_styles.ZipcodeField, {
    name: "zipcode",
    placeholder: "".concat(t('ZIPCODE', 'Zipcode')).concat(zipCodeRequired ? '*' : ''),
    options: CARD_ELEMENT_OPTIONS,
    onChange: handleChange
  }), errorZipcode && /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, t('ZIPCODE_IS_INCOMPLETED', 'The zipcode is incompleted.'))))), /*#__PURE__*/_react.default.createElement(_styles.FormActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: loading
  }, loading ? t('LOADING', 'Loading...') : t('ADD_CARD', 'Add card')))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var CardForm = function CardForm(props) {
  var cardFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CardFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CardForm, cardFormProps);
};
exports.CardForm = CardForm;