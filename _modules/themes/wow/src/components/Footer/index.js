"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;
var _react = _interopRequireDefault(require("react"));
var _EnTwitterWithCircle = _interopRequireDefault(require("@meronex/icons/en/EnTwitterWithCircle"));
var _FaFacebook = _interopRequireDefault(require("@meronex/icons/fa/FaFacebook"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Footer = function Footer(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images2, _theme$images3, _theme$images4, _props$afterComponent, _props$afterElements;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.FooterContainer, {
    id: "footer"
  }, /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LogoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype Invert",
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.logos) === null || _theme$images === void 0 ? void 0 : _theme$images.logotypeInvert,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.Content, {
    mobileSocialView: true
  }, /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL4_1_HREF'),
    "aria-label": "facebook"
  }, /*#__PURE__*/_react.default.createElement(_FaFacebook.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL4_2_HREF'),
    "aria-label": "twitter"
  }, /*#__PURE__*/_react.default.createElement(_EnTwitterWithCircle.default, null)))), /*#__PURE__*/_react.default.createElement(_styles.LinkContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h1", {
    name: "title-1"
  }, t('FOOTER_QL1_TITLE')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('FOOTER_QL1_1')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link2",
    href: t('FOOTER_QL1_2_HREF')
  }, t('FOOTER_QL1_2'))), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h1", {
    name: "title-2"
  }, t('FOOTER_QL2_TITLE')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link4",
    href: t('FOOTER_QL2_1_HREF')
  }, t('FOOTER_QL2_1'))), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h1", {
    name: "title-3"
  }, t('FOOTER_QL3_TITLE')), /*#__PURE__*/_react.default.createElement(_styles.DownloadAppContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWapper, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype Invert",
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.logos) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.logotype,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.AppLinkWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DownloadAppLink, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_1_HREF'),
    "aria-label": "GooglePlay"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Google play",
    src: theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.general) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.googlePlay,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.DownloadAppLink, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_2_HREF'),
    "aria-label": "AppStore"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "App store",
    src: theme === null || theme === void 0 || (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.general) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.appStore,
    loading: "lazy"
  }))))), /*#__PURE__*/_react.default.createElement(_styles.Content, {
    desktopSocilalView: true
  }, /*#__PURE__*/_react.default.createElement("h1", {
    name: "title-4"
  }, t('FOOTER_QL4_TITLE')), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL4_1_HREF'),
    "aria-label": "facebook"
  }, /*#__PURE__*/_react.default.createElement(_FaFacebook.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL4_2_HREF'),
    "aria-label": "twitter"
  }, /*#__PURE__*/_react.default.createElement(_EnTwitterWithCircle.default, null)))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.Footer = Footer;