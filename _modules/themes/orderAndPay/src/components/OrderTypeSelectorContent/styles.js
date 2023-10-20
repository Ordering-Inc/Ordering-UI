"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeContainer = exports.TitleContainer = exports.Table = exports.PlaceNumber = exports.PlaceName = exports.OrderTypeWrapper = exports.OrderTypeTitle = exports.OrderTypeSelectorContainer = exports.OrderTypeListTitle = exports.OrderTypeListItemContainerStyled = exports.OrderTypeListItemContainer = exports.OrderTypeDescription = exports.OrderStartWrapper = exports.ModalIcon = exports.LogoutButtonContainer = exports.Logo = exports.InputWrapper = exports.IconsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderTypeSelectorContainer = exports.OrderTypeSelectorContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  text-align: left;\n  padding-top: 10px;\n  padding: 30px 40px;\n  box-sizing: border-box;\n"])));
var OrderTypeListItemContainerStyled = exports.OrderTypeListItemContainerStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  margin-bottom: 25px;\n  background: rgba(0,0,0,0.2);\n  cursor: pointer;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    opacity: 0.6;\n  "])));
});
var OrderTypeListItemContainer = exports.OrderTypeListItemContainer = function OrderTypeListItemContainer(props) {
  var style = {};
  style.backgroundImage = "url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(OrderTypeListItemContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var OrderTypeWrapper = exports.OrderTypeWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  background: rgba(0,0,0,0.5);\n"])));
var OrderTypeTitle = exports.OrderTypeTitle = _styledComponents.default.h2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 12px;\n  color: #FFFFFF;\n  margin-top: 0;\n  margin-bottom: 5px;\n  padding: 0px 40px;\n  padding-top: 20px;\n"])));
var OrderTypeDescription = exports.OrderTypeDescription = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 10px;\n  color: #FFFFFF;\n  margin-top: 0;\n  margin-bottom: 20px;\n  padding: 0px 40px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
var OrderStartWrapper = exports.OrderStartWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  padding-bottom: 20px;\n  padding-left: 40px;\n  padding-right: 40px;\n\n  span {\n    color: #FFFFFF;\n    font-size: 10px;\n    ", "\n  }\n\n  svg {\n    font-size: 16px;\n    color: #FFFFFF;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});
var OrderTypeListTitle = exports.OrderTypeListTitle = _styledComponents.default.h1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  color: ", ";\n  text-align: left;\n  margin: 0\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var Logo = exports.Logo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 72px;\n  height: 72px;\n  margin-bottom: 20px;\n  img {\n    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n    border-radius: 7.6px;\n    width: 100%;\n    box-shadow: 0px 1px 4px 0px #0000001A;\n  }\n"])));
var TypeContainer = exports.TypeContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding: 10px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  button: {\n    width: 100%;\n    border-radius: 7.6px;\n    height: 44px;\n  }\n  h1{\n    font-weight: 600;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    color: ", ";\n    margin-bottom: 25px;\n  }\n  label{\n    font-size: 12px;\n    margin-bottom: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var ModalIcon = exports.ModalIcon = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n\n"])));
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  input{\n    width: 100%;\n    border-radius: 7.6px;\n    border: 1px solid #DEE2E6;\n  }\n"])));
var Table = exports.Table = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n display: flex;\n flex-direction: column;\n h2{\n   font-weight: 500;\n   font-size: 16px;\n   display: flex;\n   align-items: center;\n   color: ", ";\n   margin-bottom: 20px;\n }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var PlaceName = exports.PlaceName = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ", ";\n  font-weight: 400;\n  border-bottom: 1px solid #E9ECEF;\n  margin-bottom: 10px;\n  p{\n    font-size: 10px;\n    color: ", ";\n  }\n  span{\n    font-size: 12px;\n    color: #909BA9;\n  }\n"])), function (_ref3) {
  var isDisabled = _ref3.isDisabled;
  return isDisabled ? 0.5 : 1;
}, function (props) {
  return props.theme.colors.darkTextColor;
});
var PlaceNumber = exports.PlaceNumber = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n\n"])));
var TitleContainer = exports.TitleContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n"])));
var LogoutButtonContainer = exports.LogoutButtonContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: relative;\n  top: 3px;\n  margin-left: 10px\n"])));
var IconsContainer = exports.IconsContainer = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));