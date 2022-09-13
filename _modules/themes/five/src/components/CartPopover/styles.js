"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleContainer = exports.Title = exports.PopoverBody = exports.PopoverArrow = exports.HeaderItem = exports.CartLength = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  > span {\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    background: ", ";\n    color: #FFFFFF;\n    border-radius: 7.6px;\n\n    span {\n      margin: 0;\n      font-size: 14px;\n      ", " \n    }\n    svg {\n      font-size: 16px;\n    }\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "])));
}, function (_ref) {
  var _theme$layouts, _theme$layouts$header, _theme$layouts$header2, _theme$layouts$header3, _theme$layouts$header4, _theme$layouts$header5;

  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$header = _theme$layouts.header) === null || _theme$layouts$header === void 0 ? void 0 : (_theme$layouts$header2 = _theme$layouts$header.components) === null || _theme$layouts$header2 === void 0 ? void 0 : (_theme$layouts$header3 = _theme$layouts$header2.cart) === null || _theme$layouts$header3 === void 0 ? void 0 : (_theme$layouts$header4 = _theme$layouts$header3.components) === null || _theme$layouts$header4 === void 0 ? void 0 : (_theme$layouts$header5 = _theme$layouts$header4.layout) === null || _theme$layouts$header5 === void 0 ? void 0 : _theme$layouts$header5.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    button {\n      margin-left: 20px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      img {\n        position: relative;\n        margin-left: ", ";\n        top: -2px;\n      }\n    }\n  "])), function (_ref2) {
    var isHideCartText = _ref2.isHideCartText;
    return isHideCartText ? '0px' : '7px';
  });
});

exports.HeaderItem = HeaderItem;

var PopoverBody = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  color: #333;\n  padding: 15px;\n  border-radius: 10px;\n  max-width: 500px;\n  z-index: 1001;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n"])));

exports.PopoverBody = PopoverBody;

var PopoverArrow = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));

exports.PopoverArrow = PopoverArrow;

var Title = _styledComponents.default.h1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n  margin-bottom: 8px;\n  line-height: 30px;\n  margin-top: 0;\n  text-align: center;\n\n  @media (min-width: 576px) {\n    text-align: left;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.Title = Title;

var TitleContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  button {\n    display: flex;\n    align-items: center;\n    border-radius: 16px;\n    svg{\n      margin-right: 5px;\n    }\n  }\n\n  ", "\n"])), function (_ref3) {
  var _theme$layouts2, _theme$layouts2$heade, _theme$layouts2$heade2, _theme$layouts2$heade3, _theme$layouts2$heade4, _theme$layouts2$heade5;

  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$heade = _theme$layouts2.header) === null || _theme$layouts2$heade === void 0 ? void 0 : (_theme$layouts2$heade2 = _theme$layouts2$heade.components) === null || _theme$layouts2$heade2 === void 0 ? void 0 : (_theme$layouts2$heade3 = _theme$layouts2$heade2.cart) === null || _theme$layouts2$heade3 === void 0 ? void 0 : (_theme$layouts2$heade4 = _theme$layouts2$heade3.components) === null || _theme$layouts2$heade4 === void 0 ? void 0 : (_theme$layouts2$heade5 = _theme$layouts2$heade4.layout) === null || _theme$layouts2$heade5 === void 0 ? void 0 : _theme$layouts2$heade5.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    justify-content: flex-end;\n    margin: 20px 20px 0 0;\n    svg{ \n      width: 24px;\n      height: 24px;\n      cursor: pointer;\n    }\n  "])));
});

exports.TitleContainer = TitleContainer;

var CartLength = _styledComponents.default.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  color: #000;\n  background: #fff;\n  border-radius: 50%;\n  margin-left: 5px;\n  width: 20px;\n  height: 20px;\n  p{\n    margin: 0;\n    position: relative;\n    font-size: 12px;\n    bottom: 3px;\n  }\n"])));

exports.CartLength = CartLength;