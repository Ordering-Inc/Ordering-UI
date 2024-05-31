"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleWrapper = exports.ProfessionalPhoto = exports.PhotoWrapper = exports.NameWrapper = exports.Divider = exports.Container = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 30px 20px 0px 20px;\n"])));
var PhotoWrapper = exports.PhotoWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n\n  svg {\n    width: 220px;\n    height: 200px;\n  }\n"])));
var ProfessionalPhotoStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  height: 298px;\n  width: 314px;\n  min-width: 300px;\n  border-radius: 7.6px;\n"])));
var ProfessionalPhoto = exports.ProfessionalPhoto = function ProfessionalPhoto(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(ProfessionalPhotoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var NameWrapper = exports.NameWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 28px;\n    line-height: 42px;\n    margin-top: 27px;\n    margin-bottom: 0px;\n  }\n"])));
var Divider = exports.Divider = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: 8px;\n  background-color: ", ";\n  margin-left: -20px;\n  width: calc(100% + 40px);\n"])), function (props) {
  return props.theme.colors.grayDividerColor;
});
var ScheduleWrapper = exports.ScheduleWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  margin-bottom: 15px;\n\n  > div {\n    padding: 0px;\n  }\n  h2 {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n    margin-bottom: 20px;\n    margin-top: 0px;\n  }\n"])));
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: sticky;\n  background: ", ";\n  padding: 11px 0px 14px 0px;\n  border-top: ", ";\n  bottom: 0px;\n  z-index: 1;\n\n  button {\n    height: 44px;\n    width: 100%;\n    max-width: 300px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.gray200;
});