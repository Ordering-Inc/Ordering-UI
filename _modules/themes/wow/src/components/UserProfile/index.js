"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileUI = exports.UserProfile = void 0;
var _react = _interopRequireWildcard(require("react"));
var _VscCalendar = _interopRequireDefault(require("@meronex/icons/vsc/VscCalendar"));
var _IosArrowDown = _interopRequireDefault(require("@meronex/icons/ios/IosArrowDown"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _HiOutlineMail = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineMail"));
var _BiPhone = _interopRequireDefault(require("@meronex/icons/bi/BiPhone"));
var _BiArrowBack = _interopRequireDefault(require("@meronex/icons/bi/BiArrowBack"));
var _BisPencil = _interopRequireDefault(require("@meronex/icons/bi/BisPencil"));
var _styledComponents = require("styled-components");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _Modal = require("../../../../../components/Modal");
var _AddressList = require("../AddressList");
var _UserProfileDropDown = require("../UserProfileDropDown");
var _ProfileBusinesses = require("../ProfileBusinesses");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _ProfileEdit = require("../ProfileEdit");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UserProfileUI = exports.UserProfileUI = function UserProfileUI(props) {
  var _formState$changes2, _theme$images;
  var userData = props.userData,
    formState = props.formState,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    isHiddenAddress = props.isHiddenAddress;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var theme = (0, _styledComponents.useTheme)();
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    user = _useSession2$.user;
  var _useState = (0, _react.useState)('myProfile'),
    _useState2 = _slicedToArray(_useState, 2),
    selectedItem = _useState2[0],
    setSelectedItem = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openEditModal = _useState4[0],
    setOpenEditModal = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    setActive = _useState6[0],
    setActiveState = _useState6[1];
  var _useState7 = (0, _react.useState)('accordion__icon'),
    _useState8 = _slicedToArray(_useState7, 2),
    setRotate = _useState8[0],
    setRotateState = _useState8[1];
  var content = (0, _react.useRef)(null);
  var toggleAccordion = function toggleAccordion(e) {
    if (windowSize.width > 992) return;
    setActiveState(setActive === '' ? 'active' : '');
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };
  var handleChangeItem = function handleChangeItem(item) {
    setSelectedItem(item);
    if (windowSize.width < 992) {
      setActiveState('');
      setRotateState('accordion__icon');
    }
  };
  (0, _react.useEffect)(function () {
    var _formState$changes;
    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.photo) {
      var isImage = true;
      handleButtonUpdateClick(null, isImage);
    }
  }, [(_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.photo]);
  (0, _react.useEffect)(function () {
    if (windowSize.width > 992) {
      setActiveState('active');
      setRotateState('accordion__icon');
    }
  }, [windowSize === null || windowSize === void 0 ? void 0 : windowSize.width]);
  (0, _react.useEffect)(function () {
    if (auth) return;
    setSelectedItem('myProfile');
  }, [auth]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ProfileSidebar, null, selectedItem === 'help' && /*#__PURE__*/_react.default.createElement(_styles.GoBackContainer, {
    onClick: function onClick() {
      return setSelectedItem('myProfile');
    }
  }, /*#__PURE__*/_react.default.createElement(_BiArrowBack.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('BACK', 'Back'))), /*#__PURE__*/_react.default.createElement(_styles.ProfileSidebarInnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Header, {
    className: "accordion ".concat(setActive),
    onClick: function onClick(e) {
      return toggleAccordion(e);
    },
    mobileView: windowSize.width < 992
  }, auth && (windowSize === null || windowSize === void 0 ? void 0 : windowSize.width) < 992 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UserHeaderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.DropDownCircleImage, {
    src: user === null || user === void 0 ? void 0 : user.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), /*#__PURE__*/_react.default.createElement("span", null, (userData === null || userData === void 0 ? void 0 : userData.name) || (user === null || user === void 0 ? void 0 : user.name), " ", (userData === null || userData === void 0 ? void 0 : userData.lastname) || (user === null || user === void 0 ? void 0 : user.lastname))), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_IosArrowDown.default, {
    className: "".concat(setRotate)
  }))) : /*#__PURE__*/_react.default.createElement("h1", null, t('MY_PROFILE', 'My profile'))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      maxHeight: !setActive && '0px'
    }
  }, /*#__PURE__*/_react.default.createElement(_UserProfileDropDown.UserProfileDropDown, {
    auth: auth,
    selectedItem: selectedItem,
    handleChangeItem: handleChangeItem
  })))), /*#__PURE__*/_react.default.createElement(_styles.ProfileContent, null, selectedItem === 'myProfile' && /*#__PURE__*/_react.default.createElement(_styles.MyProfileInfo, null, /*#__PURE__*/_react.default.createElement(_styles.MyProfileInnerContainer, null, auth ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, t('MY_PROFILE', 'My profile')), /*#__PURE__*/_react.default.createElement(_styles.UserHeaderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.DropDownCircleImage, {
    src: user === null || user === void 0 ? void 0 : user.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), /*#__PURE__*/_react.default.createElement("span", null, (userData === null || userData === void 0 ? void 0 : userData.name) || (user === null || user === void 0 ? void 0 : user.name), " ", (userData === null || userData === void 0 ? void 0 : userData.lastname) || (user === null || user === void 0 ? void 0 : user.lastname)), /*#__PURE__*/_react.default.createElement(_styles.EditProfileButton, {
    onClick: function onClick() {
      return setOpenEditModal(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_BisPencil.default, null))), /*#__PURE__*/_react.default.createElement(_styles.ProfileItem, null, /*#__PURE__*/_react.default.createElement(_HiOutlineMail.default, null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("span", null, (userData === null || userData === void 0 ? void 0 : userData.email) || user.email))), ((userData === null || userData === void 0 ? void 0 : userData.cellphone) || (user === null || user === void 0 ? void 0 : user.cellphone)) && /*#__PURE__*/_react.default.createElement(_styles.ProfileItem, null, /*#__PURE__*/_react.default.createElement(_BiPhone.default, null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('PHONE', 'Phone')), /*#__PURE__*/_react.default.createElement("span", null, ((userData === null || userData === void 0 ? void 0 : userData.country_phone_code) || (user === null || user === void 0 ? void 0 : user.country_phone_code)) && "+".concat((userData === null || userData === void 0 ? void 0 : userData.country_phone_code) || (user === null || user === void 0 ? void 0 : user.country_phone_code), " "), (userData === null || userData === void 0 ? void 0 : userData.cellphone) || (user === null || user === void 0 ? void 0 : user.cellphone)))), ((userData === null || userData === void 0 ? void 0 : userData.birthdate) || (user === null || user === void 0 ? void 0 : user.birthdate)) && /*#__PURE__*/_react.default.createElement(_styles.ProfileItem, null, /*#__PURE__*/_react.default.createElement(_VscCalendar.default, null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('BIRTHDATE', 'Birthdate')), /*#__PURE__*/_react.default.createElement("span", null, (userData === null || userData === void 0 ? void 0 : userData.birthdate) || (user === null || user === void 0 ? void 0 : user.birthdate))))) : /*#__PURE__*/_react.default.createElement(_styles.GuestProfileContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('WOW_GUEST_USER_PROFILE_TITLE', 'What are you waiting for to enjoy all the benefits that Wow + has for you?')), /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.guestUser,
    alt: "guest user"
  })))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, selectedItem === 'savedAddress' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((userData === null || userData === void 0 ? void 0 : userData.addresses) || (user === null || user === void 0 ? void 0 : user.addresses)) && !isHiddenAddress && /*#__PURE__*/_react.default.createElement(_styles.SavedPlaces, null, /*#__PURE__*/_react.default.createElement("p", null, t('YOUR_ADDRESSES', 'Your addresses')), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    addressList: user === null || user === void 0 ? void 0 : user.addresses
  }))), selectedItem === 'businesses' && /*#__PURE__*/_react.default.createElement(_ProfileBusinesses.ProfileBusinesses, null))), openEditModal && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openEditModal,
    onClose: function onClose() {
      return setOpenEditModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ProfileEdit.ProfileEdit, _extends({}, props, {
    user: user,
    onCancel: function onCancel() {
      return setOpenEditModal(false);
    }
  }))));
};
var UserProfile = exports.UserProfile = function UserProfile(props) {
  var UserProfileProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserProfileUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserFormDetails, UserProfileProps);
};