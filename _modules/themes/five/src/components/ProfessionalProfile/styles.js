"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleWrapper = exports.ProfessionalPhoto = exports.PhotoWrapper = exports.NameWrapper = exports.Divider = exports.Container = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 30px 20px 0px 20px;\n"])));
exports.Container = Container;
var PhotoWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n\n  svg {\n    width: 220px;\n    height: 200px;\n  }\n"])));
exports.PhotoWrapper = PhotoWrapper;
var ProfessionalPhotoStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  height: 298px;\n  width: 314px;\n  min-width: 300px;\n  border-radius: 7.6px;\n"])));
var ProfessionalPhoto = function ProfessionalPhoto(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(ProfessionalPhotoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.ProfessionalPhoto = ProfessionalPhoto;
var NameWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 28px;\n    line-height: 42px;\n    margin-top: 27px;\n    margin-bottom: 0px;\n  }\n"])));
exports.NameWrapper = NameWrapper;
var Divider = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: 8px;\n  background-color: ", ";\n  margin-left: -20px;\n  width: calc(100% + 40px);\n"])), function (props) {
  return props.theme.colors.grayDividerColor;
});
exports.Divider = Divider;
var ScheduleWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  margin-bottom: 15px;\n\n  > div {\n    padding: 0px;\n  }\n  h2 {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n    margin-bottom: 20px;\n    margin-top: 0px;\n  }\n"])));
exports.ScheduleWrapper = ScheduleWrapper;
var ButtonWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: sticky;\n  background: ", ";\n  padding: 11px 0px 14px 0px;\n  border-top: ", ";\n  bottom: 0px;\n  z-index: 1;\n\n  button {\n    height: 44px;\n    width: 100%;\n    max-width: 300px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.gray200;
});
exports.ButtonWrapper = ButtonWrapper;