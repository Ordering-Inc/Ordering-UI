"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteProducts = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _SingleProductCard = require("../SingleProductCard");

var _NotFoundSource = require("../NotFoundSource");

var _Buttons = require("../../styles/Buttons");

var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));

var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));

var _styles = require("./styles");

var _react2 = require("swiper/react");

var _swiper = _interopRequireWildcard(require("swiper"));

require("swiper/swiper-bundle.min.css");

require("swiper/swiper.min.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_swiper.default.use([_swiper.Navigation]);

var FavoriteProductsUI = function FavoriteProductsUI(props) {
  var _props$beforeElements, _props$beforeComponen, _favoriteList$favorit, _favoriteList$favorit2, _favoriteList$favorit3, _props$afterComponent, _props$afterElements;

  var handleUpdateFavoriteList = props.handleUpdateFavoriteList,
      favoriteList = props.favoriteList,
      pagination = props.pagination,
      getFavoriteList = props.getFavoriteList;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var handleGoToBusinessList = function handleGoToBusinessList() {
    events.emit('go_to_page', {
      page: 'search'
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, !(favoriteList !== null && favoriteList !== void 0 && favoriteList.loading) && (favoriteList === null || favoriteList === void 0 ? void 0 : (_favoriteList$favorit = favoriteList.favorites) === null || _favoriteList$favorit === void 0 ? void 0 : _favoriteList$favorit.length) === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return handleGoToBusinessList();
    },
    style: {
      height: '44px'
    }
  }, t('ADD_FAVORITE', 'Add favorite'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ArrowButtonWrapper, {
    className: "swiper-button-prev",
    isLoading: favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.loading
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, null)), /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
    className: "swiper-businesses",
    preventClicksPropagation: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }, !(favoriteList !== null && favoriteList !== void 0 && favoriteList.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, favoriteList === null || favoriteList === void 0 ? void 0 : (_favoriteList$favorit2 = favoriteList.favorites) === null || _favoriteList$favorit2 === void 0 ? void 0 : _favoriteList$favorit2.map(function (product, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: i,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      onProductClick: function onProductClick() {},
      handleUpdateProducts: handleUpdateFavoriteList
    }));
  }), (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) < (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement(_styles.ProductCard, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return getFavoriteList((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) + 1);
    }
  }, t('LOAD_MORE_PRODUCTS', 'Load more products'))))), (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.loading) && _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: "skeleton:".concat(i),
      isSkeleton: true
    }));
  })), /*#__PURE__*/_react.default.createElement(_styles.ArrowButtonWrapper, {
    className: "swiper-button-next",
    isLoading: favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.loading
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, null))), (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.error) && (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.error.length) > 0 && (favoriteList === null || favoriteList === void 0 ? void 0 : (_favoriteList$favorit3 = favoriteList.favorites) === null || _favoriteList$favorit3 === void 0 ? void 0 : _favoriteList$favorit3.length) === 0 && (favoriteList === null || favoriteList === void 0 ? void 0 : favoriteList.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var FavoriteProducts = function FavoriteProducts(props) {
  var favoriteProductsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: FavoriteProductsUI,
    favoriteURL: 'favorite_products',
    originalURL: 'products'
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.FavoriteList, favoriteProductsProps);
};

exports.FavoriteProducts = FavoriteProducts;