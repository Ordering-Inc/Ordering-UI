"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoursWrappers = exports.DropdownWrapper = exports.ClosedSchedule = exports.AccordionSection = exports.Accordion = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AccordionSection = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #FFF;\n"])));
exports.AccordionSection = AccordionSection;
var Accordion = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));
exports.Accordion = Accordion;
var DropdownWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"])));
exports.DropdownWrapper = DropdownWrapper;
var HoursWrappers = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex-direction: column;\n\n  p {\n    margin: 0px 0px 10px 0px;\n  }\n"])));
exports.HoursWrappers = HoursWrappers;
var ClosedSchedule = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: ", "\n"])), function (props) {
  var _props$theme, _props$theme$colors;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$colors = _props$theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.danger500;
});
exports.ClosedSchedule = ClosedSchedule;