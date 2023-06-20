"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersFilterGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _BusinessesSelector = require("../BusinessesSelector");
var _DriversGroupTypeSelector = require("../DriversGroupTypeSelector");
var _DateTypeSelector = require("../DateTypeSelector");
var _DriverSelector = require("../DriverSelector");
var _Shared = require("../../Shared");
var _DeliveryTypeSelector = require("../DeliveryTypeSelector");
var _PaymethodTypeSelector = require("../PaymethodTypeSelector");
var _CountryFilter = require("../CountryFilter");
var _styles = require("../../../styles");
var _CurrencyFilter = require("../CurrencyFilter");
var _utils = require("../../../../../../utils");
var _styles2 = require("./styles");
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
var OrdersFilterGroupUI = function OrdersFilterGroupUI(props) {
  var open = props.open,
    handleCloseFilterModal = props.handleCloseFilterModal,
    filterValues = props.filterValues,
    driverGroupList = props.driverGroupList,
    driversList = props.driversList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    citiesList = props.citiesList,
    handleChangeGroup = props.handleChangeGroup,
    handleChangeDateType = props.handleChangeDateType,
    handleChangeFromDate = props.handleChangeFromDate,
    handleChangeEndDate = props.handleChangeEndDate,
    handleChangeBusinesses = props.handleChangeBusinesses,
    handleChangeDriver = props.handleChangeDriver,
    handleChangeCity = props.handleChangeCity,
    handleChangeDeliveryType = props.handleChangeDeliveryType,
    handleChangePaymethodType = props.handleChangePaymethodType,
    handleResetFilterValues = props.handleResetFilterValues,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleChangeOrderId = props.handleChangeOrderId,
    handleChangeCountryCode = props.handleChangeCountryCode,
    handleChangeCurrency = props.handleChangeCurrency,
    handleChangeMetaFieldValue = props.handleChangeMetaFieldValue,
    handleAddMetaField = props.handleAddMetaField,
    handleDeleteMetafield = props.handleDeleteMetafield,
    handleChangeExternalId = props.handleChangeExternalId;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      key: '',
      value: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    metafield = _useState2[0],
    setMetaField = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isShow = _useState4[0],
    setIsShow = _useState4[1];
  var metafieldRef = (0, _react.useRef)();
  var handleAcceptFilter = function handleAcceptFilter() {
    handleChangeFilterValues(filterValues);
    handleCloseFilterModal();
  };
  var handleClearFilter = function handleClearFilter() {
    handleResetFilterValues();
    handleChangeFilterValues({});
  };
  var handleAddMetafieldValue = function handleAddMetafieldValue() {
    handleAddMetaField({
      id: (0, _utils.getUniqueId)(),
      key: metafield === null || metafield === void 0 ? void 0 : metafield.key,
      value: metafield === null || metafield === void 0 ? void 0 : metafield.value
    });
    setMetaField({
      key: '',
      value: ''
    });
    setIsShow(false);
  };
  var handleDeleteMetafieldValue = function handleDeleteMetafieldValue(id) {
    handleDeleteMetafield(id);
  };
  var handleClickOutside = function handleClickOutside(e) {
    var _metafieldRef$current;
    if (!isShow) return;
    var outsideCalendar = !((_metafieldRef$current = metafieldRef.current) !== null && _metafieldRef$current !== void 0 && _metafieldRef$current.contains(e.target));
    if (outsideCalendar) {
      setIsShow(false);
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    return function () {
      return window.removeEventListener('mouseup', handleClickOutside);
    };
  }, [isShow]);
  return /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    padding: "0px",
    open: open,
    onClose: function onClose() {
      return handleCloseFilterModal();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.FilterGroupListContainer, {
    className: "filter-modal"
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('FILTER', 'Filter')), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "ID",
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId) || '',
    onChange: function onChange(e) {
      return handleChangeOrderId(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('EXTERNAL_ID', 'External Id'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId) || '',
    onChange: handleChangeExternalId
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_DriversGroupTypeSelector.DriversGroupTypeSelector, {
    driverGroupList: driverGroupList,
    handleChangeGroup: handleChangeGroup,
    filterValues: filterValues
  }), /*#__PURE__*/_react.default.createElement(_DateTypeSelector.DateTypeSelector, {
    filterValues: filterValues,
    handleChangeDateType: handleChangeDateType,
    handleChangeFromDate: handleChangeFromDate,
    handleChangeEndDate: handleChangeEndDate
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_BusinessesSelector.BusinessesSelector, {
    filterValues: filterValues,
    businessesList: businessesList,
    handleChangeBusinesses: handleChangeBusinesses
  }), /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    isFilterView: true,
    drivers: driversList.drivers,
    filterValues: filterValues,
    handleChangeDriver: handleChangeDriver
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_CountryFilter.CountryFilter, {
    filterValues: filterValues,
    handleChangeCountryCode: handleChangeCountryCode
  }), /*#__PURE__*/_react.default.createElement(_Shared.CitySelector, {
    cities: citiesList,
    filterValues: filterValues,
    handleChangeCity: handleChangeCity
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_DeliveryTypeSelector.DeliveryTypeSelector, {
    filterValues: filterValues,
    handleChangeDeliveryType: handleChangeDeliveryType
  }), /*#__PURE__*/_react.default.createElement(_PaymethodTypeSelector.PaymethodTypeSelector, {
    paymethodsList: paymethodsList,
    filterValues: filterValues,
    handleChangePaymethodType: handleChangePaymethodType
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, null, /*#__PURE__*/_react.default.createElement(_CurrencyFilter.CurrencyFilter, {
    filterValues: filterValues,
    handleChangeCurrency: handleChangeCurrency
  })), filterValues === null || filterValues === void 0 ? void 0 : filterValues.metafield.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, {
      key: item.id
    }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
      type: "text",
      name: "key",
      placeholder: t('METAFIELD_NAME', 'Metafield name'),
      autoComplete: "off",
      value: item.key || '',
      onChange: function onChange(e) {
        return handleChangeMetaFieldValue(e, item.id);
      }
    }), (item === null || item === void 0 ? void 0 : item.key) && /*#__PURE__*/_react.default.createElement(_styles2.AddInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
      type: "text",
      name: "value",
      placeholder: t('METAFIELD_VALUE', 'Metafield value'),
      autoComplete: "off",
      value: (item === null || item === void 0 ? void 0 : item.value) || '',
      onChange: function onChange(e) {
        return handleChangeMetaFieldValue(e, item.id);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      onClick: function onClick() {
        return handleDeleteMetafieldValue(item.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash3, null))));
  }), !isShow && /*#__PURE__*/_react.default.createElement(_styles2.AddMetaFiled, {
    onClick: function onClick() {
      return setIsShow(true);
    }
  }, t('ADD_METAFIELD', 'Add a metafield')), isShow && /*#__PURE__*/_react.default.createElement(_styles2.WrapperRow, {
    ref: metafieldRef
  }, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "key",
    placeholder: t('METAFIELD_NAME', 'Metafield name'),
    autoComplete: "off",
    value: metafield.key || '',
    onChange: function onChange(e) {
      return setMetaField(_objectSpread(_objectSpread({}, metafield), {}, {
        key: e.target.value
      }));
    }
  }), (metafield === null || metafield === void 0 ? void 0 : metafield.key) && /*#__PURE__*/_react.default.createElement(_styles2.AddInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    name: "value",
    placeholder: t('METAFIELD_VALUE', 'Metafield value'),
    autoComplete: "off",
    value: metafield.value || '',
    onChange: function onChange(e) {
      return setMetaField(_objectSpread(_objectSpread({}, metafield), {}, {
        value: e.target.value
      }));
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary",
    onClick: handleAddMetafieldValue
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusCircle, null)))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleAcceptFilter();
    }
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleClearFilter();
    }
  }, t('CLEAR', 'Clear')))));
};
var OrdersFilterGroup = function OrdersFilterGroup(props) {
  var FilterControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersFilterGroupUI,
    driverGroupList: props.driverGroupList
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.OrdersFilter, FilterControlProps));
};
exports.OrdersFilterGroup = OrdersFilterGroup;