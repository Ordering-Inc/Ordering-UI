"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareButtons = exports.ProductImageWrapper = exports.ProductCopyURLContainer = exports.IconShare = exports.CopyButton = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var IconShare = exports.IconShare = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  margin: 0px;\n  top: 10px;\n  font-size: 22px;\n  right: 16px;\n  left: 10px;\n  z-index: 9999999;\n  background: rgba(255,255,255,0.5);\n  height: 30px;\n  border-radius: 50%;\n  width: 30px;\n  svg {\n    position: relative;\n    cursor: pointer;\n    color: #333;\n    left: 3px;\n    ", "\n  }\n  ", "\n\n\n  @media(min-width: 769px){\n    position: relative;\n    left: 5px;\n    top: 0;\n\n    svg{\n      position: static;\n    }\n\n    ", "\n  }\n\n  @media (min-width: 1201px) {\n    position: sticky;\n    width: 0;\n\n    &:nth-child(1) > svg {\n      background-color: white;\n      border-radius: 9px;\n      margin: 5px 0px;\n    }\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      left: 0;\n      right: 5px;\n    "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    left: 16px;\n    right: 10px;\n  "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      left: 0;\n      right: 5px;\n    "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      right: 0;\n      left: initial;\n    "])));
});
var ShareButtons = exports.ShareButtons = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  visibility: ", ";\n  top: 28px;\n  width: 40px;\n  position: absolute !important;\n\n  ", "\n\n  @media (min-width: 1201px) {\n    top: 35px;\n    left: -8px;\n  }\n"])), function (_ref) {
  var showShareButton = _ref.showShareButton;
  return showShareButton ? 'visible' : 'hidden';
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    right: -12px;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    left: -12px;\n  "])));
});
var CopyButton = exports.CopyButton = _styledComponents.default.a(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:hover {\n    > span {\n      opacity: 0.7;\n    }\n  }\n  > span {\n    background-color: #0166ff;\n    border-radius: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n\n    svg {\n      font-size: 24px;\n      color: #FFF;\n    }\n  }\n"])));
var ProductCopyURLContainer = exports.ProductCopyURLContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 30px;\n\n  p {\n    text-align: center;\n    &.name {\n      font-size: 20px;\n      font-weight: 600;\n      line-height: 30px;\n      margin-bottom: 0;\n      margin-top: 15px;\n    }\n\n    &.description {\n      font-size: 14px;\n      line-height: 24px;\n      margin: 0;\n    }\n  }\n\n  button {\n    margin-top: 50px;\n    height: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 100px;\n\n    svg {\n      font-size: 24px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    button {\n      width: 100%;\n      margin-top: 115px;\n    }\n  }\n"])));
var ProductImageWrapper = exports.ProductImageWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 95px;\n  height: 95px;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n  }\n\n  @media (min-width: 768px) {\n    width: 200px;\n    height: 200px;\n  }\n"])));