"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInformationUI = exports.BusinessInformation = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../../../../../utils");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessInformationUI = function BusinessInformationUI(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _orderingTheme$theme$5, _props$beforeElements, _props$beforeComponen, _business$paymethods, _props$afterComponent, _props$afterElements;

  var business = props.business,
      businessSchedule = props.businessSchedule,
      onClose = props.onClose;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var daysOfWeek = [t('SUNDAY', 'Sunday'), t('MONDAY', 'Monday'), t('TUESDAY', 'Tuesday'), t('WEDNESDAY', 'Wednesday'), t('THURSDAY', 'Thurday'), t('FRIDAY', 'Friday'), t('SATURDAY', 'Saturday')];

  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
      _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
      orderingTheme = _useOrderingTheme2[0];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var showSchedule = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme$ = _orderingTheme$theme.business_view) !== null && _orderingTheme$theme$ !== void 0 && (_orderingTheme$theme$2 = _orderingTheme$theme$.components) !== null && _orderingTheme$theme$2 !== void 0 && (_orderingTheme$theme$3 = _orderingTheme$theme$2.information) !== null && _orderingTheme$theme$3 !== void 0 && (_orderingTheme$theme$4 = _orderingTheme$theme$3.components) !== null && _orderingTheme$theme$4 !== void 0 && (_orderingTheme$theme$5 = _orderingTheme$theme$4.schedule) !== null && _orderingTheme$theme$5 !== void 0 && _orderingTheme$theme$5.hidden);

  var scheduleFormatted = function scheduleFormatted(_ref) {
    var hour = _ref.hour,
        minute = _ref.minute;
    var AmOrPm = hour >= 12 ? 'pm' : 'am';

    var _hour = hour % 12 || 12;

    var checkTime = function checkTime(val) {
      return val < 10 ? "0".concat(val) : val;
    };

    return "".concat(checkTime(_hour), ":").concat(checkTime(minute)).concat(AmOrPm);
  };

  var handleGoToHome = function handleGoToHome() {
    events.emit('go_to_page', {
      page: 'home'
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformationContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onClose(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessTitleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessTitle, null, business === null || business === void 0 ? void 0 : business.name)), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : business.address), ((business === null || business === void 0 ? void 0 : business.cellphone) || (business === null || business === void 0 ? void 0 : business.phone)) && /*#__PURE__*/_react.default.createElement("p", null, (business === null || business === void 0 ? void 0 : business.cellphone) || (business === null || business === void 0 ? void 0 : business.phone)), /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY_TIME', 'Delivery Time'), ": ", (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)), /*#__PURE__*/_react.default.createElement("p", null, t('PICKUP_TIME', 'Pickup Time'), ": ", (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time)), /*#__PURE__*/_react.default.createElement(_styles.ChangeLocation, {
    onClick: function onClick() {
      return handleGoToHome();
    }
  }, t('CHANGE_LOCATION', 'Change location')), business.description && /*#__PURE__*/_react.default.createElement(_styles.Description, null, business.description)), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.AditionalInformationContainer, null, (businessSchedule === null || businessSchedule === void 0 ? void 0 : businessSchedule.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showSchedule && /*#__PURE__*/_react.default.createElement(_styles.ScheduleSection, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('OPENING_TIME', 'Opening time')), /*#__PURE__*/_react.default.createElement(_styles.ScheduleContainer, null, businessSchedule.map(function (schedule, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ScheduleBlock, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("h4", null, daysOfWeek[i]), schedule.enabled ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, scheduleFormatted(schedule.lapses[0].open)), /*#__PURE__*/_react.default.createElement("div", null, "-"), /*#__PURE__*/_react.default.createElement("p", null, scheduleFormatted(schedule.lapses[0].close))) : /*#__PURE__*/_react.default.createElement("p", {
      className: "close"
    }, t('CLOSED', 'Closed')));
  })))), /*#__PURE__*/_react.default.createElement(_styles.PaymethodsAccepted, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('PAYMETHODS_ACEPTED', 'Paymethods accepted')), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : (_business$paymethods = business.paymethods) === null || _business$paymethods === void 0 ? void 0 : _business$paymethods.map(function (_ref2, i) {
    var _business$paymethods2;

    var paymethod = _ref2.paymethod;
    return /*#__PURE__*/_react.default.createElement("span", {
      key: paymethod === null || paymethod === void 0 ? void 0 : paymethod.id
    }, paymethod === null || paymethod === void 0 ? void 0 : paymethod.name, i + 1 !== (business === null || business === void 0 ? void 0 : (_business$paymethods2 = business.paymethods) === null || _business$paymethods2 === void 0 ? void 0 : _business$paymethods2.length) && ', ');
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

exports.BusinessInformationUI = BusinessInformationUI;

var BusinessInformation = function BusinessInformation(props) {
  var googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  };

  var BusinessInformationProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessInformationUI,
    googleMapsControls: googleMapsControls
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessInformation, BusinessInformationProps);
};

exports.BusinessInformation = BusinessInformation;