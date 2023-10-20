"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponents = require("ordering-components");
require("react-datepicker/dist/react-datepicker.css");
var _BsCaretLeftFill = _interopRequireDefault(require("@meronex/icons/bs/BsCaretLeftFill"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _CustomLayout = require("./Layouts/CustomLayout");
var _styles = require("./styles");
var _CgRadioCheck = _interopRequireDefault(require("@meronex/icons/cg/CgRadioCheck"));
var _Buttons = require("../../styles/Buttons");
var _react2 = require("swiper/react");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
var _utils = require("../../../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
_swiper.default.use([_swiper.Navigation]);
var MomentControlUI = function MomentControlUI(props) {
  var _configs$general_hour, _datesList$slice, _configs$max_days_pre, _configs$max_days_pre2, _configs$max_days_pre3, _configs$max_days_pre4, _configs$max_days_pre5, _configs$max_days_pre6;
  var isAsap = props.isAsap,
    datesList = props.datesList,
    hoursList = props.hoursList,
    dateSelected = props.dateSelected,
    timeSelected = props.timeSelected,
    handleAsap = props.handleAsap,
    handleChangeDate = props.handleChangeDate,
    handleChangeTime = props.handleChangeTime,
    onClose = props.onClose,
    isAppoint = props.isAppoint,
    cateringPreorder = props.cateringPreorder,
    isCart = props.isCart,
    preorderLeadTime = props.preorderLeadTime,
    business = props.business,
    getActualSchedule = props.getActualSchedule,
    preorderMaximumDays = props.preorderMaximumDays,
    preorderMinimumDays = props.preorderMinimumDays;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var is12hours = configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 || (_configs$general_hour = _configs$general_hour.value) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.includes('hh:mm');
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseTime = _useUtils2[0].parseTime;
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isASP = _useState2[0],
    setIsASP = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    timeList = _useState4[0],
    setTimeList = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    scheduleList = _useState6[0],
    setScheduleList = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    isEnabled = _useState8[0],
    setIsEnabled = _useState8[1];
  var handleCheckBoxChange = function handleCheckBoxChange(index) {
    if (index) {
      !orderState.loading && handleAsap();
      setIsASP(true);
    } else setIsASP(false);
  };
  var validateSelectedDate = function validateSelectedDate(curdate, schedule) {
    var day = (0, _moment.default)(curdate).format('d');
    setIsEnabled(schedule[day].enabled);
  };
  var getTimes = function getTimes(curdate, schedule) {
    var _curdate$split;
    validateSelectedDate(curdate, schedule);
    var dateParts = curdate === null || curdate === void 0 || (_curdate$split = curdate.split) === null || _curdate$split === void 0 ? void 0 : _curdate$split.call(curdate, '-');
    var dateSeleted = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    var times = (0, _utils.getTimes)(dateSeleted, schedule, is12hours);
    return times;
  };
  var setLocalMoment = function setLocalMoment() {
    _moment.default.updateLocale('custom', {
      months: [t('MONTH1', 'January'), t('MONTH2', 'February'), t('MONTH3', 'March'), t('MONTH4', 'April'), t('MONTH5', 'May'), t('MONTH6', 'June'), t('MONTH7', 'July'), t('MONTH8', 'August'), t('MONTH9', 'September'), t('MONTH10', 'October'), t('MONTH11', 'November'), t('MONTH12', 'December')],
      monthsShort: [t('MONTHSHORT1', 'Jan'), t('MONTHSHORT2', 'Feb'), t('MONTHSHORT3', 'Mar'), t('MONTHSHORT4', 'Apr'), t('MONTHSHORT5', 'May'), t('MONTHSHORT6', 'Jun'), t('MONTHSHORT7', 'Jul'), t('MONTHSHORT8', 'Aug'), t('MONTHSHORT9', 'Sep'), t('MONTHSHORT10', 'Oct'), t('MONTHSHORT11', 'Nov'), t('MONTHSHORT12', 'Dec')],
      weekdays: [t('DAY7', 'Sunday'), t('DAY1', 'Monday'), t('DAY2', 'Tuesday'), t('DAY3', 'Wednesday'), t('DAY4', 'Thursday'), t('DAY5', 'Friday'), t('DAY6', 'Saturday')],
      weekdaysShort: [t('DAYSHORT7', 'Sun'), t('DAYSHORT1', 'Mon'), t('DAYSHORT2', 'Tue'), t('DAYSHORT3', 'Wed'), t('DAYSHORT4', 'Thu'), t('DAYSHORT5', 'Fri'), t('DAYSHORT6', 'Sat')],
      weekdaysMin: [t('DAYMIN7', 'Su'), t('DAYMIN1', 'Mo'), t('DAYMIN2', 'Tu'), t('DAYMIN3', 'We'), t('DAYMIN4', 'Th'), t('DAYMIN5', 'Fr'), t('DAYMIN6', 'Sa')],
      meridiem: function meridiem(hours) {
        return hours < 12 ? t('AM', 'AM') : t('PM', 'PM');
      }
    });
  };
  (0, _react.useEffect)(function () {
    var _timeLists = [];
    if (!scheduleList || cateringPreorder) {
      var _Object$keys, _Object$keys2;
      var schedule = business && ((_Object$keys = Object.keys(business || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0 && getActualSchedule();
      if (!schedule && cateringPreorder && ((_Object$keys2 = Object.keys(business)) === null || _Object$keys2 === void 0 ? void 0 : _Object$keys2.length) > 0) {
        setIsEnabled(false);
        return;
      }
      _timeLists = hoursList.filter(function (hour) {
        var _Object$keys3, _schedule$lapses;
        return (((_Object$keys3 = Object.keys(business || {})) === null || _Object$keys3 === void 0 ? void 0 : _Object$keys3.length) === 0 || (schedule === null || schedule === void 0 || (_schedule$lapses = schedule.lapses) === null || _schedule$lapses === void 0 ? void 0 : _schedule$lapses.some(function (lapse) {
          return (0, _moment.default)(dateSelected + " ".concat(hour.startTime)) >= (0, _moment.default)(dateSelected + " ".concat(lapse.open.hour, ":").concat(lapse.open.minute)).add(preorderLeadTime, 'minutes') && (0, _moment.default)(dateSelected + " ".concat(hour.endTime)) <= (0, _moment.default)(dateSelected + " ".concat(lapse.close.hour, ":").concat(lapse.close.minute));
        }))) && (0, _moment.default)(dateSelected + " ".concat(hour.startTime)) < (0, _moment.default)(dateSelected + " ".concat(hour.endTime)) && ((0, _moment.default)().add(preorderLeadTime, 'minutes') < (0, _moment.default)(dateSelected + " ".concat(hour.startTime)) || !cateringPreorder);
      }).map(function (hour) {
        return {
          value: hour.startTime,
          text: is12hours ? hour.startTime.includes('12') ? "".concat(hour.startTime, "PM") : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
            outputFormat: 'hh:mma'
          }) : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
            outputFormat: 'HH:mm'
          }),
          endText: is12hours ? hour.endTime.includes('12') ? "".concat(hour.endTime, "PM") : parseTime((0, _moment.default)(hour.endTime, 'HH:mm'), {
            outputFormat: 'hh:mma'
          }) : parseTime((0, _moment.default)(hour.endTime, 'HH:mm'), {
            outputFormat: 'HH:mm'
          })
        };
      });
      setIsEnabled(true);
    } else {
      _timeLists = getTimes(dateSelected, scheduleList);
    }
    setTimeList(_timeLists);
  }, [dateSelected, hoursList, scheduleList, cateringPreorder, JSON.stringify(business)]);
  (0, _react.useEffect)(function () {
    handleCheckBoxChange(isAsap && (preorderMinimumDays === 0 && preorderLeadTime === 0 || !cateringPreorder));
  }, [isAsap]);
  (0, _react.useEffect)(function () {
    if ((!pathname.includes('store') || isCart) && !props.business) {
      setScheduleList(null);
      return;
    }
    var schedules = JSON.parse(window.localStorage.getItem('business_schedule'));
    setScheduleList(schedules);
  }, [pathname]);
  (0, _react.useEffect)(function () {
    setLocalMoment();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "moment_control"
  }, !isAppoint && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCart && /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('WHEN_DO_WE_DELIVERY', 'When do we delivery?')), (preorderMinimumDays === 0 && preorderLeadTime === 0 || !cateringPreorder) && /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
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
  }, isASP ? /*#__PURE__*/_react.default.createElement(_CgRadioCheck.default, null) : /*#__PURE__*/_react.default.createElement(_styles.CheckedIcon, null), /*#__PURE__*/_react.default.createElement("span", null, t('SCHEDULE_FOR_LATER', 'Schedule for later')))), (!isASP || isAppoint) && (!props.isCustomLayout ? /*#__PURE__*/_react.default.createElement(_styles.OrderTimeWrapper, null, !isAppoint && !isCart && /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_TIME', 'Order time')), /*#__PURE__*/_react.default.createElement(_styles.DateWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MonthYearLayer, null, /*#__PURE__*/_react.default.createElement("span", null, ((_datesList$slice = datesList.slice(cateringPreorder && preorderMinimumDays || 0, Number(cateringPreorder ? preorderMaximumDays : (_configs$max_days_pre = configs === null || configs === void 0 || (_configs$max_days_pre2 = configs.max_days_preorder) === null || _configs$max_days_pre2 === void 0 ? void 0 : _configs$max_days_pre2.value) !== null && _configs$max_days_pre !== void 0 ? _configs$max_days_pre : 6, 10))) === null || _datesList$slice === void 0 ? void 0 : _datesList$slice.length) === 0 ? (0, _moment.default)(dateSelected).format('Do MMMM, yyyy') : (0, _moment.default)(dateSelected).format('MMMM, yyyy'))), /*#__PURE__*/_react.default.createElement(_styles.DaysSwiper, {
    left: /*#__PURE__*/_react.default.createElement(_BsCaretLeftFill.default, null)
  }, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    spaceBetween: 0,
    navigation: true,
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      400: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      550: {
        slidesPerView: 6,
        spaceBetween: 0
      },
      769: {
        slidesPerView: (configs === null || configs === void 0 || (_configs$max_days_pre3 = configs.max_days_preorder) === null || _configs$max_days_pre3 === void 0 ? void 0 : _configs$max_days_pre3.value) < 7 ? configs === null || configs === void 0 || (_configs$max_days_pre4 = configs.max_days_preorder) === null || _configs$max_days_pre4 === void 0 ? void 0 : _configs$max_days_pre4.value : 7,
        spaceBetween: 0
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
    className: "swiper-datelist",
    preventClicksPropagation: false
  }, datesList.slice(cateringPreorder && preorderMinimumDays || 0, Number(cateringPreorder ? preorderMaximumDays : (_configs$max_days_pre5 = configs === null || configs === void 0 || (_configs$max_days_pre6 = configs.max_days_preorder) === null || _configs$max_days_pre6 === void 0 ? void 0 : _configs$max_days_pre6.value) !== null && _configs$max_days_pre5 !== void 0 ? _configs$max_days_pre5 : 6, 10)).map(function (date) {
    var dateParts = date.split('-');
    var _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    var dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 2);
    var dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate();
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: dayNumber
    }, /*#__PURE__*/_react.default.createElement(_styles.Day, {
      selected: dateSelected === date,
      onClick: function onClick() {
        return handleChangeDate(date);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.DayName, {
      isAppoint: isAppoint
    }, dayName), /*#__PURE__*/_react.default.createElement(_styles.DayNumber, {
      isAppoint: isAppoint
    }, dayNumber)));
  })))), /*#__PURE__*/_react.default.createElement(_styles.TimeListWrapper, null, isEnabled && (timeList === null || timeList === void 0 ? void 0 : timeList.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, timeList.map(function (time, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.TimeItem, {
      key: i,
      active: timeSelected === time.value,
      onClick: function onClick() {
        return handleChangeTime(time.value);
      },
      isAppoint: isAppoint,
      cateringPreorder: cateringPreorder
    }, /*#__PURE__*/_react.default.createElement("span", null, cateringPreorder && /*#__PURE__*/_react.default.createElement(_styles.CheckIcon, null, timeSelected === time.value ? /*#__PURE__*/_react.default.createElement(_styles.CheckedIcon, {
      cateringPreorder: cateringPreorder
    }) : /*#__PURE__*/_react.default.createElement(_CgRadioCheck.default, null)), /*#__PURE__*/_react.default.createElement("p", null, time.text, " ", cateringPreorder && "- ".concat(time.endText))));
  })) : /*#__PURE__*/_react.default.createElement(_styles.ClosedBusinessMsg, null, !business ? t('ERROR_SHEDULE_UNAVAILABLE', 'There are no schedules for this date') : t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The business is closed at the moment')))) : /*#__PURE__*/_react.default.createElement(_CustomLayout.CustomLayout, {
    handleChangeDate: handleChangeDate,
    datesList: datesList,
    hoursList: hoursList,
    isEnabled: isEnabled,
    timeList: timeList,
    timeSelected: timeSelected,
    handleChangeTime: handleChangeTime
  })), !isAppoint && !isCart && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onClose();
    },
    disabled: !isASP ? !timeSelected : false
  }, /*#__PURE__*/_react.default.createElement("span", null, t('CONTINUE', 'Continue')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRight, null))));
};
var MomentControl = exports.MomentControl = function MomentControl(props) {
  var momentProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MomentControlUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MomentOption, momentProps);
};