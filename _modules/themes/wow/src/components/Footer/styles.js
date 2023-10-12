"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIcon = exports.LogoWapper = exports.LogoContainer = exports.LinkContainer = exports.InnerContainer = exports.FooterContainer = exports.DownloadAppLink = exports.DownloadAppContainer = exports.Content = exports.AppLinkWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FooterContainer = exports.FooterContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: linear-gradient(90deg, #43BEAC 0%, #63D0DF 100%);\n  padding: 50px 0;\n"])));
var InnerContainer = exports.InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 91%;\n  margin: 0 auto;\n  border-bottom: 1px solid #FFF;\n  padding-bottom: 20px;\n"])));
var LogoContainer = exports.LogoContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 25%;\n\n  @media (max-width: 992px) {\n    width: 35%;\n  }\n\n  @media (max-width: 576px) {\n    width: 50%;\n  }\n"])));
var LinkContainer = exports.LinkContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 992px) {\n    flex-wrap: wrap;\n    > div {\n      width: 50%;\n      margin-bottom: 20px;\n    }\n  }\n\n  @media (max-width: 576px) {\n    > div {\n      width: 100%;\n    }\n  }\n"])));
var Content = exports.Content = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  > img {\n    width: 80px;\n    height: 30px;\n\n    @media (min-width: 768px) {\n      width: 120px;\n      height: 45px;\n    }\n  }\n  > * {\n    font-size: 14px;\n    margin: 10px 0px;\n    display: block;\n  }\n  h1 {\n    font-weight: 600;\n    color: #FFF;\n  }\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var mobileSocialView = _ref.mobileSocialView;
  return mobileSocialView && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    svg {\n      color: #FFF;\n    }\n    @media (min-width: 768px) {\n      display: none;\n    }\n  "])));
}, function (_ref2) {
  var desktopSocilalView = _ref2.desktopSocilalView;
  return desktopSocilalView && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: none;\n    @media (min-width: 768px) {\n      display: block;\n    }\n  "])));
});
var SocialIcon = exports.SocialIcon = _styledComponents.default.a(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin: 0 5px;\n  color: initial;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"])));
var DownloadAppContainer = exports.DownloadAppContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var LogoWapper = exports.LogoWapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70px;\n  height: 70px;\n  margin-right: 10px;\n\n  ", "\n\n  img {\n    width: 80%;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 10px;\n  "])));
});
var AppLinkWrapper = exports.AppLinkWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));
var DownloadAppLink = exports.DownloadAppLink = _styledComponents.default.a(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  img {\n    width: 100px;\n    height: 31px;\n    border-radius: 5px;\n  }\n"])));