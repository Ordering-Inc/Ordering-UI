"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionTitle = exports.ScheduleSection = exports.ScheduleContainer = exports.ScheduleBlock = exports.PaymethodsAccepted = exports.ModalIcon = exports.Divider = exports.Description = exports.ChangeLocation = exports.BussinessTitle = exports.BusinessTitleContainer = exports.BusinessTitle = exports.BusinessInformationContainer = exports.BusinessContent = exports.AditionalInformationContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessInformationContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  overflow: auto;\n  background: #fff;\n"])));

exports.BusinessInformationContainer = BusinessInformationContainer;

var BussinessTitle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  z-index: 1000;\n  display: inline-flex;\n  width: 50%;\n  background: #ffffff;\n  align-items: center;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  border-radius: 16px;\n  padding: 10px;\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n  "])));
});

exports.BussinessTitle = BussinessTitle;

var BusinessTitleContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 0 10px;\n  background: #FFF;\n  @media(min-width: 768px){\n    padding: 0 20px;\n    padding-top: 30px;\n  }\n"])));

exports.BusinessTitleContainer = BusinessTitleContainer;

var SectionTitle = _styledComponents.default.h3(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 16px;\n  color: ", ";\n  margin: 25px 0 20px 0;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.SectionTitle = SectionTitle;

var ScheduleSection = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 100%;\n"])));

exports.ScheduleSection = ScheduleSection;

var ScheduleContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 576px) {\n    width: 200px;\n  }\n"])));

exports.ScheduleContainer = ScheduleContainer;

var ScheduleBlock = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 16px;\n  align-items: center;\n  justify-content: space-between;\n\n  h4 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    color: ", ";\n    margin: 0;\n    margin-right: 3px;\n  }\n\n  p {\n    font-size: 14px;\n    margin: 0;\n    color: ", ";\n\n    &.close {\n      color: #E63757;\n      margin-right: 20px;\n      ", "\n    }\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n\n    > div {\n      margin: 0 5px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n        margin-left: 0;\n      "])));
});

exports.ScheduleBlock = ScheduleBlock;

var ModalIcon = _styledComponents.default.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  cursor: pointer;\n  color: ", ";\n  border-radius: 50%;\n  left: 5px;\n  top: 5px;\n  z-index: 1;\n  ", "\n  @media (min-width: 578px){\n    right: 10px;\n    ", "\n  }\n  @media (min-width: 768px){\n    left: 25px;\n    top: 30px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    left: 10px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    right: 25px;\n    left: initial;\n  "])));
});

exports.ModalIcon = ModalIcon;

var Description = _styledComponents.default.p(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin: 0 10px;\n"])));

exports.Description = Description;

var BusinessTitle = _styledComponents.default.h2(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  color: ", ";\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 36px;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    padding-right: 30px;\n    padding-left: 0;\n  "])));
});

exports.BusinessTitle = BusinessTitle;

var Divider = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  height: 8px;\n  width: calc(100% + 20px);\n  margin-left: -10px;\n\n  @media (min-width: 768px) {\n    width: calc(100% + 40px);\n    margin-left: -20px;\n  }\n"])));

exports.Divider = Divider;

var BusinessContent = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  p {\n    margin: 5px 0;\n  }\n"])));

exports.BusinessContent = BusinessContent;

var AditionalInformationContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  margin-bottom: 35px;\n"])));

exports.AditionalInformationContainer = AditionalInformationContainer;

var PaymethodsAccepted = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  padding: 0 20px;\n"])));

exports.PaymethodsAccepted = PaymethodsAccepted;

var ChangeLocation = _styledComponents.default.p(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  text-decoration: underline;\n  cursor: pointer;\n  margin-bottom: 10px;\n"])));

exports.ChangeLocation = ChangeLocation;