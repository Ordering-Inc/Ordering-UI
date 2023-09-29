"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessTitle = exports.WrappButton = exports.SingleCard = exports.Reorder = exports.PastLogo = exports.OrderState = exports.OrderPrice = exports.OrderDate = exports.Floting = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SingleCard = exports.SingleCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  max-height: 100px;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  min-width: 220px;\n\n  @media (min-width: 768px){\n    margin: 10px;\n    width: calc(50% - 20px);\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;\n    border-radius: 7.6px;\n  }\n\n  @media (min-width: 1024px){\n    width: calc(33.3% - 20px);\n  }\n"])));
var PastLogo = exports.PastLogo = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 64px;\n  height: 64px;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n  border-radius: 7.6px;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }\n  @media (min-width: 768px){\n    width: 75px;\n    height: 75px;\n    filter: none;\n  }\n"])));
var WrapperBusinessTitle = exports.WrapperBusinessTitle = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 95%;\n  h2 {\n    font-weight: 600;\n    font-size: 13px;\n    line-height: 18px;\n    color: #344050;\n  }\n"])));
var Reorder = exports.Reorder = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8em;\n\n  p {\n    color: #53ad26;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2; /* number of lines to show */\n    -webkit-box-orient: vertical;\n  }\n  button {\n    margin: 5px 0;\n    width: 100%;\n    font-size: 0.9em;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 480px){\n    font-size: 1em;\n    button{\n      width: 90%;\n      font-size: 0.9em;\n    }\n  }\n\n  @media (min-width: 768px){\n    ", "\n    button{\n      width: 80%;\n    }\n  }\n\n  @media (min-width: 1024px){\n    button{\n      width: 50%;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 0;\n    "])));
});
var WrappButton = exports.WrappButton = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n\n  button {\n    padding: 10px 0px;\n    width: 100%;\n  }\n\n  button:hover{\n    color: ", ";\n  }\n\n  @media (min-width: 768px) {\n    button {\n      width: 60%;\n    }\n  }\n"])), function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.primary);
});
var OrderDate = exports.OrderDate = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  p {\n    font-weight: normal;\n    font-size: 11px;\n    line-height: 15px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: auto;\n    max-width: 95%;\n    display: block;\n    overflow: hidden\n  }\n\n"])));
var OrderState = exports.OrderState = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 15px;\n  color: ", ";\n  margin-top: 5px;\n"])), function (props) {
  return props.theme.colors.primary;
});
var Floting = exports.Floting = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 64px;\n  ", "\n\n button {\n  background: ", ";\n  border: none;\n  border-radius: 50px;\n  font-size: 10px;\n  line-height: 15px;\n  padding: 4px 8px;\n  color: ", ";\n  &.review {\n    background: transparent;\n    border: 1px solid ", ";\n  }\n }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    right: unset;\n    left: 10px;\n "])));
}, function (props) {
  return (0, _polished.lighten)(0.35323, props.theme.colors.primary);
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return (0, _polished.lighten)(0.35323, props.theme.colors.primary);
});
var OrderPrice = exports.OrderPrice = _styledComponents.default.p(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 12px;\n  line-height: 18px;\n  color: #344050;\n"])));