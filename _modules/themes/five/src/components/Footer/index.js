"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _FaFacebookF = _interopRequireDefault(require("@meronex/icons/fa/FaFacebookF"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _LanguageSelector = require("../LanguageSelector");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Footer = function Footer() {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.FooterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h4", null, t('FOOTER_QL1_TITLE')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL1_1_HREF')
  }, t('FOOTER_QL1_1'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL1_2_HREF')
  }, t('FOOTER_QL1_2'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL1_3_HREF')
  }, t('FOOTER_QL1_3')))), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h4", null, t('FOOTER_QL2_TITLE')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL2_1_HREF')
  }, t('FOOTER_QL2_1'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL2_2_HREF')
  }, t('FOOTER_QL2_2'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL2_3_HREF')
  }, t('FOOTER_QL2_3')))), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h4", null, t('FOOTER_QL3_TITLE')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL3_1_HREF')
  }, t('FOOTER_QL3_1'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL3_2_HREF')
  }, t('FOOTER_QL3_2'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL3_3_HREF')
  }, t('FOOTER_QL3_3')))), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h4", null, t('FOOTER_QL4_TITLE')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL4_1_HREF')
  }, t('FOOTER_QL4_1'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL4_2_HREF')
  }, t('FOOTER_QL4_2'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    href: t('FOOTER_QL4_3_HREF')
  }, t('FOOTER_QL4_3'))))), /*#__PURE__*/_react.default.createElement(_styles.FooterBottom, null, /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('FOOTER_DESC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')), /*#__PURE__*/_react.default.createElement(_styles.SocialIconList, null, /*#__PURE__*/_react.default.createElement(_styles.LanguageWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Globe, null), /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialGroup, null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.facebook.com/orderingco/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_FaFacebookF.default, null)), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://twitter.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Twitter, null)), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.instagram.com/ordering.co/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Instagram, null))))));
};

exports.Footer = Footer;