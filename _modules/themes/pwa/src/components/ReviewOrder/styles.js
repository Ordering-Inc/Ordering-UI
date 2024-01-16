"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessLogo = exports.Send = exports.ReviewsProgressWrapper = exports.ReviewsProgressContent = exports.ReviewsProgressBar = exports.ReviewsMarkPoint = exports.ReviewOrderContainer = exports.LogoAndReviewWrapper = exports.Header = exports.CommentsList = exports.Comments = exports.BusinessLogo = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ReviewOrderContainer = exports.ReviewOrderContainer = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 97%;\n  margin: 0 auto;\n"])));
var Comments = exports.Comments = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  margin-top: 10px;\n\n  p {\n    text-transform: capitalize;\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.darkTextColor;
});
var Send = exports.Send = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 30px;\n  width: 100%;\n\n  span {\n    cursor: pointer;\n    font-weight: 600;\n    font-size: 16px;\n    user-select: none;\n  }\n\n  button {\n    font-size: 14px;\n    padding: 6px 20px;\n\n    svg {\n      color: white;\n      font-size: 21px;\n      vertical-align: middle;\n      margin-left: 8px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        margin-left: 0;\n        margin-right: 8px;\n        transform: rotateZ(180deg);\n      "])));
});
var BusinessLogoStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 124px;\n  height: 124px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 124px;\n  border-radius: 7.6px;\n\n  @media (min-width: 481px){\n    width: 100%;\n    height: 100%;\n    min-height: 124px;\n  }\n"])));
var BusinessLogo = exports.BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var WrapperBusinessLogo = exports.WrapperBusinessLogo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-self: center;\n  width: 124px;\n  height: 124px;\n  min-height: 124px;\n  max-width: 124px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n"])));
var ReviewsProgressWrapper = exports.ReviewsProgressWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 50px;\n  margin-bottom: 35px;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 17px;\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.darkTextColor;
});
var ReviewsProgressContent = exports.ReviewsProgressContent = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: #E9ECEF;\n  border-radius: 50px;\n  width: 100%;\n  height: 4px;\n  position: relative;\n  margin-bottom: 30px;\n"])));
var ReviewsProgressBar = exports.ReviewsProgressBar = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 4px;\n  border-radius: 50px;\n  background: #344050;\n"])));
var ReviewsMarkPoint = exports.ReviewsMarkPoint = _styledComponents.default.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 15px;\n  font-size: 12px;\n  color: #CED4DA;\n  cursor: pointer;\n\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    var _props$theme4;
    return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.headingColor;
  });
});
var LogoAndReviewWrapper = exports.LogoAndReviewWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 97%;\n  display: flex;\n  flex-direction: column;\n  margin: 30px auto 15px;\n"])));
var CommentsList = exports.CommentsList = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  p {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 14px;\n    color: ", ";\n  }\n\n  button {\n    border-radius: 50px;\n    margin-bottom: 10px;\n    margin-right: 4px;\n    font-size: 13px;\n    padding: 2px 10px;\n  \n    ", "\n\n    svg {\n      vertical-align: middle;\n      margin-left: 5px;\n\n      ", "\n    }\n\n    @media (min-width: 768px){\n      margin-bottom: 18px;\n      margin-right: 40px;\n      font-size: 16px;\n      padding: 2px 15px;\n    }\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.darkTextColor;
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 4px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0;\n      "])));
});
var Header = exports.Header = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  color: #344050;\n  margin-bottom: 23px;\n\n  @media (min-width: 768px){\n    text-align: center;\n  }\n"])));