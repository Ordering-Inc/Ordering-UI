"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessListWrapper = exports.BusinessList = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessListWrapper = exports.BusinessListWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: auto hidden;\n  width: 100%;\n\n  ", "\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ::-webkit-scrollbar {\n        width: 0px;\n        height: 0px;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      ::-webkit-scrollbar {\n          width: 6px;\n          height: 6px;\n      }\n  "])));
});
var BusinessList = exports.BusinessList = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  align-items: center;\n  ", "\n  @media (min-width: 480px){\n    flex-direction: row;\n  }\n  #searchlistorder {\n    > div {\n      width: calc(100vw - 40px);\n      min-width: calc(100vw - 40px);\n\n      ", "\n\n      @media (min-width: 681px) {\n        width: calc(50vw - 40px);\n        min-width: calc(50vw - 40px);\n      }\n      @media (min-width: 993px) {\n        width: calc(33vw - 40px);\n        min-width: calc(33vw - 40px);\n      }\n      @media (min-width: 1200px) {\n        width: calc(25vw - 40px);\n        min-width: calc(25vw - 40px);\n      }\n    }\n  }\n"])), function (_ref2) {
  var noResults = _ref2.noResults;
  return noResults && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    justify-content: center;\n  "])));
}, function (_ref3) {
  var marginCard = _ref3.marginCard;
  return marginCard && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin: ", " !important;\n      "])), function (_ref4) {
    var marginCard = _ref4.marginCard;
    return marginCard;
  });
});