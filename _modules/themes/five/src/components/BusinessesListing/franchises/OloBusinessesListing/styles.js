"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.WrapInput = exports.ViewLocations = exports.TypesContainer = exports.TypeButton = exports.Title = exports.Subtitle = exports.Separator = exports.PreviousOrders = exports.PaginationContainer = exports.LoadMoreButtonCityWrap = exports.IconTypeButton = exports.HightestRatedWrapper = exports.HeaderSearchMode = exports.ErrorMessage = exports.Divider = exports.CityContainer = exports.CitiesContainer = exports.BusinessSearch = exports.BusinessListContainer = exports.BusinessList = exports.BusinessContainer = exports.AddressFormWrapper = exports.AdditionalTypesWrapper = exports.AdditionalTypesContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessContainer = exports.BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n"])));
var BusinessSearch = exports.BusinessSearch = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    background-color: #f8f9fa;\n    align-items: center;\n    padding: 7px;\n    border-radius: 7px;\n    font-size: 11px;\n    svg {\n      font-size: 15px;\n    }\n"])));
var BusinessList = exports.BusinessList = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var ErrorMessage = exports.ErrorMessage = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
var PreviousOrders = exports.PreviousOrders = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n"])));
var HightestRatedWrapper = exports.HightestRatedWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 50px 0 30px 0;\n"])));
var Divider = exports.Divider = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: rgb(230, 234, 233);\n  height: 8px;\n  width: 100%;\n"])));
var HeaderSearchMode = exports.HeaderSearchMode = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 200px;\n"])));
var AddressFormWrapper = exports.AddressFormWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  @media (min-width: 450px) {\n    margin-top: 20px;\n  }\n"])));
var IconTypeButton = exports.IconTypeButton = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 44px;\n  background: ", ";\n  border-radius: 44px;\n"])), function (_ref) {
  var _theme$colors;
  var activated = _ref.activated,
    theme = _ref.theme;
  return activated ? theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.white : '#F3F9FF';
});
var TypesContainer = exports.TypesContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 20px;\n"])));
var AdditionalTypesContainer = exports.AdditionalTypesContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 60%;\n  display: flex;\n  margin-bottom: 20px;\n  button {\n    padding: 4px 10px;\n    border-radius: 50px;\n    font-size: 10px;\n    line-height: 0;\n    height: 25px;\n    margin-right: 20px;\n  }\n  .activated {\n    color: ", "\n  }\n"])), function (_ref2) {
  var _theme$colors2;
  var theme = _ref2.theme;
  return theme === null || theme === void 0 || (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.darkTextColor;
});
var TypeButton = exports.TypeButton = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 215px;\n  height: 75px;\n  border-radius: 7.6px;\n  padding: 16px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);\n  margin-right: 32px;\n  cursor: pointer;\n  box-sizing: border-box;\n  background: ", ";\n  p{\n    margin: 0;\n    margin-left: 33px;\n    ", "\n  }\n"])), function (_ref3) {
  var _theme$colors3, _theme$colors4;
  var activated = _ref3.activated,
    theme = _ref3.theme;
  return activated ? theme === null || theme === void 0 || (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.primary : theme === null || theme === void 0 || (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.white;
}, function (_ref4) {
  var _theme$colors5;
  var activated = _ref4.activated,
    theme = _ref4.theme;
  return activated && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), theme === null || theme === void 0 || (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.white);
});
var Title = exports.Title = _styledComponents.default.h2(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    font-size: 32px;\n    font-weight: 600;\n    margin: 0;\n    margin-bottom: 20px;\n"])));
var Subtitle = exports.Subtitle = _styledComponents.default.h3(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    font-size: 18px;\n    font-weight: 400;\n    margin: 0;\n    margin-bottom: 20px;\n"])));
var BusinessListContainer = exports.BusinessListContainer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding: 40px 20px 0px 20px;\n  box-sizing: border-box;\n"])));
var AdditionalTypesWrapper = exports.AdditionalTypesWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  padding-bottom: 0;\n"])));
var WrapInput = exports.WrapInput = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  background: #FFFFFF;\n  padding: 8px 16px;\n  border: 1px solid #DEE2E6;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 22px;\n  margin-top: 22px;\n  width: 100%;\n  height: 44px;\n  ", "\n\n  p{\n    color: ", ";\n    position: relative;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 12px;\n    line-height: 18px;\n    @media (min-width: 576px) {\n      font-size: 1rem;\n      line-height: initial;\n    }\n  }\n\n  svg {\n    color: #B1BCCC;\n    font-size: 20px;\n    ", "\n\n    @media (min-width: 576px) {\n      ", "\n    }\n  }\n"])), function (_ref5) {
  var withIcon = _ref5.withIcon;
  return withIcon && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      right: 5px;\n      top: 0;\n      bottom: 18px;\n      width: 15px;\n\n      ", "\n    }\n\n    @media (min-width: 576px) {\n      padding: 10px 25px;\n      margin-bottom: 27px;\n    }\n  "])), function (props) {
    var _props$theme;
    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        left: 5px;\n        right: initial;\n     "])));
  });
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin-left: 12px;\n    "]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin-right: 12px;\n    "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n      "]))) : (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n        margin-right: 20px;\n      "])));
});
var PaginationContainer = exports.PaginationContainer = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  align-self: flex-end;\n  width: 100%;\n  margin-bottom: 20px;\n"])));
var WrapperMap = exports.WrapperMap = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  width: 50%;\n  max-height: 2500px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n  .btn-choose-store {\n    line-height: 30px;\n    padding: 0 10px;\n    font-size: 14px;\n    cursor: pointer;\n    outline: none;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    min-width: 80px;\n    height: 38px;\n    font-size: 14px;\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n  }\n\n  .btn-address-map {\n    cursor: pointer;\n    &:hover{\n      text-decoration: underline;\n    }\n  }\n  .className {\n    object-fit: none;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primary;
});
var CityContainer = exports.CityContainer = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid ", ";;\n  height: 70px;\n  margin: 0;\n  box-sizing: border-box;\n\n  h3{\n    font-size: 16px;\n  }\n  ", "\n"])), function (_ref6) {
  var _theme$colors6;
  var theme = _ref6.theme;
  return (theme === null || theme === void 0 || (_theme$colors6 = theme.colors) === null || _theme$colors6 === void 0 ? void 0 : _theme$colors6.tertiary) || '#fff';
}, function (_ref7) {
  var isSelected = _ref7.isSelected;
  return isSelected && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      \n  "])));
});
var LoadMoreButtonCityWrap = exports.LoadMoreButtonCityWrap = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  button {\n    width: 100%;\n  }\n"])));
var ViewLocations = exports.ViewLocations = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  p {\n    color: ", ";\n    cursor: pointer;\n  }\n"])), function (_ref8) {
  var _theme$colors7;
  var theme = _ref8.theme;
  return theme === null || theme === void 0 || (_theme$colors7 = theme.colors) === null || _theme$colors7 === void 0 ? void 0 : _theme$colors7.primary;
});
var CitiesContainer = exports.CitiesContainer = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);\n  > div {\n    cursor: pointer;\n  }\n  margin-bottom: 20px;\n"])));
var Separator = exports.Separator = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  height: 1px;\n  margin-left: 20px;\n  margin-right: 40px;\n  background: #E9ECEF;\n  box-sizing: border-box;\n"])));