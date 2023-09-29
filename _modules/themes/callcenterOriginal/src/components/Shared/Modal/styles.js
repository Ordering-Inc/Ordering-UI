"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalTitle = exports.ModalOrderTypes = exports.ModalIcon = exports.ModalHeader = exports.ModalDialogInnerContainer = exports.ModalDialog = exports.ModalActions = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var zx = _ref.zx;
  return zx && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    .popup {\n      z-index: ", " !important;\n    }\n  "])), zx);
});
var ModalDialog = exports.ModalDialog = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  border-radius: 10px;\n  box-sizing: border-box;\n  margin-top: auto;\n  margin-bottom: auto;\n  overflow: auto;\n  max-height: calc(var(--vh, 1vh) * 90);\n  @media (max-width: 860px) {\n    width: 80%;\n  }\n  @media (max-width: 768px) {\n    width: 100vw;\n    height: 100%;\n    max-height: calc(var(--vh, 1vh) * 100);\n    border-radius: 0px;\n  }\n"])), function (_ref2) {
  var width = _ref2.width;
  return width || '50%';
}, function (_ref3) {
  var height = _ref3.height;
  return height;
});
var ModalDialogInnerContainer = exports.ModalDialogInnerContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  padding: ", ";\n  overflow: ", ";\n  background-color: ", ";\n  width: 100%;\n  height: 100%;\n"])), function (_ref4) {
  var padding = _ref4.padding;
  return padding || '20px';
}, function (_ref5) {
  var overflow = _ref5.overflow;
  return overflow || 'auto';
}, function (_ref6) {
  var isTransparent = _ref6.isTransparent,
    theme = _ref6.theme;
  return isTransparent ? 'transparent' : theme.colors.backgroundPage || '#FFF';
});
var ModalActions = exports.ModalActions = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  margin: 30px 0px 0px;\n\n  button {\n    width: 100%;\n    border-radius: 32px;\n    opacity: 1;\n    max-width: 300px;\n    margin-top: 10px;\n    height: 60px;\n  }\n"])));
var ModalHeader = exports.ModalHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var ModalTitle = exports.ModalTitle = _styledComponents.default.h2(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  text-align: left;\n  font-size: 30px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  color: #010300;\n  opacity: 1;\n  margin: 0px 0px;\n  margin-bottom: 20px;\n  text-transform: capitalize;\n  flex: 1;\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    text-align: right;\n    padding-right: 10px;\n    padding-left: 0px;\n  "])));
});
var ModalOrderTypes = exports.ModalOrderTypes = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-right: 15px;\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding-left: 15px;\n    padding-right: 0px;\n  "])));
});
var ModalIcon = exports.ModalIcon = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1;\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
});