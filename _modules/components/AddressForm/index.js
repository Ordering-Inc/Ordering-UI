"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _FaHome = _interopRequireDefault(require("@meronex/icons/fa/FaHome"));

var _FaPlus = _interopRequireDefault(require("@meronex/icons/fa/FaPlus"));

var _FaRegBuilding = _interopRequireDefault(require("@meronex/icons/fa/FaRegBuilding"));

var _FaRegHeart = _interopRequireDefault(require("@meronex/icons/fa/FaRegHeart"));

var _BiCurrentLocation = _interopRequireDefault(require("@meronex/icons/bi/BiCurrentLocation"));

var _HiOutlineLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineLocationMarker"));

var _CgSearchLoading = _interopRequireDefault(require("@meronex/icons/cg/CgSearchLoading"));

var _reactHookForm = require("react-hook-form");

var _orderingComponents = require("ordering-components");

var _Confirm = require("../Confirm");

var _GoogleGpsButton = require("../GoogleGpsButton");

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

var _Inputs = require("../../styles/Inputs");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var maxLimitLocation = 500;
var mapErrors = {
  ERROR_NOT_FOUND_ADDRESS: 'Sorry, we couldn\'t find an address',
  ERROR_MAX_LIMIT_LOCATION: "Sorry, You can only set the position to ".concat(maxLimitLocation, "m")
};

