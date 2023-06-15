"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _OrdersLateralBar = require("../../OrdersLateralBar");
var _GoogleMapsApiKeySettingButton = require("../../GoogleMapsApiKeySettingButton");
var _DriversOnlineOfflineFilter = require("../../DriversOnlineOfflineFilter");
var _DriversBusyStatusFilter = require("../../DriversBusyStatusFilter");
var _DriversList = require("../../DriversList");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversManagerUI = function DriversManagerUI(props) {
  var _configState$configs, _configState$configs$;
  var driversIsOnline = props.driversIsOnline,
    driversList = props.driversList,
    handleChangeDriverIsOnline = props.handleChangeDriverIsOnline,
    driversSubfilter = props.driversSubfilter,
    handleChangeDriversSubFilter = props.handleChangeDriversSubFilter,
    onlineDrivers = props.onlineDrivers,
    offlineDrivers = props.offlineDrivers,
    setMapsData = props.setMapsData;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var googleMapsApiKey = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.google_maps_api_key) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;
  var numberOfonlineDrivers = onlineDrivers.length;
  var numberOfofflineDrivers = offlineDrivers.length;
  var numberOfbusyDrivers = driversIsOnline ? onlineDrivers.filter(function (ele) {
    return ele.busy;
  }).length : offlineDrivers.filter(function (ele) {
    return ele.busy;
  }).length;
  var numberOfnotBusyDrivers = driversIsOnline ? onlineDrivers.filter(function (ele) {
    return !ele.busy;
  }).length : offlineDrivers.filter(function (ele) {
    return !ele.busy;
  }).length;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenDriverOrders = _useState2[0],
    setIsOpenDriverOrders = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedDriver = _useState4[0],
    setSelectedDriver = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    openDriver = _useState6[0],
    setOpenDriver = _useState6[1];
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenDriverOrders(false);
  };
  var handleChangeDriver = function handleChangeDriver(driver) {
    if ((selectedDriver === null || selectedDriver === void 0 ? void 0 : selectedDriver.id) === driver.id) {
      setSelectedDriver(null);
    } else {
      setSelectedDriver(driver);
    }
  };
  var handleOpenDriverOrders = function handleOpenDriverOrders(driver) {
    setOpenDriver(driver);
    setIsOpenDriverOrders(true);
  };
  (0, _react.useEffect)(function () {
    setSelectedDriver(null);
  }, [driversIsOnline]);
  (0, _react.useEffect)(function () {
    setMapsData({
      driversIsOnline: driversIsOnline,
      onlineDrivers: onlineDrivers,
      offlineDrivers: offlineDrivers,
      selectedDriver: selectedDriver
    });
  }, [driversIsOnline, selectedDriver, onlineDrivers, offlineDrivers]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DriversContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DriversHeader, null, !googleMapsApiKey && /*#__PURE__*/_react.default.createElement(_GoogleMapsApiKeySettingButton.GoogleMapsApiKeySettingButton, null)), /*#__PURE__*/_react.default.createElement(_styles.DriversContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FilterContainer, null, /*#__PURE__*/_react.default.createElement(_DriversOnlineOfflineFilter.DriversOnlineOfflineFilter, {
    driversIsOnline: driversIsOnline,
    handleChangeDriverIsOnline: handleChangeDriverIsOnline,
    numberOfonlineDrivers: numberOfonlineDrivers,
    numberOfofflineDrivers: numberOfofflineDrivers
  }), /*#__PURE__*/_react.default.createElement(_DriversBusyStatusFilter.DriversBusyStatusFilter, {
    driversSubfilter: driversSubfilter,
    handleChangeDriversSubFilter: handleChangeDriversSubFilter,
    numberOfbusyDrivers: numberOfbusyDrivers,
    numberOfnotBusyDrivers: numberOfnotBusyDrivers
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriversList, null, /*#__PURE__*/_react.default.createElement(_DriversList.DriversList, {
    hidePhoto: true,
    loading: driversList.loading,
    driversIsOnline: driversIsOnline,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    selectedDriver: selectedDriver,
    handleChangeDriver: handleChangeDriver,
    handleOpenDriverOrders: handleOpenDriverOrders
  })))), isOpenDriverOrders && openDriver && /*#__PURE__*/_react.default.createElement(_OrdersLateralBar.OrdersLateralBar, {
    isDriver: true,
    open: isOpenDriverOrders,
    user: openDriver,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  })));
};
var DriversManager = function DriversManager(props) {
  var DriversControlProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    propsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification'],
    UIComponent: DriversManagerUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.DriversList, DriversControlProps));
};
exports.DriversManager = DriversManager;