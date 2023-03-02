"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBasicInformation = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FiClock = _interopRequireDefault(require("@meronex/icons/fi/FiClock"));
var _GrLocation = _interopRequireDefault(require("@meronex/icons/gr/GrLocation"));
var _GrDeliver = _interopRequireDefault(require("@meronex/icons/gr/GrDeliver"));
var _FaStar = _interopRequireDefault(require("@meronex/icons/fa/FaStar"));
var _orderingComponents = require("ordering-components");
var _utils = require("../../../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var types = ['food', 'laundry', 'alcohol', 'groceries'];
var BusinessBasicInformation = function BusinessBasicInformation(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _orderingTheme$theme$5, _orderingTheme$theme$6, _orderingTheme$theme$7, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _orderingTheme$theme7, _orderingTheme$theme8, _orderingTheme$theme9, _orderingTheme$theme10, _orderingTheme$theme11, _orderingTheme$theme12, _orderingTheme$theme13, _orderingTheme$theme14, _orderingTheme$theme15, _orderingTheme$theme16, _orderingTheme$theme17, _orderingTheme$theme18, _orderingTheme$theme19, _orderingTheme$theme20, _orderingTheme$theme21, _orderingTheme$theme22, _orderingTheme$theme23, _orderingTheme$theme24, _orderingTheme$theme25, _orderingTheme$theme26, _orderingTheme$theme27, _orderingTheme$theme28, _orderingTheme$theme29, _orderingTheme$theme30, _orderingTheme$theme31, _orderingTheme$theme32, _orderingTheme$theme33, _props$beforeElements, _props$beforeComponen, _orderState$options, _business$reviews, _props$afterComponent, _props$afterElements;
  var isSkeleton = props.isSkeleton,
    businessState = props.businessState;
  var business = businessState.business,
    loading = businessState.loading;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDistance = _useUtils2$.parseDistance;
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var getBusinessType = function getBusinessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;
      return business[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 ? void 0 : (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };
  var showDeliveryFee = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme$ = _orderingTheme$theme.business_view) !== null && _orderingTheme$theme$ !== void 0 && (_orderingTheme$theme$2 = _orderingTheme$theme$.components) !== null && _orderingTheme$theme$2 !== void 0 && (_orderingTheme$theme$3 = _orderingTheme$theme$2.header) !== null && _orderingTheme$theme$3 !== void 0 && (_orderingTheme$theme$4 = _orderingTheme$theme$3.components) !== null && _orderingTheme$theme$4 !== void 0 && (_orderingTheme$theme$5 = _orderingTheme$theme$4.business) !== null && _orderingTheme$theme$5 !== void 0 && (_orderingTheme$theme$6 = _orderingTheme$theme$5.components) !== null && _orderingTheme$theme$6 !== void 0 && (_orderingTheme$theme$7 = _orderingTheme$theme$6.fee) !== null && _orderingTheme$theme$7 !== void 0 && _orderingTheme$theme$7.hidden);
  var showTime = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme2 = orderingTheme.theme) !== null && _orderingTheme$theme2 !== void 0 && (_orderingTheme$theme3 = _orderingTheme$theme2.business_view) !== null && _orderingTheme$theme3 !== void 0 && (_orderingTheme$theme4 = _orderingTheme$theme3.components) !== null && _orderingTheme$theme4 !== void 0 && (_orderingTheme$theme5 = _orderingTheme$theme4.header) !== null && _orderingTheme$theme5 !== void 0 && (_orderingTheme$theme6 = _orderingTheme$theme5.components) !== null && _orderingTheme$theme6 !== void 0 && (_orderingTheme$theme7 = _orderingTheme$theme6.business) !== null && _orderingTheme$theme7 !== void 0 && (_orderingTheme$theme8 = _orderingTheme$theme7.components) !== null && _orderingTheme$theme8 !== void 0 && (_orderingTheme$theme9 = _orderingTheme$theme8.time) !== null && _orderingTheme$theme9 !== void 0 && _orderingTheme$theme9.hidden);
  var showBusinessInfo = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme10 = orderingTheme.theme) !== null && _orderingTheme$theme10 !== void 0 && (_orderingTheme$theme11 = _orderingTheme$theme10.business_view) !== null && _orderingTheme$theme11 !== void 0 && (_orderingTheme$theme12 = _orderingTheme$theme11.components) !== null && _orderingTheme$theme12 !== void 0 && (_orderingTheme$theme13 = _orderingTheme$theme12.header) !== null && _orderingTheme$theme13 !== void 0 && (_orderingTheme$theme14 = _orderingTheme$theme13.components) !== null && _orderingTheme$theme14 !== void 0 && (_orderingTheme$theme15 = _orderingTheme$theme14.business) !== null && _orderingTheme$theme15 !== void 0 && (_orderingTheme$theme16 = _orderingTheme$theme15.components) !== null && _orderingTheme$theme16 !== void 0 && (_orderingTheme$theme17 = _orderingTheme$theme16.business_info) !== null && _orderingTheme$theme17 !== void 0 && _orderingTheme$theme17.hidden);
  var showReviews = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme18 = orderingTheme.theme) !== null && _orderingTheme$theme18 !== void 0 && (_orderingTheme$theme19 = _orderingTheme$theme18.business_view) !== null && _orderingTheme$theme19 !== void 0 && (_orderingTheme$theme20 = _orderingTheme$theme19.components) !== null && _orderingTheme$theme20 !== void 0 && (_orderingTheme$theme21 = _orderingTheme$theme20.header) !== null && _orderingTheme$theme21 !== void 0 && (_orderingTheme$theme22 = _orderingTheme$theme21.components) !== null && _orderingTheme$theme22 !== void 0 && (_orderingTheme$theme23 = _orderingTheme$theme22.business) !== null && _orderingTheme$theme23 !== void 0 && (_orderingTheme$theme24 = _orderingTheme$theme23.components) !== null && _orderingTheme$theme24 !== void 0 && (_orderingTheme$theme25 = _orderingTheme$theme24.reviews) !== null && _orderingTheme$theme25 !== void 0 && _orderingTheme$theme25.hidden);
  var showDistance = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme26 = orderingTheme.theme) !== null && _orderingTheme$theme26 !== void 0 && (_orderingTheme$theme27 = _orderingTheme$theme26.business_view) !== null && _orderingTheme$theme27 !== void 0 && (_orderingTheme$theme28 = _orderingTheme$theme27.components) !== null && _orderingTheme$theme28 !== void 0 && (_orderingTheme$theme29 = _orderingTheme$theme28.header) !== null && _orderingTheme$theme29 !== void 0 && (_orderingTheme$theme30 = _orderingTheme$theme29.components) !== null && _orderingTheme$theme30 !== void 0 && (_orderingTheme$theme31 = _orderingTheme$theme30.business) !== null && _orderingTheme$theme31 !== void 0 && (_orderingTheme$theme32 = _orderingTheme$theme31.components) !== null && _orderingTheme$theme32 !== void 0 && (_orderingTheme$theme33 = _orderingTheme$theme32.distance) !== null && _orderingTheme$theme33 !== void 0 && _orderingTheme$theme33.hidden);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, {
    isClosed: !(business !== null && business !== void 0 && business.open),
    isSkeleton: isSkeleton,
    id: "container"
  }, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement("h1", null, t('CLOSED', 'Closed'))) : /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement("div", null, !loading ? /*#__PURE__*/_react.default.createElement("h2", {
    className: "bold"
  }, business === null || business === void 0 ? void 0 : business.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150,
    height: 30
  })), showBusinessInfo && /*#__PURE__*/_react.default.createElement("div", null, !loading ? /*#__PURE__*/_react.default.createElement("p", {
    className: "type"
  }, getBusinessType()) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "meta"
  }, showTime && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)) : /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })), showDistance && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_GrLocation.default, null), parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })), (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && showDeliveryFee && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_GrDeliver.default, null), business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })), showReviews && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_FaStar.default, {
    className: "start"
  }), business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }))))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.BusinessBasicInformation = BusinessBasicInformation;