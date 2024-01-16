"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleContainer = exports.ReviewWrapper = exports.Price = exports.MultiLogosContainer = exports.Map = exports.Logo = exports.FavoriteWrapper = exports.Content = exports.Container = exports.ButtonWrapper = exports.BusinessLogoWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin: 10px 0;\n  position: relative;\n  background: white;\n  display: inline-block;\n  text-align: left;\n  transition: all 0.3s ease;\n  padding: 10px;\n  border-radius: 8px;\n\n  ", "\n\n  > span {\n    display: flex;\n  }\n\n  ", "\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 20%) 0px 8px 24px;\n  }\n\n  button.load-orders {\n    padding: 10px 30px;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  @media (min-width: 480px) {\n    min-width: 430px;\n    max-height: ", ";\n    width: 430px;\n  }\n\n  @media (min-width: 768px) {\n    margin: 10px;\n    border-radius: 16px;\n  }\n\n  @media(min-width: 993px){\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "])));
}, function (_ref) {
  var isCustomerMode = _ref.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    min-width: 300px;\n    width: 300px;\n    display: inline-block;\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    min-width: ", "px;\n    width: ", "px;\n    height: ", ";\n    max-height: ", ";\n  "])), function (_ref2) {
    var w = _ref2.w;
    return w !== null && w !== void 0 ? w : 380;
  }, function (_ref3) {
    var w = _ref3.w;
    return w !== null && w !== void 0 ? w : 380;
  }, function (_ref4) {
    var isBusinessesPage = _ref4.isBusinessesPage;
    return isBusinessesPage && '300px';
  }, function (_ref5) {
    var isBusinessesPage = _ref5.isBusinessesPage;
    return isBusinessesPage ? '300px' : '220px';
  });
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    text-align: right;\n  "])));
}, function (props) {
  return (props.nobg || props.isBusinessesPage) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: transparent;\n  "])));
}, function (props) {
  return props.flex && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "])));
}, function (_ref6) {
  var isBusinessesPage = _ref6.isBusinessesPage;
  return isBusinessesPage ? '300px' : '250px';
}, function (_ref7) {
  var isBusinessesPage = _ref7.isBusinessesPage;
  return isBusinessesPage && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin: 20px;\n      width: calc(33% - 40px);\n    "])));
});
var Content = exports.Content = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  border-radius: 16px;\n  padding: 0;\n  ", "\n\n  @media (min-width: 768px) {\n    padding: 10px;\n  }\n"])), function (_ref8) {
  var isCustomerMode = _ref8.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    align-items: center;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    align-items: flex-start;\n    flex: 1;\n  "])));
});
var Price = exports.Price = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 35%;\n  \n  ", "\n\n  h2 {\n    font-size: 16px;\n    margin-block-end: ", ";\n    margin-block-start: 0.1em;\n    font-weight: normal;\n  }\n  p {\n    margin-block-end: 0.1em;\n    margin-block-start: ", ";\n    color: #ff9300;\n    font-size: 0.8em;\n    overflow:hidden;\n    text-overflow: ellipsis;\n    margin-left: 5px;\n  }\n\n  p[name='view-cart']{\n    color: ", ";\n    cursor: pointer;\n  }\n\n  @media (min-width: 480px) {\n    ", "\n  }\n"])), function (_ref9) {
  var isCustomerMode = _ref9.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  text-align: end;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: flex-end;\n    flex-direction: column;\n    align-items: flex-end;\n  "])));
}, function (_ref10) {
  var isBusinessesPage = _ref10.isBusinessesPage;
  return isBusinessesPage ? '0.1em' : '1em';
}, function (_ref11) {
  var isBusinessesPage = _ref11.isBusinessesPage;
  return isBusinessesPage ? '0.1em' : '1em';
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref12) {
  var isCustomerMode = _ref12.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      flex-direction: row;\n      align-items: center;\n    "])));
});
var BusinessLogoWrapperStyled = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 55px;\n  min-width: 55px;\n  height: 55px;\n  min-height: 55px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n  border-radius: 7.6px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n\n  margin-right: 8px;\n  margin-left: 0px;\n\n  ", "\n\n  @media (min-width: 768px) {\n    margin-right: 0px;\n    margin-left: 8px;\n\n    ", "\n  }\n\n  @media (min-width: 576px) {\n    width: 86px;\n    min-width: 86px;\n    height: 86px;\n    min-height: 86px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-left: 8px;\n    margin-right: 0px;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-left: 0px;\n      margin-right: 8px;\n    "])));
}, function (_ref13) {
  var isMulti = _ref13.isMulti;
  return isMulti && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      width: 55px;\n      min-width: 55px;\n      height: 55px;\n      min-height: 55px;\n    "])));
});
var BusinessLogoWrapper = exports.BusinessLogoWrapper = function BusinessLogoWrapper(props) {
  var style = {};
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoWrapperStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 0px;\n  ", "\n  display: flex;\n  align-items: center;\n\n  button {\n    border-radius: 50px;\n    font-size: 10px;\n    line-height: 15px;\n    padding: 4px 8px;\n    border: 1px solid ", ";\n    margin: 5px;\n\n    &.reorder {\n      background: ", ";\n      &:hover {\n        background: ", ";\n      }\n    }\n  }\n"])), function (_ref14) {
  var isCustomerMode = _ref14.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["bottom: 4px;"]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["top: 4px;"])));
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primary;
});
var Logo = exports.Logo = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  width: 55px;\n  height: 55px;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n  border-radius: 7.6px;\n\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 7.6px;\n  }\n\n  @media (min-width: 480px){\n    width: 86px;\n    height: 86px;\n  }\n"])));
var TitleContainer = exports.TitleContainer = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));
var Map = exports.Map = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  min-height: ", ";\n  img{\n    width: 100%;\n    height: 100%;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    border-radius: ", ";\n    image-rendering: -webkit-optimize-contrast;\n    object-fit: cover;\n  }\n  @media(min-width: 480px){\n    height: ", ";\n    min-height: ", "\n  }\n"])), function (_ref15) {
  var isBusinessesPage = _ref15.isBusinessesPage;
  return isBusinessesPage ? '200px' : '88px';
}, function (_ref16) {
  var isBusinessesPage = _ref16.isBusinessesPage;
  return isBusinessesPage && '175px';
}, function (_ref17) {
  var isBusinessesPage = _ref17.isBusinessesPage;
  return isBusinessesPage && '16px';
}, function (_ref18) {
  var isBusinessesPage = _ref18.isBusinessesPage;
  return isBusinessesPage ? '200px' : '100px';
}, function (_ref19) {
  var isBusinessesPage = _ref19.isBusinessesPage;
  return isBusinessesPage && '200px';
});
var FavoriteWrapper = exports.FavoriteWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  z-index: 10;\n  align-items: center;\n  justify-content: center;\n  top: 41px;\n  right: 10px;\n  ", "\n  svg {\n    color: ", ";\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    left: 10px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.colors.danger500;
});
var ReviewWrapper = exports.ReviewWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  .review-sent {\n    border-radius: 7.6px;\n  }\n"])));
var MultiLogosContainer = exports.MultiLogosContainer = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  p {\n    white-space: nowrap;\n  }\n"])));