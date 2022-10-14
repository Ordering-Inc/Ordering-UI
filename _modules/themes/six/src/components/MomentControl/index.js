"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _orderingComponents = require("ordering-components");

var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));

var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));

var _styles = require("./styles");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _Select = require("../../styles/Select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MomentControlUI = function MomentControlUI(props) {
  var _configs$max_days_pre, _props$beforeElements, _props$beforeComponen, _configs$max_days_pre2, _props$afterComponent, _props$afterElements;

  var isAsap = props.isAsap,
      datesList = props.datesList,
      hoursList = props.hoursList,
      dateSelected = props.dateSelected,
      timeSelected = props.timeSelected,
      handleAsap = props.handleAsap,
      handleChangeDate = props.handleChangeDate,
      handleChangeTime = props.handleChangeTime,
      isCheckout = props.isCheckout;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseTime = _useUtils2[0].parseTime;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var windowSize = (0, _useWindowSize.useWindowSize)();

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var DateOption = datesList.slice(0, Number((configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre = configs.max_days_preorder) === null || _configs$max_days_pre === void 0 ? void 0 : _configs$max_days_pre.value) || 6, 10)).map(function (date, i) {
    var dateParts = date.split('-');

    var _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

    var dayString = _date.toDateString();

    return {
      value: date,
      content: /*#__PURE__*/_react.default.createElement(_styles.OptionItem, {
        key: i,
        selected: dateSelected === date
      }, dayString)
    };
  });
  var TimeOption = hoursList.map(function (hour, i) {
    var _configs$format_time;

    return {
      value: hour.startTime,
      content: /*#__PURE__*/_react.default.createElement(_styles.OptionItem, {
        key: i,
        selected: timeSelected === hour.startTime,
        isLoading: orderState === null || orderState === void 0 ? void 0 : orderState.loading
      }, (configs === null || configs === void 0 ? void 0 : (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12' ? hour.startTime.includes('12') ? "".concat(hour.startTime, "PM") : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
        outputFormat: 'hh:mma'
      }) : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
        outputFormat: 'HH:mm'
      }))
    };
  });

  var Dateplaceholder = /*#__PURE__*/_react.default.createElement(_styles.OptionItem, null, t('SELECT_A_DELIVERY_DATE', 'Select a Delivery Date'));

  var Timeplaceholder = /*#__PURE__*/_react.default.createElement(_styles.OptionItem, null, t('DESIRED_DELIVERY_TIME', 'Desired Delivery Time'));

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showTimeOption = _useState2[0],
      setShowTimeOption = _useState2[1];

  var handleCheckbox = function handleCheckbox() {
    console.log('checkbox click');

    if (showTimeOption) {
      handleAsap();
      setShowTimeOption(false);
    } else {
      setShowTimeOption(true);
    }
  };

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
  }), !isCheckout ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('SELECT_A_DELIVERY_DATE', 'Select a Delivery Date')), /*#__PURE__*/_react.default.createElement(_styles.Days, {
    name: "days"
  }, datesList.slice(0, Number((configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre2 = configs.max_days_preorder) === null || _configs$max_days_pre2 === void 0 ? void 0 : _configs$max_days_pre2.value) || 6, 10)).map(function (date) {
    var dateParts = date.split('-');

    var _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

    var dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 3).toUpperCase();

    var dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate();

    return /*#__PURE__*/_react.default.createElement(_styles.Day, {
      key: dayNumber,
      selected: dateSelected === date,
      onClick: function onClick() {
        return handleChangeDate(date);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.ContentDay, {
      className: "content-day"
    }, /*#__PURE__*/_react.default.createElement(_styles.DayName, null, dayName), /*#__PURE__*/_react.default.createElement(_styles.DayNumber, null, dayNumber)));
  }), /*#__PURE__*/_react.default.createElement(_styles.MiddleLine, null)), /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('DESIRED_DELIVERY_TIME', 'Desired Delivery Time')), /*#__PURE__*/_react.default.createElement(_styles.Hours, {
    name: "hours"
  }, /*#__PURE__*/_react.default.createElement(_styles.Hour, {
    selected: isAsap,
    onClick: function onClick() {
      return !orderState.loading && handleAsap();
    },
    isLoading: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, windowSize.width > 410 ? t('ASAP', 'As soon as possible') : t('ASAP_ABBREVIATION', 'ASAP')), hoursList.map(function (hour, i) {
    var _configs$format_time2;

    return /*#__PURE__*/_react.default.createElement(_styles.Hour, {
      key: i,
      selected: timeSelected === hour.startTime,
      onClick: function onClick() {
        return !orderState.loading && handleChangeTime(hour.startTime);
      },
      isLoading: orderState === null || orderState === void 0 ? void 0 : orderState.loading
    }, (configs === null || configs === void 0 ? void 0 : (_configs$format_time2 = configs.format_time) === null || _configs$format_time2 === void 0 ? void 0 : _configs$format_time2.value) === '12' ? hour.startTime.includes('12') ? "".concat(hour.startTime, "PM") : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
      outputFormat: 'hh:mma'
    }) : parseTime((0, _moment.default)(hour.startTime, 'HH:mm'), {
      outputFormat: 'HH:mm'
    }));
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CheckOutPageSelectTimePicker, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxItem, {
    className: "asap-select"
  }, /*#__PURE__*/_react.default.createElement("span", null, isAsap && !showTimeOption ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_styles.AsapLabel, {
    onClick: handleCheckbox
  }, windowSize.width > 410 ? t('ASAP', 'As soon as possible') : t('ASAP_ABBREVIATION', 'ASAP'))), showTimeOption && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SubTitle, null, t('PREORDER', 'Preorder')), /*#__PURE__*/_react.default.createElement(_styles.PreorderPicker, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    placeholder: Dateplaceholder,
    options: DateOption,
    onChange: function onChange(date) {
      return handleChangeDate(date);
    },
    isFullWidth: true,
    defaultValue: dateSelected
  }), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    placeholder: Timeplaceholder,
    options: TimeOption,
    isFullWidth: true,
    onChange: function onChange(time) {
      return handleChangeTime(time);
    },
    defaultValue: timeSelected
  }))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
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