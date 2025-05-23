"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("swiper/react");
var _nanoid = require("nanoid");
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Confirm = require("../Confirm");
var _Modal = require("../Modal");
var _LoginForm = require("../LoginForm");
var _SignUpForm = require("../SignUpForm");
var _ForgotPasswordForm = require("../ForgotPasswordForm");
var _styledComponents = require("styled-components");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _BsCaretLeftFill = _interopRequireDefault(require("@meronex/icons/bs/BsCaretLeftFill"));
var _Buttons = require("../../styles/Buttons");
var _moment2 = _interopRequireDefault(require("moment"));
var _utils = require("../../../../../utils");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_swiper.default.use([_swiper.Navigation]);
var maxDate = 40;
var ServiceFormUI = function ServiceFormUI(props) {
  var _configs$guest_checko, _orderState$options, _configs$allowed_orde, _orderState$options2, _configs$format_time, _professionalListStat3, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7;
  var productObject = props.productObject,
    professionalSelected = props.professionalSelected,
    handleSave = props.handleSave,
    isSoldOut = props.isSoldOut,
    maxProductQuantity = props.maxProductQuantity,
    productCart = props.productCart,
    isCartProduct = props.isCartProduct,
    professionalListState = props.professionalListState,
    handleCreateGuestUser = props.handleCreateGuestUser,
    actionStatus = props.actionStatus;
  var product = productObject.product,
    loading = productObject.loading,
    error = productObject.error;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDate = _useUtils2$.parseDate;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    auth = _useSession2[0].auth,
    login = _useSession2[1].login;
  var _useState = (0, _react.useState)('login'),
    _useState2 = _slicedToArray(_useState, 2),
    modalPageToShow = _useState2[0],
    setModalPageToShow = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalIsOpen = _useState4[0],
    setModalIsOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isDropDown = _useState6[0],
    setIsDropDown = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    currentProfessional = _useState8[0],
    setCurrentProfessional = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    timeList = _useState0[0],
    setTimeList = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    timeSelected = _useState10[0],
    setTimeSelected = _useState10[1];
  var _useState11 = (0, _react.useState)(new Date()),
    _useState12 = _slicedToArray(_useState11, 2),
    selectDate = _useState12[0],
    setSelectedDate = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isEnabled = _useState14[0],
    setIsEnabled = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    datesList = _useState16[0],
    setDatesList = _useState16[1];
  var guestCheckoutEnabled = (configs === null || configs === void 0 || (_configs$guest_checko = configs.guest_checkout_enabled) === null || _configs$guest_checko === void 0 ? void 0 : _configs$guest_checko.value) === '1';
  var orderTypeEnabled = !_utils.orderTypeList[(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) - 1] || (configs === null || configs === void 0 || (_configs$allowed_orde = configs.allowed_order_types_guest_checkout) === null || _configs$allowed_orde === void 0 || (_configs$allowed_orde = _configs$allowed_orde.value) === null || _configs$allowed_orde === void 0 ? void 0 : _configs$allowed_orde.includes(_utils.orderTypeList[(orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) - 1]));
  var dropDownRef = (0, _react.useRef)();
  var is12Hours = (configs === null || configs === void 0 || (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12';
  var closeModal = function closeModal() {
    setModalIsOpen(false);
    setModalPageToShow('login');
  };
  var handleUpdateGuest = function handleUpdateGuest() {
    var guestToken = (0, _nanoid.nanoid)();
    if (guestToken) handleCreateGuestUser({
      guest_token: guestToken
    });
  };
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) {
      closeModal();
    }
  };
  var handleCustomModalClick = function handleCustomModalClick(e, _ref) {
    var page = _ref.page;
    e.preventDefault();
    setModalPageToShow(page);
  };
  var handleSuccessSignup = function handleSuccessSignup(user) {
    var _user$session;
    login({
      user: user,
      token: user === null || user === void 0 || (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
    closeModal();
  };
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    gallery = _useState18[0],
    setGallery = _useState18[1];
  var _useState19 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    alertState = _useState20[0],
    setAlertState = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    dateSelected = _useState22[0],
    setDateSelected = _useState22[1];
  var handleAddProduct = function handleAddProduct() {
    if (!(currentProfessional !== null && currentProfessional !== void 0 && currentProfessional.id)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_PROFESSIONAL_REQUIRED', 'The field professional is required')]
      });
      return;
    }
    if (!dateSelected) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_SCHEDULE_REQUIRED', 'The field schedule is required')]
      });
      return;
    }
    var values = {
      serviceTime: (0, _moment2.default)(dateSelected).utc().format('YYYY-MM-DD HH:mm:00'),
      professional: currentProfessional
    };
    handleSave(values);
  };
  var getMomentTime = function getMomentTime(time) {
    var _moment = (0, _moment2.default)("".concat((0, _moment2.default)(selectDate).format('YYYY-MM-DD'), " ").concat(time), 'YYYY-MM-DD HH:mm').toDate();
    return _moment;
  };
  var handleChangeTime = function handleChangeTime(time) {
    if (!time || time === timeSelected) return;
    var _moment = getMomentTime(time);
    setTimeSelected(time);
    setDateSelected(_moment);
  };
  var isBusyTime = function isBusyTime(professional, selectedMoment) {
    var _professional$schedul, _product$duration, _professional$schedul2, _professional$busy_ti;
    if (!(professional !== null && professional !== void 0 && professional.schedule)) return true;
    if (!selectedMoment) return false;
    var startDay = (0, _moment2.default)(selectedMoment).utc().format('d');
    var isStartScheduleEnabled = professional === null || professional === void 0 || (_professional$schedul = professional.schedule) === null || _professional$schedul === void 0 || (_professional$schedul = _professional$schedul[startDay]) === null || _professional$schedul === void 0 ? void 0 : _professional$schedul.enabled;
    var duration = (_product$duration = product === null || product === void 0 ? void 0 : product.duration) !== null && _product$duration !== void 0 ? _product$duration : 0;
    var endDay = (0, _moment2.default)(selectedMoment).add(duration - 1, 'minutes').utc().format('d');
    var isEndScheduleEnabled = professional === null || professional === void 0 || (_professional$schedul2 = professional.schedule) === null || _professional$schedul2 === void 0 || (_professional$schedul2 = _professional$schedul2[endDay]) === null || _professional$schedul2 === void 0 ? void 0 : _professional$schedul2.enabled;
    if (!isStartScheduleEnabled || !isEndScheduleEnabled) return true;
    if ((professional === null || professional === void 0 || (_professional$busy_ti = professional.busy_times) === null || _professional$busy_ti === void 0 ? void 0 : _professional$busy_ti.length) === 0) return false;
    var busyTimes = isCartProduct ? professional === null || professional === void 0 ? void 0 : professional.busy_times.filter(function (item) {
      var _productCart$calendar, _productCart$calendar2;
      return !(item.start === (productCart === null || productCart === void 0 || (_productCart$calendar = productCart.calendar_event) === null || _productCart$calendar === void 0 ? void 0 : _productCart$calendar.start) && item.end === (productCart === null || productCart === void 0 || (_productCart$calendar2 = productCart.calendar_event) === null || _productCart$calendar2 === void 0 ? void 0 : _productCart$calendar2.end));
    }) : _toConsumableArray(professional === null || professional === void 0 ? void 0 : professional.busy_times);
    var valid = busyTimes.some(function (item) {
      return _moment2.default.utc(item === null || item === void 0 ? void 0 : item.start).local().valueOf() <= (0, _moment2.default)(selectedMoment).valueOf() && (0, _moment2.default)(selectedMoment).valueOf() < _moment2.default.utc(item === null || item === void 0 ? void 0 : item.end).local().valueOf() || _moment2.default.utc(item === null || item === void 0 ? void 0 : item.start).local().valueOf() < (0, _moment2.default)(selectedMoment).valueOf() && (0, _moment2.default)(selectedMoment).add(duration, 'minutes').valueOf() < _moment2.default.utc(item === null || item === void 0 ? void 0 : item.end).local().valueOf();
    });
    return valid;
  };
  var handleClickOutside = function handleClickOutside(e) {
    var _dropDownRef$current;
    if (dropDownRef !== null && dropDownRef !== void 0 && (_dropDownRef$current = dropDownRef.current) !== null && _dropDownRef$current !== void 0 && _dropDownRef$current.contains(e.target)) return;
    setIsDropDown(false);
  };
  var handleChangeProfessional = function handleChangeProfessional(professional) {
    setIsDropDown(false);
    setCurrentProfessional(professional);
  };
  var validateSelectedDate = function validateSelectedDate(curdate, menu) {
    var _menu$schedule;
    var day = (0, _moment2.default)(curdate).format('d');
    setIsEnabled((menu === null || menu === void 0 || (_menu$schedule = menu.schedule) === null || _menu$schedule === void 0 || (_menu$schedule = _menu$schedule[day]) === null || _menu$schedule === void 0 ? void 0 : _menu$schedule.enabled) || false);
  };
  var getTimeList = function getTimeList(curdate, menu) {
    validateSelectedDate(curdate, menu);
    var selectedDate = new Date(curdate);
    var times = (0, _utils.getTimes)(selectedDate, menu === null || menu === void 0 ? void 0 : menu.schedule, is12Hours);
    return times;
  };
  var validDate = function validDate(date) {
    if (!date) return;
    var _date = (0, _moment2.default)(date, 'YYYY-MM-DD HH:mm').isSameOrAfter((0, _moment2.default)(), 'day') ? (0, _moment2.default)(date).format('YYYY-MM-DD HH:mm') : (0, _moment2.default)().format('YYYY-MM-DD HH:mm');
    return _date;
  };
  var handleChangeDate = function handleChangeDate(date) {
    setSelectedDate(date);
    setTimeSelected(null);
  };
  (0, _react.useEffect)(function () {
    var _theme$images, _product$gallery;
    var imageList = [];
    imageList.push((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product));
    if (product !== null && product !== void 0 && product.gallery && (product === null || product === void 0 || (_product$gallery = product.gallery) === null || _product$gallery === void 0 ? void 0 : _product$gallery.length) > 0) {
      var _iterator = _createForOfIteratorHelper(product === null || product === void 0 ? void 0 : product.gallery),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var galleryItem = _step.value;
          if (galleryItem !== null && galleryItem !== void 0 && galleryItem.file) {
            imageList.push(galleryItem === null || galleryItem === void 0 ? void 0 : galleryItem.file);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setGallery(imageList);
  }, [product]);
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isDropDown]);
  (0, _react.useEffect)(function () {
    if (!(professionalSelected !== null && professionalSelected !== void 0 && professionalSelected.schedule)) return;
    setCurrentProfessional(professionalSelected);
  }, [professionalSelected]);
  (0, _react.useEffect)(function () {
    var _professionalListStat;
    if (isCartProduct && (professionalListState === null || professionalListState === void 0 || (_professionalListStat = professionalListState.professionals) === null || _professionalListStat === void 0 ? void 0 : _professionalListStat.length) > 0) {
      var _professionalListStat2;
      var professional = professionalListState === null || professionalListState === void 0 || (_professionalListStat2 = professionalListState.professionals) === null || _professionalListStat2 === void 0 ? void 0 : _professionalListStat2.find(function (item) {
        return item.id === (professionalSelected === null || professionalSelected === void 0 ? void 0 : professionalSelected.id);
      });
      setCurrentProfessional(professional);
    }
  }, [isCartProduct, professionalListState === null || professionalListState === void 0 ? void 0 : professionalListState.professionals]);
  (0, _react.useEffect)(function () {
    if (selectDate === null || currentProfessional === null) return;
    var _times = currentProfessional !== null && currentProfessional !== void 0 && currentProfessional.schedule ? getTimeList(selectDate, currentProfessional) : [];
    setTimeList(_times);
  }, [selectDate, currentProfessional]);
  (0, _react.useEffect)(function () {
    var _datesList = [];
    for (var i = 0; i < maxDate + 1; i++) {
      _datesList.push((0, _moment2.default)(validDate(new Date())).add(i, 'd').format('YYYY-MM-DD'));
    }
    setDatesList(_datesList);
  }, []);
  (0, _react.useEffect)(function () {
    var _productCart$calendar3, _productCart$calendar4, _productCart$calendar5;
    if (!(productCart !== null && productCart !== void 0 && (_productCart$calendar3 = productCart.calendar_event) !== null && _productCart$calendar3 !== void 0 && _productCart$calendar3.start)) return;
    setSelectedDate(_moment2.default.utc(productCart === null || productCart === void 0 || (_productCart$calendar4 = productCart.calendar_event) === null || _productCart$calendar4 === void 0 ? void 0 : _productCart$calendar4.start).local());
    setTimeSelected(_moment2.default.utc(productCart === null || productCart === void 0 || (_productCart$calendar5 = productCart.calendar_event) === null || _productCart$calendar5 === void 0 ? void 0 : _productCart$calendar5.start).local().format('HH:mm'));
  }, [productCart]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, loading && !error && /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 90
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 200
  })), product && !loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ImageWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SwiperWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ArrowButtonWrapper, {
    className: "button-prev"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronLeft, null)), /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    spaceBetween: 0,
    slidesPerView: 1,
    watchSlidesProgress: true,
    className: "mySwiper2",
    preventClicksPropagation: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    }
  }, gallery === null || gallery === void 0 ? void 0 : gallery.map(function (photo, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: photo,
      alt: ""
    }));
  })), /*#__PURE__*/_react.default.createElement(_styles.ArrowButtonWrapper, {
    className: "button-next"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null)))), /*#__PURE__*/_react.default.createElement(_styles.HeaderInfoWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, product === null || product === void 0 ? void 0 : product.name), /*#__PURE__*/_react.default.createElement(_styles.PriceAndDuration, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(product === null || product === void 0 ? void 0 : product.price)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022"), /*#__PURE__*/_react.default.createElement("span", null, product === null || product === void 0 ? void 0 : product.duration, "min")), /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description)), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.ProfessionalInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SectionHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PROFESSIONALS', 'Professionals')), /*#__PURE__*/_react.default.createElement("span", null, t('REQUIRED', 'Required'))), /*#__PURE__*/_react.default.createElement(_styles.ProfessionalSelectWrapper, {
    ref: dropDownRef
  }, /*#__PURE__*/_react.default.createElement(_styles.SelectedItem, {
    onClick: function onClick() {
      return setIsDropDown(function (prev) {
        return !prev;
      });
    }
  }, currentProfessional ? /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, currentProfessional !== null && currentProfessional !== void 0 && currentProfessional.photo ? /*#__PURE__*/_react.default.createElement(_styles.ProfessionalPhoto, {
    bgimage: currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null), /*#__PURE__*/_react.default.createElement(_styles.NameWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.name, " ", currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.lastname), /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, {
    available: !isBusyTime(currentProfessional, dateSelected)
  }, currentProfessional !== null && currentProfessional !== void 0 && currentProfessional.schedule ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isBusyTime(currentProfessional, dateSelected) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "status"
  }, t('BUSY_ON_SELECTED_TIME', 'Busy on selected time'))) : /*#__PURE__*/_react.default.createElement("span", {
    className: "status"
  }, t('AVAILABLE', 'Available'))) : /*#__PURE__*/_react.default.createElement("span", {
    className: "status"
  }, t('NOT_AVAILABLE', 'Not available'))))) : /*#__PURE__*/_react.default.createElement("p", null, t('SELECT_PROFESSIONAL', 'Select professional')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronDown, null)), isDropDown && /*#__PURE__*/_react.default.createElement(_styles.DropDownWrapper, null, professionalListState === null || professionalListState === void 0 || (_professionalListStat3 = professionalListState.professionals) === null || _professionalListStat3 === void 0 ? void 0 : _professionalListStat3.map(function (professional) {
    return /*#__PURE__*/_react.default.createElement(_styles.SelectedItem, {
      key: professional === null || professional === void 0 ? void 0 : professional.id,
      isDropDown: true,
      active: (professional === null || professional === void 0 ? void 0 : professional.id) === (currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.id),
      onClick: function onClick() {
        return handleChangeProfessional(professional);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, professional !== null && professional !== void 0 && professional.photo ? /*#__PURE__*/_react.default.createElement(_styles.ProfessionalPhoto, {
      bgimage: professional === null || professional === void 0 ? void 0 : professional.photo
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null), /*#__PURE__*/_react.default.createElement(_styles.NameWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, professional === null || professional === void 0 ? void 0 : professional.name, " ", professional === null || professional === void 0 ? void 0 : professional.lastname), /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, {
      available: !isBusyTime(professional, dateSelected)
    }, professional !== null && professional !== void 0 && professional.schedule ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isBusyTime(professional, dateSelected) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "status"
    }, t('BUSY_ON_SELECTED_TIME', 'Busy on selected time'))) : /*#__PURE__*/_react.default.createElement("span", {
      className: "status"
    }, t('AVAILABLE', 'Available'))) : /*#__PURE__*/_react.default.createElement("span", {
      className: "status"
    }, t('NOT_AVAILABLE', 'Not available'))))));
  })))), /*#__PURE__*/_react.default.createElement(_styles.ScheduleWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SectionHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SCHEDULE', 'Schedule')), /*#__PURE__*/_react.default.createElement("span", null, t('REQUIRED', 'Required'))), currentProfessional !== null && currentProfessional !== void 0 && currentProfessional.schedule ? /*#__PURE__*/_react.default.createElement(_styles.OrderTimeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DateWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MonthYearLayer, null, /*#__PURE__*/_react.default.createElement("span", null, dateSelected && (0, _moment2.default)(dateSelected).format('MMMM, yyyy'))), /*#__PURE__*/_react.default.createElement(_styles.DaysSwiper, {
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
        slidesPerView: 7,
        spaceBetween: 0
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
    className: "swiper-datelist",
    preventClicksPropagation: false
  }, datesList.slice(0, Number(maxDate - 1, 10)).map(function (date, i) {
    var dateParts = date.split('-');
    var _date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    var dayName = t('DAY' + (_date.getDay() >= 1 ? _date.getDay() : 7)).substring(0, 2);
    var dayNumber = (_date.getDate() < 10 ? '0' : '') + _date.getDate();
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.Day, {
      selected: (0, _moment2.default)(selectDate).format('YYYY-MM-DD') === date,
      onClick: function onClick() {
        return handleChangeDate((0, _moment2.default)(date));
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.DayName, null, dayName), /*#__PURE__*/_react.default.createElement(_styles.DayNumber, null, dayNumber)));
  })))), /*#__PURE__*/_react.default.createElement(_styles.TimeListWrapper, null, isEnabled && (timeList === null || timeList === void 0 ? void 0 : timeList.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, timeList.map(function (time, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.TimeItem, {
      key: i,
      active: timeSelected === time.value,
      disabled: isBusyTime(currentProfessional, getMomentTime(time.value)),
      onClick: function onClick() {
        return handleChangeTime(time.value);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, time.text));
  })) : /*#__PURE__*/_react.default.createElement(_styles.ClosedBusinessMsg, null, t('PROFESSIONAL_NOT_AVAILABLE', 'Professional is not available at the moment')))) : /*#__PURE__*/_react.default.createElement(_styles.EmptyProfessional, null, t('NO_SCHEDULE', 'No schedule'))), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, dateSelected ? parseDate(dateSelected, {
    outputFormat: 'hh:mm a'
  }) : t('ASAP_ABBREVIATION', 'ASAP')), !isSoldOut && maxProductQuantity > 0 && auth && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return handleAddProduct();
    },
    color: "primary",
    disabled: isBusyTime(currentProfessional, dateSelected) || (orderState === null || orderState === void 0 ? void 0 : orderState.loading)
  }, orderState !== null && orderState !== void 0 && orderState.loading ? t('LOADING', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.LOADING) || 'Loading') : t('BOOK', 'Book')), (!auth || isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add ".concat(!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''),
    color: "primary",
    outline: true,
    disabled: isSoldOut || maxProductQuantity <= 0,
    onClick: function onClick() {
      return setModalIsOpen(true);
    }
  }, isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SOLD_OUT) || 'Sold out') : t('LOGIN_SIGNUP', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.LOGIN_SIGNUP) || 'Login / Sign Up')), !auth && guestCheckoutEnabled && orderTypeEnabled && /*#__PURE__*/_react.default.createElement(_styles.GuestUserLink, {
    onClick: handleUpdateGuest
  }, actionStatus !== null && actionStatus !== void 0 && actionStatus.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25,
    width: 70
  }) : t('AS_GUEST_USER', 'As guest user')))), modalIsOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return closeModal();
    },
    width: "760px"
  }, modalPageToShow === 'login' && /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    handleSuccessLogin: handleSuccessLogin,
    elementLinkToSignup: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'signup'
        });
      },
      href: "#"
    }, t('CREATE_ACCOUNT', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.CREATE_ACCOUNT) || 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.RESET_PASSWORD) || 'Reset password')),
    useLoginByCellphone: true,
    isPopup: true
  }), modalPageToShow === 'signup' && /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', (theme === null || theme === void 0 || (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.LOGIN) || 'Login')),
    useLoginByCellphone: true,
    useChekoutFileds: true,
    handleSuccessSignup: handleSuccessSignup,
    isPopup: true
  }), modalPageToShow === 'forgotpassword' && /*#__PURE__*/_react.default.createElement(_ForgotPasswordForm.ForgotPasswordForm, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', (theme === null || theme === void 0 || (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.LOGIN) || 'Login')),
    isPopup: true
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('SEARCH', 'Search'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var ServiceForm = exports.ServiceForm = function ServiceForm(props) {
  var serviceFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ServiceFormUI,
    isService: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductForm, serviceFormProps);
};