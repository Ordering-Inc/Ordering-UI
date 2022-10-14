"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalUpsellingContainer = exports.SkeletonContainer = exports.ProductInfo = exports.HorizontalItem = exports.HorizontalImage = exports.HorizontalDetails = exports.Divider = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SkeletonContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 15%;\n  margin: 20px;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  border-radius: 9px;\n  overflow: hidden;\n"])));

exports.SkeletonContainer = SkeletonContainer;

var VerticalUpsellingContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  max-height: 300px;\n  overflow-y: auto;\n  width: 100%;\n  margin-top: 20px;\n  padding: 20px;\n  background: rgb(244, 245, 246);\n  ", "\n"])), function (_ref) {
  var showUpselling = _ref.showUpselling;
  return !showUpselling && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: none;\n  "])));
});

exports.VerticalUpsellingContainer = VerticalUpsellingContainer;

var HorizontalItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 99%;\n  display: flex;\n  justify-content: flex-start;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n  padding-bottom: 0 !important;\n  background: #fff;\n  @media (min-width: 768px){\n    justify-content: space-between;\n  }\n"])));

exports.HorizontalItem = HorizontalItem;

var HorizontalImage = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  padding-bottom: 0 !important;\n  img {\n    min-width: 100px;\n    width: 100px;\n    height: 147px;\n  }\n\n"])));

exports.HorizontalImage = HorizontalImage;

var HorizontalDetails = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  min-width: 100px;\n  position: relative;\n  height: 147px;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  box-sizing: border-box;\n  justify-content: space-between;\n  flex: 1;\n  h3, p, span{\n    font-weight: 500;\n  }\n  h3 {\n    font-size: 14px;\n    color: ", ";\n    margin: 0;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n\n  p {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    font-size: 12px;\n  }\n\n  span {\n    font-size: 14px;\n    color: ", ";\n\n    &.discount {\n      font-size: 10px;\n      color: #909BA9;\n      ", "\n    }\n  }\n\n  svg {\n    width: 30px;\n    min-width: 30px;\n    height: 30px;\n    color: ", ";\n    cursor: pointer;\n  }\n  svg:hover {\n    opacity: 0.5;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n      "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n      "])));
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});

exports.HorizontalDetails = HorizontalDetails;

var Divider = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  height: 8px;\n  width: calc(100% + 20px);\n  margin-left: -10px;\n\n  @media (min-width: 768px) {\n    width: calc(100% + 60px);\n    margin-left: -30px;\n  }\n"])));

exports.Divider = Divider;

var ProductInfo = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  box-sizing: border-box;\n\n  p {\n    width: 100%;\n    text-overflow: ellipsis;\n    overflow-wrap: anywhere;\n  }\n"])));

exports.ProductInfo = ProductInfo;