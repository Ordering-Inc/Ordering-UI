"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectImage = exports.Header = exports.Chevron = exports.Select = exports.Selected = exports.Options = exports.Option = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-left: 15px;\n  padding-right: 15px;\n  min-width: 100px;\n  color: #333;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 100;\n  &:hover {\n    background-color: ", ";\n  }\n  ", "\n  svg {\n    vertical-align: text-top;\n  }\n  ", "\n"])), (0, _polished.darken)(0.03, '#E8F0ED'), function (props) {
  return props.selected && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    &:hover {\n      background-color: ", ";\n    }\n  "])), (0, _polished.darken)(0.05, '#E8F0ED'), (0, _polished.darken)(0.03, '#E8F0ED'));
}, function (_ref) {
  var withIcons = _ref.withIcons;
  return withIcons && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      svg {\n        margin-right: 3px;\n        ", "\n      }\n  "])), function (props) {
    var _props$theme;

    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          margin-left: 3px;\n          margin-right: 0px;\n       "])));
  });
});

exports.Option = Option;

var Options = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: #fff;\n  margin-top: 7px;\n  z-index: 10000;\n  border-top: 1px solid ", ";\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  overflow: hidden;\n\n  ", "\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (_ref2) {
  var position = _ref2.position;
  return (position === null || position === void 0 ? void 0 : position.toLowerCase()) === 'left' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    left: 0;\n    margin-left: -1px;\n  "])));
}, function (_ref3) {
  var position = _ref3.position;
  return (position === null || position === void 0 ? void 0 : position.toLowerCase()) === 'right' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    right: 0;\n    margin-right: -1px;\n    ", "\n  "])), function (props) {
    var _props$theme2;

    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-left: -1px;\n        margin-right: 0px;\n        left: 0;\n        right: initial;\n    "])));
  });
}, function (_ref4) {
  var fullwidth = _ref4.fullwidth;
  return fullwidth && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    width: 100%;    \n  "])));
});

exports.Options = Options;

var Selected = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 11;\n  @media (min-width: 381px) {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  ", "\n"])), function (_ref5) {
  var fullwidth = _ref5.fullwidth;
  return fullwidth && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    width: 100%;\n    box-sizing: border-box;\n    justify-content: space-between;\n  "])));
});

exports.Selected = Selected;

var Select = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: inline-block;\n  height: 34px;\n  line-height: 34px;\n  color: #000000;  \n  background-color: transparent;\n  position: relative;\n  text-transform: uppercase;\n  font-weight: bold;\n  ", " \n  \n  ", " \n"])), function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
}, function (_ref6) {
  var fullwidth = _ref6.fullwidth;
  return fullwidth && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    width: 100%;\n    border: 1px solid ", ";\n    border-radius: 7px;\n    @media (min-width: 768px) {\n      height: 40px;\n      line-height: 40px;\n    }\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.Select = Select;

var Chevron = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n  ", "\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0;\n    "])));
});

exports.Chevron = Chevron;

var Header = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  flex: 1;\n  svg {\n    font-size: 18px;\n  }\n"])));

exports.Header = Header;

var SelectImage = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 28px;\n  height: 28px;\n  border-radius: 1000px;\n  margin-left: 5px;\n  overflow: hidden;\n  ", "\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n  "])));
});

exports.SelectImage = SelectImage;