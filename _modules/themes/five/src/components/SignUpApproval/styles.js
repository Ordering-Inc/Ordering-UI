"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.ProjectInfoContainer = exports.LogoImage = exports.HeaderSection = exports.FooterSection = exports.DescriptionContainer = exports.Description = exports.Container = exports.ContactSection = exports.BodySection = exports.ActionGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-align: center;\n  box-sizing: border-box;\n  * {\n    box-sizing: border-box;\n  }\n"])));
var HeaderSection = exports.HeaderSection = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\n"])));
var Title = exports.Title = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 24px;\n  transform: translate(0px, -22px);\n"])));
var LogoImage = exports.LogoImage = _styledComponents.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  object-fit: cover;\n\n  ", "\n"])), function (_ref) {
  var approvalType = _ref.approvalType;
  return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    ", "\n  "])), approvalType ? "\n      @media (min-width: 450px) {\n        width: 395px;\n      }\n    " : "\n    @media (min-width: 600px) {\n        width: 540px;\n    }\n    ");
});
var BodySection = exports.BodySection = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n"])));
var DescriptionContainer = exports.DescriptionContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n\n"])));
var Description = exports.Description = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  word-break: break-all;\n  > .bigger {\n    font-weight: 600;\n  }\n  > .italic {\n    font-style: italic;\n  }\n  > .green-text {\n    color: ", " !important;\n  }\n"])), function (props) {
  return props.theme.colors.links;
});
var ProjectInfoContainer = exports.ProjectInfoContainer = _styledComponents.default.table(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 35px auto 0;\n  width: 100%;\n  .bigger {\n    font-weight: 600;\n  }\n  .td-text-right {\n    text-align: right;\n    padding-right: 20px;\n  }\n  .td-text-left {\n    text-align: left;\n  }\n  .green-text {\n    color: ", " !important;\n  }\n  td {\n    > a {\n      word-break: break-all;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.links;
});
var FooterSection = exports.FooterSection = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin: 35px auto 25px;\n"])));
var ActionGroup = exports.ActionGroup = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 90%;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  > button {\n    width: 48.5%;\n    padding: 5px;\n  }\n"])));
var ContactSection = exports.ContactSection = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin: 25px auto 0;\n  font-style: italic;\n\n  > a.green-text {\n    color: ", " !important;\n  }\n"])), function (props) {
  return props.theme.colors.links;
});