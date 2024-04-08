"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserName = exports.UserData = exports.TitleContainer = exports.SideForm = exports.PhoneContainer = exports.ModalIcon = exports.Header = exports.CountryFlag = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n\n  @media (max-width: 930px) {\n    h1 {\n      font-size: 18px !important;\n    }\n  }\n"])), function (_ref) {
  var isEdit = _ref.isEdit;
  return isEdit ? 'auto' : '145px';
});
var Header = exports.Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n\n  h1 {\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n    margin: 0px 10px 0px 0px;\n    ", "\n  }\n\n  svg {\n    font-size: 24px;\n  }\n\n  svg.cancel {\n    color: #D81212;\n    cursor: pointer;\n  }\n\n  span {\n    font-size: 13px;\n    color: ", ";\n    text-decoration: underline;\n    cursor: pointer;\n    user-select: none;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin: 0px 0px 0px 10px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});
var SideForm = exports.SideForm = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 25px;\n  @media (min-width: 768px) {\n    display: flex;\n    align-items: center;\n  }\n"])));
var UserData = exports.UserData = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: left;\n  ", "\n  position: relative;\n  > * {\n    margin: 5px 0;\n  }\n\n  p {\n    font-size: 14px;\n    color: ", ";\n  }\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    text-align: right;\n  "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.darkTextColor;
}, function (_ref2) {
  var isModal = _ref2.isModal;
  return isModal && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-top: 40px;\n  "])));
});
var UserName = exports.UserName = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-weight: 600;\n"])));
var ModalIcon = exports.ModalIcon = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 2;\n\n  svg{\n    /* background: rgba(255,255,255,0.5); */\n    border-radius: 50%;\n  }\n\n"])));
var TitleContainer = exports.TitleContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 0;\n  h1 {\n    margin: auto;\n    font-size: 24px;\n  }\n  ", "\n"])), function (_ref3) {
  var isAddressFormOpen = _ref3.isAddressFormOpen;
  return isAddressFormOpen && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      h1{\n        width: 75%;\n      }\n  "])));
});
var CountryFlag = exports.CountryFlag = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-right: 5px;\n  .PhoneInputCountryIcon {\n    width: 25px;\n  }\n  .PhoneInputInput {\n    display: none;\n  }\n  .PhoneInputCountrySelect {\n    display: none;\n  }\n"])));
var PhoneContainer = exports.PhoneContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 30px;\n  p {\n    margin: 0;\n  }\n"])));