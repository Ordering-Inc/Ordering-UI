"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapLogo = exports.SoldOut = exports.Quantity = exports.ProductInfo = exports.ProductCost = exports.CartAction = exports.CardLogo = exports.CardInfo = exports.CardContainer = void 0;
var _polished = require("polished");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CardContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  width: 100%;\n  margin-bottom: 20px;\n  position: relative;\n  box-sizing: border-box;\n  border-bottom: 1px solid ", ";\n  background: ", ";\n  padding-bottom: ", ";\n\n  @media (min-width: 681px) {\n    display: flex;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var soldOut = _ref.soldOut;
  return soldOut ? '#B8B8B8' : '#FFF';
}, function (_ref2) {
  var soldOut = _ref2.soldOut;
  return soldOut ? '0' : '20px';
});
exports.CardContainer = CardContainer;
var SoldOut = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  position: absolute;\n  background: #D6D6D6 0% 0% no-repeat padding-box;\n  border-radius: 23px;\n  padding: 5px 10px;\n  top: 8px;\n  right: 6px;\n  text-transform: uppercase;\n  font-size: 14px;\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    left: 6px;\n    right: initial;\n  "])));
});
exports.SoldOut = SoldOut;
var CardInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  > * {\n    margin: 5px;\n  }\n\n  h1 {\n    font-size: 18px;\n    font-weight: 700;\n    color: #263238;\n  }\n\n  p {\n    font-weight: ", ";\n    text-align: left;\n    ", "\n\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n\n  span {\n    color: ", ";\n    font-weight: bold;\n  }\n\n  p, span {\n    font-size: 13px;\n  }\n\n  @media (min-width: 768px) {\n    height: 130px;\n    h1 {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: normal;\n    }\n  }\n\n  @media (min-width: 1024px) {\n    height: 150px;\n    h1 {\n      font-size: 20px;\n    }\n\n    p {\n      font-size: 16px;\n    }\n\n    span {\n      font-size: 15px;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    height: 195px;\n  }\n"])), function (_ref3) {
  var soldOut = _ref3.soldOut;
  return soldOut ? 'bold' : '200';
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
}, function (_ref4) {
  var soldOut = _ref4.soldOut,
    theme = _ref4.theme;
  return soldOut ? (0, _polished.lighten)(0.05, theme.colors.primary) : theme.colors.primary;
});
exports.CardInfo = CardInfo;
var WrapLogo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n\n  @media (min-width: 768px) {\n    margin-right: 15px;\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-left: 25px;\n    margin-right: 0px;\n  "])));
});
exports.WrapLogo = WrapLogo;
var CardLogoStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  min-height: 75px;\n  width: 130px;\n  height: 130px;\n  background-color: #dddddd;\n  @media (min-width: 1024px) {\n    width: 150px;\n    height: 150px;\n  }\n\n  @media (min-width: 1200px) {\n    width: 195px;\n    height: 195px;\n  }\n"])));
var CardLogo = function CardLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)';
  }
  return /*#__PURE__*/_react.default.createElement(CardLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.CardLogo = CardLogo;
var ProductInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  @media (min-width: 768px) {\n    flex-direction: row;\n    width: 70%;\n    border-right: 2px solid ", ";\n    ", "\n  }\n  @media (min-width: 1440px) {\n    font-size: 20px;\n  }\n\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      border-right: none;\n      border-left: 2px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
exports.ProductInfo = ProductInfo;
var CartAction = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 140px;\n  justify-content: space-around;\n  \n  button {\n    padding: 7px 0;\n    text-transform: uppercase;\n    background-color: transparent;\n    @media (min-width: 1440px) {\n      padding: 11px 0;\n    }\n  }\n  @media (min-width: 768px) {\n    width: 30%;\n    padding-left: 15px;\n    ", "\n  }\n  @media (min-width: 1024px) {\n    height: 155px;\n  }\n  @media (min-width: 1200px) {\n    height: 195px;\n  }\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      padding-right: 15px;\n      padding-left: 0;\n    "])));
});
exports.CartAction = CartAction;
var ProductCost = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 30px;\n  color: ", ";\n  justify-content: ", ";\n  @media (min-width: 1440px) {\n    font-size: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref5) {
  var textLeft = _ref5.textLeft;
  return textLeft ? 'flex-start' : 'center';
});
exports.ProductCost = ProductCost;
var Quantity = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-right: ", ";\n  ", "\n  span {\n    font-size: 16px;\n    line-height: 26px;\n    color: #000000;\n  }\n  input {\n    width: 85px;\n    height: 38px;\n    box-sizing: border-box;\n    text-align: center; \n\n    @media (min-width: 768px) {\n      width: 45px;\n      height: 33px;\n    }\n    \n    @media (min-width: 1200px) {\n      width: 85px;\n      height: 38px;\n    }\n  }\n"])), function (_ref6) {
  var isSoldOut = _ref6.isSoldOut;
  return isSoldOut ? '10px' : '0px';
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: ", ";\n    margin-left: ", ";\n "])), function (_ref7) {
    var isSoldOut = _ref7.isSoldOut;
    return isSoldOut ? 'unset' : '0px';
  }, function (_ref8) {
    var isSoldOut = _ref8.isSoldOut;
    return isSoldOut ? '10px' : '0px';
  });
});
exports.Quantity = Quantity;