"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _AiOutlineClose = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineClose"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
var _orderingComponents = require("ordering-components");
var _UserFormDetails = require("../UserFormDetails");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var UserDetailsUI = function UserDetailsUI(props) {
  var _userState$result, _formState$result, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var isEdit = props.isEdit,
    formState = props.formState,
    cleanFormState = props.cleanFormState,
    cartStatus = props.cartStatus,
    toggleIsEdit = props.toggleIsEdit,
    validationFields = props.validationFields,
    isUserDetailsEdit = props.isUserDetailsEdit,
    isCustomerMode = props.isCustomerMode,
    userState = props.userState,
    isHideAddress = props.isHideAddress;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    placeId = _useState2[0],
    setPlaceId = _useState2[1];
  var userData = ((_userState$result = userState.result) === null || _userState$result === void 0 ? void 0 : _userState$result.result) || props.userData || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) || user;
  (0, _react.useEffect)(function () {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit();
    }
  }, [isUserDetailsEdit]);
  var toggleEditState = function toggleEditState() {
    toggleIsEdit();
    cleanFormState({
      changes: {}
    });
  };
  (0, _react.useEffect)(function () {
    var placeId = window.localStorage.getItem('place_id');
    setPlaceId(placeId);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), (validationFields.loading || formState.loading || userState.loading) && /*#__PURE__*/_react.default.createElement(_styles.UserData, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 250,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 180,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 210,
    height: 25
  })), !(validationFields.loading || formState.loading || userState.loading) && /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, {
    className: "user-form"
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_DETAILS', 'Customer Details')), cartStatus !== 2 && isEdit && /*#__PURE__*/_react.default.createElement(_AiOutlineClose.default, {
    className: "cancel",
    onClick: function onClick() {
      return toggleEditState();
    }
  })), !isEdit ? /*#__PURE__*/_react.default.createElement(_styles.UserData, null, (userData === null || userData === void 0 ? void 0 : userData.address) && !isHideAddress && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.address), ((userData === null || userData === void 0 ? void 0 : userData.name) || (userData === null || userData === void 0 ? void 0 : userData.middle_name) || (userData === null || userData === void 0 ? void 0 : userData.lastname) || (userData === null || userData === void 0 ? void 0 : userData.second_lastname)) && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.name, " ", userData === null || userData === void 0 ? void 0 : userData.middle_name, " ", userData === null || userData === void 0 ? void 0 : userData.lastname, " ", userData === null || userData === void 0 ? void 0 : userData.second_lastname), (userData === null || userData === void 0 ? void 0 : userData.email) && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.email), ((userData === null || userData === void 0 ? void 0 : userData.cellphone) || (user === null || user === void 0 ? void 0 : user.cellphone)) && /*#__PURE__*/_react.default.createElement("p", null, (userData === null || userData === void 0 ? void 0 : userData.country_phone_code) && "+".concat(userData === null || userData === void 0 ? void 0 : userData.country_phone_code, " "), userData === null || userData === void 0 ? void 0 : userData.cellphone), ((userData === null || userData === void 0 ? void 0 : userData.phone) || (user === null || user === void 0 ? void 0 : user.phone)) && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.cellphone), placeId && /*#__PURE__*/_react.default.createElement("p", null, t('PLACE_ID', 'Place ID:'), " ", placeId), cartStatus !== 2 && !isEdit && /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick() {
      return toggleIsEdit();
    }
  }, t('CHANGE', 'Change'))) : /*#__PURE__*/_react.default.createElement(_styles.SideForm, null, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
    userData: userData,
    isCustomerMode: isCustomerMode
  })))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var UserDetails = exports.UserDetails = function UserDetails(props) {
  var userDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserFormDetails, userDetailsProps);
};