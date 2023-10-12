"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FiMap = _interopRequireDefault(require("@meronex/icons/fi/FiMap"));
var _styledComponents = require("styled-components");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _NotFoundSource = require("../NotFoundSource");
var _Modal = require("../Modal");
var _Confirm = require("../Confirm");
var _AddressForm = require("../AddressForm");
var _AddressList = require("../AddressList");
var _SearchBar = require("../SearchBar");
var _BusinessTypeFilter = require("../BusinessTypeFilter");
var _BusinessController = require("../BusinessController");
var _OrdersOption = require("../OrdersOption");
var _BusinessesMap = require("../../../../../components/BusinessesMap");
var _orderingComponents = require("ordering-components");
var _HighestRated = require("../HighestRated");
var _BusinessPreorder = require("../BusinessPreorder");
var _OrderProgress = require("../OrderProgress");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PIXELS_TO_SCROLL = 300;
var BusinessesListingUI = function BusinessesListingUI(props) {
  var _businessesList$busin, _props$beforeElements, _props$beforeComponen, _theme$images, _getCustomArray, _businessesList$busin2, _orderState$options2, _businessesList$busin3, _orderState$options5, _props$afterComponent, _props$afterElements;
  var businessesList = props.businessesList,
    paginationProps = props.paginationProps,
    searchValue = props.searchValue,
    getBusinesses = props.getBusinesses,
    isCustomLayout = props.isCustomLayout,
    onRedirectPage = props.onRedirectPage,
    handleChangeSearch = props.handleChangeSearch,
    handleChangeBusinessType = props.handleChangeBusinessType,
    handleBusinessClick = props.handleBusinessClick,
    onBusinessClick = props.onBusinessClick;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)({
      listOpen: false,
      formOpen: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    modals = _useState2[0],
    setModals = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    activeMap = _useState6[0],
    setActiveMap = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    mapErrors = _useState8[0],
    setMapErrors = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isPreorder = _useState10[0],
    setIsPreorder = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    preorderBusiness = _useState12[0],
    setPreorderBusiness = _useState12[1];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var businessesIds = isCustomLayout && businessesList.businesses && ((_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    return business.id;
  }));
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2, _businessesList$error;
    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(paginationProps.totalPages === paginationProps.currentPage);
    if (badScrollPosition || businessesList.loading || ((_businessesList$error = businessesList.error) === null || _businessesList$error === void 0 ? void 0 : _businessesList$error.length) > 0 || !hasMore) return;
    getBusinesses();
  }, [businessesList.loading, paginationProps]);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  var handleClickAddress = function handleClickAddress(e) {
    if (auth) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
    } else {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
    }
  };
  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options;
    if (!(orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options = _orderState$options.address) !== null && _orderState$options !== void 0 && _orderState$options.location)) {
      setAlertState({
        open: true,
        content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')]
      });
      return;
    }
    setModals({
      listOpen: false,
      formOpen: false
    });
  };
  var toggleMap = function toggleMap() {
    setActiveMap(!activeMap);
  };
  var handleCloseAlerts = function handleCloseAlerts() {
    setAlertState({
      open: false,
      content: []
    });
    setMapErrors('');
  };
  var handleMapErrors = function handleMapErrors(errKey) {
    setAlertState({
      open: true,
      content: [t(errKey, mapErrors[errKey])]
    });
  };
  (0, _react.useEffect)(function () {
    if (mapErrors) {
      handleMapErrors(mapErrors);
      setActiveMap(false);
    }
  }, [mapErrors]);
  var getCustomArray = function getCustomArray(list) {
    var isArray = Array.isArray(list);
    return isArray ? list : Object.values(list);
  };
  var handleClosePreorder = function handleClosePreorder() {
    setIsPreorder(false);
    setPreorderBusiness(null);
  };
  (0, _react.useEffect)(function () {
    if (preorderBusiness) setIsPreorder(true);
  }, [preorderBusiness]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessHeroImg, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.businessHero
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderProgressWrapper, null, /*#__PURE__*/_react.default.createElement(_OrderProgress.OrderProgress, {
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    asDashboard: true
  })), isCustomLayout && onRedirectPage && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    horizontal: true,
    isBusinessesPage: true,
    onRedirectPage: onRedirectPage,
    titleContent: t('CARTS', 'Carts'),
    customArray: (_getCustomArray = getCustomArray(orderState.carts)) === null || _getCustomArray === void 0 ? void 0 : _getCustomArray.filter(function (cart) {
      return cart.products.length > 0;
    }),
    isCustomLayout: true,
    isBusinessesLoading: businessesList.loading
  }), /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    horizontal: true,
    asDashboard: true,
    isBusinessesPage: true,
    onRedirectPage: onRedirectPage,
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    isCustomLayout: true,
    titleContent: t('PREVIOUS_ORDERS', 'Previous orders'),
    isBusinessesLoading: businessesList.loading
  })), /*#__PURE__*/_react.default.createElement(_styles.HightestRatedWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_HighestRated.HighestRated, {
    handleClickAddress: handleClickAddress,
    onBusinessClick: onBusinessClick,
    isCustomLayout: true
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), (configs && (configs === null || configs === void 0 ? void 0 : configs.business_listing_categories) !== false || !isCustomLayout) && /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    images: props.images,
    businessTypes: props.businessTypes,
    defaultBusinessType: props.defaultBusinessType,
    handleChangeBusinessType: handleChangeBusinessType
  }), /*#__PURE__*/_react.default.createElement(_styles.SearchContainer, null, isCustomLayout && (businessesList === null || businessesList === void 0 || (_businessesList$busin2 = businessesList.businesses) === null || _businessesList$busin2 === void 0 ? void 0 : _businessesList$busin2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessesTitle, null, t('BUSINESSES', 'Businesses')), /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, {
    isCustomLayout: isCustomLayout
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    isCustomLayout: isCustomLayout,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch
  }), isCustomLayout && /*#__PURE__*/_react.default.createElement(_FiMap.default, {
    onClick: toggleMap
  }))), activeMap && /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.address) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.location,
    setErrors: setMapErrors
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, !businessesList.loading && businessesList.businesses.length === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return handleClickAddress();
    },
    style: {
      height: '44px'
    }
  }, t('CHANGE_ADDRESS', 'Select other Address'))), (_businessesList$busin3 = businessesList.businesses) === null || _businessesList$busin3 === void 0 ? void 0 : _businessesList$busin3.map(function (business) {
    var _orderState$options3;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open,
      handleCustomClick: handleBusinessClick,
      orderType: orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type,
      isCustomLayout: isCustomLayout,
      isShowCallcenterInformation: isCustomLayout,
      onPreorderBusiness: setPreorderBusiness
    });
  }), businessesList.loading && _toConsumableArray(Array((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.nextPageItems) > 4 ? paginationProps.nextPageItems : 8).keys()).map(function (i) {
    var _orderState$options4;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type
    });
  }), businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && businessesList.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isPreorder,
    width: "760px",
    onClose: function onClose() {
      return handleClosePreorder();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: preorderBusiness,
    handleClick: handleBusinessClick
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESS_FORM', 'Address Form'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.address) || {},
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveAddress: function onSaveAddress() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESSES', 'Address List'),
    open: modals.listOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    onAccept: function onAccept() {
      return handleFindBusinesses();
    }
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: !mapErrors ? t('SEARCH', 'Search') : t('BUSINESSES_MAP', 'Businesses Map'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return handleCloseAlerts();
    },
    onAccept: function onAccept() {
      return handleCloseAlerts();
    },
    closeOnBackdrop: false
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var BusinessesListing = exports.BusinessesListing = function BusinessesListing(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, businessListingProps);
};