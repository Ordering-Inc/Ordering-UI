"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("swiper/react");
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_swiper.default.use([_swiper.Navigation]);
var maxDate = 40;
var ServiceFormUI = function ServiceFormUI(props) {
  var _configs$format_time, _professionalListStat3, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6;
  var productObject = props.productObject,
    professionalSelected = props.professionalSelected,
    handleSave = props.handleSave,
    isSoldOut = props.isSoldOut,
    maxProductQuantity = props.maxProductQuantity,
    productCart = props.productCart,
    isCartProduct = props.isCartProduct,
    professionalListState = props.professionalListState;
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
    _useState10 = _slicedToArray(_useState9, 2),
    timeList = _useState10[0],
    setTimeList = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    timeSelected = _useState12[0],
    setTimeSelected = _useState12[1];
  var _useState13 = (0, _react.useState)(new Date()),
    _useState14 = _slicedToArray(_useState13, 2),
    selectDate = _useState14[0],
    setSelectedDate = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isEnabled = _useState16[0],
    setIsEnabled = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    datesList = _useState18[0],
    setDatesList = _useState18[1];
  var dropDownRef = (0, _react.useRef)();
  var is12Hours = (configs === null || configs === void 0 ? void 0 : (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12';
  var closeModal = function closeModal() {
    setModalIsOpen(false);
    setModalPageToShow('login');
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
      token: user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
    closeModal();
  };
  var _useState19 = (0, _react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    gallery = _useState20[0],
    setGallery = _useState20[1];
  var _useState21 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    alertState = _useState22[0],
    setAlertState = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    dateSelected = _useState24[0],
    setDateSelected = _useState24[1];
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
  var handleChangeTime = function handleChangeTime(time) {
    if (!time || time === timeSelected) return;
    var _moment = (0, _moment2.default)("".concat((0, _moment2.default)(selectDate).format('YYYY-MM-DD'), " ").concat(time), 'YYYY-MM-DD HH:mm').toDate();
    setTimeSelected(time);
    setDateSelected(_moment);
  };
  var isBusyTime = function isBusyTime(professional) {
    var _professional$busy_ti, _product$duration;
    if ((professional === null || professional === void 0 ? void 0 : (_professional$busy_ti = professional.busy_times) === null || _professional$busy_ti === void 0 ? void 0 : _professional$busy_ti.length) === 0 || !dateSelected) return false;
    var duration = (_product$duration = product === null || product === void 0 ? void 0 : product.duration) !== null && _product$duration !== void 0 ? _product$duration : 0;
    var busyTimes = isCartProduct ? professional === null || professional === void 0 ? void 0 : professional.busy_times.filter(function (item) {
      var _productCart$calendar, _productCart$calendar2;
      return !(item.start === (productCart === null || productCart === void 0 ? void 0 : (_productCart$calendar = productCart.calendar_event) === null || _productCart$calendar === void 0 ? void 0 : _productCart$calendar.start) && item.end === (productCart === null || productCart === void 0 ? void 0 : (_productCart$calendar2 = productCart.calendar_event) === null || _productCart$calendar2 === void 0 ? void 0 : _productCart$calendar2.end));
    }) : _toConsumableArray(professional === null || professional === void 0 ? void 0 : professional.busy_times);
    var valid = busyTimes.some(function (item) {
      return _moment2.default.utc(item === null || item === void 0 ? void 0 : item.start).local().valueOf() <= (0, _moment2.default)(dateSelected).valueOf() && (0, _moment2.default)(dateSelected).valueOf() <= _moment2.default.utc(item === null || item === void 0 ? void 0 : item.end).local().valueOf() || _moment2.default.utc(item === null || item === void 0 ? void 0 : item.start).local().valueOf() <= (0, _moment2.default)(dateSelected).add(duration, 'minutes').valueOf() && (0, _moment2.default)(dateSelected).add(duration, 'minutes').valueOf() <= _moment2.default.utc(item === null || item === void 0 ? void 0 : item.end).local().valueOf();
    });
    return valid;
  };
  var handleClickOutside = function handleClickOutside(e) {
    if (dropDownRef !== null && dropDownRef !== void 0 && dropDownRef.current.contains(e.target)) return;
    setIsDropDown(false);
  };
  var handleChangeProfessional = function handleChangeProfessional(professional) {
    setIsDropDown(false);
    setCurrentProfessional(professional);
  };
  var validateSelectedDate = function validateSelectedDate(curdate, menu) {
    var _menu$schedule, _menu$schedule$day;
    var day = (0, _moment2.default)(curdate).format('d');
    setIsEnabled((menu === null || menu === void 0 ? void 0 : (_menu$schedule = menu.schedule) === null || _menu$schedule === void 0 ? void 0 : (_menu$schedule$day = _menu$schedule[day]) === null || _menu$schedule$day === void 0 ? void 0 : _menu$schedule$day.enabled) || false);
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
    var _theme$images, _theme$images$dummies, _product$gallery;
    var imageList = [];
    imageList.push((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.product));
    if (product !== null && product !== void 0 && product.gallery && (product === null || product === void 0 ? void 0 : (_product$gallery = product.gallery) === null || _product$gallery === void 0 ? void 0 : _product$gallery.length) > 0) {
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
    if (isCartProduct && (professionalListState === null || professionalListState === void 0 ? void 0 : (_professionalListStat = professionalListState.professionals) === null || _professionalListStat === void 0 ? void 0 : _professionalListStat.length) > 0) {
      var _professionalListStat2;
      var professional = professionalListState === null || professionalListState === void 0 ? void 0 : (_professionalListStat2 = professionalListState.professionals) === null || _professionalListStat2 === void 0 ? void 0 : _professionalListStat2.find(function (item) {
        return item.id === (professionalSelected === null || professionalSelected === void 0 ? void 0 : professionalSelected.id);
      });
      setCurrentProfessional(professional);
    }
  }, [isCartProduct, professionalListState === null || professionalListState === void 0 ? void 0 : professionalListState.professionals]);
  (0, _react.useEffect)(function () {
    if (selectDate === null || currentProfessional === null) return;
    var _times = getTimeList(selectDate, currentProfessional);
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
    setSelectedDate(_moment2.default.utc(productCart === null || productCart === void 0 ? void 0 : (_productCart$calendar4 = productCart.calendar_event) === null || _productCart$calendar4 === void 0 ? void 0 : _productCart$calendar4.start).local());
    setTimeSelected(_moment2.default.utc(productCart === null || productCart === void 0 ? void 0 : (_productCart$calendar5 = productCart.calendar_event) === null || _productCart$calendar5 === void 0 ? void 0 : _productCart$calendar5.start).local().format('HH:mm'));
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
    available: !isBusyTime(currentProfessional)
  }, isBusyTime(currentProfessional) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "status"
  }, t('BUSY_ON_SELECTED_TIME', 'Busy on selected time'))) : /*#__PURE__*/_react.default.createElement("span", {
    className: "status"
  }, t('AVAILABLE', 'Available'))))) : /*#__PURE__*/_react.default.createElement("p", null, t('SELECT_PROFESSIONAL', 'Select professional')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronDown, null)), isDropDown && /*#__PURE__*/_react.default.createElement(_styles.DropDownWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DropDownTitle, null, t('ANY_PROFESSIONAL_MEMBER', 'Any professional member')), professionalListState === null || professionalListState === void 0 ? void 0 : (_professionalListStat3 = professionalListState.professionals) === null || _professionalListStat3 === void 0 ? void 0 : _professionalListStat3.map(function (professional) {
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
      available: !isBusyTime(professional)
    }, isBusyTime(professional) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "status"
    }, t('BUSY_ON_SELECTED_TIME', 'Busy on selected time'))) : /*#__PURE__*/_react.default.createElement("span", {
      className: "status"
    }, t('AVAILABLE', 'Available'))))));
  })))), /*#__PURE__*/_react.default.createElement(_styles.ScheduleWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SectionHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SCHEDULE', 'Schedule')), /*#__PURE__*/_react.default.createElement("span", null, t('REQUIRED', 'Required'))), currentProfessional ? /*#__PURE__*/_react.default.createElement(_styles.OrderTimeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DateWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MonthYearLayer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _moment2.default)(dateSelected).format('MMMM, yyyy'))), /*#__PURE__*/_react.default.createElement(_styles.DaysSwiper, {
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
    disabled: isBusyTime(currentProfessional)
  }, t('BOOK', 'Book')), (!auth || isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add ".concat(!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''),
    color: "primary",
    outline: true,
    disabled: isSoldOut || maxProductQuantity <= 0,
    onClick: function onClick() {
      return setModalIsOpen(true);
    }
  }, isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SOLD_OUT) || 'Sold out') : t('LOGIN_SIGNUP', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.LOGIN_SIGNUP) || 'Login / Sign Up')))), modalIsOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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
    }, t('CREATE_ACCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.CREATE_ACCOUNT) || 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.RESET_PASSWORD) || 'Reset password')),
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
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.LOGIN) || 'Login')),
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
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.LOGIN) || 'Login')),
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
var ServiceForm = function ServiceForm(props) {
  var serviceFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ServiceFormUI,
    isService: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductForm, serviceFormProps);
};
exports.ServiceForm = ServiceForm;