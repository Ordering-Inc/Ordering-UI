"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerUI = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DatePickerUI = function DatePickerUI(props) {
  var value = props.value,
    onChange = props.onChange,
    placeholderText = props.placeholderText,
    name = props.name;
  return /*#__PURE__*/_react.default.createElement(_styles.DateContainer, null, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: value,
    placeholderText: placeholderText,
    name: name,
    onChange: onChange
  }));
};
exports.DatePickerUI = DatePickerUI;
DatePickerUI.defaultProps = {
  placeholderText: 'yyyy/mm/dd',
  name: 'date'
};