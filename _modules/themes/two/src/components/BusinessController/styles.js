"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInfoRow = exports.BusinessName = exports.BusinessContent = exports.BusinessTags = exports.BusinessHeader = exports.BusinessHero = exports.WrapperBusinessCard = exports.ContainerCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  margin: 10px;\n  width: 100%;\n  background: #fff;\n  padding: 20px;\n  box-shadow: 0px 3px 6px #00000029;\n  max-height: 400px;\n  ", "\n\n  @media (max-width: 576px) {\n    padding: 10px;\n  }\n\n  ", "\n\n  ", "\n\n  @media (min-width: 681px) {\n    ", "\n  }\n"])), function (_ref) {
  var twoColumnView = _ref.twoColumnView;
  return !twoColumnView && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    &:hover {\n      box-shadow: rgb(0 0 0 / 24%) 0px 2px 26px, rgb(0 0 0 / 8%) 0px 2px 8px;\n    }\n  "])));
}, function (_ref2) {
  var pickupView = _ref2.pickupView;
  return pickupView && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    box-shadow: none;\n    border-bottom: 1px solid ", ";\n    border-radius: initial;\n    padding: 0 0 30px 0;\n    margin-right: 20px;\n  "])), function (props) {
    return props.theme.colors.grayTextColor;
  });
}, function (_ref3) {
  var twoColumnView = _ref3.twoColumnView;
  return twoColumnView && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: 0px;\n    box-shadow: none;\n    margin: 20px 10px;\n  "])));
}, function (_ref4) {
  var twoColumnView = _ref4.twoColumnView;
  return twoColumnView && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      width: calc(50% - 20px);\n    "])));
});

exports.ContainerCard = ContainerCard;

var WrapperBusinessCard = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  cursor: ", ";\n"])), function (_ref5) {
  var isSkeleton = _ref5.isSkeleton;
  return isSkeleton ? 'default' : 'pointer';
});

exports.WrapperBusinessCard = WrapperBusinessCard;

var BusinessHero = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border-radius: 5px;\n"])));

exports.BusinessHero = BusinessHero;

var BusinessHeaderStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  min-height: 120px;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  ", "\n\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n  }\n\n  @media (min-width: 481px) {\n    min-height: 200px;\n  }\n"])), function (_ref6) {
  var twoColumnView = _ref6.twoColumnView;
  return twoColumnView && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    &:hover {\n      box-shadow: rgb(0 0 0 / 24%) 0px 2px 26px, rgb(0 0 0 / 8%) 0px 2px 8px;\n    }\n  "])));
});

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

var BusinessTags = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  justify-content: space-between;\n  align-items: center;\n  top: 0;\n  margin: 10px;\n  width: calc(100% - 35px);\n\n  span.crown {\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    color: #FFC917;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n\n  span {\n    background-color: #6C6C6C;\n    font-size: 12px;\n    color: #FFF;\n    padding: 8px;\n    border-radius: 10px;\n    margin-right: 10px;\n    ", "\n    &:last-child {\n      ", "\n    }\n  }\n\n  @media (min-width: 475px) {\n    margin: 15px;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n    "])));
});

exports.BusinessTags = BusinessTags;

var BusinessContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n"])));

exports.BusinessContent = BusinessContent;

var BusinessName = _styledComponents.default.h6(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n  margin-block-start: 0;\n  margin-block-end: 0;\n\n  @media (max-width: 576px) {\n    font-size: 18px;\n  }\n"])));

exports.BusinessName = BusinessName;

var BusinessInfoRow = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n  div {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    font-size: 18px;\n  }\n\n  span {\n    color: ", ";\n    font-size: 18px;\n  }\n\n  svg {\n    color: ", ";\n  }\n\n  @media (max-width: 576px) {\n    span {\n      font-size: 12px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayTextColor;
}, function (props) {
  return props.theme.colors.grayTextColor;
}, function (props) {
  return props.theme.colors.grayTextColor;
});

exports.BusinessInfoRow = BusinessInfoRow;