"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.SkeletonWrapper = exports.PreviousOrders = exports.PreviousButtonWrapper = exports.NotFoundButtonWrapper = exports.MapWrapper = exports.Layout = exports.ErrorMessage = exports.BusinissWrapper = exports.BusinessesTitle = exports.BusinessList = exports.BusinessContainer = exports.BannerStyled = exports.Banner = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));

exports.BusinessContainer = BusinessContainer;

var BusinessList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  @media(min-width: 768px){\n    max-width: 98%;\n    margin: 0 auto;\n  }\n\n  @media(min-width: 1201px){\n    max-width: 96%;\n  }\n\n"])));

exports.BusinessList = BusinessList;

var WrapperSearch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n"])));

exports.WrapperSearch = WrapperSearch;

var ErrorMessage = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));

exports.ErrorMessage = ErrorMessage;

var PreviousOrders = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n\n"])));

exports.PreviousOrders = PreviousOrders;

var BusinessesTitle = _styledComponents.default.h2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 34px;\n  color: ", ";\n  margin: 0 auto;\n  width: 100%;\n  margin: 0 20px;\n"])), function (props) {
  var _props$theme, _props$theme$colors;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$colors = _props$theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.primary;
});

exports.BusinessesTitle = BusinessesTitle;

var PreviousButtonWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 89%;\n  margin: 0 auto;\n  margin-top: 10px;\n  button{\n    width: 100%;\n\n  }\n"])));

exports.PreviousButtonWrapper = PreviousButtonWrapper;

var BannerStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n\n  p {\n    text-shadow: 0px 1px 1px #4d4d4d; color: #222; \n    font: 3vw;\n    text-transform: capitalize;\n  }\n\n  @media (min-width: 768px) {\n    min-height: 30vw;\n    overflow: hidden;\n  }\n\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});

exports.BannerStyled = BannerStyled;

var Banner = function Banner(props) {
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

exports.Banner = Banner;

var SkeletonWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 96%;\n  flex-direction: column;\n  margin: 0 auto;\n  span {\n    width: 100%;\n    height: 60px;\n    margin-bottom: 20px;\n    @media (min-width: 768px) {\n      height: 200px;\n    }\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;

var Layout = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n  @media (min-width: 1024px) {\n    flex-direction: row;\n  }\n"])));

exports.Layout = Layout;

var BusinissWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  ", "\n\n  h1 {\n    font-size: 15px;\n    @media (min-width: 1024px) {\n      font-size: 18px;\n    }\n  }\n"])), function (_ref2) {
  var isPickup = _ref2.isPickup;
  return isPickup && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    @media (min-width: 1024px) {\n      width: 33.3%;\n      height: fit-content;\n      max-height: 100vh;\n      overflow-y: scroll;\n    }\n  "])));
});

exports.BusinissWrapper = BusinissWrapper;

var MapWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  /* display: none; */\n\n  ", "\n\n"])), function (_ref3) {
  var isPickup = _ref3.isPickup;
  return isPickup && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    display: block;\n    width: 100%;\n    height: auto;\n    padding: 0;\n    box-sizing: border-box;\n    margin-bottom: 20px;\n\n    #map {\n      border-radius: 0;\n      @media (min-width: 576px) {\n        width: 94% !important;\n      }\n    }\n\n    @media (min-width: 1024px) {\n      width: 66.6%;\n      overflow: hidden;\n      ", "\n      >div {\n        height: 100%  \n      }\n    }\n  "])), function (_ref4) {
    var isSkeleton = _ref4.isSkeleton;
    return !isSkeleton && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        height: 100vh;\n      "])));
  });
});

exports.MapWrapper = MapWrapper;

var NotFoundButtonWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  width: fit-content;\n  button {\n    margin: 0 5px;\n  }\n"])));

exports.NotFoundButtonWrapper = NotFoundButtonWrapper;