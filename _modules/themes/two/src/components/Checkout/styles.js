"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserDetails = exports.WrapperPlaceOrderButton = exports.WrappContainer = exports.WrapOrderType = exports.WrapBusinessLogo = exports.WarningText = exports.WarningMessage = exports.UserDetailsContainer = exports.Spinner = exports.RightInnerContainer = exports.RightContainer = exports.PaymentMethodContainer = exports.OrderBill = exports.NotFoundImage = exports.LeftContainer = exports.Exclamation = exports.DriverTipContainer = exports.CouponContainer = exports.Container = exports.CommentContainer = exports.CartsList = exports.CartContainer = exports.BusinessName = exports.BusinessLogo = exports.BusinessDetailsContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  margin: auto;\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n  }\n"])));
exports.Container = Container;
var LeftContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 0 10px;\n  box-sizing: border-box;\n\n  @media (min-width: 768px) {\n    padding: 0 20px;\n  }\n\n  @media (min-width: 1024px) {\n    width: calc(100% - 350px);\n  }\n"])));
exports.LeftContainer = LeftContainer;
var RightContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px 10px;\n  box-sizing: border-box;\n  border-top: 1px solid #CCC;\n\n  @media (min-width: 768px) {\n    padding: 20px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 350px;\n    padding: 20px;\n    border-top: none;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-right: 1px solid #CCC;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-left: 1px solid #CCC;\n    "])));
});
exports.RightContainer = RightContainer;
var RightInnerContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 20px;\n"])));
exports.RightInnerContainer = RightInnerContainer;
var WrappContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n\n"])));
exports.WrappContainer = WrappContainer;
var WrapperUserDetails = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.WrapperUserDetails = WrapperUserDetails;
var UserDetailsContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"])));
exports.UserDetailsContainer = UserDetailsContainer;
var WrapOrderType = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid #CCC;\n  padding: 20px 0;\n  \n  h1 {\n    font-size: 20px;\n    margin: 0 0 15px 0;\n    text-transform: uppercase;\n    width: 230px;\n  }\n\n  > div {\n    flex: 1;\n    ", "\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n\n    h1 {\n      margin: 0px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "])));
});
exports.WrapOrderType = WrapOrderType;
var BusinessDetailsContainer = (0, _styledComponents.default)(WrapOrderType)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  p {\n    margin: 3px 0 8px 0;\n  }\n"])));
exports.BusinessDetailsContainer = BusinessDetailsContainer;
var PaymentMethodContainer = (0, _styledComponents.default)(WrapOrderType)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n"])));
exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #CCC;\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n  h1 {\n    font-size: 18px;\n    margin: 0 0 10px 0;\n  }\n"])));
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  border-bottom: none;\n\n  > div {\n    border-bottom: none;\n  }\n"])));
exports.CartContainer = CartContainer;
var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px 10px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n    box-sizing: border-box;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));
exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;
var WarningMessage = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  max-height: 300px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial;\n    "])));
});
exports.WarningMessage = WarningMessage;
var NotFoundImage = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));
exports.NotFoundImage = NotFoundImage;
var CartsList = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));
exports.CartsList = CartsList;
var WarningText = _styledComponents.default.p(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.WarningText = WarningText;
var WrapBusinessLogo = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
exports.WrapBusinessLogo = WrapBusinessLogo;
var BusinessLogoStyled = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 65px;\n  height: 65px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 65px;\n  border-radius: 5px;\n  border: 1px solid #909090;\n"])));
var BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.BusinessLogo = BusinessLogo;
var BusinessName = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  ", "\n\n  span:first-child {\n    color: ", ";\n    font-size: 14px;\n    font-weight: 500;\n  }\n  span:last-child {\n    font-weight: 500;\n    font-size: 20px;\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "])));
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
});
exports.BusinessName = BusinessName;
var OrderBill = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px 0;\n  background-color: #FFF;\n  color: ", ";\n  table {\n    padding: 10px 0;\n    width: 100%;\n    font-size: 16px;\n    font-weight: 300;\n    td span {\n      unicode-bidi: bidi-override;\n    }\n    tr td:nth-child(2) {\n      font-weight: 500;\n      text-align: right;\n      ", "\n    }\n  }\n  table.total {\n    border-top: 1px solid #EAEAEA;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: ", ";\n      }\n    }\n  }\n  table.comments {\n    margin-top: 20px;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n    }\n    textarea {\n      width: 100%;\n      box-sizing: border-box;\n      border-radius: 7.6px;\n      height: 77px;\n      padding-right: 60px;\n    }\n  }\n  @media (min-width: 411px) {\n    table {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.blackColor;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n        text-align: left;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
});
exports.OrderBill = OrderBill;
var CouponContainer = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n\n  input {\n    padding: 5px 15px;\n    border-radius: 8px;\n  }\n"])));
exports.CouponContainer = CouponContainer;
var Exclamation = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));
exports.Exclamation = Exclamation;
var Spinner = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-20%, 15%);\n"])));
exports.Spinner = Spinner;
var CommentContainer = _styledComponents.default.td(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  position: relative;\n  .spinner-content > div{\n    width: 50px;\n    height: 50px;\n  }\n"])));
exports.CommentContainer = CommentContainer;