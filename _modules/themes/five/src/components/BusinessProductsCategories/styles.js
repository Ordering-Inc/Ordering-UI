"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CategoriesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-x: auto;\n  padding: 5px 0px 0px 0px;\n  background: ", ";\n  z-index: 1002;\n  position: absolute;\n  top: 0;\n  border-bottom: 1px solid #D9D9D9;\n  text-align: center;\n  width: ", ";\n\n  div.category {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    padding: 10px 0px;\n    margin: 0 15px;\n    &:nth-of-type(1) {\n      margin-left: 0;\n      ", "\n    }\n  }\n\n  div.special {\n    ", "\n  }\n\n  /* @media (min-width: 381px) {\n    padding: 15px 0px 0px 0px;\n  } */\n  @media (min-width: 769px) {\n    ", "\n  }\n  @media (min-width: 992px) {\n    width: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.w || '100%';
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n        margin-right: 15px;\n      "])));
}, function (props) {
  return !props.featured && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      display: none\n    "])));
}, function (_ref) {
  var isProfessional = _ref.isProfessional;
  return isProfessional && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      width: 100%;\n    "])));
}, function (props) {
  var _props$w;

  return (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : 'auto';
});

exports.CategoriesContainer = CategoriesContainer;