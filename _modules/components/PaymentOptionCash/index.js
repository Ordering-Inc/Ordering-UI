"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionCash = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _Inputs = require("../../styles/Inputs");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PaymentOptionCash = function PaymentOptionCash(props) {
  var orderTotal = props.orderTotal,
      onChangeData = props.onChangeData,
      setErrorCash = props.setErrorCash;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var handleChangeCash = function handleChangeCash(e) {
    var _e$target;

    var cash = parseFloat(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
    cash = isNaN(cash) ? null : cash;
    onChangeData && onChangeData({
      cash: cash
    });
    handleSubmit(function () {})(e);
  };
  /**
   * effect for disable the place button on component did mount
   */


  (0, _react.useEffect)(function () {
    handleChangeCash();
  }, []);
  /**
   * effect for disable the place button on errors with cash
   */

  (0, _react.useEffect)(function () {
    handleError();
  }, [errors]);

  var handleError = function handleError() {
    if (errors.cash) {
      setErrorCash(true);
    } else {
      setErrorCash(false);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.PaymentCashContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FormCash, {
    onSubmit: handleSubmit(function () {})
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperInput, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXACT_AMMOUNT', 'Don’t have exact amount? Let us know with how much will you pay')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "cash",
    type: "number",
    placeholder: "0",
    onChange: handleChangeCash,
    ref: register({
      validate: function validate(value) {
        return value === '' || value >= orderTotal;
      }
    })
  })), errors.cash && errors.cash.type === 'required' && /*#__PURE__*/_react.default.createElement(_styles.ErrorText, null, t('FIELD_REQUIRED', 'This field is required')), errors.cash && errors.cash.type === 'validate' && /*#__PURE__*/_react.default.createElement(_styles.ErrorText, null, t('VALUE_GREATER_THAN_TOTAL', 'This value must be greater than order total'), ": ", parsePrice(orderTotal))));
};

exports.PaymentOptionCash = PaymentOptionCash;