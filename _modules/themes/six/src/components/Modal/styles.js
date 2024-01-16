"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalTitle = exports.ModalOrderTypes = exports.ModalIcon = exports.ModalHeader = exports.ModalDialog = exports.ModalBackHeader = exports.ModalActions = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var zx = _ref.zx;
  return zx && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    .popup {\n      z-index: ", " !important;\n    }\n  "])), zx);
});
var ModalDialog = exports.ModalDialog = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  background-color: ", ";\n  padding: ", ";\n  width: 100vw;\n  border-radius: 0px;\n  box-sizing: border-box;\n  margin-top: auto;\n  margin-bottom: auto;\n  height: ", ";;\n  max-height: 100vh;\n  overflow: auto;\n\n  @media (min-width: 769px) {\n    width: ", ";\n    max-height: 90vh;\n    border-radius: 10px;\n    height: auto;\n  }\n"])), function (_ref2) {
  var isTransparent = _ref2.isTransparent;
  return isTransparent ? 'transparent' : '#FFF';
}, function (_ref3) {
  var padding = _ref3.padding;
  return padding || '20px';
}, function (_ref4) {
  var height = _ref4.height;
  return height || '100%';
}, function (_ref5) {
  var width = _ref5.width;
  return width || '50%';
});
var ModalActions = exports.ModalActions = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 0px;\n  button {\n    width: 100%;\n    border-radius: 32px;\n    opacity: 1;\n    height: 45px;\n    &:nth-child(1) {\n      margin-right: 25px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-left: 25px;\n        margin-right: 0px;\n      "])));
});
var ModalHeader = exports.ModalHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n\n"])));
var ModalTitle = exports.ModalTitle = _styledComponents.default.h2(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 30px;\n  letter-spacing: 0px;\n  color: #010300;\n  opacity: 1;\n  margin: 20px 0px;\n  text-transform: capitalize;\n  flex: 1;\n"])));
var ModalOrderTypes = exports.ModalOrderTypes = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-right: 15px;\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding-left: 15px;\n    padding-right: 0px;\n  "])));
});
var ModalIcon = exports.ModalIcon = _styledComponents.default.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: fixed;\n  right: 5px;\n  top: 6px;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 2;\n  ", "\n  svg{\n    background: rgba(255,255,255,0.5);\n    border-radius: 50%;\n  }\n\n  @media(min-width: 769px){\n    position: absolute;\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
});
var ModalBackHeader = exports.ModalBackHeader = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: 50px;\n  background-color: white;\n  width: 100%;\n  position: fixed;\n  z-index: 2;\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"])));