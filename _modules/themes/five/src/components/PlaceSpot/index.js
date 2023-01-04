"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceSpot = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Confirm = require("../Confirm");
var _Buttons = require("../../styles/Buttons");
var _Inputs = require("../../styles/Inputs");
var _Select = require("../../styles/Select");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PlaceSpotUI = function PlaceSpotUI(props) {
  var _orderState$options, _placesState$placeGro3, _orderState$options2, _placesState$places4, _placesState$places4$, _getPlacesGroups, _getPlacesGroups2, _placesState$places5, _placesState$places6;
  var cart = props.cart,
    orderTypes = props.orderTypes,
    placesState = props.placesState,
    spotNumber = props.spotNumber,
    spotState = props.spotState,
    isCheckout = props.isCheckout,
    vehicle = props.vehicle,
    isInputMode = props.isInputMode,
    onClose = props.onClose,
    setSpotNumber = props.setSpotNumber,
    setVehicle = props.setVehicle,
    setSpotState = props.setSpotState,
    handleChangeSpot = props.handleChangeSpot,
    setHasBusinessPlaces = props.setHasBusinessPlaces;
  var el = (0, _react.useRef)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    placeGroupSelected = _useState2[0],
    setPlaceGroupSelected = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var selectYourSpotString = (placeGroupSelected === null || placeGroupSelected === void 0 ? void 0 : placeGroupSelected.name) === 'Tables' ? t('SELECT_YOUR_TABLE', 'Select your table') : t('SELECT_YOUR_SPOT', 'Select your spot');
  var vehicleInputAllowed = [4, 5];
  var currentOrderType = isCheckout ? orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type : cart === null || cart === void 0 ? void 0 : cart.delivery_type;
  var isEatin = currentOrderType === 3;
  var isDriveThru = currentOrderType === 5;
  var placeholderText = isEatin ? t('EATIN_SPOT_NUMBER', 'Table number') : isDriveThru ? t('DRIVE_THRU_SPOT_NUMBER', 'Drive thru lane') : t('CURBSIDE_SPOT_NUMBER', 'Spot number');
  var vehicleTypeList = [{
    key: 'car',
    text: t('VEHICLE_TYPE_CAR', 'Car')
  }, {
    key: 'truck',
    text: t('VEHICLE_TYPE_TRUCK', 'Truck')
  }, {
    key: 'suv',
    text: t('VEHICLE_TYPE_SUV', 'SUV')
  }, {
    key: 'van',
    text: t('VEHICLE_TYPE_VAN', 'Van')
  }, {
    key: 'motorcycle',
    text: t('VEHICLE_TYPE_MOTORCYCLE', 'Motorcycle')
  }];
  var vehicleInputList = [{
    key: 'model',
    text: t('VEHICLE_MODEL', 'Model')
  }, {
    key: 'car_registration',
    text: t('VEHICLE_CAR_REGISTRATION', 'Car registration')
  }, {
    key: 'color',
    text: t('VEHICLE_COLOR', 'Color')
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setSpotState(_objectSpread(_objectSpread({}, spotState), {}, {
      error: null
    }));
  };
  var getVehicleTypeList = function getVehicleTypeList() {
    vehicleTypeList.unshift({
      key: null,
      text: t('SELECT_AN_OPTION', 'Select an option')
    });
    return vehicleTypeList.map(function (type) {
      return {
        value: type === null || type === void 0 ? void 0 : type.key,
        content: type === null || type === void 0 ? void 0 : type.text,
        showOnSelected: type === null || type === void 0 ? void 0 : type.text
      };
    });
  };
  var onChangeSpotNumber = function onChangeSpotNumber(e) {
    var _e$target;
    if (/^[\d]*$/.test(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value)) {
      var _e$target2;
      var _spotNumber = parseFloat(e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
      _spotNumber = isNaN(_spotNumber) ? null : _spotNumber;
      setSpotNumber(_spotNumber);
    }
  };
  var onChangeSpot = function onChangeSpot() {
    if (orderState.loading) return;
    var isVehicle = Object.values(vehicle).every(function (e) {
      return e;
    });
    var bodyToSend = {};
    spotNumber && (bodyToSend.spot_number = spotNumber);
    isVehicle && (bodyToSend.vehicle = vehicle);
    if (Object.keys(bodyToSend).length) {
      handleChangeSpot({
        bodyToSend: bodyToSend,
        isCheckout: !!isCheckout
      });
    }
  };
  var getPlacesGroups = function getPlacesGroups() {
    var _placesState$placeGro;
    var groups = (_placesState$placeGro = placesState.placeGroups) === null || _placesState$placeGro === void 0 ? void 0 : _placesState$placeGro.filter(function (group) {
      var _placesState$places;
      return (group === null || group === void 0 ? void 0 : group.enabled) && (placesState === null || placesState === void 0 ? void 0 : (_placesState$places = placesState.places) === null || _placesState$places === void 0 ? void 0 : _placesState$places.find(function (place) {
        return (place === null || place === void 0 ? void 0 : place.enabled) && (place === null || place === void 0 ? void 0 : place.place_group_id) === (group === null || group === void 0 ? void 0 : group.id);
      }));
    });
    return groups.map(function (group) {
      return {
        value: group,
        content: group === null || group === void 0 ? void 0 : group.name,
        showOnSelected: group === null || group === void 0 ? void 0 : group.name
      };
    });
  };
  var getPlaces = function getPlaces() {
    var _placesState$places2;
    var places = placeGroupSelected && (placesState === null || placesState === void 0 ? void 0 : (_placesState$places2 = placesState.places) === null || _placesState$places2 === void 0 ? void 0 : _placesState$places2.filter(function (place) {
      return (place === null || place === void 0 ? void 0 : place.enabled) && (place === null || place === void 0 ? void 0 : place.place_group_id) === (placeGroupSelected === null || placeGroupSelected === void 0 ? void 0 : placeGroupSelected.id);
    }));
    return places.map(function (place) {
      return {
        value: place,
        content: place.name,
        showOnSelected: place.name
      };
    });
  };
  (0, _react.useEffect)(function () {
    if (!(placesState !== null && placesState !== void 0 && placesState.loading)) {
      var _placesState$placeGro2;
      var placeGroupOnCart = placesState === null || placesState === void 0 ? void 0 : placesState.placeGroups.find(function (group) {
        var _cart$place;
        return (group === null || group === void 0 ? void 0 : group.id) === (cart === null || cart === void 0 ? void 0 : (_cart$place = cart.place) === null || _cart$place === void 0 ? void 0 : _cart$place.place_group_id);
      });
      setPlaceGroupSelected(placeGroupOnCart);
      var groups = (_placesState$placeGro2 = placesState.placeGroups) === null || _placesState$placeGro2 === void 0 ? void 0 : _placesState$placeGro2.filter(function (group) {
        var _placesState$places3;
        return (group === null || group === void 0 ? void 0 : group.enabled) && (placesState === null || placesState === void 0 ? void 0 : (_placesState$places3 = placesState.places) === null || _placesState$places3 === void 0 ? void 0 : _placesState$places3.find(function (place) {
          return (place === null || place === void 0 ? void 0 : place.enabled) && (place === null || place === void 0 ? void 0 : place.place_group_id) === (group === null || group === void 0 ? void 0 : group.id);
        }));
      });
      if (groups.length === 0) {
        setHasBusinessPlaces && setHasBusinessPlaces(false);
      }
    }
  }, [placesState]);
  (0, _react.useEffect)(function () {
    el.current && (el.current.onkeyup = onChangeSpotNumber);
  }, []);
  (0, _react.useEffect)(function () {
    el.current && (el.current.value = spotNumber !== null && spotNumber !== void 0 ? spotNumber : '');
  }, [spotNumber]);
  (0, _react.useEffect)(function () {
    if (spotState !== null && spotState !== void 0 && spotState.error) {}
  }, [spotState]);
  (0, _react.useEffect)(function () {
    var _spotState$error;
    if ((spotState === null || spotState === void 0 ? void 0 : (_spotState$error = spotState.error) === null || _spotState$error === void 0 ? void 0 : _spotState$error.length) > 0) {
      setAlertState({
        open: true,
        content: spotState === null || spotState === void 0 ? void 0 : spotState.error
      });
    }
  }, [spotState === null || spotState === void 0 ? void 0 : spotState.error]);
  return /*#__PURE__*/_react.default.createElement(_styles.PlaceSpotContainer, {
    isCheckout: isCheckout,
    style: props.containerStyle
  }, isInputMode ? /*#__PURE__*/_react.default.createElement(_styles.PlaceGroupContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, orderTypes[currentOrderType]), vehicleInputAllowed.includes(currentOrderType) && /*#__PURE__*/_react.default.createElement(_styles.WrapperOptionList, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperOption, null, /*#__PURE__*/_react.default.createElement("p", null, t('VEHICLE_TYPE', 'Vehicle type')), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    isHomeStyle: props.isHomeStyle,
    options: getVehicleTypeList(),
    defaultValue: (vehicle === null || vehicle === void 0 ? void 0 : vehicle.type) || null,
    onChange: function onChange(type) {
      return setVehicle(_objectSpread(_objectSpread({}, vehicle), {}, {
        type: type !== null && type !== void 0 ? type : ''
      }));
    },
    selectInputStyle: {
      paddingTop: 3.5,
      paddingBottom: 3.5
    }
  })), vehicleInputList.map(function (input) {
    return /*#__PURE__*/_react.default.createElement(_styles.WrapperOption, {
      key: input.key
    }, /*#__PURE__*/_react.default.createElement("p", null, input.text), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: "text",
      placeholder: input.text,
      defaultValue: vehicle[input.key],
      onChange: function onChange(val) {
        var _val$target;
        return setVehicle(_objectSpread(_objectSpread({}, vehicle), {}, _defineProperty({}, input.key, val === null || val === void 0 ? void 0 : (_val$target = val.target) === null || _val$target === void 0 ? void 0 : _val$target.value)));
      }
    }));
  })), /*#__PURE__*/_react.default.createElement("p", null, placeholderText), /*#__PURE__*/_react.default.createElement(_styles.WrapperInput, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    ref: el,
    name: "".concat(isEatin ? 'table' : 'spot', "_number"),
    type: "text",
    placeholder: placeholderText,
    onKeyPress: function onKeyPress(e) {
      if (!/^[\d]*$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    disabled: !spotNumber && !Object.values(vehicle).every(function (e) {
      return e;
    }),
    onClick: function onClick() {
      return onChangeSpot();
    }
  }, t('UPDATE_SPOT_NUMBER', 'Update')))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (placesState === null || placesState === void 0 ? void 0 : placesState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PlaceGroupContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 25,
    className: "title"
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120,
    height: 25,
    className: "title"
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }))), !(placesState.error || (placesState === null || placesState === void 0 ? void 0 : (_placesState$placeGro3 = placesState.placeGroups) === null || _placesState$placeGro3 === void 0 ? void 0 : _placesState$placeGro3.length) === 0) && !(placesState !== null && placesState !== void 0 && placesState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PlaceGroupContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, props.isSelectDisabled ? t('PLACE_GROUP', 'Place group') : orderTypes[orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type]), props.isSelectDisabled ? /*#__PURE__*/_react.default.createElement("div", null, placeGroupSelected === null || placeGroupSelected === void 0 ? void 0 : placeGroupSelected.name, " - ", placesState === null || placesState === void 0 ? void 0 : (_placesState$places4 = placesState.places) === null || _placesState$places4 === void 0 ? void 0 : (_placesState$places4$ = _placesState$places4.find(function (place) {
    return (place === null || place === void 0 ? void 0 : place.id) === (cart === null || cart === void 0 ? void 0 : cart.place_id);
  })) === null || _placesState$places4$ === void 0 ? void 0 : _placesState$places4$.name) : /*#__PURE__*/_react.default.createElement(_Select.Select, {
    isHomeStyle: !props.isCancelHomeStyle,
    isDisabled: props.isSelectDisabled,
    options: getPlacesGroups(),
    defaultValue: placeGroupSelected !== null && placeGroupSelected !== void 0 ? placeGroupSelected : cart === null || cart === void 0 ? void 0 : cart.place,
    placeholder: t('PLACE_GROUP', 'Place group'),
    isOneOption: ((_getPlacesGroups = getPlacesGroups()) === null || _getPlacesGroups === void 0 ? void 0 : _getPlacesGroups.length) === 1,
    disableOneOption: ((_getPlacesGroups2 = getPlacesGroups()) === null || _getPlacesGroups2 === void 0 ? void 0 : _getPlacesGroups2.length) > 1 || props.isSelectDisabled,
    onChange: function onChange(group) {
      return setPlaceGroupSelected(group);
    }
  })), placeGroupSelected && !props.isSelectDisabled && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, selectYourSpotString), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    disableOneOption: true,
    options: getPlaces(),
    isHomeStyle: !props.isCancelHomeStyle,
    isDisabled: props.isSelectDisabled,
    placeholder: selectYourSpotString,
    defaultValue: placesState === null || placesState === void 0 ? void 0 : (_placesState$places5 = placesState.places) === null || _placesState$places5 === void 0 ? void 0 : _placesState$places5.find(function (place) {
      return (place === null || place === void 0 ? void 0 : place.id) === (cart === null || cart === void 0 ? void 0 : cart.place_id);
    }),
    onChange: function onChange(place) {
      return handleChangeSpot(place, props.isFetchOrder);
    }
  }))), placeGroupSelected && (placesState === null || placesState === void 0 ? void 0 : (_placesState$places6 = placesState.places) === null || _placesState$places6 === void 0 ? void 0 : _placesState$places6.find(function (place) {
    return (place === null || place === void 0 ? void 0 : place.id) === (cart === null || cart === void 0 ? void 0 : cart.place_id);
  })) && !isCheckout && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: placesState !== null && placesState !== void 0 && placesState.loading ? 'secondary' : 'primary',
    disabled: placesState === null || placesState === void 0 ? void 0 : placesState.loading,
    onClick: function onClick() {
      return onClose && onClose();
    }
  }, t('CONTINUE', 'Continue')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  }));
};
var PlaceSpot = function PlaceSpot(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var placeSpotProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PlaceSpotUI,
    onRemoveSpotNumber: function onRemoveSpotNumber(businessSlug) {
      var _JSON$parse;
      var spotNumberFromStorage = window.localStorage.getItem('table_number');
      if (!spotNumberFromStorage) return;
      var slug = (_JSON$parse = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.slug;
      if (businessSlug === slug) {
        window.localStorage.removeItem('table_number');
      }
    },
    orderTypes: {
      1: t('DELIVERY', 'Delivery'),
      2: t('PICKUP', 'Pickup'),
      3: t('EAT_IN', 'Eat in'),
      4: t('CURBSIDE', 'Curbside'),
      5: t('DRIVE_THRU', 'Drive thru')
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PlaceSpot, placeSpotProps);
};
exports.PlaceSpot = PlaceSpot;