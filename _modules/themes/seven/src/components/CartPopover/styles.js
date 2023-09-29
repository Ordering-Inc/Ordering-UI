"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverBody = exports.PopoverArrow = exports.HeaderItem = exports.Header = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeaderItem = exports.HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: 55px;\n  height: 40px;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  color: #fff;\n  span {\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 26px;\n    margin: 0;\n    margin-left: 5px;\n    ", "\n  }\n  svg {\n    font-size: 24px;\n    path {\n      fill: #fff;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    height: 48px;\n  }\n\n  @media (min-width: 1400px) {\n    width: 86px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0px;\n    "])));
});
var PopoverBody = exports.PopoverBody = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  color: #333;\n  border-radius: 10px;\n  max-width: 520px;\n  z-index: 1001;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n  padding: 15px;\n  box-sizing: border-box;\n"])));
var PopoverArrow = exports.PopoverArrow = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n\n  h2 {\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 34px;\n    color: ", "\n  }\n\n  svg {\n    position: absolute;\n    top: 7px;\n    right: 7px;\n    cursor: pointer;\n    font-size: 20px;\n    font-weight: bold;\n    transition: 0.1s ease-in-out;\n    &:hover {\n      transform: scale(1.05);\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});