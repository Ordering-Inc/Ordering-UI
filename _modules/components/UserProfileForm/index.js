"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _reactHookForm = require("react-hook-form");

var _Confirm = require("../Confirm");

var _AddressList = require("../AddressList");

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

var UserProfileFormUI = function UserProfileFormUI(props) {
  var _formState$changes, _formState$result3, _formState$changes2, _formState$changes3;

  var hanldeChangeInput = props.hanldeChangeInput,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      handlechangeImage = props.handlechangeImage,
      formState = props.formState,
      showField = props.showField,
      validationFields = props.validationFields,
      isRequiredField = props.isRequiredField,
      useChekoutFileds = props.useChekoutFileds;

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

  (0, _react.useEffect)(function () {
    var _formState$result;

    if (!formState.loading && ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.error)) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR')]
      });
    }
  }, [formState.loading]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (formState.changes.photo) {
      handleButtonUpdateClick();
    }
  }, [formState.changes.photo]);

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
    if (Object.keys(formState.changes).length !== 0) {
      handleButtonUpdateClick();
    }

    setEdit(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProfileOptions.ProfileOptions, {
    value: t('MY_ACCOUNT', 'My Account')
  }), /*#__PURE__*/_react.default.createElement(_styles.UserProfileContainer, null, /*#__PURE__*/_react.default.createElement(_styles.UserImage, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.ExamineClick, {
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
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE', 'Put your image here'))) : (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.photo) ? /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.photo,
    alt: "user image"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE', 'Put your image here')))))), /*#__PURE__*/_react.default.createElement(_styles.Camera, null, /*#__PURE__*/_react.default.createElement(_GiPhotoCamera.default, null))), /*#__PURE__*/_react.default.createElement(_styles.SideForm, null, edit ? /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    onSubmit: handleSubmit(onSubmit)
  }, !(useChekoutFileds && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.values(validationFields.fields).map(function (field) {
    return showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'mobile_phone' && /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      placeholder: t('country_phone_code', 'Mobile Phone Country Code'),
      name: "country_phone_code",
      defaultValue: user.country_phone_code,
      onChange: hanldeChangeInput,
      ref: register({
        required: isRequiredField(field.code) ? t('VALIDATION_ERROR_REQUIRED', "".concat(field.name, " is required")).replace('_attribute_', t(field.name, field.code)) : null,
        pattern: {
          value: /^(\+?\d{1,3}|\d{1,4})$/,
          message: t('BAD_COUNTRY_CODE', 'Bad country Code')
        }
      })
    }), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      key: field.id,
      type: field.id < 6 && field.id >= 1 ? field.type : 'hidden',
      name: field.code === 'mobile_phone' ? 'cellphone' : field.code,
      placeholder: t(field.name),
      defaultValue: field.code === 'mobile_phone' ? user.cellphone : user[field.code],
      onChange: hanldeChangeInput,
      ref: register({
        required: isRequiredField(field.code) ? t('VALIDATION_ERROR_REQUIRED', "".concat(field.name, " is required")).replace('_attribute_', t(field.name, field.code)) : null,
        pattern: {
          value: field.code === 'email' ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i : null,
          message: field.code === 'email' ? t('VALIDATION_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email')) : null
        }
      })
    }));
  }), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "password",
    name: "password",
    placeholder: t('FRONT_VISUALS_PASSWORD'),
    onChange: hanldeChangeInput,
    ref: register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_REQUIRED', 'password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
      minLength: {
        value: 5,
        message: t('VALIDATION_ERROR_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    })
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: Object.keys(formState.changes).length ? 'primary' : 'secondary',
    type: "submit"
  }, Object.keys(formState.changes).length ? t('UPDATE', 'Update') : t('CANCEL', 'Cancel'))) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i
    });
  }))) : /*#__PURE__*/_react.default.createElement(_styles.UserData, null, formState.loading && !formState.changes.photo ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 20
  }) : /*#__PURE__*/_react.default.createElement("h4", null, user.name, " ", user.lastname), formState.loading && !formState.changes.photo ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200
  }) : /*#__PURE__*/_react.default.createElement("p", null, user.email), formState.loading && !formState.changes.photo ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200
  }) : /*#__PURE__*/_react.default.createElement("p", null, user.country_phone_code, " ", user.cellphone), formState.loading && !formState.changes.photo ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80,
    height: 40
  }) : /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return setEdit(true);
    }
  }, t('EDIT', 'Edit'))), /*#__PURE__*/_react.default.createElement(_styles.SavedPlaces, null, /*#__PURE__*/_react.default.createElement("h5", null, "Saved Places"), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    addressList: user.addresses
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PROFILE', 'profile'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
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

var UserProfileForm = function UserProfileForm(props) {
  var UserProfileProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserProfileFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserProfileForm, UserProfileProps);
};

exports.UserProfileForm = UserProfileForm;