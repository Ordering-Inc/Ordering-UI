"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductShare = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FiShare = _interopRequireDefault(require("@meronex/icons/fi/FiShare2"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ProductShareUI = function ProductShareUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var updateShowValue = props.updateShowValue,
    showShareButton = props.showShareButton,
    urlToShare = props.urlToShare,
    btnText = props.btnText,
    withBtn = props.withBtn;
  var iconElement = (0, _react.useRef)();
  var contentElement = (0, _react.useRef)();
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.IconShare, {
    ref: iconElement,
    name: "icon-share"
  }, withBtn ? /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "secundary",
    onClick: handleClickShare
  }, /*#__PURE__*/_react.default.createElement(_FiShare.default, null), btnText) : /*#__PURE__*/_react.default.createElement(_FiShare.default, {
    onClick: handleClickShare
  }), /*#__PURE__*/_react.default.createElement(_styles.ShareButtons, {
    ref: contentElement,
    className: "a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style",
    "data-a2a-url": urlToShare,
    showShareButton: showShareButton
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "a2a_button_copy_link"
  }), /*#__PURE__*/_react.default.createElement("a", {
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
var ProductShare = exports.ProductShare = function ProductShare(props) {
  var productShareProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductShareUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductShare, productShareProps);
};