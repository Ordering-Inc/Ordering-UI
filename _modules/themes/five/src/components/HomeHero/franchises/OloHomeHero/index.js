"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OloHomeHero = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OloHomeHero = exports.OloHomeHero = function OloHomeHero(props) {
  var _configs$order_types_, _theme$my_products, _theme$images7, _theme$images8, _theme$images9, _theme$images10, _theme$images11, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$images12;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    changeType = _useOrder2[1].changeType;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)({
      listOpen: false,
      formOpen: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    modals = _useState2[0],
    setModals = _useState2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var theme = (0, _styledComponents.useTheme)();
  var configTypes = (configs === null || configs === void 0 || (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 ? void 0 : _configs$order_types_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    newAddressModalOpened = _useState4[0],
    setNewAddressModalOpened = _useState4[1];
  var bgImg = theme === null || theme === void 0 || (_theme$my_products = theme.my_products) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.components) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.images) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.components) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.homepage_background) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.components) === null || _theme$my_products === void 0 ? void 0 : _theme$my_products.image;
  var orderTypeTitle = function orderTypeTitle(type) {
    var _theme$order_types;
    return theme === null || theme === void 0 || (_theme$order_types = theme.order_types) === null || _theme$order_types === void 0 || (_theme$order_types = _theme$order_types.components) === null || _theme$order_types === void 0 || (_theme$order_types = _theme$order_types[type]) === null || _theme$order_types === void 0 || (_theme$order_types = _theme$order_types.components) === null || _theme$order_types === void 0 ? void 0 : _theme$order_types.title;
  };
  var orderTypeIcon = function orderTypeIcon(typeValue) {
    var _theme$images, _theme$images2, _theme$images3, _theme$images4, _theme$images5, _theme$images6;
    return typeValue === 1 ? theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.deliveryIco : typeValue === 2 ? theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.pickupIco : typeValue === 3 ? theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.general) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.eatinIco : typeValue === 4 ? theme === null || theme === void 0 || (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.general) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.curbsideIco : typeValue === 5 ? theme === null || theme === void 0 || (_theme$images5 = theme.images) === null || _theme$images5 === void 0 || (_theme$images5 = _theme$images5.general) === null || _theme$images5 === void 0 ? void 0 : _theme$images5.drivethruIco : theme === null || theme === void 0 || (_theme$images6 = theme.images) === null || _theme$images6 === void 0 || (_theme$images6 = _theme$images6.general) === null || _theme$images6 === void 0 ? void 0 : _theme$images6.deliveryIco;
  };
  var handleClickOrderType = function handleClickOrderType(value) {
    if (!(orderState !== null && orderState !== void 0 && orderState.loading)) {
      changeType(value);
      events.emit('go_to_page', {
        page: 'search'
      });
    }
  };
  (0, _react.useEffect)(function () {
    return function () {
      return setModals({
        listOpen: false,
        formOpen: false
      });
    };
  }, []);
  (0, _react.useEffect)(function () {
    var _orderState$options;
    if (newAddressModalOpened) return;
    if (auth && !orderState.loading && !(orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options = _orderState$options.address) !== null && _orderState$options !== void 0 && _orderState$options.location)) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
      setNewAddressModalOpened(true);
    }
  }, [auth, orderState, newAddressModalOpened]);
  var orderTypes = [{
    value: 1,
    text: t('DELIVERY', 'Delivery'),
    description: t('ORDERTYPE_DESCRIPTION_DELIVERY', 'Delivery description'),
    image: (_theme$images7 = theme.images) === null || _theme$images7 === void 0 || (_theme$images7 = _theme$images7.deliveryTypes) === null || _theme$images7 === void 0 ? void 0 : _theme$images7.delivery
  }, {
    value: 2,
    text: t('PICKUP', 'Pickup'),
    description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description'),
    image: (_theme$images8 = theme.images) === null || _theme$images8 === void 0 || (_theme$images8 = _theme$images8.deliveryTypes) === null || _theme$images8 === void 0 ? void 0 : _theme$images8.pickUp
  }, {
    value: 3,
    text: t('EAT_IN', 'Eat in'),
    description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description'),
    image: (_theme$images9 = theme.images) === null || _theme$images9 === void 0 || (_theme$images9 = _theme$images9.deliveryTypes) === null || _theme$images9 === void 0 ? void 0 : _theme$images9.eatIn
  }, {
    value: 4,
    text: t('CURBSIDE', 'Curbside'),
    description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description'),
    image: (_theme$images10 = theme.images) === null || _theme$images10 === void 0 || (_theme$images10 = _theme$images10.deliveryTypes) === null || _theme$images10 === void 0 ? void 0 : _theme$images10.curbside
  }, {
    value: 5,
    text: t('DRIVE_THRU', 'Drive thru'),
    description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description'),
    image: (_theme$images11 = theme.images) === null || _theme$images11 === void 0 || (_theme$images11 = _theme$images11.deliveryTypes) === null || _theme$images11 === void 0 ? void 0 : _theme$images11.driveThru
  }];
  return /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.HeroContent, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.TITLE_HOME) || 'All We need is Food.')), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('SUBTITLE_HOME', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SUBTITLE_HOME) || 'Let\'s start to order food now')), orderTypes && (configTypes ? orderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  }) : orderTypes).map(function (item, i) {
    var _item$text;
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListItemContainer, {
      key: i,
      onClick: function onClick() {
        return handleClickOrderType(item.value);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, null, /*#__PURE__*/_react.default.createElement("img", {
      src: orderTypeIcon(item.value),
      width: 24,
      height: 24
    })), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeTitle, null, orderTypeTitle(item === null || item === void 0 || (_item$text = item.text) === null || _item$text === void 0 || (_item$text = _item$text.replace(' ', '_')) === null || _item$text === void 0 ? void 0 : _item$text.toLowerCase()) || item.text));
  })), /*#__PURE__*/_react.default.createElement(_styles.HomeImage, {
    bgimage: bgImg || ((_theme$images12 = theme.images) === null || _theme$images12 === void 0 || (_theme$images12 = _theme$images12.general) === null || _theme$images12 === void 0 ? void 0 : _theme$images12.homeHero)
  })));
};