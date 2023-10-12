"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceholderTitle = exports.OrderStatusTypeSelectWrapper = exports.Option = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderStatusTypeSelectWrapper = exports.OrderStatusTypeSelectWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .list-wrapper {\n    min-width: 297px;\n  }\n\n  .orderStatus {\n    width: 100%;\n  }\n\n  .search-bar-container {\n    padding: 10px 11px;\n    width: 100%;\n    input {\n      border-radius: 7.6px;\n      width: 100%;\n    }\n  }\n"])));
var Option = exports.Option = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  column-gap: 5px;\n\n  p {\n    margin: 0px;\n    white-space: nowrap;\n    font-size: 14px;\n  }\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var isSubTitle = _ref.isSubTitle;
  return !isSubTitle ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n\n    p {\n      padding: 0 10px;\n      color: ", " !important;\n    }\n  "])), function (props) {
    var _props$theme;
    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n      margin-right: 5px;\n    "])), function (props) {
      return props.theme.colors.borderColor;
    }) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n      margin-left: 5px;\n    "])), function (props) {
      return props.theme.colors.borderColor;
    });
  }, function (props) {
    return props.theme.colors.secundaryContrast;
  }) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    p {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.secundaryLight;
  });
}, function (_ref2) {
  var noPadding = _ref2.noPadding;
  return noPadding && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    padding: 0px;\n  "])));
});
var PlaceholderTitle = exports.PlaceholderTitle = (0, _styledComponents.default)(Option)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding: 10px;\n"])));