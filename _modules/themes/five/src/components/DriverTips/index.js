"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverTips = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
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
var DriverTipsUI = function DriverTipsUI(props) {
  var _ref, _configs$driver_tip_t, _configs$currency_pos, _configs$format_numbe, _configs$format_numbe2;
  var isMulti = props.isMulti,
    driverTip = props.driverTip,
    driverTipsOptions = props.driverTipsOptions,
    cart = props.cart,
    carts = props.carts,
    isDriverTipUseCustom = props.isDriverTipUseCustom,
    handlerChangeOption = props.handlerChangeOption;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)((_ref = isDriverTipUseCustom && !driverTipsOptions.includes(driverTip)) !== null && _ref !== void 0 ? _ref : false),
    _useState2 = _slicedToArray(_useState, 2),
    customTip = _useState2[0],
    setCustomTip = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setvalue = _useState4[1];
  var isFixedPriceType = parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1;
  var currentTip = customTip ? parseFloat(driverTip || 0) > 0 : (!customTip && !driverTipsOptions.includes(driverTip) && parseFloat(driverTip || 0)) > 0;
  var handleChangeDriverTip = function handleChangeDriverTip(e) {
    var _e$target, _e$target2;
    var tip = Number(e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
    if (isNaN(tip) || tip < 0) return;
    setvalue(e === null || e === void 0 || (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
  };
  var placeholderCurrency = !isFixedPriceType ? "0%" : ((configs === null || configs === void 0 || (_configs$currency_pos = configs.currency_position) === null || _configs$currency_pos === void 0 ? void 0 : _configs$currency_pos.value) || 'left') === 'left' ? "".concat(configs === null || configs === void 0 || (_configs$format_numbe = configs.format_number_currency) === null || _configs$format_numbe === void 0 ? void 0 : _configs$format_numbe.value, "0") : "0".concat(configs === null || configs === void 0 || (_configs$format_numbe2 = configs.format_number_currency) === null || _configs$format_numbe2 === void 0 ? void 0 : _configs$format_numbe2.value);
  var multiCartTipsAmmout = carts === null || carts === void 0 ? void 0 : carts.reduce(function (total, cart) {
    return total + parseFloat((cart === null || cart === void 0 ? void 0 : cart.driver_tip) || 0);
  }, 0);
  return /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, {
    id: "driver-tip-container"
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperTips, null, driverTipsOptions.map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.TipCard, {
      key: i,
      className: "".concat(option === driverTip && !customTip ? 'active' : ''),
      onClick: function onClick() {
        handlerChangeOption(option);
        setCustomTip(false);
      }
    }, "".concat(isFixedPriceType ? parsePrice(option) : "".concat(option, "%")));
  }), isDriverTipUseCustom && /*#__PURE__*/_react.default.createElement(_styles.TipCard, {
    className: "".concat(customTip ? 'active' : ''),
    onClick: function onClick() {
      return setCustomTip(true);
    }
  }, t('CUSTOM_TIP', 'Custom')), /*#__PURE__*/_react.default.createElement(_styles.FormDriverTip, null, customTip && /*#__PURE__*/_react.default.createElement(_styles.WrapperInput, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "drivertip",
    type: "text",
    value: value,
    placeholder: placeholderCurrency,
    onChange: handleChangeDriverTip
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    disabled: parseFloat(value || 0) < 0 || parseFloat(value || 0) === driverTip || value === '',
    onClick: function onClick() {
      handlerChangeOption(value);
      setvalue('');
    }
  }, t('APPLY_TIP', 'Apply Tip')))), currentTip && /*#__PURE__*/_react.default.createElement(_styles.DriverTipMessage, null, t('CURRENT_DRIVER_TIP_AMOUNT', 'Current driver tip amount'), !isFixedPriceType && " (".concat(driverTip, "%)"), ": ", parsePrice(isMulti ? multiCartTipsAmmout : isFixedPriceType ? driverTip : cart === null || cart === void 0 ? void 0 : cart.driver_tip)))));
};
var DriverTips = exports.DriverTips = function DriverTips(props) {
  var driverTipsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverTipsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.DriverTips, driverTipsProps);
};