"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SearchBar = require("../../../SearchBar");
var _FiFilter = _interopRequireDefault(require("@meronex/icons/fi/FiFilter"));
var _orderingComponents = require("ordering-components");
var _BusinessPreorder = require("../../../BusinessPreorder");
var _BusinessTypeFilter = require("../../../BusinessTypeFilter");
var _utils = require("../../../../../../../utils");
var _Buttons = require("../../../../styles/Buttons");
var _NotFoundSource = require("../../../NotFoundSource");
var _Modal = require("../../../Modal");
var _BusinessController = require("../../../BusinessController");
var _AddressList = require("../../../AddressList");
var _AddressForm = require("../../../AddressForm");
var _OrderTypeSelectorHeader = require("../../../../../../../components/OrderTypeSelectorHeader");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
var _MomentControl = require("../../../MomentControl");
var _HighestRated = require("../../../HighestRated");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PIXELS_TO_SCROLL = 300;
var BusinessListingUI = function BusinessListingUI(props) {
  var _configState$configs, _configState$configs$, _configState$configs2, _configState$configs3, _businessesList$busin2, _configState$configs6, _configState$configs7, _orderState$options, _orderState$options$a, _businessesList$busin3, _orderState$options4;
  var handleChangeBusinessType = props.handleChangeBusinessType,
    priceLevelSelected = props.priceLevelSelected,
    handleChangePriceLevel = props.handleChangePriceLevel,
    businessesList = props.businessesList,
    paginationProps = props.paginationProps,
    searchValue = props.searchValue,
    getBusinesses = props.getBusinesses,
    isCustomLayout = props.isCustomLayout,
    isCustomerMode = props.isCustomerMode,
    onBusinessClick = props.onBusinessClick,
    handleChangeSearch = props.handleChangeSearch,
    handleBusinessClick = props.handleBusinessClick,
    businessTypeSelected = props.businessTypeSelected,
    handleUpdateBusinessList = props.handleUpdateBusinessList,
    onRedirectPage = props.onRedirectPage;
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
    configState = _useConfig2[0];
  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalIsOpen = _useState2[0],
    setModalIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    favoriteIds = _useState4[0],
    setFavoriteIds = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isPreorder = _useState6[0],
    setIsPreorder = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    preorderBusiness = _useState8[0],
    setPreorderBusiness = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    hasHighRatedBusiness = _useState10[0],
    setHasHighRatedBusiness = _useState10[1];
  var limitDays = parseInt(configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.max_days_preorder) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value, 10);
  var currentDate = new Date();
  var time = limitDays > 1 ? currentDate.getTime() + (limitDays - 1) * 24 * 60 * 60 * 1000 : limitDays === 1 ? currentDate.getTime() : currentDate.getTime() + 6 * 24 * 60 * 60 * 1000;
  currentDate.setTime(time);
  currentDate.setHours(23);
  currentDate.setMinutes(59);
  var handleClickAddress = function handleClickAddress() {
    setModalIsOpen(true);
  };
  var handleClosePreorder = function handleClosePreorder() {
    setIsPreorder(false);
    setPreorderBusiness(null);
  };
  (0, _react.useEffect)(function () {
    if (preorderBusiness) setIsPreorder(true);
  }, [preorderBusiness]);
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
  (0, _react.useEffect)(function () {
    var _businessesList$busin;
    if (!(businessesList !== null && businessesList !== void 0 && (_businessesList$busin = businessesList.businesses) !== null && _businessesList$busin !== void 0 && _businessesList$busin.length)) return;
    var ids = _toConsumableArray(favoriteIds);
    businessesList.businesses.forEach(function (business) {
      if (business !== null && business !== void 0 && business.favorite) {
        ids.push(business.id);
      }
    });
    setFavoriteIds(_toConsumableArray(new Set(ids)));
  }, [businessesList === null || businessesList === void 0 ? void 0 : (_businessesList$busin2 = businessesList.businesses) === null || _businessesList$busin2 === void 0 ? void 0 : _businessesList$busin2.length]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessListContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('SELECT_BUSINESS', 'Select a business')), /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    onSearch: handleChangeSearch,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    handleCustomEnter: function handleCustomEnter(term) {
      var _configState$configs4, _configState$configs5;
      return (configState === null || configState === void 0 ? void 0 : (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 ? void 0 : (_configState$configs5 = _configState$configs4.advanced_business_search_enabled) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value) === '1' && onRedirectPage({
        page: 'business_search'
      });
    }
  }), (configState === null || configState === void 0 ? void 0 : (_configState$configs6 = configState.configs) === null || _configState$configs6 === void 0 ? void 0 : (_configState$configs7 = _configState$configs6.advanced_business_search_enabled) === null || _configState$configs7 === void 0 ? void 0 : _configState$configs7.value) === '1' && /*#__PURE__*/_react.default.createElement(_FiFilter.default, {
    onClick: function onClick() {
      return onRedirectPage({
        page: 'business_search'
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FilterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.TypeFilterWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, t('POPULAR_SERVICES', 'Popular services')), /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    businessTypes: props.businessTypes,
    defaultBusinessType: props.defaultBusinessType,
    handleChangeBusinessType: handleChangeBusinessType,
    isAppoint: true
  })), /*#__PURE__*/_react.default.createElement(_styles.PriceFilterWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement(_styles.PriceFilterListWrapper, null, _utils.priceList.map(function (price, i) {
    return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      key: i,
      color: priceLevelSelected === (price === null || price === void 0 ? void 0 : price.level) ? 'primary' : 'lightGray',
      onClick: function onClick() {
        return handleChangePriceLevel(price === null || price === void 0 ? void 0 : price.level);
      }
    }, price.content, priceLevelSelected === (price === null || price === void 0 ? void 0 : price.level) && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null));
  })))), /*#__PURE__*/_react.default.createElement(_styles.PreorderAndBusinessWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.PreorderWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.PreorderContent, null, /*#__PURE__*/_react.default.createElement("h2", null, t('AVAILABLE_APPOINTMENTS', 'Available appointments')), /*#__PURE__*/_react.default.createElement(_styles.AddressWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.AddressHeader, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ADDRESS', 'Address')), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setModalIsOpen(true);
    }
  }, t('CHANGE', 'Change'))), /*#__PURE__*/_react.default.createElement(_styles.AddressContent, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.House, null), /*#__PURE__*/_react.default.createElement("span", null, (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : _orderState$options$a.address))), /*#__PURE__*/_react.default.createElement(_styles.MomentWrapper, null, /*#__PURE__*/_react.default.createElement(_MomentControl.MomentControl, {
    isAppoint: true,
    maxDate: currentDate
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SERVICE_TYPE', 'Service type')), /*#__PURE__*/_react.default.createElement(_styles.SelectWrapper, null, /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1
  }))))), /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, null, businessesList.businesses.length > 0 && !props.franchiseId && /*#__PURE__*/_react.default.createElement(_styles.HightestRatedWrapper, {
    noHeight: !hasHighRatedBusiness
  }, /*#__PURE__*/_react.default.createElement(_HighestRated.HighestRated, {
    handleClickAddress: handleClickAddress,
    setHasHighRatedBusiness: setHasHighRatedBusiness,
    onBusinessClick: onBusinessClick,
    isCustomerMode: isCustomerMode,
    favoriteIds: favoriteIds,
    initialBuisnessType: businessTypeSelected,
    initialPricelevel: priceLevelSelected,
    setFavoriteIds: setFavoriteIds
  })), /*#__PURE__*/_react.default.createElement("h2", null, t('ALL_BUSINESSES', 'All businesses')), /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, !businessesList.loading && businessesList.businesses.length === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
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
    var _orderState$options2, _business$reviews;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open,
      handleCustomClick: handleBusinessClick,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type,
      isCustomLayout: isCustomLayout,
      isCustomerMode: isCustomerMode,
      onPreorderBusiness: setPreorderBusiness,
      businessHeader: business === null || business === void 0 ? void 0 : business.header,
      businessFeatured: business === null || business === void 0 ? void 0 : business.featured,
      businessOffers: business === null || business === void 0 ? void 0 : business.offers,
      businessLogo: business === null || business === void 0 ? void 0 : business.logo,
      businessReviews: business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total,
      businessDeliveryPrice: business === null || business === void 0 ? void 0 : business.delivery_price,
      businessDeliveryTime: business === null || business === void 0 ? void 0 : business.delivery_time,
      businessPickupTime: business === null || business === void 0 ? void 0 : business.pickup_time,
      businessDistance: business === null || business === void 0 ? void 0 : business.distance,
      handleUpdateBusinessList: handleUpdateBusinessList,
      favoriteIds: favoriteIds,
      setFavoriteIds: setFavoriteIds
    });
  }), businessesList.loading && _toConsumableArray(Array((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.nextPageItems) > 4 ? paginationProps.nextPageItems : 8).keys()).map(function (i) {
    var _orderState$options3;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type
    });
  }), businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && businessesList.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  }))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "768px",
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    }
  }, auth ? /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true
    // userId={isNaN(userCustomer?.id) ? null : userCustomer?.id}
    ,
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    }
  }) : /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.address) || {},
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    onSaveAddress: function onSaveAddress() {
      return setModalIsOpen(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isPreorder,
    width: "760px",
    onClose: function onClose() {
      return handleClosePreorder();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: preorderBusiness,
    handleClick: handleBusinessClick,
    showButton: true
  })));
};
var BusinessListing = function BusinessListing(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessListingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, businessListingProps);
};
exports.BusinessListing = BusinessListing;