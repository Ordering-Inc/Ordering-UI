"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfile = exports.Reward = exports.LifePre = exports.GeoAlt = exports.Bell = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _FiCamera = _interopRequireDefault(require("@meronex/icons/fi/FiCamera"));
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _GrLogout = _interopRequireDefault(require("@meronex/icons/gr/GrLogout"));
var _orderingComponents = require("ordering-components");
var _IosGlobe = _interopRequireDefault(require("@meronex/icons/ios/IosGlobe"));
var _UserFormDetails = require("../UserFormDetails");
var _AddressList = require("../AddressList");
var _Confirm = require("../../../../../components/Confirm");
var _utils = require("../../../../../utils");
var _LanguageSelector = require("../../../../../components/LanguageSelector");
var _Modal = require("../Modal");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UserProfileFormUI = function UserProfileFormUI(props) {
  var _formState$changes2, _props$beforeElements, _props$beforeComponen, _formState$changes3, _formState$changes4, _formState$changes5, _formState$result, _formState$changes6, _formState$changes7, _props$afterComponent, _props$afterElements;
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
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var inputRef = (0, _react.useRef)(null);
  var isLanguageFullName = true;
  var history = (0, _reactRouterDom.useHistory)();
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
  (0, _react.useEffect)(function () {
    var _formState$changes;
    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.photo) {
      var isImage = true;
      handleButtonUpdateClick(null, isImage);
    }
  }, [(_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.photo]);
  (0, _react.useEffect)(function () {
    toggleIsEdit();
  }, []);
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    modalSelected = _useState4[0],
    setModalSelected = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    modalIsOpen = _useState6[0],
    setModalIsOpen = _useState6[1];
  var openModal = function openModal(opt) {
    setModalSelected(opt);
    setModalIsOpen(true);
  };
  var handleOpenAccount = function handleOpenAccount(val) {
    openModal('account');
    if (val === 'account') {
      cleanFormState({
        changes: {}
      });
    }
  };
  var handleHelpRedirect = function handleHelpRedirect() {
    history.push('/help');
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ProfileContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('PROFILE', 'Profile')), /*#__PURE__*/_react.default.createElement(_styles.UserInfomation, null, /*#__PURE__*/_react.default.createElement(_styles.ProfileImage, null, /*#__PURE__*/_react.default.createElement(_styles.ImageWrapper, null, user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: user === null || user === void 0 ? void 0 : user.photo,
    alt: "user image",
    width: "200px",
    height: "200px",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null))), /*#__PURE__*/_react.default.createElement(_styles.UserInfo, null, /*#__PURE__*/_react.default.createElement(_styles.UserName, null, user === null || user === void 0 ? void 0 : user.name), /*#__PURE__*/_react.default.createElement(_styles.RedireactLink, {
    onClick: function onClick() {
      return handleOpenAccount('account');
    }
  }, "View account"))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.ShortLinks, null, /*#__PURE__*/_react.default.createElement(_styles.LinkItem, {
    onClick: function onClick() {
      return openModal('address');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(GeoAlt, null)), t('SAVED_ADDRESS', 'My saved places')), /*#__PURE__*/_react.default.createElement(_styles.LinkItem, {
    onClick: function onClick() {
      return handleHelpRedirect();
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(LifePre, null)), t('SAVED_ADDRESS', 'Help'))), /*#__PURE__*/_react.default.createElement(_styles.FooterMenuWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LanguageSelectorWrapper, null, /*#__PURE__*/_react.default.createElement(_IosGlobe.default, null), /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, {
    isLanguageFullName: isLanguageFullName
  })), /*#__PURE__*/_react.default.createElement(PopoverListItemLogout, null))), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "70%"
  }, modalSelected === 'account' && /*#__PURE__*/_react.default.createElement(_styles.UserProfileContainer, {
    mbottom: isHiddenAddress && 25
  }, /*#__PURE__*/_react.default.createElement(_styles.UserImage, {
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
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperForm, null, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
    onCancel: toggleEditState,
    isHiddenAddress: isHiddenAddress
  }))))), modalSelected === 'address' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((userData === null || userData === void 0 ? void 0 : userData.addresses) || (user === null || user === void 0 ? void 0 : user.addresses)) && !isHiddenAddress && /*#__PURE__*/_react.default.createElement(_styles.SavedPlaces, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MY_SAVED_PLACES', 'My Saved places')), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    addressList: user === null || user === void 0 ? void 0 : user.addresses
  }))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
