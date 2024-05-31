"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessOffer = exports.ReadMoreCard = exports.Image = exports.FavoriteListing = exports.FavoriteListWrapper = exports.FavPopupView = exports.ErrorMessage = exports.Container = exports.BusinessLogo = exports.BusinessInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 35px;\n"])));
var ErrorMessage = exports.ErrorMessage = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  margin: 0px 15px;\n  color: ", ";\n  font-weight: bold;\n"])), function (props) {
  return props.theme.colors.danger500;
});
var FavoriteListWrapper = exports.FavoriteListWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  overflow: auto hidden;\n  width: 100%;\n\n  ", "\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ::-webkit-scrollbar {\n        width: 0px;\n        height: 0px;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      ::-webkit-scrollbar {\n          width: 6px;\n          height: 6px;\n      }\n  "])));
});
var FavoriteListing = exports.FavoriteListing = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  align-items: center;\n  #favorite {\n    > div {\n      width: calc(100vw - 40px);\n      min-width: calc(100vw - 40px);\n\n      @media (min-width: 681px) {\n        width: calc(50vw - 40px);\n        min-width: calc(50vw - 40px);\n      }\n      @media (min-width: 993px) {\n        width: calc(33vw - 40px);\n        min-width: calc(33vw - 40px);\n      }\n      @media (min-width: 1200px) {\n        width: calc(25vw - 40px);\n        min-width: calc(25vw - 40px);\n      }\n    }\n  }\n  ", "\n"])), function (_ref2) {
  var isOrder = _ref2.isOrder;
  return isOrder && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    #favorite {\n      > div {\n        @media (min-width: 681px) {\n          min-width: 400px;\n        }\n      }\n    }\n  "])));
});
var ReadMoreCard = exports.ReadMoreCard = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  button {\n    height: 44px;\n  }\n"])));
var FavPopupView = exports.FavPopupView = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  text-align: center;\n  h2 {\n    font-size: 16px;\n  }\n  @media(min-width: 720px){\n    h2 {\n      font-size: 20px;\n    }\n  }\n"])));
var SingleBusinessOffer = exports.SingleBusinessOffer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  button{\n      font-size: 12px;\n    }\n  @media (min-width: 720px){\n    button{\n      font-size: 16px;\n    }\n  }\n"])));
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  button{\n    height: 44px;\n  }\n  p{\n    font-size: 12px;\n    width: 50%;\n    text-align: left;\n  }\n  @media(min-width: 720px){\n    p{\n      font-size: 16px;\n      width: 70%;\n    }\n  }\n"])));
var Image = exports.Image = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  img{\n    width: 100%;\n    height: auto;\n    border-radius: 16px;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));
var BusinessLogoStyled = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 65px;\n  height: 65px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 65px;\n  border-radius: 7.6px;\n\n  @media (min-width: 481px){\n    min-width: 75px;\n    min-height: 75px;\n    height: 75px;\n    width: 75px;\n    min-height: 75px;\n    ", "\n  }\n"])), function (_ref3) {
  var isCustomerMode = _ref3.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      width: 100%;\n      height: 100%;\n    "])));
});
var BusinessLogo = exports.BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};