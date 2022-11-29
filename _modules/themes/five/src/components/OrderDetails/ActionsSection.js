"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsSection = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _BiStoreAlt = _interopRequireDefault(require("@meronex/icons/bi/BiStoreAlt"));
var _AiFillExclamationCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillExclamationCircle"));
var _BsPhone = _interopRequireDefault(require("@meronex/icons/bs/BsPhone"));
var _BiMessageRounded = _interopRequireDefault(require("@meronex/icons/bi/BiMessageRounded"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ActionsSection = function ActionsSection(props) {
  var _order$actionType;
  var actionType = props.actionType,
    order = props.order,
    handleBusinessRedirect = props.handleBusinessRedirect,
    businessData = props.businessData,
    unreadAlert = props.unreadAlert,
    setOpenMessages = props.setOpenMessages,
    readMessages = props.readMessages,
    setUnreadAlert = props.setUnreadAlert,
    showPhone = props.showPhone,
    showMessages = props.showMessages;
  var handleOpenMessages = function handleOpenMessages(data) {
    setOpenMessages(data);
    readMessages();
    if ((order === null || order === void 0 ? void 0 : order.unread_count) > 0) {
      data.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
    window.scrollTo(0, 0);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.ActionsBlock, null, (order === null || order === void 0 ? void 0 : order[actionType]) && (order === null || order === void 0 ? void 0 : (_order$actionType = order[actionType]) === null || _order$actionType === void 0 ? void 0 : _order$actionType.phone) && showPhone && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      var _order$actionType2;
      return window.open("tel:".concat(order === null || order === void 0 ? void 0 : (_order$actionType2 = order[actionType]) === null || _order$actionType2 === void 0 ? void 0 : _order$actionType2.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_BsPhone.default, null)), actionType === 'business' && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_BiStoreAlt.default, {
    onClick: function onClick() {
      return handleBusinessRedirect(businessData === null || businessData === void 0 ? void 0 : businessData.slug);
    }
  })), showMessages && /*#__PURE__*/_react.default.createElement(_styles.MessagesIcon, {
    onClick: function onClick() {
      return handleOpenMessages({
        driver: actionType === 'driver',
        business: actionType === 'business'
      });
    }
  }, (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && (unreadAlert === null || unreadAlert === void 0 ? void 0 : unreadAlert[actionType]) && /*#__PURE__*/_react.default.createElement(_styles.ExclamationWrapper, null, /*#__PURE__*/_react.default.createElement(_AiFillExclamationCircle.default, null)), /*#__PURE__*/_react.default.createElement(_BiMessageRounded.default, null)));
};
exports.ActionsSection = ActionsSection;