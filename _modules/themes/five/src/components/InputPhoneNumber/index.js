"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputPhoneNumber = void 0;
var _react = _interopRequireWildcard(require("react"));
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _reactPhoneNumberInput = _interopRequireDefault(require("react-phone-number-input"));
var _BsPhone = _interopRequireDefault(require("@meronex/icons/bs/BsPhone"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InputPhoneNumber = exports.InputPhoneNumber = function InputPhoneNumber(props) {
  var _configs$default_coun, _phoneRef$current3;
  var user = props.user,
    value = props.value,
    setValue = props.setValue,
    handleIsValid = props.handleIsValid,
    disabled = props.disabled,
    isError = props.isError,
    useProfileFormStyle = props.useProfileFormStyle;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var phoneRef = (0, _react.useRef)(null);
  var UKCodes = ['44'];
  var isValidPhoneNumber = function isValidPhoneNumber(number) {
    var _configs$validation_p, _configs$validation_p2, _numberParser$isPossi, _numberParser$isValid;
    if (!number) return;
    if (!parseInt((_configs$validation_p = configs === null || configs === void 0 || (_configs$validation_p2 = configs.validation_phone_number_lib) === null || _configs$validation_p2 === void 0 ? void 0 : _configs$validation_p2.value) !== null && _configs$validation_p !== void 0 ? _configs$validation_p : 1, 10)) {
      return true;
    }
    var numberParser = (0, _libphonenumberJs.default)(number);
    var enableIspossibly = false;
    if (UKCodes.includes(numberParser === null || numberParser === void 0 ? void 0 : numberParser.countryCallingCode)) {
      var inputNumber = returnRawNumber(number);
      var validationsForUK = ['01', '02', '07', '0800', '0808', '0845', '0870', '0871', '16'];
      var result = validationsForUK.some(function (areaCode) {
        var _inputNumber$number;
        return inputNumber === null || inputNumber === void 0 || (_inputNumber$number = inputNumber.number) === null || _inputNumber$number === void 0 ? void 0 : _inputNumber$number.startsWith(areaCode);
      });
      enableIspossibly = result;
    }
    return enableIspossibly ? numberParser === null || numberParser === void 0 || (_numberParser$isPossi = numberParser.isPossible) === null || _numberParser$isPossi === void 0 ? void 0 : _numberParser$isPossi.call(numberParser) : numberParser === null || numberParser === void 0 || (_numberParser$isValid = numberParser.isValid) === null || _numberParser$isValid === void 0 ? void 0 : _numberParser$isValid.call(numberParser);
  };
  var returnRawNumber = function returnRawNumber(number) {
    var _configs$validation_p3, _configs$validation_p4, _phoneRef$current;
    if (!number) return null;
    if (!parseInt((_configs$validation_p3 = configs === null || configs === void 0 || (_configs$validation_p4 = configs.validation_phone_number_lib) === null || _configs$validation_p4 === void 0 ? void 0 : _configs$validation_p4.value) !== null && _configs$validation_p3 !== void 0 ? _configs$validation_p3 : 1, 10)) {
      return null;
    }
    var numberParser = (0, _libphonenumberJs.default)(number);
    var validations = ['0', '+'];
    if (validations.includes(phoneRef === null || phoneRef === void 0 || (_phoneRef$current = phoneRef.current) === null || _phoneRef$current === void 0 ? void 0 : _phoneRef$current.value[0]) && UKCodes.includes(numberParser === null || numberParser === void 0 ? void 0 : numberParser.countryCallingCode)) {
      var _phoneRef$current2, _numberInput$split;
      var numberInput = phoneRef === null || phoneRef === void 0 || (_phoneRef$current2 = phoneRef.current) === null || _phoneRef$current2 === void 0 ? void 0 : _phoneRef$current2.value.replace('-', '');
      var numberRaw = '';
      numberInput === null || numberInput === void 0 || (_numberInput$split = numberInput.split(' ')) === null || _numberInput$split === void 0 || (_numberInput$split = _numberInput$split.filter(function (_splited, i) {
        return i > 0 || i === 0 && _splited[0] === '0';
      })) === null || _numberInput$split === void 0 || _numberInput$split.map(function (splited) {
        numberRaw = "".concat(numberRaw).concat(splited);
        return numberRaw;
      });
      return {
        number: numberRaw,
        countryCallingCode: numberParser !== null && numberParser !== void 0 && numberParser.countryCallingCode ? "+".concat(numberParser === null || numberParser === void 0 ? void 0 : numberParser.countryCallingCode) : null
      };
    }
    return number;
  };
  var ContainerStyled = useProfileFormStyle ? _styles.ContainerUserForm : _styles.Container;
  (0, _react.useEffect)(function () {
    if (value) {
      handleIsValid && handleIsValid(isValidPhoneNumber(value));
    }
  }, [value]);
  return /*#__PURE__*/_react.default.createElement(ContainerStyled, {
    className: "phone_number",
    disabled: disabled,
    isValid: value ? isValidPhoneNumber(value) : true,
    isError: isError
  }, !useProfileFormStyle && /*#__PURE__*/_react.default.createElement(_styles.InputBeforeIconWrapper, null, /*#__PURE__*/_react.default.createElement(_BsPhone.default, null)), /*#__PURE__*/_react.default.createElement(_reactPhoneNumberInput.default, {
    ref: phoneRef,
    disabled: disabled,
    placeholder: t('PHONE_NUMBER', 'Phone number'),
    defaultCountry: configs === null || configs === void 0 || (_configs$default_coun = configs.default_country_code) === null || _configs$default_coun === void 0 ? void 0 : _configs$default_coun.value,
    value: value,
    name: "telefono",
    initialValueFormat: "national",
    onChange: function onChange(val) {
      return setValue && setValue(val, isValidPhoneNumber(val), returnRawNumber(val));
    }
  }), value && !isValidPhoneNumber(value) && !disabled && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (auth && (user === null || user === void 0 ? void 0 : user.country_phone_code) || !auth || value.includes('+')) && (phoneRef === null || phoneRef === void 0 || (_phoneRef$current3 = phoneRef.current) === null || _phoneRef$current3 === void 0 ? void 0 : _phoneRef$current3.value) && /*#__PURE__*/_react.default.createElement(_styles.ErrorMsg, null, t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')), auth && !(user !== null && user !== void 0 && user.country_phone_code) && !value.includes('+') && /*#__PURE__*/_react.default.createElement(_styles.ErrorMsg, null, t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'))));
};