"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tabs = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;  \n  \n  ", "\n\n  ", "\n"])), function (_ref) {
  var variant = _ref.variant;
  return variant === 'primary' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.darkTextColor;
  });
}, function (_ref2) {
  var vertical = _ref2.vertical;
  return vertical ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        flex-direction: column;\n        align-items: flex-start;\n      "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      flex-direction: row;\n      width: 100%;\n\n      @media (min-width: 1024px) {\n        max-width: 1200px;\n        margin: 0 auto;\n      }\n\n      @media (min-width: 1405px) {\n        max-width: 1420px;\n      }\n    "])));
});

exports.Tabs = Tabs;

var Tab = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  ", "\n\n  ", "\n"])), function (_ref3) {
  var vertical = _ref3.vertical;
  return vertical ? '10px 0' : '10px 15px';
}, function (_ref4) {
  var active = _ref4.active;
  return active && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    ", "\n  "])), function (_ref5) {
    var borderBottom = _ref5.borderBottom;
    return borderBottom && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      border-bottom: 2px solid ", ";\n    "])), function (props) {
      return props.theme.colors.primary;
    });
  });
}, function (_ref6) {
  var active = _ref6.active;
  return !active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.disabled;
  });
});

exports.Tab = Tab;