"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _SingleProductCard = require("../SingleProductCard");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessProductsListUI = function BusinessProductsListUI(props) {
  var _props$beforeElements, _props$beforeComponen, _categoryState$produc, _categoryState$produc2, _props$afterComponent, _props$afterElements;

  var errors = props.errors,
      businessId = props.businessId,
      categories = props.categories,
      categoryState = props.categoryState,
      isBusinessLoading = props.isBusinessLoading,
      onProductClick = props.onProductClick,
      featured = props.featured,
      searchValue = props.searchValue,
      isCartOnProductsList = props.isCartOnProductsList,
      errorQuantityProducts = props.errorQuantityProducts,
      setCategorySelected = props.setCategorySelected;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', function () {
      var categoriesOffset = getCategoriesOffset();

      if ((categoriesOffset === null || categoriesOffset === void 0 ? void 0 : categoriesOffset.length) > 0) {
        var _document$getElements;

        var lastContainerHeight = (_document$getElements = document.getElementsByClassName('last-category')[0]) === null || _document$getElements === void 0 ? void 0 : _document$getElements.offsetHeight;
        categoriesOffset.map(function (category, i, hash) {
          var _hash, _hash2, _hash$;

          if (category.offset - 125 < window.scrollY && ((_hash = hash[i + 1]) === null || _hash === void 0 ? void 0 : _hash.offset) > window.scrollY) {
            setCategorySelected(category);
          } else if (window.scrollY + lastContainerHeight + 125 > ((_hash2 = hash[(categoriesOffset === null || categoriesOffset === void 0 ? void 0 : categoriesOffset.length) - 1]) === null || _hash2 === void 0 ? void 0 : _hash2.offset)) {
            setCategorySelected(hash[(categoriesOffset === null || categoriesOffset === void 0 ? void 0 : categoriesOffset.length) - 1]);
          } else if (window.scrollY > 100 && window.scrollY < ((_hash$ = hash[2]) === null || _hash$ === void 0 ? void 0 : _hash$.offset) && (category === null || category === void 0 ? void 0 : category.name) === t('FEATURED', 'Featured')) {
            setCategorySelected(category);
          } else if (window.scrollY === 0) {
            setCategorySelected(hash[0]);
          }
        });
      }
    });
    return function () {
      window.removeEventListener('scroll');
    };
  }, []);

  var getCategoriesOffset = function getCategoriesOffset() {
    return categories.map(function (category) {
      var _document$getElements2;

      return _objectSpread(_objectSpread({}, category), {}, {
        offset: (_document$getElements2 = document.getElementsByClassName(category.name)[0]) === null || _document$getElements2 === void 0 ? void 0 : _document$getElements2.offsetTop
      });
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
  }), /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, featured && (categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.find(function (product) {
    return product.featured;
  })) && /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "featured"
  }, t('FEATURED', 'Featured')), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, (_categoryState$produc2 = categoryState.products) === null || _categoryState$produc2 === void 0 ? void 0 : _categoryState$produc2.map(function (product) {
    return product.featured && /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: product === null || product === void 0 ? void 0 : product.id,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      businessId: businessId,
      onProductClick: onProductClick,
      isCartOnProductsList: isCartOnProductsList
    });
  }))), categories.map(function (category, i, _categories) {
    var products = categoryState.products || [];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: category === null || category === void 0 ? void 0 : category.id
    }, products.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, {
      className: i === categories.length - 1 && 'last-category',
      id: "container ".concat(i === categories.length - 1 && 'last-category')
    }, category.name !== t('FEATURED', 'Featured') && /*#__PURE__*/_react.default.createElement("div", {
      className: "category-title"
    }, (category === null || category === void 0 ? void 0 : category.image) && /*#__PURE__*/_react.default.createElement("img", {
      src: category.image
    }), /*#__PURE__*/_react.default.createElement("h3", {
      className: category.name
    }, category.name)), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, products.filter(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === (category === null || category === void 0 ? void 0 : category.id);
    }).map(function (_product) {
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: _product === null || _product === void 0 ? void 0 : _product.id,
        isSoldOut: _product.inventoried && !_product.quantity,
        businessId: businessId,
        product: _product,
        onProductClick: onProductClick,
        isCartOnProductsList: isCartOnProductsList
      });
    }), categoryState.loading && i + 1 === _categories.length && _toConsumableArray(Array(categoryState.pagination.nextPageItems).keys()).map(function (i) {
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: "skeleton:".concat(i),
        isSkeleton: true
      });
    }))));
  }), (categoryState.loading || isBusinessLoading) && /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, _toConsumableArray(Array(categoryState.pagination.nextPageItems).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: "skeleton:".concat(i),
      isSkeleton: true
    });
  })), !categoryState.loading && !isBusinessLoading && categoryState.products.length === 0 && !(searchValue && errorQuantityProducts || !searchValue && !errorQuantityProducts) && /*#__PURE__*/_react.default.createElement(_styles.WrapperNotFound, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: !searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.')
  })), errors && errors.length > 0 && errors.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, "ERROR: [", e, "]");
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

var BusinessProductsList = function BusinessProductsList(props) {
  var businessProductsListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductsList, businessProductsListProps);
};

exports.BusinessProductsList = BusinessProductsList;