var AddressFormUI = function AddressFormUI(props) {
  var _addressState$address, _addressState$address2, _ref, _formState$changes$ad, _formState$changes, _addressState$address3, _addressState$address4, _addressState$address5, _formState$changes$lo, _formState$changes2, _addressState$address10, _formState$changes15, _ref7, _formState$changes$in, _formState$changes16, _ref8, _formState$changes$zi, _formState$changes17, _ref9, _formState$changes$ad4, _formState$changes18, _orderState$options5, _orderState$options5$;

  var addressesList = props.addressesList,
      googleMapsControls = props.googleMapsControls,
      formState = props.formState,
      addressState = props.addressState,
      validationFields = props.validationFields,
      isRequiredField = props.isRequiredField,
      updateChanges = props.updateChanges,
      onCancel = props.onCancel,
      hanldeChangeInput = props.hanldeChangeInput,
      saveAddress = props.saveAddress,
      setIsEdit = props.setIsEdit;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var formMethods = (0, _reactHookForm.useForm)();

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

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

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      toggleMap = _useState6[0],
      setToggleMap = _useState6[1];

  var _useState7 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      alertState = _useState8[0],
      setAlertState = _useState8[1];

  var inputNames = ['address', 'internal_number', 'zipcode', 'address_notes'];
  var isEditing = !!((_addressState$address2 = addressState.address) === null || _addressState$address2 === void 0 ? void 0 : _addressState$address2.id);

  var _useState9 = (0, _react.useState)((_ref = (_formState$changes$ad = (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.address) !== null && _formState$changes$ad !== void 0 ? _formState$changes$ad : (_addressState$address3 = addressState.address) === null || _addressState$address3 === void 0 ? void 0 : _addressState$address3.address) !== null && _ref !== void 0 ? _ref : ''),
      _useState10 = _slicedToArray(_useState9, 2),
      addressValue = _useState10[0],
      setAddressValue = _useState10[1];

  var _useState11 = (0, _react.useState)((addressState === null || addressState === void 0 ? void 0 : (_addressState$address4 = addressState.address) === null || _addressState$address4 === void 0 ? void 0 : _addressState$address4.id) ? addressState === null || addressState === void 0 ? void 0 : (_addressState$address5 = addressState.address) === null || _addressState$address5 === void 0 ? void 0 : _addressState$address5.location : (_formState$changes$lo = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.location) !== null && _formState$changes$lo !== void 0 ? _formState$changes$lo : null),
      _useState12 = _slicedToArray(_useState11, 2),
      locationChange = _useState12[0],
      setLocationChange = _useState12[1];

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  /**
   * Returns true when the user made no changes
   * @param {object} address
   */


  var checkAddress = function checkAddress(address, addressToCompare) {
    var props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number'];
    var values = [];
    props.forEach(function (prop) {
      if (addressToCompare[prop]) {
        if (prop === 'location') {
          values.push(address[prop].lat === addressToCompare[prop].lat && address[prop].lng === addressToCompare[prop].lng);
        } else {
          values.push(address[prop] === addressToCompare[prop]);
        }
      } else {
        values.push(!address[prop]);
      }
    });
    return values.every(function (value) {
      return value;
    });
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _formState$changes3, _formState$changes4, _arrayList$map$some;

      var arrayList, addressToCompare, isAddressAlreadyExist;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!((formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.address) && !(formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.location))) {
                _context.next = 3;
                break;
              }

              setAlertState({
                open: true,
                content: [t('ADDRESS_REQUIRE_LOCATION', 'The address needs a location, please select one of the suggested')]
              });
              return _context.abrupt("return");

            case 3:
              setToggleMap(false);
              arrayList = isEditing ? addressesList.filter(function (address) {
                var _addressState$address6;

                return address.id !== ((_addressState$address6 = addressState.address) === null || _addressState$address6 === void 0 ? void 0 : _addressState$address6.id);
              }) || [] : addressesList || [];
              addressToCompare = isEditing ? _objectSpread(_objectSpread({}, addressState.address), formState.changes) : formState === null || formState === void 0 ? void 0 : formState.changes;
              isAddressAlreadyExist = (_arrayList$map$some = arrayList.map(function (address) {
                return checkAddress(address, addressToCompare);
              }).some(function (value) {
                return value;
              })) !== null && _arrayList$map$some !== void 0 ? _arrayList$map$some : false;

              if (isAddressAlreadyExist) {
                _context.next = 10;
                break;
              }

              saveAddress();
              return _context.abrupt("return");

            case 10:
              setAlertState({
                open: true,
                content: [t('ADDRESS_ALREADY_EXIST', 'The address already exists')]
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

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

  var setMapErrors = function setMapErrors(errKey) {
    setAlertState({
      open: true,
      content: [t(errKey, mapErrors[errKey])]
    });
  };

  (0, _react.useEffect)(function () {
    var _formState$result, _ref4, _formState$changes$ad2, _formState$changes7, _addressState$address7, _ref5, _formState$changes$ad3, _formState$changes8, _addressState$address8;

    if (!auth) {
      var _ref3, _formState$changes$lo2, _formState$changes5, _orderState$options, _orderState$options$a, _formState$changes6, _orderState$options2, _orderState$options2$;

      setLocationChange((_ref3 = (_formState$changes$lo2 = formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.location) !== null && _formState$changes$lo2 !== void 0 ? _formState$changes$lo2 : orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : _orderState$options$a.location) !== null && _ref3 !== void 0 ? _ref3 : '');
      setAddressValue((formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.address) || (orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : _orderState$options2$.address) || '');
      inputNames.forEach(function (field) {
        var _orderState$options3;

        return formMethods.setValue(field, (formState === null || formState === void 0 ? void 0 : formState.changes[field]) || (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.address[field]) || '');
      });
      return;
    }

    if (!formState.loading && ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.error)) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }

    setAddressValue((_ref4 = (_formState$changes$ad2 = formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.address) !== null && _formState$changes$ad2 !== void 0 ? _formState$changes$ad2 : (_addressState$address7 = addressState.address) === null || _addressState$address7 === void 0 ? void 0 : _addressState$address7.address) !== null && _ref4 !== void 0 ? _ref4 : '');
    formMethods.setValue('address', (_ref5 = (_formState$changes$ad3 = formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.address) !== null && _formState$changes$ad3 !== void 0 ? _formState$changes$ad3 : (_addressState$address8 = addressState.address) === null || _addressState$address8 === void 0 ? void 0 : _addressState$address8.address) !== null && _ref5 !== void 0 ? _ref5 : '');

    if (!isEditing) {
      var _formState$changes9;

      inputNames.forEach(function (field) {
        return formMethods.setValue(field, (formState === null || formState === void 0 ? void 0 : formState.changes[field]) || '');
      });
      setLocationChange(formState === null || formState === void 0 ? void 0 : (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.location);
    } // Validation when user change location in edit mode


    if (isEditing) {
      var _formState$changes10;

      if (formState === null || formState === void 0 ? void 0 : (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.location) {
        var _formState$changes11, _formState$changes11$, _formState$changes12, _formState$changes12$;

        var prevLocation = {
          lat: Math.trunc(locationChange.lat),
          lng: Math.trunc(locationChange.lng)
        };
        var newLocation = {
          lat: Math.trunc(formState === null || formState === void 0 ? void 0 : (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : (_formState$changes11$ = _formState$changes11.location) === null || _formState$changes11$ === void 0 ? void 0 : _formState$changes11$.lat),
          lng: Math.trunc(formState === null || formState === void 0 ? void 0 : (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : (_formState$changes12$ = _formState$changes12.location) === null || _formState$changes12$ === void 0 ? void 0 : _formState$changes12$.lng)
        };

        if (prevLocation.lat !== newLocation.lat && prevLocation.lng !== newLocation.lng) {
          var _formState$changes13;

          setLocationChange(formState === null || formState === void 0 ? void 0 : (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.location);
        }
      }
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (isEditing) {
      var _addressState$address9;

      setIsEdit && setIsEdit(true);
      setAddressValue((_addressState$address9 = addressState.address) === null || _addressState$address9 === void 0 ? void 0 : _addressState$address9.address);
    } else {
      setIsEdit && setIsEdit(false);
    }
  }, [addressState]);
  (0, _react.useEffect)(function () {
    if (!auth) {
      var _ref6, _orderState$options$a2, _orderState$options4, _orderState$options4$, _formState$changes14;

      setLocationChange((_ref6 = (_orderState$options$a2 = orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : _orderState$options4$.location) !== null && _orderState$options$a2 !== void 0 ? _orderState$options$a2 : formState === null || formState === void 0 ? void 0 : (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.location) !== null && _ref6 !== void 0 ? _ref6 : '');
    }
  }, []);
  /**
   * Form events control
   */

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
    inputNames.forEach(function (name) {
      formMethods.register(name, {
        required: isRequiredField(name) ? t("VALIDATION_ERROR_".concat(name, "_REQUIRED"), "The field ".concat(name, " is required")) : null
      });
    });
  }, [formMethods]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "address-form"
  }, /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    autoComplete: "off"
  }, locationChange && toggleMap && /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: "AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk",
    location: locationChange,
    mapControls: googleMapsControls,
    handleChangeAddressMap: handleChangeAddress,
    setErrors: setMapErrors,
    maxLimitLocation: maxLimitLocation
  })), /*#__PURE__*/_react.default.createElement(_styles.AddressWrap, {
    className: "google-control"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapAddressInput, null, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, null), /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleAutocompleteInput, {
    className: "input-autocomplete",
    apiKey: "AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk",
    placeholder: t('ADDRESS', 'Address'),
    onChangeAddress: function onChangeAddress(e) {
      formMethods.setValue('address', e.address);
      handleChangeAddress(e);
    },
    onKeyDown: handleAddressKeyDown,
    onChange: function onChange(e) {
      hanldeChangeInput({
        target: {
          name: 'address',
          value: e.target.value
        }
      });
      setAddressValue(e.target.value);
    },
    value: addressValue,
    autoComplete: "new-field"
  })), (!validationFields.loading || !addressState.loading) && /*#__PURE__*/_react.default.createElement(_GoogleGpsButton.GoogleGpsButton, {
    className: "gps-button",
    apiKey: "AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk",
    onAddress: function onAddress(e) {
      formMethods.setValue('address', e.address);
      handleChangeAddress(e);
    },
    IconButton: _BiCurrentLocation.default,
    IconLoadingButton: _CgSearchLoading.default
  })), ((addressState === null || addressState === void 0 ? void 0 : (_addressState$address10 = addressState.address) === null || _addressState$address10 === void 0 ? void 0 : _addressState$address10.location) || (formState === null || formState === void 0 ? void 0 : (_formState$changes15 = formState.changes) === null || _formState$changes15 === void 0 ? void 0 : _formState$changes15.location)) && !toggleMap && /*#__PURE__*/_react.default.createElement(_styles.ShowMap, {
    onClick: function onClick() {
      return setToggleMap(!toggleMap);
    }
  }, t('VIEW_MAP', 'View map to modify the exact location')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    className: "internal_number",
    placeholder: t('INTERNAL_NUMBER', 'Internal number'),
    value: (_ref7 = (_formState$changes$in = (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.internal_number) !== null && _formState$changes$in !== void 0 ? _formState$changes$in : addressState.address.internal_number) !== null && _ref7 !== void 0 ? _ref7 : '',
    onChange: function onChange(e) {
      formMethods.setValue('internal_number', e.target.value);
      hanldeChangeInput({
        target: {
          name: 'internal_number',
          value: e.target.value
        }
      });
    },
    autoComplete: "new-field"
  }), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    className: "zipcode",
    placeholder: t('ZIP_CODE', 'Zip code'),
    value: (_ref8 = (_formState$changes$zi = (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : _formState$changes17.zipcode) !== null && _formState$changes$zi !== void 0 ? _formState$changes$zi : addressState.address.zipcode) !== null && _ref8 !== void 0 ? _ref8 : '',
    onChange: function onChange(e) {
      formMethods.setValue('zipcode', e.target.value);
      hanldeChangeInput({
        target: {
          name: 'zipcode',
          value: e.target.value
        }
      });
    },
    autoComplete: "new-field"
  }), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    rows: 4,
    placeholder: t('ADDRESS_NOTES', 'Address Notes'),
    value: (_ref9 = (_formState$changes$ad4 = (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 ? void 0 : _formState$changes18.address_notes) !== null && _formState$changes$ad4 !== void 0 ? _formState$changes$ad4 : addressState.address.address_notes) !== null && _ref9 !== void 0 ? _ref9 : '',
    onChange: function onChange(e) {
      formMethods.setValue('address_notes', e.target.value);
      hanldeChangeInput({
        target: {
          name: 'address_notes',
          value: e.target.value
        }
      });
    },
    autoComplete: "new-field"
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
    outline: true,
    type: "button",
    disabled: formState.loading,
    onClick: function onClick() {
      return onCancel();
    }
  }, t('CANCEL', 'Cancel')), Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "submit-btn",
    type: "submit",
    disabled: formState.loading,
    color: "primary"
  }, !formState.loading ? isEditing || !auth && ((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : _orderState$options5$.address) ? t('UPDATE', 'Update') : t('ADD', 'Add') : t('LOADING', 'Loading')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ADDRESS', 'Address'),
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

var AddressForm = function AddressForm(props) {
  var googleMapsControls = {
    defaultZoom: 17,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  };

  var addressFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AddressFormUI,
    googleMapsControls: googleMapsControls,
    isSelectedAfterAdd: true
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.AddressForm, addressFormProps);
};

exports.AddressForm = AddressForm;