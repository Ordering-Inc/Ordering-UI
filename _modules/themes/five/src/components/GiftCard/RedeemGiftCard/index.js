"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RedeemGiftCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactHookForm = require("react-hook-form");
var _Confirm = require("../../Confirm");
var _Buttons = require("../../../styles/Buttons");
var _Inputs = require("../../../styles/Inputs");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var RedeemGiftCardUI = function RedeemGiftCardUI(props) {
  var _redeemedGiftCard$rec, _redeemedGiftCard$rec2;
  var actionState = props.actionState,
    redeemedGiftCard = props.redeemedGiftCard,
    handleApply = props.handleApply,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useForm = (0, _reactHookForm.useForm)(),
    control = _useForm.control,
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var codeRef = (0, _react.useRef)(null);
  var onSubmit = function onSubmit(values) {
    handleApply(values);
  };
  var handleChangeCode = function handleChangeCode(event) {
    var string = event.target.value;
    string = string.replace(/-/g, '');
    if (!string) return;
    var codeSlices = string.match(/.{1,4}/g);
    string = codeSlices.join('-').toUpperCase();
    codeRef.current.value = string;
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (!actionState.error) return;
    setAlertState({
      open: true,
      content: actionState.error
    });
  }, [actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !redeemedGiftCard ? /*#__PURE__*/_react.default.createElement(_styles.FormContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('REDEEM_GIFT_CARD', 'Redeem a gift card')), /*#__PURE__*/_react.default.createElement(_styles.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('GIFT_CARD_CODE', 'Gift card code')), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "code",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.onChange,
        value = _ref.value;
      return /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
        placeholder: "XXXX-XXXX-XXXX-XXXX",
        type: "text",
        autoComplete: "off",
        ref: codeRef,
        onChange: function onChange(e) {
          _onChange(e.target.value.toUpperCase());
          handleChangeCode(e);
        }
      });
    },
    rules: {
      required: t('VALIDATION_ERROR_REQUIRED', 'Code is required').replace('_attribute_', t('CODE', 'Code'))
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('GIFT_CARD_PASSWORD', 'Gift card password')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "password",
    type: "password",
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
    }),
    autoComplete: "new-password"
  })), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "submit",
    color: "primary",
    disabled: actionState.loading
  }, actionState !== null && actionState !== void 0 && actionState.loading ? t('LOADING', 'Loading') : t('APPLY_TO_YOUR_BALANCE', 'Apply to your balance')), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, t('GIFT_CARD', 'Gift card')), /*#__PURE__*/_react.default.createElement(_styles.GiftCardInfoContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('TYPE', 'Type'), ": ", redeemedGiftCard === null || redeemedGiftCard === void 0 ? void 0 : redeemedGiftCard.type), /*#__PURE__*/_react.default.createElement("p", null, t('AMOUNT', 'Amount'), ": ", parsePrice(redeemedGiftCard === null || redeemedGiftCard === void 0 ? void 0 : redeemedGiftCard.amount)), /*#__PURE__*/_react.default.createElement("p", null, t('FROM', 'From'), ": ", redeemedGiftCard === null || redeemedGiftCard === void 0 || (_redeemedGiftCard$rec = redeemedGiftCard.receiver) === null || _redeemedGiftCard$rec === void 0 ? void 0 : _redeemedGiftCard$rec.name, " ", redeemedGiftCard === null || redeemedGiftCard === void 0 || (_redeemedGiftCard$rec2 = redeemedGiftCard.receiver) === null || _redeemedGiftCard$rec2 === void 0 ? void 0 : _redeemedGiftCard$rec2.lastname), (redeemedGiftCard === null || redeemedGiftCard === void 0 ? void 0 : redeemedGiftCard.title) && /*#__PURE__*/_react.default.createElement("p", null, t('TITLE', 'Title'), ": ", redeemedGiftCard === null || redeemedGiftCard === void 0 ? void 0 : redeemedGiftCard.title), (redeemedGiftCard === null || redeemedGiftCard === void 0 ? void 0 : redeemedGiftCard.message) && /*#__PURE__*/_react.default.createElement("p", null, t('MESSAGES', 'Messages'), ": ", redeemedGiftCard === null || redeemedGiftCard === void 0 ? void 0 : redeemedGiftCard.message), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onClose();
    }
  }, t('OK', 'Ok')))));
};
var RedeemGiftCard = exports.RedeemGiftCard = function RedeemGiftCard(props) {
  var redeemGiftCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: RedeemGiftCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.RedeemGiftCard, redeemGiftCardProps);
};