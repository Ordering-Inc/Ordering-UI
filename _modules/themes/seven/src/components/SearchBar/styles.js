"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchIcon = exports.DeleteContent = exports.BusinessSearch = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessSearch = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  min-width: 250px;\n  margin-left: auto;\n    \n\n  input {\n    width: 100%;\n    background-position: right 10px center;\n    background-repeat: no-repeat;\n    background-size: 15px;\n    box-sizing: border-box;\n    padding: 7px 22px;\n    border: none;\n    border-bottom: 1px solid ", ";\n    background-color: transparent;\n    font-size: 16px;\n    line-height: 24px;\n    ", "\n  }\n\n  @media(min-width: 481px){\n    width: 50%;\n    margin-left: calc(100% - 51.5793654%);\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref) {
  var isCustomLayout = _ref.isCustomLayout;
  return !isCustomLayout && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      justify-content: center;\n      -webkit-transition: width 0.4s ease-in-out;\n      transition: width 0.4s ease-in-out; \n    "])));
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: unset;\n      margin-right: auto;\n    "])));
});
exports.BusinessSearch = BusinessSearch;
var DeleteContent = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  padding: 10px 0;\n  color: #333;\n  font-size: 1rem;\n  right: 0;\n  border-radius: 25%;\n  max-height: 100%;\n  ", "\n  span{\n    cursor: pointer;\n  }\n  img{\n    width: 20px;\n    transform: translate(-25%, 0%);\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    right: unset;\n    left: 0;\n  "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      transform: translate(25%, 0%);\n    "])));
});
exports.DeleteContent = DeleteContent;
var SearchIcon = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 7px;\n  left: 0;\n  ", "\n\n  svg {\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    left: unset;\n    right: 0;\n  "])));
}, function (props) {
  return props.theme.colors.disabled;
});
exports.SearchIcon = SearchIcon;