"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleTitle = exports.ScheduleTime = exports.ScheduleDate = exports.MetaItem = exports.CloseOverall = exports.BusinessName = exports.BusinessHeader = exports.BusinessContainer = exports.BuinessMeta = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessContainer = exports.BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n  ", "\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])), function (props) {
  return props.isSkeleton && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #F8F8F8;\n  "])));
});
var BusinessName = exports.BusinessName = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 50px 20px;\n  background-color: ", ";\n  \n  h2 {\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 35px;\n    color: #fff;\n    box-sizing: border-box;\n    margin: 0;\n    margin-top: 15px;\n    margin-bottom: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 100%;\n  }\n  ", "\n\n  @media (min-width: 768px) {\n    display: flex;\n    width: 35%;\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 3%;\n\n  }\n  @media (min-width: 1024px) {\n    h2 {\n      font-size: 32px;\n      line-height: 42px; \n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.isClosed && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    h2 {\n      opacity: 0.5;\n    }\n  "])));
});
var BusinessHeader = exports.BusinessHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  position: relative;\n  max-height: 260px;\n  height: 260px;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 200px;\n  border-radius: 0px;\n  ", "\n  ", "\n  @media (min-width: 768px) {\n    width: 65%;\n  }\n"])), function (props) {
  return props.bgimage && !props.isClosed && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background-image: url(", ");\n  "])), props.bgimage);
}, function (props) {
  return props.bgimage && props.isClosed && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(", ");\n  "])), props.bgimage);
});
var CloseOverall = exports.CloseOverall = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #00000082;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  h1 {\n    color: #FFF;\n    opacity: 0.7;\n  }\n"])));
var BuinessMeta = exports.BuinessMeta = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  line-height: 26px;\n  color: #fff;\n  margin:0;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n"])));
var MetaItem = exports.MetaItem = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  span {\n    margin-right: 7px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n        margin-left: 7px;\n    "])));
});
var ScheduleDate = exports.ScheduleDate = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: #fff;\n"])));
var ScheduleTime = exports.ScheduleTime = _styledComponents.default.p(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 14px;\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n"])));
var ScheduleTitle = exports.ScheduleTitle = _styledComponents.default.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-right: 7px;\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 7px;\n "])));
});