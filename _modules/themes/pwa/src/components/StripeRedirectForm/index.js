"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripeRedirectForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _Inputs = require("../../styles/Inputs");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var StripeRedirectFormUI = function StripeRedirectFormUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var paymethods = props.paymethods,
    handleSubmitPaymentMethod = props.handleSubmitPaymentMethod;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors,
    formState = _useForm.formState;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.FormRedirect, {
    onSubmit: handleSubmit(handleSubmitPaymentMethod)
  }, /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('SELECT_A_PAYMENT_METHOD', 'Select a payment method')), /*#__PURE__*/_react.default.createElement("select", {
    name: "type",
    ref: register({
      required: true
    })
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, t('SELECT_A_PAYMENT_METHOD', 'Select a payment method')), (paymethods === null || paymethods === void 0 ? void 0 : paymethods.length) > 0 && paymethods.map(function (paymethod, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i,
      value: paymethod.value
    }, paymethod.name);
  })), errors.type && errors.type.type === 'required' && /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, t('FIELD_REQUIRED', 'This field is required'))), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('ACCOUNT_HOLDER', 'Account holder')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "name",
    defaultValue: user === null || user === void 0 ? void 0 : user.name,
    placeholder: t('TYPE_ACCOUNT_HOLDER', 'Type an Account holder'),
    ref: register({
      required: true
    }),
    autoComplete: "off"
  }), errors.name && errors.name.type === 'required' && /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, t('FIELD_REQUIRED', 'This field is required'))), /*#__PURE__*/_react.default.createElement(_styles.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "email",
    type: "email",
    defaultValue: user === null || user === void 0 ? void 0 : user.email,
    placeholder: t('TYPE_AN_EMAIL', 'Type an email'),
    ref: register({
      required: true
    }),
    autoComplete: "off"
  }), errors.email && errors.email.type === 'required' && /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, t('FIELD_REQUIRED', 'This field is required'))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: formState.isSubmitting
  }, formState.isSubmitting ? t('LOADING', 'Loading...') : t('OK', 'OK'))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var StripeRedirectForm = exports.StripeRedirectForm = function StripeRedirectForm(props) {
  var stripeRedirectFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: StripeRedirectFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.StripeRedirectForm, stripeRedirectFormProps);
};