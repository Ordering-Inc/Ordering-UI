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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HomeHero = function HomeHero(props) {
  var _configState$configs, _configState$configs$, _props$beforeElements, _props$beforeComponen, _theme$defaultLanguag, _theme$defaultLanguag2, _props$afterComponent, _props$afterElements;
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
  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
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
  }), /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME_8', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.TITLE_HOME) || 'What type of order can we get started for you?')), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('SUBTITLE_HOME_8', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SUBTITLE_HOME) || 'Order ahead for pickup or let us deliver to your location')), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelectContainer, null, (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(1)) && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeItem, {
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
exports.HomeHero = HomeHero;