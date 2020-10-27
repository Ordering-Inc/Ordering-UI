"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOptionSubOption = void 0;

var _react = _interopRequireDefault(require("react"));

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductOptionSubOptionUI = function ProductOptionSubOptionUI(props) {
  var state = props.state,
      increment = props.increment,
      decrement = props.decrement,
      balance = props.balance,
      option = props.option,
      suboption = props.suboption,
      toggleSelect = props.toggleSelect,
      changePosition = props.changePosition;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

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

  var disableIncrement = option.limit_suboptions_by_max ? balance === option.max : state.quantity === suboption.max || !state.selected && balance === option.max;
  var price = option.with_half_option && suboption.half_price && state.position !== 'whole' ? suboption.half_price : suboption.price;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    onClick: function onClick() {
      return toggleSelect();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconControl, null, option.max > 1 ? (state === null || state === void 0 ? void 0 : state.selected) ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, {
    disabled: true
  }) : (state === null || state === void 0 ? void 0 : state.selected) ? /*#__PURE__*/_react.default.createElement(_MdRadioButtonChecked.default, null) : /*#__PURE__*/_react.default.createElement(_MdRadioButtonUnchecked.default, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_styles.Text, null, suboption.name), option.allow_suboption_quantity && /*#__PURE__*/_react.default.createElement(_styles.QuantityControl, null, /*#__PURE__*/_react.default.createElement(_BsDashCircle.default, {
    disabled: state.quantity === 0,
    onClick: handleDecrement
  }), state.quantity, /*#__PURE__*/_react.default.createElement(_BsPlusCircle.default, {
    disabled: disableIncrement,
    onClick: handleIncrement
  })), option.with_half_option && /*#__PURE__*/_react.default.createElement(_styles.PositionControl, null, /*#__PURE__*/_react.default.createElement(_BsCircleHalf.default, {
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
  })), /*#__PURE__*/_react.default.createElement(_styles.SuboptionPrice, null, "+ ", parsePrice(price)));
};

var ProductOptionSubOption = function ProductOptionSubOption(props) {
  var productOptionSubOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductOptionSubOptionUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductOptionSuboption, productOptionSubOptionProps);
};

exports.ProductOptionSubOption = ProductOptionSubOption;