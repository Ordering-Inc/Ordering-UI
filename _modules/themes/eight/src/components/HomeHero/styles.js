"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Slogan = exports.OrderTypeSelectContainer = exports.OrderTypeItem = exports.OrderTypeInfo = exports.HeroContainer = exports.ContentWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"])));

exports.HeroContainer = HeroContainer;

var ContentWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin-bottom: 40px;\n\n  @media (min-width: 768px) {\n    width: 70%;\n  }\n\n  @media (min-width: 992px) {\n    font-size: 50px;\n    margin-bottom: 80px;\n    width: 50%;\n  }\n"])));

exports.ContentWrapper = ContentWrapper;

var Title = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  color: ", ";\n  text-align: center;\n  margin: 50px auto 16px;\n\n  @media (min-width: 768px) {\n    font-size: 32px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: 40px;\n  }\n\n  @media (min-width: 1200px) {\n    font-size: 48px;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});

exports.Title = Title;

var Slogan = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 14px;  \n  text-align: center;\n  color: ", ";\n  margin: 0px;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: 18px;\n  }\n\n  @media (min-width: 1200px) {\n    font-size: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
});

exports.Slogan = Slogan;

var OrderTypeSelectContainer = _styledComponents.default.ul(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  list-style-type: none;\n  max-width: 500px;\n  padding: 0px;\n  margin: 15px auto 0;\n\n  @media (min-width: 992px) {\n    padding: 0 40px;\n  }\n"])));

exports.OrderTypeSelectContainer = OrderTypeSelectContainer;

var OrderTypeItem = _styledComponents.default.li(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  transition: all .3s ease-in-out;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  margin: 24px 0;\n  padding: 40px 20px;\n\n  &:hover {\n    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 20%);\n    transform: translateY(-1px);\n  }\n\n  img {\n    transform: scale(0.9);\n  }\n\n  @media (min-width: 768px) {\n    img {\n      transform: scale(1);\n    }\n  }\n"])));

exports.OrderTypeItem = OrderTypeItem;

var OrderTypeInfo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-left: 30px;\n  display: flex;\n  flex-direction: column;\n\n  ", "\n\n  span {\n    font-size: 16px;\n    font-weight: 700;\n    color: ", ";\n  }\n\n  p {\n    font-size: 12px;\n    margin: 6px 0 0 0;\n    color: ", ";\n  }\n\n  @media (min-width: 768px) {\n    ", "\n\n    span {\n      font-size: 18px;\n    }\n\n    p {\n      font-size: 14px;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 30px;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 30px;\n    "])));
});

exports.OrderTypeInfo = OrderTypeInfo;