"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappMap = exports.Text = exports.Map = exports.Header = exports.ChangeButton = exports.AddressContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AddressContainer = exports.AddressContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 -20px 10px -20px;\n  \n  @media (min-width: 681px) {\n    margin: 0 0 10px 0;\n  }\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n"])));
var WrappMap = exports.WrappMap = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: auto;\n"])));
var Map = exports.Map = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 100%;\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n    -webkit-user-drag: none;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));
var Text = exports.Text = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  width: 100%;\n\n  h4{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    margin: 0px;\n    font-size: 20px;\n    font-weight: 500;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
});
var ChangeButton = exports.ChangeButton = _styledComponents.default.a(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  font-size: 14px;\n"])), function (props) {
  return props.theme.colors.primary;
});