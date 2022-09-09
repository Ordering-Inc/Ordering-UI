"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpApproval = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _theme_five = require("ordering-ui/theme_five");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SignUpApproval = function SignUpApproval(props) {
  var _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _theme$images3, _theme$images3$genera, _theme$images4, _theme$images4$genera;

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
      onAccept = props.onAccept,
      onCancel = props.onCancel;
  var contactEmail = 'support@ordering.co';
  var showDomain = false;
  var logoImgUrl = businessType === '2' ? approvalType === 'automatic' ? (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.CongratulationApproval : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.CongratulationNoApproval : approvalType === 'automatic' ? (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$genera = _theme$images3.general) === null || _theme$images3$genera === void 0 ? void 0 : _theme$images3$genera.driverCongratulationApproval : (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$genera = _theme$images4.general) === null || _theme$images4$genera === void 0 ? void 0 : _theme$images4$genera.driverCongratulationNoApproval;
  var userType = businessType === '2' ? 'business' : 'driver';
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
    href: dashboardLoginUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, dashboardUrl)))))) : /*#__PURE__*/_react.default.createElement(_styles.BodySection, null, businessType === 'business' ? /*#__PURE__*/_react.default.createElement(_styles.DescriptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Description, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "bigger"
  }, t('YOUR_STORE_UNDER_APPROVAL', 'Your store is under approval'))), /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('BUSINESS_SIGNUP_MESSAGE', 'We will contact you as soon as possible')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('FEEL_FREE_CONTACT_US', 'feel free to contact us at '), " ", /*#__PURE__*/_react.default.createElement("a", {
    className: "green-text",
    href: "mailto:".concat(contactEmail)
  }, contactEmail))) : /*#__PURE__*/_react.default.createElement(_styles.DescriptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Description, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "bigger"
  }, t('REQUEST_TO_START_UNDER_APPROVAL', 'Your request to start as a driver is under approval.'))), /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('BUSINESS_SIGNUP_MESSAGE', 'We will contact you as soon as possible')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('FEEL_FREE_CONTACT_US', 'feel free to contact us at '), " ", /*#__PURE__*/_react.default.createElement("a", {
    className: "green-text",
    href: "mailto:".concat(contactEmail)
  }, contactEmail)))), /*#__PURE__*/_react.default.createElement(_styles.FooterSection, null, /*#__PURE__*/_react.default.createElement(_styles.ActionGroup, null, /*#__PURE__*/_react.default.createElement(_theme_five.Button, {
    outline: true,
    color: "primary",
    type: "button",
    onClick: function onClick() {
      return onCancel();
    }
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_theme_five.Button, {
    color: "primary",
    type: "button",
    onClick: function onClick() {
      return onAccept();
    }
  }, t('ACCEPT', 'Accept'))), approvalType === 'automatic' && userType === 'business' && /*#__PURE__*/_react.default.createElement(_styles.ContactSection, null, t('CONTACT_US_QUESTIONS', 'If you have some questions do no hestitate to contact us at '), " ", /*#__PURE__*/_react.default.createElement("a", {
    className: "green-text",
    href: "mailto:".concat(contactEmail)
  }, contactEmail))));
};

exports.SignUpApproval = SignUpApproval;