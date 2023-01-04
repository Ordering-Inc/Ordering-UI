"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("swiper/react");
var _orderingComponents = require("ordering-components");
var _Confirm = require("../Confirm");
var _Modal = require("../Modal");
var _LoginForm = require("../LoginForm");
var _SignUpForm = require("../SignUpForm");
var _ForgotPasswordForm = require("../ForgotPasswordForm");
var _styledComponents = require("styled-components");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _BusinessPreorder = require("../BusinessPreorder");
var _Buttons = require("../../styles/Buttons");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
var _styles = require("./styles");
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_swiper.default.use([_swiper.Navigation]);
var ServiceFormUI = function ServiceFormUI(props) {
  var _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6;
  var product = props.product,
    professionalSelected = props.professionalSelected,
    handleSave = props.handleSave,
    isSoldOut = props.isSoldOut,
    maxProductQuantity = props.maxProductQuantity,
    productCart = props.productCart,
    professionalList = props.professionalList;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
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
  var dropDownRef = (0, _react.useRef)();
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
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    gallery = _useState10[0],
    setGallery = _useState10[1];
  var _useState11 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    alertState = _useState12[0],
    setAlertState = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    dateSelected = _useState14[0],
    setDateSelected = _useState14[1];
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
      serviceTime: parseDate(dateSelected, {
        outputFormat: 'YYYY-MM-DD HH:mm:00'
      }),
      professional: currentProfessional
    };
    handleSave(values);
  };
  var isBusyTime = function isBusyTime(professional) {
    var _professional$busy_ti;
    if ((professional === null || professional === void 0 ? void 0 : (_professional$busy_ti = professional.busy_times) === null || _professional$busy_ti === void 0 ? void 0 : _professional$busy_ti.length) === 0 || !dateSelected) return false;
    var valid = professional === null || professional === void 0 ? void 0 : professional.busy_times.some(function (item) {
      return (0, _moment.default)(item === null || item === void 0 ? void 0 : item.start).valueOf() <= (0, _moment.default)(dateSelected).valueOf() && (0, _moment.default)(dateSelected).valueOf() <= (0, _moment.default)(item === null || item === void 0 ? void 0 : item.end).valueOf();
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
    if (!professionalSelected) return;
    setCurrentProfessional(professionalSelected);
  }, [professionalSelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ImageWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SwiperWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ArrowButtonWrapper, {
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
    available: !isBusyTime()
  }, isBusyTime(currentProfessional) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "status"
  }, t('BUSY_ON_SELECTED_TIME', 'Busy on selected time'))) : /*#__PURE__*/_react.default.createElement("span", {
    className: "status"
  }, t('AVAILABLE', 'Available'))))) : /*#__PURE__*/_react.default.createElement("p", null, t('SELECT_PROFESSIONAL', 'Select professional')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronDown, null)), isDropDown && /*#__PURE__*/_react.default.createElement(_styles.DropDownWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DropDownTitle, null, t('ANY_PROFESSIONAL_MEMBER', 'Any professional member')), professionalList === null || professionalList === void 0 ? void 0 : professionalList.map(function (professional) {
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
  })))), /*#__PURE__*/_react.default.createElement(_styles.ScheduleWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SectionHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SCHEDULE', 'Schedule')), /*#__PURE__*/_react.default.createElement("span", null, t('REQUIRED', 'Required'))), currentProfessional ? /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: currentProfessional,
    isProfessional: true,
    maxDays: 50,
    onChangeMoment: setDateSelected,
    useOrderContext: false
  }) : /*#__PURE__*/_react.default.createElement(_styles.EmptyProfessional, null, t('NO_SCHEDULE', 'No schedule'))), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, dateSelected ? parseDate(dateSelected, {
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
  }, isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SOLD_OUT) || 'Sold out') : t('LOGIN_SIGNUP', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.LOGIN_SIGNUP) || 'Login / Sign Up'))), modalIsOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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