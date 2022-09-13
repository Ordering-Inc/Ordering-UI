"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.NotCartsPFChangs = exports.NotCarts = exports.Container = exports.BackToMenuButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0px 10px;\n\n  div:not(:last-child) {\n    padding-bottom: 5px;\n  }\n\n  \n  ", "\n\n  @media (min-width: 769px) {\n    margin-bottom: 10px;\n    padding: 15px;\n    ", "\n  }\n"])), function (_ref) {
  var _theme$layouts, _theme$layouts$header, _theme$layouts$header2, _theme$layouts$header3, _theme$layouts$header4, _theme$layouts$header5;

  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$header = _theme$layouts.header) === null || _theme$layouts$header === void 0 ? void 0 : (_theme$layouts$header2 = _theme$layouts$header.components) === null || _theme$layouts$header2 === void 0 ? void 0 : (_theme$layouts$header3 = _theme$layouts$header2.cart) === null || _theme$layouts$header3 === void 0 ? void 0 : (_theme$layouts$header4 = _theme$layouts$header3.components) === null || _theme$layouts$header4 === void 0 ? void 0 : (_theme$layouts$header5 = _theme$layouts$header4.layout) === null || _theme$layouts$header5 === void 0 ? void 0 : _theme$layouts$header5.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 0;\n  "])));
}, function (_ref2) {
  var _theme$layouts2, _theme$layouts2$heade, _theme$layouts2$heade2, _theme$layouts2$heade3, _theme$layouts2$heade4, _theme$layouts2$heade5;

  var theme = _ref2.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$heade = _theme$layouts2.header) === null || _theme$layouts2$heade === void 0 ? void 0 : (_theme$layouts2$heade2 = _theme$layouts2$heade.components) === null || _theme$layouts2$heade2 === void 0 ? void 0 : (_theme$layouts2$heade3 = _theme$layouts2$heade2.cart) === null || _theme$layouts2$heade3 === void 0 ? void 0 : (_theme$layouts2$heade4 = _theme$layouts2$heade3.components) === null || _theme$layouts2$heade4 === void 0 ? void 0 : (_theme$layouts2$heade5 = _theme$layouts2$heade4.layout) === null || _theme$layouts2$heade5 === void 0 ? void 0 : _theme$layouts2$heade5.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      padding: 0;\n    "])));
});

exports.Container = Container;

var NotCarts = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: auto;\n\n  img {\n    width: 200px;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  h1 {\n    margin: 5px 0px 0px;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n  }\n"])));

exports.NotCarts = NotCarts;

var Title = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n  margin-bottom: 8px;\n  line-height: 30px;\n  margin-top: 0;\n  text-align: center;\n\n  @media (min-width: 576px) {\n    text-align: left;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.Title = Title;

var NotCartsPFChangs = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  h1{\n    text-transform: uppercase;\n    margin: 5px;\n    font-weight: bold;\n  }\n  h2{\n    font-size: 16px;\n  }\n  button{\n    width: 100%;\n    background: ", ";\n    height: 46px;\n    color: #000;\n  }\n"])), function (_ref3) {
  var _theme$colors;

  var theme = _ref3.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.gold;
});

exports.NotCartsPFChangs = NotCartsPFChangs;

var BackToMenuButton = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: sticky;\n  bottom: 0;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  box-shadow: rgb(0 0 0 / 10%) 0px -1px 4px 0px;\n  background: #fff;\n  cursor: pointer;\n  p {\n    text-decoration: underline;\n    color: #000;\n    cursor: pointer;\n  }\n"])));

exports.BackToMenuButton = BackToMenuButton;