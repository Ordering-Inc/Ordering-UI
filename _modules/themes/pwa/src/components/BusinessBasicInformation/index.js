"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBasicInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FaStar = _interopRequireDefault(require("@meronex/icons/fa/FaStar"));
var _BsInfoCircle = _interopRequireDefault(require("@meronex/icons/bs/BsInfoCircle"));
var _styledComponents = require("styled-components");
var _reactRouterDom = require("react-router-dom");
var _Modal = require("../Modal");
var _BusinessInformation = require("../BusinessInformation");
var _SearchBar = require("../SearchBar");
var _BusinessReviews = require("../BusinessReviews");
var _MomentContent = require("../MomentContent");
var _HiArrowNarrowLeft = _interopRequireDefault(require("@meronex/icons/hi/HiArrowNarrowLeft"));
var _orderingComponents = require("ordering-components");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _utils = require("../../../../../utils");
var _Select = require("../../styles/Select");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var types = ['food', 'laundry', 'alcohol', 'groceries'];
var BusinessBasicInformation = exports.BusinessBasicInformation = function BusinessBasicInformation(props) {
  var _props$beforeElements, _props$beforeComponen, _categoryState$produc, _theme$defaultLanguag, _businessState$busine, _orderState$options, _business$reviews, _business$reviews2, _categoryState$produc2, _theme$defaultLanguag2, _businessState$busine2, _theme$images, _business$reviews3, _business$reviews4, _props$afterComponent, _props$afterElements;
  var isSkeleton = props.isSkeleton,
    businessState = props.businessState,
    setOpenBusinessInformation = props.setOpenBusinessInformation,
    openBusinessInformation = props.openBusinessInformation,
    handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue,
    sortByOptions = props.sortByOptions,
    sortByValue = props.sortByValue,
    handleChangeSortBy = props.handleChangeSortBy,
    categoryState = props.categoryState,
    errorQuantityProducts = props.errorQuantityProducts;
  var business = businessState.business,
    loading = businessState.loading;
  var theme = (0, _styledComponents.useTheme)();
  var history = (0, _reactRouterDom.useHistory)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDistance = _useUtils2$.parseDistance,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isBusinessReviews = _useState2[0],
    setIsBusinessReviews = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPreOrder = _useState4[0],
    setIsPreOrder = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hideClose = _useState6[0],
    setHideClose = _useState6[1];
  var getBusinessType = function getBusinessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;
      return business[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 || (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };
  var openBusineesInfomation = function openBusineesInfomation() {
    setOpenBusinessInformation(true);
    if (windowSize.width > 768) {
      setHideClose(true);
    } else {
      setHideClose(false);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), windowSize.width < 768 && ((categoryState === null || categoryState === void 0 || (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.length) !== 0 || searchValue) && !errorQuantityProducts && /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, {
    style: {
      marginBottom: '15px'
    }
  }, /*#__PURE__*/_react.default.createElement(_HiArrowNarrowLeft.default, {
    onClick: function onClick() {
      return history.goBack();
    }
  }), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH_PRODUCTS', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SEARCH_PRODUCTS) || 'Search Products'),
    lazyLoad: businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, !loading ? /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "bold"
  }, business === null || business === void 0 ? void 0 : business.name)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !loading ? /*#__PURE__*/_react.default.createElement("p", {
    className: "type"
  }, getBusinessType()) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessDetail, null, (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivery fee')), business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement("p", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)) : /*#__PURE__*/_react.default.createElement("p", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }), !loading ? /*#__PURE__*/_react.default.createElement("p", null, parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "review"
  }, /*#__PURE__*/_react.default.createElement(_FaStar.default, {
    className: "start"
  }), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }))), !loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "preorder-Reviews"
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setIsPreOrder(true);
    }
  }, t('PREORDER', 'Preorder')), ((_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.reviews) && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setIsBusinessReviews(true);
    }
  }, t('REVIEWS', 'Reviews'))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })))), windowSize.width > 767 && ((categoryState === null || categoryState === void 0 || (_categoryState$produc2 = categoryState.products) === null || _categoryState$produc2 === void 0 ? void 0 : _categoryState$produc2.length) !== 0 || searchValue) && !errorQuantityProducts && /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH_PRODUCTS', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SEARCH_PRODUCTS) || 'Search Products'),
    lazyLoad: businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.lazy_load_products_recommended
  }), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    notAsync: true,
    notReload: true,
    options: sortByOptions,
    defaultValue: sortByValue,
    onChange: function onChange(val) {
      return handleChangeSortBy && handleChangeSortBy(val);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, {
    bgimage: business === null || business === void 0 ? void 0 : business.header,
    isSkeleton: isSkeleton,
    id: "container",
    isClosed: !(business !== null && business !== void 0 && business.open)
  }, !loading && !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement("h1", null, t('CLOSED', 'Closed')), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, !loading ? /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 70,
    width: 70
  }))), !loading && /*#__PURE__*/_react.default.createElement(_styles.BusinessMoreDetail, null, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
    className: "popup",
    onClick: function onClick() {
      return openBusineesInfomation();
    }
  })))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openBusinessInformation,
    onClose: setOpenBusinessInformation,
    padding: "0",
    hideCloseDefault: hideClose,
    isTransparent: true
  }, /*#__PURE__*/_react.default.createElement(_BusinessInformation.BusinessInformation, {
    business: business,
    getBusinessType: getBusinessType,
    optimizeImage: optimizeImage,
    onClose: setOpenBusinessInformation
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: isBusinessReviews,
    onClose: function onClose() {
      return setIsBusinessReviews(false);
    },
    padding: "20px"
  }, /*#__PURE__*/_react.default.createElement(_BusinessReviews.BusinessReviews, {
    businessId: business.id,
    reviews: (_business$reviews3 = business.reviews) === null || _business$reviews3 === void 0 ? void 0 : _business$reviews3.reviews,
    businessName: business.name,
    stars: (_business$reviews4 = business.reviews) === null || _business$reviews4 === void 0 ? void 0 : _business$reviews4.total
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: isPreOrder,
    onClose: function onClose() {
      return setIsPreOrder(false);
    },
    padding: "20px"
  }, /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, null)), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};