"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessController = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _utils = require("../../../../../utils");

var _GrClock = _interopRequireDefault(require("@meronex/icons/gr/GrClock"));

var _GrDeliver = _interopRequireDefault(require("@meronex/icons/gr/GrDeliver"));

var _GrLocation = _interopRequireDefault(require("@meronex/icons/gr/GrLocation"));

var _GrStar = _interopRequireDefault(require("@meronex/icons/gr/GrStar"));

var _FaCrown = _interopRequireDefault(require("@meronex/icons/fa/FaCrown"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessControllerUI = function BusinessControllerUI(props) {
  var _props$beforeElements, _props$beforeComponen, _getBusinessMaxOffer, _orderState$options, _business$reviews, _business$reviews2, _business$reviews3, _props$afterComponent, _props$afterElements;

  var isPromotion = props.isPromotion,
      isSkeleton = props.isSkeleton,
      business = props.business,
      getBusinessMaxOffer = props.getBusinessMaxOffer,
      getBusinessOffer = props.getBusinessOffer,
      orderState = props.orderState,
      handleClick = props.handleClick,
      orderType = props.orderType;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDistance = _useUtils2$.parseDistance,
      parseNumber = _useUtils2$.parseNumber,
      optimizeImage = _useUtils2$.optimizeImage;

  var types = ['food', 'alcohol', 'groceries', 'laundry'];

  var businessType = function businessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;

      return business[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 ? void 0 : (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ContainerCard, {
    isSkeleton: isSkeleton,
    isPromotion: isPromotion
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessCard, {
    isSkeleton: isSkeleton,
    onClick: function onClick() {
      return !isSkeleton && handleClick && handleClick(business);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessHero, null, business !== null && business !== void 0 && business.header ? /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
    bgimage: optimizeImage(business === null || business === void 0 ? void 0 : business.header, 'h_400,c_limit'),
    isClosed: !(business !== null && business !== void 0 && business.open)
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessTags, null, (business === null || business === void 0 ? void 0 : business.featured) && /*#__PURE__*/_react.default.createElement("span", {
    className: "crown"
  }, /*#__PURE__*/_react.default.createElement(_FaCrown.default, null)), /*#__PURE__*/_react.default.createElement("div", null, getBusinessOffer(business === null || business === void 0 ? void 0 : business.offers) && /*#__PURE__*/_react.default.createElement("span", null, getBusinessOffer(business === null || business === void 0 ? void 0 : business.offers) || parsePrice(0)), !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement("span", null, t('PREORDER', 'PreOrder')))), !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement("h1", null, t('CLOSED', 'Closed'))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 120
  })), !isPromotion && /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement("div", null, business !== null && business !== void 0 && business.name ? /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, business === null || business === void 0 ? void 0 : business.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), getBusinessMaxOffer(business === null || business === void 0 ? void 0 : business.offers) ? /*#__PURE__*/_react.default.createElement(_styles.BusinessOfferName, null, /*#__PURE__*/_react.default.createElement("span", null, (_getBusinessMaxOffer = getBusinessMaxOffer(business === null || business === void 0 ? void 0 : business.offers)) === null || _getBusinessMaxOffer === void 0 ? void 0 : _getBusinessMaxOffer.name)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), /*#__PURE__*/_react.default.createElement(_styles.Categories, null, Object.keys(business).length > 0 ? businessType() : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement(_styles.Medadata, null, Object.keys(business).length > 0 ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_GrClock.default, null), (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? business === null || business === void 0 ? void 0 : business.delivery_time : business === null || business === void 0 ? void 0 : business.pickup_time) || /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }), (business === null || business === void 0 ? void 0 : business.distance) >= 0 ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_GrLocation.default, null), parseDistance(business === null || business === void 0 ? void 0 : business.distance)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }), orderType === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (business === null || business === void 0 ? void 0 : business.delivery_price) >= 0 ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_GrDeliver.default, null), business && parsePrice(business === null || business === void 0 ? void 0 : business.delivery_price)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), (business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "reviews"
  }, /*#__PURE__*/_react.default.createElement(_GrStar.default, null), /*#__PURE__*/_react.default.createElement("span", null, parseNumber(business === null || business === void 0 ? void 0 : (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total))) : (business === null || business === void 0 ? void 0 : (_business$reviews3 = business.reviews) === null || _business$reviews3 === void 0 ? void 0 : _business$reviews3.total) !== 0 && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
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

var BusinessController = function BusinessController(props) {
  var businessControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessControllerUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessController, businessControllerProps);
};

exports.BusinessController = BusinessController;