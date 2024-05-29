"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeTitle = exports.OrderTypeSelectorContainer = exports.OrderTypeOverlay = exports.OrderTypeListTitle = exports.OrderTypeListItemContainerStyled = exports.OrderTypeListItemContainer = exports.OrderTypeDescription = exports.OrderStartWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var OrderTypeSelectorContainer = exports.OrderTypeSelectorContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var OrderTypeListItemContainerStyled = exports.OrderTypeListItemContainerStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  margin-bottom: 25px;\n  padding: 30px;\n  cursor: pointer;\n  position: relative;\n  opacity: 0.3;\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    opacity: 1;\n  "])));
});
var OrderTypeListItemContainer = exports.OrderTypeListItemContainer = function OrderTypeListItemContainer(props) {
  var style = {};
  style.backgroundImage = "url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(OrderTypeListItemContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var OrderTypeOverlay = exports.OrderTypeOverlay = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  border-radius: 7.6px;\n  background: #000000;\n  opacity: 0.3;\n  z-index: initial;\n"])));
var OrderTypeTitle = exports.OrderTypeTitle = _styledComponents.default.h2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 16px;\n  color: #FFFFFF;\n  margin-top: 0;\n  margin-bottom: 5px;\n  z-index: 2;\n  position: relative;\n"])));
var OrderTypeDescription = exports.OrderTypeDescription = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: #FFFFFF;\n  margin-top: 0;\n  margin-bottom: 17px;\n  z-index: 2;\n  position: relative;\n"])));
var OrderStartWrapper = exports.OrderStartWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  z-index: 2;\n  position: relative;\n\n  span {\n    font-size: 14px;\n    color: #FFFFFF;\n    color: #FFFFFF;\n    ", "\n  }\n\n  svg {\n    font-size: 16px;\n    color: #FFFFFF;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});
var OrderTypeListTitle = exports.OrderTypeListTitle = _styledComponents.default.h1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 24px;\n  color: ", ";\n  margin: 0 0 30px;\n\n  @media (max-width: 450px) {\n    padding-left: 30px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      padding-right: 30px;\n      padding-left: 0;\n    "])));
});