"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapLogo = exports.TitleWrapper = exports.SoldOut = exports.RibbonBox = exports.QuantityContainer = exports.PriceWrapper = exports.CardLogo = exports.CardInfo = exports.CardContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CardContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /* min-height: 400px; */\n  min-height: 250px;\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: calc(50% - 40px);\n\n  button {\n    width: 100%;\n    margin-top: 10px;\n  }\n\n    width: 100%;\n    margin: 10px 0px;\n    @media (min-width: 320px) {\n      margin: 10px;\n      width: calc(56% - 40px);\n    }\n    @media (min-width: 384px ) {\n      margin: 10px;\n      width: calc(54% - 40px);\n    }\n    @media (min-width: 551px ) {\n      margin: 10px;\n      width: calc(52% - 40px);\n      min-height: 325px;\n    }\n    @media (min-width: 769px){\n      min-height: 400px;\n    }\n\n    transition: box-shadow 0.3s ease 0s;\n  \n  &:hover{\n    box-shadow: 0 2px 6px 3px ", ";\n  }\n\n  ", "\n\n"])), function (_ref) {
  var _theme$colors;
  var soldOut = _ref.soldOut,
    theme = _ref.theme;
  return soldOut ? '#6c757d33' : (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiaryContrast) || '#000';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.gold;
}, function (_ref3) {
  var _theme$colors2;
  var theme = _ref3.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.gold;
}, function (_ref4) {
  var isCartOnProductsList = _ref4.isCartOnProductsList;
  return isCartOnProductsList ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    @media (min-width: 993px) {\n      width: calc(50% - 40px);\n      margin: 10px 20px 10px 0px;\n      ", "\n    }\n  "])), function (props) {
    var _props$theme;
    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 20px;\n      "])));
  }) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    @media (min-width: 681px) {\n      width: calc(50% - 20px);\n    }\n\n    @media (min-width: 1200px) {\n      width: calc(33% - 20px);\n      margin: 10px 20px 10px 0px;\n      ", "\n    }\n    @media (min-width: 1500px) {\n      width: calc(25% - 20px);\n      margin: 10px 20px 10px 0px;\n      ", "\n    }\n  "])), function (props) {
    var _props$theme2;
    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 20px;\n      "])));
  }, function (props) {
    var _props$theme3;
    return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 20px;\n      "])));
  });
});
exports.CardContainer = CardContainer;
var SoldOut = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  position: absolute;\n  background: #495057 0% 0% no-repeat padding-box;\n  padding: 5px 10px;\n  top: 7px;\n  border-radius: 2px 0px 0px 2px;\n  right: 0px;\n  color: white;\n  font-size: 12px;\n  ", "\n  &:first-letter {\n    text-transform: uppercase;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (_ref5) {
  var isBottom = _ref5.isBottom;
  return isBottom && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    bottom: 7px;\n    top: initial;\n  "])));
});
exports.SoldOut = SoldOut;
var CardInfo = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  flex: 1;\n  padding: 10px;\n  box-sizing: border-box;\n  p {\n    color: ", ";\n    text-align: left;\n    font-size: 10px;\n    ", "\n\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 100%;\n  }\n\n  span {\n    color: ", ";\n    font-size: 14px;\n  }\n\n  @media (min-width: 1024px) {\n    p {\n      font-size: 12px;\n    }\n\n    span {\n      font-size: 14px;\n    }\n  }\n"])), function (_ref6) {
  var _theme$colors3;
  var theme = _ref6.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.tertiary) || '#fff';
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
});
exports.CardInfo = CardInfo;
var WrapLogo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  /* height: 300px; */\n  height: 150px;\n  width: 100%;\n  @media (min-width: 551px ) {\n    height: 225px;\n  }\n  @media (min-width: 769px){\n    height: 300px;\n  }\n"])));
exports.WrapLogo = WrapLogo;
var CardLogoStyled = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  /* min-height: 300px; */\n  min-height: 150px;\n  @media (min-width: 551px ) {\n    min-height: 225px;\n  }\n  @media (min-width: 769px){\n      min-height: 300px;\n  }\n"])));
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
var PriceWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  span {\n    color: ", ";\n  }\n\n  .off-price {\n    font-size: 10px;\n    color: #909BA9;\n    margin-left: 5px;\n    text-decoration: line-through;\n\n    ", "\n\n    @media (min-width: 1024px) {\n      font-size: 13px;\n    }\n  }\n"])), function (_ref7) {
  var _theme$colors4;
  var theme = _ref7.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.tertiary) || '#fff';
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n    "])));
});
exports.PriceWrapper = PriceWrapper;
var QuantityContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  position: absolute;\n  left: 100%;\n  bottom: 100%;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  border-radius: 50%;\n  transform: translate(-50%, 50%);\n  span { \n    position: relative;\n    top: 2px;\n    font-size: 12px;\n  }\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.primary;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.primaryContrast;
});
exports.QuantityContainer = QuantityContainer;
var RibbonBox = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 2px 8px;\n  box-sizing: border-box;\n  z-index: 10;\n  color: ", ";\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 13px;\n  top: -4px;\n  right: -3px;\n  background-color: ", ";\n  max-width: 100px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    left: -3px;\n    right: initial;\n  "])));
}, function (_ref10) {
  var bgColor = _ref10.bgColor;
  return bgColor && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), bgColor);
}, function (_ref11) {
  var isRoundRect = _ref11.isRoundRect;
  return isRoundRect && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    border-radius: 7.6px;\n  "])));
}, function (_ref12) {
  var isCapsule = _ref12.isCapsule;
  return isCapsule && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    border-radius: 50px;\n  "])));
}, function (_ref13) {
  var hasProductCount = _ref13.hasProductCount;
  return hasProductCount && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    right: 15px;\n  "])));
});
exports.RibbonBox = RibbonBox;
var TitleWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex: 1;\n  overflow: hidden;\n  h1 {\n    font-size: 16px;\n    font-weight: 500;\n    text-align: left;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin: 0px;\n    width: 100%;\n  }\n\n  > span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    svg {\n      color: ", ";\n      font-size: 16px;\n    }\n  }\n"])), function (_ref14) {
  var _theme$colors5;
  var theme = _ref14.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.tertiary) || '#fff';
}, function (props) {
  return props.theme.colors.danger500;
});
exports.TitleWrapper = TitleWrapper;