"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FaHome = _interopRequireDefault(require("@meronex/icons/fa/FaHome"));

var _FaPlus = _interopRequireDefault(require("@meronex/icons/fa/FaPlus"));

var _FaRegBuilding = _interopRequireDefault(require("@meronex/icons/fa/FaRegBuilding"));

var _FaRegHeart = _interopRequireDefault(require("@meronex/icons/fa/FaRegHeart"));

var _ImCompass = _interopRequireDefault(require("@meronex/icons/im/ImCompass"));

var _HiOutlineLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineLocationMarker"));

var _reactHookForm = require("react-hook-form");

var _orderingComponents = require("ordering-components");

var _Confirm = require("../Confirm");

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

var _Inputs = require("../../styles/Inputs");

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

var AddressFormUI = function AddressFormUI(props) {
  var _addressState$address, _addressState$address2, _addressState$address3, _formState$changes, _addressState$address4, _formState$changes2, _formState$changes3, _formState$changes4, _addressState$address5;

  var googleMapsControls = props.googleMapsControls,
      formState = props.formState,
      addressState = props.addressState,
      validationFields = props.validationFields,
      isRequiredField = props.isRequiredField,
      updateChanges = props.updateChanges,
      onCancel = props.onCancel,
      hanldeChangeInput = props.hanldeChangeInput,
      saveAddress = props.saveAddress;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useForm = (0, _reactHookForm.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var _useState = (0, _react.useState)({
    selectedFromAutocomplete: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)(addressState === null || addressState === void 0 ? void 0 : (_addressState$address = addressState.address) === null || _addressState$address === void 0 ? void 0 : _addressState$address.tag),
      _useState4 = _slicedToArray(_useState3, 2),
      addressTag = _useState4[0],
      setAddressTag = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      alertState = _useState6[0],
      setAlertState = _useState6[1];

  var onSubmit = function onSubmit(values) {
    saveAddress();

    if (!formState.loading) {}
  };

  var handleAddressTag = function handleAddressTag(tag) {
    setAddressTag(tag);
    hanldeChangeInput({
      target: {
        name: 'tag',
        value: tag
      }
    });
  };

  var handleChangeAddress = function handleChangeAddress(address) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      selectedFromAutocomplete: true
    }));
    updateChanges(address);
  };

  var handleAddressKeyDown = function handleAddressKeyDown() {
    state.selectedFromAutocomplete && setState(_objectSpread(_objectSpread({}, state), {}, {
      selectedFromAutocomplete: false
    }));
  };

  (0, _react.useEffect)(function () {
    var _formState$result;

    if (!formState.loading && ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.error)) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR')]
      });
    }
  }, [formState]);
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

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "address-form"
  }, /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    onSubmit: handleSubmit(onSubmit),
    autoComplete: "new-off"
  }, (addressState === null || addressState === void 0 ? void 0 : (_addressState$address2 = addressState.address) === null || _addressState$address2 === void 0 ? void 0 : _addressState$address2.location) && /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: "AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk",
    location: _objectSpread(_objectSpread({}, addressState === null || addressState === void 0 ? void 0 : (_addressState$address3 = addressState.address) === null || _addressState$address3 === void 0 ? void 0 : _addressState$address3.location), {}, {
      zoom: googleMapsControls.defaultZoom
    }),
    mapControls: googleMapsControls
  })), /*#__PURE__*/_react.default.createElement(_styles.AddressWrap, {
    className: "google-control"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapAddressInput, null, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, null), /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleAutocompleteInput, {
    className: "input-autocomplete",
    apiKey: "AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk",
    name: "address",
    placeholder: "Address",
    onChangeAddress: handleChangeAddress,
    onKeyDown: handleAddressKeyDown,
    defaultValue: ((_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.address) || ((_addressState$address4 = addressState.address) === null || _addressState$address4 === void 0 ? void 0 : _addressState$address4.address),
    childRef: register({
      required: isRequiredField('address') ? 'Address is required' : null
    }),
    autoComplete: "new-off"
  })), (!validationFields.loading || !addressState.loading) && /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleGpsButton, {
    className: "gps-button",
    apiKey: "AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk",
    onAddress: handleChangeAddress,
    IconButton: _ImCompass.default
  })), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    className: "internal_number",
    name: "internal_number",
    placeholder: "Internal number",
    ref: register,
    defaultValue: ((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.internal_number) || addressState.address.internal_number,
    onChange: hanldeChangeInput,
    autoComplete: "new-off"
  }), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    className: "zipcode",
    name: "zipcode",
    placeholder: "Zip code",
    ref: register,
    defaultValue: ((_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.zipcode) || addressState.address.zipcode,
    onChange: hanldeChangeInput,
    autoComplete: "new-off"
  }), /*#__PURE__*/_react.default.createElement("textarea", {
    name: "address_notes",
    rows: 4,
    placeholder: t('ADDRESS_NOTES', 'Address Notes'),
    ref: register,
    defaultValue: ((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.address_notes) || addressState.address.address_notes,
    onChange: hanldeChangeInput,
    autoComplete: "new-off"
  }), !formState.loading && formState.error && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: '#c10000'
    }
  }, formState.error), /*#__PURE__*/_react.default.createElement(_styles.AddressTagSection, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: addressTag === 'home' ? 'active' : '',
    type: "button",
    outline: true,
    circle: true,
    onClick: function onClick() {
      return handleAddressTag('home');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FaHome.default, null))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: addressTag === 'office' ? 'active' : '',
    type: "button",
    outline: true,
    circle: true,
    onClick: function onClick() {
      return handleAddressTag('office');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FaRegBuilding.default, null))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: addressTag === 'favorite' ? 'active' : '',
    type: "button",
    outline: true,
    circle: true,
    onClick: function onClick() {
      return handleAddressTag('favorite');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FaRegHeart.default, null))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: addressTag === 'other' ? 'active' : '',
    type: "button",
    outline: true,
    circle: true,
    onClick: function onClick() {
      return handleAddressTag('other');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FaPlus.default, null)))), /*#__PURE__*/_react.default.createElement(_styles.FormActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    disabled: formState.loading,
    outline: true,
    onClick: function onClick() {
      return onCancel();
    }
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "submit",
    disabled: formState.loading,
    color: "primary"
  }, ((_addressState$address5 = addressState.address) === null || _addressState$address5 === void 0 ? void 0 : _addressState$address5.id) ? 'Update' : 'Add'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ADDRESS'),
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
  }));
};

var AddressForm = function AddressForm(props) {
  var googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  };

  var addressFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AddressFormUI,
    googleMapsControls: googleMapsControls
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.AddressForm, addressFormProps);
};

exports.AddressForm = AddressForm;