"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AiOutlineEye = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineEye"));
var _AiOutlineEyeInvisible = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineEyeInvisible"));
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _Confirm = require("../../../../../components/Confirm");
var _InputPhoneNumber = require("../../../../../components/InputPhoneNumber");
var _utils = require("../../../../../utils");
var _FacebookLogin = require("../FacebookLogin");
var _AppleLogin = require("../AppleLogin");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _Checkbox = require("../../../../../styles/Checkbox");
var _useRecaptcha3 = require("../../../../../hooks/useRecaptcha");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var notValidationFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'address_notes'];
var SignUpFormUI = function SignUpFormUI(props) {
  var _configs$facebook_log, _validationFields$fie, _validationFields$fie2, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images2, _props$beforeMidEleme, _props$beforeMidCompo, _validationFields$fie6, _validationFields$fie7, _props$afterMidElemen, _props$afterMidCompon, _configs$terms_and_co, _configs$terms_and_co2, _configs$facebook_id, _configs$facebook_id2, _configs$apple_login_, _props$afterComponent, _props$afterElements;
  var handleChangeInput = props.handleChangeInput,
    handleButtonSignupClick = props.handleButtonSignupClick,
    elementLinkToLogin = props.elementLinkToLogin,
    useChekoutFileds = props.useChekoutFileds,
    validationFields = props.validationFields,
    showField = props.showField,
    isRequiredField = props.isRequiredField,
    formState = props.formState,
    handleSuccessSignup = props.handleSuccessSignup,
    isPopup = props.isPopup,
    externalPhoneNumber = props.externalPhoneNumber,
    saveCustomerUser = props.saveCustomerUser,
    fieldsNotValid = props.fieldsNotValid,
    signupData = props.signupData,
    enableReCaptcha = props.enableReCaptcha,
    handleReCaptcha = props.handleReCaptcha;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useRecaptcha = (0, _useRecaptcha3.useRecaptcha)(enableReCaptcha),
    _useRecaptcha2 = _slicedToArray(_useRecaptcha, 1),
    recaptchaConfig = _useRecaptcha2[0];
  var _useState = (0, _react.useState)({
      version: '',
      siteKey: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    reCaptchaVersion = _useState2[0],
    setRecaptchaVersion = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    login = _useSession2[1].login;
  var theme = (0, _styledComponents.useTheme)();
  var emailInput = (0, _react.useRef)(null);
  var isFacebookLogin = (configs === null || configs === void 0 || (_configs$facebook_log = configs.facebook_login) === null || _configs$facebook_log === void 0 ? void 0 : _configs$facebook_log.value) === 'true';
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    userPhoneNumber = _useState6[0],
    setUserPhoneNumber = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    isValidPhoneNumber = _useState8[0],
    setIsValidPhoneNumber = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    passwordSee = _useState10[0],
    setPasswordSee = _useState10[1];
  var showInputPhoneNumber = (_validationFields$fie = validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.checkout) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.cellphone) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false;
  var handleSuccessFacebook = function handleSuccessFacebook(user) {
    var _user$session;
    login({
      user: user,
      token: user === null || user === void 0 || (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
  };
  var handleSuccessApple = function handleSuccessApple(user) {
    var _user$session2;
    login({
      user: user,
      token: user === null || user === void 0 || (_user$session2 = user.session) === null || _user$session2 === void 0 ? void 0 : _user$session2.access_token
    });
  };
  var togglePasswordView = function togglePasswordView() {
    setPasswordSee(!passwordSee);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var onSubmit = function onSubmit() {
    var _validationFields$fie3, _validationFields$fie4;
    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;
    if (!userPhoneNumber && validationFields !== null && validationFields !== void 0 && (_validationFields$fie3 = validationFields.fields) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie3 = _validationFields$fie3.checkout) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie3 = _validationFields$fie3.cellphone) !== null && _validationFields$fie3 !== void 0 && _validationFields$fie3.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie4 = validationFields.fields) !== null && _validationFields$fie4 !== void 0 && (_validationFields$fie4 = _validationFields$fie4.checkout) !== null && _validationFields$fie4 !== void 0 && (_validationFields$fie4 = _validationFields$fie4.cellphone) !== null && _validationFields$fie4 !== void 0 && _validationFields$fie4.required) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required.')]
      });
      return;
    }
    if (!isPhoneNumberValid) {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
      });
      return;
    }
    handleButtonSignupClick && handleButtonSignupClick();
    if (!formState.loading && formState.result.result && !formState.result.error) {
      handleSuccessSignup(formState.result.result);
    }
  };
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
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
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      };
    }
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
    var _formState$result, _formState$result4, _formState$result5;
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2, _formState$result3;
      if (((_formState$result2 = formState.result) === null || _formState$result2 === void 0 || (_formState$result2 = _formState$result2.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2[0]) === 'ERROR_AUTH_VERIFICATION_CODE') {
        var _configs$security_rec;
        if (configs !== null && configs !== void 0 && (_configs$security_rec = configs.security_recaptcha_site_key) !== null && _configs$security_rec !== void 0 && _configs$security_rec.value) {
          var _configs$security_rec2;
          setRecaptchaVersion({
            version: 'v2',
            siteKey: configs === null || configs === void 0 || (_configs$security_rec2 = configs.security_recaptcha_site_key) === null || _configs$security_rec2 === void 0 ? void 0 : _configs$security_rec2.value
          });
          setAlertState({
            open: true,
            content: [t('TRY_AGAIN', 'Please try again')]
          });
          return;
        }
        setAlertState({
          open: true,
          content: [t('CONFIG_DOESNOT_RECAPTCHA_KEY', 'the config doesn\'t have recaptcha site key')]
        });
        return;
      }
      setAlertState({
        open: true,
        content: ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) || [t('ERROR', 'Error')]
      });
    } else if (!formState.loading && !((_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && _formState$result4.error) && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.result) {
      var _formState$result6;
      saveCustomerUser && saveCustomerUser((_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : _formState$result6.result);
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading) {
      var _validationFields$fie5;
      Object.values(validationFields === null || validationFields === void 0 || (_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.checkout).map(function (field) {
        return !notValidationFields.includes(field.code) && (field.code === 'email' ? formMethods.register('email', {
          required: isRequiredField(field.code) ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
          }
        }) : formMethods.register(field.code, {
          required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field.name, " is required")).replace('_attribute_', t(field.name, field.code)) : null
        }));
      });
    }
  }, [formMethods]);
  (0, _react.useEffect)(function () {
    Object.keys(signupData).map(function (fieldName) {
      formMethods.setValue(fieldName, signupData[fieldName]);
    });
  }, [signupData]);
  (0, _react.useEffect)(function () {
    if (externalPhoneNumber) {
      setUserPhoneNumber(externalPhoneNumber);
      handleChangePhoneNumber(externalPhoneNumber, true);
    }
  }, [externalPhoneNumber]);
  (0, _react.useEffect)(function () {
    if (recaptchaConfig !== null && recaptchaConfig !== void 0 && recaptchaConfig.siteKey) {
      setRecaptchaVersion({
        version: recaptchaConfig === null || recaptchaConfig === void 0 ? void 0 : recaptchaConfig.version,
        siteKey: recaptchaConfig === null || recaptchaConfig === void 0 ? void 0 : recaptchaConfig.siteKey
      });
    }
  }, [recaptchaConfig]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeroImage, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.homeHero
  }), /*#__PURE__*/_react.default.createElement(_styles.FormContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SignUpContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FormSide, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("img", {
    id: "logo",
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.logos) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.logotype,
    alt: "Logo sign up",
    width: "200",
    height: "66",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('CREATE_ACCOUNT_FOR_SHOPPING', 'Create an account to start shopping')), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    noValidate: true,
    isPopup: isPopup,
    onSubmit: formMethods.handleSubmit(onSubmit),
    isSkeleton: useChekoutFileds && (validationFields === null || validationFields === void 0 ? void 0 : validationFields.loading)
  }, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), !(useChekoutFileds && validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (validationFields === null || validationFields === void 0 || (_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.checkout) && (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 || (_validationFields$fie7 = validationFields.fields) === null || _validationFields$fie7 === void 0 ? void 0 : _validationFields$fie7.checkout
  }).map(function (field) {
    return showField && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: field.type,
      name: field.code,
      "aria-label": field.code,
      className: "form",
      placeholder: t(field.name),
      onChange: handleChangeInputEmail,
      ref: function ref(e) {
        emailInput.current = e;
      },
      required: !!field.required,
      autoComplete: "off"
    }) : /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: field.type,
      name: field.code,
      "aria-label": field.code,
      className: "form",
      placeholder: t(field.name),
      onChange: handleChangeInput,
      required: field.required,
      autoComplete: "off"
    }));
  }), !!showInputPhoneNumber && /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber
  }), (!fieldsNotValid || fieldsNotValid && !fieldsNotValid.includes('password')) && /*#__PURE__*/_react.default.createElement(_styles.WrapperPassword, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: !passwordSee ? 'password' : 'text',
    name: "password",
    "aria-label": "password",
    className: "form",
    placeholder: t('PASSWORD', 'Password'),
    onChange: handleChangeInput,
    required: true,
    ref: formMethods.register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    })
  }), /*#__PURE__*/_react.default.createElement(_styles.TogglePassword, {
    onClick: togglePasswordView
  }, !passwordSee ? /*#__PURE__*/_react.default.createElement(_AiOutlineEye.default, null) : /*#__PURE__*/_react.default.createElement(_AiOutlineEyeInvisible.default, null))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5)).map(function (_, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 43
    }));
  })), (configs === null || configs === void 0 || (_configs$terms_and_co = configs.terms_and_conditions) === null || _configs$terms_and_co === void 0 ? void 0 : _configs$terms_and_co.value) === 'true' && /*#__PURE__*/_react.default.createElement(_styles.TermsConditionWrapper, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    name: "acceptTerms",
    ref: formMethods.register({
      required: t('ERROR_ACCEPT_TERMS', 'You must accept the Terms & Conditions.')
    }),
    id: "acceptTerms"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "acceptTerms"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('TERMS_AND_CONDITIONS_TEXT', 'I’m agree with')), /*#__PURE__*/_react.default.createElement("a", {
    href: configs === null || configs === void 0 || (_configs$terms_and_co2 = configs.terms_and_conditions_url) === null || _configs$terms_and_co2 === void 0 ? void 0 : _configs$terms_and_co2.value,
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('TERMS_AND_CONDITIONS', 'Terms & Conditions')))), props.isRecaptchaEnable && enableReCaptcha && /*#__PURE__*/_react.default.createElement(_styles.ReCaptchaWrapper, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.ReCaptcha, {
    handleReCaptcha: handleReCaptcha,
    reCaptchaVersion: reCaptchaVersion
  })), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: formState.loading || (validationFields === null || validationFields === void 0 ? void 0 : validationFields.loading)
  }, formState.loading ? "".concat(t('LOADING', 'Loading'), "...") : t('SIGN_UP', 'Sign up'))), /*#__PURE__*/_react.default.createElement(_styles.OrContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Line, null), /*#__PURE__*/_react.default.createElement("span", null, t('OR', 'or')), /*#__PURE__*/_react.default.createElement(_styles.Line, null)), !externalPhoneNumber && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys(configs).length > 0 ? /*#__PURE__*/_react.default.createElement(_styles.SocialButtons, {
    isPopup: isPopup
  }, isFacebookLogin && (configs === null || configs === void 0 || (_configs$facebook_id = configs.facebook_id) === null || _configs$facebook_id === void 0 ? void 0 : _configs$facebook_id.value) && /*#__PURE__*/_react.default.createElement(_FacebookLogin.FacebookLoginButton, {
    appId: configs === null || configs === void 0 || (_configs$facebook_id2 = configs.facebook_id) === null || _configs$facebook_id2 === void 0 ? void 0 : _configs$facebook_id2.value,
    handleSuccessFacebookLogin: handleSuccessFacebook
  }), (configs === null || configs === void 0 || (_configs$apple_login_ = configs.apple_login_client_id) === null || _configs$apple_login_ === void 0 ? void 0 : _configs$apple_login_.value) && /*#__PURE__*/_react.default.createElement(_AppleLogin.AppleLogin, {
    onSuccess: handleSuccessApple,
    onFailure: function onFailure(data) {
      return console.log('onFailure', data);
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonSocialWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43,
    count: 2
  }))), elementLinkToLogin && /*#__PURE__*/_react.default.createElement(_styles.RedirectLink, {
    register: true,
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("span", null, t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT', 'Already have an account?')), elementLinkToLogin)))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('SIGN_UP', 'Sign up'),
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
var SignUpForm = exports.SignUpForm = function SignUpForm(props) {
  var loginControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SignUpFormUI,
    isRecaptchaEnable: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SignupForm, loginControllerProps);
};