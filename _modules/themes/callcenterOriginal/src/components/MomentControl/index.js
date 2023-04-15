"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _orderingComponents = require("ordering-components");
require("react-datepicker/dist/react-datepicker.css");
require("react-calendar/dist/Calendar.css");
var _reactCalendar = _interopRequireDefault(require("react-calendar"));
var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));
var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
var _CgRadioCheck = _interopRequireDefault(require("@meronex/icons/cg/CgRadioCheck"));
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MomentControlUI = function MomentControlUI(props) {
  var _configs$format_time3, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var isAsap = props.isAsap,
    datesList = props.datesList,
    hoursList = props.hoursList,
    dateSelected = props.dateSelected,
    timeSelected = props.timeSelected,
    handleAsap = props.handleAsap,
    handleChangeDate = props.handleChangeDate,
    handleChangeTime = props.handleChangeTime,
    onClose = props.onClose;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseTime = _useUtils2[0].parseTime;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
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
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isASP = _useState8[0],
    setIsASP = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    timeLists = _useState10[0],
    setTimeLists = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    timeFormat = _useState12[0],
    setTimeFormat = _useState12[1];
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
  var handleCheckBoxChange = function handleCheckBoxChange(index) {
    if (index) {
      !orderState.loading && handleAsap();
      setIsASP(true);
    } else setIsASP(false);
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
  var handleChangeTimeFormat = function handleChangeTimeFormat() {
    var _configs$format_time;
    if ((configs === null || configs === void 0 ? void 0 : (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) !== '12') return;
    setTimeFormat(function (prev) {
      return prev === 'AM' ? 'PM' : 'AM';
    });
  };
  (0, _react.useEffect)(function () {
    var _configs$format_time2;
    if ((configs === null || configs === void 0 ? void 0 : (_configs$format_time2 = configs.format_time) === null || _configs$format_time2 === void 0 ? void 0 : _configs$format_time2.value) === '12') setTimeFormat('AM');else setTimeFormat('');
  }, [configs === null || configs === void 0 ? void 0 : (_configs$format_time3 = configs.format_time) === null || _configs$format_time3 === void 0 ? void 0 : _configs$format_time3.value]);
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
  (0, _react.useEffect)(function () {
    if (dateSelected) {
      var dateParts = dateSelected.split('-');
      var _dateSelected = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
      onChange(_dateSelected);
    }
  }, [dateSelected]);
  (0, _react.useEffect)(function () {
    if (hoursList) {
      var _timeLists = hoursList.map(function (hour) {
        var _configs$format_time4;
        return {
          value: hour.startTime,
          content: (configs === null || configs === void 0 ? void 0 : (_configs$format_time4 = configs.format_time) === null || _configs$format_time4 === void 0 ? void 0 : _configs$format_time4.value) === '12' ? hour.startTime.includes('12') ? "".concat(hour.startTime, "PM") : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
            outputFormat: 'hh:mma'
          }) : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
            outputFormat: 'HH:mm'
          })
        };
      });
      setTimeLists(_timeLists);
    }
  }, [hoursList]);
  (0, _react.useEffect)(function () {
    handleCheckBoxChange(isAsap);
  }, [isAsap]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "moment_control"
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('WHEN_DO_WE_DELIVERY', 'When do we delivery?')), /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
    highlight: isAsap && isASP,
    onClick: function onClick() {
      return handleCheckBoxChange(true);
    },
    isLoading: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, isASP ? /*#__PURE__*/_react.default.createElement(_styles.CheckedIcon, null) : /*#__PURE__*/_react.default.createElement(_CgRadioCheck.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('CHECKOUT_ASAP', 'ASAP'), " (", (0, _moment.default)(new Date()).format('LLLL'), " - ", t('DELIVERY_TIME', 'delivery time'), ")")), /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
    highlight: !isASP,
    onClick: function onClick() {
      return handleCheckBoxChange(null);
    }
  }, isASP ? /*#__PURE__*/_react.default.createElement(_CgRadioCheck.default, null) : /*#__PURE__*/_react.default.createElement(_styles.CheckedIcon, null), /*#__PURE__*/_react.default.createElement("span", null, t('SCHEDULE_FOR_LATER', 'Schedule for later'))), !isASP && /*#__PURE__*/_react.default.createElement(_styles.DateTimeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DateWrapper, null, /*#__PURE__*/_react.default.createElement(_reactCalendar.default, {
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
  })), /*#__PURE__*/_react.default.createElement(_styles.TimeListWrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.TimeListHeader, null, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, {
    onClick: handleChangeTimeFormat
  }), /*#__PURE__*/_react.default.createElement("span", null, timeFormat === '' ? t('TIME', 'Time') : timeFormat), /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, {
    onClick: handleChangeTimeFormat
  })), /*#__PURE__*/_react.default.createElement(_styles.TimeListContent, null, timeLists && timeLists.filter(function (item) {
    return item.content.includes(timeFormat);
  }).map(function (time, i) {
    return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      key: i,
      color: timeSelected === time.value ? 'primaryContrast' : 'gray',
      onClick: function onClick() {
        return !orderState.loading && handleChangeTime(time.value);
      }
    }, time.content);
  }))))), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, t('CONTINUE', 'Continue')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRight, null))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var MomentControl = function MomentControl(props) {
  var momentProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MomentControlUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MomentOption, momentProps);
};
exports.MomentControl = MomentControl;