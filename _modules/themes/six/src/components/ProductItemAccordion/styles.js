"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperProductImage = exports.ProductQuantity = exports.ProductPrice = exports.ProductOptionsList = exports.ProductNotAvailable = exports.ProductInfo = exports.ProductImage = exports.ProductError = exports.ProductComment = exports.ProductActionsEdit = exports.ProductActionsDelete = exports.ProductActions = exports.ContentInfo = exports.CartActions = exports.AccordionText = exports.AccordionSection = exports.AccordionContent = exports.Accordion = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AccordionSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 15px;\n  background: #FFF;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n  @media (min-width: 411px){\n    min-height: 130px;\n  }\n\n  @media (min-width: 1024px){\n    min-height: 152px;\n  }\n"])));
exports.AccordionSection = AccordionSection;
var AccordionStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  cursor: initial;\n  transition: background-color 0.6s ease;\n  .rotate {\n    transform: rotate(180deg);\n  }\n  .accordion__icon {\n    margin-left: auto;\n    transition: transform 0.6s ease;\n    ", "\n  }\n  @media (min-width: 411px){\n    flex-direction: row;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: initial;\n    "])));
});
var Accordion = function Accordion(props) {
  var style = {};
  if (!props.isValid) {
    style.opacity = '0.5';
  }
  return /*#__PURE__*/_react.default.createElement(AccordionStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.Accordion = Accordion;
var WrapperProductImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  min-width: 55px;\n  min-height: 55px;\n  height: 55px;\n  width: 55px;\n  padding: 3px;\n  border: 1px solid ", ";\n  border-radius: 50%;\n  box-sizing: border-box;\n  @media (min-width: 361px) {\n    height: 80px;\n    width: 80px;\n  }\n  @media (min-width: 411px) {\n    height: 100px;\n    width: 100px;\n  }\n  @media (min-width: 1024px) {\n    height: 120px;\n    width: 120px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.WrapperProductImage = WrapperProductImage;
var ProductImageStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 50%;\n"])));
var ProductImage = function ProductImage(props) {
  return /*#__PURE__*/_react.default.createElement(ProductImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
exports.ProductImage = ProductImage;
var ContentInfo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  padding-left: 10px;\n  width: calc(100% - 55px);\n  overflow: hidden;\n  padding-top: 20px;\n  box-sizing: border-box;\n  ", "\n  h3 {\n      font-size: 20px;\n      line-height: 24px;\n      font-weight: 500;\n      margin: 0;\n      margin-bottom: 8px;\n    }\n  span {\n    display: flex;\n    justify-content: space-between;\n    margin: 0px;\n    p {\n      margin: 0px;\n      font-size: 14px;\n    }\n    div {\n      display: flex;\n      span {\n        height: 20px;\n        svg {\n          font-size: 20px;\n          &:nth-child(1) {\n            margin-right: 3px;\n            ", "\n          }\n        }\n      }\n    }\n  }\n  @media (min-width: 361px) {\n    width: calc(100% - 80px);\n  }\n  @media (min-width: 411px) {\n    width: calc(100% - 100px);\n    flex-direction: row;\n    justify-content: space-between;\n    padding-left: 20px;\n    h3 {      \n      ", "\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n  @media (min-width: 1024px) {\n    width: calc(100% - 120px);\n    padding-left: 25px;\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-left: 0px;\n  "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n              margin-left: 3px;\n              margin-right: 0px;\n            "])));
}, function (_ref) {
  var isSidebar = _ref.isSidebar;
  return isSidebar ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n            max-width: 150px;\n          "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n          max-width: 350px;\n        "])));
});
exports.ContentInfo = ContentInfo;
var AccordionContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n  width: 100%;\n  margin: auto;\n  @media (min-width: 361px) {\n  }\n  @media (min-width: 411px) {\n    width: calc(100% - 120px);\n    margin-left: auto;\n    margin-right: 0px;\n    margin-top: -50px;\n  }\n  @media (min-width: 1024px) {\n    width: calc(100% - 145px);\n    margin-top: -70px;\n\n  }\n"])));
exports.AccordionContent = AccordionContent;
var AccordionText = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  padding: 18px;\n"])));
exports.AccordionText = AccordionText;
var ProductComment = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  p {\n    margin: 0px;\n    font-size: 14px;\n    line-height: 24px;\n    color: #343A40;\n  }\n  span {\n    font-size: 14px;\n    line-height: 24px;\n    text-transform: capitalize;\n    padding-left: 25px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n    display: inline-block;\n    box-sizing: border-box;\n    color: #000000;\n    font-weight: 500;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    padding-right: 25px;\n    "])));
});
exports.ProductComment = ProductComment;
var ProductInfo = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  @media (min-width: 411px) {\n  }\n  @media (min-width: 481px) {\n  }\n"])));
exports.ProductInfo = ProductInfo;
var ProductError = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  span {\n    font-size: 18px;\n    text-align: center;\n  }\n  @media (min-width: 411px){\n    width: 35%;\n    span{\n      text-align: right;\n    }\n  }\n"])));
exports.ProductError = ProductError;
var ProductActions = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"])));
exports.ProductActions = ProductActions;
var ProductActionsEdit = _styledComponents.default.span(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  svg {\n    font-size: 22px;\n    margin-right: 10px;\n    cursor: pointer;\n    ", "\n  }\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0px;\n    "])));
});
exports.ProductActionsEdit = ProductActionsEdit;
var ProductActionsDelete = (0, _styledComponents.default)(ProductActionsEdit)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: none;\n  svg {\n    margin-right: 0px;\n  }\n  @media (min-width: 411px){\n    display: block;\n  }\n"])));
exports.ProductActionsDelete = ProductActionsDelete;
var ProductPrice = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  p,\n  span {\n  }\n  span {\n    font-weight: bold;\n    font-size: 1rem;\n    line-height: 20px;\n  }\n  p {\n    margin: 0px 5px;\n  }\n  svg {\n    cursor: pointer;\n  }\n  @media (min-width: 512px) {\n    width: fit-content;\n  }\n"])));
exports.ProductPrice = ProductPrice;
var ProductNotAvailable = _styledComponents.default.span(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  color: #D81212;\n"])));
exports.ProductNotAvailable = ProductNotAvailable;
var ProductOptionsList = _styledComponents.default.ul(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  .suboption {\n    padding-left: 25px;\n    ", "\n  }\n  p:nth-child(1) {\n    margin-bottom: 0;\n  }\n  p {\n    margin: 0px;\n    font-size: 14px;\n    line-height: 24px;\n    color: #343A40;\n  }\n  li span {\n    font-size: 14px;\n    line-height: 24px;\n    text-transform: capitalize;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n    display: inline-block;\n    box-sizing: border-box;\n    color: #000000;\n    font-weight: 500;\n  }\n  li.ingredient {\n    padding-left: 15px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      padding-right: 25px;\n      padding-left: 0px;\n  "])));
}, function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      padding-right: 15px;\n      padding-left: 0px;\n    "])));
});
exports.ProductOptionsList = ProductOptionsList;
var ProductQuantity = _styledComponents.default.span(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: inline-block !important;\n  margin-right: 5px !important; \n  font-size: 1.1rem;\n  color: #585858;\n"])));
exports.ProductQuantity = ProductQuantity;
var CartActions = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  width: 100%;\n  .disabled {\n    pointer-events: none;\n    color: ", ";\n  }\n  .incdec-control {\n    display: flex;\n    align-items: center;\n    color: #6C757D;\n    margin-right: 20px;\n    margin-bottom: 5px;\n    ", "\n    svg {\n      font-size: 20px;\n      cursor: pointer;\n    }\n    span {\n      margin: 0 8px;\n      font-size: 22px;\n      line-height: 24px;\n    }\n  }\n\n  @media (min-width: 411px) {\n    width: calc(100% - 120px);\n    margin-left: auto;\n    margin-right: 0px;\n    ", "\n  }\n\n  @media (min-width: 1024px) {\n    width: calc(100% - 145px);\n  }\n"])), function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme8;
  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 20px;\n    "])));
}, function (props) {
  var _props$theme9;
  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      margin-left: 0px;\n      margin-right: auto;\n    "])));
});
exports.CartActions = CartActions;