"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("./styles");

var _FaTwitter = _interopRequireDefault(require("@meronex/icons/fa/FaTwitter"));

var _FaInstagram = _interopRequireDefault(require("@meronex/icons/fa/FaInstagram"));

var _AiFillFacebook = _interopRequireDefault(require("@meronex/icons/ai/AiFillFacebook"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Footer = function Footer() {
  var _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _theme$images3, _theme$images3$logos;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();
  var location = (0, _reactRouterDom.useLocation)();
  var isHomePage = location.pathname === '/home' || location.pathname === '/';
  return /*#__PURE__*/_react.default.createElement(_styles.FooterContainer, {
    isHomePage: isHomePage
  }, /*#__PURE__*/_react.default.createElement(_styles.FooterTopContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('TOP_CITIES', 'Top Cities')), /*#__PURE__*/_react.default.createElement(_styles.LinkBlock, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum'))))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('TOP_CUISINES_NEAY_YOU', 'Top Cuisines Near You')), /*#__PURE__*/_react.default.createElement(_styles.LinkBlock, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')))))), /*#__PURE__*/_react.default.createElement(_styles.SupportContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('GET_TO_KNOW_US', 'Get to Know Us')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('LET_US_HELP_YOU', 'Let Us Help You')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('DOING_BUSINESS', 'Doing business')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF'),
    className: "right"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapAppImgae, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.appStore,
    alt: "app store"
  }))), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF'),
    className: "right"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapAppImgae, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.googlePlay,
    alt: "google play"
  })))))), /*#__PURE__*/_react.default.createElement(_styles.FooterBottomContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: "35px",
    height: "45px",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$logos = _theme$images3.logos) === null || _theme$images3$logos === void 0 ? void 0 : _theme$images3$logos.isotypeInvert,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum')), /*#__PURE__*/_react.default.createElement("a", {
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": "link1",
    href: t('FOOTER_QL1_1_HREF')
  }, t('LOREM_IPSUM', 'Lorem Ipsum'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_1_HREF'),
    "aria-label": "facebook"
  }, /*#__PURE__*/_react.default.createElement(_AiFillFacebook.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_2_HREF'),
    "aria-label": "instagram"
  }, /*#__PURE__*/_react.default.createElement(_FaInstagram.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SocialIcon, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_3_HREF'),
    "aria-label": "twitter"
  }, /*#__PURE__*/_react.default.createElement(_FaTwitter.default, null)))));
};

exports.Footer = Footer;