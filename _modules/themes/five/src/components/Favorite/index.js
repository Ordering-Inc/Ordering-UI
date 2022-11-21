"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Favorite = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _FavoriteList = require("../FavoriteList");

var _Tabs = require("../../styles/Tabs");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Favorite = function Favorite(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _props$beforeElements, _props$beforeComponen, _orderState$options, _orderState$options$a, _orderState$options$a2, _orderState$options2, _orderState$options2$, _orderState$options2$2, _props$afterComponent, _props$afterElements;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
      _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
      orderingTheme = _useOrderingTheme2[0];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var layout = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.favorite) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.layout) === null || _orderingTheme$theme$3 === void 0 ? void 0 : _orderingTheme$theme$3.type) || 'original';

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
    location: "".concat((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : (_orderState$options$a2 = _orderState$options$a.location) === null || _orderState$options$a2 === void 0 ? void 0 : _orderState$options$a2.lat, ",").concat((_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : (_orderState$options2$2 = _orderState$options2$.location) === null || _orderState$options2$2 === void 0 ? void 0 : _orderState$options2$2.lng),
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

exports.Favorite = Favorite;