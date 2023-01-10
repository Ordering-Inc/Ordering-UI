"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapTags = exports.WrapLogo = exports.TitleWrapper = exports.SoldOut = exports.SkeletonCardLogo = exports.SkeletonCardInfo = exports.RibbonBox = exports.QuantityContainer = exports.PriceWrapper = exports.LastOrder = exports.CardLogo = exports.CardInfo = exports.CardContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CardContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  background: ", ";\n  border: 1px solid #E9ECEF;\n  padding: 10px;\n  border-radius: 7.6px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n  position: relative;\n\n  > div {\n    display: flex;\n    justify-content: space-between;\n    ", "\n    align-items: center;\n    width: 100%;\n  }\n\n  button {\n    width: 100%;\n    margin-top: 10px;\n    padding: 4px;\n  }\n  ", "\n"])), function (_ref) {
  var isShowAddButt = _ref.isShowAddButt;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    min-height: ", ";\n  "])), isShowAddButt ? '162px' : '110px');
}, function (_ref2) {
  var soldOut = _ref2.soldOut;
  return soldOut ? '#6c757d33' : '#FFF';
}, function (_ref3) {
  var _theme$layouts, _theme$layouts$busine, _theme$layouts$busine2, _theme$layouts$busine3, _theme$layouts$busine4, _theme$layouts$busine5, _theme$layouts$busine6, _theme$layouts$busine7;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$busine = _theme$layouts.business_view) === null || _theme$layouts$busine === void 0 ? void 0 : (_theme$layouts$busine2 = _theme$layouts$busine.components) === null || _theme$layouts$busine2 === void 0 ? void 0 : (_theme$layouts$busine3 = _theme$layouts$busine2.products) === null || _theme$layouts$busine3 === void 0 ? void 0 : (_theme$layouts$busine4 = _theme$layouts$busine3.components) === null || _theme$layouts$busine4 === void 0 ? void 0 : (_theme$layouts$busine5 = _theme$layouts$busine4.product) === null || _theme$layouts$busine5 === void 0 ? void 0 : (_theme$layouts$busine6 = _theme$layouts$busine5.components) === null || _theme$layouts$busine6 === void 0 ? void 0 : (_theme$layouts$busine7 = _theme$layouts$busine6.image) === null || _theme$layouts$busine7 === void 0 ? void 0 : _theme$layouts$busine7.position) === 'right' ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      flex-direction: row-reverse;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      flex-direction: row;\n    "])));
}, function (_ref4) {
  var productsRows = _ref4.productsRows;
  return productsRows ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: ", ";\n    margin: 10px;\n\n  "])), function () {
    return productsRows === 3 ? 'calc(33% - 20px)' : 'calc(50% - 20px)';
  }) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 100%;\n    margin: 10px 0px;\n    @media (min-width: 576px) {\n      margin: 10px;\n      width: calc(100% - 20px);\n    }\n\n  ", "\n  \n  "])), function (_ref5) {
    var isCartOnProductsList = _ref5.isCartOnProductsList;
    return isCartOnProductsList ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    @media (min-width: 993px) {\n      width: calc(50% - 20px);\n      margin: 10px 20px 10px 0px;\n      ", "\n    }\n  "])), function (props) {
      var _props$theme;
      return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 20px;\n      "])));
    }) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    @media (min-width: 681px) {\n      width: calc(49% - 20px);\n    }\n\n    @media (min-width: 1440px) {\n      width: calc(33% - 20px);\n      margin: 10px 20px 10px 0px;\n      ", "\n    }\n  "])), function (props) {
      var _props$theme2;
      return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 20px;\n      "])));
    });
  });
});
exports.CardContainer = CardContainer;
var SoldOut = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  position: absolute;\n  background: #495057 0% 0% no-repeat padding-box;\n  padding: 5px 10px;\n  top: 7px;\n  border-radius: 2px 0px 0px 2px;\n  right: 0px;\n  color: white;\n  font-size: 12px;\n  ", "\n  &:first-letter {\n    text-transform: uppercase;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (_ref6) {
  var isBottom = _ref6.isBottom;
  return isBottom && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    bottom: 7px;\n    top: initial;\n  "])));
});
exports.SoldOut = SoldOut;
var CardInfo = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-height: 86px;\n  ", "\n  > * {\n    margin: 3px;\n  }\n  p {\n    color: #909BA9;\n    text-align: left;\n    font-size: 10px;\n    ", "\n\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n    white-space: pre-wrap;\n  }\n\n  span {\n    color: ", ";\n    font-size: 14px;\n  }\n\n  ", "\n\n  @media (min-width: 1024px) {\n    p {\n      font-size: 12px;\n    }\n\n    span {\n      font-size: 14px;\n    }\n  }\n"])), function (_ref7) {
  var isBgimage = _ref7.isBgimage;
  return (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    width: ", ";\n  "])), isBgimage ? 'calc(100% - 90px)' : '100%');
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref8) {
  var oneLine = _ref8.oneLine;
  return oneLine && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    p {\n      -webkit-line-clamp: 1;\n    }\n  "])));
});
exports.CardInfo = CardInfo;
var WrapLogo = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 86px;\n  max-height: 86px;\n  height: 86px;\n  ", "\n  ", "\n  ", "\n"])), function (_ref9) {
  var isBgimage = _ref9.isBgimage;
  return isBgimage && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    width: 86px;\n  "])));
}, function (_ref10) {
  var _theme$layouts2, _theme$layouts2$busin, _theme$layouts2$busin2, _theme$layouts2$busin3, _theme$layouts2$busin4, _theme$layouts2$busin5, _theme$layouts2$busin6, _theme$layouts2$busin7;
  var theme = _ref10.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$busin = _theme$layouts2.business_view) === null || _theme$layouts2$busin === void 0 ? void 0 : (_theme$layouts2$busin2 = _theme$layouts2$busin.components) === null || _theme$layouts2$busin2 === void 0 ? void 0 : (_theme$layouts2$busin3 = _theme$layouts2$busin2.products) === null || _theme$layouts2$busin3 === void 0 ? void 0 : (_theme$layouts2$busin4 = _theme$layouts2$busin3.components) === null || _theme$layouts2$busin4 === void 0 ? void 0 : (_theme$layouts2$busin5 = _theme$layouts2$busin4.product) === null || _theme$layouts2$busin5 === void 0 ? void 0 : (_theme$layouts2$busin6 = _theme$layouts2$busin5.components) === null || _theme$layouts2$busin6 === void 0 ? void 0 : (_theme$layouts2$busin7 = _theme$layouts2$busin6.image) === null || _theme$layouts2$busin7 === void 0 ? void 0 : _theme$layouts2$busin7.position) === 'right' ? (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n  "]))) : (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n  "])));
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});
exports.WrapLogo = WrapLogo;
var WrapTags = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-left: 10px;\n\n  ", "\n  ", "\n\n  div {\n    display: flex;\n    margin: auto;\n  }\n\n  img {\n    width: 30px;\n    height: 30px;\n    margin-right: 5px;\n  }\n"])), function (_ref11) {
  var isBgimage = _ref11.isBgimage;
  return isBgimage && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    width: 50px;\n  "])));
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});
exports.WrapTags = WrapTags;
var CardLogoStyled = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  min-height: 86px;\n  border-radius: 10px;\n"])));
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
var PriceWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  .off-price {\n    font-size: 10px;\n    color: #909BA9;\n    margin-left: 5px;\n    text-decoration: line-through;\n\n    ", "\n\n    @media (min-width: 1024px) {\n      font-size: 13px;\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n    "])));
});
exports.PriceWrapper = PriceWrapper;
var QuantityContainer = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  position: absolute;\n  left: 100%;\n  bottom: 100%;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  border-radius: 50%;\n  transform: translate(-20px, 50%);\n\n  @media (min-width: 768px) {\n    transform: translate(-50%, 50%);\n  }\n"])), function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.primary;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.primaryContrast;
});
exports.QuantityContainer = QuantityContainer;
var RibbonBox = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 2px 8px;\n  box-sizing: border-box;\n  z-index: 10;\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 13px;\n  top: -4px;\n  right: -3px;\n  background-color: ", ";\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  max-width: 70px;\n  word-break: break-all;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    left: -3px;\n    right: initial;\n  "])));
}, function (_ref14) {
  var bgColor = _ref14.bgColor;
  return bgColor && (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), bgColor);
}, function (_ref15) {
  var isRoundRect = _ref15.isRoundRect;
  return isRoundRect && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    border-radius: 7.6px;\n  "])));
}, function (_ref16) {
  var isCapsule = _ref16.isCapsule;
  return isCapsule && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n    border-radius: 50px;\n  "])));
});
exports.RibbonBox = RibbonBox;
var LastOrder = _styledComponents.default.span(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px !important;\n  margin: 0px 3px;\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.LastOrder = LastOrder;
var TitleWrapper = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  h1 {\n    font-size: 14px;\n    font-weight: 500;\n    text-align: left;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin: 0px;\n  }\n\n  > span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    svg {\n      color: ", ";\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.danger500;
});
exports.TitleWrapper = TitleWrapper;
var SkeletonCardInfo = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 90px);\n  > * {\n    margin: 3px;\n  }\n"])));
exports.SkeletonCardInfo = SkeletonCardInfo;
var SkeletonCardLogo = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  max-width: 86px;\n  max-height: 86px;\n  width: 86px;\n  height: 86px;\n\n  margin-left: 5px;\n  ", "\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});
exports.SkeletonCardLogo = SkeletonCardLogo;