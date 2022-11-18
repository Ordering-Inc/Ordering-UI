"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormDetailsUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _reactHookForm = require("react-hook-form");

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _styledComponents = require("styled-components");

var _styles = require("./styles");

var _Switch = require("../../../../../styles/Switch");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _InputPhoneNumber = require("../../../../../components/InputPhoneNumber");

var _LanguageSelector = require("../../../../../components/LanguageSelector");

var _Confirm = require("../Confirm");

var _utils = require("../../../../../utils");

var _Checkbox = require("../../../../../styles/Checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var UserFormDetailsUI = function UserFormDetailsUI(props) {
  var _formState$result, _formState$result2, _formState$result2$re, _formState$result2$re2, _formState$result2$re3, _formState$changes$se, _formState$changes, _formState$changes$se2, _formState$changes$se3, _user$settings, _user$settings$email, _formState$result3, _formState$result4, _formState$result4$re, _formState$result4$re2, _formState$result4$re3, _formState$changes$se4, _formState$changes2, _formState$changes2$s, _formState$changes2$s2, _user$settings2, _user$settings2$sms, _formState$result5, _formState$result6, _formState$result6$re, _formState$result6$re2, _formState$result6$re3, _formState$changes$se5, _formState$changes3, _formState$changes3$s, _formState$changes3$s2, _user$settings3, _user$settings3$notif, _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _orderingTheme$theme7, _orderingTheme$theme8, _orderingTheme$theme9, _orderingTheme$theme10, _orderingTheme$theme11, _orderingTheme$theme12, _orderingTheme$theme13, _orderingTheme$theme14, _orderingTheme$theme15, _orderingTheme$theme16, _orderingTheme$theme17, _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _configs$verification3, _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _validationFields$fie11, _props$afterMidElemen, _props$afterMidCompon, _props$afterComponent, _props$afterElements;

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
      setWillVerifyOtpState = props.setWillVerifyOtpState,
      handleChangePromotions = props.handleChangePromotions,
      isOldLayout = props.isOldLayout,
      requiredFields = props.requiredFields,
      handleChangeNotifications = props.handleChangeNotifications;
  var formMethods = (0, _reactHookForm.useForm)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var theme = (0, _styledComponents.useTheme)();

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      userSession = _useSession2[0].user;

  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
      _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
      orderingTheme = _useOrderingTheme2[0];

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

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isChanged = _useState8[0],
      setIsChanged = _useState8[1];

  var emailInput = (0, _react.useRef)(null);
  var user = userData || userSession;

  var _useState9 = (0, _react.useState)({
    email: formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.result ? !!(formState !== null && formState !== void 0 && (_formState$result2 = formState.result) !== null && _formState$result2 !== void 0 && (_formState$result2$re = _formState$result2.result) !== null && _formState$result2$re !== void 0 && (_formState$result2$re2 = _formState$result2$re.settings) !== null && _formState$result2$re2 !== void 0 && (_formState$result2$re3 = _formState$result2$re2.email) !== null && _formState$result2$re3 !== void 0 && _formState$result2$re3.newsletter) : !!((_formState$changes$se = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : (_formState$changes$se2 = _formState$changes.settings) === null || _formState$changes$se2 === void 0 ? void 0 : (_formState$changes$se3 = _formState$changes$se2.email) === null || _formState$changes$se3 === void 0 ? void 0 : _formState$changes$se3.newsletter) !== null && _formState$changes$se !== void 0 ? _formState$changes$se : user && (user === null || user === void 0 ? void 0 : (_user$settings = user.settings) === null || _user$settings === void 0 ? void 0 : (_user$settings$email = _user$settings.email) === null || _user$settings$email === void 0 ? void 0 : _user$settings$email.newsletter)),
    sms: formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result ? !!(formState !== null && formState !== void 0 && (_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && (_formState$result4$re = _formState$result4.result) !== null && _formState$result4$re !== void 0 && (_formState$result4$re2 = _formState$result4$re.settings) !== null && _formState$result4$re2 !== void 0 && (_formState$result4$re3 = _formState$result4$re2.sms) !== null && _formState$result4$re3 !== void 0 && _formState$result4$re3.newsletter) : !!((_formState$changes$se4 = formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : (_formState$changes2$s = _formState$changes2.settings) === null || _formState$changes2$s === void 0 ? void 0 : (_formState$changes2$s2 = _formState$changes2$s.sms) === null || _formState$changes2$s2 === void 0 ? void 0 : _formState$changes2$s2.newsletter) !== null && _formState$changes$se4 !== void 0 ? _formState$changes$se4 : user && (user === null || user === void 0 ? void 0 : (_user$settings2 = user.settings) === null || _user$settings2 === void 0 ? void 0 : (_user$settings2$sms = _user$settings2.sms) === null || _user$settings2$sms === void 0 ? void 0 : _user$settings2$sms.newsletter)),
    notification: formState !== null && formState !== void 0 && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.result ? !!(formState !== null && formState !== void 0 && (_formState$result6 = formState.result) !== null && _formState$result6 !== void 0 && (_formState$result6$re = _formState$result6.result) !== null && _formState$result6$re !== void 0 && (_formState$result6$re2 = _formState$result6$re.settings) !== null && _formState$result6$re2 !== void 0 && (_formState$result6$re3 = _formState$result6$re2.notification) !== null && _formState$result6$re3 !== void 0 && _formState$result6$re3.newsletter) : !!((_formState$changes$se5 = formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : (_formState$changes3$s = _formState$changes3.settings) === null || _formState$changes3$s === void 0 ? void 0 : (_formState$changes3$s2 = _formState$changes3$s.notification) === null || _formState$changes3$s2 === void 0 ? void 0 : _formState$changes3$s2.newsletter) !== null && _formState$changes$se5 !== void 0 ? _formState$changes$se5 : user && (user === null || user === void 0 ? void 0 : (_user$settings3 = user.settings) === null || _user$settings3 === void 0 ? void 0 : (_user$settings3$notif = _user$settings3.notification) === null || _user$settings3$notif === void 0 ? void 0 : _user$settings3$notif.newsletter))
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      notificationList = _useState10[0],
      setNotificationList = _useState10[1];

  var showCustomerCellphone = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme$ = _orderingTheme$theme.profile) !== null && _orderingTheme$theme$ !== void 0 && (_orderingTheme$theme$2 = _orderingTheme$theme$.components) !== null && _orderingTheme$theme$2 !== void 0 && (_orderingTheme$theme$3 = _orderingTheme$theme$2.cellphone) !== null && _orderingTheme$theme$3 !== void 0 && _orderingTheme$theme$3.hidden);
  var showCustomerPassword = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme2 = orderingTheme.theme) !== null && _orderingTheme$theme2 !== void 0 && (_orderingTheme$theme3 = _orderingTheme$theme2.profile) !== null && _orderingTheme$theme3 !== void 0 && (_orderingTheme$theme4 = _orderingTheme$theme3.components) !== null && _orderingTheme$theme4 !== void 0 && (_orderingTheme$theme5 = _orderingTheme$theme4.password) !== null && _orderingTheme$theme5 !== void 0 && _orderingTheme$theme5.hidden);
  var showCustomerPromotions = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme6 = orderingTheme.theme) !== null && _orderingTheme$theme6 !== void 0 && (_orderingTheme$theme7 = _orderingTheme$theme6.profile) !== null && _orderingTheme$theme7 !== void 0 && (_orderingTheme$theme8 = _orderingTheme$theme7.components) !== null && _orderingTheme$theme8 !== void 0 && (_orderingTheme$theme9 = _orderingTheme$theme8.promotions) !== null && _orderingTheme$theme9 !== void 0 && _orderingTheme$theme9.hidden);
  var showLangauges = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme10 = orderingTheme.theme) !== null && _orderingTheme$theme10 !== void 0 && (_orderingTheme$theme11 = _orderingTheme$theme10.profile) !== null && _orderingTheme$theme11 !== void 0 && (_orderingTheme$theme12 = _orderingTheme$theme11.components) !== null && _orderingTheme$theme12 !== void 0 && (_orderingTheme$theme13 = _orderingTheme$theme12.languages) !== null && _orderingTheme$theme13 !== void 0 && _orderingTheme$theme13.hidden);
  var showNotifications = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme14 = orderingTheme.theme) !== null && _orderingTheme$theme14 !== void 0 && (_orderingTheme$theme15 = _orderingTheme$theme14.profile) !== null && _orderingTheme$theme15 !== void 0 && (_orderingTheme$theme16 = _orderingTheme$theme15.components) !== null && _orderingTheme$theme16 !== void 0 && (_orderingTheme$theme17 = _orderingTheme$theme16.notification_settings) !== null && _orderingTheme$theme17 !== void 0 && _orderingTheme$theme17.hidden);

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

  var showInputPhoneNumber = (_validationFields$fie = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.checkout) === null || _validationFields$fie3 === void 0 ? void 0 : (_validationFields$fie4 = _validationFields$fie3.cellphone) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false;

  var setUserCellPhone = function setUserCellPhone() {
    var isEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (userPhoneNumber && !userPhoneNumber.includes('null') && !isEdit) {
      setUserPhoneNumber(userPhoneNumber);
      return;
    }

    if (user !== null && user !== void 0 && user.cellphone) {
      var _formState$changes4, _formState$changes5;

      var phone = null;

      if (formState.result.error && (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.cellphone && (_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.country_phone_code) {
        var _formState$changes6, _formState$changes7;

        phone = "+".concat((_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.country_phone_code, " ").concat((_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.cellphone);
        setUserPhoneNumber(phone);
        return;
      }

      if (user !== null && user !== void 0 && user.country_phone_code) {
        phone = "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, " ").concat(user === null || user === void 0 ? void 0 : user.cellphone);
      } else {
        phone = user === null || user === void 0 ? void 0 : user.cellphone;
      }

      setUserPhoneNumber(phone);
      return;
    }

    setUserPhoneNumber((user === null || user === void 0 ? void 0 : user.cellphone) || '');
  };

  var onSubmit = function onSubmit() {
    var _validationFields$fie5, _validationFields$fie6, _validationFields$fie7, _validationFields$fie8, _validationFields$fie9, _validationFields$fie10, _configs$verification;

    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;

    if (!userPhoneNumber && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie5 = validationFields.fields) !== null && _validationFields$fie5 !== void 0 && (_validationFields$fie6 = _validationFields$fie5.checkout) !== null && _validationFields$fie6 !== void 0 && (_validationFields$fie7 = _validationFields$fie6.cellphone) !== null && _validationFields$fie7 !== void 0 && _validationFields$fie7.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie8 = validationFields.fields) !== null && _validationFields$fie8 !== void 0 && (_validationFields$fie9 = _validationFields$fie8.checkout) !== null && _validationFields$fie9 !== void 0 && (_validationFields$fie10 = _validationFields$fie9.cellphone) !== null && _validationFields$fie10 !== void 0 && _validationFields$fie10.required || (configs === null || configs === void 0 ? void 0 : (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1')) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      });
      return;
    }

    if (!isPhoneNumberValid && userPhoneNumber) {
      if (user !== null && user !== void 0 && user.country_phone_code) {
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

      handleButtonUpdateClick(changes);
    }
  };

  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
    setUserPhoneNumber(number);
    setIsChanged(true);
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

    if (emailInput.current) {
      emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '');
    }
  };

  var showFieldWithTheme = function showFieldWithTheme(name) {
    var _orderingTheme$theme18, _orderingTheme$theme19, _orderingTheme$theme20, _orderingTheme$theme21;

    return !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme18 = orderingTheme.theme) !== null && _orderingTheme$theme18 !== void 0 && (_orderingTheme$theme19 = _orderingTheme$theme18.profile) !== null && _orderingTheme$theme19 !== void 0 && (_orderingTheme$theme20 = _orderingTheme$theme19.components) !== null && _orderingTheme$theme20 !== void 0 && (_orderingTheme$theme21 = _orderingTheme$theme20[name]) !== null && _orderingTheme$theme21 !== void 0 && _orderingTheme$theme21.hidden);
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
    var _formState$result7;

    if (!(formState !== null && formState !== void 0 && formState.loading) && formState !== null && formState !== void 0 && (_formState$result7 = formState.result) !== null && _formState$result7 !== void 0 && _formState$result7.error) {
      var _formState$result8;

      setAlertState({
        open: true,
        content: ((_formState$result8 = formState.result) === null || _formState$result8 === void 0 ? void 0 : _formState$result8.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.loading]);
  (0, _react.useEffect)(function () {
    if (!isEdit && onCloseProfile) {
      onCloseProfile();
    }

    if ((user || !isEdit) && !(formState !== null && formState !== void 0 && formState.loading)) {
      setUserCellPhone();

      if (!isEdit) {
        cleanFormState && cleanFormState({
          changes: {}
        });
      }
    }

    if (!isEdit) onCancel && onCancel();
  }, [user, isEdit]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading && emailInput.current) {
      var _formState$result9, _formState$result10, _formState$result10$r, _ref, _formState$changes$em, _formState$changes8;

      formMethods.setValue('email', formState !== null && formState !== void 0 && (_formState$result9 = formState.result) !== null && _formState$result9 !== void 0 && _formState$result9.result ? formState === null || formState === void 0 ? void 0 : (_formState$result10 = formState.result) === null || _formState$result10 === void 0 ? void 0 : (_formState$result10$r = _formState$result10.result) === null || _formState$result10$r === void 0 ? void 0 : _formState$result10$r.email : (_ref = (_formState$changes$em = formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.email) !== null && _formState$changes$em !== void 0 ? _formState$changes$em : user && (user === null || user === void 0 ? void 0 : user.email)) !== null && _ref !== void 0 ? _ref : '');
    }
  }, [validationFields, emailInput.current]);
  (0, _react.useEffect)(function () {
    if (requiredFields) return;
    formMethods.register('email', {
      required: isRequiredField('email') ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    });
  }, [formMethods]);
  (0, _react.useEffect)(function () {
    var _formState$changes9, _formState$changes10, _configs$verification2;

    if (isChanged && userPhoneNumber && isValidPhoneNumber && formState !== null && formState !== void 0 && (_formState$changes9 = formState.changes) !== null && _formState$changes9 !== void 0 && _formState$changes9.country_phone_code && formState !== null && formState !== void 0 && (_formState$changes10 = formState.changes) !== null && _formState$changes10 !== void 0 && _formState$changes10.cellphone && (configs === null || configs === void 0 ? void 0 : (_configs$verification2 = configs.verification_phone_required) === null || _configs$verification2 === void 0 ? void 0 : _configs$verification2.value) === '1') {
      setWillVerifyOtpState(true);
    }
  }, [isValidPhoneNumber, userPhoneNumber, configs === null || configs === void 0 ? void 0 : (_configs$verification3 = configs.verification_phone_required) === null || _configs$verification3 === void 0 ? void 0 : _configs$verification3.value, isChanged]);
  (0, _react.useEffect)(function () {
    if (requiredFields && !requiredFields.includes('cellphone')) setIsValidPhoneNumber(true);
  }, [requiredFields]);

  var handleEditNotifications = function handleEditNotifications(key, value) {
    setNotificationList(_objectSpread(_objectSpread({}, notificationList), {}, _defineProperty({}, key, value)));
  };

  (0, _react.useEffect)(function () {
    isEdit && handleChangeNotifications(notificationList);
  }, [notificationList]);
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
    isCheckout: isCheckout
  }, !(validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), !requiredFields && /*#__PURE__*/_react.default.createElement(_styles.Divider, null), (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie11 = validationFields.fields) === null || _validationFields$fie11 === void 0 ? void 0 : _validationFields$fie11.checkout
  }).map(function (field) {
    var _ref2, _formState$changes$fi, _ref3, _formState$changes$fi2;

    return showField && showField(field.code) && showFieldWithTheme(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? (requiredFields && requiredFields.includes(field.code) || !requiredFields) && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement("p", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      borderBottom: true,
      disabled: !isEdit,
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: (_ref2 = (_formState$changes$fi = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : user && user[field.code]) !== null && _ref2 !== void 0 ? _ref2 : '',
      onChange: handleChangeInputEmail,
      ref: function ref(e) {
        emailInput.current = e;
      },
      autoComplete: "off"
    })) : (requiredFields && requiredFields.includes(field.code) || !requiredFields) && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement("p", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      key: field.id,
      type: field.type,
      borderBottom: true,
      name: field.code,
      className: "form",
      disabled: !isEdit,
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: (_ref3 = (_formState$changes$fi2 = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi2 !== void 0 ? _formState$changes$fi2 : user && user[field.code]) !== null && _ref3 !== void 0 ? _ref3 : '',
      onChange: handleChangeInput,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field === null || field === void 0 ? void 0 : field.name, " is required")).replace('_attribute_', t(field === null || field === void 0 ? void 0 : field.name, field.code)) : null
      }),
      autoComplete: "off"
    })));
  }), !!showInputPhoneNumber && showCustomerCellphone && (requiredFields && requiredFields.includes('cellphone') || !requiredFields) && /*#__PURE__*/_react.default.createElement(_styles.InputPhoneNumberWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('PHONE', 'Phone')), /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    user: user,
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber,
    disabled: !isEdit
  })), !isCheckout && showCustomerPassword && !requiredFields && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement("p", null, t('PASSWORD', 'Password')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "password",
    name: "password",
    className: "form",
    disabled: !isEdit,
    borderBottom: true,
    placeholder: t('FRONT_VISUALS_PASSWORD', 'Password'),
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password')) : null,
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    })
  })), showNotifications && showCustomerPromotions && !requiredFields && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.NotificationsGroupSwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('MARKETING_NOTIFICATIONS', 'Marketing Notifications')), /*#__PURE__*/_react.default.createElement(_styles.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('EMAILS', 'Emails')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    onChange: function onChange(value) {
      return handleEditNotifications('email', value);
    },
    defaultChecked: notificationList === null || notificationList === void 0 ? void 0 : notificationList.email
  })), /*#__PURE__*/_react.default.createElement(_styles.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('SMS', 'Sms')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    onChange: function onChange(value) {
      return handleEditNotifications('sms', value);
    },
    defaultChecked: notificationList === null || notificationList === void 0 ? void 0 : notificationList.sms
  })), /*#__PURE__*/_react.default.createElement(_styles.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('PUSH_NOTIFICATIONS', 'Push Notifications')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    onChange: function onChange(value) {
      return handleEditNotifications('notification', value);
    },
    defaultChecked: notificationList === null || notificationList === void 0 ? void 0 : notificationList.notification
  })))), showLangauges && !requiredFields && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.LanguageSelectorWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('LANGUAGE', 'Language')), /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionsForm, null, onCancel && isOldLayout && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    type: "button",
    onClick: function onClick() {
      return onCancel(false);
    },
    disabled: formState.loading
  }, t('CANCEL', 'Cancel')), !requiredFields && (formState && Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0 && isEdit || (formState === null || formState === void 0 ? void 0 : formState.loading)) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "form-btn",
    color: "primary",
    type: "submit",
    disabled: formState.loading
  }, formState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')), requiredFields && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "form-btn",
    color: "primary",
    type: "submit",
    disabled: formState.loading
  }, formState.loading ? t('UPDATING', 'Updating...') : t('CONTINUE', 'Continue')))) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
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

exports.UserFormDetailsUI = UserFormDetailsUI;