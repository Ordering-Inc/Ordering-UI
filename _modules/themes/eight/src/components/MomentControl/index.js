"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _orderingComponents = require("ordering-components");
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var _Select = require("../../styles/Select");
var _styles = require("./styles");
var _CgRadioCheck = _interopRequireDefault(require("@meronex/icons/cg/CgRadioCheck"));
var _RiRadioButtonFill = _interopRequireDefault(require("@meronex/icons/ri/RiRadioButtonFill"));
var _BiTimeFive = _interopRequireDefault(require("@meronex/icons/bi/BiTimeFive"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MomentControlUI = function MomentControlUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var isAsap = props.isAsap,
    datesList = props.datesList,
    hoursList = props.hoursList,
    dateSelected = props.dateSelected,
    timeSelected = props.timeSelected,
    handleAsap = props.handleAsap,
    handleChangeDate = props.handleChangeDate,
    handleChangeTime = props.handleChangeTime;
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
  var _useState7 = (0, _react.useState)(isAsap),
    _useState8 = _slicedToArray(_useState7, 2),
    isASP = _useState8[0],
    setIsASP = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    timeLists = _useState10[0],
    setTimeLists = _useState10[1];
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
  var getDateValue = function getDateValue(date) {
    var dateFormat = new Date(date);
    return dateFormat.getMonth() + '/' + dateFormat.getDate() + '/' + dateFormat.getFullYear();
  };
  (0, _react.useEffect)(function () {
    if ((datesList === null || datesList === void 0 ? void 0 : datesList.length) > 0) {
      var _configs$max_days_pre;
      var _datesList = datesList.slice(0, Number((configs === null || configs === void 0 || (_configs$max_days_pre = configs.max_days_preorder) === null || _configs$max_days_pre === void 0 ? void 0 : _configs$max_days_pre.value) || 6, 10));
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
        var _configs$format_time;
        return {
          value: hour.startTime,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_BiTimeFive.default, null), /*#__PURE__*/_react.default.createElement("span", null, (configs === null || configs === void 0 || (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12' ? hour.startTime.includes('12') ? "".concat(hour.startTime, "PM") : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
            outputFormat: 'hh:mma'
          }) : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
            outputFormat: 'HH:mm'
          })))
        };
      });
      setTimeLists(_timeLists);
    }
  }, [hoursList]);
  return /*#__PURE__*/_react.default.createElement(_styles.MomentControlContainer, {
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
  }, isASP ? /*#__PURE__*/_react.default.createElement(_RiRadioButtonFill.default, null) : /*#__PURE__*/_react.default.createElement(_CgRadioCheck.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('CHECKOUT_ASAP', 'ASAP'), " (", (0, _moment.default)(new Date()).format('LLLL'), " - ", t('DELIVERY_TIME', 'delivery time'), ")")), /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
    highlight: !isASP,
    onClick: function onClick() {
      return handleCheckBoxChange(null);
    }
  }, isASP ? /*#__PURE__*/_react.default.createElement(_CgRadioCheck.default, null) : /*#__PURE__*/_react.default.createElement(_RiRadioButtonFill.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('SCHEDULE_FOR_LATER', 'Schedule for later'))), !isASP && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DatePickerWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DatePickerInput, null, getDateValue(value)), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: value,
    onChange: function onChange(date) {
      return onDateChange(date);
    },
    minDate: minDate,
    maxDate: maxDate,
    monthsShown: 2,
    inline: true
  })), /*#__PURE__*/_react.default.createElement(_styles.HourListWrapper, {
    isLoading: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: timeLists,
    defaultValue: timeSelected,
    onChange: function onChange(startTime) {
      return !orderState.loading && handleChangeTime(startTime);
    },
    placeholder: t('SELECT_TIME', 'Select a time')
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var MomentControl = exports.MomentControl = function MomentControl(props) {
  var momentProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MomentControlUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MomentOption, momentProps);
};