"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KioskHomeHero = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _styles2 = require("../../../Header/styles");
var _Buttons = require("../../../../styles/Buttons");
var _Modal = require("../../../Modal");
var _Kiosk = require("../../../OrderTypeSelectorContent/layouts/Kiosk");
var _LogoutPopup = require("../../../LogoutPopup");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var KioskHomeHero = exports.KioskHomeHero = function KioskHomeHero(props) {
  var _configState$configs, _theme$images, _theme$images2, _theme$defaultLanguag;
  var handleGoToBusiness = props.handleGoToBusiness;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var theme = (0, _styledComponents.useTheme)();
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useState = (0, _react.useState)({
      open: false,
      page: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    modalIsOpen = _useState2[0],
    setModalIsOpen = _useState2[1];
  var excludeTypes = [1];
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return !excludeTypes.includes(Number(value)) && Number(value);
  })) || [];
  var handleActionModal = function handleActionModal(_ref) {
    var values = _ref.values,
      isDisabled = _ref.isDisabled,
      isClean = _ref.isClean;
    if (isClean) {
      setModalIsOpen({
        open: false,
        page: ''
      });
      return;
    }
    if (isDisabled) return;
    setModalIsOpen(_objectSpread(_objectSpread({}, modalIsOpen), values));
  };
  return /*#__PURE__*/_react.default.createElement(_styles.HomeContainer, {
    onClick: function onClick() {
      return handleActionModal({
        values: {
          open: true,
          page: 'types'
        },
        isDisabled: modalIsOpen.open
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.homeHero
  }, /*#__PURE__*/_react.default.createElement(_styles.HeroContent, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "logo"
  }, /*#__PURE__*/_react.default.createElement(_styles2.LogoHeader, {
    disabledResponsive: true,
    imgW: "250px",
    imgH: "70px"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "250px",
    height: "70px",
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.logos) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.logotype,
    loading: "lazy",
    onClick: function onClick() {
      return handleActionModal({
        values: {
          open: true,
          page: 'types'
        }
      });
    },
    onTouchMove: function onTouchMove() {
      return auth ? handleActionModal({
        values: {
          open: true,
          page: 'logout'
        }
      }) : {};
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    id: "button"
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    name: "find-business",
    style: {
      width: 'auto',
      padding: '5px 20px'
    }
  }, t('TOUCH_ANYWHERE_TO_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.TOUCH_ANYWHERE_TO_ORDER) || 'Touch anywhere to order'))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen.open,
    onClose: function onClose() {
      return handleActionModal({
        isClean: true
      });
    },
    width: "100%",
    customStyle: {
      height: '100%',
      maxHeight: '100vh',
      borderRadius: 0
    }
  }, modalIsOpen.page === 'types' && /*#__PURE__*/_react.default.createElement(_Kiosk.OrderTypeSelectorContent, {
    title: t('PLEASE_SELECT_YOUR_ORDER_TYPE', 'Please select your order type'),
    onClose: function onClose() {
      handleActionModal({
        isClean: true
      });
      handleGoToBusiness && handleGoToBusiness();
    },
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1
  }), modalIsOpen.page === 'logout' && /*#__PURE__*/_react.default.createElement(_LogoutPopup.LogoutPopup, {
    onClose: function onClose() {
      return handleActionModal({
        isClean: true
      });
    }
  })));
};