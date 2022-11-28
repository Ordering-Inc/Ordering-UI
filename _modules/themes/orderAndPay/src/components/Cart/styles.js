"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpsellingPageTitleWrapper = exports.Title = exports.OrderBill = exports.ModalIcon = exports.Exclamation = exports.Divider = exports.CouponContainer = exports.ContainerTop = exports.Container = exports.CheckoutAction = exports.CartSticky = exports.CartContainer = exports.BorderProductAccordion = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: ", ";\n  height: ", ";\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  background: #fff;\n"])), function (_ref) {
  var isCheckout = _ref.isCheckout;
  return isCheckout ? '0px' : '20px 40px';
}, function (_ref2) {
  var isCheckout = _ref2.isCheckout;
  return !isCheckout && '100vh';
});
exports.Container = Container;
var CartContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\n  ", ";\n  width: 100%;\n"])), function (_ref3) {
  var isCheckout = _ref3.isCheckout;
  return !isCheckout && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  "])));
});
exports.CartContainer = CartContainer;
var CartSticky = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  width: 100%;\n"])), function (_ref4) {
  var isCartOnProductsList = _ref4.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    overflow-y: auto;\n    max-height: 70vh;\n    position: sticky;\n    top: 20px;\n  "])));
}, function (_ref5) {
  var isCheckout = _ref5.isCheckout;
  return !isCheckout && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      display: flex;\n      flex-direction: column;\n      flex: 1;\n      > div:first-child {\n        margin-bottom: 20px;\n      }\n  "])));
});
exports.CartSticky = CartSticky;
var ContainerTop = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
exports.ContainerTop = ContainerTop;
var OrderBill = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px;\n  background-color: ", ";\n  table {\n    width: 100%;\n    font-size: 12px;\n    font-weight: 300;\n    border-top: 1px solid #E9ECEF;\n    padding-top: 10px;\n    td span {\n      unicode-bidi: bidi-override;\n    }\n\n    tr td:nth-child(2) {\n      font-weight: 500;\n      text-align: right;\n      ", "\n    }\n  }\n  table.total {\n    border-top: 1px solid #EAEAEA;\n    padding-top: 10px;\n    tr {\n      td {\n        font-weight: bold;\n        color: ", ";\n      }\n    }\n  }\n"])), function (isCheckout) {
  return isCheckout ? 'transparent' : '#FFF';
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        text-align: left;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
});
exports.OrderBill = OrderBill;
var BorderProductAccordion = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #D9D9D9;\n  margin-left : 15px;\n"])));
exports.BorderProductAccordion = BorderProductAccordion;
var CouponContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n"])));
exports.CouponContainer = CouponContainer;
var CheckoutAction = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 6px;\n  box-sizing: border-box;\n  margin-left: 3px;\n  margin-bottom: ", ";\n  p {\n    margin: 0;\n    font-weight: 600;\n    font-size: 16px;\n    color: ", ";\n  }\n  button {\n    padding: 10px 30px;\n    width: 100%;\n    &:disabled{\n      opacity: 0.5;\n      cursor: not-allowed\n    }\n  }\n\n  @media (min-width: 767px){\n    top: 60px;\n  }\n\n  @media (max-width: 430px){\n    top: 60px;\n  }\n\n  @media (max-width: 376px){\n    top: 100px;\n  }\n"])), function (_ref6) {
  var isIOS = _ref6.isIOS;
  return isIOS ? '20px' : '10px';
}, function (props) {
  return props.theme.colors.darkTextColor;
});
exports.CheckoutAction = CheckoutAction;
var Divider = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  background: #fff;\n  height: 8px;\n  width: calc(100% + 20px);\n  margin: 20px 0;\n  @media (min-width: 768px) {\n    width: calc(100%);\n  }\n"])));
exports.Divider = Divider;
var UpsellingPageTitleWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding:10px;\n  margin-left: 3px;\n  p {\n    font-weight: 500;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n    color: #748194;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.darkTextColor;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-right: 30px;\n      margin-left: 0px;\n    "])));
});
exports.UpsellingPageTitleWrapper = UpsellingPageTitleWrapper;
var Title = _styledComponents.default.h1(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 14px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.Title = Title;
var ModalIcon = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin: 13px 0px;\n  display: flex;\n  align-items:center;\n  margin-right: 20px;\n"])));
exports.ModalIcon = ModalIcon;
var Exclamation = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));
exports.Exclamation = Exclamation;