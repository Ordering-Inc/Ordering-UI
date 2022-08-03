"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleOrderCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styledComponents = require("styled-components");

var _utils = require("../../../../../utils");

var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));

var _Buttons = require("../../styles/Buttons");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

var _styles2 = require("../OrdersOption/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var SingleOrderCardUI = function SingleOrderCardUI(props) {
  var _theme$layouts, _theme$layouts$orders, _theme$layouts$orders2, _theme$layouts2, _theme$layouts2$order, _theme$layouts2$order2, _theme$layouts3, _theme$layouts3$order, _theme$layouts3$order2, _props$beforeElements, _props$beforeComponen, _configs$google_maps_, _order$business, _order$business2, _theme$images, _theme$images$dummies, _order$business3, _configs$google_maps_2, _order$business4, _theme$images2, _theme$images2$dummie, _order$business5, _theme$images3, _theme$images3$dummie, _order$business6, _theme$images4, _theme$images4$dummie, _order$business7, _order$summary, _order$business8, _getOrderStatus, _order$summary2, _props$afterComponent, _props$afterElements;

  var order = props.order,
      getOrderStatus = props.getOrderStatus,
      isBusinessesPage = props.isBusinessesPage,
      handleReorder = props.handleReorder,
      customArray = props.customArray,
      onRedirectPage = props.onRedirectPage,
      pastOrders = props.pastOrders,
      isCustomerMode = props.isCustomerMode,
      handleFavoriteOrder = props.handleFavoriteOrder,
      isSkeleton = props.isSkeleton,
      isFavorite = props.isFavorite;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDate = _useUtils2$.parseDate,
      optimizeImage = _useUtils2$.optimizeImage;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var handleClickCard = function handleClickCard(e, uuid) {
    if (e.target.closest('.favorite') || e.target.closest('.review')) return;

    if (customArray) {
      onRedirectPage({
        page: 'checkout',
        params: {
          cartUuid: uuid
        }
      });
    } else {
      onRedirectPage({
        page: 'order_detail',
        params: {
          orderId: uuid
        }
      });
    }
  };

  var handleClickReview = function handleClickReview(uuid) {
    onRedirectPage({
      page: 'order_detail',
      params: {
        orderId: uuid
      }
    });
  };

  var handleChangeFavorite = function handleChangeFavorite(order) {
    handleFavoriteOrder && handleFavoriteOrder(!(order !== null && order !== void 0 && order.favorite));
  };

  var businessLogo = theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$orders = _theme$layouts.orders) === null || _theme$layouts$orders === void 0 ? void 0 : (_theme$layouts$orders2 = _theme$layouts$orders.components) === null || _theme$layouts$orders2 === void 0 ? void 0 : _theme$layouts$orders2.business_logo;
  var date = theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$order = _theme$layouts2.orders) === null || _theme$layouts2$order === void 0 ? void 0 : (_theme$layouts2$order2 = _theme$layouts2$order.components) === null || _theme$layouts2$order2 === void 0 ? void 0 : _theme$layouts2$order2.date;
  var map = theme === null || theme === void 0 ? void 0 : (_theme$layouts3 = theme.layouts) === null || _theme$layouts3 === void 0 ? void 0 : (_theme$layouts3$order = _theme$layouts3.orders) === null || _theme$layouts3$order === void 0 ? void 0 : (_theme$layouts3$order2 = _theme$layouts3$order.components) === null || _theme$layouts3$order2 === void 0 ? void 0 : _theme$layouts3$order2.map;
  var isHideBusinessLogo = businessLogo === null || businessLogo === void 0 ? void 0 : businessLogo.hidden;
  var isHideDate = date === null || date === void 0 ? void 0 : date.hidden;
  var isHideMap = map === null || map === void 0 ? void 0 : map.hidden;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "order-card",
    isBusinessesPage: isBusinessesPage,
    isCustomerMode: isCustomerMode,
    onClick: function onClick(e) {
      return handleClickCard(e, order === null || order === void 0 ? void 0 : order.uuid);
    }
  }, ((configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value) || isBusinessesPage) && !isHideMap && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 80
  }) : /*#__PURE__*/_react.default.createElement(_styles.Map, {
    isBusinessesPage: isBusinessesPage
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: isBusinessesPage ? (order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.header) || (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo) : (0, _utils.getGoogleMapImage)(order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.location, configs === null || configs === void 0 ? void 0 : (_configs$google_maps_2 = configs.google_maps_api_key) === null || _configs$google_maps_2 === void 0 ? void 0 : _configs$google_maps_2.value),
    alt: isBusinessesPage ? 'business_header' : 'google-maps-img',
    height: isBusinessesPage ? '200px' : '100px',
    width: "400px"
  }))), /*#__PURE__*/_react.default.createElement(_styles.Content, {
    isCustomerMode: isCustomerMode
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60,
    height: 60
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCustomerMode && !isHideBusinessLogo && /*#__PURE__*/_react.default.createElement(_styles.BusinessLogoWrapper, {
    bgimage: optimizeImage((order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo), 'h_400,c_limit')
  }), isCustomerMode && !isHideBusinessLogo && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (((_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: ((_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.logo) || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$dummie = _theme$images4.dummies) === null || _theme$images4$dummie === void 0 ? void 0 : _theme$images4$dummie.businessLogo),
    alt: "business-logo",
    width: "75px",
    height: "75px"
  })))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessInformation, {
    activeOrders: true
  }, isCustomerMode ? /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120
  }) : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.name), /*#__PURE__*/_react.default.createElement(_styles.Price, {
    isBusinessesPage: isBusinessesPage,
    isCustomerMode: isCustomerMode
  }, /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : parsePrice((order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) || (order === null || order === void 0 ? void 0 : order.total))))) : /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120
  }) : (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.name), isSkeleton ? /*#__PURE__*/_react.default.createElement("div", {
    className: "orders-detail"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  })) : /*#__PURE__*/_react.default.createElement("div", {
    className: "orders-detail"
  }, (order === null || order === void 0 ? void 0 : order.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("p", {
    name: "order_number"
  }, t('ORDER_NUM', 'Order No.'), " ", order.id)), !isHideDate && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc, {
    outputFormat: 'MM/DD/YY hh:mm A'
  }) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })))), /*#__PURE__*/_react.default.createElement("p", {
    className: "order-status"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }) : (_getOrderStatus = getOrderStatus(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value)), !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.Price, {
    isBusinessesPage: isBusinessesPage
  }, !pastOrders && /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : parsePrice((order === null || order === void 0 ? void 0 : (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.total) || (order === null || order === void 0 ? void 0 : order.total)))), pastOrders && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, !isFavorite && (!(order !== null && order !== void 0 && order.review) || order.driver && !(order !== null && order !== void 0 && order.user_review)) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    className: "review",
    onClick: function onClick() {
      return handleClickReview(order.uuid);
    }
  }, t('REVIEW', 'Review')), order.cart && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    className: "reorder",
    outline: true,
    onClick: function onClick() {
      return handleReorder(order.id);
    }
  }, t('REORDER', 'Reorder'))), /*#__PURE__*/_react.default.createElement(_styles.FavoriteWrapper, {
    onClick: function onClick() {
      return handleChangeFavorite(order);
    },
    className: "favorite"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 20,
    height: 20
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, order !== null && order !== void 0 && order.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var SingleOrderCard = function SingleOrderCard(props) {
  var singleOrderCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleOrderCardUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SingleOrderCard, singleOrderCardProps);
};

exports.SingleOrderCard = SingleOrderCard;