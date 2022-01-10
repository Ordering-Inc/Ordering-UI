"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserDetails = exports.WrapperPlaceOrderButton = exports.WrapRightInnerContainer = exports.WrapRightContainer = exports.WrapLeftInnerContainer = exports.WrapLeftContainer = exports.WarningText = exports.WarningMessage = exports.UserDetailsContainer = exports.PaymentMethodContainer = exports.NotFoundImage = exports.DriverTipContainer = exports.CouponContainer = exports.Container = exports.CartsList = exports.CartContainer = exports.BusinessDetailsContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-bottom: 1px solid ", ";\n  min-height: calc(100vh - 290px);\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n  }\n"])), function (props) {
  return props.theme.colors.gray;
});

exports.Container = Container;

var WrapLeftContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 30px 20px;\n  display: flex;\n  justify-content: flex-end;\n  box-sizing: border-box;\n\n  @media (min-width: 1024px) {\n    width: 50%;\n  }\n"])));

exports.WrapLeftContainer = WrapLeftContainer;

var WrapLeftInnerContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 768px) {\n    width: 90%;\n    margin: 0 auto;\n  }\n\n  @media (min-width: 1024px) {\n    max-width: 500px;\n    width: 100%;\n    margin: initial;\n  }\n  @media (min-width: 1400px) {\n    max-width: 600px;\n  }\n"])));

exports.WrapLeftInnerContainer = WrapLeftInnerContainer;

var WrapRightInnerContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  @media (min-width: 768px) {\n    width: 90%;\n    margin: 0 auto;\n    padding: 0 20px;\n  }\n  \n  @media (min-width: 1024px) {\n    max-width: 500px;\n    margin: initial;\n  }\n  @media (min-width: 1024px) {\n    ", "\n  }\n\n  @media (min-width: 1400px) {\n    max-width: 600px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      padding: 0 30px 0 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding: 0 20px 0 30px;\n    "])));
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      padding: 0 50px 0 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      padding: 0 20px 0 50px;\n    "])));
});

exports.WrapRightInnerContainer = WrapRightInnerContainer;

var WrapRightContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 30px 20px;\n  box-sizing: border-box;\n\n  @media (min-width: 1024px) {\n    padding: 30px 0px;\n    width: 50%;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
});

exports.WrapRightContainer = WrapRightContainer;

var WrapperUserDetails = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.WrapperUserDetails = WrapperUserDetails;

var UserDetailsContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 20px;\n  flex-wrap: wrap;\n"])));

exports.UserDetailsContainer = UserDetailsContainer;
var BusinessDetailsContainer = (0, _styledComponents.default)(UserDetailsContainer)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  div {\n    h1 {\n      text-transform: capitalize;\n      margin: 0px;\n      font-size: 20px;\n      color: ", ";\n      margin-bottom: 10px;\n      font-weight: 500;\n    }\n    p {\n      margin: 0;\n      font-weight: 300;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.grayDark;
});
exports.BusinessDetailsContainer = BusinessDetailsContainer;

var PaymentMethodContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-size: 20px;\n    font-weight: 500;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
});

exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin: 0px;\n  border-bottom: 8px solid #FFF;\n  padding-bottom: 40px;\n\n  h1 {\n    margin-bottom: 0px;\n  }\n  h2 {\n    font-size: 14px;\n    font-weight: 400;\n    color: ", ";\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.grayMedium;
});
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  h1 {\n    margin: 20px 0px;\n  }\n\n  div.cart {\n    border-bottom: none;\n    > div {\n      > div {\n        box-shadow: none;\n      }\n    }\n    \n    div.business-item {\n      display: none;\n    }\n\n    div.product-item {\n      border-bottom: none;\n      background: transparent;\n    }\n\n    div.order-bill {\n      background: transparent;\n\n      td {\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
});
exports.CartContainer = CartContainer;

var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 20px 0px 10px;\n\n  button {\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));

exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;

var WarningMessage = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  max-height: fit-content;\n  min-height: 150px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial;\n    "])));
});

exports.WarningMessage = WarningMessage;

var NotFoundImage = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));

exports.NotFoundImage = NotFoundImage;

var CartsList = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));

exports.CartsList = CartsList;

var WarningText = _styledComponents.default.p(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.WarningText = WarningText;

var CouponContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  padding: 15px 0;\n  margin-top: 20px;\n  border-top: 1px solid ", ";\n  border-bottom: 1px solid ", ";\n\n  h1 {\n    margin-top: 0px;\n    font-size: 20px;\n    margin-bottom: 10px;\n    font-weight: 500;\n  }\n"])), function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.gray;
});

exports.CouponContainer = CouponContainer;