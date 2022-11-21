"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomLayout = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

require("react-calendar/dist/Calendar.css");

var _reactCalendar = _interopRequireDefault(require("react-calendar"));

var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));

var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));

var _moment = _interopRequireDefault(require("moment"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CustomLayout = function CustomLayout(props) {
  var datesList = props.datesList,
      handleChangeDate = props.handleChangeDate,
      isEnabled = props.isEnabled,
      timeList = props.timeList,
      timeSelected = props.timeSelected,
      handleChangeTime = props.handleChangeTime;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(new Date()),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      onChange = _useState2[1];

  var _useState3 = (0, _react.useState)(new Date()),
      _useState4 = _slicedToArray(_useState3, 2),
      minDate = _useState4[0],
      setMinDate = _useState4[1];

  var _useState5 = (0, _react.useState)(new Date()),
      _useState6 = _slicedToArray(_useState5, 2),
      maxDate = _useState6[0],
      setMaxDate = _useState6[1];

  var onDateChange = function onDateChange(value) {
    onChange(value);

    if (handleChangeDate) {
      var date = (value.getDate() < 10 ? '0' : '') + value.getDate();
      var month = (value.getMonth() + 1 < 10 ? '0' : '') + (value.getMonth() + 1);
      var year = value.getFullYear();
      var fullDate = "".concat(year, "-").concat(month, "-").concat(date);
      handleChangeDate(fullDate);
    }
  };

  var _formatMonthYear = function formatMonthYear(date) {
    return (0, _moment.default)(date).format('MMMM');
  };

  var _formatShortWeekday = function formatShortWeekday(date) {
    return (0, _moment.default)(date).format('dd');
  };

  var _formatDay = function formatDay(date) {
    var minMon = (0, _moment.default)(minDate).format('MM');
    var maxMon = (0, _moment.default)(maxDate).format('MM');
    var currMon = (0, _moment.default)(date).format('MM');
    return minMon === currMon || maxMon === currMon ? (0, _moment.default)(date).format('D') : '';
  };

  (0, _react.useEffect)(function () {
    if ((datesList === null || datesList === void 0 ? void 0 : datesList.length) > 0) {
      var _configs$max_days_pre;

      var _datesList = datesList.slice(0, Number((configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre = configs.max_days_preorder) === null || _configs$max_days_pre === void 0 ? void 0 : _configs$max_days_pre.value) || 6, 10));

      var minDateParts = _datesList[0].split('-');

      var maxDateParts = _datesList[_datesList.length - 1].split('-');

      var _minDate = new Date(minDateParts[0], minDateParts[1] - 1, minDateParts[2]);

      var _maxDate = new Date(maxDateParts[0], maxDateParts[1] - 1, maxDateParts[2]);

      setMinDate(_minDate);
      setMaxDate(_maxDate);
    }
  }, [datesList]);
  return /*#__PURE__*/_react.default.createElement(_styles.LayoutContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_reactCalendar.default, {
    onChange: function onChange(val) {
      return onDateChange(val);
    },
    value: value,
    next2Label: "",
    prev2Label: "",
    prevLabel: /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, null),
    nextLabel: /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, null),
    minDate: minDate,
    maxDate: maxDate,
    formatMonthYear: function formatMonthYear(locale, date) {
      return _formatMonthYear(date);
    },
    formatShortWeekday: function formatShortWeekday(locale, date) {
      return _formatShortWeekday(date);
    },
    formatDay: function formatDay(locale, date) {
      return _formatDay(date);
    },
    calendarType: "US"
  })), /*#__PURE__*/_react.default.createElement(_styles.TimeListWrapper, null, isEnabled && (timeList === null || timeList === void 0 ? void 0 : timeList.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, timeList.map(function (time, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.TimeItem, {
      key: i,
      active: timeSelected === time.value,
      onClick: function onClick() {
        return handleChangeTime(time.value);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, time.text));
  })) : /*#__PURE__*/_react.default.createElement(_styles.ClosedBusinessMsg, null, t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The business is closed at the moment'))));
};

exports.CustomLayout = CustomLayout;