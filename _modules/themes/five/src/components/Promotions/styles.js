"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueOfOffer = exports.SingleOfferContainer = exports.SingleBusinessOffer = exports.SearchBarContainer = exports.PromotionsContainer = exports.PromotionTitle = exports.OfferView = exports.OfferInformation = exports.OfferData = exports.ExpiresAt = exports.Description = exports.Code = exports.BusinessLogo = exports.BusinessInfo = exports.AvailableBusinesses = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PromotionsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n  @media (min-width: 993px){\n    width: 60%;\n    padding: 0px;\n  }\n"])));

exports.PromotionsContainer = PromotionsContainer;

var PromotionTitle = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-self: flex-start;\n"])));

exports.PromotionTitle = PromotionTitle;

var SingleOfferContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 80px;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  p, h2{\n    margin: 0;\n  }\n  h2{\n    font-size: 16px;\n  }\n  p{\n    font-size: 12px;\n    font-weight: 400;\n  }\n\n  button{ \n    height: 45px;\n    font-size: 14px;\n  }\n\n  @media (min-width: 720px){\n    button{\n      font-size: 16px;\n    }\n  }\n"])));

exports.SingleOfferContainer = SingleOfferContainer;

var Description = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #909BA9;\n"])));

exports.Description = Description;

var ExpiresAt = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: #414954;\n"])));

exports.ExpiresAt = ExpiresAt;

var OfferInformation = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 70%;\n  ", "\n  h2{\n    font-size: 14px;\n  }\n  @media (min-width: 720px){\n    width: 80%;\n    h2{\n      font-size: 16px;\n    }\n  }\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 100%;\n  "])));
});

exports.OfferInformation = OfferInformation;

var SearchBarContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-start;\n  margin-bottom: 20px;\n  .search-bar {\n    justify-content: flex-start;\n    input {\n      width: 100%;\n    }\n  }\n  .clear {\n    right: 0;\n  }\n"])));

exports.SearchBarContainer = SearchBarContainer;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 65px;\n  height: 65px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 65px;\n  border-radius: 7.6px;\n\n  @media (min-width: 481px){\n    min-width: 75px;\n    min-height: 75px;\n    height: 75px;\n    width: 75px;\n    min-height: 75px;\n    ", "\n  }\n"])), function (_ref2) {
  var isCustomerMode = _ref2.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      width: 100%;\n      height: 100%;\n    "])));
});

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

var SingleBusinessOffer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  button{\n      font-size: 12px;\n    }\n  @media (min-width: 720px){\n    button{\n      font-size: 16px;\n    }\n  }\n"])));

exports.SingleBusinessOffer = SingleBusinessOffer;

var AvailableBusinesses = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  white-space: pre;\n  width: 80%;\n  p:nth-child(2){\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])));

exports.AvailableBusinesses = AvailableBusinesses;

var OfferData = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  p{\n    color: #909BA9;\n    margin: 3px;\n    font-size: 14px;\n  }\n"])));

exports.OfferData = OfferData;

var Code = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span{\n    color: ", ";\n    font-size: 24px;\n    margin-bottom: 20px;\n  }\n  p{\n    font-size: 16px;\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
});

exports.Code = Code;

var ValueOfOffer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  p{\n    font-size: 16px;\n  }\n  span{\n    font-size: 20px;\n  }\n"])));

exports.ValueOfOffer = ValueOfOffer;

var BusinessInfo = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  button{\n    height: 44px;\n  }\n  p{\n    font-size: 12px;\n    width: 50%;\n    text-align: left;\n  }\n  @media(min-width: 720px){\n    p{\n      font-size: 16px;\n      width: 70%;\n    }\n  }\n"])));

exports.BusinessInfo = BusinessInfo;

var OfferView = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  text-align: center;\n  h2 {\n    font-size: 16px;\n  }\n  @media(min-width: 720px){\n    h2 {\n      font-size: 20px;\n    }\n  }\n"])));

exports.OfferView = OfferView;