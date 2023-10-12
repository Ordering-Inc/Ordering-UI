"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleItemWrapper = exports.ReviewButton = exports.PhotoWrapper = exports.Photo = exports.InfoContent = exports.DriverSelectorContainer = exports.DriverInfoContainer = exports.DriverInfo = exports.CutsomerDetail = exports.CustomerInfoTable = exports.CustomerInfo = exports.BusinessInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 0;\n  position: relative;\n\n  > svg {\n    position: absolute;\n    top: 32px;\n    right: 10px;\n    transition: all 0.3s;\n  }\n"])));
var PhotoWrapper = exports.PhotoWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: 48px;\n  max-height: 48px;\n  height: 48px;\n  width: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n\n  svg {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n  }\n"])));
var PhotoStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));
var Photo = exports.Photo = function Photo(props) {
  return /*#__PURE__*/_react.default.createElement(PhotoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var InfoContent = exports.InfoContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  > div {\n    display: flex;\n    align-items: center;\n\n    > p {\n      margin: 0px;\n      font-weight: 600;\n      color: ", ";\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 1;\n      overflow: hidden;\n\n      &.name {\n        max-width: 70%;\n      }\n    }\n\n    > button {\n      ", "\n    }\n  }\n\n  > p {\n    color: ", ";\n    font-size: 12px;\n    margin: 0px;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-right: 8px;\n      "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 8px;\n      "])));
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.lightGray;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "])));
});
var CustomerInfo = exports.CustomerInfo = (0, _styledComponents.default)(BusinessInfo)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));
var DriverInfoContainer = exports.DriverInfoContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
var DriverInfo = exports.DriverInfo = (0, _styledComponents.default)(BusinessInfo)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([""])));
var DriverSelectorContainer = exports.DriverSelectorContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 23px;\n  margin-bottom: 13px;\n  > p {\n    font-size: 14px;\n    margin-top: 0;\n    margin-bottom: 15px;\n  }\n  > div {\n    width: 100%;\n    border-radius: 8px;\n    background-color: ", ";\n\n    > div {\n      &:first-child {\n        border: none;\n        height: 50px;\n      }\n      > div:first-child {\n        color: ", ";\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    > div {\n      width: 50%;\n    }\n  }\n  @media (max-width: 576px) {\n    > div {\n      p {\n        max-width: initial;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.secundary;
}, function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.headingColor;
});
var CutsomerDetail = exports.CutsomerDetail = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  width: 100%;\n"])), function (props) {
  var _props$theme$colors5;
  return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.secundary;
});
var CustomerInfoTable = exports.CustomerInfoTable = _styledComponents.default.table(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  tr {\n    td {\n      color: ", ";\n      font-size: 12px;\n      margin: 0px;\n\n      &:first-child {\n        color: ", ";\n      }\n\n      > a {\n        color: ", ";\n        transition: all 0.3s linear;\n        &:hover {\n          color: ", ";\n        }\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors6;
  return (_props$theme$colors6 = props.theme.colors) === null || _props$theme$colors6 === void 0 ? void 0 : _props$theme$colors6.lightGray;
}, function (props) {
  var _props$theme$colors7;
  return (_props$theme$colors7 = props.theme.colors) === null || _props$theme$colors7 === void 0 ? void 0 : _props$theme$colors7.headingColor;
}, function (props) {
  var _props$theme$colors8;
  return (_props$theme$colors8 = props.theme.colors) === null || _props$theme$colors8 === void 0 ? void 0 : _props$theme$colors8.primary;
}, function (props) {
  var _props$theme$colors9;
  return (_props$theme$colors9 = props.theme.colors) === null || _props$theme$colors9 === void 0 ? void 0 : _props$theme$colors9.headingColor;
});
var ToggleItemWrapper = exports.ToggleItemWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n\n  ", "\n"])), function (props) {
  var _props$theme$colors10;
  return (_props$theme$colors10 = props.theme.colors) === null || _props$theme$colors10 === void 0 ? void 0 : _props$theme$colors10.secundary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    border-bottom: none;\n    .down-arrow {\n      transform: rotateZ(180deg);\n    }\n  "])));
});
var ReviewButton = exports.ReviewButton = _styledComponents.default.span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  font-size: 14px;\n  text-decoration: underline;\n"])), function (props) {
  return props.theme.colors.primary;
});