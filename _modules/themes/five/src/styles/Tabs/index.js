"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Tabs = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;  \n  ", "\n  \n  ", "\n"])), function (_ref) {
  var variant = _ref.variant;
  return variant === 'primary' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.darkTextColor;
  });
}, function (_ref2) {
  var _theme$general, _theme$general$compon, _theme$general$compon2;
  var theme = _ref2.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general = theme.general) === null || _theme$general === void 0 ? void 0 : (_theme$general$compon = _theme$general.components) === null || _theme$general$compon === void 0 ? void 0 : (_theme$general$compon2 = _theme$general$compon.layout) === null || _theme$general$compon2 === void 0 ? void 0 : _theme$general$compon2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    @media (min-width: 768px){\n      width: initial;\n    }\n  "])));
});
exports.Tabs = Tabs;
var Tab = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 10px 15px;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref3) {
  var hover = _ref3.hover;
  return hover && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border: 1px solid transparent;\n    @keyframes hoverTab {\n      from { \n        color: ", ";\n      }\n      to { \n        color: ", ";\n      }\n    }\n    \n    &:hover{\n      animation-name: hoverTab;\n      animation-duration: 1s;\n      color: ", ";\n      ", "\n    }\n  "])), function (props) {
    return props.theme.colors.darkGray;
  }, function (_ref4) {
    var activeColor = _ref4.activeColor;
    return activeColor || '';
  }, function (_ref5) {
    var activeColor = _ref5.activeColor;
    return activeColor || '';
  }, function (_ref6) {
    var borderBottom = _ref6.borderBottom;
    return borderBottom && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        border-bottom: 1px solid ", ";\n      "])), function (_ref7) {
      var activeColor = _ref7.activeColor;
      return activeColor || '';
    });
  });
}, function (_ref8) {
  var active = _ref8.active;
  return active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    ", "\n    color: ", ";\n  "])), function (_ref9) {
    var borderBottom = _ref9.borderBottom;
    return borderBottom && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid ", ";\n    "])), function (_ref10) {
      var activeColor = _ref10.activeColor;
      return activeColor || '';
    });
  }, function (_ref11) {
    var activeColor = _ref11.activeColor;
    return activeColor || '';
  });
}, function (_ref12) {
  var active = _ref12.active;
  return !active && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.darkGray;
  });
});
exports.Tab = Tab;