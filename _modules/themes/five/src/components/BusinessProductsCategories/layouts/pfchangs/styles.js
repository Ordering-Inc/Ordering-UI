"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Diviver = exports.CategoryPFChangs = exports.CategoriesWrapper = exports.CategoriesContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CategoriesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-x: auto;\n  padding: 5px 0px 0px 0px;\n  background: ", ";\n  z-index: 100;\n  position: sticky;\n  top: 0;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: ", ", Arial, Helvetica;\n  ", "\n  width: ", ";\n  position: relative;\n  ", "\n  div.special {\n    ", "\n  }\n  &.category-lists{\n    display: flex;\n    justify-content: center;\n    width: 102%;\n  }\n  @media (min-width: 381px) {\n    padding: 15px 0px 0px 0px;\n  }\n  @media (min-width: 992px) {\n    width: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (_ref) {
  var _theme$fonts, _theme$fonts$special;
  var theme = _ref.theme;
  return (_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : (_theme$fonts$special = _theme$fonts.special) === null || _theme$fonts$special === void 0 ? void 0 : _theme$fonts$special.name;
}, function (_ref2) {
  var subcategoriesLayout = _ref2.subcategoriesLayout;
  return subcategoriesLayout ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-bottom: ", ";\n    "])), function (_ref3) {
    var subcategoriesLayout = _ref3.subcategoriesLayout;
    return subcategoriesLayout ? 'none' : '1px solid #D9D9D9';
  }) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    justify-content: center;\n  "])));
}, function (props) {
  var _props$w;
  return (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : '100%';
}, function (_ref4) {
  var pfchangs = _ref4.pfchangs;
  return !pfchangs && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  div.category {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    padding: 10px 0px;\n    margin: 0 15px;\n    color: #000;\n    &:nth-of-type(1) {\n      margin-left: 0;\n      ", "\n    }\n  "])), function (props) {
    return props.theme.rtl && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n        margin-right: 15px;\n      "])));
  });
}, function (props) {
  return !props.featured && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: none\n    "])));
}, function (props) {
  var _props$w2;
  return (_props$w2 = props.w) !== null && _props$w2 !== void 0 ? _props$w2 : 'auto';
});
exports.CategoriesContainer = CategoriesContainer;
var CategoryPFChangs = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  ", "\n  &:hover {\n    ", "\n  }\n"])), function (_ref5) {
  var active = _ref5.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    span {\n      background: ", ";\n      margin: 0 40px;\n      height: 4px;\n      margin-bottom: 10px;\n    }\n  "])), function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.primary;
  });
}, function (_ref7) {
  var hover = _ref7.hover;
  return hover && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      span {\n          background: ", ";\n          margin: 0 40px;\n          height: 4px;\n          margin-bottom: 10px;\n        }\n    "])), function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.primary;
  });
});
exports.CategoryPFChangs = CategoryPFChangs;
var CategoriesWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  ", "\n"])), function (_ref9) {
  var hide = _ref9.hide;
  return hide && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    display: none;\n  "])));
});
exports.CategoriesWrapper = CategoriesWrapper;
var Diviver = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  height: 1px;\n  background: #fff;\n  width: calc(100% + 40px);\n  z-index: 1;\n  left: -20px;\n"])));
exports.Diviver = Diviver;