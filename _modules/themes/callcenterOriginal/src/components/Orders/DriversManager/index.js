"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponents = require("ordering-components");
var _DriversDashboard = require("../DriversDashboard");
var _OrdersLateralBar = require("../OrdersLateralBar");
var _Shared = require("../../Shared");
var _OrderNotification = require("../OrderNotification");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Buttons = require("../../../styles/Buttons");
var _InfoShareContext = require("../../../../../../contexts/InfoShareContext");
var _GoogleMapsApiKeySettingButton = require("../GoogleMapsApiKeySettingButton");
var _WebsocketStatus = require("../WebsocketStatus");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversManagerUI = function DriversManagerUI(props) {
  var _configState$configs;
  var onDriverRedirect = props.onDriverRedirect,
    handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue,
    driversIsOnline = props.driversIsOnline;
  var _props$driversList = props.driversList,
    drivers = _props$driversList.drivers,
    loading = _props$driversList.loading;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.google_maps_api_key) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
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
    onDriverRedirect();
  };
  var handleChangeDriver = function handleChangeDriver(driver) {
    if ((selectedDriver === null || selectedDriver === void 0 ? void 0 : selectedDriver.id) === driver.id) {
      setSelectedDriver(null);
    } else {
      setSelectedDriver(driver);
    }
  };
  var handleOpenDriverOrders = function handleOpenDriverOrders(driver) {
    onDriverRedirect(driver === null || driver === void 0 ? void 0 : driver.id);
    setOpenDriver(driver);
    setIsOpenDriverOrders(true);
  };
  (0, _react.useEffect)(function () {
    if (loading) return;
    var id = query.get('id');
    if (id === null) setIsOpenDriverOrders(false);else {
      var driver = drivers.find(function (_driver) {
        return _driver.id === parseInt(id);
      });
      setOpenDriver(driver);
      setIsOpenDriverOrders(true);
    }
  }, [drivers, loading]);
  (0, _react.useEffect)(function () {
    setSelectedDriver(null);
  }, [driversIsOnline]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DriversContainer, {
    id: "driverDashboard"
  }, /*#__PURE__*/_react.default.createElement(_styles.DriversHeader, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVERS_DASHBOARD', 'Drivers dashboard'))), /*#__PURE__*/_react.default.createElement(_WebsocketStatus.WebsocketStatus, null), !googleMapsApiKey && /*#__PURE__*/_react.default.createElement(_GoogleMapsApiKeySettingButton.GoogleMapsApiKeySettingButton, null), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles.DriversContent, null, /*#__PURE__*/_react.default.createElement(_DriversDashboard.DriversDashboard, _extends({}, props, {
    selectedDriver: selectedDriver,
    handleChangeDriver: handleChangeDriver,
    handleOpenDriverOrders: handleOpenDriverOrders
  }))), isOpenDriverOrders && openDriver && /*#__PURE__*/_react.default.createElement(_OrdersLateralBar.OrdersLateralBar, {
    isDriver: true,
    open: isOpenDriverOrders,
    user: openDriver,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }), /*#__PURE__*/_react.default.createElement(_OrderNotification.OrderNotification, null)));
};
var DriversManager = function DriversManager(props) {
  var DriversControlProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: DriversManagerUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.DriverListDashboard, DriversControlProps));
};
exports.DriversManager = DriversManager;