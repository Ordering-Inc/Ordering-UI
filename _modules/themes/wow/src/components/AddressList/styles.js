"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappNotAddresses = exports.TagWrapper = exports.FormActions = exports.ContinueButton = exports.AddressListUl = exports.AddressListContainer = exports.AddressItemActions = exports.AddressItem = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AddressListContainer = exports.AddressListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 10px;\n\n  ", "\n\n  button.add {\n    height: 50px;\n  }\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var AddressListUl = exports.AddressListUl = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  margin-top: 40px;\n\n  @media (min-width: 992px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"])));
var AddressItem = exports.AddressItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n  border-radius: 15px;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n\n  ", "\n\n  label {\n    font-size: 15px;\n    margin-left: 5px;\n    font-weight: bold;\n    ", "\n  }\n\n  .wrapAddress {\n    display: flex;\n    align-items: center;\n\n    span {\n      font-size: 14px;\n      display: flex;\n      cursor: pointer;\n      margin-right: 10px;\n      ", "\n\n      @media (min-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n\n  .address {\n    display: flex;\n    flex-direction: column;\n    line-height: 1.5;\n\n    span:first-child {\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 2;\n      overflow: hidden;\n    }\n\n    span:last-child {\n      opacity: 0.5;\n      font-size: 12px;\n    }\n  }\n\n  &:last-child {\n    border-bottom: 1px solid #00000029;\n  }\n\n  @media (min-width: 992px) {\n    width: calc(50% - 20px);\n    margin: 10px;\n  }\n"])), function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-color: #F9F9F9;\n    box-shadow: none;\n\n    .address {\n      span {\n        color: ", ";\n      }\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n  "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0px;\n      "])));
});
var AddressItemActions = exports.AddressItemActions = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  > span {\n    svg {\n      color: ", ";\n      font-size: 30px;\n    }\n  }\n  > a {\n    display: flex;\n    cursor: pointer;\n    margin: 0px 5px;\n    font-size: 30px;\n  }\n  a.edit {\n    svg {\n      color: ", ";\n    }\n  }\n  a.delete {\n    svg {\n      color: #D81212;\n    }\n  }\n  > a.disabled {\n    svg {\n      color: #CCC;\n    }\n    pointer-events: none;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
var WrappNotAddresses = exports.WrappNotAddresses = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 270px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 20px auto 10px;\n\n  img {\n    width: 200px;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  h1 {\n    margin: 5px 0px 0px;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n  }\n"])));
var FormActions = exports.FormActions = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    height: 45px;\n    flex: 1;\n\n    &:last-child#second-btn {\n      margin-left: 10px;\n      ", "\n    }\n  }\n\n  @media (min-width: 769px) {\n    button {\n      &:last-child#second-btn {\n        margin-left: 25px;\n        ", "\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-left: 0;\n        margin-right: 10px;\n      "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n          margin-left: 0;\n          margin-right: 25px;\n      "])));
});
var ContinueButton = exports.ContinueButton = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: sticky;\n  bottom: 1px;\n  \n  button {\n    width: 100%;\n    white-space: nowrap;\n    height: 50px;\n  }\n"])));
var TagWrapper = exports.TagWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  background: #F9F9F9;\n  backdrop-filter: blur(15px);\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  min-width: 40px;\n  ", "\n\n  svg {\n    color: ", ";\n    font-size: 24px;\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n  "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});