"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMapMarker = exports.TextContainer = exports.Text = exports.MapMarkerImg = exports.DriverInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WrapperMapMarker = exports.WrapperMapMarker = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  background: #9D9B9B;\n  border: 3px solid #F79B16;\n  border-radius: 100%;\n  position: absolute;\n  transform: translate(-50%, -100%);\n  z-index: 1;\n\n  ", "\n\n  &:after {\n    content:'';\n    position: absolute;\n    top: 77%;\n    left: 50%;\n    margin-left: -22px;\n    width: 0;\n    height: 0;\n    border-top: solid 22px #F79B16;\n    ", "\n    border-left: solid 22px transparent;\n    border-right: solid 22px transparent;\n    z-index: 10;\n  }\n"])), function (_ref) {
  var offline = _ref.offline;
  return offline && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: 3px solid #9D9B9B;\n  "])));
}, function (_ref2) {
  var offline = _ref2.offline;
  return offline && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-top: solid 22px #9D9B9B;\n    "])));
});
var MapMarkerImgStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 100%;\n  z-index: 100;\n"])));
var MapMarkerImg = exports.MapMarkerImg = function MapMarkerImg(props) {
  return /*#__PURE__*/_react.default.createElement(MapMarkerImgStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
var DriverInfo = exports.DriverInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background: ", ";\n  position: absolute;\n  border-radius: 5px;\n  padding: 10px;\n  row-gap: 5px;\n  z-index: 200;\n  box-shadow: 0px 2px 2px #00000029;\n  display: flex;\n  flex-direction: column;\n  row-gap: 5px;\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
var TextContainer = exports.TextContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n"])));
var Text = exports.Text = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n  font-size: 14px;\n  white-space: nowrap;\n"])), function (_ref3) {
  var fontWeight = _ref3.fontWeight;
  return fontWeight && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    font-weight: 600;\n  "])));
});