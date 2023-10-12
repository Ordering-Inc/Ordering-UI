"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessCard = exports.Medadata = exports.ContainerCard = exports.Categories = exports.BusinessTags = exports.BusinessName = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessHero = exports.BusinessHeader = exports.BusinessContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ContainerCard = exports.ContainerCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 20px 0px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #F7F7F7;\n  border-radius: 8px;\n  padding: 15px;\n  box-sizing: border-box;\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 24%) 0px 2px 26px, rgb(0 0 0 / 8%) 0px 2px 8px;\n  }\n  width: 100%;\n  \n  @media (min-width: 768px) {\n    width: calc(100% - 40px);\n    margin: 30px 20px;\n  }\n\n  @media (min-width: 992px) {\n    width: calc(50% - 40px);\n  }\n"])));
var WrapperBusinessCard = exports.WrapperBusinessCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  cursor: ", ";\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton ? 'default' : 'pointer';
});
var BusinessHero = exports.BusinessHero = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n"])));
var BusinessHeaderStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 175px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n  }\n\n  @media (min-width: 481px) {\n    min-height: 200px;\n  }\n"])));
var BusinessHeader = exports.BusinessHeader = function BusinessHeader(props) {
  var style = {};
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessHeaderStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var BusinessTags = exports.BusinessTags = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  justify-content: space-between;\n  align-items: center;\n  top: 0;\n  margin: 15px;\n  width: calc(100% - 35px);\n\n  span.crown {\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    color: #FFC917;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n\n  span {\n    background-color: #6C6C6C;\n    font-size: 12px;\n    color: #FFF;\n    padding: 8px;\n    border-radius: 8px;\n    margin-right: 10px;\n    ", "\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n    "])));
});
var BusinessContent = exports.BusinessContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 15px;\n"])));
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var BusinessInfoItem = exports.BusinessInfoItem = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 86px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 12px;\n  color: ", ";\n  .reviews {\n    display: flex;\n    align-items: center;\n    svg {\n      margin-right: 3px;\n      font-size: 22px;\n      color: #FDC918;\n      ", "\n    }\n  }\n\n  div {\n    display: flex;\n    justify-content: space-between;\n    p {\n      text-transform: capitalize;\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      img {\n        margin-right: 4px;\n        ", "\n      }\n    }\n    p.bold {\n      font-weight: bold;\n    }\n  }\n\n  @media (min-width: 481px){\n    font-size: 16px;\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkGray;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-left: 3px;\n        margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n          margin-left: 4px;\n          margin-right: 0px;\n       "])));
});
var BusinessName = exports.BusinessName = _styledComponents.default.h6(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  color: #191919;\n"])));
var Categories = exports.Categories = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 300;\n  color: #6C6C6C;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n  margin: 5px 0;\n  color: ", ";\n\n  @media (min-width: 481px) {\n    font-size: 16px;\n  }\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.darkGray;
});
var Medadata = exports.Medadata = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  font-weight: 300;\n  font-size: 12px;\n\n  p {\n    svg {\n      margin-right: 3px;\n      ", "\n    }\n  }\n\n  @media (min-width: 481px) {\n    font-size: 14px;\n  }\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        margin-left: 3px;\n        margin-right: 0;\n    "])));
});