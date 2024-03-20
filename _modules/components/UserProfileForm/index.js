"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _useWindowSize = require("../../hooks/useWindowSize");
var _UserFormDetails = require("../UserFormDetails");
var _UserFormDetails2 = require("../../themes/five/src/components/UserFormDetails");
var _AddressList = require("../AddressList");
var _Confirm = require("../Confirm");
var _Buttons = require("../../styles/Buttons");
var _ProfileOptions = require("./ProfileOptions");
var _utils = require("../../utils");
var _FiCamera = _interopRequireDefault(require("@meronex/icons/fi/FiCamera"));
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _styles = require("./styles");
var _LogoutButton = require("../LogoutButton");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UserProfileFormUI = function UserProfileFormUI(props) {
  var _theme$profile, _theme$profile2, _theme$profile3, _theme$profile4, _theme$profile5, _theme$profile6, _theme$profile7, _formState$changes2, _props$beforeElements, _props$beforeComponen, _formState$changes3, _formState$changes4, _formState$changes5, _formState$result, _formState$changes6, _formState$changes7, _props$afterComponent, _props$afterElements;
  var userData = props.userData,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    handlechangeImage = props.handlechangeImage,
    formState = props.formState,
    cleanFormState = props.cleanFormState,
    toggleIsEdit = props.toggleIsEdit,
    isHiddenAddress = props.isHiddenAddress;
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
  var theme = (0, _styledComponents.useTheme)();
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
  var showCustomerName = !(theme !== null && theme !== void 0 && (_theme$profile2 = theme.profile) !== null && _theme$profile2 !== void 0 && (_theme$profile2 = _theme$profile2.components) !== null && _theme$profile2 !== void 0 && (_theme$profile2 = _theme$profile2.name) !== null && _theme$profile2 !== void 0 && _theme$profile2.hidden);
  var showCustomerLastName = !(theme !== null && theme !== void 0 && (_theme$profile3 = theme.profile) !== null && _theme$profile3 !== void 0 && (_theme$profile3 = _theme$profile3.components) !== null && _theme$profile3 !== void 0 && (_theme$profile3 = _theme$profile3.last_name) !== null && _theme$profile3 !== void 0 && _theme$profile3.hidden);
  var showCustomerEmail = !(theme !== null && theme !== void 0 && (_theme$profile4 = theme.profile) !== null && _theme$profile4 !== void 0 && (_theme$profile4 = _theme$profile4.components) !== null && _theme$profile4 !== void 0 && (_theme$profile4 = _theme$profile4.email) !== null && _theme$profile4 !== void 0 && _theme$profile4.hidden);
  var showCustomerCellphone = !(theme !== null && theme !== void 0 && (_theme$profile5 = theme.profile) !== null && _theme$profile5 !== void 0 && (_theme$profile5 = _theme$profile5.components) !== null && _theme$profile5 !== void 0 && (_theme$profile5 = _theme$profile5.cellphone) !== null && _theme$profile5 !== void 0 && _theme$profile5.hidden);
  var showAddressList = !(theme !== null && theme !== void 0 && (_theme$profile6 = theme.profile) !== null && _theme$profile6 !== void 0 && (_theme$profile6 = _theme$profile6.components) !== null && _theme$profile6 !== void 0 && (_theme$profile6 = _theme$profile6.address_list) !== null && _theme$profile6 !== void 0 && _theme$profile6.hidden);
  var userFormLayoutColumn = (theme === null || theme === void 0 || (_theme$profile7 = theme.profile) === null || _theme$profile7 === void 0 || (_theme$profile7 = _theme$profile7.components) === null || _theme$profile7 === void 0 || (_theme$profile7 = _theme$profile7.layout) === null || _theme$profile7 === void 0 ? void 0 : _theme$profile7.position) === 'column';
  var showEditButton = showCustomerName || showCustomerLastName || showCustomerEmail || showCustomerCellphone;
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
  (0, _react.useEffect)(function () {
    var _formState$changes;
    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.photo) {
      var isImage = true;
      handleButtonUpdateClick(null, isImage);
    }
  }, [(_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.photo]);
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
    isImage: (user === null || user === void 0 ? void 0 : user.photo) || (formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.photo) && !formState.result.error
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
  }, (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.photo && formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.photo) || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) === 'Network Error' || formState.result.error ? user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: user === null || user === void 0 ? void 0 : user.photo,
    alt: "user image",
    width: "200px",
    height: "200px",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here'))) : (formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.photo) && formState.result.error && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.photo,
    alt: "user image",
    loading: "lazy"
  })))), /*#__PURE__*/_react.default.createElement(_styles.Camera, null, /*#__PURE__*/_react.default.createElement(_FiCamera.default, null))), /*#__PURE__*/_react.default.createElement(_styles.SideForm, {
    className: "user-form"
  }, !edit ? formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.UserData, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 250,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 180,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 210,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 40
  })) : /*#__PURE__*/_react.default.createElement(_styles.UserData, null, /*#__PURE__*/_react.default.createElement("h1", null, showCustomerName && ((userData === null || userData === void 0 ? void 0 : userData.name) || (user === null || user === void 0 ? void 0 : user.name)), " ", showCustomerLastName && ((userData === null || userData === void 0 ? void 0 : userData.lastname) || (user === null || user === void 0 ? void 0 : user.lastname))), /*#__PURE__*/_react.default.createElement("p", null, showCustomerEmail && ((userData === null || userData === void 0 ? void 0 : userData.email) || user.email)), showCustomerCellphone && ((userData === null || userData === void 0 ? void 0 : userData.cellphone) || (user === null || user === void 0 ? void 0 : user.cellphone)) && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      direction: 'ltr'
    }
  }, ((userData === null || userData === void 0 ? void 0 : userData.country_phone_code) || (user === null || user === void 0 ? void 0 : user.country_phone_code)) && "+".concat((userData === null || userData === void 0 ? void 0 : userData.country_phone_code) || (user === null || user === void 0 ? void 0 : user.country_phone_code), " "), (userData === null || userData === void 0 ? void 0 : userData.cellphone) || (user === null || user === void 0 ? void 0 : user.cellphone)), showEditButton && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return toggleEditState(true);
    }
  }, t('EDIT', 'Edit')), windowSize.width <= 576 && props.showLogout && /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, {
    hideText: true,
    styleContainer: {
      margin: 'auto',
      width: 24
    },
    styleWrappContent: {
      paddingRight: 0,
      paddingLeft: 0
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles.WrapperForm, null, userFormLayoutColumn ? /*#__PURE__*/_react.default.createElement(_UserFormDetails2.UserFormDetailsUI, _extends({}, props, {
    onCancel: toggleEditState,
    onCloseProfile: function onCloseProfile() {
      return setEdit(false);
    },
    isHiddenAddress: isHiddenAddress,
    isOldLayout: true
  })) : /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
    onCancel: toggleEditState,
    onCloseProfile: function onCloseProfile() {
      return setEdit(false);
    },
    isHiddenAddress: isHiddenAddress
  }))))), ((userData === null || userData === void 0 ? void 0 : userData.addresses) || (user === null || user === void 0 ? void 0 : user.addresses)) && !isHiddenAddress && showAddressList && /*#__PURE__*/_react.default.createElement(_styles.SavedPlaces, null, /*#__PURE__*/_react.default.createElement("h1", null, t('SAVED_PLACES', 'Saved places')), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
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
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
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