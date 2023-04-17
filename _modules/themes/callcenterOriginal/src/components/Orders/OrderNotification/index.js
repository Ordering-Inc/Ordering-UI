"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderNotification = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _Shared = require("../../Shared");
require("react-toastify/dist/ReactToastify.css");
var _reactToastify = require("react-toastify");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_reactToastify.toast.configure();
var OrderNotificationUI = function OrderNotificationUI(props) {
  var isOnlyDelivery = props.isOnlyDelivery;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    notificationModalOpen = _useState2[0],
    setNotificationModalOpen = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    registerOrderIds = _useState4[0],
    setRegisterOrderIds = _useState4[1];
  var handleNotification = function handleNotification(order) {
    if (isOnlyDelivery && (order === null || order === void 0 ? void 0 : order.delivery_type) !== 1) return;
    var _registerOrderIds = _toConsumableArray(registerOrderIds);
    if (!_registerOrderIds.includes(order.id)) {
      var _configState$configs, _configState$configs$;
      _registerOrderIds.push(order.id);
      setRegisterOrderIds(_registerOrderIds);
      if ((configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.notification_toast) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value) === 'true') {
        toastNotify(order.id);
      } else {
        setNotificationModalOpen(true);
      }
    }
  };
  var handleCloseNotificationModal = function handleCloseNotificationModal() {
    setNotificationModalOpen(false);
    setRegisterOrderIds([]);
  };
  var toastNotify = function toastNotify(orderId) {
    var toastConfigure = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    };
    var content = function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.ToastWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
        src: theme.images.logos.isotype,
        alt: ""
      }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, t('WEB_DASHBOARD_APPNAME', 'Ordering Dashboard')), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_N_ORDERED', 'Order #_order_id_ has been ordered.').replace('_order_id_', "".concat(orderId)))));
    };
    (0, _reactToastify.toast)(content, toastConfigure);
    var sound = document.getElementById('notification-sound');
    if (sound !== null && sound !== void 0 && sound.muted && sound !== null && sound !== void 0 && sound.play) {
      sound.muted = false;
      sound.play();
      setRegisterOrderIds([]);
    }
  };
  (0, _react.useEffect)(function () {
    if (registerOrderIds.length > 0) return;
    setNotificationModalOpen(false);
  }, [registerOrderIds]);
  (0, _react.useEffect)(function () {
    var sound = document.getElementById('notification-sound');
    var interval = setInterval(function () {
      if (notificationModalOpen && sound !== null && sound !== void 0 && sound.muted && sound !== null && sound !== void 0 && sound.play) {
        sound.muted = false;
        sound.play();
      }
    }, 3000);
    if (!notificationModalOpen) {
      clearInterval(interval);
      return;
    }
    return function () {
      return clearInterval(interval);
    };
  }, [notificationModalOpen]);
  (0, _react.useEffect)(function () {
    if (configState.loading) return;
    events.on('order_added', handleNotification);
    return function () {
      events.off('order_added', handleNotification);
    };
  }, [configState, registerOrderIds]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "750px",
    open: notificationModalOpen,
    onClose: handleCloseNotificationModal
  }, /*#__PURE__*/_react.default.createElement(_styles.ModalContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('NEW_ORDRES_RECEIVED', 'New orders have been received!')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.registerOrder,
    alt: ""
  }), registerOrderIds.map(function (orderId) {
    return /*#__PURE__*/_react.default.createElement("p", {
      key: orderId
    }, t('ORDER_N_ORDERED', 'Order #_order_id_ has been ordered.').replace('_order_id_', "".concat(orderId)));
  }))));
};
var OrderNotification = function OrderNotification(props) {
  var orderNotificationProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderNotificationUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderNotification, orderNotificationProps);
};
exports.OrderNotification = OrderNotification;