"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserImgWrapper = exports.RoundMark = exports.PopoverListLink = exports.PopoverListItem = exports.PopoverList = exports.PopoverBody = exports.HeaderItem = exports.ExtraOptions = exports.Divider = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeaderItem = exports.HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: 7.6px;\n  padding: 7px 13px;\n  margin: 0px;\n\n  ", "\n\n  svg {\n    color: ", ";\n    height: 40px;\n    width: 40px;\n  }\n\n  .menu-list {\n    font-size: 16px;\n    width: auto;\n    height: auto;\n    margin-right: 20px;\n    ", "\n    color: ", ";\n  }\n\n  img {\n    width: 42px;\n    height: 42px;\n    border-radius: 7.6px;\n  }\n"])), function (_ref) {
  var isOpen = _ref.isOpen,
    isChew = _ref.isChew;
  return isOpen && !isChew && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: #F8F9FA;\n  "])));
}, function (_ref2) {
  var isHome = _ref2.isHome;
  return isHome ? '#FFF' : '#000';
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      margin-right: 0;\n    "])));
}, function (props) {
  return props.isChew ? props.theme.colors.backgroundPage : props.theme.colors.darkTextColor;
});
var PopoverBody = exports.PopoverBody = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: #333;\n  padding: 20px 15px;\n  border-radius: 10px;\n  max-width: 500px;\n  min-width: 300px !important;\n  z-index: 10002;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 || (_props$theme2 = _props$theme2.colors) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.backgroundPage;
});
var PopoverList = exports.PopoverList = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
var PopoverListItemStyles = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 7px 15px;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  color: #000000;\n  border-radius: 7.6px;\n\n  svg {\n    margin-right: 5px;\n    ", "\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: #f8f8f8;\n  }\n\n  :last-child {\n    border-bottom: 0;\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
var PopoverListItem = exports.PopoverListItem = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), PopoverListItemStyles);
var PopoverListLink = exports.PopoverListLink = _styledComponents.default.a(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n  text-decoration: none;\n\n  ", "\n"])), PopoverListItemStyles, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    background-color: #eee;\n  "])));
});
var ExtraOptions = exports.ExtraOptions = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  a, div {\n    font-weight: normal;\n  }\n"])));
var Divider = exports.Divider = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  margin-bottom: 15px;\n  width: calc(100% + 30px);\n  margin-left: -15px;\n  height: 1px;\n  background: #E9ECEF;\n\n  ", "\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-right: -15px;\n    margin-left: 0;\n  "])));
});
var UserImgWrapper = exports.UserImgWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n"])));
var RoundMark = exports.RoundMark = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #E63757;\n  top: -3px;\n  right: -6px;\n"])));