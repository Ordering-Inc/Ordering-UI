"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapHeader = exports.TitleContainer = exports.Title = exports.OptionThumbnail = exports.Flag = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &.error {\n    background-color: orange;\n  }\n"])));

exports.Container = Container;

var WrapHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 15px 0px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #FFF;\n"])));

exports.WrapHeader = WrapHeader;

var TitleContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 85%;\n  display: flex;\n  align-items: center;\n\n  *:first-child {\n    margin-right: 8px;\n  }\n"])));

exports.TitleContainer = TitleContainer;

var Title = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 600;\n\n  span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-weight: 600;\n    &:not(:first-child) {\n      color: ", ";\n      font-size: 12px;\n      font-weight: 400;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.grayTextColor;
});

exports.Title = Title;

var Flag = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 10px;\n  margin: 0px;\n  text-transform: capitalize;\n  color: #E63757;\n  font-weight: 400;\n"])));

exports.Flag = Flag;

var OptionThumbnail = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: inline-block;\n  border-radius: 8px;\n  background-image: url(", ");\n  background-repeat: no-repeat, repeat;\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n"])), function (_ref) {
  var src = _ref.src;
  return src;
});

exports.OptionThumbnail = OptionThumbnail;