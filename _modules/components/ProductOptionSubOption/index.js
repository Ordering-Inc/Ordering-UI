"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOptionSubOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _BsCircleFill = _interopRequireDefault(require("@meronex/icons/bs/BsCircleFill"));
var _BsCircleHalf = _interopRequireDefault(require("@meronex/icons/bs/BsCircleHalf"));
var _BsDashCircle = _interopRequireDefault(require("@meronex/icons/bs/BsDashCircle"));
var _BsPlusCircle = _interopRequireDefault(require("@meronex/icons/bs/BsPlusCircle"));
var _styles = require("./styles");
var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));
var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));
var _MdRadioButtonChecked = _interopRequireDefault(require("@meronex/icons/md/MdRadioButtonChecked"));
var _MdRadioButtonUnchecked = _interopRequireDefault(require("@meronex/icons/md/MdRadioButtonUnchecked"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var ProductOptionSubOptionUI = function ProductOptionSubOptionUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var state = props.state,
    increment = props.increment,
    decrement = props.decrement,
    balance = props.balance,
    option = props.option,
    suboption = props.suboption,
    toggleSelect = props.toggleSelect,
    changePosition = props.changePosition;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMessage = _useState2[0],
    setShowMessage = _useState2[1];
  var handleIncrement = function handleIncrement(e) {
    e.stopPropagation();
    increment();
  };
  var handleDecrement = function handleDecrement(e) {
    e.stopPropagation();
    decrement();
  };
  var handlePosition = function handlePosition(e, position) {
    e.stopPropagation();
    changePosition(position);
  };
  var handleSuboptionClick = function handleSuboptionClick() {
    var _option$suboptions;
    toggleSelect();
    if (balance === (option === null || option === void 0 ? void 0 : option.max) && (option === null || option === void 0 || (_option$suboptions = option.suboptions) === null || _option$suboptions === void 0 ? void 0 : _option$suboptions.length) > balance && !((option === null || option === void 0 ? void 0 : option.min) === 1 && (option === null || option === void 0 ? void 0 : option.max) === 1)) {
      setShowMessage(true);
    }
  };
  (0, _react.useEffect)(function () {
    var _option$suboptions2;
    if (!(balance === (option === null || option === void 0 ? void 0 : option.max) && (option === null || option === void 0 || (_option$suboptions2 = option.suboptions) === null || _option$suboptions2 === void 0 ? void 0 : _option$suboptions2.length) > balance && !((option === null || option === void 0 ? void 0 : option.min) === 1 && (option === null || option === void 0 ? void 0 : option.max) === 1))) {
      setShowMessage(false);
    }
  }, [balance]);
  var disableIncrement = option !== null && option !== void 0 && option.limit_suboptions_by_max ? balance === (option === null || option === void 0 ? void 0 : option.max) || state.quantity === suboption.max : state.quantity === (suboption === null || suboption === void 0 ? void 0 : suboption.max) || !state.selected && balance === (option === null || option === void 0 ? void 0 : option.max);
  var price = option !== null && option !== void 0 && option.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && state.position !== 'whole' ? suboption === null || suboption === void 0 ? void 0 : suboption.half_price : suboption === null || suboption === void 0 ? void 0 : suboption.price;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    onClick: function onClick() {
      return handleSuboptionClick();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconControl, null, (option === null || option === void 0 ? void 0 : option.min) === 0 && (option === null || option === void 0 ? void 0 : option.max) === 1 || (option === null || option === void 0 ? void 0 : option.max) > 1 ? state !== null && state !== void 0 && state.selected ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, {
    disabled: true
  }) : state !== null && state !== void 0 && state.selected ? /*#__PURE__*/_react.default.createElement(_MdRadioButtonChecked.default, null) : /*#__PURE__*/_react.default.createElement(_MdRadioButtonUnchecked.default, {
    disabled: true
  })), suboption.image && suboption.image !== '-' && /*#__PURE__*/_react.default.createElement(_styles.SubOptionThumbnail, {
    src: suboption.image
  }), /*#__PURE__*/_react.default.createElement(_styles.Text, null, /*#__PURE__*/_react.default.createElement("div", null, suboption === null || suboption === void 0 ? void 0 : suboption.name), showMessage && /*#__PURE__*/_react.default.createElement("span", null, "".concat(t('OPTIONS_MAX_LIMIT', 'Maximum options to choose'), ": ").concat(option === null || option === void 0 ? void 0 : option.max))), (option === null || option === void 0 ? void 0 : option.allow_suboption_quantity) && /*#__PURE__*/_react.default.createElement(_styles.QuantityControl, null, /*#__PURE__*/_react.default.createElement(_BsDashCircle.default, {
    disabled: state.quantity === 0,
    onClick: handleDecrement
  }), state.quantity, /*#__PURE__*/_react.default.createElement(_BsPlusCircle.default, {
    disabled: disableIncrement,
    onClick: handleIncrement
  })), (option === null || option === void 0 ? void 0 : option.with_half_option) && /*#__PURE__*/_react.default.createElement(_styles.PositionControl, null, /*#__PURE__*/_react.default.createElement(_BsCircleHalf.default, {
    className: ['reverse', state.selected && state.position === 'left' ? 'selected' : null].filter(function (classname) {
      return classname;
    }).join(' '),
    onClick: function onClick(e) {
      return handlePosition(e, 'left');
    }
  }), /*#__PURE__*/_react.default.createElement(_BsCircleFill.default, {
    className: [state.selected && state.position === 'whole' ? 'selected' : null].filter(function (classname) {
      return classname;
    }).join(' '),
    onClick: function onClick(e) {
      return handlePosition(e, 'whole');
    }
  }), /*#__PURE__*/_react.default.createElement(_BsCircleHalf.default, {
    className: [state.selected && state.position === 'right' ? 'selected' : null].filter(function (classname) {
      return classname;
    }).join(' '),
    onClick: function onClick(e) {
      return handlePosition(e, 'right');
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.SuboptionPrice, null, "+ ", parsePrice(price))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var ProductOptionSubOption = function ProductOptionSubOption(props) {
  var productOptionSubOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductOptionSubOptionUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductOptionSuboption, productOptionSubOptionProps);
};
exports.ProductOptionSubOption = ProductOptionSubOption;