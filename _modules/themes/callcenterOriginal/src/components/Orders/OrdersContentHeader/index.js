"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersContentHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _Shared = require("../../Shared");
var _OrdersFilterGroup = require("../OrdersFilterGroup");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _MdcFilterOff = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOff"));
var _OrdersDashboardSLAControls = require("../OrdersDashboardSLAControls");
var _OrderDashboardSLASetting = require("../OrderDashboardSLASetting");
var _styles = require("../../../styles");
var _InfoShareContext = require("../../../../../../contexts/InfoShareContext");
var _reactBootstrap = require("react-bootstrap");
var _useWindowSize2 = require("../../../../../../hooks/useWindowSize");
var _GoogleMapsApiKeySettingButton = require("../GoogleMapsApiKeySettingButton");
var _WebsocketStatus = require("../WebsocketStatus");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersContentHeader = exports.OrdersContentHeader = function OrdersContentHeader(props) {
  var _configState$configs;
  var isDisableTitle = props.isDisableTitle,
    isDisableControl = props.isDisableControl,
    title = props.title,
    handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    citiesList = props.citiesList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    filterValues = props.filterValues,
    selectedOrderIds = props.selectedOrderIds,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleOpenTour = props.handleOpenTour,
    filterModalOpen = props.filterModalOpen,
    setFilterModalOpen = props.setFilterModalOpen,
    setTimeStatus = props.setTimeStatus,
    setSlaSettingTime = props.setSlaSettingTime,
    isShowMapsKeySettingButton = props.isShowMapsKeySettingButton;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    filterApplied = _useState2[0],
    setFilterApplied = _useState2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  (0, _react.useEffect)(function () {
    var _filterApplied = false;
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false;
    } else {
      var _filterValues$groupTy, _filterValues$metafie;
      _filterApplied = (filterValues === null || filterValues === void 0 || (_filterValues$groupTy = filterValues.groupTypes) === null || _filterValues$groupTy === void 0 ? void 0 : _filterValues$groupTy.length) || filterValues.businessIds.length > 0 || filterValues.cityIds.length > 0 || filterValues.deliveryEndDatetime !== null || filterValues.deliveryFromDatetime !== null || filterValues.deliveryTypes.length > 0 || filterValues.driverIds.length > 0 || filterValues.paymethodIds.length > 0 || filterValues.statuses.length > 0 || (filterValues === null || filterValues === void 0 || (_filterValues$metafie = filterValues.metafield) === null || _filterValues$metafie === void 0 ? void 0 : _filterValues$metafie.length) > 0 || (filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId);
    }
    setFilterApplied(_filterApplied);
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderContentHeaderContainer, {
    isDisableControl: isDisableControl
  }, !isDisableTitle && /*#__PURE__*/_react.default.createElement(_styles2.HeaderSection, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitle, null, title), selectedOrderIds && width > 768 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "bottom",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, t('START_TUTORIAL', 'Start tutorial'))
  }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "dark",
    className: "tour_btn",
    onClick: function onClick() {
      return handleOpenTour();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)))), /*#__PURE__*/_react.default.createElement(_styles2.TopRightSection, null, /*#__PURE__*/_react.default.createElement(_WebsocketStatus.WebsocketStatus, null), isShowMapsKeySettingButton && /*#__PURE__*/_react.default.createElement(_GoogleMapsApiKeySettingButton.GoogleMapsApiKeySettingButton, null), (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_deadlines_enabled) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === '1' && /*#__PURE__*/_react.default.createElement(_styles2.SLAControlsWrapper, null, /*#__PURE__*/_react.default.createElement(_OrderDashboardSLASetting.OrderDashboardSLASetting, {
    setSlaSettingTime: setSlaSettingTime
  }), /*#__PURE__*/_react.default.createElement(_OrdersDashboardSLAControls.OrdersDashboardSLAControls, {
    setTimeStatus: setTimeStatus
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperSearchAndFilter, {
    fullWidth: isDisableTitle && isDisableControl
  }, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return setFilterModalOpen && setFilterModalOpen(true);
    },
    name: "filter-btn"
  }, filterApplied ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Funnel, null) : /*#__PURE__*/_react.default.createElement(_MdcFilterOff.default, null))))), /*#__PURE__*/_react.default.createElement(_OrdersFilterGroup.OrdersFilterGroup, {
    open: filterModalOpen,
    handleCloseFilterModal: function handleCloseFilterModal() {
      return setFilterModalOpen && setFilterModalOpen(false);
    },
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    citiesList: citiesList,
    handleChangeFilterValues: handleChangeFilterValues
  }));
};