"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalBorderLine = exports.UserEdit = exports.SubMenu = exports.RightHeader = exports.MomentItem = exports.MenuLink = exports.MenuItem = exports.Menu = exports.LogoHeader = exports.LeftHeader = exports.InnerHeader = exports.Header = exports.CustomerInfo = exports.AddressItem = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Selects = require("../../styles/Selects");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Header = exports.Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;  \n  background-color: ", ";\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n\n  & ", " {\n    background-color: transparent;\n    border-color: transparent;\n  }\n"])), function (props) {
  return props.theme.colors.backgroudPage;
}, _Selects.Select);
var AddressItem = exports.AddressItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  svg {\n    font-size: 20px;\n    g {\n      stroke: ", ";\n    }\n    margin-right: 5px;\n    ", " \n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
var LogoHeader = exports.LogoHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  img {\n    width: 35px;\n    height: 45px;\n    margin: 0;\n    vertical-align: middle;\n    margin-left: 10px;\n\n    ", "\n\n    @media (min-width: 768px) {\n      width: 150px;\n    }\n  }\n\n  img:nth-child(1) {\n    display: none;\n  }\n\n  @media (min-width: 768px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});
var LeftHeader = exports.LeftHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));
var RightHeader = exports.RightHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));
var Menu = exports.Menu = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > *:not(:last-child) {\n    margin: 0 5px;\n  }\n\n  .moment-popover,\n  .address-popover {\n    display: none;\n  }\n\n  @media (min-width: 821px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n    }\n  }\n"])));
var MenuLink = exports.MenuLink = _styledComponents.default.a(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: 14px;\n  padding: 10px;\n  color: ", ";\n  cursor: pointer;\n"])), function (props) {
  return props.theme.colors.primary;
});
var InnerHeader = exports.InnerHeader = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  width: 98%;\n  margin: 12px auto;\n"])));
var SubMenu = exports.SubMenu = (0, _styledComponents.default)(InnerHeader)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 7px;\n  box-sizing: border-box;\n  margin: 0px;\n\n  @media (min-width: 821px) {\n    display: none;\n  }\n"])));
var MenuItem = exports.MenuItem = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var CustomerInfo = exports.CustomerInfo = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: none;\n  cursor: pointer;\n\n  @media (min-width: 450px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    span {\n      display: flex;\n      align-items: center;\n      height: 30px;\n      p {\n        color: ", ";\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        max-width: 50px;\n\n        @media (min-width: 768px) {\n          max-width: 70px;\n        }\n      }\n      svg {\n        color: ", ";\n        font-size: 30px;\n        margin-right: 5px;\n      }\n    }\n  }\n"])), function (props) {
  return props.isHome ? '#FFF' : '#333';
}, function (props) {
  return props.theme.colors.primary;
});
var UserEdit = exports.UserEdit = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  > :first-child{\n     margin-bottom: 20px;  \n  }\n"])));
var VerticalBorderLine = exports.VerticalBorderLine = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 1px;\n  height: 30px;\n  background-color: ", ";\n"])), function (props) {
  return props.theme.colors.grayMedium;
});
var MomentItem = exports.MomentItem = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-size: 14px;\n  \n  svg {\n    font-size: 14px;\n    margin-right: 5px;\n    ", " \n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});