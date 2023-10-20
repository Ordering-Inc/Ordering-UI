"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeContainer = exports.SearchTypeContainer = exports.Divider = exports.BusinessCategoryTitle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TypeContainer = exports.TypeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  overflow-x: auto;\n  padding: 15px 20px 0 20px;\n  box-sizing: border-box;\n  position: relative;\n\n  ::-webkit-scrollbar {\n      opacity: 0\n  }\n  \n  > div{\n    > div {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    width: 100%;\n  }\n  }\n\n  .category{\n    padding: 10px 7px 0 0;\n\n    > span {\n      margin-bottom: 15px;\n      ", " \n    }\n  }\n\n  @media (min-width: 480px){\n    .category{\n      padding: 10px 15px 0 0;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n      "])));
});
var BusinessCategoryTitle = exports.BusinessCategoryTitle = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  z-index: 100;\n  position: relative;\n  font-size: 13px;\n  color: #909BA9;\n  user-select: none;\n  white-space: nowrap;\n  padding-bottom: 13px;\n  margin: 0;\n  border-bottom: 1px solid transparent;\n  transition: all 0.3s;\n\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-weight: bold;\n    border-bottom: 1px solid ", ";\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.darkTextColor;
  }, function (props) {
    return props.theme.colors.darkTextColor;
  });
});
var Divider = exports.Divider = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: calc(100% - 40px);\n  height: 1px;\n  left: 20px;\n  bottom: 0;\n  background: #E9ECEF;\n"])));
var SearchTypeContainer = exports.SearchTypeContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: calc(100% + 10px);\n  margin-left: -5px;\n\n  button {\n    border-radius: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n    line-height: 24px;\n    margin: 10px 5px 0px 5px;\n\n    svg {\n      margin-left: 5px;\n      font-size: 12px;\n      ", "\n    }\n  }\n\n  span {\n    margin-right: 10px;\n    border-radius: 50px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0px;\n      "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0px;\n    "])));
});