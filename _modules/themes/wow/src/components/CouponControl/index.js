"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CouponControl = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Inputs = require("../../../../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _Confirm = require("../../../../../components/Confirm");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CouponControlUI = function CouponControlUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var couponDefault = props.couponDefault,
    couponInput = props.couponInput,
    handleButtonApplyClick = props.handleButtonApplyClick,
    handleRemoveCouponClick = props.handleRemoveCouponClick,
    onChangeInputCoupon = props.onChangeInputCoupon,
    confirm = props.confirm,
    setConfirm = props.setConfirm;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var onRemoveCoupon = function onRemoveCoupon() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_COUPON', 'Are you sure that you want to delete the coupon?')
    });
  };
  var handleOnAccept = function handleOnAccept() {
    if (!confirm.error) {
      handleRemoveCouponClick && handleRemoveCouponClick();
    }
    setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
      open: false,
      error: false
    }));
    onChangeInputCoupon('');
  };
  var handleClose = function handleClose() {
    setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
      open: false,
      error: false
    }));
    onChangeInputCoupon('');
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.CouponContainer, null, couponDefault ? /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return onRemoveCoupon();
    }
  }, t('REMOVE_COUPON', 'Remove Coupon'), " ", couponDefault) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: t('DISCOUNT_COUPON', 'Discount coupon'),
    onChange: function onChange(e) {
      return onChangeInputCoupon(e.target.value);
    },
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionButton, {
    disabled: !couponInput
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleButtonApplyClick
  }, t('CHOOSE_FROM_COUPON', 'Choose from coupon')))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('COUPON', 'Coupon'),
    content: confirm === null || confirm === void 0 ? void 0 : confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm === null || confirm === void 0 ? void 0 : confirm.open,
    onClose: handleClose,
    onCancel: !(confirm !== null && confirm !== void 0 && confirm.error) ? function () {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false,
        error: false
      }));
    } : null,
    onAccept: handleOnAccept,
    closeOnBackdrop: false
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var CouponControl = exports.CouponControl = function CouponControl(props) {
  var couponProp = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CouponControlUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CouponControl, couponProp);
};