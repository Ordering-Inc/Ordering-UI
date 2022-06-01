"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessListingSearchUI = exports.BusinessListingSearch = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _SearchBar = require("../SearchBar");

var _orderingComponents = require("ordering-components");

var _BusinessController = require("../BusinessController");

var _AutoScroll = require("../AutoScroll");

var _BusinessTypeFilter = require("../BusinessTypeFilter");

var _styledComponents = require("styled-components");

var _GoPrimitiveDot = _interopRequireDefault(require("@meronex/icons/go/GoPrimitiveDot"));

var _utils = require("../../../../../utils");

var _Buttons = require("../../styles/Buttons");

var _SingleProductCard = require("../SingleProductCard");

var _NotFoundSource = require("../NotFoundSource");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _BisDownArrow = _interopRequireDefault(require("@meronex/icons/bi/BisDownArrow"));

var _BisUpArrow = _interopRequireDefault(require("@meronex/icons/bi/BisUpArrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var _businessesSearchList, _sortItems$filter, _orderState$options3, _orderState$options4, _orderState$options5, _businessesSearchList2, _businessesSearchList4;

  var businessesSearchList = props.businessesSearchList,
      onBusinessClick = props.onBusinessClick,
      handleChangeFilters = props.handleChangeFilters,
      filters = props.filters,
      handleChangeTermValue = props.handleChangeTermValue,
      termValue = props.termValue,
      paginationProps = props.paginationProps,
      handleSearchbusinessAndProducts = props.handleSearchbusinessAndProducts;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      optimizeImage = _useUtils2$.optimizeImage,
      parseDistance = _useUtils2$.parseDistance;

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var maxDeliveryFeeOptions = [15, 25, 35, 'default']; // const maxProductPriceOptions = [5, 10, 15, 'default']

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
  var noResults = !businessesSearchList.loading && !businessesSearchList.lengthError && (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList = businessesSearchList.businesses) === null || _businessesSearchList === void 0 ? void 0 : _businessesSearchList.length) === 0;

  var MaxSectionItem = function MaxSectionItem(_ref) {
    var _ref2;

    var title = _ref.title,
        options = _ref.options,
        filter = _ref.filter;

    var parseValue = function parseValue(option) {
      return filter === 'max_distance' ? "".concat(option / 1000, " ").concat(t('KM', 'Km')) : filter === 'max_eta' ? "".concat(option, " ").concat(t('MIN', 'min')) : parsePrice(option);
    };

    return /*#__PURE__*/_react.default.createElement(_styles.MaxFilterContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, title), /*#__PURE__*/_react.default.createElement(_styles.ProgressContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProgressBar, {
      style: {
        width: "".concat((_ref2 = options.indexOf(filters === null || filters === void 0 ? void 0 : filters[filter]) / 3 * 100) !== null && _ref2 !== void 0 ? _ref2 : 100, "%")
      }
    })), /*#__PURE__*/_react.default.createElement(_styles.MaxItemContainer, null, options.map(function (option, i) {
      return /*#__PURE__*/_react.default.createElement(_styles.MaxItem, {
        key: option,
        active: (filters === null || filters === void 0 ? void 0 : filters[filter]) === option || option === 'default' && ((filters === null || filters === void 0 ? void 0 : filters[filter]) === 'default' || !(filters !== null && filters !== void 0 && filters[filter])),
        onClick: function onClick() {
          return handleChangeFilters(filter, option);
        }
      }, option === 'default' ? "".concat(parseValue(options[i - 1]), "+") : parseValue(option));
    })));
  };

  return /*#__PURE__*/_react.default.createElement(_styles.BusinessListingSearchContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessesTitle, null, t('SEARCH', 'Search')), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    isCustomLayout: true,
    placeholder: "".concat(t('SEARCH_BUSINESSES', 'Search Businesses'), " / ").concat(t('PLEASE_TYPE_AT_LEAST_3_CHARACTERS', 'Please type at least 3 characters')),
    onSearch: function onSearch(val) {
      return handleChangeTermValue(val);
    },
    value: termValue
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
  })), (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) === 1 && /*#__PURE__*/_react.default.createElement(MaxSectionItem, {
    title: t('MAX_DELIVERY_FEE', 'Max delivery fee'),
    options: maxDeliveryFeeOptions,
    filter: "max_delivery_price"
  }), [1, 2].includes(orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type) && /*#__PURE__*/_react.default.createElement(MaxSectionItem, {
    title: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type) === 1 ? t('MAX_DELIVERY_TIME', 'Max delivery time') : t('MAX_PICKUP_TIME', 'Max pickup time'),
    options: maxTimeOptions,
    filter: "max_eta"
  }), /*#__PURE__*/_react.default.createElement(MaxSectionItem, {
    title: t('MAX_DISTANCE', 'Max distance'),
    options: maxDistanceOptions,
    filter: "max_distance"
  }), /*#__PURE__*/_react.default.createElement(_styles.TagsContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('BUSINESS_CATEGORIES', 'Business categories')), /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    isSearchMode: true,
    filters: filters,
    handleChangeFilters: handleChangeFilters
  }))), /*#__PURE__*/_react.default.createElement(_styles.FiltersResultContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessList, {
    noResults: noResults
  }, noResults && /*#__PURE__*/_react.default.createElement(_styles.NotFoundWrapper, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
  })), ((_businessesSearchList2 = businessesSearchList.businesses) === null || _businessesSearchList2 === void 0 ? void 0 : _businessesSearchList2.length) > 0 && /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
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
    var _orderState$options7, _businessesSearchList3;

    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.type,
      firstCard: i === 0 && width > 681,
      minWidthEnabled: (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList3 = businessesSearchList.businesses) === null || _businessesSearchList3 === void 0 ? void 0 : _businessesSearchList3.length) > 3
    });
  })))), /*#__PURE__*/_react.default.createElement(_styles.ProductsList, null, (_businessesSearchList4 = businessesSearchList.businesses) === null || _businessesSearchList4 === void 0 ? void 0 : _businessesSearchList4.filter(function (business) {
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
          businessId: business === null || business === void 0 ? void 0 : business.id
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
  })))));
};

exports.BusinessListingSearchUI = BusinessListingSearchUI;

var BusinessListingSearch = function BusinessListingSearch(props) {
  var BusinessListSearch = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessListingSearchUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessSearchList, BusinessListSearch);
};

exports.BusinessListingSearch = BusinessListingSearch;