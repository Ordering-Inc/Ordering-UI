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
var _styledComponents = require("styled-components");
var _Modal = require("../Modal");
var _BusinessInformation = require("../BusinessInformation");
var _orderingComponents = require("ordering-components");
var _utils = require("../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var types = ['food', 'laundry', 'alcohol', 'groceries'];
var BusinessBasicInformation = exports.BusinessBasicInformation = function BusinessBasicInformation(props) {
  var _theme$business_view, _theme$business_view2, _theme$business_view3, _theme$business_view4, _theme$business_view5, _theme$business_view6, _props$beforeElements, _props$beforeComponen, _theme$images, _business$reviews, _orderState$options, _props$afterComponent, _props$afterElements;
  var isSkeleton = props.isSkeleton,
    businessState = props.businessState,
    setOpenBusinessInformation = props.setOpenBusinessInformation,
    openBusinessInformation = props.openBusinessInformation;
  var business = businessState.business,
    loading = businessState.loading;
  var theme = (0, _styledComponents.useTheme)();
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
    parseDistance = _useUtils2$.parseDistance,
    optimizeImage = _useUtils2$.optimizeImage;
  var getBusinessType = function getBusinessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;
      return business[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 || (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };
  var showLogo = !(theme !== null && theme !== void 0 && (_theme$business_view = theme.business_view) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.components) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.header) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.components) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.business) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.components) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.logo) !== null && _theme$business_view !== void 0 && _theme$business_view.hidden);
  var showDeliveryFee = !(theme !== null && theme !== void 0 && (_theme$business_view2 = theme.business_view) !== null && _theme$business_view2 !== void 0 && (_theme$business_view2 = _theme$business_view2.components) !== null && _theme$business_view2 !== void 0 && (_theme$business_view2 = _theme$business_view2.header) !== null && _theme$business_view2 !== void 0 && (_theme$business_view2 = _theme$business_view2.components) !== null && _theme$business_view2 !== void 0 && (_theme$business_view2 = _theme$business_view2.business) !== null && _theme$business_view2 !== void 0 && (_theme$business_view2 = _theme$business_view2.components) !== null && _theme$business_view2 !== void 0 && (_theme$business_view2 = _theme$business_view2.fee) !== null && _theme$business_view2 !== void 0 && _theme$business_view2.hidden);
  var showTime = !(theme !== null && theme !== void 0 && (_theme$business_view3 = theme.business_view) !== null && _theme$business_view3 !== void 0 && (_theme$business_view3 = _theme$business_view3.components) !== null && _theme$business_view3 !== void 0 && (_theme$business_view3 = _theme$business_view3.header) !== null && _theme$business_view3 !== void 0 && (_theme$business_view3 = _theme$business_view3.components) !== null && _theme$business_view3 !== void 0 && (_theme$business_view3 = _theme$business_view3.business) !== null && _theme$business_view3 !== void 0 && (_theme$business_view3 = _theme$business_view3.components) !== null && _theme$business_view3 !== void 0 && (_theme$business_view3 = _theme$business_view3.time) !== null && _theme$business_view3 !== void 0 && _theme$business_view3.hidden);
  var showBusinessInfo = !(theme !== null && theme !== void 0 && (_theme$business_view4 = theme.business_view) !== null && _theme$business_view4 !== void 0 && (_theme$business_view4 = _theme$business_view4.components) !== null && _theme$business_view4 !== void 0 && (_theme$business_view4 = _theme$business_view4.header) !== null && _theme$business_view4 !== void 0 && (_theme$business_view4 = _theme$business_view4.components) !== null && _theme$business_view4 !== void 0 && (_theme$business_view4 = _theme$business_view4.business) !== null && _theme$business_view4 !== void 0 && (_theme$business_view4 = _theme$business_view4.components) !== null && _theme$business_view4 !== void 0 && (_theme$business_view4 = _theme$business_view4.business_info) !== null && _theme$business_view4 !== void 0 && _theme$business_view4.hidden);
  var showReviews = !(theme !== null && theme !== void 0 && (_theme$business_view5 = theme.business_view) !== null && _theme$business_view5 !== void 0 && (_theme$business_view5 = _theme$business_view5.components) !== null && _theme$business_view5 !== void 0 && (_theme$business_view5 = _theme$business_view5.header) !== null && _theme$business_view5 !== void 0 && (_theme$business_view5 = _theme$business_view5.components) !== null && _theme$business_view5 !== void 0 && (_theme$business_view5 = _theme$business_view5.business) !== null && _theme$business_view5 !== void 0 && (_theme$business_view5 = _theme$business_view5.components) !== null && _theme$business_view5 !== void 0 && (_theme$business_view5 = _theme$business_view5.reviews) !== null && _theme$business_view5 !== void 0 && _theme$business_view5.hidden);
  var showDistance = !(theme !== null && theme !== void 0 && (_theme$business_view6 = theme.business_view) !== null && _theme$business_view6 !== void 0 && (_theme$business_view6 = _theme$business_view6.components) !== null && _theme$business_view6 !== void 0 && (_theme$business_view6 = _theme$business_view6.header) !== null && _theme$business_view6 !== void 0 && (_theme$business_view6 = _theme$business_view6.components) !== null && _theme$business_view6 !== void 0 && (_theme$business_view6 = _theme$business_view6.business) !== null && _theme$business_view6 !== void 0 && (_theme$business_view6 = _theme$business_view6.components) !== null && _theme$business_view6 !== void 0 && (_theme$business_view6 = _theme$business_view6.distance) !== null && _theme$business_view6 !== void 0 && _theme$business_view6.hidden);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, {
    bgimage: business === null || business === void 0 ? void 0 : business.header,
    isSkeleton: isSkeleton,
    id: "container",
    isClosed: !(business !== null && business !== void 0 && business.open)
  }, !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement("h1", null, t('CLOSED', 'Closed')), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, showLogo && /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, !loading ? /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 70,
    width: 70
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement("div", null, !loading ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bold"
  }, business === null || business === void 0 ? void 0 : business.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), showReviews && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_FaStar.default, {
    className: "start"
  }), business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }))), showBusinessInfo && /*#__PURE__*/_react.default.createElement("div", null, !loading ? /*#__PURE__*/_react.default.createElement("p", {
    className: "type"
  }, getBusinessType()) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement("div", null, showTime && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)) : /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), showDistance && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_GrLocation.default, null), parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && showDeliveryFee && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_GrDeliver.default, null), business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }))), !loading && /*#__PURE__*/_react.default.createElement("div", {
    className: "information"
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setOpenBusinessInformation(true);
    }
  }, t('INFORMATION', 'Information')))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openBusinessInformation,
    onClose: setOpenBusinessInformation,
    padding: "0",
    hideCloseDefault: true,
    isTransparent: true
  }, /*#__PURE__*/_react.default.createElement(_BusinessInformation.BusinessInformation, {
    business: business,
    getBusinessType: getBusinessType,
    optimizeImage: optimizeImage,
    onClose: setOpenBusinessInformation
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