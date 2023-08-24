"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearchAndFilter = exports.TopRightSection = exports.SLAControlsWrapper = exports.OrderContentHeaderContainer = exports.HeaderTitle = exports.HeaderSection = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderContentHeaderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 300px;\n  width: 100%;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n\n  @media (max-width: 1200px) {\n    ", "\n  }\n"])), function (_ref) {
  var isDisableControl = _ref.isDisableControl;
  return !isDisableControl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      flex-direction: column;\n    "])));
});
exports.OrderContentHeaderContainer = OrderContentHeaderContainer;
var HeaderSection = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: fit-content;\n\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n\n    &.tour_btn {\n      ", "\n      svg {\n        width: 20px;\n        height: 20px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: -8px;\n        margin-right: 8px;\n      "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-right: -8px;\n        margin-left: 8px;\n      "])));
});
exports.HeaderSection = HeaderSection;
var HeaderTitle = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0px;\n  text-transform: capitalize;\n  white-space: nowrap;\n\n  @media (max-width: 560px) {\n    width: calc(100% - 50px);\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.HeaderTitle = HeaderTitle;
var TopRightSection = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  \n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n  }\n"])));
exports.TopRightSection = TopRightSection;
var SLAControlsWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n\n  @media (min-width: 768px) {\n    margin-top: 0px;\n  }\n"])));
exports.SLAControlsWrapper = SLAControlsWrapper;
var WrapperSearchAndFilter = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n\n  ", "\n\n  input {\n    background: ", ";\n    border: none;\n  }\n\n  > button {\n    ", "\n  }\n\n  @media (min-width: 760px) {\n    margin: 20px 0 10px 0;\n  }\n\n  @media (min-width: 992px) {\n    margin: 0px;\n  }\n"])), function (_ref2) {
  var fullWidth = _ref2.fullWidth;
  return fullWidth && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    width: 100%;\n    > div {\n      width: 100%;\n\n      input {\n        width: 100%;\n      }\n    }\n  "])));
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n    "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n    "])));
});
exports.WrapperSearchAndFilter = WrapperSearchAndFilter;