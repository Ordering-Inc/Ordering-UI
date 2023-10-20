"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEdit = exports.SubMenu = exports.RightHeader = exports.MenuLink = exports.MenuItem = exports.Menu = exports.LogoHeader = exports.LeftHeader = exports.InnerHeader = exports.Header = exports.DesktopSubmenu = exports.CustomerInfo = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Header = exports.Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%; \n  height: 75px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 10%), 0 0 2px rgb(0 0 0 / 10%);\n  z-index: 10;\n"])));
var InnerHeader = exports.InnerHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  color: #000;\n  justify-content: space-between;\n  width: 93%;\n  margin: 15px auto;\n  @media (min-width: 1024px) {\n    width: 96%;\n  }\n  @media (min-width: 1405px) {\n    width: 93%;\n  }\n"])));
var LogoHeader = exports.LogoHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  img {\n    width: 35px;\n    height: 45px;\n    margin: 0;\n    vertical-align: middle;\n    ", "\n    @media (min-width: 768px) {\n      width: 150px;\n    }\n  }\n  img:nth-child(1) {\n    display: none;\n  }\n  @media (min-width: 768px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});
var LeftHeader = exports.LeftHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));
var RightHeader = exports.RightHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));
var Menu = exports.Menu = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  &.left-header {\n    > :first-child {\n      margin-left: 15px;\n      ", "\n    }\n  }\n  .moment-popover,\n  .address-popover {\n    display: none;\n  }\n  @media (min-width: 821px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n      font-weight: 600;\n    }\n    .address-popover{\n      margin: 0 2.5rem;\n    }\n  }\n  @media (min-width: 1024) {\n    .address-popover{\n      margin: 0 3rem;\n    }\n  }\n  @media (min-width: 1200) {\n    .address-popover{\n      margin: 0 4rem;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n        margin-left: 0;\n      "])));
});
var MenuItem = exports.MenuItem = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var MenuLink = exports.MenuLink = _styledComponents.default.a(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: 14px;\n  padding: 5px 0;\n  color: #333;\n  border: 1px solid #000000;\n  border-radius: 100px;\n  cursor: pointer;\n  width: 75px;\n  text-align: center;\n  margin: 0 7px;\n  ", "\n\n  @media (min-width: 920px) {\n    width: 80px;\n    padding: 7px 0;\n  }\n\n  @media (min-width: 1200px) {\n    width: 85px;\n    padding: 5px 0;\n    margin: 0 1vw;\n  }\n\n"])), function (_ref) {
  var highlight = _ref.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.secundary;
  }, function (props) {
    return props.theme.colors.secundaryContrast;
  });
});
var SubMenu = exports.SubMenu = (0, _styledComponents.default)(InnerHeader)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 40px 7px;\n  box-sizing: border-box;\n  margin: 0px;\n  @media (min-width: 821px) {\n    display: none;\n  }\n"])));
var CustomerInfo = exports.CustomerInfo = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: none;\n  cursor: pointer;\n  @media (min-width: 450px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    span {\n      display: flex;\n      align-items: center;\n      height: 30px;\n      p {\n        color: ", ";\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        max-width: 50px;\n        @media (min-width: 768px) {\n          max-width: 70px;\n        }\n      }\n      svg {\n        color: ", ";\n        font-size: 30px;\n        margin-right: 5px;\n      }\n    }\n  }\n"])), function (props) {
  return props.isHome ? '#FFF' : '#333';
}, function (props) {
  return props.theme.colors.primary;
});
var UserEdit = exports.UserEdit = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  > :first-child{\n     margin-bottom: 20px;  \n  }\n"])));
var DesktopSubmenu = exports.DesktopSubmenu = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  > div {\n    font-weight: bold;\n    margin: 0 1vw;\n  }\n"])));