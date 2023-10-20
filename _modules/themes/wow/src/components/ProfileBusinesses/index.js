"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileBusinesses = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _Modal = require("../../../../../components/Modal");
var _SearchBar = require("../../../../../components/SearchBar");
var _BusinessesMap = require("../../../../../components/BusinessesMap");
var _ProfileBusinesBasicInformation = require("../ProfileBusinesBasicInformation");
var _SpecificBusiness = require("../SpecificBusiness");
var _styles = require("./styles");
var _theme_wow = require("ordering-ui/theme_wow");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProfileBusinessesUI = function ProfileBusinessesUI(props) {
  var _document$getElementB, _orderState$options, _businessesList$busin;
  var isCustomLayout = props.isCustomLayout,
    businessesList = props.businessesList,
    searchValue = props.searchValue,
    paginationProps = props.paginationProps,
    handleChangeSearch = props.handleChangeSearch,
    getBusinesses = props.getBusinesses;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var PIXELS_TO_SCROLL = ((_document$getElementB = document.getElementById('footer')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetHeight) + 100 || 300;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showList = _useState2[0],
    setShowList = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    businessDetailShow = _useState4[0],
    setBusinessDetialShow = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedBusiness = _useState6[0],
    setSelectedBusiness = _useState6[1];
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle;
    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < document.documentElement.offsetHeight;
    var hasMore = !(paginationProps.totalPages === paginationProps.currentPage);
    if (badScrollPosition || businessesList.loading || !hasMore) return;
    getBusinesses();
  }, [businessesList, paginationProps]);
  var onBusinesClick = function onBusinesClick(business) {
    setBusinessDetialShow(true);
    setSelectedBusiness(business);
  };
  var onBusinessCustomClick = function onBusinessCustomClick(slug) {
    var business = businessesList.businesses.find(function (_business) {
      return (_business === null || _business === void 0 ? void 0 : _business.slug) === slug;
    });
    onBusinesClick(business);
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESSES', 'Businesses')), !showList && /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessMap, null, /*#__PURE__*/_react.default.createElement(_styles.WrapSearchBar, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    isCustomLayout: isCustomLayout,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch
  })), !businessesList.loading && !configState.loading ? /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 ? void 0 : _orderState$options.location,
    onBusinessCustomClick: onBusinessCustomClick
  }) : /*#__PURE__*/_react.default.createElement(_styles.MapSkeleton, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)), /*#__PURE__*/_react.default.createElement(_theme_wow.Button, {
    color: "primary",
    onClick: function onClick() {
      return setShowList(true);
    }
  }, t('SHOW_LIST', 'Show list'))), businessDetailShow && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: businessDetailShow,
    width: "60%",
    onClose: function onClose() {
      return setBusinessDetialShow(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_SpecificBusiness.SpecificBusiness, {
    business: selectedBusiness
  })), showList && /*#__PURE__*/_react.default.createElement(_styles.ShowListContainer, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    isCustomLayout: isCustomLayout,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessListContainer, null, (_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    var _orderState$options2;
    return /*#__PURE__*/_react.default.createElement(_ProfileBusinesBasicInformation.ProfileBusinesBasicInformation, {
      key: business.id,
      business: business,
      orderType: orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type,
      onBusinesClick: onBusinesClick
    });
  }), businessesList.loading && _toConsumableArray(Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 8).keys()).map(function (i) {
    var _orderState$options3;
    return /*#__PURE__*/_react.default.createElement(_ProfileBusinesBasicInformation.ProfileBusinesBasicInformation, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type
    });
  })), /*#__PURE__*/_react.default.createElement(_styles.ShowMapButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_theme_wow.Button, {
    color: "primary",
    onClick: function onClick() {
      return setShowList(false);
    }
  }, t('SHOW_MAP', 'Show map')))));
};
var ProfileBusinesses = exports.ProfileBusinesses = function ProfileBusinesses(props) {
  var BusinessesListingProps = _objectSpread(_objectSpread({}, props), {}, {
    isSearchByName: true,
    isSearchByDescription: true,
    propsToFetch: ['id', 'name', 'header', 'logo', 'address', 'location', 'timezone', 'schedule', 'open', 'phone', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'menus'],
    UIComponent: ProfileBusinessesUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, BusinessesListingProps);
};