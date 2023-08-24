"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessLogo = exports.BusinessLogo = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessHeader = exports.BusinessContent = exports.BusinessContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
exports.BusinessContainer = BusinessContainer;
var BusinessHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  max-height: 200px;\n  height: 200px;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 200px;\n  justify-content: center;\n  align-items: flex-end;\n  border-radius: 8px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0 10px;\n    padding: 0;\n  }\n\n  @media (min-width: 490px) {\n    justify-content: flex-start;\n  }\n\n  @media (min-width: 768px) {\n    max-height: 250px;\n    height: 250px;\n  }\n"])), function (props) {
  return props.isSkeleton && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-color: #F8F8F8;\n  "])));
}, function (props) {
  return props.bgimage && !props.isClosed && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-image: url(", ");\n  "])), props.bgimage);
}, function (props) {
  return props.bgimage && props.isClosed && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(", ");\n  "])), props.bgimage);
});
exports.BusinessHeader = BusinessHeader;
var BusinessContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  background-color: #FFF;\n  border-radius: 10px;\n  margin-top: 50px;\n  max-height: 90px;\n"])));
exports.BusinessContent = BusinessContent;
var WrapperBusinessLogo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  max-width: 90px;\n  max-height: 90px;\n  height: 90px;\n  width: 90px;\n  position: absolute;\n  bottom: -45px;\n  ", "\n\n  span {\n    border-radius: 100%;\n  }\n\n  @media (min-width: 768px) {\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    right: 25px;\n  "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    left: 25px;\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      right: 45px;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      left: 45px;\n    "])));
});
exports.WrapperBusinessLogo = WrapperBusinessLogo;
var BusinessLogoStyled = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 90px;\n  border-radius: 100%;\n  box-shadow: 0px 3px 6px #00000029;\n"])));
var BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.BusinessLogo = BusinessLogo;
var BusinessInfo = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
exports.BusinessInfo = BusinessInfo;
var BusinessInfoItem = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ", "\n\n  div {\n    font-size: 14px;\n    display: flex;\n\n    span {\n      margin: 0 5px;\n    }\n\n    h5 {\n      font-weight: 300;\n      svg{\n        margin-bottom: 1px;\n      }\n    }\n\n    h5,\n    p {\n      display: flex;\n      flex-wrap: wrap;\n      align-items: center;\n      margin: 0px;\n      overflow: hidden;\n      /* white-space: nowrap; */\n      text-overflow: ellipsis;\n      color: ", ";\n\n      svg {\n        margin-right: 4px;\n\n        ", "\n\n        &.popup {\n          color: ", ";\n          cursor: pointer;\n          transform: rotate(180deg);\n        }\n      }\n\n      &.bold {\n        font-weight: 600;\n        font-size: 32px;\n        color: #191919;\n      }\n\n      &.type {\n        font-weight: 300;\n      }\n\n      ", "\n    }\n\n    @media (min-width: 481px) {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    padding: 0px 16px 0px 5px;\n  "])));
}, function (props) {
  return props.theme.colors.darkGray;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n          margin-left: 4px;\n          margin-right: 0px;\n        "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n      "])));
});
exports.BusinessInfoItem = BusinessInfoItem;