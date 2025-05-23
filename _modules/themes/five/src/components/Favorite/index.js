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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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