"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #CCC;\n  line-height: 30px;\n  padding: 0 20px;\n  font-size: 16px;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 125px;\n  color: ", ";\n  font-size: 14px;\n  &:active {\n    background: ", ";\n  }\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), function (_ref) {
  var color = _ref.color;
  return color || '#FFF';
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref2) {
  var bgtransparent = _ref2.bgtransparent;
  return bgtransparent && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background: transparent !important;\n  "])));
}, function (_ref3) {
  var initialIcon = _ref3.initialIcon;
  return initialIcon && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    text-align: left;\n    ", "\n    img{\n      vertical-align: middle;\n    }\n    span {\n      padding-left: 15%\n      ", "\n    }\n  "])), function (props) {
    var _props$theme;

    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
  }, function (props) {
    var _props$theme2;

    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding-right: 15%;\n        padding-left: 0\n    "])));
  });
}, function (_ref4) {
  var outline = _ref4.outline;
  return outline && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      background: transparent;\n      color: ", ";\n      border-color: ", ";\n      text-align: center;\n      &:active {\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.secundaryContrast;
  });
}, function (_ref5) {
  var color = _ref5.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    ", "\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.primary);
  }, function (_ref6) {
    var outline = _ref6.outline;
    return outline && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: #FFF;\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primary);
    });
  });
});

exports.Button = Button;