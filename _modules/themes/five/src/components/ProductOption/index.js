"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Confirm = require("../Confirm");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductOptionUI = function ProductOptionUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var children = props.children,
    option = props.option,
    currentState = props.currentState,
    isAlsea = props.isAlsea,
    alseaIngredientsValidation = props.alseaIngredientsValidation;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    incrementPriceAlert = _useState2[0],
    setIncrementPriceAlert = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    disableIncrementAlert = _useState4[0],
    setDisableIncrementAlert = _useState4[1];
  var maxMin = "".concat(t('MIN', 'Min'), ". ").concat(option.min, " - ").concat(t('MAX', 'Max'), ". ").concat(option.max);
  if (option.min === 1 && option.max === 1) {
    maxMin = t('REQUIRED', 'Required');
  } else if (option.min === 0 && option.max > 0) {
    maxMin = "".concat(t('MAX', 'Max'), ". ").concat(option.max);
  } else if (option.min > 0 && option.max === 0) {
    maxMin = "".concat(t('MIN', 'Min'), ". ").concat(option.min, ")");
  }
  (0, _react.useEffect)(function () {
    var _option$name;
    if (!(isAlsea && (option === null || option === void 0 || (_option$name = option.name) === null || _option$name === void 0 ? void 0 : _option$name.toLowerCase()) === 'elige tus ingredientes' && alseaIngredientsValidation !== 9)) return;
    if (alseaIngredientsValidation < (currentState === null || currentState === void 0 ? void 0 : currentState.balance) && !disableIncrementAlert) {
      setIncrementPriceAlert(true);
      setDisableIncrementAlert(true);
    }
    if (alseaIngredientsValidation >= (currentState === null || currentState === void 0 ? void 0 : currentState.balance)) {
      setDisableIncrementAlert(false);
    }
  }, [currentState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "id_".concat(option === null || option === void 0 ? void 0 : option.id)
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapHeader, null, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, option.image && option.image !== '-' && /*#__PURE__*/_react.default.createElement(_styles.OptionThumbnail, {
    src: option.image
  }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, /*#__PURE__*/_react.default.createElement("span", null, option.name))), /*#__PURE__*/_react.default.createElement(_styles.Flag, {
    required: (option === null || option === void 0 ? void 0 : option.min) > 0
  }, maxMin)), children), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PRODUCT_FORM', 'Product form'),
    content: "".concat(t('OPTIONS_PRICE_INCREMENT', 'The price of the product will increase because additional options have been selected')),
    open: incrementPriceAlert,
    acceptText: t('ACCEPT', 'Accept'),
    onClose: function onClose() {
      return setIncrementPriceAlert(false);
    },
    onAccept: function onAccept() {
      return setIncrementPriceAlert(false);
    },
    closeOnBackdrop: false
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var ProductOption = exports.ProductOption = function ProductOption(props) {
  var productOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductOptionUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductOption, productOptionProps);
};