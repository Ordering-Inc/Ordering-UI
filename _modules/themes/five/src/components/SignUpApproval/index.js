"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SignUpApproval = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _Buttons = require("../../styles/Buttons");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SignUpApproval = exports.SignUpApproval = function SignUpApproval(props) {
  var _theme$images, _theme$images2, _theme$images3, _theme$images4;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _props$content = props.content,
    project = _props$content.project,
    dashboardUrl = _props$content.dashboardUrl,
    dashboardLoginUrl = _props$content.dashboardLoginUrl,
    approvalType = _props$content.approvalType,
    businessType = _props$content.businessType,
    contactEmail = _props$content.contactEmail,
    onAccept = props.onAccept,
    onCancel = props.onCancel;
  var showDomain = false;
  var logoImgUrl = businessType === 2 ? approvalType === 'automatic' ? (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.CongratulationApproval : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.CongratulationNoApproval : approvalType === 'automatic' ? (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.general) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.driverCongratulationApproval : (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.general) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.driverCongratulationNoApproval;
  var userType = businessType === 2 ? 'business' : 'driver';
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderSection, null, showDomain && /*#__PURE__*/_react.default.createElement(_styles.Title, null, "Domain or Brand"), /*#__PURE__*/_react.default.createElement(_styles.LogoImage, {
    approvalType: approvalType === 'automatic',
    src: logoImgUrl
  })), approvalType === 'automatic' ? /*#__PURE__*/_react.default.createElement(_styles.BodySection, null, userType === 'business' ? /*#__PURE__*/_react.default.createElement(_styles.DescriptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('GET_IN_OUR_DASHBOARD_USING_OWNER_ACCOUNT', 'Get in our Dashboard using the business owner account you just created.')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "bigger"
  }, t('VERY_IMPORTANT', 'Very important')), " ", t('USE_PROJECT_TO', 'use the project'), " (", /*#__PURE__*/_react.default.createElement("span", {
    className: "italic"
  }, project), ") ", t('TO_SETUP_YOUR_STORE', ', to get inside and set up your store.'))) : /*#__PURE__*/_react.default.createElement(_styles.DescriptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('GET_IN_OUR_DASHBOARD_USING_DRIVER_OWNER_ACCOUNT', 'Get in our Dashboard using the driver owner account you just created.')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "bigger"
  }, t('VERY_IMPORTANT', 'Very important')), " ", t('USE_PROJECT_TO', 'use the project'), " (", /*#__PURE__*/_react.default.createElement("span", {
    className: "italic"
  }, project), ") ", t('TO_GET_DRIVER_APP', ', to get inside the driver app'))), /*#__PURE__*/_react.default.createElement(_styles.ProjectInfoContainer, null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "bigger td-text-right"
  }, t('PROJECT', 'Project'), ": "), /*#__PURE__*/_react.default.createElement("td", {
    className: "td-text-left"
  }, "(", project, ")")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "bigger td-text-right"
  }, t('DASHBOARD_WEBPAGE', 'Dashboard webpage'), ": "), /*#__PURE__*/_react.default.createElement("td", {
    className: "td-text-left"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "green-text",
    href: t('SIGNUP_DASHBOARD_LOGIN_URL', dashboardLoginUrl),
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('SIGNUP_DASHBOARD_URL', dashboardUrl))))))) : /*#__PURE__*/_react.default.createElement(_styles.BodySection, null, userType === 'business' ? /*#__PURE__*/_react.default.createElement(_styles.DescriptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Description, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "bigger"
  }, t('YOUR_STORE_UNDER_APPROVAL', 'Your store is under approval'))), /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('BUSINESS_SIGNUP_MESSAGE', 'We will contact you as soon as possible')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('FEEL_FREE_CONTACT_US', 'feel free to contact us at '), " ", /*#__PURE__*/_react.default.createElement("a", {
    className: "green-text",
    href: "mailto:".concat(t('SIGNUP_DRIVER_EMAIL', contactEmail))
  }, t('SIGNUP_DRIVER_EMAIL', contactEmail)))) : /*#__PURE__*/_react.default.createElement(_styles.DescriptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Description, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "bigger"
  }, t('REQUEST_TO_START_UNDER_APPROVAL', 'Your request to start as a driver is under approval.'))), /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('BUSINESS_SIGNUP_MESSAGE', 'We will contact you as soon as possible')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('FEEL_FREE_CONTACT_US', 'feel free to contact us at '), " ", /*#__PURE__*/_react.default.createElement("a", {
    className: "green-text",
    href: "mailto:".concat(t('SIGNUP_DRIVER_EMAIL', contactEmail))
  }, t('SIGNUP_DRIVER_EMAIL', contactEmail))))), /*#__PURE__*/_react.default.createElement(_styles.FooterSection, null, /*#__PURE__*/_react.default.createElement(_styles.ActionGroup, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    type: "button",
    onClick: function onClick() {
      return onCancel();
    }
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "button",
    onClick: function onClick() {
      return onAccept();
    }
  }, t('ACCEPT', 'Accept'))), approvalType === 'automatic' && userType === 'business' && /*#__PURE__*/_react.default.createElement(_styles.ContactSection, null, t('CONTACT_US_QUESTIONS', 'If you have some questions do no hestitate to contact us at '), " ", /*#__PURE__*/_react.default.createElement("a", {
    className: "green-text",
    href: "mailto:".concat(t('SIGNUP_DRIVER_EMAIL', contactEmail))
  }, t('SIGNUP_DRIVER_EMAIL', contactEmail)))));
};
var _default = exports.default = SignUpApproval;