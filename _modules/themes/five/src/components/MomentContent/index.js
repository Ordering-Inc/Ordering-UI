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
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MomentContent = function MomentContent(props) {
  var _props$preorderMaximu, _configs$max_days_pre, _document, _document$getElementB, _props$beforeElements, _props$beforeComponen, _orderState$options, _orderState$options$a, _props$afterComponent, _props$afterElements;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    _useConfig2$ = _useConfig2[0],
    configs = _useConfig2$.configs,
    loading = _useConfig2$.loading;
  var limitDays = parseInt((_props$preorderMaximu = props.preorderMaximumDays) !== null && _props$preorderMaximu !== void 0 ? _props$preorderMaximu : configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre = configs.max_days_preorder) === null || _configs$max_days_pre === void 0 ? void 0 : _configs$max_days_pre.value, 10);
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var currentDate = new Date();
  var time = limitDays > 1 ? currentDate.getTime() + (limitDays - 1) * 24 * 60 * 60 * 1000 : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + 6 * 24 * 60 * 60 * 1000;
  currentDate.setTime(time);
  currentDate.setHours(23);
  currentDate.setMinutes(59);
  var momentProps = {
    maxDate: currentDate
  };
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
  }, (!props.cateringPreorder || !loading) && /*#__PURE__*/_react.default.createElement(_MomentControl.MomentControl, _extends({}, momentProps, {
    onClose: props.onClose,
    cateringPreorder: props.cateringPreorder,
    isCart: props.isCart,
    preorderSlotInterval: props.preorderSlotInterval,
    preorderLeadTime: props.preorderLeadTime,
    preorderTimeRange: props.preorderTimeRange,
    preorderMaximumDays: props.preorderMaximumDays,
    preorderMinimumDays: props.preorderMinimumDays,
    business: props.business
  })), (orderState === null || orderState === void 0 ? void 0 : orderState.loading) && !props.isHeader && /*#__PURE__*/_react.default.createElement(_styles.Layer, {
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