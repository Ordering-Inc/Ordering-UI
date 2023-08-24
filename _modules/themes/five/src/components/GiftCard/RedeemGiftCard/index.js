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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var RedeemGiftCard = function RedeemGiftCard(props) {
  var redeemGiftCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: RedeemGiftCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.RedeemGiftCard, redeemGiftCardProps);
};
exports.RedeemGiftCard = RedeemGiftCard;