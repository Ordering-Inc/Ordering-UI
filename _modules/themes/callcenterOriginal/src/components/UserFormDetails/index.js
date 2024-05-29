"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormDetailsUI = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _reactHookForm = require("react-hook-form");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _reactPhoneNumberInput = require("react-phone-number-input");
var _styles = require("./styles");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _InputPhoneNumber = require("../InputPhoneNumber");
var _Confirm = require("../Confirm");
var _utils = require("../../../../../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UserFormDetailsUI = exports.UserFormDetailsUI = function UserFormDetailsUI(props) {
  var _user$country_phone_c, _validationFields$fie, _validationFields$fie2, _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _validationFields$fie5, _props$afterMidElemen, _props$afterMidCompon, _props$afterComponent, _props$afterElements;
  var isEdit = props.isEdit,
    formState = props.formState,
    onCancel = props.onCancel,
    showField = props.showField,
    cleanFormState = props.cleanFormState,
    onCloseProfile = props.onCloseProfile,
    isRequiredField = props.isRequiredField,
    validationFields = props.validationFields,
    handleChangeInput = props.handleChangeInput,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    isCheckout = props.isCheckout,
    userData = props.userData,
    isCustomerMode = props.isCustomerMode,
    confirmDataLayout = props.confirmDataLayout,
    inputsconfirmData = props.inputsconfirmData,
    handleRequestCustomerAddress = props.handleRequestCustomerAddress,
    setCellphoneStartZero = props.setCellphoneStartZero,
    dontToggleEditMode = props.dontToggleEditMode;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    userSession = _useSession2[0].user;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    isValidPhoneNumber = _useState2[0],
    setIsValidPhoneNumber = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    userPhoneNumber = _useState4[0],
    setUserPhoneNumber = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    setUserCustomer = _useCustomer2[1].setUserCustomer;
  var emailInput = (0, _react.useRef)(null);
  var user = userData || userSession;
  var countryPhoneCode = (_user$country_phone_c = user === null || user === void 0 ? void 0 : user.country_phone_code) !== null && _user$country_phone_c !== void 0 ? _user$country_phone_c : user === null || user === void 0 ? void 0 : user.country_code;
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    cleanFormState && cleanFormState({
      result: {
        error: false
      }
    });
  };
  var showInputPhoneNumber = (_validationFields$fie = validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.checkout) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.cellphone) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false;
  var setUserCellPhone = function setUserCellPhone() {
    var isEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (userPhoneNumber && !userPhoneNumber.includes('null') && !isEdit) {
      setUserPhoneNumber(userPhoneNumber);
      return;
    }
    if (user !== null && user !== void 0 && user.cellphone) {
      var _formState$changes, _formState$changes2;
      var phone = null;
      if (formState.result.error && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.cellphone && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.country_phone_code) {
        var _formState$changes3, _formState$changes4;
        phone = "+".concat((_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.country_phone_code, " ").concat((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.cellphone);
        setUserPhoneNumber(phone);
        return;
      }
      if (countryPhoneCode) {
        phone = "+".concat(countryPhoneCode, " ").concat(user === null || user === void 0 ? void 0 : user.cellphone);
      } else {
        phone = user === null || user === void 0 ? void 0 : user.cellphone;
      }
      setUserPhoneNumber(phone);
      return;
    }
    setUserPhoneNumber((user === null || user === void 0 ? void 0 : user.cellphone) || '');
  };
  var onSubmit = function onSubmit() {
    var _validationFields$fie3, _validationFields$fie4;
    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;
    if (!userPhoneNumber && validationFields !== null && validationFields !== void 0 && (_validationFields$fie3 = validationFields.fields) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie3 = _validationFields$fie3.checkout) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie3 = _validationFields$fie3.cellphone) !== null && _validationFields$fie3 !== void 0 && _validationFields$fie3.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie4 = validationFields.fields) !== null && _validationFields$fie4 !== void 0 && (_validationFields$fie4 = _validationFields$fie4.checkout) !== null && _validationFields$fie4 !== void 0 && (_validationFields$fie4 = _validationFields$fie4.cellphone) !== null && _validationFields$fie4 !== void 0 && _validationFields$fie4.required) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      });
      return;
    }
    if (!isPhoneNumberValid && userPhoneNumber) {
      if (countryPhoneCode) {
        setAlertState({
          open: true,
          content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
        });
        return;
      }
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
      });
      return;
    }
    if (Object.keys(formState.changes).length === 0 && isPhoneNumberValid && confirmDataLayout) {
      handleRequestCustomerAddress();
    }
    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      var changes = null;
      if (user !== null && user !== void 0 && user.cellphone && !userPhoneNumber) {
        changes = {
          country_phone_code: '',
          cellphone: ''
        };
      }
      if (isCustomerMode) {
        setUserCustomer(formState.result.result, true);
      }
      handleButtonUpdateClick(_objectSpread(_objectSpread({}, changes), {}, {
        confirmDataLayout: confirmDataLayout
      }), null, null, {
        dontToggleEditMode: dontToggleEditMode
      });
    }
  };
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid, rawNumber) {
    setUserPhoneNumber(number);
    var phoneNumberParser = null;
    var phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    };
    if (isValid) {
      var _configs$validation_p, _configs$validation_p2;
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
      if (!parseInt((_configs$validation_p = configs === null || configs === void 0 || (_configs$validation_p2 = configs.validation_phone_number_lib) === null || _configs$validation_p2 === void 0 ? void 0 : _configs$validation_p2.value) !== null && _configs$validation_p !== void 0 ? _configs$validation_p : 1, 10)) {
        var _phoneNumberParser, _formatPhoneNumber, _formatPhoneNumber$re;
        if ((_phoneNumberParser = phoneNumberParser) !== null && _phoneNumberParser !== void 0 && _phoneNumberParser.nationalNumber) phoneNumberParser.nationalNumber = (_formatPhoneNumber = (0, _reactPhoneNumberInput.formatPhoneNumber)(number)) === null || _formatPhoneNumber === void 0 || (_formatPhoneNumber$re = _formatPhoneNumber.replace) === null || _formatPhoneNumber$re === void 0 ? void 0 : _formatPhoneNumber$re.call(_formatPhoneNumber, /\s/g, '');
      }
    }
    if (phoneNumberParser) {
      var _phoneNumberParser2, _phoneNumberParser3;
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: (_phoneNumberParser2 = phoneNumberParser) === null || _phoneNumberParser2 === void 0 ? void 0 : _phoneNumberParser2.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: (_phoneNumberParser3 = phoneNumberParser) === null || _phoneNumberParser3 === void 0 ? void 0 : _phoneNumberParser3.nationalNumber
        }
      };
    }
    setCellphoneStartZero && setCellphoneStartZero(rawNumber !== null && rawNumber !== void 0 && rawNumber.number && rawNumber !== null && rawNumber !== void 0 && rawNumber.countryCallingCode ? rawNumber === null || rawNumber === void 0 ? void 0 : rawNumber.number : null);
    handleChangeInput(phoneNumber, true);
  };
  var handleChangeInputEmail = function handleChangeInputEmail(e) {
    handleChangeInput({
      target: {
        name: 'email',
        value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
      }
    });
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''));
    if (emailInput !== null && emailInput !== void 0 && emailInput.current) {
      emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '');
    }
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'));
      }
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _formState$result;
    if (!(formState !== null && formState !== void 0 && formState.loading) && formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.loading]);
  (0, _react.useEffect)(function () {
    if (!isEdit && onCloseProfile) {
      onCloseProfile();
    }
    if ((user || !isEdit) && !(formState !== null && formState !== void 0 && formState.loading)) {
      setUserCellPhone();
      if (!isEdit && !(formState !== null && formState !== void 0 && formState.loading)) {
        cleanFormState && cleanFormState({
          changes: {}
        });
        setUserCellPhone(true);
      }
    }
    if (!isEdit) onCancel && onCancel();
  }, [user, isEdit]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading && emailInput.current) {
      var _formState$result3, _formState$result4, _ref, _formState$changes$em, _formState$changes5;
      formMethods.setValue('email', formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result ? formState === null || formState === void 0 || (_formState$result4 = formState.result) === null || _formState$result4 === void 0 || (_formState$result4 = _formState$result4.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.email : (_ref = (_formState$changes$em = formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.email) !== null && _formState$changes$em !== void 0 ? _formState$changes$em : user && (user === null || user === void 0 ? void 0 : user.email)) !== null && _ref !== void 0 ? _ref : '');
    }
  }, [validationFields, emailInput.current]);
  (0, _react.useEffect)(function () {
    formMethods.register('email', {
      required: isRequiredField('email') ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    });
  }, [formMethods]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    isCheckout: isCheckout,
    isEdit: isEdit,
    confirmDataLayout: confirmDataLayout
  }, !(validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), !confirmDataLayout && /*#__PURE__*/_react.default.createElement(_styles.Divider, null), (0, _utils.sortInputFields)({
    values: inputsconfirmData || (validationFields === null || validationFields === void 0 || (_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.checkout)
  }).map(function (field) {
    var _formState$result5, _formState$result6, _ref2, _formState$changes$fi, _formState$result7, _formState$result8, _ref3, _formState$changes$fi2;
    return showField && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, !confirmDataLayout && /*#__PURE__*/_react.default.createElement("p", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      borderBottom: true,
      disabled: !isEdit,
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: formState !== null && formState !== void 0 && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.result ? formState === null || formState === void 0 || (_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : _formState$result6.result[field.code] : (_ref2 = (_formState$changes$fi = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : user && user[field.code]) !== null && _ref2 !== void 0 ? _ref2 : '',
      onChange: handleChangeInputEmail,
      ref: function ref(e) {
        emailInput.current = e;
      },
      autoComplete: "off"
    })) : /*#__PURE__*/_react.default.createElement(_styles.InputGroup, {
      confirmDataLayout: confirmDataLayout
    }, !confirmDataLayout && /*#__PURE__*/_react.default.createElement("p", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      key: field.id,
      type: field.type,
      borderBottom: true,
      name: field.code,
      className: "form",
      disabled: !isEdit,
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: formState !== null && formState !== void 0 && (_formState$result7 = formState.result) !== null && _formState$result7 !== void 0 && _formState$result7.result ? formState === null || formState === void 0 || (_formState$result8 = formState.result) === null || _formState$result8 === void 0 ? void 0 : _formState$result8.result[field.code] : (_ref3 = (_formState$changes$fi2 = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi2 !== void 0 ? _formState$changes$fi2 : user && user[field.code]) !== null && _ref3 !== void 0 ? _ref3 : '',
      onChange: handleChangeInput,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field === null || field === void 0 ? void 0 : field.name, " is required")).replace('_attribute_', t(field === null || field === void 0 ? void 0 : field.name, field.code)) : null
      }),
      autoComplete: "off"
    })));
  }), !!showInputPhoneNumber && /*#__PURE__*/_react.default.createElement(_styles.InputPhoneNumberWrapper, {
    confirmDataLayout: confirmDataLayout
  }, !confirmDataLayout && /*#__PURE__*/_react.default.createElement("p", null, t('PHONE', 'Phone')), /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    user: user,
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber,
    disabled: !isEdit,
    useProfileFormStyle: true
  })), !confirmDataLayout && /*#__PURE__*/_react.default.createElement(_styles.Divider, null), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionsForm, null, (formState && Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0 && isEdit || (formState === null || formState === void 0 ? void 0 : formState.loading) || confirmDataLayout) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "form-btn",
    color: "primary",
    type: "submit",
    disabled: formState.loading
  }, confirmDataLayout ? t('SEND_SMS', 'Send sms') : formState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')))) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i
    });
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