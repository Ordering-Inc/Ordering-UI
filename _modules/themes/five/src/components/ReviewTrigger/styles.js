"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessLogo = exports.StarWrapper = exports.Send = exports.ReviewsProgressWrapper = exports.ReviewOrderContainer = exports.PlacedDate = exports.LogoAndReviewWrapper = exports.ContinueContainer = exports.BusinessName = exports.BusinessLogo = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ReviewOrderContainer = exports.ReviewOrderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"])));
var StarWrapper = exports.StarWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  \n  > svg {\n    cursor: pointer\n  }\n"])));
var PlacedDate = exports.PlacedDate = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  text-align: center;\n"])));
var Send = exports.Send = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 30px;\n  width: 100%;\n\n  button {\n    font-size: 14px;\n    padding: 6px 20px;\n    width: 300px;\n    height: 45px;\n    line-height: 0;\n    svg {\n      color: white;\n      font-size: 21px;\n      vertical-align: middle;\n      margin-left: 8px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-left: 0;\n        margin-right: 8px;\n        transform: rotateZ(180deg);\n      "])));
});
var BusinessLogoStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 124px;\n  height: 124px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 124px;\n  border-radius: 7.6px;\n  @media (min-width: 481px){\n    width: 100%;\n    height: 100%;\n    min-height: 124px;\n  }\n"])));
var BusinessLogo = exports.BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var BusinessName = exports.BusinessName = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 17px;\n"])));
var WrapperBusinessLogo = exports.WrapperBusinessLogo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  align-self: center;\n  width: 124px;\n  height: 124px;\n  min-height: 124px;\n  max-width: 124px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n"])));
var ReviewsProgressWrapper = exports.ReviewsProgressWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 0 10px;\n  p {\n    margin-top: 0;\n    margin-bottom: 17px;\n    font-size: 15px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.darkTextColor;
});
var LogoAndReviewWrapper = exports.LogoAndReviewWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var ContinueContainer = exports.ContinueContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  p{\n    flex: 1\n  }\n"])));