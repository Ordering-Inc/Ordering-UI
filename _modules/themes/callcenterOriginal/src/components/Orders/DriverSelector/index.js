"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _DashboardSelect = require("../../../styles/Select/DashboardSelect");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _MultiSelect = require("../../../styles/MultiSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverSelectorUI = function DriverSelectorUI(props) {
  var isFirstSelect = props.isFirstSelect,
    order = props.order,
    driversList = props.driversList,
    defaultValue = props.defaultValue,
    isPhoneView = props.isPhoneView,
    isFilterView = props.isFilterView,
    small = props.small,
    padding = props.padding,
    orderView = props.orderView,
    handleAssignDriver = props.handleAssignDriver,
    handleChangeDriver = props.handleChangeDriver,
    filterValues = props.filterValues,
    isTourOpen = props.isTourOpen,
    setCurrentTourStep = props.setCurrentTourStep,
    handleOpenMessages = props.handleOpenMessages;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    defaultOption = _useState2[0],
    setDefaultOption = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    driversOptionList = _useState4[0],
    setDriversOptionList = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    driversMultiOptionList = _useState6[0],
    setDriversMultiOptionList = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    searchValue = _useState8[0],
    setSearchValue = _useState8[1];
  var driversLoading = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      small: small
    }, t('LOADING', 'loading'), "...")
  }];
  (0, _react.useEffect)(function () {
    var _theme$images;
    var _driversOptionList = [{
      value: 'default',
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
        padding: orderView ? padding : '0px'
      }, orderView ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, {
        small: small,
        className: "driver-photo"
      }, /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
        bgimage: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.noDriver,
        small: small
      })), /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverNameContainer, {
        className: "driver-info"
      }, /*#__PURE__*/_react.default.createElement(_styles.DriverName, {
        small: small
      }, t('NO_DRIVER', 'No Driver'))))) : t('SELECT_DRIVER', 'Select driver')),
      color: 'primary',
      disabled: !isFilterView,
      showDisable: true
    }];
    if (!isFilterView) {
      _driversOptionList.push({
        value: 'remove',
        content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
          isRemove: true
        }, t('REMOVE_DRIVER', 'Remove assigned driver')),
        disabled: defaultValue === 'default'
      });
    }
    if (!driversList.loading) {
      var _driverList;
      if (searchValue) {
        _driverList = driversList.drivers.filter(function (driver) {
          return (driver.name + driver.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        });
      } else {
        _driverList = driversList.drivers;
      }
      var _driversOptionListTemp = _driverList.map(function (driver, i) {
        var _theme$images$icons;
        return {
          value: driver.id,
          showDisable: isFilterView ? true : !(isFilterView || driver !== null && driver !== void 0 && driver.available && !(driver !== null && driver !== void 0 && driver.busy)),
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
            small: small,
            isPhoneView: isPhoneView,
            padding: padding,
            isFilterView: isFilterView
          }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, {
            small: small,
            className: "driver-photo"
          }, /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
            bgimage: driver.photo || ((_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.noDriver),
            small: small
          })), /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.DriverNameContainer, {
            className: "driver-info"
          }, /*#__PURE__*/_react.default.createElement(_styles.DriverName, {
            small: small
          }, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement(_styles.DriverText, {
            small: small
          }, t('DRIVER', 'Driver')))))
        };
      });
      setDriversMultiOptionList(_driversOptionListTemp);
      var _iterator = _createForOfIteratorHelper(_driversOptionListTemp),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          _driversOptionList.push(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setDriversOptionList(_driversOptionList);
  }, [driversList, defaultValue, searchValue]);
  var changeDriver = function changeDriver(driverId) {
    if (isFilterView) {
      if (driverId === 'default') {
        handleChangeDriver(null);
      } else {
        handleChangeDriver(driverId);
      }
      return;
    }
    if (driverId === 'default') return;
    if (driverId === 'remove') {
      driverId = null;
    }
    handleAssignDriver({
      orderId: order.id,
      driverId: driverId
    });
    if (isTourOpen && setCurrentTourStep) {
      handleOpenMessages('chat');
      setTimeout(function () {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3);
      }, 50);
    }
  };
  (0, _react.useEffect)(function () {
    setDefaultOption(defaultValue);
  }, [defaultValue]);
  var Placeholder = /*#__PURE__*/_react.default.createElement(_styles.PlaceholderTitle, null, t('SELECT_DRIVER', 'Select driver'));
  var handleSearch = function handleSearch(val) {
    setSearchValue(val);
  };
  if (isFilterView) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !driversList.loading ? /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
      defaultValue: filterValues.driverIds,
      placeholder: Placeholder,
      options: driversMultiOptionList,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "150px",
      onChange: function onChange(driver) {
        return handleChangeDriver(driver);
      },
      isShowSearchBar: true,
      searchBarIsCustomLayout: true,
      searchBarIsNotLazyLoad: true,
      searchValue: searchValue,
      handleChangeSearch: function handleChangeSearch(val) {
        return setSearchValue(val);
      }
    }) : /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
      defaultValue: "default",
      options: driversLoading,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "150px",
      className: "driver-select",
      isShowSearchBar: true,
      searchBarIsCustomLayout: true,
      searchBarIsNotLazyLoad: true,
      searchValue: searchValue,
      handleChangeSearch: function handleChangeSearch(val) {
        return setSearchValue(val);
      }
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !driversList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isFirstSelect ? /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
      defaultValue: defaultOption || 'default',
      options: driversOptionList,
      optionInnerMaxHeight: "200px",
      onChange: function onChange(driverId) {
        return changeDriver(driverId);
      },
      isShowSearchBar: true,
      searchBarPlaceholder: t('SEARCH', 'Search'),
      searchBarIsCustomLayout: true,
      searchBarIsNotLazyLoad: true,
      searchValue: searchValue,
      handleChangeSearch: handleSearch,
      className: "driver-select"
    }) : /*#__PURE__*/_react.default.createElement(_DashboardSelect.Select, {
      defaultValue: defaultOption || 'default',
      options: driversOptionList,
      optionInnerMaxHeight: "200px",
      onChange: function onChange(driverId) {
        return changeDriver(driverId);
      },
      isShowSearchBar: true,
      searchBarIsNotLazyLoad: true,
      searchBarPlaceholder: t('SEARCH', 'Search'),
      searchBarIsCustomLayout: true,
      searchValue: searchValue,
      handleChangeSearch: handleSearch,
      className: "driver-select"
    })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DashboardSelect.Select, {
      placeholder: t('SELECT_DRIVER', 'Select driver'),
      defaultValue: "default",
      options: driversLoading,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "200px",
      className: "driver-select"
    })));
  }
};
var DriverSelector = exports.DriverSelector = function DriverSelector(props) {
  var DriversControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: DriverSelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.DriverListDashboard, DriversControlProps));
};