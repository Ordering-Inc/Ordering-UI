"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.TypesWrapper = exports.TypesContainer = exports.TypeButton = exports.Title = exports.SearchContainer = exports.PreviousOrders = exports.IconTypeButton = exports.HightestRatedWrapper = exports.HeaderSearchMode = exports.ErrorMessage = exports.Divider = exports.BusinessesTitle = exports.BusinessSearch = exports.BusinessLogosWrapper = exports.BusinessLogosContainer = exports.BusinessLogo = exports.BusinessList = exports.BusinessHeroImgStyled = exports.BusinessHeroImg = exports.BusinessContainer = exports.BusinessBanner = exports.AddressFormWrapper = exports.AdditionalTypesContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessContainer = exports.BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
var BusinessBanner = exports.BusinessBanner = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n  position: relative;\n  @media (max-width: 576px) {\n    margin-bottom: 0px;\n  }\n"])));
var BusinessSearch = exports.BusinessSearch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    background-color: #f8f9fa;\n    align-items: center;\n    padding: 7px;\n    border-radius: 7px;\n    font-size: 11px;\n    svg {\n      font-size: 15px;\n    }\n"])));
var BusinessList = exports.BusinessList = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var WrapperSearch = exports.WrapperSearch = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 10px 20px 0px;\n  display: flex;\n  justify-content: flex-end;\n  svg{\n    align-self: center;\n    cursor: pointer;\n    font-size: 26px;\n    color: ", ";\n    margin-left: 10px;\n  }\n  button {\n    width: 250px;\n    margin-left: 10px;\n  }\n  ", "\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 || (_props$theme = _props$theme.colors) === null || _props$theme === void 0 ? void 0 : _props$theme.primary;
}, function (_ref) {
  var isCustomLayout = _ref.isCustomLayout,
    isCustomerMode = _ref.isCustomerMode;
  return isCustomLayout && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    width: 100%; \n    padding: 0 20px;\n    ", "\n    svg {\n      align-self: auto;\n    }\n    \n    @media(min-width: 681px){\n      width: 75%;\n      padding: 0;\n    }\n    @media(min-width: 1201px){\n      width: 50%;\n    }\n  "])), isCustomerMode ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin: 0 auto;\n    "]))));
});
var ErrorMessage = exports.ErrorMessage = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
var PreviousOrders = exports.PreviousOrders = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n"])));
var BusinessesTitle = exports.BusinessesTitle = _styledComponents.default.h1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var isCustomerMode = _ref2.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    font-size: 18px;\n    margin: 0px 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    font-weight: 600;\n    font-size: 24px;\n    color: ", ";\n    margin: 42px 20px 5px 20px;\n  "])), function (props) {
    var _props$theme2;
    return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.headingColor;
  });
});
var BusinessHeroImgStyled = exports.BusinessHeroImgStyled = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  width: 100%;\n  height: calc(65vh - 98px);\n  ", "\n  @media (min-width: 450px) {\n    height: 370px;\n  }\n  @media (min-width: 821px) {\n    height: ", ";\n  }\n"])), function (_ref3) {
  var bgimage = _ref3.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
}, function (_ref4) {
  var _theme$business_listi;
  var height = _ref4.height,
    theme = _ref4.theme;
  return (theme === null || theme === void 0 || (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.business_hero) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.styles) === null || _theme$business_listi === void 0 ? void 0 : _theme$business_listi.height) || height || '650px';
});
var BusinessHeroImg = exports.BusinessHeroImg = function BusinessHeroImg(props) {
  var style = {};
  style.backgroundImage = "url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(BusinessHeroImgStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var HightestRatedWrapper = exports.HightestRatedWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  padding: 50px 0 30px 0;\n"])));
var Divider = exports.Divider = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  background: rgb(230, 234, 233);\n  height: 8px;\n  width: 100%;\n"])));
var SearchContainer = exports.SearchContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var BusinessLogosWrapper = exports.BusinessLogosWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  overflow: scroll hidden;\n  width: 100%;\n"])));
var BusinessLogoStyled = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  min-width: 100px;\n  min-height: 100px;\n  height: 100px;\n  width: 100px;\n  box-sizing: border-box;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 7.6px;\n  margin-right: 15px;\n  cursor: pointer;\n  ", ";\n"])), function (props) {
  return props.isActive && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    border: 2px solid ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});
var BusinessLogo = exports.BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var BusinessLogosContainer = exports.BusinessLogosContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  padding-bottom: 10px;\n"])));
var HeaderSearchMode = exports.HeaderSearchMode = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 200px;\n"])));
var AddressFormWrapper = exports.AddressFormWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  @media (min-width: 450px) {\n    margin-top: 20px;\n  }\n"])));
var IconTypeButton = exports.IconTypeButton = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 44px;\n  background: ", ";\n  border-radius: 44px;\n"])), function (_ref5) {
  var _theme$colors;
  var activated = _ref5.activated,
    theme = _ref5.theme;
  return activated ? theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.white : '#F3F9FF';
});
var TypesContainer = exports.TypesContainer = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 42px 20px 0px 20px;\n"])));
var AdditionalTypesContainer = exports.AdditionalTypesContainer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  width: 60%;\n  display: flex;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  button {\n    padding: 4px 10px;\n    border-radius: 50px;\n    font-size: 10px;\n    line-height: 0;\n    height: 25px;\n    margin-right: 20px;\n  }\n  .activated {\n    color: ", "\n  }\n"])), function (_ref6) {
  var _theme$colors2;
  var theme = _ref6.theme;
  return theme === null || theme === void 0 || (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.darkTextColor;
});
var TypeButton = exports.TypeButton = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 215px;\n  height: 75px;\n  border-radius: 7.6px;\n  padding: 16px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);\n  margin-right: 32px;\n  margin-bottom: 32px;\n  cursor: pointer;\n  background: ", ";\n  p{\n    margin: 0;\n    margin-left: 33px;\n    ", "\n  }\n"])), function (_ref7) {
  var _theme$colors3, _theme$colors4;
  var activated = _ref7.activated,
    theme = _ref7.theme;
  return activated ? theme === null || theme === void 0 || (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.primary : theme === null || theme === void 0 || (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.white;
}, function (_ref8) {
  var _theme$colors5;
  var activated = _ref8.activated,
    theme = _ref8.theme;
  return activated && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), theme === null || theme === void 0 || (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.white);
});
var Title = exports.Title = _styledComponents.default.h2(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  color: ", ";\n  margin: 0px 20px 5px 20px;\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
});
var TypesWrapper = exports.TypesWrapper = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  margin-left: 20px;\n  width: 600px;\n"])));