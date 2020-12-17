"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputPhoneNumber = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

require("react-phone-number-input/style.css");

var _reactPhoneNumberInput = _interopRequireDefault(require("react-phone-number-input"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InputPhoneNumberUI = function InputPhoneNumberUI(props) {
  var _configs$countryDefau;

  var value = props.value,
      setValue = props.setValue,
      handleIsValid = props.handleIsValid,
      disabled = props.disabled,
      countryData = props.countryData;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var isValidPhoneNumber = function isValidPhoneNumber(number) {
    if (!number) return;
    var numberParser = (0, _libphonenumberJs.default)(number);
    return numberParser === null || numberParser === void 0 ? void 0 : numberParser.isValid();
  };

  (0, _react.useEffect)(function () {
    if (value) {
      handleIsValid && handleIsValid(isValidPhoneNumber(value));
    }
  }, [value]);
  (0, _react.useEffect)(function () {
    if (countryData.number) {
      var number = "".concat(countryData.number).concat(value === null || value === void 0 ? void 0 : value.replace('null', ''));
      setValue(number, isValidPhoneNumber(number));
    }
  }, [countryData.number]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    className: "phone_number",
    disabled: disabled
  }, countryData.loading || value === null ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactPhoneNumberInput.default, {
    international: true,
    defaultCountry: countryData.value || (configs === null || configs === void 0 ? void 0 : (_configs$countryDefau = configs.countryDefaultCode) === null || _configs$countryDefau === void 0 ? void 0 : _configs$countryDefau.code) || 'US',
    countryCallingCodeEditable: false,
    placeholder: t('PHONE_NUMBER', 'Phone number'),
    value: value,
    disabled: disabled,
    onChange: function onChange(val) {
      return setValue(val, isValidPhoneNumber(val));
    }
  }), value && !isValidPhoneNumber(value) && !disabled && /*#__PURE__*/_react.default.createElement(_styles.ErrorMsg, null, t('INVALID_ERROR_PHONE_NUMBER', 'Invalid phone number'))));
};

var InputPhoneNumber = function InputPhoneNumber(props) {
  var inputProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: InputPhoneNumberUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.InputPhoneNumber, inputProps);
};

exports.InputPhoneNumber = InputPhoneNumber;