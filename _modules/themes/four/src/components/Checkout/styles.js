"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserDetails = exports.WrapperPlaceOrderButton = exports.WrappContainer = exports.WarningText = exports.WarningMessage = exports.UserDetailsContainer = exports.RightInnerContainer = exports.RightContainer = exports.PaymentMethodContainer = exports.OrderBill = exports.NotFoundImage = exports.LeftContainer = exports.Exclamation = exports.DriverTipContainer = exports.CouponContainer = exports.Container = exports.CheckoutContainer = exports.CartsList = exports.CartContainer = exports.BusinessDetailsContainer = exports.AccordionContent = exports.Accordion = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var CheckoutContainer = exports.CheckoutContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
var Container = exports.Container = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
var WrappContainer = exports.WrappContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 90%;\n  margin: 30px auto;\n  display: flex;\n  flex-direction: column;\n  background-color: #FFF;\n\n  @media (min-width: 513px) {\n    width: 80%;\n  }\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    justify-content: space-between;\n    background-color: transparent;\n  }\n"])));
var LeftContainer = exports.LeftContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  ", "\n  @media (min-width: 992px) {\n    width: calc(100% - 420px);\n    background-color: #FFF;\n  }\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    padding: 20px;\n  "])));
});
var RightContainer = exports.RightContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  ", "\n  @media (min-width: 992px) {\n    width: 400px;\n  }\n"])), function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    padding: 20px;\n  "])));
});
var RightInnerContainer = exports.RightInnerContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding: 20px;\n  box-sizing: border-box;\n\n  @media (min-width: 992px) {\n    background-color: #FFF;\n    position: sticky;\n    top: 0px;\n  }\n"])));
var WrapperUserDetails = exports.WrapperUserDetails = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var UserDetailsContainer = exports.UserDetailsContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"])));
var BusinessDetailsContainer = exports.BusinessDetailsContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 0 20px;\n  border-bottom: 1px solid #CCC;\n"])));
var Accordion = exports.Accordion = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  transition: background-color 0.6s ease;\n  position: relative;\n  padding: 20px 0;\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    transition: transform 0.6s ease;\n  }\n\n  svg {\n    color: ", ";\n    font-size: 20px;\n  }\n\n  h1 {\n    margin: 0px;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n\n    svg {\n      ", "\n    }\n  }\n\n  &.active h1 svg {\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
});
var AccordionContent = exports.AccordionContent = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: min-height 0.6s ease;\n\n  > div {\n    margin: 0px;\n    padding-bottom: 20px;\n  }\n"])));
var PaymentMethodContainer = exports.PaymentMethodContainer = (0, _styledComponents.default)(BusinessDetailsContainer)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([""])));
var DriverTipContainer = exports.DriverTipContainer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 24px;\n    text-align: center;\n  }\n"])));
var CartContainer = exports.CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  border-bottom: none;\n  h1 {\n    font-size: 20px;\n    margin: 20px 0px;\n  }\n"])));
var WrapperPlaceOrderButton = exports.WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px 10px;\n\n  button {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));
var WarningMessage = exports.WarningMessage = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  max-height: 300px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial;\n    "])));
});
var NotFoundImage = exports.NotFoundImage = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));
var CartsList = exports.CartsList = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));
var WarningText = exports.WarningText = _styledComponents.default.p(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.grayColor;
});
var OrderBill = exports.OrderBill = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px;\n  background-color: #FFF;\n  color: ", ";\n\n  table {\n    padding: 10px 0;\n    width: 100%;\n    font-size: 16px;\n    font-weight: 300;\n\n    td span {\n      unicode-bidi: bidi-override;\n    }\n\n    tr td:nth-child(2) {\n      font-weight: 500;\n      text-align: right;\n      ", "\n    }\n  }\n  table.driverTip {\n    border-top: 1px solid #EAEAEA;\n    button {\n      font-size: 14px;\n      padding: 0 10px;\n      text-transform: uppercase;\n    }\n\n    .recommendTxt {\n      color: ", ";\n      font-size: 13px;\n    }\n  }\n  table.total {\n    border-top: 1px solid #EAEAEA;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: ", ";\n      }\n    }\n  }\n\n  @media (min-width: 411px) {\n    table {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.blackColor;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n        text-align: left;\n    "])));
}, function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.grayColor;
}, function (props) {
  return props.theme.colors.primary;
});
var CouponContainer = exports.CouponContainer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n"])));
var Exclamation = exports.Exclamation = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));