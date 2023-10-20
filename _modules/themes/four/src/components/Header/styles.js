"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEdit = exports.SubMenu = exports.RightHeader = exports.OrderTypeSelecWrapper = exports.MenuLink = exports.MenuItem = exports.Menu = exports.LogoHeader = exports.LeftHeader = exports.InnerHeader = exports.Header = exports.FarAwayMessage = exports.CustomerInfo = exports.AddressWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Header = exports.Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  box-shadow: 1px 1px 5px #00000029;\n  border: 1px solid #CCC;\n  ", "\n  top: 0px;\n  z-index: 1001;\n\n  #select-input {\n    border-radius: 8px;\n    background-color: transparent !important;\n    color: ", " !important;\n    border: 1px solid ", ";\n\n    svg {\n      path {\n        fill: ", " !important;\n      }\n    }\n\n    ", "\n\n    #list {\n      right: initial;\n      ", "\n    }\n  }\n\n  .moment-popover,\n  .address-popover {\n    > div:first-child {\n      color: ", ";\n    }\n  }\n  ", "\n"])), function (_ref) {
  var isHero = _ref.isHero;
  return isHero && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    box-shadow: none;\n    border: none;\n    position: absolute;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
}, function (_ref2) {
  var isStorePage = _ref2.isStorePage;
  return !isStorePage && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        border-color: ", ";\n        background-color: #FFF;\n        border-radius: 8px;\n        #item {\n          color: ", ";\n        }\n      "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref3) {
  var isStorePage = _ref3.isStorePage;
  return isStorePage && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    position: absolute;\n    box-shadow: none;\n    border: none;\n\n    .address-popover,\n    .moment-popover,\n    .user-popover {\n      > div:first-child {\n        color: #FFF;\n      }\n    }\n\n    #select-input {\n      border-radius: 8px;\n      color: #FFF !important;\n      border: 1px solid #FFF;\n      svg {\n        path {\n          fill: #FFF !important;\n        }\n      }\n\n      #list {\n        svg {\n          path {\n            fill: initial !important;\n          }\n        }\n      }\n    }\n  "])));
});
var OrderTypeSelecWrapper = exports.OrderTypeSelecWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  span {\n    >div {\n      border-radius: 8px;\n      background-color: transparent !important;\n      color: ", " !important;\n      border: 1px solid ", ";\n    }\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref4) {
  var isStorePage = _ref4.isStorePage;
  return isStorePage && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    span {\n      >div {\n        color: #FFF !important;\n        border: 1px solid #FFF;\n      }\n    }\n  "])));
});
var InnerHeader = exports.InnerHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  color: #FFF;\n  justify-content: space-between;\n  width: 98%;\n  margin: 10px auto;\n"])));
var LogoHeader = exports.LogoHeader = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  img {\n    width: 35px;\n    height: 45px;\n    margin: 0;\n    vertical-align: middle;\n    margin-left: 10px;\n\n    ", "\n\n    @media (min-width: 768px) {\n      width: 150px;\n    }\n  }\n\n  img:nth-child(1) {\n    display: none;\n  }\n\n  @media (min-width: 768px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});
var LeftHeader = exports.LeftHeader = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"])));
var RightHeader = exports.RightHeader = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));
var Menu = exports.Menu = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  &.left-header {\n    > :first-child {\n      margin-left: 15px;\n      ", "\n    }\n  }\n\n  > *:not(:last-child) {\n    margin: 0 5px;\n  }\n\n  .moment-popover,\n  .address-popover {\n    display: none;\n  }\n\n  @media (min-width: 821px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n        margin-left: 0;\n      "])));
});
var MenuItem = exports.MenuItem = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var MenuLink = exports.MenuLink = _styledComponents.default.a(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: 16px;\n  padding: 10px;\n  color: #333;\n  cursor: pointer;\n  color: ", ";\n\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref5) {
  var highlight = _ref5.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    border-radius: 8px;\n    padding: 5px 15px;\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  });
});
var SubMenu = exports.SubMenu = (0, _styledComponents.default)(InnerHeader)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 7px;\n  box-sizing: border-box;\n  margin: 0px;\n\n  ", "\n\n  @media (min-width: 821px) {\n    display: none;\n  }\n"])), function (_ref6) {
  var isStorePage = _ref6.isStorePage;
  return isStorePage && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    > div {\n      color: #FFF;\n    }\n  "])));
});
var CustomerInfo = exports.CustomerInfo = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: none;\n  cursor: pointer;\n\n  @media (min-width: 450px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    span {\n      display: flex;\n      align-items: center;\n      height: 30px;\n      p {\n        color: ", ";\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        max-width: 50px;\n\n        @media (min-width: 768px) {\n          max-width: 70px;\n        }\n      }\n      svg {\n        color: ", ";\n        font-size: 30px;\n        margin-right: 5px;\n      }\n    }\n  }\n"])), function (props) {
  return props.isHome ? '#FFF' : '#333';
}, function (props) {
  return props.theme.colors.primary;
});
var UserEdit = exports.UserEdit = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  > :first-child{\n     margin-bottom: 20px;  \n  }\n"])));
var FarAwayMessage = exports.FarAwayMessage = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  pointer-events: none;\n  position: absolute;\n  cursor: default;\n  display: flex;\n  align-items: center;\n  top: 100%;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 6px 15px;\n  box-sizing: border-box;\n  margin: 12px 0px 0px 0px !important;\n  min-width: 240px;\n  left: 0px;\n  ", "\n\n  svg {\n    font-size: 20px;\n    color: ", ";\n    margin-right: 10px;\n    ", "\n  }\n  span {\n    color: #344050;\n    font-size: 12px;\n    line-height: 18px;\n  }\n\n  @media (min-width: 400px) {\n    padding: 8px 20px;\n    font-size: 14px;\n    line-height: 24px;\n    min-width: 260px;\n  }\n\n  @media (min-width: 820px) {\n    left: -50%;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.warning100;
}, function (props) {
  return props.theme.colors.warning500;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    right: 0px;\n    left: initial;\n  "])));
}, function (props) {
  return props.theme.colors.warning500;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: 10px;\n    "])));
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      right: -50%;\n      left: initial;\n    "])));
});
var AddressWrapper = exports.AddressWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  position: relative;\n"])));