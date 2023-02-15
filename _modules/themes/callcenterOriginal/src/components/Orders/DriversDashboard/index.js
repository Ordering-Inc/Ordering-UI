"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversDashboard = void 0;
var _react = _interopRequireDefault(require("react"));
var _DriversLocation = require("../DriversLocation");
var _DriversList = require("../DriversList");
var _DriversOnlineOfflineFilter = require("../DriversOnlineOfflineFilter");
var _DriversBusyStatusFilter = require("../DriversBusyStatusFilter");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DriversDashboard = function DriversDashboard(props) {
  var _onlineDrivers$filter, _offlineDrivers$filte, _onlineDrivers$filter2, _offlineDrivers$filte2;
  var driversList = props.driversList,
    onlineDrivers = props.onlineDrivers,
    offlineDrivers = props.offlineDrivers,
    driversIsOnline = props.driversIsOnline,
    driversSubfilter = props.driversSubfilter,
    selectedDriver = props.selectedDriver,
    handleChangeDriver = props.handleChangeDriver,
    handleChangeDriverIsOnline = props.handleChangeDriverIsOnline,
    handleChangeDriversSubFilter = props.handleChangeDriversSubFilter,
    handleOpenDriverOrders = props.handleOpenDriverOrders;
  var numberOfonlineDrivers = onlineDrivers === null || onlineDrivers === void 0 ? void 0 : onlineDrivers.length;
  var numberOfofflineDrivers = offlineDrivers === null || offlineDrivers === void 0 ? void 0 : offlineDrivers.length;
  var numberOfbusyDrivers = driversIsOnline ? (_onlineDrivers$filter = onlineDrivers.filter(function (ele) {
    return ele.busy;
  })) === null || _onlineDrivers$filter === void 0 ? void 0 : _onlineDrivers$filter.length : (_offlineDrivers$filte = offlineDrivers.filter(function (ele) {
    return ele.busy;
  })) === null || _offlineDrivers$filte === void 0 ? void 0 : _offlineDrivers$filte.length;
  var numberOfnotBusyDrivers = driversIsOnline ? (_onlineDrivers$filter2 = onlineDrivers.filter(function (ele) {
    return !ele.busy;
  })) === null || _onlineDrivers$filter2 === void 0 ? void 0 : _onlineDrivers$filter2.length : (_offlineDrivers$filte2 = offlineDrivers.filter(function (ele) {
    return !ele.busy;
  })) === null || _offlineDrivers$filte2 === void 0 ? void 0 : _offlineDrivers$filte2.length;
  return /*#__PURE__*/_react.default.createElement(_styles.DriversDashboardContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DriversContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FilterContainer, null, /*#__PURE__*/_react.default.createElement(_DriversOnlineOfflineFilter.DriversOnlineOfflineFilter, {
    driversIsOnline: driversIsOnline,
    handleChangeDriverIsOnline: handleChangeDriverIsOnline,
    numberOfonlineDrivers: numberOfonlineDrivers,
    numberOfofflineDrivers: numberOfofflineDrivers
  }), /*#__PURE__*/_react.default.createElement(_DriversBusyStatusFilter.DriversBusyStatusFilter, {
    driversSubfilter: driversSubfilter,
    handleChangeDriversSubFilter: handleChangeDriversSubFilter,
    numberOfbusyDrivers: numberOfbusyDrivers,
    numberOfnotBusyDrivers: numberOfnotBusyDrivers
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriversList, {
    id: "driversList"
  }, /*#__PURE__*/_react.default.createElement(_DriversList.DriversList, {
    loading: driversList.loading,
    driversIsOnline: driversIsOnline,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    selectedDriver: selectedDriver,
    handleChangeDriver: handleChangeDriver,
    handleOpenDriverOrders: handleOpenDriverOrders
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriversLocation, null, /*#__PURE__*/_react.default.createElement(_DriversLocation.DriversLocation, {
    driversIsOnline: driversIsOnline,
    selectedDriver: selectedDriver,
    onlineDrivers: onlineDrivers,
    offlineDrivers: offlineDrivers,
    driversList: driversList
  })));
};
exports.DriversDashboard = DriversDashboard;