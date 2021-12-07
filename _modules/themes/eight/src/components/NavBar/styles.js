"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarTitle = exports.NavBarContainer = exports.BackButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavBarContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #E9ECEF;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  padding: 0 1%;\n  position: relative;\n\n  @media (min-width: 768px) {\n    padding: 0 5%;\n  }\n\n  @media (min-width: 992px) {\n    padding: 0 10%;\n  }\n"])));

exports.NavBarContainer = NavBarContainer;

var BackButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  outline: none;\n  background: transparent;\n  border: none;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  padding: 0px;\n\n  svg {\n    color: ", ";\n    font-size: 16px;\n  }\n\n  span {\n    font-size: 12px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: 7px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 7px;\n    "])));
});

exports.BackButton = BackButton;

var NavBarTitle = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: center;\n  font-size: 14px;\n  padding: 18px 5px;\n  color: ", ";\n  max-width: calc(100% - 160px);\n  margin: auto;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
});

exports.NavBarTitle = NavBarTitle;