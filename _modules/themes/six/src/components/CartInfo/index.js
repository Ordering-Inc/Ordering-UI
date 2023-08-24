"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _EnChevronDown = _interopRequireDefault(require("@meronex/icons/en/EnChevronDown"));
var _AiOutlineLeft = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineLeft"));
var _orderingComponents = require("ordering-components");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CartInfo = function CartInfo(props) {
  var _theme$images, _cart$products, _configs$dates_moment;
  var handleGoBackPage = props.handleGoBackPage,
    cart = props.cart,
    businessName = props.businessName,
    isCheckout = props.isCheckout;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    options = _useOrder2[0].options;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  var OrderTypeSelectorHeaderUI = function OrderTypeSelectorHeaderUI(props) {
    var _configs$order_types_;
    var handleChangeOrderType = props.handleChangeOrderType,
      typeSelected = props.typeSelected,
      orderTypes = props.orderTypes;
    var configTypes = (configs === null || configs === void 0 || (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 ? void 0 : _configs$order_types_.value.split('|').map(function (value) {
      return Number(value);
    })) || [];
    var filteredOrderTypes = configTypes ? orderTypes.filter(function (type) {
      return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
    }) : orderTypes;
    return /*#__PURE__*/_react.default.createElement(_styles.DeliveryItems, null, filteredOrderTypes && filteredOrderTypes.map(function (orderType) {
      return /*#__PURE__*/_react.default.createElement(_styles.Item, {
        key: orderType.value,
        onClick: function onClick() {
          return handleChangeOrderType(orderType.value);
        },
        className: typeSelected === orderType.value ? 'active' : ''
      }, orderType.itemcontent);
    }));
  };
  var OrderTypeSelectorHeader = function OrderTypeSelectorHeader(props) {
    var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];
    var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
      UIComponent: OrderTypeSelectorHeaderUI,
      orderTypes: props.orderTypes || [{
        value: 1,
        itemcontent: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DELIVERY', 'Delivery'))
      }, {
        value: 2,
        itemcontent: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('PICKUP', 'Pickup'))
      }, {
        value: 3,
        itemcontent: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('EAT_IN', 'Eat in'))
      }, {
        value: 4,
        itemcontent: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('CURBSIDE', 'Curbside'))
      }, {
        value: 5,
        itemcontent: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DRIVE_THRU', 'Drive thru'))
      }]
    });
    return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    className: "test-mark"
  }, /*#__PURE__*/_react.default.createElement(_styles.BackHeader, {
    isCheckout: isCheckout
  }, windowSize.width > 768 && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: "35px",
    height: "45px",
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.logos) === null || _theme$images === void 0 ? void 0 : _theme$images.isotype,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.HeaderText, {
    onClick: handleGoBackPage
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineLeft.default, null), windowSize.width > 768 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('BACK_STORE', 'Back to Store')))), /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.OrderReview, null, t('REVIEW_ORDER', 'Review Order'), " \xA0 (", ' ', cart === null || cart === void 0 || (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length, ' ', ")"), /*#__PURE__*/_react.default.createElement(_styles.PreTime, null, t('PREP_TIME', 'Prep time'), ' ', ':', ' ', options !== null && options !== void 0 && options.moment ? parseDate(options === null || options === void 0 ? void 0 : options.moment, {
    outputFormat: configs === null || configs === void 0 || (_configs$dates_moment = configs.dates_moment_format) === null || _configs$dates_moment === void 0 ? void 0 : _configs$dates_moment.value
  }) : t('ASAP_ABBREVIATION', 'ASAP')), /*#__PURE__*/_react.default.createElement(_styles.SubTitle, null, t('STORE', 'Store'), ':'), /*#__PURE__*/_react.default.createElement(_styles.PickStore, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'search'
      });
    }
  }, !businessName ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('SELECT_STORE', 'Select Store')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessName), /*#__PURE__*/_react.default.createElement(_EnChevronDown.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SubTitle, null, t('DELIVERY_TYPE', 'Delivery type'), ':'), /*#__PURE__*/_react.default.createElement("div", {
    className: "order-types"
  }, /*#__PURE__*/_react.default.createElement(OrderTypeSelectorHeader, null))));
};
exports.CartInfo = CartInfo;