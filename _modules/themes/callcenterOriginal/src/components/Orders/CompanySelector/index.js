"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanySelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _DashboardSelect = require("../../../styles/Select/DashboardSelect");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var CompanySelectorUI = function CompanySelectorUI(props) {
  var isFirstSelect = props.isFirstSelect,
    order = props.order,
    companysList = props.companysList,
    defaultValue = props.defaultValue,
    isPhoneView = props.isPhoneView,
    isFilterView = props.isFilterView,
    small = props.small,
    padding = props.padding,
    orderView = props.orderView,
    handleAssignDriverCompany = props.handleAssignDriverCompany,
    handleChangeCompany = props.handleChangeCompany,
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
    companysOptionList = _useState4[0],
    setCompanysOptionList = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    companyssMultiOptionList = _useState6[0],
    setCompanysMultiOptionList = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    searchValue = _useState8[0],
    setSearchValue = _useState8[1];
  var companysLoading = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
      small: small
    }, t('LOADING', 'loading'), "...")
  }];
  (0, _react.useEffect)(function () {
    var _theme$images;
    var _companysOptionList = [{
      value: 'default',
      content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
        padding: orderView ? padding : '0px'
      }, orderView ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperCompanyImage, {
        small: small,
        className: "driver-photo"
      }, /*#__PURE__*/_react.default.createElement(_styles2.CompanyImage, {
        bgimage: company.logo || (theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.noDriver),
        small: small
      })), /*#__PURE__*/_react.default.createElement(_styles2.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.CompanyNameContainer, {
        className: "driver-info"
      }, /*#__PURE__*/_react.default.createElement(_styles2.CompanyName, {
        small: small
      }, t('NO_COMPANY', 'No Company'))))) : t('SELECT_COMPANY', 'Select company')),
      color: 'primary',
      disabled: !isFilterView,
      showDisable: true
    }];
    if (!isFilterView) {
      _companysOptionList.push({
        value: 'remove',
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
          isRemove: true
        }, t('REMOVE_COMPANY', 'Remove assigned company')),
        disabled: defaultValue === 'default'
      });
    }
    if (!companysList.loading) {
      var _companysList;
      if (searchValue) {
        _companysList = companysList.companys.filter(function (company) {
          return company.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        });
      } else {
        _companysList = companysList.companys;
      }
      var _companysOptionListTemp = _companysList.map(function (company, i) {
        var _theme$images$icons;
        return {
          value: company.id,
          showDisable: isFilterView ? true : !(isFilterView || !(company !== null && company !== void 0 && company.busy)),
          content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
            small: small,
            isPhoneView: isPhoneView,
            padding: padding,
            isFilterView: isFilterView
          }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperCompanyImage, {
            small: small,
            className: "driver-photo"
          }, /*#__PURE__*/_react.default.createElement(_styles2.CompanyImage, {
            bgimage: company.logo || ((_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.noDriver),
            small: small
          })), /*#__PURE__*/_react.default.createElement(_styles2.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.CompanyNameContainer, {
            className: "driver-info"
          }, /*#__PURE__*/_react.default.createElement(_styles2.CompanyName, {
            small: small
          }, company.name), /*#__PURE__*/_react.default.createElement(_styles2.CompanyText, {
            small: small
          }, t('COMPANY', 'Company')))))
        };
      });
      setCompanysMultiOptionList(_companysOptionListTemp);
      var _iterator = _createForOfIteratorHelper(_companysOptionListTemp),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          _companysOptionList.push(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setCompanysOptionList(_companysOptionList);
  }, [companysList, defaultValue, searchValue]);
  var changeCompany = function changeCompany(companyId) {
    if (isFilterView) {
      if (companyId === 'default') {
        handleChangeCompany(null);
      } else {
        handleChangeCompany(companyId);
      }
      return;
    }
    if (companyId === 'default') return;
    if (companyId === 'remove') {
      companyId = null;
    }
    handleAssignDriverCompany({
      orderId: order.id,
      companyId: companyId
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
  var Placeholder = /*#__PURE__*/_react.default.createElement(_styles2.PlaceholderTitle, null, t('SELECT_COMPANY', 'Select company'));
  var handleSearch = function handleSearch(val) {
    setSearchValue(val);
  };
  if (isFilterView) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !companysList.loading ? /*#__PURE__*/_react.default.createElement(_styles.MultiSelect, {
      defaultValue: filterValues.companyIds,
      placeholder: Placeholder,
      options: companyssMultiOptionList,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "150px",
      onChange: function onChange(company) {
        return handleChangeCompany(company);
      },
      isShowSearchBar: true,
      searchBarIsCustomLayout: true,
      searchBarIsNotLazyLoad: true,
      searchValue: searchValue,
      handleChangeSearch: function handleChangeSearch(val) {
        return setSearchValue(val);
      }
    }) : /*#__PURE__*/_react.default.createElement(_styles.MultiSelect, {
      defaultValue: "default",
      options: companysLoading,
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
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !companysList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isFirstSelect ? /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
      defaultValue: defaultOption || 'default',
      options: companysOptionList,
      optionInnerMaxHeight: "200px",
      onChange: function onChange(companyId) {
        return changeCompany(companyId);
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
      options: companysOptionList,
      optionInnerMaxHeight: "200px",
      onChange: function onChange(companyId) {
        return changeCompany(companyId);
      },
      isShowSearchBar: true,
      searchBarIsNotLazyLoad: true,
      searchBarPlaceholder: t('SEARCH', 'Search'),
      searchBarIsCustomLayout: true,
      searchValue: searchValue,
      handleChangeSearch: handleSearch,
      className: "driver-select"
    })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DashboardSelect.Select, {
      placeholder: t('SELECT_COMPANY', 'Select company'),
      defaultValue: "default",
      options: companysLoading,
      optionInnerMargin: "10px",
      optionInnerMaxHeight: "200px",
      className: "driver-select"
    })));
  }
};
var CompanySelector = exports.CompanySelector = function CompanySelector(props) {
  var CompanysControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CompanySelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.DriverListDashboard, CompanysControlProps));
};