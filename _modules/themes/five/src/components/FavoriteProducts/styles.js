"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductCard = exports.ErrorMessage = exports.Container = exports.BusinessListWrapper = exports.ArrowButtonWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 35px;\n"])));

exports.Container = Container;

var ErrorMessage = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  margin: 0px 15px;\n  color: ", ";\n  font-weight: bold;\n"])), function (props) {
  return props.theme.colors.danger500;
});

exports.ErrorMessage = ErrorMessage;

var BusinessListWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n\n  .swiper-businesses {\n    padding: 5px 0px;\n    .swiper-slide {\n      height: auto;\n      > div {\n        width: 100% !important;\n        margin: 0px !important;\n        height: 100%;\n        cursor: default;\n      }\n    }\n  }\n"])));

exports.BusinessListWrapper = BusinessListWrapper;

var ArrowButtonWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  transition: all 0.3s ease-out;\n\n  &::after {\n    display: none;\n  }\n  > svg {\n    background: ", ";\n    display: inline-block;\n    border-radius: 50%;\n    width: 25px;\n    min-width: 25px;\n    height: 25px;\n    align-self: center;\n    color: ", ";\n    opacity: 0.8;\n  }\n  &.swiper-button-next {\n    right: 10px;\n    ", "\n  }\n  &.swiper-button-prev {\n    left: 10px;\n    ", "\n  }\n  &.swiper-button-disabled {\n    display: none;\n  }\n  &:hover {\n    transform: scale(1.07);\n  }\n  ", "\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.gray200;
}, function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      left: 10px;\n      right: initial;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      right: 10px;\n      left: initial;\n    "])));
}, function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    svg {\n      display: none;\n    }\n  "])));
});

exports.ArrowButtonWrapper = ArrowButtonWrapper;

var ProductCard = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  button {\n    height: 44px;\n  }\n"])));

exports.ProductCard = ProductCard;