var UserProfile = exports.UserProfile = function UserProfile(props) {
  var UserProfileProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserProfileFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserFormDetails, UserProfileProps);
};
var Bell = exports.Bell = function Bell() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14H6C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16Z",
    fill: "black"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 1.9179L7.203 2.0789C6.29896 2.2631 5.48633 2.754 4.90265 3.46852C4.31897 4.18304 4.0001 5.07728 4 5.9999C4 6.6279 3.866 8.1969 3.541 9.7419C3.381 10.5089 3.165 11.3079 2.878 11.9999H13.122C12.835 11.3079 12.62 10.5099 12.459 9.7419C12.134 8.1969 12 6.6279 12 5.9999C11.9997 5.07746 11.6807 4.18345 11.097 3.46913C10.5134 2.75482 9.70087 2.26406 8.797 2.0799L8 1.9169V1.9179ZM14.22 11.9999C14.443 12.4469 14.701 12.8009 15 12.9999H1C1.299 12.8009 1.557 12.4469 1.78 11.9999C2.68 10.1999 3 6.8799 3 5.9999C3 3.5799 4.72 1.5599 7.005 1.0989C6.99104 0.959852 7.00638 0.819425 7.05003 0.686672C7.09368 0.553919 7.16467 0.431788 7.25842 0.328156C7.35217 0.224525 7.4666 0.141693 7.59433 0.0850029C7.72206 0.0283129 7.86026 -0.000976562 8 -0.000976562C8.13974 -0.000976563 8.27794 0.0283129 8.40567 0.0850029C8.5334 0.141693 8.64783 0.224525 8.74158 0.328156C8.83533 0.431788 8.90632 0.553919 8.94997 0.686672C8.99362 0.819425 9.00896 0.959852 8.995 1.0989C10.1253 1.3288 11.1414 1.94226 11.8712 2.8354C12.6011 3.72854 12.9999 4.84647 13 5.9999C13 6.8799 13.32 10.1999 14.22 11.9999Z",
    fill: "black"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "4",
    fill: "#E63757"
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "16",
    height: "16",
    fill: "white"
  }))));
};
var GeoAlt = exports.GeoAlt = function GeoAlt() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.166 8.94C11.642 10.002 10.932 11.06 10.206 12.01C9.5173 12.9056 8.7809 13.7635 8 14.58C7.21908 13.7635 6.48268 12.9056 5.794 12.01C5.068 11.06 4.358 10.002 3.834 8.94C3.304 7.867 3 6.862 3 6C3 4.67392 3.52678 3.40215 4.46447 2.46447C5.40215 1.52678 6.67392 1 8 1C9.32608 1 10.5979 1.52678 11.5355 2.46447C12.4732 3.40215 13 4.67392 13 6C13 6.862 12.695 7.867 12.166 8.94ZM8 16C8 16 14 10.314 14 6C14 4.4087 13.3679 2.88258 12.2426 1.75736C11.1174 0.632141 9.5913 0 8 0C6.4087 0 4.88258 0.632141 3.75736 1.75736C2.63214 2.88258 2 4.4087 2 6C2 10.314 8 16 8 16Z",
    fill: "black"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 8C7.46957 8 6.96086 7.78929 6.58579 7.41421C6.21071 7.03914 6 6.53043 6 6C6 5.46957 6.21071 4.96086 6.58579 4.58579C6.96086 4.21071 7.46957 4 8 4C8.53043 4 9.03914 4.21071 9.41421 4.58579C9.78929 4.96086 10 5.46957 10 6C10 6.53043 9.78929 7.03914 9.41421 7.41421C9.03914 7.78929 8.53043 8 8 8ZM8 9C8.79565 9 9.55871 8.68393 10.1213 8.12132C10.6839 7.55871 11 6.79565 11 6C11 5.20435 10.6839 4.44129 10.1213 3.87868C9.55871 3.31607 8.79565 3 8 3C7.20435 3 6.44129 3.31607 5.87868 3.87868C5.31607 4.44129 5 5.20435 5 6C5 6.79565 5.31607 7.55871 5.87868 8.12132C6.44129 8.68393 7.20435 9 8 9Z",
    fill: "black"
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "16",
    height: "16",
    fill: "white"
  }))));
};
var LifePre = exports.LifePre = function LifePre() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM14.43 10.772C13.7204 12.4122 12.4122 13.7204 10.772 14.43L9.657 11.642C10.536 11.2407 11.2407 10.536 11.642 9.657L14.43 10.772ZM5.228 14.43C3.58776 13.7204 2.27964 12.4122 1.57 10.772L4.358 9.657C4.75926 10.536 5.46404 11.2407 6.343 11.642L5.228 14.43ZM14.43 5.228L11.642 6.343C11.2407 5.46404 10.536 4.75926 9.657 4.358L10.772 1.57C12.4122 2.27964 13.7204 3.58776 14.43 5.228ZM6.343 4.358C5.46404 4.75926 4.75926 5.46404 4.358 6.343L1.57 5.228C2.27964 3.58776 3.58776 2.27964 5.228 1.57L6.343 4.358ZM8 11C7.20435 11 6.44129 10.6839 5.87868 10.1213C5.31607 9.55871 5 8.79565 5 8C5 7.20435 5.31607 6.44129 5.87868 5.87868C6.44129 5.31607 7.20435 5 8 5C8.79565 5 9.55871 5.31607 10.1213 5.87868C10.6839 6.44129 11 7.20435 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11Z",
    fill: "black"
  })), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    width: "16",
    height: "16",
    fill: "white"
  }))));
};
var Reward = exports.Reward = function Reward() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    id: "Capa_1",
    enableBackground: "new 0 0 512 512",
    height: "512",
    viewBox: "0 0 512 512",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m418.648 279.958 33.986-33.458-16.143-44.865 16.143-44.865-33.986-33.458-5-47.409-45.112-15.385-25.016-40.594-47.347 5.716-40.173-25.64-40.173 25.64-47.346-5.716-25.015 40.593-45.113 15.385-5.001 47.41-33.986 33.458 16.143 44.865-16.143 44.865 33.986 33.457 5 47.411 25.047 8.542-42.929 134.181 73.492-4.042 57.499 45.951 36.441-113.899 8.098 5.169 8.098-5.169 36.441 113.899 57.498-45.951 73.492 4.042-42.929-134.181 25.046-8.542zm-222.5 181.368-32.392-25.886-41.403 2.276 27.214-85.06 18.912 30.69 47.347-5.716 5.895 3.763zm152.096-25.886-32.392 25.886-25.574-79.933 5.895-3.763 47.346 5.716 18.913-30.69 27.214 85.06zm37.554-130.299-37.166 12.675-20.593 33.416-38.949-4.702-33.09 21.12-33.09-21.119-38.95 4.702-20.593-33.417-37.166-12.675-4.117-39.033-27.959-27.524 13.295-36.949-13.295-36.949 27.959-27.525 4.117-39.033 37.166-12.675 20.593-33.416 38.949 4.702 33.091-21.118 33.09 21.119 38.95-4.702 20.593 33.417 37.166 12.675 4.117 39.033 27.959 27.524-13.295 36.949 13.295 36.949-27.959 27.525z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m256 84.791c-64.428 0-116.844 52.416-116.844 116.845s52.416 116.843 116.844 116.843 116.844-52.416 116.844-116.844-52.416-116.844-116.844-116.844zm0 203.662c-47.871 0-86.818-38.947-86.818-86.818 0-47.872 38.947-86.818 86.818-86.818s86.818 38.947 86.818 86.818c0 47.872-38.947 86.818-86.818 86.818z"
  }));
};
var LogoutActionUI = function LogoutActionUI(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
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
    props.onClose && props.onClose();
  };
  return /*#__PURE__*/_react.default.createElement(_styles.LogoutWrapper, {
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_GrLogout.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('LOGOUT', 'Logout')));
};
var PopoverListItemLogout = function PopoverListItemLogout(props) {
  var logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  };
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LogoutAction, logoutActionProps);
};