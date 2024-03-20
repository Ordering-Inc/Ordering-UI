"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueOfOffer = exports.SingleOfferContainer = exports.SingleBusinessOffer = exports.SearchBarContainer = exports.PromotionsContainer = exports.PromotionTitle = exports.OfferView = exports.OfferInformation = exports.OfferInfoWrapper = exports.OfferData = exports.ExpiresAt = exports.Description = exports.Code = exports.BusinessLogo = exports.BusinessInfo = exports.AvailableBusinesses = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PromotionsContainer = exports.PromotionsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n  @media (min-width: 993px){\n    width: 60%;\n    padding: 0px;\n  }\n"])));
var PromotionTitle = exports.PromotionTitle = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-self: flex-start;\n"])));
var SingleOfferContainer = exports.SingleOfferContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 80px;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  p, h2{\n    margin: 0;\n  }\n  h2{\n    font-size: 16px;\n  }\n  p{\n    font-size: 12px;\n    font-weight: 400;\n  }\n\n  button{ \n    height: 45px;\n    font-size: 14px;\n  }\n\n  @media (min-width: 720px){\n    button{\n      font-size: 16px;\n    }\n  }\n"])));
var Description = exports.Description = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #909BA9;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2; \n  -webkit-box-orient: vertical;\n\n"])));
var ExpiresAt = exports.ExpiresAt = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: #414954;\n"])));
var OfferInfoWrapper = exports.OfferInfoWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  gap: 10px;\n  max-width: 70%;\n  align-items: center;\n"])));
var OfferInformation = exports.OfferInformation = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 50%;\n  ", "\n  h2{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n    font-size: 14px;\n  }\n  @media (min-width: 720px){\n    width: 70%;\n    h2{\n      font-size: 16px;\n    }\n  }\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    width: 100%;\n  "])));
});
var SearchBarContainer = exports.SearchBarContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  margin-bottom: 20px;\n  .search-bar {\n    justify-content: flex-start;\n    input {\n      width: 100%;\n    }\n  }\n  .clear {\n    right: 0;\n  }\n"])));
var BusinessLogoStyled = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 65px;\n  height: 65px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 65px;\n  border-radius: 7.6px;\n\n  @media (min-width: 481px){\n    min-width: 75px;\n    min-height: 75px;\n    height: 75px;\n    width: 75px;\n    min-height: 75px;\n    ", "\n  }\n"])), function (_ref2) {
  var isCustomerMode = _ref2.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      width: 100%;\n      height: 100%;\n    "])));
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
var SingleBusinessOffer = exports.SingleBusinessOffer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  button{\n      font-size: 12px;\n    }\n  @media (min-width: 720px){\n    button{\n      font-size: 16px;\n    }\n  }\n"])));
var AvailableBusinesses = exports.AvailableBusinesses = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  white-space: pre;\n  width: 80%;\n  p:nth-child(2){\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])));
var OfferData = exports.OfferData = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  p{\n    color: #909BA9;\n    margin: 3px;\n    font-size: 14px;\n  }\n"])));
var Code = exports.Code = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span{\n    color: ", ";\n    font-size: 24px;\n    margin-bottom: 20px;\n  }\n  p{\n    font-size: 16px;\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
});
var ValueOfOffer = exports.ValueOfOffer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  p{\n    font-size: 16px;\n  }\n  span{\n    font-size: 20px;\n  }\n"])));
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  button{\n    height: 44px;\n  }\n  p{\n    font-size: 12px;\n    width: 50%;\n    text-align: left;\n  }\n  @media(min-width: 720px){\n    p{\n      font-size: 16px;\n      width: 70%;\n    }\n  }\n"])));
var OfferView = exports.OfferView = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  text-align: center;\n  h2 {\n    font-size: 16px;\n  }\n  @media(min-width: 720px){\n    h2 {\n      font-size: 20px;\n    }\n  }\n"])));