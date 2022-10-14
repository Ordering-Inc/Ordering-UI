"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _AiOutlineWhatsApp = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineWhatsApp"));

var _FaSms = _interopRequireDefault(require("@meronex/icons/fa/FaSms"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _orderingComponents = require("ordering-components");

var _SpinnerLoader = require("../../../../../../../components/SpinnerLoader");

var _Inputs = require("../../../../styles/Inputs");

var _Buttons = require("../../../../styles/Buttons");

var _Checkbox = require("../../../../../../../styles/Checkbox");

var _utils = require("../../../../../../../utils");

var _InputPhoneNumber = require("../../../InputPhoneNumber");

var _Confirm = require("../../../Confirm");

var _Modal = require("../../../Modal");

var _styles = require("./styles");

var _styles2 = require("../../../LoginForm/layouts/pfchangs/styles");

var _reactOtpInput = _interopRequireDefault(require("react-otp-input"));

var _useCountdownTimer3 = require("../../../../../../../hooks/useCountdownTimer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var notValidationFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'address_notes'];

var SignUpFormUI = function SignUpFormUI(props) {
  var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _configs$verification, _validationFields$fie12, _validationFields$fie13, _formMethods$errors8, _formMethods$errors9, _formMethods$errors9$, _formMethods$errors10, _formMethods$errors11, _formMethods$errors12, _formMethods$errors13, _formMethods$errors14, _formMethods$errors15, _formMethods$errors16, _formMethods$errors17, _configs$terms_and_co, _formMethods$errors18, _formMethods$errors19, _formMethods$errors20, _configs$terms_and_co2;

  var handleChangeInput = props.handleChangeInput,
      useChekoutFileds = props.useChekoutFileds,
      validationFields = props.validationFields,
      showField = props.showField,
      isRequiredField = props.isRequiredField,
      formState = props.formState,
      handleSuccessSignup = props.handleSuccessSignup,
      isPopup = props.isPopup,
      externalPhoneNumber = props.externalPhoneNumber,
      saveCustomerUser = props.saveCustomerUser,
      signupData = props.signupData,
      handleChangePromotions = props.handleChangePromotions,
      checkPhoneCodeState = props.checkPhoneCodeState,
      otpDataUser = props.otpDataUser,
      signUpOtpUser = props.signUpOtpUser,
      openOtpOptions = props.openOtpOptions,
      otpState = props.otpState,
      setOtpState = props.setOtpState,
      socialOtpUser = props.socialOtpUser,
      setOpenOtpOptions = props.setOpenOtpOptions,
      setWillVerifyOtpState = props.setWillVerifyOtpState,
      willVerifyOtpState = props.willVerifyOtpState,
      numOtpInputs = props.numOtpInputs;

  var otpPlaceholder = _toConsumableArray(Array(numOtpInputs)).fill(0).join('');

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var formMethods = (0, _reactHookForm.useForm)();

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      userPhoneNumber = _useState4[0],
      setUserPhoneNumber = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      isValidPhoneNumber = _useState6[0],
      setIsValidPhoneNumber = _useState6[1];

  var _useState7 = (0, _react.useState)(1),
      _useState8 = _slicedToArray(_useState7, 2),
      fieldNumber = _useState8[0],
      setFieldNumber = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      cellphoneOtpType = _useState10[0],
      setCellphoneOtpType = _useState10[1];

  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && willVerifyOtpState),
      _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
      otpLeftTime = _useCountdownTimer2[0],
      _ = _useCountdownTimer2[1],
      resetOtpLeftTime = _useCountdownTimer2[2];

  var showInputPhoneNumber = ((_validationFields$fie = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.checkout) === null || _validationFields$fie3 === void 0 ? void 0 : (_validationFields$fie4 = _validationFields$fie3.cellphone) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false) || (configs === null || configs === void 0 ? void 0 : (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1';

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var onSubmit = function onSubmit() {
    var _validationFields$fie5, _validationFields$fie6, _validationFields$fie7, _validationFields$fie8, _validationFields$fie9, _validationFields$fie10, _configs$verification2;

    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;

    if (!userPhoneNumber && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie5 = validationFields.fields) !== null && _validationFields$fie5 !== void 0 && (_validationFields$fie6 = _validationFields$fie5.checkout) !== null && _validationFields$fie6 !== void 0 && (_validationFields$fie7 = _validationFields$fie6.cellphone) !== null && _validationFields$fie7 !== void 0 && _validationFields$fie7.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie8 = validationFields.fields) !== null && _validationFields$fie8 !== void 0 && (_validationFields$fie9 = _validationFields$fie8.checkout) !== null && _validationFields$fie9 !== void 0 && (_validationFields$fie10 = _validationFields$fie9.cellphone) !== null && _validationFields$fie10 !== void 0 && _validationFields$fie10.required || (configs === null || configs === void 0 ? void 0 : (_configs$verification2 = configs.verification_phone_required) === null || _configs$verification2 === void 0 ? void 0 : _configs$verification2.value) === '1')) {
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

    signUpOtpUser && signUpOtpUser();

    if (!formState.loading && formState.result.result && !formState.result.error && !(otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.social)) {
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
  };

  var getMaxDate = function getMaxDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    return yyyy + '-' + mm + '-' + dd;
  };

  var dateIsValid = function dateIsValid(dateStr) {
    var regex = /^\d{4}-\d{2}-\d{2}$/;

    if (dateStr.match(regex) === null) {
      return t('ERROR_WRONG_DATE_FORMAT', 'Wrong date format');
    }

    var _dateStr$split = dateStr.split('-'),
        _dateStr$split2 = _slicedToArray(_dateStr$split, 3),
        year = _dateStr$split2[0],
        month = _dateStr$split2[1],
        day = _dateStr$split2[2];

    var isoFormattedStr = "".concat(year, "-").concat(month, "-").concat(day);
    var date = new Date(isoFormattedStr);
    var timestamp = date.getTime();

    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
      return t('ERROR_WRONG_DATE_FORMAT', 'Wrong date format');
    }

    if (new Date('1964-01-01').getTime() > timestamp) {
      return t('MINIMUM_DATE_ERROR', 'Minimum date error');
    }

    if (new Date(getMaxDate()).getTime() < timestamp) {
      return t('MAXIMUM_DATE_ERROR', 'Maximum date error');
    }

    return date.toISOString().startsWith(isoFormattedStr);
  };

  var parseNumber = function parseNumber(unparsedNumber) {
    if (!unparsedNumber) return {};
    var parsedNumber = (0, _libphonenumberJs.default)(unparsedNumber);
    var cellphone = parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.nationalNumber;
    var countryPhoneCode = +(parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.countryCallingCode);
    return {
      cellphone: cellphone,
      countryPhoneCode: countryPhoneCode
    };
  };

  var openVerifyState = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(type) {
      var enableOtp;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              resetOtpLeftTime();
              setCellphoneOtpType(type);
              _context.next = 4;
              return socialOtpUser(parseNumber(signupData.cellphone), type);

            case 4:
              enableOtp = _context.sent;

              if (enableOtp) {
                setWillVerifyOtpState(true);
                setAlertState({
                  open: true,
                  content: t('VERIFICATION_CODE_SENT', 'Verification code sent')
                });
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function openVerifyState(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result3, _formState$result4;

    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    } else if (!formState.loading && !((_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.error) && (_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && _formState$result4.result) {
      var _formState$result5;

      saveCustomerUser && saveCustomerUser((_formState$result5 = formState.result) === null || _formState$result5 === void 0 ? void 0 : _formState$result5.result);
    }
  }, [formState]);
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
    var _validationFields$fie11;

    if (useChekoutFileds && validationFields !== null && validationFields !== void 0 && validationFields.loading) return;
    var fieldnum = 0;
    (0, _utils.sortInputFields)({
      values: validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie11 = validationFields.fields) === null || _validationFields$fie11 === void 0 ? void 0 : _validationFields$fie11.checkout
    }).forEach(function (field) {
      if (showField && showField(field.code) && field.code !== 'email') fieldnum += 1;
    });
    setFieldNumber(fieldnum);
  }, [validationFields]);
  (0, _react.useEffect)(function () {
    formMethods.register('cellphone', {
      required: isRequiredField('cellphone') && !(otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.cellphone) && !(otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.country_code) ? t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone')) : null
    });
  }, [otpDataUser]);
  (0, _react.useEffect)(function () {
    var _checkPhoneCodeState$;

    if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$ = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$ !== void 0 && _checkPhoneCodeState$.error && !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading)) {
      var _checkPhoneCodeState$2, _checkPhoneCodeState$3;

      setAlertState({
        open: true,
        content: (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : (_checkPhoneCodeState$2 = checkPhoneCodeState.result) === null || _checkPhoneCodeState$2 === void 0 ? void 0 : _checkPhoneCodeState$2.result) || (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : (_checkPhoneCodeState$3 = checkPhoneCodeState.result) === null || _checkPhoneCodeState$3 === void 0 ? void 0 : _checkPhoneCodeState$3.error) || [t('ERROR', 'Error')]
      });
    }
  }, [checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : checkPhoneCodeState.result]);
  (0, _react.useEffect)(function () {
    if (otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.name) {
      handleChangeInput({
        target: {
          name: 'name',
          value: otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.name
        }
      });
      formMethods.setValue('name', otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.name);
    }

    if (otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.lastname) {
      handleChangeInput({
        target: {
          name: 'lastname',
          value: otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.lastname
        }
      });
      formMethods.setValue('lastname', otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.lastname);
    }

    if (otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.email) {
      handleChangeInput({
        target: {
          name: 'email',
          value: otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.email
        }
      });
      formMethods.setValue('email', otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.email);
    }

    if (otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.cellphone && otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.country_code) {
      var cellphone = "+".concat(otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.country_code).concat(otpDataUser.cellphone);
      handleChangePhoneNumber(cellphone, true);
      formMethods.setValue('cellphone', cellphone);
    }
  }, [otpDataUser, willVerifyOtpState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SignUpContainer, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles.FormSide, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles.Title, null, willVerifyOtpState ? t('SECURITY_VERIFICATION', 'Security verification') : otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.social ? t('COMPLETE_YOUR_INFORMATION', 'Complete your information') : t('SIGN_UP', 'Sign up')), willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles.Subtitle, null, "".concat(t('INSERT_CODE_SENT', 'Insert the code sent to'), " +").concat(signupData === null || signupData === void 0 ? void 0 : signupData.country_phone_code, " ").concat(signupData.cellphone)), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    noValidate: true,
    isPopup: isPopup,
    onSubmit: formMethods.handleSubmit(onSubmit),
    isSkeleton: useChekoutFileds && (validationFields === null || validationFields === void 0 ? void 0 : validationFields.loading)
  }, !willVerifyOtpState && !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(useChekoutFileds && validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie12 = validationFields.fields) === null || _validationFields$fie12 === void 0 ? void 0 : _validationFields$fie12.checkout) && (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie13 = validationFields.fields) === null || _validationFields$fie13 === void 0 ? void 0 : _validationFields$fie13.checkout
  }).map(function (field) {
    var _formMethods$errors, _formMethods$errors$e, _formMethods$errors2, _formMethods$errors2$, _formMethods$errors3, _formMethods$errors3$, _formMethods$errors4, _formMethods$errors5, _formMethods$errors6, _formMethods$errors6$, _formMethods$errors7;

    return showField && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, (formMethods === null || formMethods === void 0 ? void 0 : (_formMethods$errors = formMethods.errors) === null || _formMethods$errors === void 0 ? void 0 : (_formMethods$errors$e = _formMethods$errors.email) === null || _formMethods$errors$e === void 0 ? void 0 : _formMethods$errors$e.type) === 'required' && !notValidationFields.includes(field.code) && /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, (_formMethods$errors2 = formMethods.errors) === null || _formMethods$errors2 === void 0 ? void 0 : (_formMethods$errors2$ = _formMethods$errors2.email) === null || _formMethods$errors2$ === void 0 ? void 0 : _formMethods$errors2$.message, " *"), ((_formMethods$errors3 = formMethods.errors) === null || _formMethods$errors3 === void 0 ? void 0 : (_formMethods$errors3$ = _formMethods$errors3.email) === null || _formMethods$errors3$ === void 0 ? void 0 : _formMethods$errors3$.type) === 'pattern' && !notValidationFields.includes(field.code) && /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: field.type,
      name: field.code,
      "aria-label": field.code,
      className: "form",
      placeholder: t(field.code.toUpperCase(), field.name),
      onChange: handleChangeInputEmail,
      ref: formMethods.register({
        required: isRequiredField(field.code) && !(otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.email) ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
        pattern: !(otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.email) && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      }),
      defaultValue: signupData[field.name] || '',
      disabled: otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.email,
      required: !!field.required,
      autoComplete: "off",
      isError: ((_formMethods$errors4 = formMethods.errors) === null || _formMethods$errors4 === void 0 ? void 0 : _formMethods$errors4.email) && !notValidationFields.includes(field.code)
    }), /*#__PURE__*/_react.default.createElement(_styles.InputBeforeIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Envelope, null))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputContainer, {
      isHalf: fieldNumber % 2 === 0
    }, ((_formMethods$errors5 = formMethods.errors) === null || _formMethods$errors5 === void 0 ? void 0 : _formMethods$errors5["".concat(field.code)]) && !notValidationFields.includes(field.code) && /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, (_formMethods$errors6 = formMethods.errors) === null || _formMethods$errors6 === void 0 ? void 0 : (_formMethods$errors6$ = _formMethods$errors6["".concat(field.code)]) === null || _formMethods$errors6$ === void 0 ? void 0 : _formMethods$errors6$.message, " *"), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: field.type,
      name: field.code,
      "aria-label": field.code,
      className: "form",
      placeholder: t(field.code.toUpperCase(), field.name),
      onChange: handleChangeInput,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field.name, " is required")).replace('_attribute_', t(field.name, field.code)) : null
      }),
      required: field.required,
      autoComplete: "off",
      isError: ((_formMethods$errors7 = formMethods.errors) === null || _formMethods$errors7 === void 0 ? void 0 : _formMethods$errors7["".concat(field.code)]) && !notValidationFields.includes(field.code)
    }), /*#__PURE__*/_react.default.createElement(_styles.InputBeforeIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Person, null))))));
  }), !!showInputPhoneNumber && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_formMethods$errors8 = formMethods.errors) === null || _formMethods$errors8 === void 0 ? void 0 : _formMethods$errors8.cellphone) && !userPhoneNumber && /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, (_formMethods$errors9 = formMethods.errors) === null || _formMethods$errors9 === void 0 ? void 0 : (_formMethods$errors9$ = _formMethods$errors9.cellphone) === null || _formMethods$errors9$ === void 0 ? void 0 : _formMethods$errors9$.message, " ", (formMethods === null || formMethods === void 0 ? void 0 : (_formMethods$errors10 = formMethods.errors) === null || _formMethods$errors10 === void 0 ? void 0 : (_formMethods$errors11 = _formMethods$errors10.cellphone) === null || _formMethods$errors11 === void 0 ? void 0 : _formMethods$errors11.type) === 'required' && '*'), /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber,
    isError: ((_formMethods$errors12 = formMethods.errors) === null || _formMethods$errors12 === void 0 ? void 0 : _formMethods$errors12.cellphone) && !userPhoneNumber,
    disabled: (otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.cellphone) && (otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.country_code)
  })), /*#__PURE__*/_react.default.createElement(_styles.DateContainer, null, /*#__PURE__*/_react.default.createElement("label", null, (_formMethods$errors13 = formMethods.errors) !== null && _formMethods$errors13 !== void 0 && _formMethods$errors13.birthdate ? /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, (_formMethods$errors14 = formMethods.errors) === null || _formMethods$errors14 === void 0 ? void 0 : (_formMethods$errors15 = _formMethods$errors14.birthdate) === null || _formMethods$errors15 === void 0 ? void 0 : _formMethods$errors15.message, " ", (formMethods === null || formMethods === void 0 ? void 0 : (_formMethods$errors16 = formMethods.errors) === null || _formMethods$errors16 === void 0 ? void 0 : (_formMethods$errors17 = _formMethods$errors16.birthdate) === null || _formMethods$errors17 === void 0 ? void 0 : _formMethods$errors17.type) === 'required' && '*') : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('BIRTHDATE', 'Birthdate'))), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "date",
    name: "birthdate",
    placeholder: "dd-mm-yyyy",
    value: signupData.birthdate,
    min: "1964-01-01",
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    max: getMaxDate(),
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_BIRTH_DATE_REQUIRED', 'Birthdate is required'),
      validate: function validate(value) {
        return dateIsValid(value);
      },
      valueAsDate: true
    }),
    pattern: "\\d{4}-\\d{2}-\\d{2}"
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5)).map(function (_, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 43
    }));
  })), /*#__PURE__*/_react.default.createElement(_styles.CheckboxArea, null, /*#__PURE__*/_react.default.createElement(_styles.PromotionsWrapper, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    name: "promotions",
    id: "promotions",
    onChange: handleChangePromotions
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "promotions"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('RECEIVE_NEWS_EXCLUSIVE_PROMOTIONS', 'Receive newsletters and exclusive promotions')))), (configs === null || configs === void 0 ? void 0 : (_configs$terms_and_co = configs.terms_and_conditions) === null || _configs$terms_and_co === void 0 ? void 0 : _configs$terms_and_co.value) === 'true' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_formMethods$errors18 = formMethods.errors) === null || _formMethods$errors18 === void 0 ? void 0 : _formMethods$errors18.acceptTerms) && /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, (_formMethods$errors19 = formMethods.errors) === null || _formMethods$errors19 === void 0 ? void 0 : (_formMethods$errors20 = _formMethods$errors19.acceptTerms) === null || _formMethods$errors20 === void 0 ? void 0 : _formMethods$errors20.message, " *"), /*#__PURE__*/_react.default.createElement(_styles.TermsConditionWrapper, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    name: "acceptTerms",
    ref: formMethods.register({
      required: t('ERROR_ACCEPT_TERMS', 'You must accept the Terms & Conditions.')
    }),
    id: "acceptTerms"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "acceptTerms"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('TERMS_AND_CONDITIONS_TEXT', 'I’m agree with')), /*#__PURE__*/_react.default.createElement("a", {
    href: configs === null || configs === void 0 ? void 0 : (_configs$terms_and_co2 = configs.terms_and_conditions_url) === null || _configs$terms_and_co2 === void 0 ? void 0 : _configs$terms_and_co2.value,
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('TERMS_AND_CONDITIONS', 'Terms & Conditions')))))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: formState.loading || (validationFields === null || validationFields === void 0 ? void 0 : validationFields.loading)
  }, formState.loading ? "".concat(t('LOADING', 'Loading'), "...") : otpDataUser !== null && otpDataUser !== void 0 && otpDataUser.social ? t('SAVE', 'Save') : t('SIGN_UP', 'Sign up'))), willVerifyOtpState && !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && /*#__PURE__*/_react.default.createElement(_styles.OtpContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.CountdownTimer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.formatSeconds)(otpLeftTime))), /*#__PURE__*/_react.default.createElement(_styles2.OtpWrapper, null, /*#__PURE__*/_react.default.createElement(_reactOtpInput.default, {
    value: otpState,
    onChange: function onChange(otp) {
      return setOtpState(otp);
    },
    numInputs: numOtpInputs,
    containerStyle: "otp-container",
    inputStyle: "otp-input",
    placeholder: otpPlaceholder,
    isInputNum: true,
    shouldAutoFocus: true
  })), /*#__PURE__*/_react.default.createElement(_styles2.ResendCode, {
    disabled: otpLeftTime > 500,
    onClick: function onClick() {
      return openVerifyState(cellphoneOtpType);
    }
  }, t('RESEND_AGAIN', 'Resend again'), "?"), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "secundary",
    disabled: formState.loading,
    onClick: function onClick() {
      setWillVerifyOtpState(false);
    }
  }, t('CANCEL', 'Cancel')))), (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : checkPhoneCodeState.loading) && /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      height: 160
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openOtpOptions && !willVerifyOtpState,
    onClose: function onClose() {
      return setOpenOtpOptions(false);
    },
    width: "500px"
  }, /*#__PURE__*/_react.default.createElement(_styles.SendCodeContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('WILL_SEND_CODE_CONFIRM_PHONE', 'We will send you a code to confirm your cellphone')), /*#__PURE__*/_react.default.createElement(_styles.WrapperButtons, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return openVerifyState('whatsapp');
    },
    disabled: formState.loading || (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : checkPhoneCodeState.loading)
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineWhatsApp.default, null), t('WHATSAPP', 'Whatsapp')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return openVerifyState('sms');
    },
    disabled: formState.loading || (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : checkPhoneCodeState.loading)
  }, /*#__PURE__*/_react.default.createElement(_FaSms.default, null), t('SMS', 'Sms'))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  })));
};

var SignUpForm = function SignUpForm(props) {
  var _numOtpInputs = 4;

  var loginControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    isRecaptchaEnable: false,
    numOtpInputs: _numOtpInputs,
    UIComponent: SignUpFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SignupForm, loginControllerProps);
};

exports.SignUpForm = SignUpForm;