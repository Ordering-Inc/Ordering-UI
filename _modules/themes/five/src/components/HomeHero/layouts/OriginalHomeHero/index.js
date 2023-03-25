"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OriginalHomeHero = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _HiOutlineLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineLocationMarker"));
var _styles = require("./styles");
var _Modal = require("../../../Modal");
var _Buttons = require("../../../../styles/Buttons");
var _AddressForm = require("../../../AddressForm");
var _LoginForm = require("../../../LoginForm");
var _SignUpForm = require("../../../SignUpForm");
var _ForgotPasswordForm = require("../../../ForgotPasswordForm");
var _AddressList = require("../../../AddressList");
var _useWindowSize = require("../../../../../../../hooks/useWindowSize");
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
var OriginalHomeHero = function OriginalHomeHero(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _orderingTheme$theme$5, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _orderingTheme$theme7, _orderingTheme$theme8, _orderingTheme$theme9, _orderingTheme$theme10, _orderingTheme$theme11, _orderingTheme$theme12, _orderingTheme$theme13, _orderingTheme$theme14, _orderingTheme$theme15, _orderingTheme$theme16, _orderingTheme$theme17, _orderingTheme$theme18, _orderingTheme$theme19, _orderingTheme$theme20, _orderingTheme$theme21, _orderingTheme$theme22, _orderingTheme$theme23, _orderingTheme$theme24, _orderingTheme$theme25, _orderingTheme$theme26, _orderingTheme$theme27, _orderingTheme$theme28, _orderingTheme$theme29, _orderingTheme$theme30, _orderingTheme$theme31, _orderingTheme$theme32, _configs$powered_by_o, _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _theme$images3, _theme$images3$logos, _theme$defaultLanguag, _theme$defaultLanguag2, _orderState$options3, _orderState$options3$, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _orderState$options4, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10;
  var onFindBusiness = props.onFindBusiness,
    notificationState = props.notificationState;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    auth = _useSession2[0].auth,
    login = _useSession2[1].login;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)({
      listOpen: false,
      formOpen: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    modals = _useState2[0],
    setModals = _useState2[1];
  var theme = (0, _styledComponents.useTheme)();
  var userCustomer = parseInt(window.localStorage.getItem('user-customer'));
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    authModalOpen = _useState4[0],
    setAuthModalOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    modalPageToShow = _useState6[0],
    setModalPageToShow = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    newAddressModalOpened = _useState8[0],
    setNewAddressModalOpened = _useState8[1];
  var isShowLoginAccount = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme$ = _orderingTheme$theme.mobile_view_web) !== null && _orderingTheme$theme$ !== void 0 && (_orderingTheme$theme$2 = _orderingTheme$theme$.components) !== null && _orderingTheme$theme$2 !== void 0 && (_orderingTheme$theme$3 = _orderingTheme$theme$2.home) !== null && _orderingTheme$theme$3 !== void 0 && (_orderingTheme$theme$4 = _orderingTheme$theme$3.components) !== null && _orderingTheme$theme$4 !== void 0 && (_orderingTheme$theme$5 = _orderingTheme$theme$4.login_account) !== null && _orderingTheme$theme$5 !== void 0 && _orderingTheme$theme$5.hidden);
  var bgImg = orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme2 = orderingTheme.theme) === null || _orderingTheme$theme2 === void 0 ? void 0 : (_orderingTheme$theme3 = _orderingTheme$theme2.my_products) === null || _orderingTheme$theme3 === void 0 ? void 0 : (_orderingTheme$theme4 = _orderingTheme$theme3.components) === null || _orderingTheme$theme4 === void 0 ? void 0 : (_orderingTheme$theme5 = _orderingTheme$theme4.images) === null || _orderingTheme$theme5 === void 0 ? void 0 : (_orderingTheme$theme6 = _orderingTheme$theme5.components) === null || _orderingTheme$theme6 === void 0 ? void 0 : (_orderingTheme$theme7 = _orderingTheme$theme6.homepage_background) === null || _orderingTheme$theme7 === void 0 ? void 0 : (_orderingTheme$theme8 = _orderingTheme$theme7.components) === null || _orderingTheme$theme8 === void 0 ? void 0 : _orderingTheme$theme8.image;
  var logo = orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme9 = orderingTheme.theme) === null || _orderingTheme$theme9 === void 0 ? void 0 : (_orderingTheme$theme10 = _orderingTheme$theme9.my_products) === null || _orderingTheme$theme10 === void 0 ? void 0 : (_orderingTheme$theme11 = _orderingTheme$theme10.components) === null || _orderingTheme$theme11 === void 0 ? void 0 : (_orderingTheme$theme12 = _orderingTheme$theme11.images) === null || _orderingTheme$theme12 === void 0 ? void 0 : (_orderingTheme$theme13 = _orderingTheme$theme12.components) === null || _orderingTheme$theme13 === void 0 ? void 0 : (_orderingTheme$theme14 = _orderingTheme$theme13.logo) === null || _orderingTheme$theme14 === void 0 ? void 0 : (_orderingTheme$theme15 = _orderingTheme$theme14.components) === null || _orderingTheme$theme15 === void 0 ? void 0 : _orderingTheme$theme15.image;
  var mobileBgImg = orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme16 = orderingTheme.theme) === null || _orderingTheme$theme16 === void 0 ? void 0 : (_orderingTheme$theme17 = _orderingTheme$theme16.my_products) === null || _orderingTheme$theme17 === void 0 ? void 0 : (_orderingTheme$theme18 = _orderingTheme$theme17.components) === null || _orderingTheme$theme18 === void 0 ? void 0 : (_orderingTheme$theme19 = _orderingTheme$theme18.images) === null || _orderingTheme$theme19 === void 0 ? void 0 : (_orderingTheme$theme20 = _orderingTheme$theme19.components) === null || _orderingTheme$theme20 === void 0 ? void 0 : (_orderingTheme$theme21 = _orderingTheme$theme20.homepage_mobile_background) === null || _orderingTheme$theme21 === void 0 ? void 0 : (_orderingTheme$theme22 = _orderingTheme$theme21.components) === null || _orderingTheme$theme22 === void 0 ? void 0 : _orderingTheme$theme22.image;
  var isFullScreen = orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme23 = orderingTheme.theme) === null || _orderingTheme$theme23 === void 0 ? void 0 : (_orderingTheme$theme24 = _orderingTheme$theme23.my_products) === null || _orderingTheme$theme24 === void 0 ? void 0 : (_orderingTheme$theme25 = _orderingTheme$theme24.components) === null || _orderingTheme$theme25 === void 0 ? void 0 : (_orderingTheme$theme26 = _orderingTheme$theme25.images) === null || _orderingTheme$theme26 === void 0 ? void 0 : (_orderingTheme$theme27 = _orderingTheme$theme26.components) === null || _orderingTheme$theme27 === void 0 ? void 0 : _orderingTheme$theme27.homepage_image_fullscreen;
  var isChew = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme28 = orderingTheme.theme) === null || _orderingTheme$theme28 === void 0 ? void 0 : (_orderingTheme$theme29 = _orderingTheme$theme28.header) === null || _orderingTheme$theme29 === void 0 ? void 0 : (_orderingTheme$theme30 = _orderingTheme$theme29.components) === null || _orderingTheme$theme30 === void 0 ? void 0 : (_orderingTheme$theme31 = _orderingTheme$theme30.layout) === null || _orderingTheme$theme31 === void 0 ? void 0 : (_orderingTheme$theme32 = _orderingTheme$theme31.type) === null || _orderingTheme$theme32 === void 0 ? void 0 : _orderingTheme$theme32.toLowerCase()) === 'chew';
  var enabledPoweredByOrdering = configs === null || configs === void 0 ? void 0 : (_configs$powered_by_o = configs.powered_by_ordering_module) === null || _configs$powered_by_o === void 0 ? void 0 : _configs$powered_by_o.value;
  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options, _orderState$options$a;
    if (!(orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options$a = _orderState$options.address) !== null && _orderState$options$a !== void 0 && _orderState$options$a.location)) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
      return;
    }
    setModals({
      listOpen: false,
      formOpen: false
    });
    onFindBusiness && onFindBusiness();
  };
  var handleAddressInput = function handleAddressInput() {
    if (auth) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
    } else {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
    }
  };
  var handleOpenLoginSignUp = function handleOpenLoginSignUp(index) {
    setModalPageToShow(index);
    setAuthModalOpen(true);
  };
  var handleCustomModalClick = function handleCustomModalClick(e, _ref) {
    var page = _ref.page;
    e.preventDefault();
    setModalPageToShow(page);
  };
  var closeAuthModal = function closeAuthModal() {
    setAuthModalOpen(false);
    setModalPageToShow(null);
  };
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) {
      closeAuthModal();
    }
  };
  var handleSuccessSignup = function handleSuccessSignup(user) {
    var _user$session;
    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
  };
  (0, _react.useEffect)(function () {
    return function () {
      return setModals({
        listOpen: false,
        formOpen: false
      });
    };
  }, []);
  (0, _react.useEffect)(function () {
    var _orderState$options2, _orderState$options2$;
    if (newAddressModalOpened) return;
    if (auth && !orderState.loading && !(orderState !== null && orderState !== void 0 && (_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && (_orderState$options2$ = _orderState$options2.address) !== null && _orderState$options2$ !== void 0 && _orderState$options2$.location)) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
      setNewAddressModalOpened(true);
    }
  }, [auth, orderState, newAddressModalOpened]);
  return /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, {
    mb: !auth && isShowLoginAccount && '30vh',
    bgimage: windowSize.width < 576 ? mobileBgImg || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.homeHeroMobile) : bgImg || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.homeHero),
    isFullScreen: isFullScreen
  }, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, windowSize.width < 576 && !isChew && /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$logos = _theme$images3.logos) === null || _theme$images3$logos === void 0 ? void 0 : _theme$images3$logos.logotypeInvert,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.HeroContent, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.TITLE_HOME) || 'All We need is Food.')), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('SUBTITLE_HOME', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SUBTITLE_HOME) || 'Let\'s start to order food now')), /*#__PURE__*/_react.default.createElement(_styles.WrapInput, {
    onClick: handleAddressInput,
    withIcon: true
  }, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, null), /*#__PURE__*/_react.default.createElement("p", null, (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : (_orderState$options3$ = _orderState$options3.address) === null || _orderState$options3$ === void 0 ? void 0 : _orderState$options3$.address) || t('WHERE_DO_WE_DELIVERY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.WHERE_DO_WE_DELIVERY) || 'Where do we delivery?'))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    name: "find-business",
    onClick: handleFindBusinesses
  }, t('FIND_BUSINESSES', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.FIND_BUSINESSES) || 'Find businesses')))), windowSize.width < 576 && !auth && isShowLoginAccount && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, enabledPoweredByOrdering && /*#__PURE__*/_react.default.createElement(_styles.PoweredByOrdering, null, t('POWERED_BY', 'Powered by'), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.ordering.co"
  }, ' ', t('ORDERING_CO', 'Ordering.co'))), /*#__PURE__*/_react.default.createElement(_styles.UseAccount, null, /*#__PURE__*/_react.default.createElement(_styles.SectionHeader, null, t('YOUR_ACCOUNT', 'Use your account')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleOpenLoginSignUp('login');
    }
  }, t('LOGIN', 'login')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleOpenLoginSignUp('signup');
    }
  }, t('SIGNUP', 'signUp')))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('WHERE_DO_WE_DELIVERY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.WHERE_DO_WE_DELIVERY) || 'Where do we delivery?'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.address) || {},
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveAddress: function onSaveAddress() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('WHERE_DO_WE_DELIVERY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.WHERE_DO_WE_DELIVERY) || 'Where do we delivery?'),
    open: modals.listOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer) ? null : userCustomer,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    onAccept: function onAccept() {
      return handleFindBusinesses();
    }
  })), authModalOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: authModalOpen,
    onRemove: function onRemove() {
      return closeAuthModal();
    },
    width: "50%",
    authModal: true
  }, modalPageToShow === 'login' && /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    notificationState: notificationState,
    handleSuccessLogin: handleSuccessLogin,
    elementLinkToSignup: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'signup'
        });
      },
      href: "#"
    }, t('CREATE_ACCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.CREATE_ACCOUNT) || 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.RESET_PASSWORD) || 'Reset password')),
    useLoginByCellphone: true,
    isPopup: true
  }), modalPageToShow === 'signup' && /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    notificationState: notificationState,
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.LOGIN) || 'Login')),
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
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.LOGIN) || 'Login')),
    isPopup: true
  })));
};
exports.OriginalHomeHero = OriginalHomeHero;