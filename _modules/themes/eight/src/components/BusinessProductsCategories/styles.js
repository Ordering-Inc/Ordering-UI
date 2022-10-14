"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperNotFound = exports.WrapImage = exports.CategoryName = exports.CategoryImage = exports.CategoryCard = exports.CategoriesContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CategoriesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));

exports.CategoriesContainer = CategoriesContainer;

var CategoryCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  overflow: hidden;\n  padding: 20px 35px;\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px dashed ", ";\n  > svg {\n    color: ", ";\n  }\n\n  @media (min-width: 681px) {\n    justify-content: center;\n    padding: 20px;\n    margin: 30px 20px;\n    border: none;\n    border-radius: 7.6px;\n    flex-direction: column;\n    width: calc(50% - 40px);\n    background-color: ", ";\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n\n    > svg {\n      display: none;\n    }\n\n    &:hover {\n      box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px;\n    }\n  }\n\n  @media (min-width: 993px) {\n    margin: 40px;\n    width: calc(33% - 80px);\n  }\n\n  @media (min-width: 1600px) {\n    margin: 50px;\n    width: calc(25% - 100px);\n  }\n"])), function (props) {
  return props.theme.colors.grayMedium;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.third;
});

exports.CategoryCard = CategoryCard;

var WrapImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  @media (min-width: 681px) {\n    padding: 0 20px;\n    width: calc(100% - 40px);\n    ", "\n  }\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    div {\n      display: none;\n    }\n  "])));
}, function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      div {\n        display: block;\n      }\n      span {\n        display: none;\n      }\n    "])));
});

exports.WrapImage = WrapImage;

var CategoryImageStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  padding-top: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  min-width: 90px;\n  border-radius: 8px;\n"])), function (_ref3) {
  var isSkeleton = _ref3.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    span {\n      width: 100%;\n      height: 100%;\n    }\n  "])));
});

var CategoryImage = function CategoryImage(props) {
  var style = {};

  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(CategoryImageStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.CategoryImage = CategoryImage;

var CategoryName = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 500;\n  font-size: 16px;\n  flex: 1;\n  padding: 0 30px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n\n  @media (min-width: 681px) {\n    padding: 10px 0 0 0;\n    font-size: 20px;\n    text-align: center;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.secundary;
});

exports.CategoryName = CategoryName;

var WrapperNotFound = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 500px;\n  width: 100%;\n  > div{\n    height: 100%;\n  }\n"])));

exports.WrapperNotFound = WrapperNotFound;