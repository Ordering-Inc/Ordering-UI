"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.SearchBarWrapper = exports.Image = exports.Container = exports.ButtonGroup = exports.BusinessesContainer = exports.BusinessWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 27px;\n  height: calc(100% - 130px);\n\n  > button {\n    position: sticky;\n    top: 100%;\n    height: 44px;\n  }\n"])));
var SearchBarWrapper = exports.SearchBarWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n"])));
var ButtonGroup = exports.ButtonGroup = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding-bottom: 17px;\n  border-bottom: 1px solid ", ";\n  button:first-child {\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 16px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 16px;\n    "])));
});
var BusinessesContainer = exports.BusinessesContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: calc(100% - 180px);\n  overflow: auto;\n"])));
var BusinessWrapper = exports.BusinessWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 0;\n  border-bottom: 1px solid ", ";\n\n  p {\n    margin: 0px;\n    font-size: 12px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  max-width: 40px;\n  max-height: 40px;\n  height: 40px;\n  width: 40px;\n  ", "\n  border-radius: 8px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n\n  margin: 0 10px;\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    border: 1px solid #E3E3E3;\n  "])));
});
var ImageStyled = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 8px;\n"])));
var Image = exports.Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};