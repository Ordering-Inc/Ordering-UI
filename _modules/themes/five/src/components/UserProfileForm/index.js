"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LogoutActionUI = function LogoutActionUI(props) {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;
  var handleClick = function handleClick() {
    var _window, _window$gapi, _window$gapi$auth;
    var GoogleAuth = (_window = window) === null || _window === void 0 ? void 0 : (_window$gapi = _window.gapi) === null || _window$gapi === void 0 ? void 0 : (_window$gapi$auth = _window$gapi.auth2) === null || _window$gapi$auth === void 0 ? void 0 : _window$gapi$auth.getAuthInstance();
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
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _orderingTheme$theme7, _orderingTheme$theme8, _orderingTheme$theme9, _configs$advanced_off, _configs$advanced_off2, _orderingTheme$theme10, _orderingTheme$theme11, _orderingTheme$theme12, _orderingTheme$theme13, _orderingTheme$theme14, _orderingTheme$theme15, _configs$cash_wallet, _configs$wallet_enabl, _configs$wallet_cash_, _configs$wallet_credi, _formState$changes5, _verifyPhoneState$res3, _props$beforeElements, _props$beforeComponen, _formState$changes6, _formState$changes7, _formState$changes8, _formState$result, _formState$changes9, _formState$changes10, _props$afterComponent, _props$afterElements;
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
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
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
  var showCustomerPicture = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme$ = _orderingTheme$theme.profile) !== null && _orderingTheme$theme$ !== void 0 && (_orderingTheme$theme$2 = _orderingTheme$theme$.components) !== null && _orderingTheme$theme$2 !== void 0 && (_orderingTheme$theme$3 = _orderingTheme$theme$2.picture) !== null && _orderingTheme$theme$3 !== void 0 && _orderingTheme$theme$3.hidden);
  var showAddressList = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme2 = orderingTheme.theme) !== null && _orderingTheme$theme2 !== void 0 && (_orderingTheme$theme3 = _orderingTheme$theme2.profile) !== null && _orderingTheme$theme3 !== void 0 && (_orderingTheme$theme4 = _orderingTheme$theme3.components) !== null && _orderingTheme$theme4 !== void 0 && (_orderingTheme$theme5 = _orderingTheme$theme4.address_list) !== null && _orderingTheme$theme5 !== void 0 && _orderingTheme$theme5.hidden);
  var userFormLayoutRow = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme6 = orderingTheme.theme) === null || _orderingTheme$theme6 === void 0 ? void 0 : (_orderingTheme$theme7 = _orderingTheme$theme6.profile) === null || _orderingTheme$theme7 === void 0 ? void 0 : (_orderingTheme$theme8 = _orderingTheme$theme7.components) === null || _orderingTheme$theme8 === void 0 ? void 0 : (_orderingTheme$theme9 = _orderingTheme$theme8.layout) === null || _orderingTheme$theme9 === void 0 ? void 0 : _orderingTheme$theme9.position) === 'row';
  var isPromotionsEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$advanced_off = configs.advanced_offers_module) === null || _configs$advanced_off === void 0 ? void 0 : _configs$advanced_off.value) === '1' || (configs === null || configs === void 0 ? void 0 : (_configs$advanced_off2 = configs.advanced_offers_module) === null || _configs$advanced_off2 === void 0 ? void 0 : _configs$advanced_off2.value) === true;
  var isAddressListNewPage = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme10 = orderingTheme.theme) === null || _orderingTheme$theme10 === void 0 ? void 0 : (_orderingTheme$theme11 = _orderingTheme$theme10.profile) === null || _orderingTheme$theme11 === void 0 ? void 0 : (_orderingTheme$theme12 = _orderingTheme$theme11.components) === null || _orderingTheme$theme12 === void 0 ? void 0 : (_orderingTheme$theme13 = _orderingTheme$theme12.address_list) === null || _orderingTheme$theme13 === void 0 ? void 0 : (_orderingTheme$theme14 = _orderingTheme$theme13.components) === null || _orderingTheme$theme14 === void 0 ? void 0 : (_orderingTheme$theme15 = _orderingTheme$theme14.layout) === null || _orderingTheme$theme15 === void 0 ? void 0 : _orderingTheme$theme15.position) === 'new_page';
  var isWalletEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 ? void 0 : (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && ((configs === null || configs === void 0 ? void 0 : (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1' || (configs === null || configs === void 0 ? void 0 : (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1');
  var profileOptions = [{
    name: 'wallets',
    pathname: '/wallets',
    displayName: 'wallets',
    key: 'wallets',
    isActive: isWalletEnabled && !isCustomerMode
  }, {
    name: 'promotions',
    pathname: '/promotions',
    displayName: 'promotions',
    key: 'promotions',
    isActive: isPromotionsEnabled
  }, {
    name: 'messages',
    pathname: '/messages',
    displayName: 'messages',
    key: 'messages',
    isActive: !isCustomerMode
  }, {
    name: 'help',
    pathname: '/help',
    displayName: 'help',
    key: 'help',
    isActive: true
  }, {
    name: 'sessions',
    pathname: '/sessions',
    displayName: 'sessions',
    key: 'sessions',
    isActive: true
  }, {
    name: 'favorite',
    pathname: '/favorite',
    displayName: 'favorites',
    key: 'favorites',
    isActive: true
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
        content: (verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : (_verifyPhoneState$res2 = verifyPhoneState.result) === null || _verifyPhoneState$res2 === void 0 ? void 0 : _verifyPhoneState$res2.result) || [t('ERROR', 'Error')]
      });
    } else {
      resetOtpLeftTime();
    }
  }, [verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : (_verifyPhoneState$res3 = verifyPhoneState.result) === null || _verifyPhoneState$res3 === void 0 ? void 0 : _verifyPhoneState$res3.result]);
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
  }), !isHiddenAddress && !props.hideOptions && /*#__PURE__*/_react.default.createElement(_ProfileOptions.ProfileOptions, {
    value: "account"
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.UserProfileContainer, {
    mbottom: isHiddenAddress && 25
  }, showCustomerPicture && /*#__PURE__*/_react.default.createElement(_styles.UserImage, {
    className: "user-image"
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    onClick: function onClick() {
      return handleClickImage();
    },
    isImage: (user === null || user === void 0 ? void 0 : user.photo) || (formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.photo) && !formState.result.error
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
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here'))) : (formState === null || formState === void 0 ? void 0 : (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.photo) && formState.result.error && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.photo,
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
var UserProfileForm = function UserProfileForm(props) {
  var UserProfileProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserProfileFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserFormDetails, UserProfileProps);
};
exports.UserProfileForm = UserProfileForm;