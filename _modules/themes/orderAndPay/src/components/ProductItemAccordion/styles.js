"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperProductImage = exports.ProductSelect = exports.ProductQuantity = exports.ProductPriceSection = exports.ProductPrice = exports.ProductOptionsList = exports.ProductNotAvailable = exports.ProductInfo = exports.ProductImage = exports.ProductError = exports.ProductComment = exports.ProductActionsEdit = exports.ProductActionsDelete = exports.ProductActions = exports.ContentInfo = exports.AccordionText = exports.AccordionSection = exports.AccordionContent = exports.Accordion = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AccordionSection = exports.AccordionSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px 0px;\n  background: ", ";\n"])), function (isCheckout) {
  return isCheckout ? 'transparent' : '#FFF';
});
var AccordionStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  cursor: initial;\n  transition: background-color 0.6s ease;\n  margin: 0 10px;\n  ", "\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    margin-left: auto;\n    transition: transform 0.6s ease;\n    ", "\n  }\n\n"])), function (_ref) {
  var isCheckout = _ref.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin: 0px;\n  "])));
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: initial;\n    "])));
});
var Accordion = exports.Accordion = function Accordion(props) {
  var style = {};
  if (!props.isValid) {
    style.opacity = '0.5';
  }
  return /*#__PURE__*/_react.default.createElement(AccordionStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var WrapperProductImage = exports.WrapperProductImage = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  max-width: 48px;\n  max-height: 48px;\n  height: 48px;\n  width: 48px;\n"])));
var ProductImageStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));
var ProductImage = exports.ProductImage = function ProductImage(props) {
  return /*#__PURE__*/_react.default.createElement(ProductImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")"),
      width: '48px',
      height: '48px'
    }
  }), props.children);
};
var ContentInfo = exports.ContentInfo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  margin-left: 10px;\n  width: 60%;\n\n  ", "\n\n  ", "\n\n  @media (min-width: 480px){\n    width: 80%;\n  }\n\n  ", "\n\n  h3 {\n    font-size: 12px;\n    margin: 0px;\n    font-weight: 600;\n  }\n\n  div {\n    span {\n      font-size: 10px;\n    }\n    p{\n      font-size: 10px;\n    }\n  }\n\n  span {\n    display: flex;\n    justify-content: space-between;\n    margin: 0px;\n\n    p {\n      margin: 0px;\n      font-size: 14px;\n    }\n\n    div {\n      display: flex;\n\n      span {\n        height: 20px;\n        svg {\n          font-size: 20px;\n          &:nth-child(1) {\n            margin-right: 3px;\n            ", "\n          }\n        }\n      }\n    }\n  }\n\n  @media (min-width: 577px) {\n    h3 {\n      font-size: 18px;\n    }\n  }\n"])), function (_ref2) {
  var isOrderDetails = _ref2.isOrderDetails;
  return isOrderDetails && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n     width: 80%;\n  "])));
}, function (_ref3) {
  var isOrderDetails = _ref3.isOrderDetails;
  return !isOrderDetails && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    @media (min-width: 411px) {\n      width: calc(65% - 30px);\n    }\n\n    @media (min-width: 480px){\n      width: 80%;\n    }\n  "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n  "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n              margin-left: 3px;\n              margin-right: 0px;\n            "])));
});
var AccordionContent = exports.AccordionContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n  width: 100%;\n  margin: auto;\n\n  @media (min-width: 481px) {\n    width: 80%;\n  }\n"])));
var AccordionText = exports.AccordionText = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  padding: 18px;\n"])));
var ProductComment = exports.ProductComment = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  padding-left: 40px;\n  ", "\n  p {\n    font-weight: 600;\n    font-size: 12px;\n    margin: 0px;\n  }\n\n  h3 {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n    text-transform: capitalize;\n    margin: 0px 20px 0px 15px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    padding-right: 40px;\n    padding-left: 0px;\n  "])));
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.darkTextColor;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      margin: 0px 15px 0px 20px\n    "])));
});
var ProductInfo = exports.ProductInfo = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  overflow: hidden;\n  h1,\n  h3,\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h3 {\n    font-size: 12px;\n    max-width: ", ";\n  }\n\n  p {\n    font-size: 12px;\n    margin: 0px 5px;\n    width: 80%;\n  }\n\n  @media (min-width: 360px){\n    h3{\n      max-width: ", ";\n    }\n  }\n\n  @media (min-width: 411px) {\n    h3{\n      max-width: 90%;\n    }\n  }\n"])), function (_ref5) {
  var isOrderDetails = _ref5.isOrderDetails;
  return isOrderDetails ? '90%' : '50%';
}, function (_ref6) {
  var isOrderDetails = _ref6.isOrderDetails;
  return isOrderDetails ? '98%' : '70%';
});
var ProductError = exports.ProductError = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  span {\n    font-size: 12px;\n    text-align: center;\n  }\n\n  @media (min-width: 411px){\n    width: 35%;\n\n    span{\n      text-align: right;\n    }\n  }\n"])));
var ProductActions = exports.ProductActions = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"])));
var ProductActionsEdit = exports.ProductActionsEdit = _styledComponents.default.span(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  svg {\n    font-size: 20px;\n    margin-right: 5px;\n    cursor: pointer;\n    ", "\n  }\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
var ProductActionsDelete = exports.ProductActionsDelete = (0, _styledComponents.default)(ProductActionsEdit)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  svg {\n    margin-right: 0px;\n  }\n\n  @media (min-width: 411px){\n    display: block;\n  }\n"])));
var ProductPriceSection = exports.ProductPriceSection = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  ", "\n"])), function (_ref7) {
  var isOrderDetails = _ref7.isOrderDetails;
  return isOrderDetails ? '15px' : '25%';
}, function (_ref8) {
  var isOrderDetails = _ref8.isOrderDetails;
  return isOrderDetails && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    position: relative;\n    bottom: 14px;\n  "])));
});
var ProductPrice = exports.ProductPrice = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n\n  p,\n  span {\n    font-size: 12px;\n  }\n\n  span {\n    font-weight: 500;\n    white-space: nowrap;\n  }\n\n  p {\n    margin: 0px 5px;\n  }\n\n  svg {\n    cursor: pointer;\n  }\n\n  @media (min-width: 512px) {\n    span,\n    p {\n      font-size: 12px;\n    }\n  }\n"])));
var ProductSelect = exports.ProductSelect = _styledComponents.default.select(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: 7.6px;\n  max-width: 42px;\n  height: 22px;\n  border: none;\n  font-size: 12px;\n  outline: none;\n  margin: 0px 0px 0px 5px;\n  padding: 2px 10px 2px 2px;\n  cursor: pointer;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-progress-appearance: none;\n  background-image: url('https://res.cloudinary.com/dq4bhnmtt/image/upload/q_50/v1613334826/bzydg4yrmrz0hzihtsxs.png');\n  background-repeat: no-repeat,repeat;\n  background-position: right 0.3em top 50%;\n  background-size: 0.65em auto,100%;\n  text-align: center;\n"])), function (isCheckout) {
  return !isCheckout ? '#FFFFFF' : '#F8F9FA';
});
var ProductNotAvailable = exports.ProductNotAvailable = _styledComponents.default.span(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  color: #D81212;\n"])));
var ProductOptionsList = exports.ProductOptionsList = _styledComponents.default.ul(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  list-style-type: none;\n\n  .suboption {\n    margin-left: -25px;\n    ", "\n  }\n\n  p:nth-child(1) {\n    margin-bottom: 0;\n  }\n\n  p {\n    font-size:12px;\n    font-weight: 600;\n    margin: 0px;\n  }\n\n  li span {\n    font-size: 12px;\n    font-weight: 500;\n  }\n\n  li.ingredient {\n    padding-left: 15px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      margin-right: -25px;\n      margin-left: 0px;\n  "])));
}, function (props) {
  var _props$theme8;
  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      padding-right: 15px;\n      padding-left: 0px;\n    "])));
});
var ProductQuantity = exports.ProductQuantity = _styledComponents.default.span(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  margin: 0 5px;\n  font-size: 14px;\n"])));