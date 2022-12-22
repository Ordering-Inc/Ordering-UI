"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = void 0;
var _react = _interopRequireWildcard(require("react"));
var _EnChevronDown = _interopRequireDefault(require("@meronex/icons/en/EnChevronDown"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _Buttons = require("../Buttons");
var _DashboardSelects = require("../DashboardSelects");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MultiSelect = function MultiSelect(props) {
  var placeholder = props.placeholder,
    options = props.options,
    onChange = props.onChange,
    defaultValue = props.defaultValue,
    className = props.className;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    values = _useState4[0],
    setValues = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedOptions = _useState6[0],
    setSelectedOptions = _useState6[1];
  var dropdownReference = (0, _react.useRef)();
  var handleSelectClick = function handleSelectClick(e) {
    var isInvalid = e.target.closest('.remove_option');
    if (isInvalid) return;
    setOpen(!open);
  };
  var closeSelect = function closeSelect(e) {
    if (open) {
      var _dropdownReference$cu;
      var outsideDropdown = !((_dropdownReference$cu = dropdownReference.current) !== null && _dropdownReference$cu !== void 0 && _dropdownReference$cu.contains(e.target));
      if (outsideDropdown) {
        setOpen(false);
      }
    }
  };
  (0, _react.useEffect)(function () {
    var _defaultOption = options === null || options === void 0 ? void 0 : options.filter(function (option) {
      return defaultValue.includes(option.value);
    });
    setSelectedOptions(_defaultOption);
    setValues(defaultValue);
  }, [defaultValue, options]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    document.addEventListener('click', closeSelect);
    return function () {
      return document.removeEventListener('click', closeSelect);
    };
  }, [open]);
  var handleSelectOption = function handleSelectOption(option) {
    if (option.value === null || option.value === 'default') return;
    var _selectedOptions = _toConsumableArray(selectedOptions);
    var _values = _toConsumableArray(values);
    if (!_values.includes(option.value)) {
      _values.push(option.value);
      _selectedOptions.push(option);
    } else {
      for (var i = 0; i < _values.length; i++) {
        if (_values[i] === option.value) {
          _values.splice(i, 1);
          _selectedOptions.splice(i, 1);
          i--;
        }
      }
    }
    setSelectedOptions(_selectedOptions);
    setValues(_values);
    onChange && onChange(option.value);
  };
  return /*#__PURE__*/_react.default.createElement(_DashboardSelects.Select, {
    className: className || 'multi-select'
  }, selectedOptions.length === 0 ? /*#__PURE__*/_react.default.createElement(_DashboardSelects.Selected, {
    onClick: function onClick(e) {
      return handleSelectClick(e);
    }
  }, placeholder || '', /*#__PURE__*/_react.default.createElement(_DashboardSelects.Chevron, null, /*#__PURE__*/_react.default.createElement(_EnChevronDown.default, null))) : /*#__PURE__*/_react.default.createElement(_DashboardSelects.Selected, {
    onClick: function onClick(e) {
      return handleSelectClick(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_DashboardSelects.Header, null, selectedOptions.map(function (selectedOption) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: selectedOption.value
    }, /*#__PURE__*/_react.default.createElement(_DashboardSelects.MultiSelectOption, null, selectedOption.showOnSelected || selectedOption.content, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      circle: true,
      outline: true,
      color: "primary",
      type: "reset",
      className: "remove_option",
      onClick: function onClick() {
        return onChange && onChange(selectedOption.value);
      }
    }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null))));
  })), /*#__PURE__*/_react.default.createElement(_DashboardSelects.Chevron, null, /*#__PURE__*/_react.default.createElement(_EnChevronDown.default, null))), open && options && /*#__PURE__*/_react.default.createElement(_DashboardSelects.Options, {
    isAbsolute: true,
    position: "right",
    ref: dropdownReference
  }, /*#__PURE__*/_react.default.createElement(_DashboardSelects.OptionsInner, {
    optionInnerMargin: props.optionInnerMargin,
    optionInnerMaxHeight: props.optionInnerMaxHeight
  }, options.map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_DashboardSelects.MultiOption, {
      key: i,
      color: option.color,
      onClick: function onClick() {
        return handleSelectOption(option);
      },
      optionBottomBorder: props.optionBottomBorder
    }, option.value !== 'default' && /*#__PURE__*/_react.default.createElement(_styles.CheckBox, null, values.includes(option.value) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null)), option.content);
  }))));
};
exports.MultiSelect = MultiSelect;