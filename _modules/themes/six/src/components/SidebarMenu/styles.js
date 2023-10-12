"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappContent = exports.TextInfo = exports.SidebarContent = exports.SideBarOver = exports.MenuLinkText = exports.MenuLinkSeparator = exports.MenuLinkIcon = exports.MenuLink = exports.IconContent = exports.Hr = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (min-width: 769px) {\n    display: none;\n  }\n"])));
var IconContent = exports.IconContent = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border: none;\n  position: relative;\n  max-width: 100%;\n  margin: 0px;\n  display: inline-flex;\n  min-height: 35px;\n  cursor: pointer;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: #6C757D;\n  }\n"])));
var SidebarContent = exports.SidebarContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1005;\n  top: 75px;\n  background-color: #fff;\n  overflow-x: hidden;\n  transition: 0.3s;\n  padding-top: 25px;  \n  ", "\n  @media (max-height: 450px) {\n    padding-top: 15px;\n  }\n\n  .selected-option {\n    padding: 0;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      left: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      right: 0;\n  "])));
});
var MenuLink = exports.MenuLink = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  appearance: none;\n  border: none;\n  padding: 0px 16px;\n  margin: 0px;\n  text-align: inherit;\n  display: block;\n  width: 100%;\n  background: ", ";\n  outline: none !important;\n  box-sizing: border-box;\n  ", ";\n  ", "\n  button:nth-child(2) {\n    margin: 0 10px;\n  }\n  @media (max-height: 450px) {\n    font-size: 18px;\n  }\n"])), function (_ref) {
  var isHome = _ref.isHome,
    theme = _ref.theme;
  return isHome ? '#333' : "".concat(theme.colors.backgroundPage);
}, function (_ref2) {
  var isCustomer = _ref2.isCustomer;
  return isCustomer && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid black;\n    @media (min-width: 451px) {\n      display: none;\n    }\n  "])));
}, function (_ref3) {
  var inSide = _ref3.inSide;
  return inSide && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    display: inline-flex;\n    padding: 0px 15px 5px;\n    border: 1px solid #000000;\n    width: fit-content;\n    float: right;\n    border-radius: 100px;\n    margin: 0 20px;\n  "])));
});
var WrappContent = exports.WrappContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  max-width: 100%;\n  width: 100%;\n  display: flex;\n  box-sizing: border-box;\n  padding-top: 7px;\n  #select-input {\n    width: 100%;\n    p {\n      max-width: 100%;\n    }\n    #list {\n      width: 100%;\n    }\n  }\n"])));
var MenuLinkIcon = exports.MenuLinkIcon = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  svg {\n    flex-shrink: 0;\n    color: #000;\n    width: 18px;\n    height: 18px;\n    color:  ", ";   \n  }\n"])), function (props) {
  return props.theme.colors.fontPrimary;
});
var MenuLinkText = exports.MenuLinkText = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: 0 7px;\n"])));
var TextInfo = exports.TextInfo = _styledComponents.default.span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.04ch;\n  text-transform: uppercase;\n  text-align: left;\n  margin: 0px;\n  padding: 0px;\n  display: block;\n  font-variant-ligatures: no-common-ligatures;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color:  ", ";\n  ", "\n"])), function (props) {
  return props.theme.colors.fontPrimary;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    text-align: right;\n    display: inline-block;\n  "])));
});
var MenuLinkSeparator = exports.MenuLinkSeparator = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  grid-area: -1 / 1 / auto / -1;\n  div {\n    width: 100%;\n    padding-left: 0px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      padding-right: 0px;\n      margin: 15px 0px -16px -16px;\n    "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      padding-left: 0px;\n      margin: 15px -16px -16px 0px;\n    "])));
});
var Hr = exports.Hr = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n  margin: 0px;\n  border: none;\n  height: 1px;\n  margin-top: 5px;\n  background: ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var SideBarOver = exports.SideBarOver = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 75px;\n  left: 0;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10;\n  background-color: #1f1f1fb3;\n"])));