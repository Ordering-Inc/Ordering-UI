"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDriver = exports.WrapperContainer = exports.StatusBar = exports.ShareOrder = exports.SectionTitle = exports.RightInnerContainer = exports.RightContainer = exports.ReviewsAction = exports.PhotoBlock = exports.OrderStatus = exports.OrderProducts = exports.OrderInfo = exports.OrderDriver = exports.OrderData = exports.OrderCustomer = exports.OrderBusiness = exports.OrderBill = exports.MessagesIcon = exports.Map = exports.LeftContainer = exports.InfoBlock = exports.FootActions = exports.ExclamationWrapper = exports.Exclamation = exports.DriverInfo = exports.Container = exports.BusinessInfo = exports.BusinessHeader = exports.ActionsBlock = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 20px;\n\n  @media (min-width: 992px) {\n    margin-top: 40px;\n  }\n"])));
var WrapperContainer = exports.WrapperContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 300px);\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])));
var LeftContainer = exports.LeftContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  @media (min-width: 992px) {\n    width: calc(100% - 450px);\n    padding: 10px 20px 40px 20px;\n  }\n"])));
var RightContainer = exports.RightContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  padding: 20px 0;\n  border-top: 1px solid #E7E7E7;\n\n  @media (min-width: 992px) {\n    border-top: none;\n    width: 450px;\n    padding: 10px 20px 20px 20px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-right: 1px solid #E7E7E7;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border-left: 1px solid #E7E7E7;\n    "])));
});
var RightInnerContainer = exports.RightInnerContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 20px;\n"])));
var OrderInfo = exports.OrderInfo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #E7E7E7;\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n\n  > div:first-child {\n    flex: 1;\n  }\n  \n  @media (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"])));
var OrderBusiness = exports.OrderBusiness = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #E7E7E7;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  display: block;\n"])));
var BusinessHeader = exports.BusinessHeader = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  h1 {\n    flex: 1;\n    margin: 0 0 5px 0;\n    font-size: 18px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
});
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  h1,\n  p {\n    margin: 3px 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n  p {\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkGray;
});
var ActionsBlock = exports.ActionsBlock = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  > * {\n    ", "\n  }\n  display: flex;\n  span {\n    font-size: 12px;\n    white-space: nowrap;\n    cursor: pointer;\n  }\n  svg {\n    cursor: pointer;\n    font-size: 24px;\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
});
var OrderData = exports.OrderData = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  h1, p {\n    margin: 0px;\n  }\n  h1 {\n    margin-bottom: 5px;\n    font-size: 24px;\n  }\n  p {\n    font-size: 14px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  p:nth-child(1) {\n    opacity: 0.8;\n  }\n  p.date {\n    display: flex;\n    align-items: center;\n    color: ", ";\n  }\n\n  @media (min-width: 992px) {\n    h1 {\n      font-size: 32px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.darkGray;
});
var StatusBarStyled = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  height: 7px;\n  margin: 20px 0px 10px;\n  border-radius: 7px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%)\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});
var StatusBar = exports.StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};
var OrderStatus = exports.OrderStatus = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  > span {\n    color: ", ";\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.colors.darkGray;
});
var SectionTitle = exports.SectionTitle = _styledComponents.default.h1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 20px;\n"])));
var OrderCustomer = exports.OrderCustomer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n\n  h1 {\n    margin: 0 0 5px 0;\n    font-size: 18px;\n  }\n\n  p {\n    font-size: 14px;\n    margin: 0 0 3px 0;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.darkGray;
});
var PhotoBlock = exports.PhotoBlock = _styledComponents.default.img(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  object-fit: cover;\n  margin: 0 10px;\n  ", "\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n    margin-right: 0;\n  "])));
});
var InfoBlock = exports.InfoBlock = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  h1,\n  span {\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n\n  span {\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.darkGray;
});
var Map = exports.Map = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 50vh;\n  margin-bottom: 10px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 8px;\n  }\n"])));
var OrderDriver = exports.OrderDriver = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 10px 0px 20px;\n  width: 100%;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 70px;\n      height: 70px;\n      margin: 0 10px;\n      ", "\n    }\n  }\n  justify-content: space-between;\n  align-items: center;\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});
var WrapperDriver = exports.WrapperDriver = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 60px;\n      height: 60px;\n      margin: 0px 10px;\n      ", "\n    }\n  }\n\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});
var OrderProducts = exports.OrderProducts = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  padding: 15px 0;\n  border-bottom: 1px solid #E7E7E7;\n"])));
var OrderBill = exports.OrderBill = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 15px;\n  table {\n    width: 100%;\n    font-size: 12px;\n    td {\n      font-size: 16px;\n    }\n    td span {\n      unicode-bidi: bidi-override;\n    }\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid #E7E7E7;\n    margin-top: 15px;\n    tr {\n      td {\n        font-size: 16px;\n        font-weight: bold;\n        padding-top: 10px;\n      }\n    }\n  }\n\n  table.comments {\n    margin-top: 20px;\n    align-items: center;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n    }\n  }\n\n  @media (min-width: 678px) {\n    table {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme8;
  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
});
var ReviewsAction = exports.ReviewsAction = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    color: #FFF;\n    cursor: pointer;\n  }\n\n  @media (min-width: 480px) {\n    button {\n      width: 70%;\n    }\n  }\n"])));
var FootActions = exports.FootActions = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: ", ";\n    cursor: pointer;\n    font-weight: bold;\n  }\n\n  padding-top: 10px;\n\n  @media (min-width: 768px) {\n    padding-top: 0px;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme9;
  return (_props$theme9 = props.theme) !== null && _props$theme9 !== void 0 && _props$theme9.rtl ? (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});
var ShareOrder = exports.ShareOrder = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  padding: 20px 0;\n  border-top: 1px solid #E7E7E7;\n  display: flex;\n  margin: 0 0 20px;\n  justify-content: space-between;\n  z-index: 1;\n\n  h1 {\n    font-size: 18px;\n    margin: 0px;\n  }\n\n  p {\n    font-size: 14px;\n    margin: 0px;\n    color: ", ";\n  }\n\n  div.wrap {\n    width: 40px;\n    z-index: 1;\n    > div {\n      position: relative;\n    }\n\n    svg {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  var _props$theme$colors5;
  return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.darkGray;
}, function (props) {
  return props.theme.colors.primary;
});
var MessagesIcon = exports.MessagesIcon = _styledComponents.default.span(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"])));
var ExclamationWrapper = exports.ExclamationWrapper = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -5px;\n\n  ", "\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (props) {
  return props.theme.rtl ? (0, _styledComponents.css)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n    left: -5px;\n  "]))) : (0, _styledComponents.css)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n    right: -5px;\n  "])));
}, function (props) {
  var _props$theme10;
  return (_props$theme10 = props.theme) === null || _props$theme10 === void 0 || (_props$theme10 = _props$theme10.colors) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.primary;
});
var DriverInfo = exports.DriverInfo = _styledComponents.default.div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  border-top: 1px solid #E7E7E7;\n  padding: 20px 0;\n"])));
var Exclamation = exports.Exclamation = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));