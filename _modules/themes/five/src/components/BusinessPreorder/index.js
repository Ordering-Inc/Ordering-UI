"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPreorder = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactRouterDom = require("react-router-dom");
var _moment2 = _interopRequireDefault(require("moment"));
var _styledComponents = require("styled-components");
var _Select = require("../../styles/Select");
var _Buttons = require("../../styles/Buttons");
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _SpinnerLoader = require("../../../../../components/SpinnerLoader");
var _BsCaretLeftFill = _interopRequireDefault(require("@meronex/icons/bs/BsCaretLeftFill"));
var _styles = require("./styles");
var _BusinessMenuList = require("../BusinessMenuList");
var _react2 = require("swiper/react");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
var _utils = require("../../../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_swiper.default.use([_swiper.Navigation]);
var BusinessPreorderUI = function BusinessPreorderUI(props) {
  var _configs$dates_moment, _configs$dates_moment2, _configs$preorder_sta, _theme$images, _theme$images$dummies, _configs$max_days_pre, _configs$max_days_pre2, _configs$max_days_pre3, _orderState$options, _orderState$options$a;
  var business = props.business,
    handleClick = props.handleClick,
    datesList = props.datesList,
    dateSelected = props.dateSelected,
    timeSelected = props.timeSelected,
    handleChangeDate = props.handleChangeDate,
    handleChangeTime = props.handleChangeTime,
    showButton = props.showButton,
    isAsap = props.isAsap,
    handleAsap = props.handleAsap,
    isProfessional = props.isProfessional,
    isDisabled = props.isDisabled,
    maxDays = props.maxDays;
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var theme = (0, _styledComponents.useTheme)();
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useState = (0, _react.useState)('business_hours'),
    _useState2 = _slicedToArray(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    menu = _useState4[0],
    setMenu = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    timeList = _useState6[0],
    setTimeList = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isEnabled = _useState8[0],
    setIsEnabled = _useState8[1];
  var is12Hours = configs === null || configs === void 0 ? void 0 : (_configs$dates_moment = configs.dates_moment_format) === null || _configs$dates_moment === void 0 ? void 0 : (_configs$dates_moment2 = _configs$dates_moment.value) === null || _configs$dates_moment2 === void 0 ? void 0 : _configs$dates_moment2.includes('hh:mm');
  var isPreOrderSetting = (configs === null || configs === void 0 ? void 0 : (_configs$preorder_sta = configs.preorder_status_enabled) === null || _configs$preorder_sta === void 0 ? void 0 : _configs$preorder_sta.value) === '1';
  var preOrderType = [{
    value: 'business_menu',
    content: /*#__PURE__*/_react.default.createElement(_styles.TypeContent, null, t('BUSINESS_MENU', 'Business menu'))
  }, {
    value: 'business_hours',
    content: /*#__PURE__*/_react.default.createElement(_styles.TypeContent, null, t('BUSINESS_HOURS', 'Business hours'))
  }];
  var goToBusinessPage = function goToBusinessPage() {
    handleClick && handleClick(business);
  };
  var validateSelectedDate = function validateSelectedDate(curdate, menu) {
    var day = (0, _moment2.default)(curdate).format('d');
    setIsEnabled(menu.schedule[day].enabled || false);
  };
  var getMomentTime = function getMomentTime(time) {
    var _moment = (0, _moment2.default)("".concat((0, _moment2.default)(dateSelected).format('YYYY-MM-DD'), " ").concat(time), 'YYYY-MM-DD HH:mm').toDate();
    return _moment;
  };
  var isBusyTime = function isBusyTime(professional, selectedMoment) {
    var _professional$schedul, _professional$schedul2, _professional$busy_ti;
    if (!selectedMoment) return false;
    var startDay = (0, _moment2.default)(selectedMoment).utc().format('d');
    var isStartScheduleEnabled = professional === null || professional === void 0 ? void 0 : (_professional$schedul = professional.schedule) === null || _professional$schedul === void 0 ? void 0 : (_professional$schedul2 = _professional$schedul[startDay]) === null || _professional$schedul2 === void 0 ? void 0 : _professional$schedul2.enabled;
    if (!isStartScheduleEnabled) return true;
    if ((professional === null || professional === void 0 ? void 0 : (_professional$busy_ti = professional.busy_times) === null || _professional$busy_ti === void 0 ? void 0 : _professional$busy_ti.length) === 0) return false;
    var busyTimes = professional === null || professional === void 0 ? void 0 : professional.busy_times;
    var valid = busyTimes.some(function (item) {
      return _moment2.default.utc(item === null || item === void 0 ? void 0 : item.start).local().valueOf() <= (0, _moment2.default)(selectedMoment).valueOf() && (0, _moment2.default)(selectedMoment).valueOf() < _moment2.default.utc(item === null || item === void 0 ? void 0 : item.end).local().valueOf();
    });
    return valid;
  };
  var getTimeList = function getTimeList(curdate, menu) {
    validateSelectedDate(curdate, menu);
    var dateParts = curdate.split('-');
    var dateSeleted = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    var times = (0, _utils.getTimes)(dateSeleted, menu === null || menu === void 0 ? void 0 : menu.schedule, is12Hours);
    return times;
  };
  (0, _react.useEffect)(function () {
    var selectedMenu = menu ? menu !== null && menu !== void 0 && menu.use_business_schedule ? business : menu : business;
    var _times = getTimeList(dateSelected, selectedMenu);
    setTimeList(_times);
  }, [dateSelected, menu, business]);
  (0, _react.useEffect)(function () {
    if (type === 'business_hours') setMenu(null);
  }, [type]);
  (0, _react.useEffect)(function () {
    if (pathname.includes('store') || isProfessional) return;
    handleAsap && handleAsap();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessPreorderContainer, null, !isProfessional && /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('PREORDER', 'Preorder')), !isProfessional && /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_200,c_limit')
  }), /*#__PURE__*/_react.default.createElement("p", null, business.name)), !isProfessional && isPreOrderSetting && /*#__PURE__*/_react.default.createElement(_styles.PreorderTypeWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('PREORDER_TYPE', 'Preorder type')), /*#__PURE__*/_react.default.createElement(_styles.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: type,
    options: preOrderType,
    placeholder: t('SELECT_A_TYPE', 'Select a type'),
    onChange: function onChange(value) {
      return setType(value);
    }
  }))), !isProfessional && type === 'business_menu' && /*#__PURE__*/_react.default.createElement(_BusinessMenuList.BusinessMenuList, {
    businessId: business.id,
    setMenu: setMenu
  }), (isPreOrderSetting || isProfessional) && /*#__PURE__*/_react.default.createElement(_styles.OrderTimeWrapper, null, !isProfessional && /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_TIME', 'Order time')), /*#__PURE__*/_react.default.createElement(_styles.DateWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MonthYearLayer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _moment2.default)(dateSelected).format('MMMM, yyyy'))), /*#__PURE__*/_react.default.createElement(_styles.DaysSwiper, {
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
        slidesPerView: (configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre = configs.max_days_preorder) === null || _configs$max_days_pre === void 0 ? void 0 : _configs$max_days_pre.value) < 7 ? configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre2 = configs.max_days_preorder) === null || _configs$max_days_pre2 === void 0 ? void 0 : _configs$max_days_pre2.value : 7,
        spaceBetween: 0
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
    className: "swiper-datelist",
    preventClicksPropagation: false
  }, datesList.slice(0, Number(maxDays || (configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre3 = configs.max_days_preorder) === null || _configs$max_days_pre3 === void 0 ? void 0 : _configs$max_days_pre3.value) || 6, 10)).map(function (date, i) {
    var dateParts = date.split('-');
    var _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    var dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 2);
    var dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate();
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.Day, {
      selected: dateSelected === date,
      onClick: function onClick() {
        return handleChangeDate(date);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.DayName, null, dayName), /*#__PURE__*/_react.default.createElement(_styles.DayNumber, null, dayNumber)));
  })))), /*#__PURE__*/_react.default.createElement(_styles.TimeListWrapper, null, isEnabled && (timeList === null || timeList === void 0 ? void 0 : timeList.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, timeList.map(function (time, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.TimeItem, {
      key: i,
      active: timeSelected === time.value,
      onClick: function onClick() {
        return handleChangeTime(time.value);
      },
      isDisabled: isDisabled,
      isProfessional: isProfessional,
      busyTime: isProfessional && isBusyTime(business, getMomentTime(time.value))
    }, /*#__PURE__*/_react.default.createElement("span", null, time.text));
  })) : /*#__PURE__*/_react.default.createElement(_styles.ClosedBusinessMsg, null, !isProfessional ? t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The business is closed at the moment') : t('PROFESSIONAL_NOT_AVAILABLE', 'Professional is not available at the moment')))), !isPreOrderSetting && !isProfessional && /*#__PURE__*/_react.default.createElement(_styles.ClosedBusinessMsg, null, t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The business is closed at the moment')), showButton && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: goToBusinessPage,
    disabled: isAsap || !(dateSelected && timeSelected)
  }, t('GO_TO_MENU', 'Go to menu'), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null))), (orderState === null || orderState === void 0 ? void 0 : orderState.loading) && /*#__PURE__*/_react.default.createElement(_styles.Layer, {
    nobg: !!isProfessional
  }, (window.location.pathname !== '/search' || (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : _orderState$options$a.location)) && /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      top: windowSize.width <= 768 ? '50%' : '40%',
      position: windowSize.width <= 768 ? 'absolute' : 'sticky',
      height: 'auto'
    }
  })));
};
var BusinessPreorder = function BusinessPreorder(props) {
  var _configs$max_days_pre4;
  var maxDays = props.maxDays;
  var _useConfig3 = (0, _orderingComponents.useConfig)(),
    _useConfig4 = _slicedToArray(_useConfig3, 1),
    configs = _useConfig4[0].configs;
  var limitDays = maxDays !== null && maxDays !== void 0 ? maxDays : parseInt(configs === null || configs === void 0 ? void 0 : (_configs$max_days_pre4 = configs.max_days_preorder) === null || _configs$max_days_pre4 === void 0 ? void 0 : _configs$max_days_pre4.value, 10);
  var currentDate = new Date();
  var time = limitDays > 1 ? currentDate.getTime() + (limitDays - 1) * 24 * 60 * 60 * 1000 : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + 6 * 24 * 60 * 60 * 1000;
  currentDate.setTime(time);
  currentDate.setHours(23);
  currentDate.setMinutes(59);
  var businessPreorderProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPreorderUI,
    maxDate: currentDate
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MomentOption, businessPreorderProps);
};
exports.BusinessPreorder = BusinessPreorder;