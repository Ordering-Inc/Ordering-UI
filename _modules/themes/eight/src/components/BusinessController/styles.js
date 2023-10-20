"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessLogo = exports.WrapperBusinessCard = exports.Medadata = exports.GreenDataItem = exports.ContainerCard = exports.Categories = exports.CallCenterInformationBullet = exports.CallCenterInformation = exports.BusinessName = exports.BusinessLogo = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessContent = exports.BusinessClosed = exports.BusinessAddress = exports.BusinessActions = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ContainerCard = exports.ContainerCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 15px 0;\n\n  ", "\n\n  background-image: linear-gradient(to right, ", " 20%, rgba(255,255,255,0) 0%);\n  background-position: bottom;\n  background-size: 10px 2px;\n  background-repeat: repeat-x;\n  "])), function (_ref) {
  var isStore = _ref.isStore;
  return isStore && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 80%;\n  "])));
}, function (props) {
  return props.theme.colors.grayMedium;
});
var WrapperBusinessCard = exports.WrapperBusinessCard = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])));
var BusinessContent = exports.BusinessContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n  flex: 1;\n\n  ", "\n"])), function (_ref2) {
  var isStore = _ref2.isStore;
  return isStore && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    justify-content: flex-start;\n    width: 50%;\n  "])));
});
var WrapperBusinessLogo = exports.WrapperBusinessLogo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 70px;\n  height: 70px;\n  min-height: 70px;\n  max-width: 70px;\n  ", "\n\n  ", "\n  border-radius: 50%;\n\n  ", "\n"])), function (_ref3) {
  var isStore = _ref3.isStore;
  return isStore && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
}, function (_ref4) {
  var isSkeleton = _ref4.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.gray;
  });
}, function (_ref5) {
  var isSkeleton = _ref5.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    width: auto;\n    height: auto;\n\n    span {\n      border-radius: 50%;\n    }\n  "])));
});
var BusinessLogoStyled = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 70px;\n  height: 70px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 70px;\n  border-radius: 50%;\n"])));
var BusinessLogo = exports.BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  width: calc(100% - 90px);\n"])));
var BusinessInfoItem = exports.BusinessInfoItem = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  .reviews {\n    display: flex;\n    align-items: center;\n    svg {\n      margin-right: 3px;\n      font-size: 22px;\n      color: #FDC918;\n      ", "\n    }\n  }\n\n  div {\n    display: flex;\n    p {\n      text-transform: capitalize;\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      img {\n        margin-right: 4px;\n        ", "\n      }\n    }\n    p.bold {\n      font-weight: bold;\n    }\n  }\n\n  @media (min-width: 481px){\n    font-size: 16px;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-left: 3px;\n        margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n          margin-left: 4px;\n          margin-right: 0px;\n       "])));
});
var BusinessName = exports.BusinessName = _styledComponents.default.h6(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  color: ", ";\n\n  ", "\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});
var Categories = exports.Categories = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.grayDark;
});
var Medadata = exports.Medadata = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  font-weight: 300;\n  font-size: 12px;\n  ", "\n  p {\n    font-size: 14px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  @media (min-width: 481px) {\n    font-size: 14px;\n  }\n"])), function (_ref6) {
  var isCustomerMode = _ref6.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    > div {\n      flex-direction: column;\n    }\n  "])));
}, function (props) {
  return props.theme.colors.grayDark;
});
var CallCenterInformation = exports.CallCenterInformation = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  div{\n    justify-content: space-evenly;\n  }\n"])));
var CallCenterInformationBullet = exports.CallCenterInformationBullet = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 2px;\n  margin-bottom: 2px;\n  border-radius: 16px;\n  background: ", ";\n  width: 50px;\n  color: #fff;\n  svg{\n    font-size: 18px;\n  }\n"])), function (_ref7) {
  var bgcolor = _ref7.bgcolor;
  return bgcolor;
});
var BusinessActions = exports.BusinessActions = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  ", "\n\n"])), function (_ref8) {
  var isStore = _ref8.isStore;
  return isStore ? (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    justify-content: flex-end;\n    display: flex;\n    align-items: center;\n    width: 50%;\n  "]))) : (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    margin-top: 10px;\n    ", "\n  "])), function (props) {
    var _props$theme4;
    return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      padding-right: 76px;\n    "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      padding-left: 76px;\n    "])));
  });
});
var BusinessAddress = exports.BusinessAddress = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ", ";\n  margin-bottom: 10px;\n"])), function (props) {
  return props.theme.colors.grayDark;
});
var GreenDataItem = exports.GreenDataItem = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 500;\n"])), function (props) {
  return props.theme.colors.green;
});
var BusinessClosed = exports.BusinessClosed = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 500;\n"])), function (props) {
  return props.theme.colors.primary;
});