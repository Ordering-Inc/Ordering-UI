"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _reactHookForm = require("react-hook-form");

var _Confirm = require("../Confirm");

var _AddressList = require("../AddressList");

var _InputPhoneNumber = require("../InputPhoneNumber");

var _utils = require("../../utils");

var _styles = require("./styles");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _ProfileOptions = require("./ProfileOptions");

var _GiPhotoCamera = _interopRequireDefault(require("@meronex/icons/gi/GiPhotoCamera"));

var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var notValidationFields = ['coupon', 'driver_tip', 'mobile_phone'];

var UserProfileFormUI = function UserProfileFormUI(props) {
  var _formState$changes, _formState$result3, _formState$changes2, _formState$changes3;

  var handleChangeInput = props.handleChangeInput,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      handlechangeImage = props.handlechangeImage,
      formState = props.formState,
      showField = props.showField,
      validationFields = props.validationFields,
      isRequiredField = props.isRequiredField,
      useChekoutFileds = props.useChekoutFileds,
      cleanFormState = props.cleanFormState;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      edit = _useState4[0],
      setEdit = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      userPhoneNumber = _useState6[0],
      setUserPhoneNumber = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      isValidPhoneNumber = _useState8[0],
      setIsValidPhoneNumber = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      validationFieldsSorted = _useState10[0],
      setValidationFieldsSorted = _useState10[1];

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var handleFiles = function handleFiles(files) {
    if (files.length === 1) {
      handlechangeImage(files[0]);
    }
  };

  var onSubmit = function onSubmit() {
    var _validationFields$fie, _validationFields$fie2;

    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;

    if (!userPhoneNumber && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : (_validationFields$fie2 = _validationFields$fie.cellphone) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.required)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
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

    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      var changes = null;

      if ((user === null || user === void 0 ? void 0 : user.cellphone) && !userPhoneNumber) {
        changes = {
          country_phone_code: '',
          cellphone: ''
        };
      }

      handleButtonUpdateClick(changes);
      setEdit(false);
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

  var setUserCellPhone = function setUserCellPhone() {
    if (user && (user === null || user === void 0 ? void 0 : user.cellphone)) {
      var phone = null;

      if (user === null || user === void 0 ? void 0 : user.country_phone_code) {
        phone = "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, " ");
      }

      phone = "".concat(phone).concat(user === null || user === void 0 ? void 0 : user.cellphone);
      setUserPhoneNumber(phone);
    }
  };

  var handleCloseForm = function handleCloseForm() {
    setEdit(false);
    cleanFormState();
    setUserCellPhone();
  };

  var sortValidationFields = function sortValidationFields() {
    var fields = ['name', 'middle_name', 'lastname', 'second_lastname', 'email'];
    var fieldsSorted = [];
    var validationsFieldsArray = Object.values(validationFields.fields);
    fields.forEach(function (f) {
      validationsFieldsArray.forEach(function (field) {
        if (f === field.code) {
          fieldsSorted.push(field);
        }
      });
    });
    fieldsSorted.push(validationsFieldsArray.filter(function (field) {
      return !fields.includes(field.code);
    }));
    setValidationFieldsSorted((0, _utils.flatArray)(fieldsSorted));
  };

  var showInputPhoneNumber = function showInputPhoneNumber() {
    var _validationFields$fie3, _validationFields$fie4, _validationFields$fie5;

    return (_validationFields$fie3 = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 ? void 0 : (_validationFields$fie5 = _validationFields$fie4.cellphone) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.enabled) !== null && _validationFields$fie3 !== void 0 ? _validationFields$fie3 : false;
  };

  (0, _react.useEffect)(function () {
    if (validationFields.fields) {
      sortValidationFields();
    }
  }, [validationFields.fields]);
  (0, _react.useEffect)(function () {
    setUserCellPhone();
  }, [user]);
  (0, _react.useEffect)(function () {
    var _formState$result;

    if (!formState.loading && ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.error)) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState.loading]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      var content = Object.values(errors).map(function (error) {
        return error.message;
      });

      if (!isValidPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'));
      }

      setAlertState({
        open: true,
        content: content
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (formState.changes.photo) {
      handleButtonUpdateClick();
    }
  }, [formState.changes.photo]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProfileOptions.ProfileOptions, {
    value: t('MY_ACCOUNT', 'My Account')
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.UserProfileContainer, null, /*#__PURE__*/_react.default.createElement(_styles.UserImage, {
    className: "user-image"
  }, /*#__PURE__*/_react.default.createElement(_orderingComponents.ExamineClick, {
    onFiles: handleFiles,
    accept: "image/png, image/jpeg, image/jpg",
    disabled: !formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponents.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: !formState.loading
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    isImage: (user === null || user === void 0 ? void 0 : user.photo) || (formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.photo)
  }, formState.changes.photo && formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !formState.changes.photo || ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) === 'Network Error' ? (user === null || user === void 0 ? void 0 : user.photo) ? /*#__PURE__*/_react.default.createElement("img", {
    src: user === null || user === void 0 ? void 0 : user.photo,
    alt: "user image"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here'))) : (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.photo) ? /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.photo,
    alt: "user image"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here')))))), /*#__PURE__*/_react.default.createElement(_styles.Camera, null, /*#__PURE__*/_react.default.createElement(_GiPhotoCamera.default, null))), /*#__PURE__*/_react.default.createElement(_styles.SideForm, {
    className: "user-form"
  }, !edit ? formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.UserData, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 250,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 180,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 210,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 40
  })) : /*#__PURE__*/_react.default.createElement(_styles.UserData, null, /*#__PURE__*/_react.default.createElement("h1", null, user.name, " ", user.lastname), /*#__PURE__*/_react.default.createElement("p", null, user.email), user.cellphone && /*#__PURE__*/_react.default.createElement("p", null, user.country_phone_code && "+".concat(user.country_phone_code, " "), user.cellphone), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return setEdit(true);
    }
  }, t('EDIT', 'Edit'))) : /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    onSubmit: handleSubmit(onSubmit)
  }, !(useChekoutFileds && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, validationFieldsSorted.map(function (field) {
    return !notValidationFields.includes(field.code) && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      key: field.id,
      type: field.id >= 1 && field.id < 6 || field.id >= 55 ? field.type : 'hidden',
      name: field.code,
      className: "form",
      placeholder: t(field.name),
      defaultValue: user[field.code],
      onChange: handleChangeInput,
      ref: register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field.name, " is required")).replace('_attribute_', t(field.name, field.code)) : null,
        pattern: {
          value: field.code === 'email' ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i : null,
          message: field.code === 'email' ? t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email')) : null
        }
      }),
      autoComplete: "off"
    }));
  }), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "password",
    name: "password",
    className: "form",
    placeholder: t('FRONT_VISUALS_PASSWORD'),
    onChange: handleChangeInput,
    ref: register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password')) : null,
      minLength: {
        value: 5,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    })
  }), !!showInputPhoneNumber() && /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secondary",
    type: "button",
    onClick: function onClick() {
      return handleCloseForm();
    }
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: Object.keys(formState.changes).length === 0
  }, t('UPDATE', 'Update')))) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i
    });
  }))))), /*#__PURE__*/_react.default.createElement(_styles.SavedPlaces, null, /*#__PURE__*/_react.default.createElement("h1", null, "Saved Places"), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    addressList: user.addresses
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PROFILE', 'profile'),
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
  }));
};

var UserProfileForm = function UserProfileForm(props) {
  var UserProfileProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserProfileFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserProfileForm, UserProfileProps);
};

exports.UserProfileForm = UserProfileForm;