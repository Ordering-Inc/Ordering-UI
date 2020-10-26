"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _fa = require("react-icons/fa");

var _orderingComponents = require("ordering-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Footer = function Footer() {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.FooterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("strong", null, t('FOOTER_QL1_TITLE'))), /*#__PURE__*/_react.default.createElement("a", {
    href: t('FOOTER_QL1_1_HREF')
  }, " ", t('FOOTER_QL1_1'), " "), /*#__PURE__*/_react.default.createElement("a", {
    href: t('FOOTER_QL1_2_HREF')
  }, t('FOOTER_QL1_2')), /*#__PURE__*/_react.default.createElement("a", {
    href: t('FOOTER_QL1_3_HREF')
  }, t('FOOTER_QL1_3'))), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("strong", null, t('FOOTER_QL2_TITLE'))), /*#__PURE__*/_react.default.createElement("a", {
    href: t('FOOTER_QL2_1_HREF')
  }, t('FOOTER_QL2_1')), /*#__PURE__*/_react.default.createElement("a", {
    href: t('FOOTER_QL2_2_HREF')
  }, t('FOOTER_QL2_2')), /*#__PURE__*/_react.default.createElement("a", {
    href: t('FOOTER_QL2_3_HREF')
  }, t('FOOTER_QL2_3'))), /*#__PURE__*/_react.default.createElement(_styles.SocialMedia, null, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("strong", null, t('FOOTER_QL3_TITLE'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    href: t('FOOTER_QL3_1_HREF')
  }, /*#__PURE__*/_react.default.createElement(_fa.FaFacebook, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    href: t('FOOTER_QL3_2_HREF')
  }, /*#__PURE__*/_react.default.createElement(_fa.FaInstagram, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    href: t('FOOTER_QL3_3_HREF')
  }, /*#__PURE__*/_react.default.createElement(_fa.FaTwitter, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    href: t('FOOTER_QL3_4_HREF')
  }, /*#__PURE__*/_react.default.createElement(_fa.FaYoutube, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    href: t('FOOTER_QL3_5_HREF')
  }, /*#__PURE__*/_react.default.createElement(_fa.FaWhatsapp, null)))), /*#__PURE__*/_react.default.createElement(_styles.Copy, null, t('FOOTER_COPY', '© 2016 - 2020 Ordering - Create e-commerce Apps and Websites with your brand. All rights reserved. Ordering, Inc.'))));
};

exports.Footer = Footer;