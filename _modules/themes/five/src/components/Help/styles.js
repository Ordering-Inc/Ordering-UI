"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SubTitle = exports.SubPageList = exports.SubPage = exports.LastOrdersListWrapper = exports.HelpContentWrapper = exports.HelpContainer = exports.BreadCrumbContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var HelpContainer = exports.HelpContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 30px 15px 15px 15px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 280px);\n\n  @media (min-width: 769px) {\n    width: 70%;\n  }\n"])));
var BreadCrumbContainer = exports.BreadCrumbContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 23px;\n  display: flex;\n  align-items: center;\n\n  svg {\n    font-size: 13px;\n    color: #909BA9;\n    margin: 0 7px;\n\n    ", "\n  }\n\n  span {\n    font-size: 12px;\n    color: #344050;\n\n    &.deactive {\n      color: #909BA9;\n      cursor: pointer;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      transform: rotateZ(180deg);\n    "])));
});
var Title = exports.Title = _styledComponents.default.h1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 32px;\n  margin-bottom: 30px;\n  margin-top: 0;\n"])));
var SubTitle = exports.SubTitle = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 18px;\n"])));
var HelpContentWrapper = exports.HelpContentWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""])));
var SubPageList = exports.SubPageList = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-bottom: 60px;\n"])));
var SubPage = exports.SubPage = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding: 10px 0;\n  border-bottom: 1px solid #E9ECEF;\n  margin-bottom: 5px;\n\n  span {\n    font-size: 14px;\n    color: #344050;\n    user-select: none;\n    cursor: pointer;\n  }\n"])));
var LastOrdersListWrapper = exports.LastOrdersListWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-bottom: 60px;\n\n  h2 {\n    font-weight: 500;\n    font-size: 20px;\n    color: #344050;\n    margin-bottom: 10px;\n    margin-top: 0;\n  }\n"])));