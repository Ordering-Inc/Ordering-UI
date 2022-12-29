"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverTips = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _pfchangs = require("../../styles/Buttons/theme/pfchangs");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var DriverTipsUI = function DriverTipsUI(props) {
  var _configs$driver_tip_t, _configs$currency_pos, _configs$format_numbe, _configs$format_numbe2, _props$beforeElements, _props$beforeComponen, _el$current2, _configs$format_numbe3, _props$afterComponent, _props$afterElements;
  var driverTip = props.driverTip,
    driverTipsOptions = props.driverTipsOptions,
    cart = props.cart,
    isDriverTipUseCustom = props.isDriverTipUseCustom,
    handlerChangeOption = props.handlerChangeOption,
    pfchangs = props.pfchangs;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setvalue = _useState2[1];
  var isFixedPriceType = parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1;
  var timeout = null;
  var previousSearch;
  var el = (0, _react.useRef)();
  var handleChangeDriverTip = function handleChangeDriverTip(e) {
    var _e$target, _e$target2;
    var tip = Number(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
    if (isNaN(tip) || tip < 0) return;
    setvalue(e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
  };
  var placeholderCurrency = ((configs === null || configs === void 0 ? void 0 : (_configs$currency_pos = configs.currency_position) === null || _configs$currency_pos === void 0 ? void 0 : _configs$currency_pos.value) || 'left') === 'left' ? "".concat(configs === null || configs === void 0 ? void 0 : (_configs$format_numbe = configs.format_number_currency) === null || _configs$format_numbe === void 0 ? void 0 : _configs$format_numbe.value, "0") : "0".concat(configs === null || configs === void 0 ? void 0 : (_configs$format_numbe2 = configs.format_number_currency) === null || _configs$format_numbe2 === void 0 ? void 0 : _configs$format_numbe2.value);
  var onChangeCustomValue = function onChangeCustomValue(e) {
    var _e$target3, _e$target6;
    if (previousSearch !== (e === null || e === void 0 ? void 0 : (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.value)) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        var _e$target4;
        handlerChangeOption(((_e$target4 = e.target) === null || _e$target4 === void 0 ? void 0 : _e$target4.value) || 0);
        if (el.current) {
          var _e$target5;
          el.current.value = (_e$target5 = e.target) === null || _e$target5 === void 0 ? void 0 : _e$target5.value;
        }
      }, 750);
    }
    previousSearch = (_e$target6 = e.target) === null || _e$target6 === void 0 ? void 0 : _e$target6.value;
  };
  var handleClickCustomButton = function handleClickCustomButton(value) {
    el.current.value = previousSearch = value;
    handlerChangeOption(value);
  };
  (0, _react.useEffect)(function () {
    if (el !== null && el !== void 0 && el.current) {
      el.current.onkeyup = onChangeCustomValue;
      el.current.value = (cart === null || cart === void 0 ? void 0 : cart.driver_tip) || '';
      previousSearch = cart === null || cart === void 0 ? void 0 : cart.driver_tip;
    }
  }, [el.current]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, {
    id: "driver-tip-container"
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isDriverTipUseCustom ? /*#__PURE__*/_react.default.createElement(_styles.FormDriverTip, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperInput, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "drivertip",
    type: "text",
    value: value,
    placeholder: placeholderCurrency,
    onChange: handleChangeDriverTip
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    disabled: parseFloat(value || 0) < 0 || parseFloat(value || 0) === driverTip || value === '',
    onClick: function onClick() {
      var _el$current;
      handlerChangeOption(value);
      setvalue('');
      if (el !== null && el !== void 0 && (_el$current = el.current) !== null && _el$current !== void 0 && _el$current.value) {
        el.current.value = '';
      }
    }
  }, t('APPLY_TIP', 'Apply Tip'))), parseFloat(driverTip || 0) > 0 && /*#__PURE__*/_react.default.createElement(_styles.DriverTipMessage, null, t('CURRENT_DRIVER_TIP_AMOUNT', 'Current driver tip amount'), !isFixedPriceType && " (".concat(driverTip, "%)"), ": ", isFixedPriceType ? parsePrice(driverTip) : parsePrice(cart === null || cart === void 0 ? void 0 : cart.driver_tip))) : /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, {
    pfchangs: pfchangs
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperTips, {
    pfchangs: pfchangs
  }, driverTipsOptions.map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.TipCard, {
      key: i,
      className: "".concat(option === driverTip ? 'active' : ''),
      onClick: function onClick() {
        handlerChangeOption(option);
        if (el !== null && el !== void 0 && el.current) {
          previousSearch = '';
          el.current.value = '';
        }
      },
      pfchangs: pfchangs
    }, "".concat(isFixedPriceType ? parsePrice(option) : "".concat(option, "%")));
  })), pfchangs && /*#__PURE__*/_react.default.createElement(_styles.DriverCustomContainer, null, /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: el !== null && el !== void 0 && (_el$current2 = el.current) !== null && _el$current2 !== void 0 && _el$current2.value ? 'primary' : '',
    onClick: function onClick() {
      return !previousSearch && handleClickCustomButton(5.01);
    }
  }, t('CUSTOM', 'Custom')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "drivertip",
    type: "text",
    defaultValue: "",
    placeholder: ((_configs$format_numbe3 = configs.format_number_currency) === null || _configs$format_numbe3 === void 0 ? void 0 : _configs$format_numbe3.value) || '$',
    ref: function ref(_ref) {
      el.current = _ref;
    }
  }))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var DriverTips = function DriverTips(props) {
  var driverTipsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverTipsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.DriverTips, driverTipsProps);
};
exports.DriverTips = DriverTips;