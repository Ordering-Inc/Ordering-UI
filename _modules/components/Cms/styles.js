"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonSide = exports.SkeletonInformation = exports.SkeletonHeader = exports.SkeletonContent = exports.SkeletonContainer = exports.CmsError = exports.CmsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CmsError = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  h2{\n    color: #D81212\n  }\n"])));
exports.CmsError = CmsError;
var CmsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0 25px;\n  background: ", " !important;\n  > div * {\n    font-family: ", " !important;\n    background: transparent !important;\n    color: ", " !important;\n  }\n"])), function (_ref) {
  var _theme$colors$tertiar, _theme$colors;
  var theme = _ref.theme;
  return (_theme$colors$tertiar = theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiaryContrast) !== null && _theme$colors$tertiar !== void 0 ? _theme$colors$tertiar : '#000';
}, function (_ref2) {
  var _theme$fonts, _theme$fonts$special;
  var theme = _ref2.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : (_theme$fonts$special = _theme$fonts.special) === null || _theme$fonts$special === void 0 ? void 0 : _theme$fonts$special.name;
}, function (_ref3) {
  var _theme$colors$tertiar2, _theme$colors2;
  var theme = _ref3.theme;
  return (_theme$colors$tertiar2 = theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.tertiary) !== null && _theme$colors$tertiar2 !== void 0 ? _theme$colors$tertiar2 : '#FFF';
});
exports.CmsContainer = CmsContainer;
var SkeletonContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
exports.SkeletonContainer = SkeletonContainer;
var SkeletonHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100px;\n  margin: 20px auto;\n"])));
exports.SkeletonHeader = SkeletonHeader;
var SkeletonContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 500px;\n  display: flex;\n  margin-bottom: 10px;\n"])));
exports.SkeletonContent = SkeletonContent;
var SkeletonInformation = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 70%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-right: 10px;\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n    margin-right: 0;\n  "])));
});
exports.SkeletonInformation = SkeletonInformation;
var SkeletonSide = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 30%;\n  height: 100%;\n  margin-left: 10px;\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0;\n  "])));
});
exports.SkeletonSide = SkeletonSide;