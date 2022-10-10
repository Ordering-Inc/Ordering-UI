"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessListingSearchUI = function BusinessListingSearchUI(props) {
  var _businessesSearchList, _sortItems$filter, _brandList$brands, _brandList$brands$fil, _orderState$options3, _orderState$options4, _orderState$options5, _businessesSearchList2, _businessesSearchList3, _businessesSearchList5, _curProduct$business, _curProduct$business2, _curProduct$product, _curProduct$product2;
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
  var maxDeliveryFeeOptions = [15, 25, 35, 'default'];
  // const maxProductPriceOptions = [5, 10, 15, 'default']
  var maxDistanceOptions = [1000, 2000, 5000, 'default'];
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
    content: '$'
  }, {
    level: '2',
    content: '$$'
  }, {
    level: '3',
    content: '$$$'
  }, {
    level: '4',
    content: '$$$$'
  }, {
    level: '5',
    content: '$$$$$'
  }];
  var noResults = !businessesSearchList.loading && !businessesSearchList.lengthError && (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList = businessesSearchList.businesses) === null || _businessesSearchList === void 0 ? void 0 : _businessesSearchList.length) === 0;
  var handleChangeBrandFilter = function handleChangeBrandFilter(brandId) {
    var _filters$franchise_id, _filters$franchise_id2;
    var franchiseIds = _toConsumableArray(filters === null || filters === void 0 ? void 0 : filters.franchise_ids);
    if (filters !== null && filters !== void 0 && (_filters$franchise_id = filters.franchise_ids) !== null && _filters$franchise_id !== void 0 && _filters$franchise_id.includes(brandId)) franchiseIds = filters === null || filters === void 0 ? void 0 : (_filters$franchise_id2 = filters.franchise_ids) === null || _filters$franchise_id2 === void 0 ? void 0 : _filters$franchise_id2.filter(function (item) {
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
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessListingSearchContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessesTitle, null, t('SEARCH', 'Search')), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    isCustomLayout: true,
    forceFocus: true,
    placeholder: "".concat(t('SEARCH_BUSINESSES', 'Search Businesses'), " / ").concat(t('PLEASE_TYPE_AT_LEAST_3_CHARACTERS', 'Please type at least 3 characters')),
    onSearch: function onSearch(val) {
      return handleChangeTermValue(val);
    },
    search: termValue
  }), /*#__PURE__*/_react.default.createElement(_styles.FiltersContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Filters, null, /*#__PURE__*/_react.default.createElement(_styles.SortContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('SORT', 'Sort')), sortItems === null || sortItems === void 0 ? void 0 : (_sortItems$filter = sortItems.filter(function (item) {
    var _orderState$options, _orderState$options2;
    return !((orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 && (item === null || item === void 0 ? void 0 : item.value) === 'pickup_time') && !((orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 2 && (item === null || item === void 0 ? void 0 : item.value) === 'delivery_time');
  })) === null || _sortItems$filter === void 0 ? void 0 : _sortItems$filter.map(function (item) {
    var _filters$orderBy, _filters$orderBy2, _filters$orderBy3;
    return /*#__PURE__*/_react.default.createElement(_styles.SortItem, {
      key: item === null || item === void 0 ? void 0 : item.value,
      onClick: function onClick() {
        return handleChangeFilters('orderBy', item === null || item === void 0 ? void 0 : item.value);
      },
      active: filters === null || filters === void 0 ? void 0 : (_filters$orderBy = filters.orderBy) === null || _filters$orderBy === void 0 ? void 0 : _filters$orderBy.includes(item === null || item === void 0 ? void 0 : item.value)
    }, item === null || item === void 0 ? void 0 : item.text, "  ", (filters === null || filters === void 0 ? void 0 : (_filters$orderBy2 = filters.orderBy) === null || _filters$orderBy2 === void 0 ? void 0 : _filters$orderBy2.includes(item === null || item === void 0 ? void 0 : item.value)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, filters !== null && filters !== void 0 && (_filters$orderBy3 = filters.orderBy) !== null && _filters$orderBy3 !== void 0 && _filters$orderBy3.includes('-') ? /*#__PURE__*/_react.default.createElement(_BisUpArrow.default, null) : /*#__PURE__*/_react.default.createElement(_BisDownArrow.default, null)));
  })), /*#__PURE__*/_react.default.createElement(_styles.BrandContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('BRANDS', 'Brands')), /*#__PURE__*/_react.default.createElement(_styles.BrandListWrapper, null, (brandList === null || brandList === void 0 ? void 0 : brandList.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5).keys()).map(function (index) {
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
    }, /*#__PURE__*/_react.default.createElement("span", null, brand === null || brand === void 0 ? void 0 : brand.name), (filters === null || filters === void 0 ? void 0 : (_filters$franchise_id3 = filters.franchise_ids) === null || _filters$franchise_id3 === void 0 ? void 0 : _filters$franchise_id3.includes(brand === null || brand === void 0 ? void 0 : brand.id)) && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2, null));
  })), !(brandList !== null && brandList !== void 0 && brandList.loading) && (brandList === null || brandList === void 0 ? void 0 : (_brandList$brands = brandList.brands) === null || _brandList$brands === void 0 ? void 0 : (_brandList$brands$fil = _brandList$brands.filter(function (brand) {
    return brand === null || brand === void 0 ? void 0 : brand.enabled;
  })) === null || _brandList$brands$fil === void 0 ? void 0 : _brandList$brands$fil.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.NoResult, null, t('NO_RESULTS_FOUND', 'Sorry, no results found')))), /*#__PURE__*/_react.default.createElement(_styles.PriceFilterWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, t('PRICE_RANGE', 'Price range')), /*#__PURE__*/_react.default.createElement(_styles.PriceFilterListWrapper, null, priceList.map(function (price, i) {
    return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      key: i,
      color: (filters === null || filters === void 0 ? void 0 : filters.price_level) === (price === null || price === void 0 ? void 0 : price.level) ? 'primary' : 'lightGray',
      onClick: function onClick() {
        return handleChangePriceRange(price === null || price === void 0 ? void 0 : price.level);
      }
    }, price.content, (filters === null || filters === void 0 ? void 0 : filters.price_level) === (price === null || price === void 0 ? void 0 : price.level) && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null));
  }))), (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) === 1 && /*#__PURE__*/_react.default.createElement(_MaxSectionItem.MaxSectionItem, {
    title: t('MAX_DELIVERY_FEE', 'Max delivery fee'),
    options: maxDeliveryFeeOptions,
    filter: "max_delivery_price",
    filters: filters,
    handleChangeFilters: handleChangeFilters
  }), [1, 2].includes(orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type) && /*#__PURE__*/_react.default.createElement(_MaxSectionItem.MaxSectionItem, {
    title: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type) === 1 ? t('MAX_DELIVERY_TIME', 'Max delivery time') : t('MAX_PICKUP_TIME', 'Max pickup time'),
    options: maxTimeOptions,
    filter: "max_eta",
    filters: filters,
    handleChangeFilters: handleChangeFilters
  }), /*#__PURE__*/_react.default.createElement(_MaxSectionItem.MaxSectionItem, {
    title: t('MAX_DISTANCE', 'Max distance'),
    options: maxDistanceOptions,
    filter: "max_distance",
    filters: filters,
    handleChangeFilters: handleChangeFilters
  }), /*#__PURE__*/_react.default.createElement(_styles.TagsContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('BUSINESS_CATEGORIES', 'Business categories')), /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    isSearchMode: true,
    filters: filters,
    handleChangeFilters: handleChangeFilters
  }))), /*#__PURE__*/_react.default.createElement(_styles.FiltersResultContainer, null, auth && (termValue === null || termValue === void 0 ? void 0 : termValue.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.PreviouslyOrderedContainer, null, /*#__PURE__*/_react.default.createElement(_MyOrders.MyOrders, {
    hideOrders: true,
    businessesSearchList: businessesSearchList,
    onRedirectPage: onRedirectPage,
    onProductRedirect: onProductRedirect,
    onBusinessClick: onBusinessClick
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, null, ((_businessesSearchList2 = businessesSearchList.businesses) === null || _businessesSearchList2 === void 0 ? void 0 : _businessesSearchList2.length) > 0 && /*#__PURE__*/_react.default.createElement("h2", null, t('BUSINESSES', 'Businesses')), /*#__PURE__*/_react.default.createElement(_styles.BusinessList, {
    noResults: noResults
  }, noResults && /*#__PURE__*/_react.default.createElement(_styles.NotFoundWrapper, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
  })), ((_businessesSearchList3 = businessesSearchList.businesses) === null || _businessesSearchList3 === void 0 ? void 0 : _businessesSearchList3.length) > 0 && /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
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
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.type,
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
    var _orderState$options7, _businessesSearchList4;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.type,
      firstCard: i === 0 && width > 681,
      minWidthEnabled: (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList4 = businessesSearchList.businesses) === null || _businessesSearchList4 === void 0 ? void 0 : _businessesSearchList4.length) > 3
    });
  })))), /*#__PURE__*/_react.default.createElement(_styles.ProductsList, null, (_businessesSearchList5 = businessesSearchList.businesses) === null || _businessesSearchList5 === void 0 ? void 0 : _businessesSearchList5.filter(function (business) {
    var _business$categories;
    return (business === null || business === void 0 ? void 0 : (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.length) > 0;
  }).map(function (business) {
    var _theme$images, _theme$images$dummies, _theme$images2, _theme$images2$dummie, _orderState$options8, _orderState$options9, _business$categories2;
    return /*#__PURE__*/_react.default.createElement(_styles.SingleBusinessSearch, {
      key: "card-".concat(business === null || business === void 0 ? void 0 : business.id)
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, ((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo), 'h_200,c_limit')
    }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement(_styles.Metadata, null, (orderState === null || orderState === void 0 ? void 0 : (_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.type) === 1 && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivery fee')), business && parsePrice(business === null || business === void 0 ? void 0 : business.delivery_price)), /*#__PURE__*/_react.default.createElement("p", {
      className: "bullet"
    }, /*#__PURE__*/_react.default.createElement(_GoPrimitiveDot.default, null), (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 ? void 0 : (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.type) === 1 ? business === null || business === void 0 ? void 0 : business.delivery_time : business === null || business === void 0 ? void 0 : business.pickup_time)), /*#__PURE__*/_react.default.createElement("p", {
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
    }, business === null || business === void 0 ? void 0 : (_business$categories2 = business.categories) === null || _business$categories2 === void 0 ? void 0 : _business$categories2.map(function (category) {
      var _category$products;
      return category === null || category === void 0 ? void 0 : (_category$products = category.products) === null || _category$products === void 0 ? void 0 : _category$products.map(function (product) {
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
    businessSlug: curProduct === null || curProduct === void 0 ? void 0 : (_curProduct$business = curProduct.business) === null || _curProduct$business === void 0 ? void 0 : _curProduct$business.slug,
    useKioskApp: props === null || props === void 0 ? void 0 : props.useKioskApp,
    businessId: curProduct === null || curProduct === void 0 ? void 0 : (_curProduct$business2 = curProduct.business) === null || _curProduct$business2 === void 0 ? void 0 : _curProduct$business2.id,
    categoryId: curProduct === null || curProduct === void 0 ? void 0 : (_curProduct$product = curProduct.product) === null || _curProduct$product === void 0 ? void 0 : _curProduct$product.category_id,
    productId: curProduct === null || curProduct === void 0 ? void 0 : (_curProduct$product2 = curProduct.product) === null || _curProduct$product2 === void 0 ? void 0 : _curProduct$product2.id,
    onSave: handleRedirectToCart
  })));
};
exports.BusinessListingSearchUI = BusinessListingSearchUI;
var BusinessListingSearch = function BusinessListingSearch(props) {
  var BusinessListSearch = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessListingSearchUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessSearchList, BusinessListSearch);
};
exports.BusinessListingSearch = BusinessListingSearch;