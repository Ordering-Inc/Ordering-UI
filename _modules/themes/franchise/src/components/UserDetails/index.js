"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FcCancel = _interopRequireDefault(require("@meronex/icons/fc/FcCancel"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
var _orderingComponents = require("ordering-components");
var _UserFormDetails = require("../UserFormDetails");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
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
    userState = props.userState;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
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
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_DETAILS', 'Customer Details')), cartStatus !== 2 && (!isEdit ? /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return toggleIsEdit();
    }
  }, t('CHANGE', 'Change')) : /*#__PURE__*/_react.default.createElement(_FcCancel.default, {
    className: "cancel",
    onClick: function onClick() {
      return toggleEditState();
    }
  }))), !isEdit ? /*#__PURE__*/_react.default.createElement(_styles.UserData, null, (userData === null || userData === void 0 ? void 0 : userData.address) && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.address), ((userData === null || userData === void 0 ? void 0 : userData.name) || (userData === null || userData === void 0 ? void 0 : userData.middle_name) || (userData === null || userData === void 0 ? void 0 : userData.lastname) || (userData === null || userData === void 0 ? void 0 : userData.second_lastname)) && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.name, " ", userData === null || userData === void 0 ? void 0 : userData.middle_name, " ", userData === null || userData === void 0 ? void 0 : userData.lastname, " ", userData === null || userData === void 0 ? void 0 : userData.second_lastname), (userData === null || userData === void 0 ? void 0 : userData.email) && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.email), ((userData === null || userData === void 0 ? void 0 : userData.cellphone) || (user === null || user === void 0 ? void 0 : user.cellphone)) && /*#__PURE__*/_react.default.createElement("p", null, (userData === null || userData === void 0 ? void 0 : userData.country_phone_code) && "+".concat(userData === null || userData === void 0 ? void 0 : userData.country_phone_code, " "), userData === null || userData === void 0 ? void 0 : userData.cellphone), ((userData === null || userData === void 0 ? void 0 : userData.phone) || (user === null || user === void 0 ? void 0 : user.phone)) && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.cellphone)) : /*#__PURE__*/_react.default.createElement(_styles.SideForm, null, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
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
var UserDetails = function UserDetails(props) {
  var userDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserFormDetails, userDetailsProps);
};
exports.UserDetails = UserDetails;