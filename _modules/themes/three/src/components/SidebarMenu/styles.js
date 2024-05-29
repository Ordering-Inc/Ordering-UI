"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserAccountContent = exports.WrappContent = exports.TextInfo = exports.SidebarContent = exports.MenuLinkText = exports.MenuLinkSeparator = exports.MenuLinkIcon = exports.MenuLink = exports.MenuClose = exports.IconContent = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var auth = _ref.auth;
  return auth && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    @media (min-width: 769px) {\n      display: none;\n    }\n  "])));
}, function (_ref2) {
  var auth = _ref2.auth;
  return !auth && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    @media (min-width: 871px) {\n      display: none;\n    }\n  "])));
});
var IconContent = exports.IconContent = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 100%;\n  margin: 0px;\n  display: inline-flex;\n  min-height: 35px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  background-color: rgb(247, 247, 247);\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: transparent 0px 0px 0px 1px inset;\n  }\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: #333;\n  }\n"])), function (_ref3) {
  var isHome = _ref3.isHome;
  return isHome ? 'rgba(255,255,255,0.1)' : 'rgb(255, 255, 255)';
});
var SidebarContent = exports.SidebarContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1005;\n  top: 0;\n  background-color: ", ";\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n  box-shadow: ", ";\n\n  ", "\n\n  @media (max-height: 450px) {\n    padding-top: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (_ref4) {
  var isHome = _ref4.isHome;
  return isHome ? 'rgba(0, 0, 0, 0.7) 0px 8px 24px;' : 'rgba(0, 0, 0, 0.2) 0px 8px 24px;';
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      right: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      left: 0;\n  "])));
});
var MenuClose = exports.MenuClose = _styledComponents.default.button(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  max-width: 100%;\n  margin: 6px;\n  display: inline-flex;\n  min-height: 35px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  background-color: rgb(247, 247, 247);\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: rgb(255, 255, 255);\n    box-shadow: transparent 0px 0px 0px 1px inset;\n  }\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: #333;\n  }\n"])));
var MenuLink = exports.MenuLink = _styledComponents.default.a(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  text-decoration: none;\n  appearance: none;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  text-align: inherit;\n  display: block;\n  width: 100%;\n  background: ", ";\n  outline: none !important;\n\n  &:hover {\n    color: #f1f1f1;\n  }\n\n  ", ";\n\n  @media (max-height: 450px) {\n    font-size: 18px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (_ref5) {
  var isCustomer = _ref5.isCustomer;
  return isCustomer && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid black;\n\n    @media (min-width: 451px) {\n      display: none;\n    }\n  "])));
});
var WrapperUserAccountContent = exports.WrapperUserAccountContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 16px;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 50px;\n    height: 50px;\n    border-radius: 25px;\n  }\n\n  svg {\n    width: 50px;\n    height: 50px;\n    border-radius: 25px;\n  }\n\n  p {\n    font-size: 18px;\n    font-weight: 500;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var WrappContent = exports.WrappContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: auto auto auto;\n  grid-template-columns: auto 1fr;\n  column-gap: 20px;\n  padding: 16px;\n"])));
var MenuLinkIcon = exports.MenuLinkIcon = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  grid-area: 2 / 1 / auto / auto;\n  flex-shrink: 0;\n  line-height: 0;\n  display: flex;\n  align-items: center;\n  margin: 0px;\n\n  svg {\n    flex-shrink: 0;\n    color: #000;\n    width: 24px;\n    height: 24px;\n    color: ", ";\n  }\n"])), function (_ref6) {
  var active = _ref6.active,
    theme = _ref6.theme;
  return active ? theme.colors.secundary : '#000';
});
var MenuLinkText = exports.MenuLinkText = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  flex-grow: 1;\n  overflow: hidden;\n  flex-basis: 100%;\n  grid-area: 2 / 2 / auto / auto;\n"])));
var TextInfo = exports.TextInfo = _styledComponents.default.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.04ch;\n  text-transform: capitalize;\n  text-align: left;\n  margin: 0px;\n  padding: 0px;\n  display: block;\n  font-variant-ligatures: no-common-ligatures;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: ", ";\n\n  ", "\n"])), function (_ref7) {
  var active = _ref7.active,
    theme = _ref7.theme;
  return active ? theme.colors.secundary : '#000';
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    text-align: right;\n    display: inline-block;\n    color: #000;\n  "])));
});
var MenuLinkSeparator = exports.MenuLinkSeparator = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  grid-area: -1 / 1 / auto / -1;\n  margin: 15px -16px -16px 0px;\n\n  div {\n    width: 100%;\n    padding-left: 0px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n\n    ", "\n\n    hr {\n      display: block;\n      width: 100%;\n      margin: 0px;\n      border: none;\n      height: 1px;\n      background: rgb(231, 231, 231);\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      padding-right: 0px;\n      margin: 15px 0px -16px -16px;\n    "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      padding-left: 0px;\n      margin: 15px -16px -16px 0px;\n    "])));
});