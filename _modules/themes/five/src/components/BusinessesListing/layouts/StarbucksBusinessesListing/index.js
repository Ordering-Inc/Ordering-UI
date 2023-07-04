"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarbucksBusinessesListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FiMap = _interopRequireDefault(require("@meronex/icons/fi/FiMap"));
var _FiFilter = _interopRequireDefault(require("@meronex/icons/fi/FiFilter"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _Buttons = require("../../../../../../../styles/Buttons");
var _NotFoundSource = require("../../../../../../../components/NotFoundSource");
var _Confirm = require("../../../../../../../components/Confirm");
var _OrdersOption = require("../../../../../../../components/OrdersOption");
var _useWindowSize = require("../../../../../../../hooks/useWindowSize");
var _Modal = require("../../../../../../six/src/components/Modal");
var _BusinessesMap = require("../../../../../../six/src/components/BusinessesMap");
var _BusinessController = require("../../../../../../six/src/components/BusinessController");
var _SearchBar = require("../../../../../../six/src/components/SearchBar");
var _AddressList = require("../../../../../../six/src/components/AddressList");
var _AddressForm = require("../../../../../../six/src/components/AddressForm");
var _BusinessInformation = require("../../../../../../six/src/components/BusinessInformation");
var _EiLocation = _interopRequireDefault(require("@meronex/icons/ei/EiLocation"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import { BusinessTypeFilter } from '../../../../../../../components/BusinessTypeFilter'
var PIXELS_TO_SCROLL = 500;
var BusinessesListingUI = function BusinessesListingUI(props) {
  var _businessesList$busin, _props$beforeElements, _props$beforeComponen, _configs$advanced_bus2, _businessesList$busin2, _orderState$options4, _orderState$options5, _configs$google_maps_, _businessesList$busin3, _orderState$options6, _getCustomArray, _businessesList$busin4, _orderState$options7, _props$afterComponent, _props$afterElements;
  var businessesList = props.businessesList,
    paginationProps = props.paginationProps,
    searchValue = props.searchValue,
    getBusinesses = props.getBusinesses,
    isCustomLayout = props.isCustomLayout,
    onRedirectPage = props.onRedirectPage,
    handleChangeSearch = props.handleChangeSearch,
    handleBusinessClick = props.handleBusinessClick;
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
    showBusinessInfo = _useState10[0],
    setShowBusinessInfo = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    businessInfoById = _useState12[0],
    setBusinessInfoById = _useState12[1];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var businessesIds = isCustomLayout && businessesList.businesses && ((_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    return business.id;
  }));
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2;
    var listWindows = document.querySelector('#list_wrapper');
    var innerHeightScrolltop = listWindows.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(paginationProps.totalPages === paginationProps.currentPage);
    if (badScrollPosition || businessesList.loading || !hasMore) return;
    getBusinesses();
  }, [businessesList, paginationProps]);
  (0, _react.useEffect)(function () {
    if (!showBusinessInfo) {
      var listWindows = document.querySelector('#list_wrapper');
      listWindows.addEventListener('scroll', handleScroll);
      return function () {
        return listWindows.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll, showBusinessInfo]);
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
  var _handleShowBusinessInfo = function handleShowBusinessInfo(business) {
    setShowBusinessInfo(true);
    setBusinessInfoById(business);
  };
  var types = ['food', 'laundry', 'alcohol', 'groceries'];
  var getBusinessType = function getBusinessType() {
    if (Object.keys(businessInfoById).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;
      return businessInfoById[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 || (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, null, !showBusinessInfo ? /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.ListWrapper, {
    id: "list_wrapper",
    className: "list-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, windowSize.width > 850 && /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, {
    isCustomLayout: isCustomLayout
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    isStarbucks: true,
    search: searchValue,
    isCustomLayout: true,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch,
    handleCustomEnter: function handleCustomEnter(term) {
      var _configs$advanced_bus;
      return onRedirectPage({
        page: (configs === null || configs === void 0 || (_configs$advanced_bus = configs.advanced_business_search_enabled) === null || _configs$advanced_bus === void 0 ? void 0 : _configs$advanced_bus.value) === '1' && 'business_search',
        search: "?term=".concat(term)
      });
    },
    isHome: true
  }), (configs === null || configs === void 0 || (_configs$advanced_bus2 = configs.advanced_business_search_enabled) === null || _configs$advanced_bus2 === void 0 ? void 0 : _configs$advanced_bus2.value) === '1' && /*#__PURE__*/_react.default.createElement(_FiFilter.default, {
    onClick: function onClick() {
      return onRedirectPage({
        page: 'business_search'
      });
    }
  }), isCustomLayout && /*#__PURE__*/_react.default.createElement(_FiMap.default, {
    onClick: toggleMap
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, !businessesList.loading && businessesList.businesses.length === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return handleClickAddress();
    }
  }, t('CHANGE_ADDRESS', 'Select other Address'))), (_businessesList$busin2 = businessesList.businesses) === null || _businessesList$busin2 === void 0 ? void 0 : _businessesList$busin2.map(function (business) {
    var _orderState$options2;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      handleCustomClick: handleBusinessClick,
      handleShowBusinessInfo: function handleShowBusinessInfo(business) {
        return _handleShowBusinessInfo(business);
      },
      orderType: orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type,
      isCustomLayout: isCustomLayout,
      isShowCallcenterInformation: isCustomLayout
    });
  }), businessesList.loading && _toConsumableArray(Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 8).keys()).map(function (i) {
    var _orderState$options3;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type
    });
  }), businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && businessesList.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  })))), /*#__PURE__*/_react.default.createElement(_styles.MapWrapper, {
    className: "map-wrapper"
  }, windowSize.width < 576 && ((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.address) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.address) && /*#__PURE__*/_react.default.createElement(_styles.AddressInput, {
    onClick: handleClickAddress
  }, /*#__PURE__*/_react.default.createElement(_EiLocation.default, null), /*#__PURE__*/_react.default.createElement("p", null, (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.address) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.address)), windowSize.width < 850 && /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, {
    isCustomLayout: isCustomLayout
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    isStarbucks: true,
    search: searchValue,
    isCustomLayout: isCustomLayout,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch
  }), isCustomLayout && /*#__PURE__*/_react.default.createElement(_FiMap.default, {
    onClick: toggleMap
  })), (configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value) && (businessesList === null || businessesList === void 0 || (_businessesList$busin3 = businessesList.businesses) === null || _businessesList$busin3 === void 0 ? void 0 : _businessesList$busin3.length) > 0 && /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 || (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 || (_orderState$options6 = _orderState$options6.address) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.location,
    setErrors: setMapErrors
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessInfoById && /*#__PURE__*/_react.default.createElement(_BusinessInformation.BusinessInformation, {
    business: businessInfoById,
    getBusinessType: getBusinessType,
    optimizeImage: optimizeImage,
    onClose: setShowBusinessInfo,
    goBusiness: handleBusinessClick
  })), isCustomLayout && onRedirectPage && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    horizontal: true,
    isBusinessesPage: true,
    onRedirectPage: onRedirectPage,
    titleContent: t('CARTS', 'Carts'),
    businessesIds: businessesIds,
    customArray: (_getCustomArray = getCustomArray(orderState.carts)) === null || _getCustomArray === void 0 ? void 0 : _getCustomArray.filter(function (cart) {
      return cart.products.length > 0;
    }),
    isCustomLayout: true,
    isBusinessesLoading: businessesList.loading,
    franchiseId: props.franchiseId
  }), /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    horizontal: true,
    asDashboard: true,
    isBusinessesPage: true,
    businessesIds: businessesIds,
    onRedirectPage: onRedirectPage,
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    isCustomLayout: true,
    isBusinessesLoading: businessesList.loading,
    franchiseId: props.franchiseId
  })), isCustomLayout && (businessesList === null || businessesList === void 0 || (_businessesList$busin4 = businessesList.businesses) === null || _businessesList$busin4 === void 0 ? void 0 : _businessesList$busin4.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessesTitle, null, t('BUSINESSES', 'Businesses')), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESS_FORM', 'Address Form'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 || (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.address) || {},
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
var StarbucksBusinessesListing = function StarbucksBusinessesListing(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, businessListingProps);
};
exports.StarbucksBusinessesListing = StarbucksBusinessesListing;