"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerUI = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _reactDateRange = require("react-date-range");
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DatePickerUI = function DatePickerUI(props) {
  var value = props.value,
    onChange = props.onChange,
    name = props.name;
  return /*#__PURE__*/_react.default.createElement(_styles.DateContainer, null, /*#__PURE__*/_react.default.createElement(_reactDateRange.Calendar, {
    date: value,
    name: name,
    onChange: onChange,
    maxDate: new Date()
  }));
};
exports.DatePickerUI = DatePickerUI;
DatePickerUI.defaultProps = {
  name: 'date'
};