"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliverytimeInput = exports.AddressInput = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var variant = _ref.variant;
  return variant === 'cart' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    span {\n      display: flex;\n      align-items: flex-end;\n      position: relative;\n      p {\n        position: absolute;\n        height: 15px;\n        width: 15px;\n        margin: 0;\n        background: ", ";\n        border-radius: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 10px;\n        ", "\n      }\n      svg {\n        color: ", ";\n        font-size: 30px;\n      }\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    var _props$theme;

    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          left: 0;\n        "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          right: 0;\n        "])));
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var variant = _ref2.variant;
  return variant === 'address' && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    width: 60%;\n  "])));
}, function (_ref3) {
  var variant = _ref3.variant;
  return variant === 'moment' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 40%;\n  "])));
});

exports.Container = Container;

var AddressInput = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  overflow: hidden;\n  border: 1px solid ", ";\n  background-color: ", ";\n\n  ", "\n  span {\n    width: 75%;\n    white-space: nowrap;\n    display: block;\n    overflow: hidden;\n    text-transform: capitalize;\n    text-overflow: ellipsis;\n  }\n  svg {\n    margin: 0 5px;\n    font-size: .9rem;\n    color: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    height: 48px;\n    font-size: 1rem;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryBackground;
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      border-left: none;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      border-right: none;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
});

exports.AddressInput = AddressInput;

var DeliverytimeInput = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  overflow: hidden;\n  border: 1px solid ", ";\n  background-color: ", ";\n  span {\n    width: 75%;\n    white-space: nowrap;\n    display: block;\n    overflow: hidden;\n    text-transform: capitalize;\n    text-overflow: ellipsis;\n  }\n  svg {\n    margin: 0 5px;\n    font-size: .86rem;\n    color: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    height: 48px;\n    font-size: 1rem;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryBackground;
}, function (props) {
  return props.theme.colors.primary;
});

exports.DeliverytimeInput = DeliverytimeInput;