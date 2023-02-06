"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyOrders = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _ProfileOptions = require("../../../../../components/UserProfileForm/ProfileOptions");
var _OrdersOption = require("../OrdersOption");
var _Buttons = require("../../styles/Buttons");
var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));
var _reactRouterDom = require("react-router-dom");
var _styles = require("./styles");
var _Tabs = require("../../styles/Tabs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MyOrders = function MyOrders(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var hideOrders = props.hideOrders,
    businessesSearchList = props.businessesSearchList,
    onProductRedirect = props.onProductRedirect;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var history = (0, _reactRouterDom.useHistory)();
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var layout = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.orders) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.layout) === null || _orderingTheme$theme$3 === void 0 ? void 0 : _orderingTheme$theme$3.type) || 'original';
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
  var MyOrdersMenu = [{
    key: 'orders',
    value: t('ORDERS', 'Orders')
  }, {
    key: 'business',
    value: t('BUSINESS', 'Business')
  }, {
    key: 'products',
    value: t('PRODUCTS', 'Products')
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
    hideOrders: hideOrders
  }, !hideOrders && /*#__PURE__*/_react.default.createElement("h1", null, layout === 'appointments' ? t('MY_APPOINTMENTS', 'My appointments') : t('MY_ORDERS', 'My orders')), !allEmpty && /*#__PURE__*/_react.default.createElement(_styles.MyOrdersMenuContainer, {
    className: "category-lists"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, MyOrdersMenu.filter(function (option) {
    return !hideOrders || option.key !== 'orders';
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
    setIsEmptyPast: setIsEmptyPast
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
exports.MyOrders = MyOrders;