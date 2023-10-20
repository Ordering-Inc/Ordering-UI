"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selected = exports.SelectImage = exports.Select = exports.Options = exports.Option = exports.Header = exports.Chevron = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Option = exports.Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-left: 15px;\n  padding-right: 15px;\n  min-width: 100px;\n  color: #333;\n  cursor: pointer;\n\n  svg {\n    position: absolute;\n    top: 8px;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n\n  svg {\n    vertical-align: text-top;\n  }\n\n  ", "\n"])), (0, _polished.darken)(0.03, '#3F9CFF'), function (props) {
  return props.selected && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #3F9CFF;\n    color: #fff;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#3F9CFF'));
}, function (_ref) {
  var withIcons = _ref.withIcons;
  return withIcons && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      svg {\n        margin-right: 3px;\n        ", "\n      }\n  "])), function (props) {
    var _props$theme;
    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          margin-left: 3px;\n          margin-right: 0px;\n       "])));
  });
});
var Options = exports.Options = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: #CCC;\n  margin-top: 7px;\n  z-index: 10000;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #CCC;\n  border-radius: 5px;\n  overflow: hidden;\n\n  ", "\n  ", "\n"])), function (_ref2) {
  var position = _ref2.position;
  return (position === null || position === void 0 ? void 0 : position.toLowerCase()) === 'left' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    left: 0;\n    margin-left: -1px;\n    ", "\n  "])), function (props) {
    var _props$theme2;
    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-right: -1px;\n        margin-left: 0px;\n        right: 0;\n        left: initial\n    "])));
  });
}, function (_ref3) {
  var position = _ref3.position;
  return (position === null || position === void 0 ? void 0 : position.toLowerCase()) === 'right' && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    right: 0;\n    margin-right: -1px;\n    ", "\n  "])), function (props) {
    var _props$theme3;
    return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-left: -1px;\n        margin-right: 0px;\n        left: 0;\n        right: initial;\n    "])));
  });
});
var Selected = exports.Selected = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  padding-left: 9px;\n  padding-right: 9px;\n  font-size: 13px;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 11;\n\n  @media (min-width: 381px) {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n"])));
var Select = exports.Select = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: inline-block;\n  height: 34px;\n  border-radius: 34px;\n  line-height: 34px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #CCC;\n  background-color: ", " !important;\n  color: ", " !important;\n  position: relative;\n\n  ", "\n\n  ", "\n"])), function (_ref4) {
  var isHome = _ref4.isHome;
  return isHome ? 'rgba(247,247,247,0.3)' : '#CCC';
}, function (_ref5) {
  var isHome = _ref5.isHome;
  return isHome ? '#FFF' : '#333';
}, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
}, function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), (0, _polished.darken)(0.07, '#CCC'));
});
var Chevron = exports.Chevron = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n  ", "\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0;\n    "])));
});
var Header = exports.Header = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  flex: 1;\n\n  svg {\n    font-size: 18px;\n  }\n"])));
var SelectImage = exports.SelectImage = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 28px;\n  height: 28px;\n  border-radius: 1000px;\n  margin-left: 5px;\n  overflow: hidden;\n\n  ", "\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n  "])));
});