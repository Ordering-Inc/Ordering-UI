"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyOrders = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _ProfileOptions = require("../../../../../components/UserProfileForm/ProfileOptions");
var _OrdersOption = require("../OrdersOption");
var _GiftCardOrdersList = require("../GiftCard/GiftCardOrdersList");
var _Buttons = require("../../styles/Buttons");
var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));
var _reactRouterDom = require("react-router-dom");
var _styles = require("./styles");
var _Tabs = require("../../styles/Tabs");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MyOrders = exports.MyOrders = function MyOrders(props) {
  var _theme$orders, _theme$orders2, _theme$orders3, _configs$cash_wallet, _configs$wallet_enabl, _configs$wallet_cash_, _configs$wallet_credi, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var hideOrders = props.hideOrders,
    isFromBusinessListingSearch = props.isFromBusinessListingSearch,
    businessesSearchList = props.businessesSearchList,
    onProductRedirect = props.onProductRedirect,
    onRedirectPage = props.onRedirectPage;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var history = (0, _reactRouterDom.useHistory)();
  var theme = (0, _styledComponents.useTheme)();
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var layout = (theme === null || theme === void 0 || (_theme$orders = theme.orders) === null || _theme$orders === void 0 || (_theme$orders = _theme$orders.components) === null || _theme$orders === void 0 || (_theme$orders = _theme$orders.layout) === null || _theme$orders === void 0 ? void 0 : _theme$orders.type) || 'original';
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEmptyActive = _useState2[0],
    setIsEmptyActive = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isEmptyPast = _useState4[0],
    setIsEmptyPast = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isEmptyPreorder = _useState6[0],
    setIsEmptyPreorder = _useState6[1];
  var _useState7 = (0, _react.useState)(!hideOrders ? 'orders' : 'business'),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedOption = _useState8[0],
    setSelectedOption = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isEmptyBusinesses = _useState10[0],
    setIsEmptyBusinesses = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    businessOrderIds = _useState12[0],
    setBusinessOrderIds = _useState12[1];
  var hideProductsTab = theme === null || theme === void 0 || (_theme$orders2 = theme.orders) === null || _theme$orders2 === void 0 || (_theme$orders2 = _theme$orders2.components) === null || _theme$orders2 === void 0 || (_theme$orders2 = _theme$orders2.products_tab) === null || _theme$orders2 === void 0 ? void 0 : _theme$orders2.hidden;
  var hideBusinessTab = theme === null || theme === void 0 || (_theme$orders3 = theme.orders) === null || _theme$orders3 === void 0 || (_theme$orders3 = _theme$orders3.components) === null || _theme$orders3 === void 0 || (_theme$orders3 = _theme$orders3.business_tab) === null || _theme$orders3 === void 0 ? void 0 : _theme$orders3.hidden;
  var isWalletEnabled = (configs === null || configs === void 0 || (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 || (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && ((configs === null || configs === void 0 || (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1' || (configs === null || configs === void 0 || (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1');
  var MyOrdersMenu = [{
    key: 'orders',
    value: t('ORDERS', 'Orders'),
    disabled: false
  }, {
    key: 'business',
    value: t('BUSINESS', 'Business'),
    disabled: hideBusinessTab
  }, {
    key: 'products',
    value: t('PRODUCTS', 'Products'),
    disabled: hideProductsTab
  }, {
    key: 'giftCards',
    value: t('GIFT_CARD', 'Gift card'),
    disabled: !isWalletEnabled
  }];
  var notOrderOptions = ['business', 'products', 'professionals'];
  var allEmpty = isEmptyActive && isEmptyPast && isEmptyPreorder || (isEmptyBusinesses || (businessOrderIds === null || businessOrderIds === void 0 ? void 0 : businessOrderIds.length) === 0) && hideOrders;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), hideOrders && !allEmpty && /*#__PURE__*/_react.default.createElement("h2", null, t('PREVIOUSLY_ORDERED', 'Previously ordered')), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    hideOrders: hideOrders,
    initialHeight: isFromBusinessListingSearch
  }, !hideOrders && /*#__PURE__*/_react.default.createElement("h1", null, layout === 'appointments' ? t('MY_APPOINTMENTS', 'My appointments') : t('MY_ORDERS', 'My orders')), !allEmpty && /*#__PURE__*/_react.default.createElement(_styles.MyOrdersMenuContainer, {
    className: "category-lists"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, MyOrdersMenu.filter(function (option) {
    return (!hideOrders || option.key !== 'orders') && !option.disabled;
  }).map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      key: option.key,
      onClick: function onClick() {
        return setSelectedOption(option.key);
      },
      active: selectedOption === option.key,
      borderBottom: true
    }, option === null || option === void 0 ? void 0 : option.value);
  }), layout === 'appointments' && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return setSelectedOption('professionals');
    },
    active: selectedOption === 'professionals',
    borderBottom: true
  }, t('PROFESSIONALS', 'Professionals')))), selectedOption === 'orders' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isEmptyActive && isEmptyPast && isEmptyPreorder ? /*#__PURE__*/_react.default.createElement(_styles.NoOrdersWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('YOU_DONT_HAVE_ORDERS', 'You don\'t have any orders')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return history.push('/');
    }
  }, t('ORDER_NOW', 'Order now'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, _extends({}, props, {
    preOrders: true,
    horizontal: true,
    setIsEmptyPreorder: setIsEmptyPreorder
  })), !isEmptyPreorder && /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, _extends({}, props, {
    activeOrders: true,
    horizontal: true,
    setIsEmptyActive: setIsEmptyActive
  })), !isEmptyActive && /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, _extends({}, props, {
    pastOrders: true,
    setIsEmptyPast: setIsEmptyPast,
    handleRedirectToCheckout: function handleRedirectToCheckout(uuid) {
      onRedirectPage && onRedirectPage({
        page: 'checkout',
        params: {
          cartUuid: uuid
        }
      });
    }
  })), !isEmptyPast && /*#__PURE__*/_react.default.createElement(_styles.Divider, null))), notOrderOptions.includes(selectedOption) && /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, _extends({}, props, {
    titleContent: t('PREVIOUSLY_ORDERED', 'Previously ordered'),
    hideOrders: true,
    horizontal: true,
    isBusiness: selectedOption === 'business',
    isProducts: selectedOption === 'products',
    isProfessionals: selectedOption === 'professionals',
    activeOrders: true,
    pastOrders: true,
    preOrders: true,
    businessesSearchList: businessesSearchList,
    setIsEmptyBusinesses: setIsEmptyBusinesses,
    businessOrderIds: businessOrderIds,
    setBusinessOrderIds: setBusinessOrderIds,
    onProductRedirect: onProductRedirect
  })), selectedOption === 'giftCards' && /*#__PURE__*/_react.default.createElement(_GiftCardOrdersList.GiftCardOrdersList, null)), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};