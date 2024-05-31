"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeHero = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var HomeHero = exports.HomeHero = function HomeHero(props) {
  var _configState$configs, _props$beforeElements, _props$beforeComponen, _theme$defaultLanguag, _theme$defaultLanguag2, _props$afterComponent, _props$afterElements;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    changeType = _useOrder2[1].changeType;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  var handleAddressInput = function handleAddressInput(orderType) {
    changeType(orderType);
    if (auth) {
      handleGoToPage({
        page: 'address_list'
      });
    } else {
      handleGoToPage({
        page: 'address'
      });
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
  }), /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME_8', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.TITLE_HOME) || 'What type of order can we get started for you?')), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('SUBTITLE_HOME_8', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SUBTITLE_HOME) || 'Order ahead for pickup or let us deliver to your location')), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelectContainer, null, (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(1)) && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeItem, {
    onClick: function onClick() {
      return handleAddressInput(1);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.orderTypes.delivery,
    alt: "delivery"
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeInfo, null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY', 'Delivery')), /*#__PURE__*/_react.default.createElement("p", null, t('Feugiat ipsum est egestas nulla diam dolor.')))), (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(2)) && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeItem, {
    onClick: function onClick() {
      return handleAddressInput(2);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.orderTypes.pickup,
    alt: "pickup"
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeInfo, null, /*#__PURE__*/_react.default.createElement("span", null, t('PICKUP', 'Pickup')), /*#__PURE__*/_react.default.createElement("p", null, t('Feugiat ipsum est egestas nulla diam dolor.')))), (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(3)) && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeItem, {
    onClick: function onClick() {
      return handleAddressInput(3);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.orderTypes.eatIn,
    alt: "eat in"
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeInfo, null, /*#__PURE__*/_react.default.createElement("span", null, t('EAT_IN', 'Eat in')), /*#__PURE__*/_react.default.createElement("p", null, t('Feugiat ipsum est egestas nulla diam dolor.')))), (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(4)) && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeItem, {
    onClick: function onClick() {
      return handleAddressInput(4);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.orderTypes.curbside,
    alt: "curbside"
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeInfo, null, /*#__PURE__*/_react.default.createElement("span", null, t('CURBSIDE', 'Curbside')), /*#__PURE__*/_react.default.createElement("p", null, t('Feugiat ipsum est egestas nulla diam dolor.')))), (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(5)) && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeItem, {
    onClick: function onClick() {
      return handleAddressInput(5);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.orderTypes.driveThru,
    alt: "drive thru"
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeInfo, null, /*#__PURE__*/_react.default.createElement("span", null, t('DRIVE_THRU', 'Drive thru')), /*#__PURE__*/_react.default.createElement("p", null, t('Feugiat ipsum est egestas nulla diam dolor.')))), (configState === null || configState === void 0 ? void 0 : configState.loading) && _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60,
      height: 40
    }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeInfo, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200
    }))));
  })))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};