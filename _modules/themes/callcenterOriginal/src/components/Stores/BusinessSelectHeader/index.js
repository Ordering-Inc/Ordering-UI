"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSelectHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components-");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
var _Shared = require("../../Shared");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessessListingUI = function BusinessessListingUI(props) {
  var businessList = props.businessList,
    pagination = props.pagination,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    getPageBusinesses = props.getPageBusinesses,
    isOpen = props.isOpen,
    close = props.close,
    changeBusinessState = props.changeBusinessState,
    handleOpenAddBusiness = props.handleOpenAddBusiness;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var dropdownReference = (0, _react.useRef)();
  var handleChangePage = function handleChangePage(page) {
    getPageBusinesses(pagination.pageSize, page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(pagination.from / pageSize);
    getPageBusinesses(pageSize, expectedPage);
  };
  var closeSelect = function closeSelect(e) {
    if (isOpen) {
      var _dropdownReference$cu;
      var outsideDropdown = !((_dropdownReference$cu = dropdownReference.current) !== null && _dropdownReference$cu !== void 0 && _dropdownReference$cu.contains(e.target));
      if (outsideDropdown) {
        close();
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (!isOpen) return;
    document.addEventListener('mouseup', closeSelect);
    return function () {
      return document.removeEventListener('mouseup', closeSelect);
    };
  }, [isOpen]);
  return /*#__PURE__*/_react.default.createElement(_styles2.PopMenuContatiner, {
    ref: dropdownReference
  }, /*#__PURE__*/_react.default.createElement(_styles2.SelectHeaderContent, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessSearch, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: onSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessList, null, businessList.loading ? _toConsumableArray(Array(pagination.pageSize).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.OptionItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 38,
      height: 38,
      style: {
        borderRadius: '7.6px'
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginLeft: '8px',
        marginRight: '8px'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 15,
      width: 140
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 12,
      width: 80,
      style: {
        marginTop: '7px'
      }
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessList.businesses.map(function (business) {
    var _business$city;
    return /*#__PURE__*/_react.default.createElement(_styles2.OptionItem, {
      key: business.id,
      onClick: function onClick() {
        return changeBusinessState(business);
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage(business === null || business === void 0 ? void 0 : business.logo, 'h_50,c_limit'),
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 || (_business$city = business.city) === null || _business$city === void 0 ? void 0 : _business$city.name)));
  }))), pagination && (pagination === null || pagination === void 0 ? void 0 : pagination.total) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, {
    className: "pagination-container"
  }, (pagination === null || pagination === void 0 ? void 0 : pagination.total) && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize),
    handleChangePage: handleChangePage,
    defaultPageSize: pagination.pageSize,
    handleChangePageSize: handleChangePageSize,
    isHidePagecontrol: true
  })), !businessList.loading && (pagination === null || pagination === void 0 ? void 0 : pagination.total) === 0 && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenAddBusiness();
    }
  }, t('ADD_NEW_STORE', 'Add new store'))));
};
var BusinessSelectHeader = exports.BusinessSelectHeader = function BusinessSelectHeader(props) {
  var _props$defaultPageSiz, _props$defaultPageSiz2, _props$defaultPropsTo;
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessessListingUI,
    asDashboard: true,
    loadMorePageSize: (_props$defaultPageSiz = props.defaultPageSize) !== null && _props$defaultPageSiz !== void 0 ? _props$defaultPageSiz : 6,
    paginationSettings: {
      pageSize: (_props$defaultPageSiz2 = props.defaultPageSize) !== null && _props$defaultPageSiz2 !== void 0 ? _props$defaultPageSiz2 : 6
    },
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true,
    propsToFetch: (_props$defaultPropsTo = props.defaultPropsToFetch) !== null && _props$defaultPropsTo !== void 0 ? _props$defaultPropsTo : ['name', 'slug', 'logo', 'city']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.DashboardBusinessList, businessListingProps);
};