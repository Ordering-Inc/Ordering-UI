"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Tabs = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  ", "\n\n  ", "\n"])), function (_ref) {
  var variant = _ref.variant;
  return variant === 'primary' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.darkTextColor;
  });
}, function (_ref2) {
  var _theme$general, _theme$general$compon, _theme$general$compon2;
  var theme = _ref2.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general = theme.general) === null || _theme$general === void 0 ? void 0 : (_theme$general$compon = _theme$general.components) === null || _theme$general$compon === void 0 ? void 0 : (_theme$general$compon2 = _theme$general$compon.layout) === null || _theme$general$compon2 === void 0 ? void 0 : _theme$general$compon2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n\n    ", "\n  "])), function (_ref3) {
    var initialWidth = _ref3.initialWidth;
    return initialWidth && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      @media (min-width: 768px){\n        width: initial;\n      }\n    "])));
  });
});
exports.Tabs = Tabs;
var Tab = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 10px 15px;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 16px;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref4) {
  var hover = _ref4.hover;
  return hover && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    border: 1px solid transparent;\n    @keyframes hoverTab {\n      from {\n        color: ", ";\n      }\n      to {\n        color: ", ";\n      }\n    }\n\n    &:hover{\n      animation-name: hoverTab;\n      animation-duration: 1s;\n      color: ", ";\n      ", "\n    }\n  "])), function (props) {
    var _props$theme, _props$theme$colors;
    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$colors = _props$theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.tertiary) || props.theme.colors.darkGray;
  }, function (_ref5) {
    var activeColor = _ref5.activeColor;
    return activeColor || '';
  }, function (_ref6) {
    var activeColor = _ref6.activeColor;
    return activeColor || '';
  }, function (_ref7) {
    var borderBottom = _ref7.borderBottom;
    return borderBottom && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        border-bottom: 1px solid ", ";\n      "])), function (_ref8) {
      var activeColor = _ref8.activeColor;
      return activeColor || '';
    });
  });
}, function (_ref9) {
  var active = _ref9.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    ", "\n    color: ", ";\n  "])), function (_ref10) {
    var borderBottom = _ref10.borderBottom;
    return borderBottom && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid ", ";\n    "])), function (_ref11) {
      var activeColor = _ref11.activeColor;
      return activeColor || '';
    });
  }, function (_ref12) {
    var activeColor = _ref12.activeColor;
    return activeColor || '';
  });
}, function (_ref13) {
  var active = _ref13.active,
    fromLogin = _ref13.fromLogin;
  return !active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    var _props$theme2, _props$theme2$colors;
    return fromLogin ? '#909BA9' : ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : (_props$theme2$colors = _props$theme2.colors) === null || _props$theme2$colors === void 0 ? void 0 : _props$theme2$colors.tertiary) || props.theme.colors.darkGray;
  });
});
exports.Tab = Tab;