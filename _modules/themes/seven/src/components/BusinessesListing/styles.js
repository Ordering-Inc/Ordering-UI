"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.SkeletonWrapper = exports.PreviousOrders = exports.PreviousButtonWrapper = exports.NotFoundButtonWrapper = exports.MapWrapper = exports.Layout = exports.ErrorMessage = exports.BusinissWrapper = exports.BusinessesTitle = exports.BusinessList = exports.BusinessContainer = exports.BannerStyled = exports.Banner = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessContainer = exports.BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
var BusinessList = exports.BusinessList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  @media(min-width: 768px){\n    max-width: 98%;\n    margin: 0 auto;\n  }\n\n  @media(min-width: 1201px){\n    max-width: 96%;\n  }\n\n"])));
var WrapperSearch = exports.WrapperSearch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n"])));
var ErrorMessage = exports.ErrorMessage = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
var PreviousOrders = exports.PreviousOrders = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n\n"])));
var BusinessesTitle = exports.BusinessesTitle = _styledComponents.default.h2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 34px;\n  color: ", ";\n  margin: 0 auto;\n  width: 100%;\n  margin: 0 20px;\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 || (_props$theme = _props$theme.colors) === null || _props$theme === void 0 ? void 0 : _props$theme.primary;
});
var PreviousButtonWrapper = exports.PreviousButtonWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 89%;\n  margin: 0 auto;\n  margin-top: 10px;\n  button{\n    width: 100%;\n\n  }\n"])));
var BannerStyled = exports.BannerStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n\n  p {\n    text-shadow: 0px 1px 1px #4d4d4d; color: #222; \n    font: 3vw;\n    text-transform: capitalize;\n  }\n\n  @media (min-width: 768px) {\n    min-height: 30vw;\n    overflow: hidden;\n  }\n\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});
var Banner = exports.Banner = function Banner(props) {
  var style = {};
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BannerStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 96%;\n  flex-direction: column;\n  margin: 0 auto;\n  span {\n    width: 100%;\n    height: 60px;\n    margin-bottom: 20px;\n    @media (min-width: 768px) {\n      height: 200px;\n    }\n  }\n"])));
var Layout = exports.Layout = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n  @media (min-width: 1024px) {\n    flex-direction: row;\n  }\n"])));
var BusinissWrapper = exports.BusinissWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  ", "\n\n  h1 {\n    font-size: 15px;\n    @media (min-width: 1024px) {\n      font-size: 18px;\n    }\n  }\n"])), function (_ref2) {
  var isPickup = _ref2.isPickup;
  return isPickup && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    @media (min-width: 1024px) {\n      width: 33.3%;\n      height: fit-content;\n      max-height: 100vh;\n      overflow-y: scroll;\n    }\n  "])));
});
var MapWrapper = exports.MapWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  /* display: none; */\n\n  ", "\n\n"])), function (_ref3) {
  var isPickup = _ref3.isPickup;
  return isPickup && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n    height: auto;\n    padding: 0;\n    box-sizing: border-box;\n    margin-bottom: 20px;\n\n    #map {\n      border-radius: 0;\n      @media (min-width: 576px) {\n        width: 94% !important;\n      }\n    }\n\n    @media (min-width: 1024px) {\n      width: 66.6%;\n      overflow: hidden;\n      ", "\n      >div {\n        height: 100%  \n      }\n    }\n  "])), function (_ref4) {
    var isSkeleton = _ref4.isSkeleton;
    return !isSkeleton && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        height: 100vh;\n      "])));
  });
});
var NotFoundButtonWrapper = exports.NotFoundButtonWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  width: fit-content;\n  button {\n    margin: 0 5px;\n  }\n"])));