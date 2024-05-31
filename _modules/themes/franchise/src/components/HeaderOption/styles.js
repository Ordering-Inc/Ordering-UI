"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryType = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var variant = _ref.variant;
  return variant === 'cart' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    > span {\n      cursor: pointer;\n      height: 20px;\n      padding: 10px 9px;\n      display: flex;\n      align-items: center;\n      background: ", ";\n      color: #FFFFFF;\n      border-radius: 7.6px;\n\n      span {\n        margin: 0;\n        font-size: 14px;\n        ", " \n      }\n      svg {\n        font-size: 17px;\n      }\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    var _props$theme;
    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          margin-right: 10px;\n        "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          margin-left: 10px;\n        "])));
  });
}, function (_ref2) {
  var variant = _ref2.variant;
  return variant === 'address' && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    color: #909BA9;\n    display: flex;\n    align-items: center;\n\n    svg {\n      margin-right: 5px;\n      ", "\n    }\n\n  "])), function (props) {
    var _props$theme2;
    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0px;\n      "])));
  });
}, function (_ref3) {
  var variant = _ref3.variant;
  return variant === 'moment' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    color: #909BA9;\n    display: flex;\n    align-items: center;\n\n    svg {\n      margin-right: 5px;\n      ", "\n    }\n  "])), function (props) {
    var _props$theme3;
    return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n      "])));
  });
}, function (_ref4) {
  var isHome = _ref4.isHome;
  return isHome && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    color: #FFF;\n  "])));
});
var DeliveryType = exports.DeliveryType = _styledComponents.default.p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  user-select: none;\n  cursor: pointer;\n  margin: 0;\n  font-size: 14px;\n  color: #909BA9;\n"])));