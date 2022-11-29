"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CancellationComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CancellationComponent = function CancellationComponent(props) {
  var _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _theme$images3, _theme$images3$logos, _theme$images4, _theme$images4$logos;
  var bgUrl = props.bgUrl,
    logoUrl = props.logoUrl,
    ButtonComponent = props.ButtonComponent,
    InputComponent = props.InputComponent;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Hero, null, (bgUrl || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.businessHero)) && /*#__PURE__*/_react.default.createElement(_styles.BgImg, {
    src: bgUrl || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.businessHero),
    alt: "bg"
  }), /*#__PURE__*/_react.default.createElement(_styles.HeroText, null, (logoUrl || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$logos = _theme$images3.logos) === null || _theme$images3$logos === void 0 ? void 0 : _theme$images3$logos.logotype)) && /*#__PURE__*/_react.default.createElement(_styles.LogoImg, {
    src: logoUrl || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$logos = _theme$images4.logos) === null || _theme$images4$logos === void 0 ? void 0 : _theme$images4$logos.logotype),
    alt: "logo"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "title"
  }, t('CANCELLATION_TITLE', 'SITE OUT OF SERVICE')), /*#__PURE__*/_react.default.createElement("h4", {
    className: "sub-title",
    dangerouslySetInnerHTML: {
      __html: t('CANCELLATION_SUBTITLE', 'This website has been archived or suspended in accordance with our :Terms of Service').replace(':Terms of Service', "<b><i>".concat(t('CANCELLATION_TERMS', 'Terms of Service'), "</i></b>"))
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t('CANCELLATION_OWNER_TEXT', 'If you are the :owner of this website contact us to reactivate your website.').replace(':owner', "<b>".concat(t('CANCELLATION_OWNER', 'owner'), "</b>"))
    }
  }), ButtonComponent && /*#__PURE__*/_react.default.createElement(ButtonComponent, {
    color: "primary"
  }, t('CANCELLATION_CONTACT_US', 'Contact us'))), /*#__PURE__*/_react.default.createElement(_styles.Segment, null, /*#__PURE__*/_react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: t('CANCELLATION_OWNER_TEXT', 'If you are a :customer let the owner know you midd this website, just write your email below.').replace(':customer', "<b>".concat(t('CANCELLATION_CUSTOMER', 'customer'), "</b>"))
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessSearch, null, InputComponent && /*#__PURE__*/_react.default.createElement(InputComponent, {
    name: "Email",
    placeholder: t('CANCELLATION_INPUT_PLACEHOLDER', 'Email')
  })), ButtonComponent && /*#__PURE__*/_react.default.createElement(ButtonComponent, {
    color: "primary"
  }, t('CANCELLATION_SEND_BUTTON', 'Send')))));
};
exports.CancellationComponent = CancellationComponent;