"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _UserFormDetails = require("../UserFormDetails");
var _UserFormDetails2 = require("../../../../../components/UserFormDetails");
var _Modal = require("../Modal");
var _VerifyCodeForm = require("../VerifyCodeForm");
var _useCountdownTimer3 = require("../../../../../hooks/useCountdownTimer");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _AddressList = require("../AddressList");
var _Confirm = require("../Confirm");
var _ProfileOptions = require("./ProfileOptions");
var _utils = require("../../../../../utils");
var _FiCamera = _interopRequireDefault(require("@meronex/icons/fi/FiCamera"));
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _styles = require("./styles");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var LogoutActionUI = function LogoutActionUI(props) {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;
  var handleClick = function handleClick() {
    var _window;
    var GoogleAuth = (_window = window) === null || _window === void 0 || (_window = _window.gapi) === null || _window === void 0 || (_window = _window.auth2) === null || _window === void 0 ? void 0 : _window.getAuthInstance();
    if (GoogleAuth) {
      var signedIn = GoogleAuth.isSignedIn.get();
      if (signedIn) {
        GoogleAuth.signOut().then(function () {
          GoogleAuth.disconnect();
        });
      }
    }
    deleteUserCustomer(true);
    props.handleLogoutClick();
  };
  return /*#__PURE__*/_react.default.createElement(_styles.ListItem, {
    onClick: handleClick
  }, t('LOGOUT', 'Logout'));
};
var ListItemLogout = function ListItemLogout() {
  var logoutActionProps = {
    UIComponent: LogoutActionUI
  };
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LogoutAction, logoutActionProps);
};
var UserProfileFormUI = function UserProfileFormUI(props) {
  var _theme$profile, _theme$profile2, _theme$profile3, _configs$advanced_off, _configs$advanced_off2, _theme$profile4, _configs$cash_wallet, _configs$wallet_enabl, _configs$wallet_cash_, _configs$wallet_credi, _theme$bar_menu, _theme$bar_menu2, _theme$bar_menu3, _theme$bar_menu4, _theme$bar_menu5, _theme$bar_menu6, _formState$changes5, _verifyPhoneState$res3, _props$beforeElements, _props$beforeComponen, _formState$changes6, _formState$changes7, _formState$changes8, _formState$result, _formState$changes9, _formState$changes10, _props$afterComponent, _props$afterElements;
  var userData = props.userData,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    handlechangeImage = props.handlechangeImage,
    formState = props.formState,
    cleanFormState = props.cleanFormState,
    toggleIsEdit = props.toggleIsEdit,
    isCustomerMode = props.isCustomerMode,
    isHiddenAddress = props.isHiddenAddress,
    handleSendVerifyCode = props.handleSendVerifyCode,
    verifyPhoneState = props.verifyPhoneState,
    setFormState = props.setFormState;
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    willVerifyOtpState = _useState2[0],
    setWillVerifyOtpState = _useState2[1];
  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, willVerifyOtpState),
    _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
    otpLeftTime = _useCountdownTimer2[0],
    resetOtpLeftTime = _useCountdownTimer2[2];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var inputRef = (0, _react.useRef)(null);
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var showCustomerPicture = !(theme !== null && theme !== void 0 && (_theme$profile = theme.profile) !== null && _theme$profile !== void 0 && (_theme$profile = _theme$profile.components) !== null && _theme$profile !== void 0 && (_theme$profile = _theme$profile.picture) !== null && _theme$profile !== void 0 && _theme$profile.hidden);
  var showAddressList = !(theme !== null && theme !== void 0 && (_theme$profile2 = theme.profile) !== null && _theme$profile2 !== void 0 && (_theme$profile2 = _theme$profile2.components) !== null && _theme$profile2 !== void 0 && (_theme$profile2 = _theme$profile2.address_list) !== null && _theme$profile2 !== void 0 && _theme$profile2.hidden);
  var userFormLayoutRow = (theme === null || theme === void 0 || (_theme$profile3 = theme.profile) === null || _theme$profile3 === void 0 || (_theme$profile3 = _theme$profile3.components) === null || _theme$profile3 === void 0 || (_theme$profile3 = _theme$profile3.layout) === null || _theme$profile3 === void 0 ? void 0 : _theme$profile3.position) === 'row';
  var isPromotionsEnabled = (configs === null || configs === void 0 || (_configs$advanced_off = configs.advanced_offers_module) === null || _configs$advanced_off === void 0 ? void 0 : _configs$advanced_off.value) === '1' || (configs === null || configs === void 0 || (_configs$advanced_off2 = configs.advanced_offers_module) === null || _configs$advanced_off2 === void 0 ? void 0 : _configs$advanced_off2.value) === true;
  var isAddressListNewPage = (theme === null || theme === void 0 || (_theme$profile4 = theme.profile) === null || _theme$profile4 === void 0 || (_theme$profile4 = _theme$profile4.components) === null || _theme$profile4 === void 0 || (_theme$profile4 = _theme$profile4.address_list) === null || _theme$profile4 === void 0 || (_theme$profile4 = _theme$profile4.components) === null || _theme$profile4 === void 0 || (_theme$profile4 = _theme$profile4.layout) === null || _theme$profile4 === void 0 ? void 0 : _theme$profile4.position) === 'new_page';
  var isWalletEnabled = (configs === null || configs === void 0 || (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 || (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && ((configs === null || configs === void 0 || (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1' || (configs === null || configs === void 0 || (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1');
  var hideWallet = theme === null || theme === void 0 || (_theme$bar_menu = theme.bar_menu) === null || _theme$bar_menu === void 0 || (_theme$bar_menu = _theme$bar_menu.components) === null || _theme$bar_menu === void 0 || (_theme$bar_menu = _theme$bar_menu.wallet) === null || _theme$bar_menu === void 0 ? void 0 : _theme$bar_menu.hidden;
  var hideMessages = theme === null || theme === void 0 || (_theme$bar_menu2 = theme.bar_menu) === null || _theme$bar_menu2 === void 0 || (_theme$bar_menu2 = _theme$bar_menu2.components) === null || _theme$bar_menu2 === void 0 || (_theme$bar_menu2 = _theme$bar_menu2.messages) === null || _theme$bar_menu2 === void 0 ? void 0 : _theme$bar_menu2.hidden;
  var hideHelp = theme === null || theme === void 0 || (_theme$bar_menu3 = theme.bar_menu) === null || _theme$bar_menu3 === void 0 || (_theme$bar_menu3 = _theme$bar_menu3.components) === null || _theme$bar_menu3 === void 0 || (_theme$bar_menu3 = _theme$bar_menu3.help) === null || _theme$bar_menu3 === void 0 ? void 0 : _theme$bar_menu3.hidden;
  var hideFavorites = theme === null || theme === void 0 || (_theme$bar_menu4 = theme.bar_menu) === null || _theme$bar_menu4 === void 0 || (_theme$bar_menu4 = _theme$bar_menu4.components) === null || _theme$bar_menu4 === void 0 || (_theme$bar_menu4 = _theme$bar_menu4.favortes) === null || _theme$bar_menu4 === void 0 ? void 0 : _theme$bar_menu4.hidden;
  var hideSession = theme === null || theme === void 0 || (_theme$bar_menu5 = theme.bar_menu) === null || _theme$bar_menu5 === void 0 || (_theme$bar_menu5 = _theme$bar_menu5.components) === null || _theme$bar_menu5 === void 0 || (_theme$bar_menu5 = _theme$bar_menu5.sessions) === null || _theme$bar_menu5 === void 0 ? void 0 : _theme$bar_menu5.hidden;
  var hidePromotions = theme === null || theme === void 0 || (_theme$bar_menu6 = theme.bar_menu) === null || _theme$bar_menu6 === void 0 || (_theme$bar_menu6 = _theme$bar_menu6.components) === null || _theme$bar_menu6 === void 0 || (_theme$bar_menu6 = _theme$bar_menu6.promotions) === null || _theme$bar_menu6 === void 0 ? void 0 : _theme$bar_menu6.hidden;
  var profileOptions = [{
    name: 'wallets',
    pathname: '/wallets',
    displayName: 'wallets',
    key: 'wallets',
    isActive: !hideWallet && isWalletEnabled && !isCustomerMode
  }, {
    name: 'promotions',
    pathname: '/promotions',
    displayName: 'promotions',
    key: 'promotions',
    isActive: !hidePromotions && isPromotionsEnabled
  }, {
    name: 'messages',
    pathname: '/messages',
    displayName: 'messages',
    key: 'messages',
    isActive: !hideMessages && !isCustomerMode
  }, {
    name: 'help',
    pathname: '/help',
    displayName: 'help',
    key: 'help',
    isActive: !hideHelp
  }, {
    name: 'sessions',
    pathname: '/sessions',
    displayName: 'sessions',
    key: 'sessions',
    isActive: !hideSession
  }, {
    name: 'favorite',
    pathname: '/favorite',
    displayName: 'favorites',
    key: 'favorites',
    isActive: !hideFavorites
  }, {
    name: 'addresses',
    pathname: '/profile/addresses',
    displayName: 'places',
    key: 'places',
    isActive: isAddressListNewPage
  }];
  var handleFiles = function handleFiles(files) {
    if (files.length === 1) {
      var _files$;
      var type = files[0].type.split('/')[0];
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        });
        return;
      }
      if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        });
        return;
      }
      handlechangeImage(files[0]);
    }
  };
  var toggleEditState = function toggleEditState(val) {
    toggleIsEdit();
    if (!val) {
      cleanFormState({
        changes: {}
      });
    }
  };
  var handleClickImage = function handleClickImage() {
    inputRef.current.click();
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleSendOtp = function handleSendOtp() {
    var _formState$changes, _formState$changes2;
    if (willVerifyOtpState && formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.cellphone && formState !== null && formState !== void 0 && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.country_phone_code) {
      var _formState$changes3 = formState === null || formState === void 0 ? void 0 : formState.changes,
        cellphone = _formState$changes3.cellphone,
        countryPhoneCode = _formState$changes3.country_phone_code;
      resetOtpLeftTime();
      handleSendVerifyCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode
      });
    }
  };
  var handleGoToPage = function handleGoToPage(page) {
    events.emit('go_to_page', {
      page: page
    });
  };
  (0, _react.useEffect)(function () {
    var _formState$changes4;
    if ((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.photo) {
      var isImage = true;
      handleButtonUpdateClick(null, isImage);
    }
  }, [(_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.photo]);
  (0, _react.useEffect)(function () {
    var _verifyPhoneState$res;
    if (verifyPhoneState !== null && verifyPhoneState !== void 0 && (_verifyPhoneState$res = verifyPhoneState.result) !== null && _verifyPhoneState$res !== void 0 && _verifyPhoneState$res.error) {
      var _verifyPhoneState$res2;
      setAlertState({
        open: true,
        content: (verifyPhoneState === null || verifyPhoneState === void 0 || (_verifyPhoneState$res2 = verifyPhoneState.result) === null || _verifyPhoneState$res2 === void 0 ? void 0 : _verifyPhoneState$res2.result) || [t('ERROR', 'Error')]
      });
    } else {
      resetOtpLeftTime();
    }
  }, [verifyPhoneState === null || verifyPhoneState === void 0 || (_verifyPhoneState$res3 = verifyPhoneState.result) === null || _verifyPhoneState$res3 === void 0 ? void 0 : _verifyPhoneState$res3.result]);
  (0, _react.useEffect)(function () {
    toggleIsEdit();
  }, []);
  (0, _react.useEffect)(function () {
    handleSendOtp();
  }, [willVerifyOtpState]);
  (0, _react.useEffect)(function () {
    if (otpLeftTime === 0) {
      setAlertState({
        open: true,
        content: t('TIME_IS_UP_PLEASE_RESEND_CODE', 'Time is up. Please resend code again')
      });
    }
  }, [otpLeftTime]);
  var handleSendPhoneCode = function handleSendPhoneCode(values) {
    setWillVerifyOtpState(false);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
        verification_code: values === null || values === void 0 ? void 0 : values.code
      })
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.UserProfileContainer, {
    mbottom: isHiddenAddress && 25
  }, showCustomerPicture && /*#__PURE__*/_react.default.createElement(_styles.UserImage, {
    className: "user-image"
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    onClick: function onClick() {
      return handleClickImage();
    },
    isImage: (user === null || user === void 0 ? void 0 : user.photo) || (formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.photo) && !formState.result.error
  }, /*#__PURE__*/_react.default.createElement(_orderingComponents.ExamineClick, {
    onFiles: handleFiles,
    childRef: function childRef(e) {
      inputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponents.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, (_formState$changes7 = formState.changes) !== null && _formState$changes7 !== void 0 && _formState$changes7.photo && formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes8 = formState.changes) !== null && _formState$changes8 !== void 0 && _formState$changes8.photo) || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) === 'Network Error' || formState.result.error ? user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: user === null || user === void 0 ? void 0 : user.photo,
    alt: "user image",
    width: "200px",
    height: "200px",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here'))) : (formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.photo) && formState.result.error && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.photo,
    alt: "user image",
    loading: "lazy"
  })))), /*#__PURE__*/_react.default.createElement(_styles.Camera, null, /*#__PURE__*/_react.default.createElement(_FiCamera.default, null))), windowSize.width <= 576 && /*#__PURE__*/_react.default.createElement(_styles.ProfileOptionsList, null, profileOptions.map(function (option, i) {
    return option.isActive && /*#__PURE__*/_react.default.createElement(_styles.ListLink, {
      key: i,
      active: window.location.pathname === option.pathname,
      onClick: function onClick() {
        return handleGoToPage(option.name);
      }
    }, t((option.key || option.name).toUpperCase(), (0, _utils.capitalize)(option.displayName || option.name)));
  }), /*#__PURE__*/_react.default.createElement(ListItemLogout, null)), /*#__PURE__*/_react.default.createElement(_styles.SideForm, {
    className: "user-form"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperForm, null, userFormLayoutRow ? /*#__PURE__*/_react.default.createElement(_UserFormDetails2.UserFormDetailsUI, _extends({}, props, {
    onCancel: toggleEditState,
    isOriginalLayout: true,
    isHiddenAddress: isHiddenAddress,
    isOldLayout: true
  })) : /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
    onCancel: toggleEditState,
    isHiddenAddress: isHiddenAddress,
    setWillVerifyOtpState: setWillVerifyOtpState
  }))))), ((userData === null || userData === void 0 ? void 0 : userData.addresses) || (user === null || user === void 0 ? void 0 : user.addresses)) && !isHiddenAddress && showAddressList && /*#__PURE__*/_react.default.createElement(_styles.SavedPlaces, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MY_ADDRESSES', 'My Saved places')), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    addressList: user === null || user === void 0 ? void 0 : user.addresses,
    isProfile: true
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PROFILE', 'Profile'),
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
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ENTER_VERIFICATION_CODE', 'Enter verification code'),
    open: willVerifyOtpState,
    width: "700px",
    height: "420px",
    onClose: function onClose() {
      return setWillVerifyOtpState(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_VerifyCodeForm.VerifyCodeForm, {
    otpLeftTime: otpLeftTime,
    credentials: formState === null || formState === void 0 ? void 0 : formState.changes,
    handleSendOtp: handleSendOtp,
    handleCheckPhoneCode: handleSendPhoneCode,
    email: (userData === null || userData === void 0 ? void 0 : userData.email) || (user === null || user === void 0 ? void 0 : user.email),
    isPhone: true
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var UserProfileForm = exports.UserProfileForm = function UserProfileForm(props) {
  var UserProfileProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserProfileFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserFormDetails, UserProfileProps);
};