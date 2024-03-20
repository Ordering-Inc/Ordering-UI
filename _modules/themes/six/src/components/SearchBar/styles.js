"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchWrapper = exports.SearchIcon = exports.FunnelWrapper = exports.DeleteContent = exports.BusinessSearch = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessSearch = exports.BusinessSearch = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n\n  input {\n    width: 100%;\n    background-position: right 10px center;\n    background-repeat: no-repeat;\n    background-size: 15px;\n    box-sizing: border-box;\n    border:none;\n    border-bottom: 1px solid ", ";\n    border-radius: 0px;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    @media (min-width: 681px) {\n      width: 100%;\n      ", "\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      padding-left: 60px;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      padding-right: 60px;\n    "])));
}, function (_ref) {
  var _theme$business_listi;
  var theme = _ref.theme,
    disablePadding = _ref.disablePadding;
  return (theme === null || theme === void 0 || (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.layout) === null || _theme$business_listi === void 0 ? void 0 : _theme$business_listi.type) === 'mapview' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-bottom: none;\n        ", "\n   "])), function (props) {
    var _props$theme2;
    return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          padding-right: 70px;\n        "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          padding-left: 70px;\n        "])));
  });
}, function (_ref2) {
  var _theme$business_view;
  var isCustomLayout = _ref2.isCustomLayout,
    theme = _ref2.theme;
  return !isCustomLayout && (theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.product_search) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.layout) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.type) !== 'floating' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      justify-content: center;\n      -webkit-transition: width 0.4s ease-in-out;\n      transition: width 0.4s ease-in-out; \n    "])));
}, function (_ref3) {
  var _theme$business_view2;
  var isCustomLayout = _ref3.isCustomLayout,
    theme = _ref3.theme;
  return !isCustomLayout && (theme === null || theme === void 0 || (_theme$business_view2 = theme.business_view) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.product_search) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.layout) === null || _theme$business_view2 === void 0 ? void 0 : _theme$business_view2.type) !== 'floating' && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        width: 200px;\n        &:focus {\n          width: 50%;\n        }\n      "])));
}, function (_ref4) {
  var _theme$business_listi2;
  var theme = _ref4.theme,
    disablePadding = _ref4.disablePadding;
  return (theme === null || theme === void 0 || (_theme$business_listi2 = theme.business_listing_view) === null || _theme$business_listi2 === void 0 || (_theme$business_listi2 = _theme$business_listi2.components) === null || _theme$business_listi2 === void 0 || (_theme$business_listi2 = _theme$business_listi2.layout) === null || _theme$business_listi2 === void 0 ? void 0 : _theme$business_listi2.type) === 'mapview' && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      ", "\n    "])), disablePadding && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        padding-left: 0;\n      "]))));
});
var DeleteContent = exports.DeleteContent = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  padding: 10px 0;\n  color: #333;\n  font-size: 14px;\n  transform: translate(-30%, 0%);\n  border-radius: 25%;\n  max-height: 100%;\n  ", "\n  ", "\n  ", "\n  span{\n    cursor: pointer;\n  }\n  svg {\n    color: #ADB5BD;\n    width: 24px;\n    height: 24px;\n    position: relative;\n    bottom: 4px;\n  }\n  img{\n    width: 20px;\n    transform: translate(-25%, 0%);\n    ", "\n  }\n"])), function (_ref5) {
  var _theme$business_listi3;
  var theme = _ref5.theme,
    isHome = _ref5.isHome;
  return (theme === null || theme === void 0 || (_theme$business_listi3 = theme.business_listing_view) === null || _theme$business_listi3 === void 0 || (_theme$business_listi3 = _theme$business_listi3.components) === null || _theme$business_listi3 === void 0 || (_theme$business_listi3 = _theme$business_listi3.layout) === null || _theme$business_listi3 === void 0 ? void 0 : _theme$business_listi3.type) === 'mapview' && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    left: ", ";\n  "])), isHome ? '40px' : '30px');
}, function (_ref6) {
  var isClear = _ref6.isClear,
    isHome = _ref6.isHome;
  return isClear && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    left: initial;\n    right: 40px;\n  "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    transform: translate(30%, 0%);\n  "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      transform: translate(25%, 0%);\n    "])));
});
var SearchWrapper = exports.SearchWrapper = (0, _styledComponents.default)(DeleteContent)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([""])));
var FunnelWrapper = exports.FunnelWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  svg {\n    position: absolute;\n    right: 10px !important;\n    color: #ADB5BD;\n    width: 20px;\n    height: 20px;\n    bottom: 22px;\n  }\n"])));
var SearchIcon = exports.SearchIcon = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-position: right 10px center;\n  background-repeat: no-repeat;\n  background-size: 15px;\n  background-color: ", ";\n\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 || (_props$theme5 = _props$theme5.images) === null || _props$theme5 === void 0 || (_props$theme5 = _props$theme5.general) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.searchIcon;
}, function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 || (_props$theme6 = _props$theme6.colors) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.backgroundPage;
});