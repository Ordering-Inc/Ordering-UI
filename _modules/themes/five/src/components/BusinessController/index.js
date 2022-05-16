"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessController = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styledComponents = require("styled-components");

var _Confirm = require("../Confirm");

var _utils = require("../../../../../utils");

var _styles = require("./styles");

var _GoPrimitiveDot = _interopRequireDefault(require("@meronex/icons/go/GoPrimitiveDot"));

var _BisStar = _interopRequireDefault(require("@meronex/icons/bi/BisStar"));

var _FaCrown = _interopRequireDefault(require("@meronex/icons/fa/FaCrown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessControllerUI = function BusinessControllerUI(props) {
  var _business$available_d, _business$busy_driver, _business$active_orde, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$dummies, _configState$configs, _configState$configs$, _orderState$options, _theme$images2, _theme$images2$dummie, _theme$images3, _theme$images3$dummie, _business$reviews, _business$reviews2, _business$reviews3, _orderState$options2, _business$available_d2, _business$available_d3, _business$busy_driver2, _business$busy_driver3, _business$active_orde2, _business$active_orde3, _props$afterComponent, _props$afterElements;

  var isSkeleton = props.isSkeleton,
      business = props.business,
      getBusinessOffer = props.getBusinessOffer,
      handleClick = props.handleClick,
      orderType = props.orderType,
      isCustomLayout = props.isCustomLayout,
      isCustomerMode = props.isCustomerMode,
      isBusinessOpen = props.isBusinessOpen,
      businessWillCloseSoonMinutes = props.businessWillCloseSoonMinutes,
      onPreorderBusiness = props.onPreorderBusiness,
      firstCard = props.firstCard,
      minWidthEnabled = props.minWidthEnabled,
      typeButton = props.typeButton,
      children = props.children,
      businessHeader = props.businessHeader,
      businessFeatured = props.businessFeatured,
      businessOffers = props.businessOffers,
      businessLogo = props.businessLogo,
      businessReviews = props.businessReviews,
      businessDeliveryPrice = props.businessDeliveryPrice,
      businessDeliveryTime = props.businessDeliveryTime,
      businessPickupTime = props.businessPickupTime,
      businessDistance = props.businessDistance;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDistance = _useUtils2$.parseDistance,
      optimizeImage = _useUtils2$.optimizeImage;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1]; // const handleShowAlert = () => {
  //   setAlertState({ open: true, content: [t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The Business is closed at the moment')] })
  // }


  var handleBusinessClick = function handleBusinessClick() {
    if (onPreorderBusiness && !isBusinessOpen) onPreorderBusiness(business);else handleClick(business);
  };

  var hasInformationLength = (business === null || business === void 0 ? void 0 : (_business$available_d = business.available_drivers) === null || _business$available_d === void 0 ? void 0 : _business$available_d.length) + (business === null || business === void 0 ? void 0 : (_business$busy_driver = business.busy_drivers) === null || _business$busy_driver === void 0 ? void 0 : _business$busy_driver.length) + (business === null || business === void 0 ? void 0 : (_business$active_orde = business.active_orders) === null || _business$active_orde === void 0 ? void 0 : _business$active_orde.length) > 0;

  if (typeButton) {
    return /*#__PURE__*/_react.default.createElement(_styles.ContainerCard, {
      typeButton: typeButton
    }, children);
  }

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
    isCustomerMode: isCustomerMode && hasInformationLength,
    firstCard: firstCard,
    minWidthEnabled: minWidthEnabled
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessCard, {
    isSkeleton: isSkeleton,
    onClick: function onClick() {
      return !isSkeleton && handleClick && handleBusinessClick();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessHero, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: isCustomerMode ? 100 : 140
  }) : /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
    bgimage: optimizeImage(businessHeader || (business === null || business === void 0 ? void 0 : business.header) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_400,c_limit'),
    isClosed: !isBusinessOpen
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessTags, null, (businessFeatured !== null && businessFeatured !== void 0 ? businessFeatured : business === null || business === void 0 ? void 0 : business.featured) && /*#__PURE__*/_react.default.createElement("span", {
    className: "crown"
  }, /*#__PURE__*/_react.default.createElement(_FaCrown.default, null)), !isCustomLayout && (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.preorder_status_enabled) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value) === '1' && /*#__PURE__*/_react.default.createElement("div", null, getBusinessOffer(businessOffers !== null && businessOffers !== void 0 ? businessOffers : business === null || business === void 0 ? void 0 : business.offers) && /*#__PURE__*/_react.default.createElement("span", null, getBusinessOffer(businessOffers !== null && businessOffers !== void 0 ? businessOffers : business === null || business === void 0 ? void 0 : business.offers) || parsePrice(0)), !isBusinessOpen && /*#__PURE__*/_react.default.createElement("span", null, t('PREORDER', 'PreOrder')))), !!businessWillCloseSoonMinutes && (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.moment) === null && isBusinessOpen && /*#__PURE__*/_react.default.createElement("h1", null, businessWillCloseSoonMinutes, " ", t('MINUTES_TO_CLOSE', 'minutes to close')), !isBusinessOpen && /*#__PURE__*/_react.default.createElement("h1", {
    className: "closed"
  }, t('CLOSED', 'Closed')))), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, {
    isSkeleton: isSkeleton,
    isCustomerMode: isCustomerMode
  }, !isSkeleton && (businessLogo || business !== null && business !== void 0 && business.logo || (_theme$images2 = theme.images) !== null && _theme$images2 !== void 0 && (_theme$images2$dummie = _theme$images2.dummies) !== null && _theme$images2$dummie !== void 0 && _theme$images2$dummie.businessLogo) ? /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage(businessLogo || (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.businessLogo), 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 70,
    width: 70
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessStarInfo, null, (businessReviews !== null && businessReviews !== void 0 ? businessReviews : business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "reviews"
  }, /*#__PURE__*/_react.default.createElement(_BisStar.default, null), /*#__PURE__*/_react.default.createElement("span", null, businessReviews !== null && businessReviews !== void 0 ? businessReviews : business === null || business === void 0 ? void 0 : (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total)) : (businessReviews !== null && businessReviews !== void 0 ? businessReviews : business === null || business === void 0 ? void 0 : (_business$reviews3 = business.reviews) === null || _business$reviews3 === void 0 ? void 0 : _business$reviews3.total) !== 0 && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }))), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement("div", null, business !== null && business !== void 0 && business.name ? /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, business === null || business === void 0 ? void 0 : business.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement(_styles.Medadata, {
    isCustomerMode: isCustomerMode,
    isSkeleton: isSkeleton
  }, orderType === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (businessDeliveryPrice !== null && businessDeliveryPrice !== void 0 ? businessDeliveryPrice : business === null || business === void 0 ? void 0 : business.delivery_price) >= 0 ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivery fee')), business && parsePrice(businessDeliveryPrice !== null && businessDeliveryPrice !== void 0 ? businessDeliveryPrice : business === null || business === void 0 ? void 0 : business.delivery_price)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 70 : 65
  })), Object.keys(business).length > 0 ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_GoPrimitiveDot.default, null), (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 1 ? businessDeliveryTime !== null && businessDeliveryTime !== void 0 ? businessDeliveryTime : business === null || business === void 0 ? void 0 : business.delivery_time : businessPickupTime !== null && businessPickupTime !== void 0 ? businessPickupTime : business === null || business === void 0 ? void 0 : business.pickup_time) || /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 65
  }), (businessDistance !== null && businessDistance !== void 0 ? businessDistance : business === null || business === void 0 ? void 0 : business.distance) >= 0 ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_GoPrimitiveDot.default, null), parseDistance(businessDistance !== null && businessDistance !== void 0 ? businessDistance : business === null || business === void 0 ? void 0 : business.distance)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 65
  }), isCustomerMode && hasInformationLength && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformation, null, (business === null || business === void 0 ? void 0 : (_business$available_d2 = business.available_drivers) === null || _business$available_d2 === void 0 ? void 0 : _business$available_d2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, null, /*#__PURE__*/_react.default.createElement(_styles.InfoLength, null, business === null || business === void 0 ? void 0 : (_business$available_d3 = business.available_drivers) === null || _business$available_d3 === void 0 ? void 0 : _business$available_d3.length), /*#__PURE__*/_react.default.createElement(_styles.InfoDescription, null, t('OPEN_ORDERS', 'Open orders'))), (business === null || business === void 0 ? void 0 : (_business$busy_driver2 = business.busy_drivers) === null || _business$busy_driver2 === void 0 ? void 0 : _business$busy_driver2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, null, /*#__PURE__*/_react.default.createElement(_styles.InfoLength, null, business === null || business === void 0 ? void 0 : (_business$busy_driver3 = business.busy_drivers) === null || _business$busy_driver3 === void 0 ? void 0 : _business$busy_driver3.length), /*#__PURE__*/_react.default.createElement(_styles.InfoDescription, null, t('BUSY_DRIVERS', 'Busy drivers'))), (business === null || business === void 0 ? void 0 : (_business$active_orde2 = business.active_orders) === null || _business$active_orde2 === void 0 ? void 0 : _business$active_orde2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, null, /*#__PURE__*/_react.default.createElement(_styles.InfoLength, null, business === null || business === void 0 ? void 0 : (_business$active_orde3 = business.active_orders) === null || _business$active_orde3 === void 0 ? void 0 : _business$active_orde3.length), /*#__PURE__*/_react.default.createElement(_styles.InfoDescription, null, t('AVAILABLE_DRIVERS', 'Avalable drivers')))))))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('BUSINESS_CLOSED', 'Business Closed'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
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

var BusinessController = function BusinessController(props) {
  var businessControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessControllerUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessController, businessControllerProps);
};

exports.BusinessController = BusinessController;