"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRatingUpper = exports.StarRatingLower = exports.StarRating = exports.ReviewContainer = exports.OrderContent = exports.OrderContainer = exports.Logo = exports.LoadMoreButtonWrap = exports.CardContent = exports.CardBottom = exports.Card = exports.BusinessInformation = exports.ActionContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderContainer = exports.OrderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var Card = exports.Card = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n  border-radius: 16px;\n  padding: 15px;\n \n  width: 100%;\n  margin: 15px 0px;\n  box-sizing: border-box;\n\n  @media (min-width: 768px) {\n    margin: 15px 10px;\n    width: calc(100% - 20px);\n  }\n\n  @media (min-width: 1024px) {\n    width: calc(50% - 20px);\n  }\n"])));
var CardContent = exports.CardContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 10px;\n"])));
var CardBottom = exports.CardBottom = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border-top: 1px solid #CCC;\n  padding-top: 10px;\n\n  ", "\n"])), function (_ref) {
  var reviewState = _ref.reviewState;
  return reviewState && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    justify-content: space-between;\n  "])));
});
var Logo = exports.Logo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 55px;\n  height: 55px;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 16px;\n  }\n\n  @media (min-width: 480px){\n    width: 75px;\n    height: 75px;\n  }\n"])));
var OrderContent = exports.OrderContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  max-width: calc(100% - 120px);\n"])));
var BusinessInformation = exports.BusinessInformation = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 85px);\n  ", "\n\n  h2 {\n    font-size: 18px;\n    font-weight: 600;\n    color: ", ";\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p {\n    margin: 5px 0 0 0;\n    font-size: 12px;\n    color: ", ";\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding-left: 10px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.grayColor;
});
var ActionContent = exports.ActionContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  color: ", ";\n\n  p {\n    margin: 0px;\n    font-size: 18px;\n    font-weight: 600;\n  }\n\n  span {\n    cursor: pointer;\n    font-size: 14px;\n    text-decoration: underline;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var LoadMoreButtonWrap = exports.LoadMoreButtonWrap = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  margin: 20px auto;\n\n  @media (min-width: 768px) {\n    width: 80%;\n  }\n\n  button {\n    width: 100%;\n    padding: 7px 0;\n  }\n"])));
var ReviewContainer = exports.ReviewContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  h2 {\n    color: ", ";\n    margin: 0px;\n    font-weight: 400;\n    font-size: 14px;\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
});
var StarRating = exports.StarRating = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  unicode-bidi: bidi-override;\n  color: #B3B3B3;\n  font-size: 25px;\n  height: 25px;\n  margin: 0 auto;\n  position: relative;\n  padding: 0;\n\n  span {\n    margin-right: 5px;\n  }\n"])));
var StarRatingUpper = exports.StarRatingUpper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  color: #FFD605;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n"])));
var StarRatingLower = exports.StarRatingLower = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  padding: 0;\n  display: flex;\n  z-index: 0;\n"])));