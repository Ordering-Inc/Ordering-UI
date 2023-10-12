"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOptionList = exports.WrapperOption = exports.WrapperInput = exports.Title = exports.PlaceSpotContainer = exports.PlaceGroupContainer = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PlaceSpotContainer = exports.PlaceSpotContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: 80px;\n  position: relative;\n  #select-input, #list {\n    width: 100%;\n    color: #333 !important;\n    background-color: #F8F9FA;\n    border-radius: 7.6px;\n    border: 0px;\n  }\n  #item {\n    background-color: #F8F9FA;\n    font-size: 14px;\n  }\n  #item:hover {\n    background-color: #ccc;\n  }\n  .title {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n  img{\n    ", "\n  }\n  #not-found-source {\n    h1{\n      font-size: 16px;\n    }\n  }\n"])), function (_ref) {
  var isCheckout = _ref.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      width: 170px;\n      height: 150px;\n    "])));
});
var PlaceGroupContainer = exports.PlaceGroupContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));
var Title = exports.Title = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n"])));
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n\n  button{\n    width: 100%;\n  }\n"])));
var WrapperInput = exports.WrapperInput = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  input {\n    width: 100%;\n    box-sizing: border-box;\n  }\n\n  button {\n    margin-top: 16px;\n  }\n"])));
var WrapperOption = exports.WrapperOption = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-width: 240px;\n  flex: 1;\n  padding: 0 10px;\n"])));
var WrapperOptionList = exports.WrapperOptionList = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 20px);\n  margin-left: -10px;\n\n  @media (min-width: 1600px) {\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 20px;\n    grid-row-gap: 20px;\n  }\n"])));