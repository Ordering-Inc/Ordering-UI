"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Favorite = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _FavoriteList = require("../FavoriteList");
var _Tabs = require("../../styles/Tabs");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Favorite = exports.Favorite = function Favorite(props) {
  var _theme$favorite, _props$beforeElements, _props$beforeComponen, _orderState$options, _orderState$options2, _props$afterComponent, _props$afterElements;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var theme = (0, _styledComponents.useTheme)();
  var layout = (theme === null || theme === void 0 || (_theme$favorite = theme.favorite) === null || _theme$favorite === void 0 || (_theme$favorite = _theme$favorite.components) === null || _theme$favorite === void 0 || (_theme$favorite = _theme$favorite.layout) === null || _theme$favorite === void 0 ? void 0 : _theme$favorite.type) || 'original';
  var _useState = (0, _react.useState)('businesses'),
    _useState2 = _slicedToArray(_useState, 2),
    tabSelected = _useState2[0],
    setTabSelected = _useState2[1];
  var tabList = [{
    key: 'businesses',
    name: t('BUSINESSES', 'Businesses')
  }, {
    key: 'products',
    name: t('PRODUCTS', 'Products')
  }, {
    key: 'orders',
    name: t('ORDERS', 'Orders')
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.FavoritesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('FAVORITES', 'Favorites')), /*#__PURE__*/_react.default.createElement(_styles.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, tabList.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: i,
      borderBottom: true,
      active: item.key === tabSelected,
      onClick: function onClick() {
        return setTabSelected(item.key);
      }
    }, item === null || item === void 0 ? void 0 : item.name);
  }), layout === 'appointments' && /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    borderBottom: true,
    active: tabSelected === 'professionals',
    onClick: function onClick() {
      return setTabSelected('professionals');
    }
  }, t('PROFESSIONALS', 'Professionals')))), /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, tabSelected === 'businesses' && /*#__PURE__*/_react.default.createElement(_FavoriteList.FavoriteList, {
    isBusiness: true,
    favoriteURL: "favorite_businesses",
    originalURL: "business",
    location: "".concat((_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.location) === null || _orderState$options === void 0 ? void 0 : _orderState$options.lat, ",").concat((_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.address) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.location) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.lng),
    propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'address', 'ribbon', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
  }), tabSelected === 'products' && /*#__PURE__*/_react.default.createElement(_FavoriteList.FavoriteList, {
    favoriteURL: "favorite_products",
    originalURL: "products",
    isProduct: true
  }), tabSelected === 'orders' && /*#__PURE__*/_react.default.createElement(_FavoriteList.FavoriteList, {
    favoriteURL: "favorite_orders",
    originalURL: "orders",
    isOrder: true
  }), tabSelected === 'professionals' && /*#__PURE__*/_react.default.createElement(_FavoriteList.FavoriteList, {
    favoriteURL: "favorite_users",
    originalURL: "users",
    isProfessional: true
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