"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebsocketStatus = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Confirm = require("../../../src/components/Confirm");
var _Modal = require("../Modal");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
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
var SocketStatusUI = function SocketStatusUI(props) {
  var _configs$white_label_;
  var socketStatus = props.socketStatus,
    reconnectAttemptCount = props.reconnectAttemptCount,
    connectedDate = props.connectedDate;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openModal = _useState4[0],
    setOpenModal = _useState4[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var isEnabledBtn = configs === null || configs === void 0 || (_configs$white_label_ = configs.white_label_module) === null || _configs$white_label_ === void 0 ? void 0 : _configs$white_label_.value;
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    window.location.reload();
  };
  (0, _react.useEffect)(function () {
    if (reconnectAttemptCount > 3) {
      setAlertState({
        open: true,
        content: t('WEBSOCKET_CONNECT_ERROR', 'There appears to be an error in establishing the WebSocket connection. Please try reloading the page to resolve the issue.')
      });
    }
  }, [reconnectAttemptCount]);
  return /*#__PURE__*/_react.default.createElement(_styles.Contatiner, null, /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoContent, null, isEnabledBtn ? t('WEBSOCKET_STATUS_INFO_WITHOUT_LINK', 'Verify the server connection by date and time using the Connection status button. Press update to refresh you dashboard and update the status as well. Need help? Contact our Customer support team.') : t('WEBSOCKET_STATUS_APP_INFO', 'Verify the server connection by date and time using the Connection status button. Press update to refresh your app and update the status as well. Need help? Contact our Customer support team here:'), !isEnabledBtn && /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.ordering.co/contact-ordering",
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('CUSTOMER_SUPPORT', 'Customer support')))), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "8px",
    color: "secundary",
    onClick: function onClick() {
      return setOpenModal(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StatusContainer, null, /*#__PURE__*/_react.default.createElement("span", null, t('CONNECTION_STATUS', 'Connection status')), /*#__PURE__*/_react.default.createElement(_styles.WebsocketStatusDot, {
    status: socketStatus
  })))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    width: "500px",
    title: t('CONNECTION_STATUS', 'Connection status')
  }, /*#__PURE__*/_react.default.createElement(_styles.DetailContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('LAST_UPDATE', 'Last update'), ": ", parseDate(connectedDate)), /*#__PURE__*/_react.default.createElement(_styles.StatusItemWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.WebsocketStatusDot, {
    status: 1
  }), /*#__PURE__*/_react.default.createElement("span", null, t('OK', 'Ok'))), /*#__PURE__*/_react.default.createElement("p", null, t('WEBSOCKET_OK', 'The websocket works normally.'))), /*#__PURE__*/_react.default.createElement(_styles.StatusItemWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.WebsocketStatusDot, {
    status: 0
  }), /*#__PURE__*/_react.default.createElement("span", null, t('CONNECTING', 'Connecting'))), /*#__PURE__*/_react.default.createElement("p", null, t('WEBSOCKET_CONNECTING', 'The websocket is connecting.'))), /*#__PURE__*/_react.default.createElement(_styles.StatusItemWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.WebsocketStatusDot, {
    status: 2
  }), /*#__PURE__*/_react.default.createElement("span", null, t('DISCONNECTED', 'Disconnected'))), /*#__PURE__*/_react.default.createElement("p", null, t('WEBSOCKET_DISCONNECTED', 'The server is slow, please reload.'))), /*#__PURE__*/_react.default.createElement(_styles.ButtonsContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    onClick: function onClick() {
      return setOpenModal(false);
    }
  }, t('CLOSE', 'Close')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return window.location.reload();
    }
  }, t('UPDATE', 'Update'))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var WebsocketStatus = exports.WebsocketStatus = function WebsocketStatus(props) {
  var socketProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SocketStatusUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.WebsocketStatus, socketProps);
};