"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _SingleProductCard = require("../SingleProductCard");
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
    setCategorySelected = props.setCategorySelected,
    categorySelected = props.categorySelected;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    indexCategorySelected = _useState2[0],
    setIndexCategorySelected = _useState2[1];
  (0, _react.useEffect)(function () {
    var categories = document.getElementsByClassName('category-lists');
    var categoriesOffset = getCategoriesOffset();
    if (categorySelected !== null && categorySelected !== void 0 && categorySelected.name && (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.name) !== 'All') {
      var index = categoriesOffset.findIndex(function (category) {
        return (category === null || category === void 0 ? void 0 : category.name) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.name);
      });
      setIndexCategorySelected(index);
      categories[0].scrollBy({
        top: 0,
        left: index > indexCategorySelected ? (categoriesOffset === null || categoriesOffset === void 0 ? void 0 : categoriesOffset.length) * 8 : -(categoriesOffset === null || categoriesOffset === void 0 ? void 0 : categoriesOffset.length) * 8,
        behavior: 'smooth'
      });
    }
  }, [categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.name]);
  (0, _react.useEffect)(function () {
    var goToCategory = function goToCategory() {
      var categoriesOffset = getCategoriesOffset();
      if ((categoriesOffset === null || categoriesOffset === void 0 ? void 0 : categoriesOffset.length) > 0) {
        categoriesOffset.map(function (category, i, hash) {
          var _hash, _hash2, _hash$;
          if (window.scrollY + 75 > ((_hash = hash[(categoriesOffset === null || categoriesOffset === void 0 ? void 0 : categoriesOffset.length) - 1]) === null || _hash === void 0 ? void 0 : _hash.offset) || window.scrollY + 680 >= document.body.offsetHeight) {
            // last category
            setCategorySelected(hash[(categoriesOffset === null || categoriesOffset === void 0 ? void 0 : categoriesOffset.length) - 1]);
          } else if (category.offset - 75 < window.scrollY && ((_hash2 = hash[i + 1]) === null || _hash2 === void 0 ? void 0 : _hash2.offset) - 75 > window.scrollY) {
            setCategorySelected(category);
          } else if (window.scrollY > 100 && window.scrollY < ((_hash$ = hash[2]) === null || _hash$ === void 0 ? void 0 : _hash$.offset) - 75 && (category === null || category === void 0 ? void 0 : category.name) === t('FEATURED', 'Featured')) {
            setCategorySelected(category);
          } else if (window.scrollY === 0) {
            setCategorySelected(hash[0]);
          }
        });
      }
    };
    window.addEventListener('scroll', goToCategory);
    return function () {
      window.removeEventListener('scroll', goToCategory);
    };
  }, []);
  var getCategoriesOffset = function getCategoriesOffset() {
    return categories.map(function (category) {
      var _document$getElements;
      return _objectSpread(_objectSpread({}, category), {}, {
        offset: (_document$getElements = document.getElementsByClassName(category.name)[0]) === null || _document$getElements === void 0 ? void 0 : _document$getElements.offsetTop
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
  }), /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, featured && (categoryState === null || categoryState === void 0 || (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.find(function (product) {
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
var BusinessProductsList = exports.BusinessProductsList = function BusinessProductsList(props) {
  var businessProductsListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductsList, businessProductsListProps);
};