"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusBarContainer = exports.StatusBar = exports.SingleOrderHeader = exports.SingleOrderContainer = exports.PhotoWrapper = exports.PaymentDetails = exports.OrderSummary = exports.OrderBusinessWrapper = exports.OrderBusinessDetails = exports.MessagesIcon = exports.HeaderContainer = exports.ExclamationWrapper = exports.Divider = exports.CustomerInfoContainer = exports.CustomerDetails = exports.CustomerData = exports.Container = exports.BusinessData = exports.ActionsBlock = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 30px 15px 15px 15px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 280px);\n\n  @media (min-width: 769px) {\n    width: 70%;\n  }\n  \n  h2 {\n    margin: 0;\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n  }\n  \n  h3 {\n    margin: 0;\n    font-weight: 600;\n    font-size: 16px;\n  }\n"])));
exports.Container = Container;
var HeaderContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 24px;\n    line-height: 36px;\n    font-weight: 400;\n    margin: 0;\n    span.name {\n      font-weight: 700;\n      margin: 0 10px;\n    }\n  }\n  p {\n    font-size: 14px;\n    margin: 6px 0;\n  }\n"])));
exports.HeaderContainer = HeaderContainer;
var CustomerInfoContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  border: 1px solid ", ";\n  padding: 30px 25px;\n  margin-top: 48px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
});
exports.CustomerInfoContainer = CustomerInfoContainer;
var CustomerDetails = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  > div {\n    display: flex;\n    flex-direction: column;\n    margin-top: 24px;\n  }\n\n  @media (min-width: 576px) {\n    > div {\n      flex-direction: row;\n    }\n  }\n"])));
exports.CustomerDetails = CustomerDetails;
var PaymentDetails = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex: 1;\n  h3 {\n    margin-top: 30px;\n  }\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 10px 0;\n  }\n\n  @media (min-width: 576px) {\n    h3:not(.address) {\n      margin-top: 0;\n    }\n  }\n"])));
exports.PaymentDetails = PaymentDetails;
var PhotoWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 75px;\n  height: 75px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 7.6px;\n  }\n  svg {\n    width: 80%;\n    height: 80%;\n  }\n  ", "\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-left: 34px;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin-right: 34px;\n  "])));
});
exports.PhotoWrapper = PhotoWrapper;
var CustomerData = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 2px 0;\n  }\n"])));
exports.CustomerData = CustomerData;
var OrderSummary = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  border: 1px solid ", ";\n  padding: 30px 25px;\n  background-color: ", ";\n  margin: 50px 0 42px 0;\n\n  table {\n    width: 100%;\n    tr {\n      td {\n        font-size: 14px;\n        line-height: 24px;\n        padding: 4px 0;\n        &:last-child {\n          ", "\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.grayDividerColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n            text-align: left;\n          "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n            text-align: right;\n          "])));
});
exports.OrderSummary = OrderSummary;
var Divider = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n  margin: 5px 0;\n"])), function (props) {
  return props.theme.colors.gray200;
});
exports.Divider = Divider;
var SingleOrderContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  border: 1px solid ", ";\n  padding: 30px 25px;\n  margin-bottom: 66px;\n  p.order-status {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0;\n  }\n  p.order-total {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 28px 0 0 0;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      text-align: left;\n    "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
});
exports.SingleOrderContainer = SingleOrderContainer;
var SingleOrderHeader = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n\n  > div {\n    > div {\n      display: flex;\n      flex-direction: column;\n      align-items: center; \n      @media (min-width: 769px) {\n        flex-direction: row;\n      }\n      p {\n        line-height: 24px;\n        font-size: 14px;\n        margin: 3px 0;\n        &.date {\n          margin: 0 5px;\n        }\n      }\n    }\n  }\n\n  button {\n    height: 43px;\n  }\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n  }\n"])));
exports.SingleOrderHeader = SingleOrderHeader;
var OrderBusinessDetails = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 50px 0;\n"])));
exports.OrderBusinessDetails = OrderBusinessDetails;
var OrderBusinessWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n  }\n"])));
exports.OrderBusinessWrapper = OrderBusinessWrapper;
var BusinessData = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  p {\n    font-size: 14px;\n    line-height: 21px;\n    margin: 2px 0;\n    &.bold {\n      font-weight: 500;\n    }\n  }\n  @media (min-width: 576px) {\n    margin-top: 0px;\n  }\n"])));
exports.BusinessData = BusinessData;
var ActionsBlock = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  span {\n    cursor: pointer;\n    font-size: 16px;\n    color: ", ";\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});
exports.ActionsBlock = ActionsBlock;
var StatusBar = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  height: 12px;\n  margin-bottom: 12px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.grayDividerColor, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%);\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.grayDividerColor, props.percentage);
});
exports.StatusBar = StatusBar;
var MessagesIcon = _styledComponents.default.span(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"])));
exports.MessagesIcon = MessagesIcon;
var ExclamationWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translate(75%, -25%);\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 || (_props$theme6 = _props$theme6.colors) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.primary;
});
exports.ExclamationWrapper = ExclamationWrapper;
var StatusBarContainer = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  p {\n    font-weight: 500;\n    margin-top: 0;\n  }\n"])));
exports.StatusBarContainer = StatusBarContainer;