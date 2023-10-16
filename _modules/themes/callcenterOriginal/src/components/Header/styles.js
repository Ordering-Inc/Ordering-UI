"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEdit = exports.SubMenu = exports.RightHeader = exports.MomentMenu = exports.MenuLink = exports.MenuItem = exports.Menu = exports.LogoHeader = exports.LeftHeader = exports.InnerHeader = exports.Header = exports.FarAwayMessage = exports.Divider = exports.CustomerInfo = exports.AdminSection = exports.AddressMenu = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Header = exports.Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-bottom: 1px solid #E9ECEF;\n"])));
var InnerHeader = exports.InnerHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  color: #FFF;\n  justify-content: space-between;\n  width: 98%;\n  margin: 15px auto;\n  align-items: center;\n\n  #center-side {\n    width: ", ";\n  }\n\n  @media (min-width: 1024px) {\n    #center-side {\n      width: calc(60% - 100px);\n    }\n  }\n\n  @media (min-width: 1200px) {\n    #center-side {\n      width: calc(60% - 160px);\n    }\n  }\n\n  @media (min-width: 1500px) {\n    #center-side {\n      width: calc(60% - 200px);\n    }\n  }\n"])), function (_ref) {
  var _theme$header;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 || (_theme$header = theme.header) === null || _theme$header === void 0 || (_theme$header = _theme$header.components) === null || _theme$header === void 0 || (_theme$header = _theme$header.layout) === null || _theme$header === void 0 ? void 0 : _theme$header.type) === 'starbucks' ? 'calc(60% - 140px)' : 'calc(60% - 30px)';
});
var LogoHeader = exports.LogoHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  img {\n    width: 35px;\n    height: 45px;\n    margin: 0;\n    vertical-align: middle;\n    margin-left: 10px;\n\n    ", "\n\n    @media (min-width: 768px) {\n      width: 150px;\n    }\n  }\n\n  img:nth-child(1) {\n    display: none;\n  }\n\n  @media (min-width: 768px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});
var LeftHeader = exports.LeftHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));
var RightHeader = exports.RightHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n\n  #select-input {\n    div {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var Menu = exports.Menu = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  #select-input {\n    border-radius: 7.6px;\n\n    #list {\n      border-radius: 7.6px;\n    }\n  }\n\n  &.left-header {\n    background: #F8F9FA;\n    border: none;\n    box-sizing: border-box;\n    border-radius: 50px;\n    margin: 0 20px;\n    padding: 0 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    height: 44px;\n\n    @media (min-width: 821px) {\n      border: 1px solid #DEE2E6;\n      justify-content: space-between;\n    }\n\n    @media (min-width: 1024px) {\n      padding: 0 20px;\n      margin-left: 35px;\n      margin-right: 10px;\n    }\n    \n    @media (min-width: 1200px) {\n      padding: 0 30px;\n      margin-left: 50px;\n      margin-right: 15px;\n    }\n\n    @media (min-width: 1500px) {\n      padding: 0 30px;\n      margin-left: 75px;\n      margin-right: 20px\n    }\n  }\n\n  > *:not(:last-child) {\n    margin: 0 5px;\n  }\n\n  > span {\n    #select-input {\n      background: transparent !important;\n    }\n  }\n\n  .moment-popover {\n    border-left: 1px solid #DEE2E6;\n    border-right: 1px solid #DEE2E6;\n    justify-content: center;\n    width: 200px;\n    display: none;\n\n    @media (min-width: 1175px) {\n      width: 250px;\n    }\n    \n    @media (min-width: 1400px) {\n      width: 400px;\n    }\n\n    > div:first-child {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n    }\n  }\n\n  .address-popover {\n    flex-grow: 1;\n    display: none;\n    > div:first-child {\n      width: 100%;\n    }\n  }\n\n  .order-type {\n    padding: 0 5px;\n\n    > div {\n      min-width: auto;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      width: 40px;\n    }\n\n    @media (min-width: 1123px) {\n      padding: 0 10px;\n      > div {\n        min-width: fit-content;\n      }\n    }\n    @media (min-width: 1200px) {\n      padding: 0 20px;\n    }\n  }\n\n\n  @media (min-width: 821px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n    }\n  }\n"])));
var MenuItem = exports.MenuItem = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var MenuLink = exports.MenuLink = _styledComponents.default.a(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: 14px;\n  padding: 10px;\n  color: #333;\n  cursor: pointer;\n\n  ", "\n"])), function (_ref2) {
  var highlight = _ref2.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    border-radius: 7.6px;\n    padding: 11px 15px;\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  });
});
var SubMenu = exports.SubMenu = (0, _styledComponents.default)(InnerHeader)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 7px;\n  box-sizing: border-box;\n  margin: 0px;\n  position: relative;\n\n  @media (min-width: 821px) {\n    display: none;\n  }\n"])));
var CustomerInfo = exports.CustomerInfo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: none;\n  cursor: pointer;\n  flex: 1;\n  position: relative;\n  @media (min-width: 450px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    span {\n      display: flex;\n      align-items: center;\n      margin: 0;\n      p {\n        max-width: 250px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        color: #909BA9;\n        margin: 0;\n      }\n      svg {       \n        color: #748194; \n        margin: 0;\n        font-size: 20px;\n      }\n    }\n  }\n"])));
var UserEdit = exports.UserEdit = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  > :first-child{\n     margin-bottom: 20px;\n     width: 100%;\n     ", "\n"])), function (props) {
  return !props.isOpenUserData && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n     position: absolute;\n     "])));
});
var AddressMenu = exports.AddressMenu = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  position: relative;\n  width: 50%;\n\n  span {\n    width: 85%;\n    p {\n      margin: 0;\n      padding: 0;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n    }\n  }\n\n  svg {\n    color: ", ";\n    font-size: 16px;\n    margin-right: 10px;\n    ", "\n  }\n  @media (min-width: 765px) {\n    width: 80%;\n  }\n  @media (min-width: 820px) {\n    width: 50%;\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.lightGray;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
});
var MomentMenu = exports.MomentMenu = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  border-left: 1px solid #DEE2E6;\n  border-right: 1px solid #DEE2E6;\n  height: 100%;\n  justify-content: center;\n  width: 200px;\n  display: none;\n  \n  @media (min-width: 821px) {\n    display: flex;\n  }\n\n  @media (min-width: 1175px) {\n    width: 250px;\n  }\n\n  @media (min-width: 1400px) {\n    width: 400px;\n  }\n\n  > div {\n    cursor: pointer;\n    font-size: 14px;\n    color: #909BA9;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    white-space: nowrap;\n    padding: 0 10px;\n  }\n"])));
var FarAwayMessage = exports.FarAwayMessage = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  pointer-events: none;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  top: 100%;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 6px 15px;\n  box-sizing: border-box;\n  z-index: 2000;\n  margin: 10px 0px 0px 0px !important;\n\n  left: 5px;\n  ", "\n\n  svg {\n    font-size: 20px;\n    color: ", ";\n    margin-right: 10px;\n    ", "\n  }\n  span {\n    font-size: 12px;\n    line-height: 18px;\n    color: ", ";\n  }\n\n  @media (min-width: 400px) {\n    padding: 8px 20px;\n    font-size: 14px;\n    line-height: 24px;\n    left: 10px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.warning100;
}, function (props) {
  return props.theme.colors.warning500;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    right: 5px;\n    left: initial;\n  "])));
}, function (props) {
  return props.theme.colors.warning500;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: 10px;\n    "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      right: 10px;\n      left: initial;\n    "])));
});
var Divider = exports.Divider = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  border: 1px solid #DEE2E6;\n  height: 100%;\n"])));
var AdminSection = exports.AdminSection = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  background: #fff;\n  height: 30px;\n  width: 120px;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px;\n  cursor: pointer;\n  p {\n    margin: 0;\n    font-size: 14px;\n  }\n  svg{\n    width: 14px;\n    height: 14px;\n  }\n"])), function (_ref3) {
  var _theme$colors;
  var theme = _ref3.theme;
  return theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary;
}, function (_ref4) {
  var _theme$colors2;
  var theme = _ref4.theme;
  return theme === null || theme === void 0 || (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.primary;
});