"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpsellingContainer = exports.SkeletonContainer = exports.Item = exports.Image = exports.Details = exports.Container = exports.CloseUpselling = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  \n  @media (min-width: 768px){\n    justify-content: flex-start;\n    height: auto;\n  }\n"])));
exports.Container = Container;
var UpsellingContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n\n  @media (min-width: 681px) {\n    ", "\n  }\n"])), function (_ref) {
  var isCustomMode = _ref.isCustomMode;
  return isCustomMode ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    > h1 {\n      font-size: 20px;\n      padding: 0 20px;\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.grayDark;
  }) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n    overflow: auto;\n    width: 100%;\n    justify-content: space-around;\n  "])));
}, function (_ref2) {
  var isCustomMode = _ref2.isCustomMode;
  return isCustomMode && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      > h1 {\n        padding: 0px;\n      }\n    "])));
});
exports.UpsellingContainer = UpsellingContainer;
var Item = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 150px;\n  padding: 20px 15px 30px 15px;\n  margin: 15px;\n  text-align: center;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 20px;\n  box-sizing: border-box;\n  user-select: none;\n  ", "\n\n  @media (min-width: 768px) {\n    ", "\n  }\n\n  @media (min-width: 1200px) {\n    ", "\n  }\n"])), function (_ref3) {
  var isCustomMode = _ref3.isCustomMode;
  return !isCustomMode ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: calc(100% - 30px);\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    width: 300px;\n  "])));
}, function (_ref4) {
  var isCustomMode = _ref4.isCustomMode;
  return !isCustomMode && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      width: calc(50% - 30px);\n    "])));
}, function (_ref5) {
  var isCustomMode = _ref5.isCustomMode;
  return !isCustomMode && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      width: calc(33% - 30px);\n    "])));
});
exports.Item = Item;
var Image = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 80px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  img{\n    width: 100%;\n    height: auto;\n    border-radius: 7.6px;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  > button {\n    position: absolute;\n    font-size: 12px;\n    padding: 0px 15px;\n    bottom: -15px;\n  }\n"])));
exports.Image = Image;
var Details = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 16px;\n  width: calc(100% - 95px);\n  div {\n    width: 100%;\n     h3 {\n      margin-block-start: 0.1em;\n      margin-block-end: 0.1em;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-size: 14px;\n      color: ", ";\n      text-align: initial;\n    }\n  }\n  p {\n    color: ", ";\n    font-weight: 500;\n    margin: 0;\n    text-align: initial;\n  }\n  button {\n    width: auto;\n    margin: 8px auto 0;\n    padding: 0 20px;\n    font-size: 1em;\n    line-height: 22px;\n\n  }\n\n  @media (min-width: 480px){\n    div{\n      h3{\n        font-size: 16px;\n      }\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.grayDark;
});
exports.Details = Details;
var CloseUpselling = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n\n  button{\n    width: 90%;\n    font-size: 1.4em;\n    padding: 10px 0;\n  }\n\n  @media (min-width: 720px){\n    button{\n      width: 40%;\n      padding: 2px;\n      font-size: 1em;\n    }\n  }\n"])));
exports.CloseUpselling = CloseUpselling;
var SkeletonContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 15%;\n  margin: 20px;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  border-radius: 9px;\n  overflow: hidden;\n\n  span {\n    border-radius: 7.6px;\n  }\n"])));
exports.SkeletonContainer = SkeletonContainer;