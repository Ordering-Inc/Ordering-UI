"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductShare = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FiShare = _interopRequireDefault(require("@meronex/icons/fi/FiShare2"));
var _orderingComponents = require("ordering-components");
var _HiLink = _interopRequireDefault(require("@meronex/icons/hi/HiLink"));
var _Modal = require("../Modal");
var _ProductCopyURL = require("./ProductCopyURL");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var ProductShareUI = function ProductShareUI(props) {
  var updateShowValue = props.updateShowValue,
    showShareButton = props.showShareButton,
    urlToShare = props.urlToShare,
    btnText = props.btnText,
    withBtn = props.withBtn,
    product = props.product;
  var iconElement = (0, _react.useRef)();
  var contentElement = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openCopyUrlModal = _useState2[0],
    setOpenCopyUrlModal = _useState2[1];
  var handleClickOutside = function handleClickOutside(e) {
    var _iconElement$current, _contentElement$curre;
    var outsideIcon = !((_iconElement$current = iconElement.current) !== null && _iconElement$current !== void 0 && _iconElement$current.contains(e.target));
    var outsideButtonsShare = !((_contentElement$curre = contentElement.current) !== null && _contentElement$curre !== void 0 && _contentElement$curre.contains(e.target));
    if (outsideIcon && outsideButtonsShare) {
      updateShowValue && updateShowValue(false);
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);
  var handleClickShare = function handleClickShare() {
    updateShowValue(!showShareButton);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.IconShare, {
    ref: iconElement,
    name: "icon-share"
  }, withBtn ? /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: handleClickShare
  }, /*#__PURE__*/_react.default.createElement(_FiShare.default, null), btnText) : /*#__PURE__*/_react.default.createElement(_FiShare.default, {
    onClick: handleClickShare
  }), /*#__PURE__*/_react.default.createElement(_styles.ShareButtons, {
    ref: contentElement,
    className: "a2a_kit a2a_kit_size_32 a2a_vertical_style",
    "data-a2a-url": urlToShare,
    showShareButton: showShareButton
  }, /*#__PURE__*/_react.default.createElement(_styles.CopyButton, {
    onClick: function onClick() {
      return setOpenCopyUrlModal(true);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_HiLink.default, null))), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_facebook"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_whatsapp"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_twitter"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_email"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_dd",
    href: "https://www.addtoany.com/share"
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "650px",
    open: openCopyUrlModal,
    onClose: function onClose() {
      return setOpenCopyUrlModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductCopyURL.ProductCopyURL, {
    urlToShare: urlToShare,
    product: product,
    onClose: function onClose() {
      return setOpenCopyUrlModal(false);
    }
  })));
};
var ProductShare = exports.ProductShare = function ProductShare(props) {
  var productShareProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductShareUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductShare, productShareProps);
};