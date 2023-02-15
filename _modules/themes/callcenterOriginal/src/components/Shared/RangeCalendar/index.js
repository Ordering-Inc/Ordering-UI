"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeCalendar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _moment = _interopRequireDefault(require("moment"));
var _reactDateRange = require("react-date-range");
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("../../../styles");
var _styles3 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var RangeCalendar = function RangeCalendar(props) {
  var handleChangeDate = props.handleChangeDate,
    defaultValue = props.defaultValue,
    isLeft = props.isLeft,
    isSingleDate = props.isSingleDate,
    withTime = props.withTime,
    minDate = props.minDate;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([{
      startDate: null,
      endDate: null,
      key: 'selection'
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    dateRange = _useState2[0],
    setDateRange = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    date = _useState4[0],
    setDate = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isShowCalendar = _useState6[0],
    setIsShowCalendar = _useState6[1];
  var calendarRef = (0, _react.useRef)();
  var handleClickOutside = function handleClickOutside(e) {
    var _calendarRef$current;
    if (!isShowCalendar) return;
    var outsideCalendar = !((_calendarRef$current = calendarRef.current) !== null && _calendarRef$current !== void 0 && _calendarRef$current.contains(e.target));
    if (outsideCalendar) {
      setIsShowCalendar(false);
    }
  };
  var handleOpenCalendar = function handleOpenCalendar(evt) {
    evt.preventDefault();
    setIsShowCalendar(true);
  };
  var handleChangeSingleDate = function handleChangeSingleDate(dateTime) {
    var dateFormat = withTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    handleChangeDate && handleChangeDate((0, _moment.default)(dateTime).format(dateFormat));
    setDate(dateTime);
  };
  var handleChangeDates = function handleChangeDates(item) {
    var _item$selection, _item$selection2;
    if ((_item$selection = item.selection) !== null && _item$selection !== void 0 && _item$selection.startDate && (_item$selection2 = item.selection) !== null && _item$selection2 !== void 0 && _item$selection2.endDate) {
      var _dateFormat = withTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
      handleChangeDate((0, _moment.default)(item.selection.startDate).format(_dateFormat), (0, _moment.default)(item.selection.endDate).format(_dateFormat));
    }
    setDateRange([item.selection]);
  };
  var rangeFormat = function rangeFormat(date1, date2) {
    var formattedDate = "".concat((0, _moment.default)(date1).format('YYYY-MM-DD'), "~").concat((0, _moment.default)(date2).format('YYYY-MM-DD'));
    if ((0, _moment.default)(date1).format('YYYY') === (0, _moment.default)(date2).format('YYYY')) {
      if ((0, _moment.default)(date1).format('MM') === (0, _moment.default)(date2).format('MM')) formattedDate = "".concat((0, _moment.default)(date1).format('DD'), " - ").concat((0, _moment.default)(date2).format('DD'), " ").concat((0, _moment.default)(date2).format('MMM'), ", ").concat((0, _moment.default)(date1).format('YYYY'));else formattedDate = "".concat((0, _moment.default)(date1).format('MM-DD'), " ~ ").concat((0, _moment.default)(date2).format('MM-DD'), ", ").concat((0, _moment.default)(date1).format('YYYY'));
    }
    return formattedDate;
  };
  var dateFormat = function dateFormat(dateTime) {
    return "".concat((0, _moment.default)(dateTime).format('DD'), " ").concat((0, _moment.default)(dateTime).format('MMM'), ", ").concat((0, _moment.default)(dateTime).format('YYYY'));
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('click', handleClickOutside);
    return function () {
      return window.removeEventListener('click', handleClickOutside);
    };
  }, [isShowCalendar]);
  (0, _react.useEffect)(function () {
    if (isSingleDate && defaultValue) {
      setDate(new Date(defaultValue));
      return;
    }
    if (defaultValue && (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.from) !== '' && (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.to) !== '') {
      setDateRange([{
        startDate: new Date(defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.from),
        endDate: new Date(defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.to),
        key: 'selection'
      }]);
    }
  }, [defaultValue]);
  return /*#__PURE__*/_react.default.createElement(_styles3.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    onClick: handleOpenCalendar,
    borderRadius: "8px",
    color: "secundary",
    className: "ordering-calendar-btn"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Calendar4, null), !isSingleDate && (dateRange[0].startDate ? rangeFormat(dateRange[0].startDate, dateRange[0].endDate) : t('SELECT_DATE_RANGE', 'Select Date Range')), isSingleDate && (date ? dateFormat(date) : t('SELECT_DATE', 'Select a Date'))), isShowCalendar && /*#__PURE__*/_react.default.createElement(_styles3.CalendarWrapper, {
    ref: calendarRef,
    isLeft: isLeft
  }, isSingleDate ? /*#__PURE__*/_react.default.createElement(_reactDateRange.Calendar, {
    date: date,
    onChange: function onChange(date) {
      return handleChangeSingleDate(date);
    },
    minDate: minDate || new Date('1922-01-01')
  }) : /*#__PURE__*/_react.default.createElement(_reactDateRange.DateRange, {
    editableDateInputs: true,
    onChange: function onChange(item) {
      return handleChangeDates(item);
    },
    moveRangeOnFirstSelection: false,
    ranges: dateRange,
    minDate: minDate || new Date('1922-01-01')
  })));
};
exports.RangeCalendar = RangeCalendar;