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

var _Modal = require("../Modal");

var _VerifyCodeForm = require("../VerifyCodeForm");

var _useCountdownTimer3 = require("../../../../../hooks/useCountdownTimer");

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

var UserProfileFormUI = function UserProfileFormUI(props) {
  var _formState$changes5, _props$beforeElements, _props$beforeComponen, _formState$changes6, _formState$changes7, _formState$changes8, _formState$result, _formState$changes9, _formState$changes10, _props$afterComponent, _props$afterElements;

  var userData = props.userData,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      handlechangeImage = props.handlechangeImage,
      formState = props.formState,
      cleanFormState = props.cleanFormState,
      toggleIsEdit = props.toggleIsEdit,
      isHiddenAddress = props.isHiddenAddress,
      checkPhoneCodeState = props.checkPhoneCodeState,
      handleSendVerifyCode = props.handleSendVerifyCode,
      handleCheckPhoneCode = props.handleCheckPhoneCode,
      verifyPhoneState = props.verifyPhoneState,
      isVerifiedPhone = props.isVerifiedPhone;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      edit = _useState2[0],
      setEdit = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      willVerifyOtpState = _useState4[0],
      setWillVerifyOtpState = _useState4[1];

  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && willVerifyOtpState),
      _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
      otpLeftTime = _useCountdownTimer2[0],
      resetOtpLeftTime = _useCountdownTimer2[2];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      alertState = _useState6[0],
      setAlertState = _useState6[1];

  var inputRef = (0, _react.useRef)(null);
  console.log(edit);

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
    setEdit(val);
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

  (0, _react.useEffect)(function () {
    var _formState$changes4;

    if ((_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.photo) {
      var isImage = true;
      handleButtonUpdateClick(null, isImage);
    }
  }, [(_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.photo]);
  (0, _react.useEffect)(function () {
    var _checkPhoneCodeState$;

    if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$ = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$ !== void 0 && _checkPhoneCodeState$.error) {
      var _checkPhoneCodeState$2;

      setAlertState({
        open: true,
        content: (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : (_checkPhoneCodeState$2 = checkPhoneCodeState.result) === null || _checkPhoneCodeState$2 === void 0 ? void 0 : _checkPhoneCodeState$2.result) || [t('ERROR', 'Error')]
      });
    } else {
      resetOtpLeftTime();
    }
  }, [checkPhoneCodeState]);
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
  }, [verifyPhoneState]);
  (0, _react.useEffect)(function () {
    toggleIsEdit();
  }, []);
  (0, _react.useEffect)(function () {
    handleSendOtp();
  }, [willVerifyOtpState]);
  (0, _react.useEffect)(function () {
    if (isVerifiedPhone) setWillVerifyOtpState(false);
  }, [isVerifiedPhone]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !isHiddenAddress && /*#__PURE__*/_react.default.createElement(_ProfileOptions.ProfileOptions, {
    value: "account"
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.UserProfileContainer, {
    mbottom: isHiddenAddress && 25
  }, /*#__PURE__*/_react.default.createElement(_styles.UserImage, {
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
  })))), /*#__PURE__*/_react.default.createElement(_styles.Camera, null, /*#__PURE__*/_react.default.createElement(_FiCamera.default, null))), /*#__PURE__*/_react.default.createElement(_styles.SideForm, {
    className: "user-form"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperForm, null, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
    onCancel: toggleEditState,
    onCloseProfile: function onCloseProfile() {
      return setEdit(false);
    },
    isHiddenAddress: isHiddenAddress,
    setWillVerifyOtpState: setWillVerifyOtpState
  }))))), ((userData === null || userData === void 0 ? void 0 : userData.addresses) || (user === null || user === void 0 ? void 0 : user.addresses)) && !isHiddenAddress && /*#__PURE__*/_react.default.createElement(_styles.SavedPlaces, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MY_ADDRESSES', 'My Saved places')), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    addressList: user === null || user === void 0 ? void 0 : user.addresses
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
    handleCheckPhoneCode: handleCheckPhoneCode,
    email: (userData === null || userData === void 0 ? void 0 : userData.email) || (user === null || user === void 0 ? void 0 : user.email)
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