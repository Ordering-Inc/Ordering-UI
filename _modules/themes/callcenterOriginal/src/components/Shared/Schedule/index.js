"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schedule = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Confirm = require("../Confirm");
var _ScheduleCopyTimes = require("../ScheduleCopyTimes");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ScheduleUI = function ScheduleUI(props) {
  var _configs$format_time;
  var scheduleState = props.scheduleState,
    isConflict = props.isConflict,
    setIsConflict = props.setIsConflict,
    isTimeChangeError = props.isTimeChangeError,
    addScheduleTime = props.addScheduleTime,
    openAddSchedule = props.openAddSchedule,
    setIsTimeChangeError = props.setIsTimeChangeError,
    handleEnabledSchedule = props.handleEnabledSchedule,
    handleChangeScheduleTime = props.handleChangeScheduleTime,
    handleDeleteSchedule = props.handleDeleteSchedule,
    handleOpenAddSchedule = props.handleOpenAddSchedule,
    handleChangeAddScheduleTime = props.handleChangeAddScheduleTime,
    handleAddSchedule = props.handleAddSchedule,
    selectedCopyDays = props.selectedCopyDays,
    cleanSelectedCopyDays = props.cleanSelectedCopyDays,
    handleSelectCopyTimes = props.handleSelectCopyTimes,
    handleApplyScheduleCopyTimes = props.handleApplyScheduleCopyTimes,
    isShowDate = props.isShowDate;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var is12Hours = ((_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12';
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    scheduleOptions = _useState6[0],
    setScheduleOptions = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    isOpenCopytimes = _useState8[0],
    setIsOpenCopytimes = _useState8[1];
  var daysOfWeek = [t('SUNDAY_ABBREVIATION', 'Sun'), t('MONDAY_ABBREVIATION', 'Mon'), t('TUESDAY_ABBREVIATION', 'Tue'), t('WEDNESDAY_ABBREVIATION', 'Wed'), t('THURSDAY_ABBREVIATION', 'Thu'), t('FRIDAY_ABBREVIATION', 'Fri'), t('SATURDAY_ABBREVIATION', 'Sat')];
  var closeAlert = function closeAlert() {
    setIsConflict(false);
    setIsTimeChangeError(false);
    setAlertState({
      open: false,
      content: []
    });
  };
  var onClickDelete = function onClickDelete(daysOfWeekIndex, index) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('SCHEDULE', 'Schedule')),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteSchedule(daysOfWeekIndex, index);
      }
    });
  };
  var getNextDate = function getNextDate(x) {
    var now = new Date();
    now.setDate(now.getDate() + (x + (7 - now.getDay())) % 7);
    return now;
  };
  (0, _react.useEffect)(function () {
    if (!isTimeChangeError) return;
    setAlertState({
      open: true,
      content: [t('END_TIME_LATER', 'Choose an end time later than the start time.')]
    });
  }, [isTimeChangeError]);
  (0, _react.useEffect)(function () {
    if (!isConflict) return;
    setAlertState({
      open: true,
      content: [t('SCHEDULE_CONFLICT', 'There is an schedule conflict')]
    });
  }, [isConflict]);
  (0, _react.useEffect)(function () {
    var _scheduleOptions = [];
    for (var hour = 0; hour < 24; hour++) {
      var hh = '';
      var meridian = '';
      if (!is12Hours) hh = hour < 10 ? "0".concat(hour) : hour;else {
        if (hour === 0) {
          hh = '12';
          meridian = ' ' + t('AM', 'AM');
        } else if (hour > 0 && hour < 12) {
          hh = hour < 10 ? '0' + hour : hour;
          meridian = ' ' + t('AM', 'AM');
        } else if (hour === 12) {
          hh = '12';
          meridian = ' ' + t('PM', 'PM');
        } else {
          hh = hour - 12 < 10 ? '0' + (hour - 12) : hour - 12;
          meridian = ' ' + t('PM', 'PM');
        }
      }
      for (var min = 0; min < 4; min++) {
        _scheduleOptions.push({
          value: hour + ':' + min * 15,
          content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, is12Hours ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, hh, ":", min === 0 ? '00' : min * 15, " ", meridian) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, hh, " : ", min === 0 ? '00' : min * 15))
        });
      }
    }
    _scheduleOptions.push({
      value: '23:59',
      content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, is12Hours ? '11:59 PM' : '23 : 59')
    });
    setScheduleOptions(_scheduleOptions);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ScheduleContainer, null, scheduleState.map(function (schedule, daysOfWeekIndex) {
    var _addScheduleTime$open, _addScheduleTime$open2, _addScheduleTime$open3, _addScheduleTime$open4, _addScheduleTime$open5, _addScheduleTime$open6, _addScheduleTime$clos, _addScheduleTime$clos2, _addScheduleTime$clos3, _addScheduleTime$clos4, _addScheduleTime$clos5, _addScheduleTime$clos6;
    return /*#__PURE__*/_react.default.createElement(_styles2.TimeScheduleItemContainer, {
      key: daysOfWeekIndex
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: schedule === null || schedule === void 0 ? void 0 : schedule.enabled,
      onChange: function onChange(e) {
        return handleEnabledSchedule(daysOfWeekIndex, e.target.checked);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles2.DateWrapper, null, /*#__PURE__*/_react.default.createElement("h4", null, daysOfWeek[daysOfWeekIndex]), isShowDate && /*#__PURE__*/_react.default.createElement("h4", {
      className: "date"
    }, parseDate(getNextDate(daysOfWeekIndex), {
      outputFormat: 'YYYY-MM-DD'
    })))), schedule !== null && schedule !== void 0 && schedule.enabled ? /*#__PURE__*/_react.default.createElement("div", null, schedule === null || schedule === void 0 ? void 0 : schedule.lapses.map(function (lapse, index) {
      var _lapse$open, _lapse$open2, _lapse$open3, _lapse$open4, _lapse$open5, _lapse$open6, _lapse$close, _lapse$close2, _lapse$close3, _lapse$close4, _lapse$close5, _lapse$close6;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
        noSelected: true,
        options: scheduleOptions,
        defaultValue: (lapse === null || lapse === void 0 || (_lapse$open = lapse.open) === null || _lapse$open === void 0 ? void 0 : _lapse$open.hour) === 23 && (lapse === null || lapse === void 0 || (_lapse$open2 = lapse.open) === null || _lapse$open2 === void 0 ? void 0 : _lapse$open2.minute) === 59 ? "".concat(lapse === null || lapse === void 0 || (_lapse$open3 = lapse.open) === null || _lapse$open3 === void 0 ? void 0 : _lapse$open3.hour, ":").concat(lapse === null || lapse === void 0 || (_lapse$open4 = lapse.open) === null || _lapse$open4 === void 0 ? void 0 : _lapse$open4.minute) : "".concat(lapse === null || lapse === void 0 || (_lapse$open5 = lapse.open) === null || _lapse$open5 === void 0 ? void 0 : _lapse$open5.hour, ":").concat(parseInt((lapse === null || lapse === void 0 || (_lapse$open6 = lapse.open) === null || _lapse$open6 === void 0 ? void 0 : _lapse$open6.minute) / 15) * 15),
        onChange: function onChange(val) {
          return handleChangeScheduleTime(val, daysOfWeekIndex, index, true);
        },
        optionInnerMaxHeight: "300px"
      })), /*#__PURE__*/_react.default.createElement(_styles2.SplitLine, null), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
        noSelected: true,
        options: scheduleOptions,
        defaultValue: (lapse === null || lapse === void 0 || (_lapse$close = lapse.close) === null || _lapse$close === void 0 ? void 0 : _lapse$close.hour) === 23 && (lapse === null || lapse === void 0 || (_lapse$close2 = lapse.close) === null || _lapse$close2 === void 0 ? void 0 : _lapse$close2.minute) === 59 ? "".concat(lapse === null || lapse === void 0 || (_lapse$close3 = lapse.close) === null || _lapse$close3 === void 0 ? void 0 : _lapse$close3.hour, ":").concat(lapse === null || lapse === void 0 || (_lapse$close4 = lapse.close) === null || _lapse$close4 === void 0 ? void 0 : _lapse$close4.minute) : "".concat(lapse === null || lapse === void 0 || (_lapse$close5 = lapse.close) === null || _lapse$close5 === void 0 ? void 0 : _lapse$close5.hour, ":").concat(parseInt((lapse === null || lapse === void 0 || (_lapse$close6 = lapse.close) === null || _lapse$close6 === void 0 ? void 0 : _lapse$close6.minute) / 15) * 15),
        onChange: function onChange(val) {
          return handleChangeScheduleTime(val, daysOfWeekIndex, index, false);
        },
        optionInnerMaxHeight: "300px"
      })), /*#__PURE__*/_react.default.createElement(_styles2.TrashIconWrapper, {
        isHide: (schedule === null || schedule === void 0 ? void 0 : schedule.lapses.length) <= 1
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, {
        onClick: function onClick() {
          return onClickDelete(daysOfWeekIndex, index);
        }
      })));
    }), openAddSchedule[daysOfWeekIndex] && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
      noSelected: true,
      options: scheduleOptions,
      defaultValue: (addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$open = addScheduleTime.open) === null || _addScheduleTime$open === void 0 ? void 0 : _addScheduleTime$open.hour) === 23 && (addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$open2 = addScheduleTime.open) === null || _addScheduleTime$open2 === void 0 ? void 0 : _addScheduleTime$open2.minute) === 59 ? "".concat(addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$open3 = addScheduleTime.open) === null || _addScheduleTime$open3 === void 0 ? void 0 : _addScheduleTime$open3.hour, ":").concat(addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$open4 = addScheduleTime.open) === null || _addScheduleTime$open4 === void 0 ? void 0 : _addScheduleTime$open4.minute) : "".concat(addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$open5 = addScheduleTime.open) === null || _addScheduleTime$open5 === void 0 ? void 0 : _addScheduleTime$open5.hour, ":").concat(parseInt((addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$open6 = addScheduleTime.open) === null || _addScheduleTime$open6 === void 0 ? void 0 : _addScheduleTime$open6.minute) / 15) * 15),
      optionInnerMaxHeight: "300px",
      onChange: function onChange(val) {
        return handleChangeAddScheduleTime(val, true);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.SplitLine, null), /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SecondSelect, {
      noSelected: true,
      options: scheduleOptions,
      defaultValue: (addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$clos = addScheduleTime.close) === null || _addScheduleTime$clos === void 0 ? void 0 : _addScheduleTime$clos.hour) === 23 && (addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$clos2 = addScheduleTime.close) === null || _addScheduleTime$clos2 === void 0 ? void 0 : _addScheduleTime$clos2.minute) === 59 ? "".concat(addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$clos3 = addScheduleTime.close) === null || _addScheduleTime$clos3 === void 0 ? void 0 : _addScheduleTime$clos3.hour, ":").concat(addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$clos4 = addScheduleTime.close) === null || _addScheduleTime$clos4 === void 0 ? void 0 : _addScheduleTime$clos4.minute) : "".concat(addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$clos5 = addScheduleTime.close) === null || _addScheduleTime$clos5 === void 0 ? void 0 : _addScheduleTime$clos5.hour, ":").concat(parseInt((addScheduleTime === null || addScheduleTime === void 0 || (_addScheduleTime$clos6 = addScheduleTime.close) === null || _addScheduleTime$clos6 === void 0 ? void 0 : _addScheduleTime$clos6.minute) / 15) * 15),
      optionInnerMaxHeight: "300px",
      onChange: function onChange(val) {
        return handleChangeAddScheduleTime(val, false);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.AddScheduleIconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircleFill, {
      onClick: function onClick() {
        return handleAddSchedule(daysOfWeekIndex);
      }
    }), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.DashCircleFill, {
      onClick: function onClick() {
        return handleOpenAddSchedule(null);
      }
    })))) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('UNAVAILABLE', 'Unavailable'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, {
      isHide: !(schedule !== null && schedule !== void 0 && schedule.enabled)
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusSquare, {
      onClick: function onClick() {
        return handleOpenAddSchedule(daysOfWeekIndex);
      }
    })), /*#__PURE__*/_react.default.createElement(_ScheduleCopyTimes.ScheduleCopyTimes, {
      disabled: !(schedule !== null && schedule !== void 0 && schedule.enabled),
      cleanSelectedCopyDays: cleanSelectedCopyDays,
      open: isOpenCopytimes === daysOfWeekIndex,
      daysOfWeekIndex: daysOfWeekIndex,
      onClick: setIsOpenCopytimes,
      onClose: function onClose() {
        return setIsOpenCopytimes(null);
      },
      selectedCopyDays: selectedCopyDays,
      handleSelectDays: function handleSelectDays(value) {
        return handleSelectCopyTimes(value);
      },
      handleApplyScheduleCopyTimes: handleApplyScheduleCopyTimes
    })));
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var Schedule = function Schedule(props) {
  var scheduleProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ScheduleUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.Schedule, scheduleProps);
};
exports.Schedule = Schedule;