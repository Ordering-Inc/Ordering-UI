"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _MomentControl = require("../MomentControl");

var _SpinnerLoader = require("../../../../../components/SpinnerLoader");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MomentContent = function MomentContent(props) {
  var _document, _document$getElementB, _props$beforeElements, _props$beforeComponen, _orderState$options, _orderState$options$a, _props$afterComponent, _props$afterElements;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var momentControl = (_document = document) === null || _document === void 0 ? void 0 : (_document$getElementB = _document.getElementById('moment_control')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.getBoundingClientRect();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isLoading: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_MomentControl.MomentControl, null), (orderState === null || orderState === void 0 ? void 0 : orderState.loading) && /*#__PURE__*/_react.default.createElement(_styles.Layer, {
    height: (momentControl === null || momentControl === void 0 ? void 0 : momentControl.height) && "".concat(momentControl === null || momentControl === void 0 ? void 0 : momentControl.height, "px")
  }, (window.location.pathname !== '/search' || (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : _orderState$options$a.location)) && /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      top: width <= 768 ? '50%' : '40%',
      position: width <= 768 ? 'absolute' : 'sticky',
      height: 'auto'
    }
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.MomentContent = MomentContent;