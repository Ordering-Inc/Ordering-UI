"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessListingSearchUI = exports.BusinessListingSearch = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _SearchBar = require("../SearchBar");
var _orderingComponents = require("ordering-components");
var _BusinessController = require("../BusinessController");
var _AutoScroll = require("../AutoScroll");
var _BusinessTypeFilter = require("../BusinessTypeFilter");
var _MyOrders = require("../MyOrders");
var _styledComponents = require("styled-components");
var _GoPrimitiveDot = _interopRequireDefault(require("@meronex/icons/go/GoPrimitiveDot"));
var _utils = require("../../../../../utils");
var _Buttons = require("../../styles/Buttons");
var _SingleProductCard = require("../SingleProductCard");
var _NotFoundSource = require("../NotFoundSource");
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _BisDownArrow = _interopRequireDefault(require("@meronex/icons/bi/BisDownArrow"));
var _BisUpArrow = _interopRequireDefault(require("@meronex/icons/bi/BisUpArrow"));
var _Modal = require("../Modal");
var _ProductForm = require("../ProductForm");
var _MaxSectionItem = require("./MaxSectionItem");
var _Accordion = require("./Accordion");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PIXELS_TO_SCROLL = 300;
var BusinessListingSearchUI = exports.BusinessListingSearchUI = function BusinessListingSearchUI(props) {
  var _configs$format_numbe, _configs$distance_uni, _configs$filter_searc, _businessesSearchList, _Object$values$find, _businessesSearchList3, _businessesSearchList4, _businessesSearchList6, _curProduct$business2, _curProduct$business3, _curProduct$product, _curProduct$product2, _currentCart$products;
  var businessesSearchList = props.businessesSearchList,
    onBusinessClick = props.onBusinessClick,
    handleChangeFilters = props.handleChangeFilters,
    filters = props.filters,
    handleChangeTermValue = props.handleChangeTermValue,
    termValue = props.termValue,
    paginationProps = props.paginationProps,
    handleSearchbusinessAndProducts = props.handleSearchbusinessAndProducts,
    brandList = props.brandList,
    onRedirectPage = props.onRedirectPage,
    onProductRedirect = props.onProductRedirect,
    handleUpdateBusinessList = props.handleUpdateBusinessList,
    _handleUpdateProducts = props.handleUpdateProducts;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)({
      business: null,
      product: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    curProduct = _useState2[0],
    setCurProduct = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openFilter = _useState4[0],
    setOpenFilter = _useState4[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    optimizeImage = _useUtils2$.optimizeImage,
    parseDistance = _useUtils2$.parseDistance;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var maxDeliveryFeeOptions = [15, 25, 35, 'default'];
  // const maxProductPriceOptions = [5, 10, 15, 'default']
  var currency = (_configs$format_numbe = configs.format_number_currency) === null || _configs$format_numbe === void 0 ? void 0 : _configs$format_numbe.value;
  var maxDistanceOptions = (configs === null || configs === void 0 || (_configs$distance_uni = configs.distance_unit) === null || _configs$distance_uni === void 0 ? void 0 : _configs$distance_uni.value) === 'km' ? [1000, 2000, 5000, 'default'] : [1609, 3218, 8046, 'default'];
  var maxTimeOptions = [5, 15, 30, 'default'];
  var sortItems = [{
    text: t('PICKED_FOR_YOU', 'Picked for you (default)'),
    value: 'distance'
  }, {
    text: t('DELIVERY_TIME', 'Delivery time'),
    value: 'delivery_time'
  }, {
    text: t('PICKUP_TIME', 'Pickup time'),
    value: 'pickup_time'
  }];
  var priceList = [{
    level: '1',
    content: "".concat(currency)
  }, {
    level: '2',
    content: "".concat(Array(2).fill(currency).join(''))
  }, {
    level: '3',
    content: "".concat(Array(3).fill(currency).join(''))
  }, {
    level: '4',
    content: "".concat(Array(4).fill(currency).join(''))
  }, {
    level: '5',
    content: "".concat(Array(5).fill(currency).join(''))
  }];
  var filterOptionsEnabled = (configs === null || configs === void 0 || (_configs$filter_searc = configs.filter_search_options) === null || _configs$filter_searc === void 0 || (_configs$filter_searc = _configs$filter_searc.value) === null || _configs$filter_searc === void 0 ? void 0 : _configs$filter_searc.split('|')) || [];
  var noResults = !businessesSearchList.loading && !businessesSearchList.lengthError && (businessesSearchList === null || businessesSearchList === void 0 || (_businessesSearchList = businessesSearchList.businesses) === null || _businessesSearchList === void 0 ? void 0 : _businessesSearchList.length) === 0;
  var currentCart = (_Object$values$find = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).find(function (cart) {
    var _cart$business, _curProduct$business;
    return (cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === (curProduct === null || curProduct === void 0 || (_curProduct$business = curProduct.business) === null || _curProduct$business === void 0 ? void 0 : _curProduct$business.slug);
  })) !== null && _Object$values$find !== void 0 ? _Object$values$find : {};
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2, _businessesSearchList2;
    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) === (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage));
    if (badScrollPosition || businessesSearchList !== null && businessesSearchList !== void 0 && businessesSearchList.loading || ((_businessesSearchList2 = businessesSearchList.error) === null || _businessesSearchList2 === void 0 ? void 0 : _businessesSearchList2.length) > 0 || !hasMore) return;
    handleSearchbusinessAndProducts();
  }, [businessesSearchList.loading, paginationProps]);
  var handleChangeBrandFilter = function handleChangeBrandFilter(brandId) {
    var _filters$franchise_id, _filters$franchise_id2;
    var franchiseIds = _toConsumableArray(filters === null || filters === void 0 ? void 0 : filters.franchise_ids);
    if (filters !== null && filters !== void 0 && (_filters$franchise_id = filters.franchise_ids) !== null && _filters$franchise_id !== void 0 && _filters$franchise_id.includes(brandId)) franchiseIds = filters === null || filters === void 0 || (_filters$franchise_id2 = filters.franchise_ids) === null || _filters$franchise_id2 === void 0 ? void 0 : _filters$franchise_id2.filter(function (item) {
      return item !== brandId;
    });else franchiseIds.push(brandId);
    handleChangeFilters && handleChangeFilters('franchise_ids', franchiseIds);
  };
  var handleChangePriceRange = function handleChangePriceRange(value) {
    if (value === (filters === null || filters === void 0 ? void 0 : filters.price_level)) handleChangeFilters('price_level', null);else handleChangeFilters('price_level', value);
  };
  var _onProductClick = function onProductClick(product, business) {
    setCurProduct({
      business: business,
      product: product
    });
  };
  var handleRedirectToCart = function handleRedirectToCart(product, code) {
    setCurProduct({
      business: null,
      product: null
    });
    onBusinessClick(curProduct === null || curProduct === void 0 ? void 0 : curProduct.business);
  };
  var closeModalProductForm = function closeModalProductForm() {
    setCurProduct({
      business: null,
      product: null
    });
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  var filtersComponent = function filtersComponent() {
    var _sortItems$filter, _brandList$brands, _orderState$options3, _orderState$options4, _orderState$options5;
    return /*#__PURE__*/_react.default.createElement(_styles.Filters, null, filterOptionsEnabled.includes('sort') && /*#__PURE__*/_react.default.createElement(_styles.SortContainer, null, /*#__PURE__*/_react.default.createElement(_Accordion.FilterAccordion, {
      title: t('SORT', 'Sort')
    }, sortItems === null || sortItems === void 0 || (_sortItems$filter = sortItems.filter(function (item) {
      var _orderState$options, _orderState$options2;
      return !((orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 && (item === null || item === void 0 ? void 0 : item.value) === 'pickup_time') && !((orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 2 && (item === null || item === void 0 ? void 0 : item.value) === 'delivery_time');
    })) === null || _sortItems$filter === void 0 ? void 0 : _sortItems$filter.map(function (item) {
      var _filters$orderBy, _filters$orderBy2, _filters$orderBy3;
      return /*#__PURE__*/_react.default.createElement(_styles.SortItem, {
        key: item === null || item === void 0 ? void 0 : item.value,
        onClick: function onClick() {
          return handleChangeFilters('orderBy', item === null || item === void 0 ? void 0 : item.value);
        },
        active: filters === null || filters === void 0 || (_filters$orderBy = filters.orderBy) === null || _filters$orderBy === void 0 ? void 0 : _filters$orderBy.includes(item === null || item === void 0 ? void 0 : item.value)
      }, item === null || item === void 0 ? void 0 : item.text, "  ", (filters === null || filters === void 0 || (_filters$orderBy2 = filters.orderBy) === null || _filters$orderBy2 === void 0 ? void 0 : _filters$orderBy2.includes(item === null || item === void 0 ? void 0 : item.value)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, filters !== null && filters !== void 0 && (_filters$orderBy3 = filters.orderBy) !== null && _filters$orderBy3 !== void 0 && _filters$orderBy3.includes('-') ? /*#__PURE__*/_react.default.createElement(_BisUpArrow.default, null) : /*#__PURE__*/_react.default.createElement(_BisDownArrow.default, null)));
    }))), filterOptionsEnabled.includes('brands') && /*#__PURE__*/_react.default.createElement(_styles.BrandContainer, null, /*#__PURE__*/_react.default.createElement(_Accordion.FilterAccordion, {
      title: t('BRANDS', 'Brands')
    }, /*#__PURE__*/_react.default.createElement(_styles.BrandListWrapper, null, (brandList === null || brandList === void 0 ? void 0 : brandList.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5).keys()).map(function (index) {
      return /*#__PURE__*/_react.default.createElement(_styles.BrandItem, {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        width: 120,
        height: 15
      }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        width: 16,
        height: 16
      }));
    })), !(brandList !== null && brandList !== void 0 && brandList.loading) && (brandList === null || brandList === void 0 ? void 0 : brandList.brands.map(function (brand, i) {
      var _filters$franchise_id3;
      return (brand === null || brand === void 0 ? void 0 : brand.enabled) && /*#__PURE__*/_react.default.createElement(_styles.BrandItem, {
        key: i,
        onClick: function onClick() {
          return handleChangeBrandFilter(brand === null || brand === void 0 ? void 0 : brand.id);
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, brand === null || brand === void 0 ? void 0 : brand.name), (filters === null || filters === void 0 || (_filters$franchise_id3 = filters.franchise_ids) === null || _filters$franchise_id3 === void 0 ? void 0 : _filters$franchise_id3.includes(brand === null || brand === void 0 ? void 0 : brand.id)) && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2, null));
    })), !(brandList !== null && brandList !== void 0 && brandList.loading) && (brandList === null || brandList === void 0 || (_brandList$brands = brandList.brands) === null || _brandList$brands === void 0 || (_brandList$brands = _brandList$brands.filter(function (brand) {
      return brand === null || brand === void 0 ? void 0 : brand.enabled;
    })) === null || _brandList$brands === void 0 ? void 0 : _brandList$brands.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.NoResult, null, t('NO_RESULTS_FOUND', 'Sorry, no results found'))))), filterOptionsEnabled.includes('price_range') && /*#__PURE__*/_react.default.createElement(_styles.PriceFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_Accordion.FilterAccordion, {
      title: t('PRICE_RANGE', 'Price range')
    }, /*#__PURE__*/_react.default.createElement(_styles.PriceFilterListWrapper, null, priceList.map(function (price, i) {
      return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        key: i,
        color: (filters === null || filters === void 0 ? void 0 : filters.price_level) === (price === null || price === void 0 ? void 0 : price.level) ? 'primary' : 'lightGray',
        onClick: function onClick() {
          return handleChangePriceRange(price === null || price === void 0 ? void 0 : price.level);
        }
      }, price.content, (filters === null || filters === void 0 ? void 0 : filters.price_level) === (price === null || price === void 0 ? void 0 : price.level) && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null));
    })))), (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) === 1 && filterOptionsEnabled.includes('max_delivery_fee') && /*#__PURE__*/_react.default.createElement(_MaxSectionItem.MaxSectionItem, {
      title: t('MAX_DELIVERY_FEE', 'Max delivery fee'),
      options: maxDeliveryFeeOptions,
      filter: "max_delivery_price",
      filters: filters,
      handleChangeFilters: handleChangeFilters
    }), [1, 2].includes(orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type) && filterOptionsEnabled.includes('max_delivery_time') && /*#__PURE__*/_react.default.createElement(_MaxSectionItem.MaxSectionItem, {
      title: (orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type) === 1 ? t('MAX_DELIVERY_TIME', 'Max delivery time') : t('MAX_PICKUP_TIME', 'Max pickup time'),
      options: maxTimeOptions,
      filter: "max_eta",
      filters: filters,
      handleChangeFilters: handleChangeFilters
    }), filterOptionsEnabled.includes('max_distance') && /*#__PURE__*/_react.default.createElement(_MaxSectionItem.MaxSectionItem, {
      title: t('MAX_DISTANCE', 'Max distance'),
      options: maxDistanceOptions,
      filter: "max_distance",
      filters: filters,
      handleChangeFilters: handleChangeFilters
    }), filterOptionsEnabled.includes('business_categories') && /*#__PURE__*/_react.default.createElement(_styles.TagsContainer, null, /*#__PURE__*/_react.default.createElement(_Accordion.FilterAccordion, {
      title: t('BUSINESS_CATEGORIES', 'Business categories')
    }, /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
      isSearchMode: true,
      filters: filters,
      handleChangeFilters: handleChangeFilters
    }))));
  };
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessListingSearchContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessesTitle, null, t('SEARCH', 'Search')), /*#__PURE__*/_react.default.createElement(_styles.SearchBarContainer, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    isCustomLayout: true,
    forceFocus: true,
    placeholder: "".concat(t('SEARCH_BUSINESSES', 'Search Businesses'), " / ").concat(t('PLEASE_TYPE_AT_LEAST_3_CHARACTERS', 'Please type at least 3 characters')),
    onSearch: function onSearch(val) {
      return handleChangeTermValue(val);
    },
    search: termValue
  }), width <= 768 && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Funnel, {
    onClick: function onClick() {
      return setOpenFilter(true);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.FiltersContainer, null, width > 768 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, filtersComponent()), /*#__PURE__*/_react.default.createElement(_styles.FiltersResultContainer, null, auth && (termValue === null || termValue === void 0 ? void 0 : termValue.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.PreviouslyOrderedContainer, null, /*#__PURE__*/_react.default.createElement(_MyOrders.MyOrders, {
    isFromBusinessListingSearch: true,
    hideOrders: true,
    businessesSearchList: businessesSearchList,
    onRedirectPage: onRedirectPage,
    onProductRedirect: onProductRedirect,
    onBusinessClick: onBusinessClick
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, null, ((_businessesSearchList3 = businessesSearchList.businesses) === null || _businessesSearchList3 === void 0 ? void 0 : _businessesSearchList3.length) > 0 && /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESSES', 'Businesses')), /*#__PURE__*/_react.default.createElement(_styles.BusinessList, {
    noResults: noResults
  }, noResults && /*#__PURE__*/_react.default.createElement(_styles.NotFoundWrapper, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
  })), ((_businessesSearchList4 = businessesSearchList.businesses) === null || _businessesSearchList4 === void 0 ? void 0 : _businessesSearchList4.length) > 0 && /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "searchlist",
    isColumnMode: width <= 681
  }, businessesSearchList.businesses.map(function (business, i) {
    var _orderState$options6;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open,
      handleCustomClick: onBusinessClick,
      orderType: orderState === null || orderState === void 0 || (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.type,
      handleUpdateBusinessList: handleUpdateBusinessList,
      firstCard: i === 0 && width > 681
    });
  }), !businessesSearchList.loading && (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) && (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) < (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) && /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
    typeButton: true
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "load-orders",
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return handleSearchbusinessAndProducts();
    }
  }, t('LOAD_MORE_BUSINESS', 'Load more business')))), businessesSearchList.loading && /*#__PURE__*/_react.default.createElement(_styles.BusinessControllerSkeleton, null, _toConsumableArray(Array(3).keys()).map(function (i) {
    var _orderState$options7, _businessesSearchList5;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 || (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.type,
      firstCard: i === 0 && width > 681,
      minWidthEnabled: (businessesSearchList === null || businessesSearchList === void 0 || (_businessesSearchList5 = businessesSearchList.businesses) === null || _businessesSearchList5 === void 0 ? void 0 : _businessesSearchList5.length) > 3
    });
  })))), /*#__PURE__*/_react.default.createElement(_styles.ProductsList, null, (_businessesSearchList6 = businessesSearchList.businesses) === null || _businessesSearchList6 === void 0 ? void 0 : _businessesSearchList6.filter(function (business) {
    var _business$categories;
    return (business === null || business === void 0 || (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.length) >= 0;
  }).map(function (business) {
    var _theme$images, _theme$images2, _orderState$options8, _orderState$options9, _business$categories2;
    return /*#__PURE__*/_react.default.createElement(_styles.SingleBusinessSearch, {
      key: "card-".concat(business === null || business === void 0 ? void 0 : business.id)
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, ((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo), 'h_200,c_limit')
    }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement(_styles.Metadata, null, (orderState === null || orderState === void 0 || (_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.type) === 1 && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivery fee')), business && parsePrice(business === null || business === void 0 ? void 0 : business.delivery_price)), /*#__PURE__*/_react.default.createElement("p", {
      className: "bullet"
    }, /*#__PURE__*/_react.default.createElement(_GoPrimitiveDot.default, null), (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 || (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.type) === 1 ? business === null || business === void 0 ? void 0 : business.delivery_time : business === null || business === void 0 ? void 0 : business.pickup_time)), /*#__PURE__*/_react.default.createElement("p", {
      className: "bullet"
    }, /*#__PURE__*/_react.default.createElement(_GoPrimitiveDot.default, null), parseDistance(business === null || business === void 0 ? void 0 : business.distance)))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      onClick: function onClick() {
        return onBusinessClick(business);
      },
      outline: true,
      bgtransparent: true,
      color: "primary"
    }, t('GO_TO_THE_STORE', 'Go to the store'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessProductsListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessProductsListContainer, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
      scrollId: "products-".concat(business === null || business === void 0 ? void 0 : business.id)
    }, business === null || business === void 0 || (_business$categories2 = business.categories) === null || _business$categories2 === void 0 ? void 0 : _business$categories2.map(function (category) {
      var _category$products;
      return category === null || category === void 0 || (_category$products = category.products) === null || _category$products === void 0 ? void 0 : _category$products.map(function (product) {
        return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
          key: product === null || product === void 0 ? void 0 : product.id,
          isSoldOut: product.inventoried && !product.quantity,
          product: product,
          businessId: business === null || business === void 0 ? void 0 : business.id,
          onProductClick: function onProductClick(product) {
            return _onProductClick(product, business);
          },
          handleUpdateProducts: function handleUpdateProducts(productId, changes) {
            return _handleUpdateProducts(productId, category === null || category === void 0 ? void 0 : category.id, business === null || business === void 0 ? void 0 : business.id, changes);
          }
        });
      });
    })))));
  }), (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.loading) && _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SingleBusinessSearch, {
      key: "skeleton:".concat(i)
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    })), /*#__PURE__*/_react.default.createElement(_styles.Metadata, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 65
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 65
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 65
    })))), /*#__PURE__*/_react.default.createElement(_styles.BusinessProductsListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessProductsListContainer, null, _toConsumableArray(Array(3)).map(function (item, j) {
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: "skeleton-card:".concat(j, "-").concat(i),
        isSkeleton: true
      });
    }))));
  })))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: props !== null && props !== void 0 && props.useKioskApp ? '80%' : '760px',
    open: !!(curProduct !== null && curProduct !== void 0 && curProduct.product),
    closeOnBackdrop: true,
    onClose: function onClose() {
      return closeModalProductForm();
    },
    padding: "0",
    isProductForm: true,
    disableOverflowX: true
  }, !!(curProduct !== null && curProduct !== void 0 && curProduct.product) && /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    businessSlug: curProduct === null || curProduct === void 0 || (_curProduct$business2 = curProduct.business) === null || _curProduct$business2 === void 0 ? void 0 : _curProduct$business2.slug,
    useKioskApp: props === null || props === void 0 ? void 0 : props.useKioskApp,
    product: curProduct === null || curProduct === void 0 ? void 0 : curProduct.product,
    businessId: curProduct === null || curProduct === void 0 || (_curProduct$business3 = curProduct.business) === null || _curProduct$business3 === void 0 ? void 0 : _curProduct$business3.id,
    categoryId: curProduct === null || curProduct === void 0 || (_curProduct$product = curProduct.product) === null || _curProduct$product === void 0 ? void 0 : _curProduct$product.category_id,
    productId: curProduct === null || curProduct === void 0 || (_curProduct$product2 = curProduct.product) === null || _curProduct$product2 === void 0 ? void 0 : _curProduct$product2.id,
    onSave: handleRedirectToCart,
    handleUpdateProducts: function handleUpdateProducts(productId, changes) {
      var _curProduct$product3, _curProduct$business4;
      return _handleUpdateProducts(productId, curProduct === null || curProduct === void 0 || (_curProduct$product3 = curProduct.product) === null || _curProduct$product3 === void 0 ? void 0 : _curProduct$product3.category_id, curProduct === null || curProduct === void 0 || (_curProduct$business4 = curProduct.business) === null || _curProduct$business4 === void 0 ? void 0 : _curProduct$business4.id, changes);
    },
    productAddedToCartLength: (currentCart === null || currentCart === void 0 || (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.reduce(function (productsLength, Cproduct) {
      return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (curProduct === null || curProduct === void 0 ? void 0 : curProduct.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
    }, 0)) || 0
  })), width <= 768 && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openFilter,
    onClose: function onClose() {
      return setOpenFilter(false);
    },
    title: t('FILTERS', 'Filters')
  }, filtersComponent()));
};
var BusinessListingSearch = exports.BusinessListingSearch = function BusinessListingSearch(props) {
  var BusinessListSearch = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessListingSearchUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessSearchList, BusinessListSearch);
};