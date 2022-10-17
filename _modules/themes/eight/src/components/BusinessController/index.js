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

var _GrStar = _interopRequireDefault(require("@meronex/icons/gr/GrStar"));

var _BiCar = _interopRequireDefault(require("@meronex/icons/bi/BiCar"));

var _BiBasket = _interopRequireDefault(require("@meronex/icons/bi/BiBasket"));

var _EnDotSingle = _interopRequireDefault(require("@meronex/icons/en/EnDotSingle"));

var _styles = require("../../styles");

var _Confirm = require("../../../../../components/Confirm");

var _utils = require("../../../../../utils");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  var _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$dummies, _theme$images2, _theme$images2$dummie, _business$reviews, _business$reviews2, _orderState$options, _business$available_d, _business$busy_driver, _business$active_orde, _orderState$options2, _props$afterComponent, _props$afterElements;

  var isSkeleton = props.isSkeleton,
      business = props.business,
      isCartStore = props.isCartStore,
      getBusinessOffer = props.getBusinessOffer,
      handleClick = props.handleClick,
      orderType = props.orderType,
      isCustomLayout = props.isCustomLayout,
      isShowCallcenterInformation = props.isShowCallcenterInformation,
      isBusinessOpen = props.isBusinessOpen,
      businessWillCloseSoonMinutes = props.businessWillCloseSoonMinutes,
      isBusinessClose = props.isBusinessClose,
      handleCartStoreClick = props.handleCartStoreClick;
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
      setAlertState = _useState2[1];

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

  var handleShowAlert = function handleShowAlert() {
    setAlertState({
      open: true,
      content: [t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The Business is closed at the moment')]
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles2.ContainerCard, {
    isSkeleton: isSkeleton,
    isStore: isCartStore
  }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperBusinessCard, {
    isSkeleton: isSkeleton
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessContent, {
    isStore: isCartStore
  }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperBusinessLogo, {
    isSkeleton: isSkeleton,
    isStore: isCartStore
  }, !isSkeleton && ((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles2.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo), 'h_200,c_limit')
  }), isSkeleton && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 70,
    width: 70
  })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement("div", null, !isSkeleton && (business === null || business === void 0 ? void 0 : business.name) && /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, business === null || business === void 0 ? void 0 : business.name), isSkeleton && /*#__PURE__*/_react.default.createElement(_styles2.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), !isSkeleton && (business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "reviews"
  }, /*#__PURE__*/_react.default.createElement(_GrStar.default, null), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total)), isSkeleton && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })), !isShowCallcenterInformation && /*#__PURE__*/_react.default.createElement(_styles2.Categories, null, !isSkeleton && Object.keys(business).length > 0 && businessType(), isSkeleton && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement(_styles2.Medadata, {
    isCustomerMode: isShowCallcenterInformation
  }, orderType === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isSkeleton && (business === null || business === void 0 ? void 0 : business.delivery_price) >= 0 && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_V2', 'Delivery Fee:')), "\xA0", business && parsePrice(business === null || business === void 0 ? void 0 : business.delivery_price), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null)), isSkeleton && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }))), !isSkeleton && Object.keys(business).length > 0 && /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? business === null || business === void 0 ? void 0 : business.delivery_time : business === null || business === void 0 ? void 0 : business.pickup_time) || /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null)), isSkeleton && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), !isSkeleton && (business === null || business === void 0 ? void 0 : business.distance) >= 0 && /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, parseDistance(business === null || business === void 0 ? void 0 : business.distance)), isSkeleton && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), isShowCallcenterInformation && /*#__PURE__*/_react.default.createElement(_styles2.CallCenterInformation, null, /*#__PURE__*/_react.default.createElement(_styles2.CallCenterInformationBullet, {
    bgcolor: "green"
  }, /*#__PURE__*/_react.default.createElement(_BiCar.default, null), business === null || business === void 0 ? void 0 : (_business$available_d = business.available_drivers) === null || _business$available_d === void 0 ? void 0 : _business$available_d.length), /*#__PURE__*/_react.default.createElement(_styles2.CallCenterInformationBullet, {
    bgcolor: "red"
  }, /*#__PURE__*/_react.default.createElement(_BiCar.default, null), business === null || business === void 0 ? void 0 : (_business$busy_driver = business.busy_drivers) === null || _business$busy_driver === void 0 ? void 0 : _business$busy_driver.length), /*#__PURE__*/_react.default.createElement(_styles2.CallCenterInformationBullet, {
    bgcolor: "rgb(252,225,5)"
  }, /*#__PURE__*/_react.default.createElement(_BiBasket.default, null), business === null || business === void 0 ? void 0 : (_business$active_orde = business.active_orders) === null || _business$active_orde === void 0 ? void 0 : _business$active_orde.length))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessAddress, null, business === null || business === void 0 ? void 0 : business.address), !isSkeleton && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (business === null || business === void 0 ? void 0 : business.featured) && /*#__PURE__*/_react.default.createElement(_styles2.GreenDataItem, null, t('BLIST_FEATURED', 'Featured')), getBusinessOffer(business === null || business === void 0 ? void 0 : business.offers) && /*#__PURE__*/_react.default.createElement(_styles2.GreenDataItem, null, t('OFFER', 'Offer'), ": ", getBusinessOffer(business === null || business === void 0 ? void 0 : business.offers) || parsePrice(0)), (!isBusinessOpen || isBusinessClose) && /*#__PURE__*/_react.default.createElement(_styles2.GreenDataItem, null, t('PREORDER', 'PreOrder')), !!businessWillCloseSoonMinutes && (orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.moment) === null && isBusinessOpen && !isBusinessClose && /*#__PURE__*/_react.default.createElement(_styles2.BusinessClosed, null, businessWillCloseSoonMinutes, " ", t('MINUTES_TO_CLOSE', 'minutes to close')), (!isBusinessOpen || isBusinessClose) && /*#__PURE__*/_react.default.createElement(_styles2.BusinessClosed, null, t('CLOSED', 'Closed')))))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessActions, {
    isStore: isCartStore
  }, !isCartStore && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primaryGradient",
    disabled: isSkeleton,
    onClick: function onClick() {
      return !isSkeleton && handleClick && (!isBusinessOpen && isCustomLayout ? handleShowAlert() : handleClick(business));
    }
  }, t('SELECT_THIS_RESTAURANT', 'Select this restaurant')), isCartStore && handleCartStoreClick && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primaryGradient",
    disabled: props.disabledStoreBtn,
    onClick: function onClick() {
      return handleCartStoreClick(business.id);
    }
  }, t('SELECT_THIS_RESTAURANT', 'Select this restaurant'))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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