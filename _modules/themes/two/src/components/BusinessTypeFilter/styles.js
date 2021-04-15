"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageContainer = exports.TypeContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TypeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  overflow-x: auto;\n  justify-content: flex-start;\n  text-align: center;\n\n  ::-webkit-scrollbar {\n      opacity: 0\n  }\n  \n  > div {\n    margin: 0 auto;   \n    > span {\n      column-gap: 10px;\n    }\n    > div {\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      width: 100%;\n    }\n  }\n\n  .category{\n    padding: 10px 7px;\n  }\n\n  ", "\n\n  @media (min-width: 480px){\n    .category{\n      padding: 10px 15px;\n      column-gap: 50px;\n    }\n  }\n"])), function (_ref) {
  var noAutoScroll = _ref.noAutoScroll;
  return noAutoScroll && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    > div {\n      flex-wrap: wrap;\n      column-gap: 20px;\n      > div {\n        width: inherit;\n      }\n    }\n  "])));
});

exports.TypeContainer = TypeContainer;

var ImageContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 120px;\n  height: 125px;\n    img{\n      width: 100%;\n      height: 100%;\n      border: 1px solid transparent;\n      padding: 4px 2px 0px 2px;\n    }\n\n  ", "\n\n  ", "\n\n  @media (max-width: 992px) {\n    width: 75px;\n    height: 80px;\n  }\n\n  @media (max-width: 576px) {\n    width: 50px;\n    height: 50px;\n  }\n"])), function (_ref2) {
  var load = _ref2.load;
  return !load && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    opacity: 0;\n  "])));
}, function (_ref3) {
  var noAutoScroll = _ref3.noAutoScroll;
  return noAutoScroll && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 70px;\n    height: 75px;\n  "])));
});

exports.ImageContainer = ImageContainer;