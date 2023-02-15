"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversList = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));
var _styledComponents = require("styled-components");
var _utils = require("../../../../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversList = function DriversList(props) {
  var loading = props.loading,
    driversIsOnline = props.driversIsOnline,
    onlineDrivers = props.onlineDrivers,
    offlineDrivers = props.offlineDrivers,
    selectedDriver = props.selectedDriver,
    handleChangeDriver = props.handleChangeDriver,
    handleOpenDriverOrders = props.handleOpenDriverOrders;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var handleClickDriver = function handleClickDriver(e, driver) {
    var isInvalid = e.target.closest('.driver-orders');
    if (isInvalid) return;
    handleChangeDriver(driver);
  };
  var onOpenDriverOrdersDetail = function onOpenDriverOrdersDetail(driver) {
    if ((selectedDriver === null || selectedDriver === void 0 ? void 0 : selectedDriver.id) !== driver.id) {
      handleChangeDriver(driver);
    }
    handleOpenDriverOrders(driver);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.DriversListContainer, null, loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.DriverCard, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (driversIsOnline ? onlineDrivers : offlineDrivers).map(function (driver) {
    var _theme$images, _theme$images$icons;
    return /*#__PURE__*/_react.default.createElement(_styles.DriverCard, {
      key: driver.id,
      onClick: function onClick(e) {
        return handleClickDriver(e, driver);
      },
      active: (selectedDriver === null || selectedDriver === void 0 ? void 0 : selectedDriver.id) === driver.id
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage((driver === null || driver === void 0 ? void 0 : driver.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$icons = _theme$images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.noDriver), 'h_50,c_limit')
    })), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement(_styles.AssignedOrdersCount, {
      className: "driver-orders",
      disabled: !(driver !== null && driver !== void 0 && driver.assigned_orders_count) || (driver === null || driver === void 0 ? void 0 : driver.assigned_orders_count) === 0,
      onClick: function onClick() {
        return onOpenDriverOrdersDetail(driver);
      }
    }, driver === null || driver === void 0 ? void 0 : driver.assigned_orders_count, " ", t('ORDERS', 'Orders'))), (driver === null || driver === void 0 ? void 0 : driver.qualification) && /*#__PURE__*/_react.default.createElement(_styles.WrapperStar, {
      width: (0, _utils.getStarWidth)(driver === null || driver === void 0 ? void 0 : driver.qualification)
    })));
  })));
};
exports.DriversList = DriversList;