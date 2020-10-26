"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetails = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHookForm = require("react-hook-form");

var _fc = require("react-icons/fc");

var _ti = require("react-icons/ti");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UserDetailsUI = function UserDetailsUI(props) {
  var isEdit = props.isEdit,
      cartStatus = props.cartStatus,
      formState = props.formState,
      userState = props.userState,
      validationFields = props.validationFields,
      useValidationFields = props.useValidationFields,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      isRequiredField = props.isRequiredField,
      handleChangeInput = props.handleChangeInput,
      onEditUserClick = props.onEditUserClick;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var inputs = [{
    name: 'name',
    placeholder: t('FIRST_NAME', 'Firstname'),
    requiredMessage: t('NAME_REQUIRED', 'Name is required'),
    type: 'text'
  }, {
    name: 'email',
    placeholder: t('EMAIL', 'Email'),
    requiredMessage: t('EMAIL_REQUIRED', 'Email is required'),
    type: 'text'
  }, {
    name: 'cellphone',
    placeholder: t('CELLPHONE', 'Cellphone'),
    requiredMessage: t('CELLPHONE_REQUIRED', 'Cellphone is required'),
    type: 'text'
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (useValidationFields && validationFields.loading || userState.loading) && /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  })), userState.result && userState.result.error && /*#__PURE__*/_react.default.createElement("p", null, userState.result.result), !(useValidationFields && validationFields.loading || userState.loading) && userState.result && userState.result.result && /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_DETAILS', 'Customer Details')), !userState.result.error && (useValidationFields || !validationFields.loading) && cartStatus !== 2 && (!isEdit ? /*#__PURE__*/_react.default.createElement(_ti.TiPencil, {
    className: "edit",
    onClick: function onClick() {
      return onEditUserClick();
    }
  }) : /*#__PURE__*/_react.default.createElement(_fc.FcCancel, {
    className: "cancel",
    onClick: function onClick() {
      return onEditUserClick();
    }
  }))), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit(handleButtonUpdateClick)
  }, inputs.map(function (_input) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: _input.name
    }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      name: _input.name,
      type: _input.type,
      placeholder: _input.placeholder,
      style: {
        borderColor: errors[_input.name] ? '#c10000' : null,
        marginBottom: '10px',
        boxSizing: 'border-box'
      },
      onChange: handleChangeInput,
      defaultValue: userState.result.result[_input.name],
      disabled: !isEdit,
      ref: register({
        required: isRequiredField(_input.name) ? _input.requiredMessage : null
      })
    }), errors[_input.name] && /*#__PURE__*/_react.default.createElement("i", {
      style: {
        color: '#c10000'
      }
    }, errors[_input.name].message));
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: Object.keys(formState.changes).length === 0
  }, formState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update'), !formState.loading && formState.result && formState.result.error && /*#__PURE__*/_react.default.createElement("span", null, formState.result.result))))));
};

var UserDetails = function UserDetails(props) {
  var userDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserDetails, userDetailsProps);
};

exports.UserDetails = UserDetails;