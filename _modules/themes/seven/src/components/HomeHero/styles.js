"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapOrderyType = exports.Title = exports.SloganContent = exports.OrderTypeItem = exports.HeroContainerStyled = exports.HeroContainer = exports.FoodLocation = exports.DiscountBars = exports.ContentWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100vh - 85px);\n\n  ", "\n\n  @media (min-width: 768px) {\n    height: 45vh;\n    overflow: hidden;\n  }\n\n  @media (min-width: 1024px) {\n    height: 550px;\n  }\n\n  @media (min-width: 1200px) {\n    height: 620px;\n  }\n\n  @media (min-width: 1440px) {\n    height: 70vh;\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});
exports.HeroContainerStyled = HeroContainerStyled;
var HeroContainer = function HeroContainer(props) {
  var style = {};
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(HeroContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.HeroContainer = HeroContainer;
var ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    text-shadow: 0px 0px 5px #fff;\n    padding: 30px 20px 38vh;\n    box-sizing: border-box;\n\n    @media (min-width: 768px) {\n      padding: 33px 3.5vw;\n      flex-direction: row;\n    }\n"])));
exports.ContentWrapper = ContentWrapper;
var Title = _styledComponents.default.h1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  letter-spacing: 0px;\n  color: ", ";\n  opacity: 1;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 48px;\n  margin-bottom: 15px;\n  ", "\n\n  @media (min-width: 768px) {\n    font-size: 42px;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 4vw;\n    margin-bottom: 25px;\n  }\n\n  @media (min-width: 1450px) {\n    font-size: 66px;\n  }\n\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});
exports.Title = Title;
var DiscountBars = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: calc(100% + 40px);\n  overflow: hidden;\n  justify-content: flex-end;\n  img {\n    width: 80%;\n    object-fit: cover;\n  }\n\n  @media (min-width: 768px) {\n    position: absolute;\n    top: 3vh;\n    right: 0;\n    width: 100%;\n    img {\n      width: 50%;\n    }\n  }\n\n  @media (min-width: 1024px) {\n    img {\n      width: 42%;\n    }\n  }\n"])));
exports.DiscountBars = DiscountBars;
var SloganContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  @media (min-width: 768px) {\n    margin-top: 80px;\n  }\n"])));
exports.SloganContent = SloganContent;
var WrapOrderyType = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n\n  >div{\n    &:first-child{\n      svg {\n        width: 45px;\n      }\n    }\n    &:nth-child(2) {\n      svg {\n        height: 33px;\n      }\n    }\n  }\n"])));
exports.WrapOrderyType = WrapOrderyType;
var OrderTypeItem = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  width: 120px;\n  height: 65px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 3px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: ", ";\n  background-color: #fff;\n  border: 2px inset ", ";\n  border-radius: 7.6px;\n  box-shadow: rgb(177 177 177) 3px 3px 6px 0px inset, rgb(255 255 255 / 50%) -3px -3px 6px 1px inset;\n  svg {\n    height: 33px;\n    width: 25px;\n    fill: ", ";\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n    width: 125px;\n    height: 70px;\n  }\n\n  @media (min-width: 1200px) {\n    font-size: 16px;\n    width: 135px;\n    height: 73px;\n  }  \n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.OrderTypeItem = OrderTypeItem;
var FoodLocation = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: calc(50% - 25px);\n  left: calc(50% - 25px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #fff;\n  box-shadow: 1px -2px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);\n  svg {\n    width: 35px;\n    height: fit-content;\n    fill: gray;\n  }\n"])));
exports.FoodLocation = FoodLocation;