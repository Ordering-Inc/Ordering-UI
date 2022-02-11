"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessLogo = exports.WrapperBusinessCard = exports.Medadata = exports.ContainerCard = exports.Categories = exports.CardOverlay = exports.CallCenterInformationBullet = exports.CallCenterInformation = exports.BusinessTags = exports.BusinessStarInfo = exports.BusinessName = exports.BusinessLogoWrapper = exports.BusinessLogo = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessHero = exports.BusinessHeader = exports.BusinessContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  border-radius: 7.6px;\n  max-height: 300px;\n  height: ", ";\n  border-radius: 10px;\n  margin: 30px 20px;\n\n  width: calc(100% - 40px);\n\n  @media (min-width: 481px) {\n    max-height: 320px;\n  }\n\n  @media (min-width: 681px) {\n    width: calc(50% - 40px);\n  }\n\n  @media (min-width: 993px) {\n    width: calc(33% - 40px);\n  }\n\n  @media (min-width: 1200px) {\n    width: calc(25% - 40px);\n  }\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton ? 'auto' : '320px';
});

exports.ContainerCard = ContainerCard;

var WrapperBusinessCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 100%;\n  position: relative;\n  cursor: ", ";\n"])), function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return isSkeleton ? 'default' : 'pointer';
});

exports.WrapperBusinessCard = WrapperBusinessCard;

var BusinessHero = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n"])));

exports.BusinessHero = BusinessHero;

var BusinessHeaderStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 145px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 7.6px 7.6px 0px 0px;\n\n  h1 {\n    color: #FFF;\n    opacity: 0.7;\n  }\n\n  .closed {\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 28px;\n    line-height: 42px;\n    opacity: 1;\n    position: relative;\n    z-index: 2;\n  }\n\n  @media (min-width: 481px) {\n    min-height: 165px;\n  }\n"])));

var BusinessHeader = function BusinessHeader(props) {
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

exports.BusinessHeader = BusinessHeader;

var BusinessTags = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  justify-content: space-between;\n  align-items: center;\n  top: 0;\n  margin: 15px;\n  width: calc(100% - 35px);\n\n  span.crown {\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    color: #FFC917;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n\n  span {\n    font-size: 11px;\n    padding: 3px 8px;\n    color: #748194;\n    background: #DEE2E6;\n    border-radius: 50px;\n    margin-right: 10px;\n    ", "\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n    "])));
});

exports.BusinessTags = BusinessTags;

var BusinessContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-height: 135px;\n  padding: 0 20px 20px 20px;\n  height: calc(100% - 145px);\n\n  @media (min-width: 481px) {\n    height: calc(100% - 165px);\n  }\n"])));

exports.BusinessContent = BusinessContent;

var WrapperBusinessLogo = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  align-self: center;\n  width: 65px;\n  height: 65px;\n  min-height: 65px;\n  min-width: 65px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n\n  ", "\n\n  @media (min-width: 481px){\n    min-width: 75px;\n    min-height: 75px;\n    height: 75px;\n    width: 75px;\n  }\n"])), function (_ref3) {
  var isSkeleton = _ref3.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    width: auto;\n    height: auto;\n  "])));
});

exports.WrapperBusinessLogo = WrapperBusinessLogo;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 65px;\n  height: 65px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 65px;\n  border-radius: 7.6px;\n\n  @media (min-width: 481px){\n    width: 100%;\n    height: 100%;\n    min-height: 75px;\n  }\n"])));

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

var BusinessInfoItem = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 12px;\n\n  div {\n    display: flex;\n    p {\n      margin-right: 5px;\n      ", "\n      text-transform: capitalize;\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    p.bold {\n      font-weight: bold;\n    }\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n    "])));
});

exports.BusinessInfoItem = BusinessInfoItem;

var BusinessName = _styledComponents.default.h6(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.BusinessName = BusinessName;

var Categories = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 300;\n  color: #6C6C6C;\n\n  @media (min-width: 481px) {\n    font-size: 16px;\n  }\n"])));

exports.Categories = Categories;

var Medadata = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  display: flex;\n  font-weight: 300;\n  font-size: 12px;\n  color: #909BA9;\n  flex-wrap: wrap;\n  ", "\n  p {\n    color: #909BA9;\n    svg {\n      font-size: 7px;\n      min-width: 6px;\n      margin: 0 3px;\n    }\n\n    span {\n      margin-right: 10px;\n      ", "\n    }\n  }\n\n  @media (min-width: 481px) {\n    font-size: 14px;\n  }\n"])), function (_ref4) {
  var isCustomerMode = _ref4.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    > div {\n      flex-direction: column;\n    }\n  "])));
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});

exports.Medadata = Medadata;

var CallCenterInformation = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  div{\n    justify-content: space-evenly;\n  }\n"])));

exports.CallCenterInformation = CallCenterInformation;

var CallCenterInformationBullet = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 2px;\n  margin-bottom: 2px;\n  border-radius: 16px;\n  background: ", ";\n  width: 50px;\n  color: #fff;\n  svg{\n    font-size: 18px;\n  }\n"])), function (_ref5) {
  var bgcolor = _ref5.bgcolor;
  return bgcolor;
});

exports.CallCenterInformationBullet = CallCenterInformationBullet;

var BusinessLogoWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -20px;\n  margin-bottom: 10px;\n"])));

exports.BusinessLogoWrapper = BusinessLogoWrapper;

var BusinessStarInfo = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  .reviews {\n    display: flex;\n    align-items: center;\n    svg {\n      margin-right: 3px;\n      font-size: 22px;\n      color: #414954;\n      ", "\n    }\n    span {\n      font-size: 15px;\n      color: #414954;\n    }\n  }\n"])), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n        margin-left: 3px;\n        margin-right: 0;\n    "])));
});

exports.BusinessStarInfo = BusinessStarInfo;

var CardOverlay = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 7.6px;\n  z-index: 1;\n"])));

exports.CardOverlay = CardOverlay;