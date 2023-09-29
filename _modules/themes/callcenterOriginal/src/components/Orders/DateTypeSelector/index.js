"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTypeSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DateTypeSelector = exports.DateTypeSelector = function DateTypeSelector(props) {
  var filterValues = props.filterValues,
    handleChangeDateType = props.handleChangeDateType,
    handleChangeFromDate = props.handleChangeFromDate,
    handleChangeEndDate = props.handleChangeEndDate;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    startDate = _useState2[0],
    setStartDate = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    endDate = _useState4[0],
    setEndDate = _useState4[1];
  var dateTypes = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles.PlaceholderTitle, null, t('SELECT_DATE', 'Select date'))
  }, {
    value: 'today',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('TODAY', 'Today'))
  }, {
    value: 'yesterday',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('YESTERDAY', 'Yesterday'))
  }, {
    value: 'last7',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('LAST_7_DAYS', 'Last 7 dyas'))
  }, {
    value: 'last30',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('LAST_30_DAYS', 'Last 30 days'))
  }, {
    value: 'term',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      isDateOption: true
    }, /*#__PURE__*/_react.default.createElement(_styles.DateContainer, null, /*#__PURE__*/_react.default.createElement("span", null, t('FROM', 'From')), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
      selected: startDate,
      placeholderText: "mm/dd/yyyy",
      className: "startDate",
      isClearable: true,
      onChange: function onChange(date) {
        return _handleChangeFromDate(date);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles.DateContainer, null, /*#__PURE__*/_react.default.createElement("span", null, t('TO', 'To')), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
      selected: endDate,
      minDate: new Date(startDate),
      placeholderText: "mm/dd/yyyy",
      className: "endDate",
      onChange: function onChange(date) {
        return _handleChangeEndDate(date);
      }
    })))
  }];
  var changeDateType = function changeDateType(dateType) {
    handleChangeDateType(dateType);
  };
  var _handleChangeFromDate = function _handleChangeFromDate(date) {
    setStartDate(date);
    if (date !== null) {
      handleChangeFromDate((0, _dayjs.default)(date).format('YYYY-MM-DD 00:00:00'));
    } else {
      handleChangeFromDate(null);
    }
  };
  var _handleChangeEndDate = function _handleChangeEndDate(date) {
    setEndDate(date);
    if (date !== null) {
      handleChangeEndDate((0, _dayjs.default)(date).format('YYYY-MM-DD 23:59:59'));
    } else {
      handleChangeEndDate(null);
    }
  };
  (0, _react.useEffect)(function () {
    if (filterValues.dateType !== 'term') return;
    if (filterValues.deliveryFromDatetime !== null) {
      setStartDate(new Date(filterValues.deliveryFromDatetime));
    }
    if (filterValues.deliveryEndDatetime !== null) {
      setEndDate(new Date(filterValues.deliveryEndDatetime));
    }
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: filterValues.dateType || 'default',
    options: dateTypes,
    onChange: function onChange(dateType) {
      return changeDateType(dateType);
    },
    className: "date-filter-container"
  });
};