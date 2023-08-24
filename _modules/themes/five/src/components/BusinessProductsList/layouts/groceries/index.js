"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _Buttons = require("../../../../styles/Buttons");
var _SingleProductCard = require("../../../SingleProductCard");
var _NotFoundSource = require("../../../NotFoundSource");
var _Modal = require("../../../Modal");
var _utils = require("../../../../../../../utils");
var _styles = require("./styles");
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
var BusinessProductsListUI = function BusinessProductsListUI(props) {
  var _configs$use_parent_c, _configs$use_parent_c2, _category$description, _category$description2, _category$ribbon, _category$ribbon2, _category$ribbon3, _category$ribbon4, _category$ribbon5, _category$description3, _categoryState$produc, _categoryState$produc8;
  var errors = props.errors,
    businessId = props.businessId,
    business = props.business,
    category = props.category,
    categories = props.categories,
    categoryState = props.categoryState,
    isBusinessLoading = props.isBusinessLoading,
    onProductClick = props.onProductClick,
    handleSearchRedirect = props.handleSearchRedirect,
    searchValue = props.searchValue,
    isCartOnProductsList = props.isCartOnProductsList,
    handleClearSearch = props.handleClearSearch,
    errorQuantityProducts = props.errorQuantityProducts,
    categoriesState = props.categoriesState,
    onClickCategory = props.onClickCategory,
    currentCart = props.currentCart,
    handleUpdateProducts = props.handleUpdateProducts,
    isCustomerMode = props.isCustomerMode;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var isUseParentCategory = (configs === null || configs === void 0 || (_configs$use_parent_c = configs.use_parent_category) === null || _configs$use_parent_c === void 0 ? void 0 : _configs$use_parent_c.value) === 'true' || (configs === null || configs === void 0 || (_configs$use_parent_c2 = configs.use_parent_category) === null || _configs$use_parent_c2 === void 0 ? void 0 : _configs$use_parent_c2.value) === '1';
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openDescription = _useState2[0],
    setOpenDescription = _useState2[1];
  var shortCategoryDescriptionSelected = (category === null || category === void 0 || (_category$description = category.description) === null || _category$description === void 0 ? void 0 : _category$description.length) > 200 ? "".concat(category === null || category === void 0 || (_category$description2 = category.description) === null || _category$description2 === void 0 ? void 0 : _category$description2.substring(0, 200), "...") : category === null || category === void 0 ? void 0 : category.description;
  return /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, (category === null || category === void 0 ? void 0 : category.id) && /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, {
    id: "container",
    isCategorySelected: true
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "category-title"
  }, (category === null || category === void 0 ? void 0 : category.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: category.image
  }), /*#__PURE__*/_react.default.createElement("h3", null, category.name), (category === null || category === void 0 || (_category$ribbon = category.ribbon) === null || _category$ribbon === void 0 ? void 0 : _category$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: category === null || category === void 0 || (_category$ribbon2 = category.ribbon) === null || _category$ribbon2 === void 0 ? void 0 : _category$ribbon2.color,
    isRoundRect: (category === null || category === void 0 || (_category$ribbon3 = category.ribbon) === null || _category$ribbon3 === void 0 ? void 0 : _category$ribbon3.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (category === null || category === void 0 || (_category$ribbon4 = category.ribbon) === null || _category$ribbon4 === void 0 ? void 0 : _category$ribbon4.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, category === null || category === void 0 || (_category$ribbon5 = category.ribbon) === null || _category$ribbon5 === void 0 ? void 0 : _category$ribbon5.text)), (category === null || category === void 0 ? void 0 : category.description) && /*#__PURE__*/_react.default.createElement(_styles.CategoryDescripion, null, /*#__PURE__*/_react.default.createElement("p", null, shortCategoryDescriptionSelected, (category === null || category === void 0 || (_category$description3 = category.description) === null || _category$description3 === void 0 ? void 0 : _category$description3.length) > 200 && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setOpenDescription(category);
    }
  }, t('VIEW_MORE', 'View more'))))), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, categoryState === null || categoryState === void 0 || (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.map(function (product, i) {
    var _currentCart$products;
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: i,
      isSoldOut: (product === null || product === void 0 ? void 0 : product.inventoried) && !(product !== null && product !== void 0 && product.quantity),
      product: product,
      businessId: businessId,
      onProductClick: onProductClick,
      isCartOnProductsList: isCartOnProductsList,
      handleUpdateProducts: handleUpdateProducts,
      productAddedToCartLength: currentCart === null || currentCart === void 0 || (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.reduce(function (productsLength, Cproduct) {
        return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
      }, 0),
      isCustomerMode: isCustomerMode
    });
  }))), !(category !== null && category !== void 0 && category.id) && categories.filter(function (category) {
    return (category === null || category === void 0 ? void 0 : category.id) === 'featured';
  }).map(function (category, i) {
    var _categoriesState$feat, _categoriesState$feat2, _categoryState$produc2, _categoryState$produc3, _featProducts$filter;
    var featProducts = business !== null && business !== void 0 && business.lazy_load_products_recommended ? categoriesState !== null && categoriesState !== void 0 && (_categoriesState$feat = categoriesState.featured) !== null && _categoriesState$feat !== void 0 && (_categoriesState$feat = _categoriesState$feat.products) !== null && _categoriesState$feat !== void 0 && _categoriesState$feat.some(function (product) {
      return product.featured;
    }) ? categoriesState === null || categoriesState === void 0 || (_categoriesState$feat2 = categoriesState.featured) === null || _categoriesState$feat2 === void 0 ? void 0 : _categoriesState$feat2.products : [] : (_categoryState$produc2 = categoryState === null || categoryState === void 0 || (_categoryState$produc3 = categoryState.products) === null || _categoryState$produc3 === void 0 ? void 0 : _categoryState$produc3.filter(function (product) {
      return product.featured;
    })) !== null && _categoryState$produc2 !== void 0 ? _categoryState$produc2 : [];
    return (featProducts === null || featProducts === void 0 ? void 0 : featProducts.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "wrap-header"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "category-title"
    }, /*#__PURE__*/_react.default.createElement("h3", null, t('FEATURED', 'Featured'))), (featProducts === null || featProducts === void 0 ? void 0 : featProducts.length) > 9 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      onClick: function onClick() {
        return onClickCategory(category);
      }
    }, t('MORE', 'More'))), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, featProducts === null || featProducts === void 0 || (_featProducts$filter = featProducts.filter(function (p, index) {
      return (business === null || business === void 0 ? void 0 : business.food) || index < 9;
    })) === null || _featProducts$filter === void 0 ? void 0 : _featProducts$filter.map(function (product, i) {
      var _currentCart$products2;
      return product.featured && /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: i,
        isSoldOut: (product === null || product === void 0 ? void 0 : product.inventoried) && !(product !== null && product !== void 0 && product.quantity),
        product: product,
        businessId: businessId,
        onProductClick: onProductClick,
        handleUpdateProducts: handleUpdateProducts,
        isCartOnProductsList: isCartOnProductsList,
        productAddedToCartLength: currentCart === null || currentCart === void 0 || (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.reduce(function (productsLength, Cproduct) {
          return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
        }, 0),
        isCustomerMode: isCustomerMode
      });
    }), !(business !== null && business !== void 0 && business.food) && !(categoryState !== null && categoryState !== void 0 && categoryState.loading) && (featProducts === null || featProducts === void 0 ? void 0 : featProducts.length) > 9 && /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      useCustomFunctionality: true,
      onCustomClick: function onCustomClick() {
        return onClickCategory(category);
      },
      isCartOnProductsList: isCartOnProductsList,
      handleUpdateProducts: handleUpdateProducts,
      customText: t('MORE', 'More'),
      customStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    }))) : null;
  }), !(category !== null && category !== void 0 && category.id) && categories.filter(function (category) {
    return (category === null || category === void 0 ? void 0 : category.id) !== null;
  }).map(function (category, i, _categories) {
    var _categoryState$produc4, _categoryState$produc5, _categoryState$produc6, _categoryState$produc7, _category$description4, _category$description5, _category$ribbon6, _category$ribbon7, _category$ribbon8, _category$ribbon9, _category$ribbon10, _category$description6, _categoryState$pagina;
    var products = !isUseParentCategory ? (_categoryState$produc4 = categoryState === null || categoryState === void 0 || (_categoryState$produc5 = categoryState.products) === null || _categoryState$produc5 === void 0 ? void 0 : _categoryState$produc5.filter(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === (category === null || category === void 0 ? void 0 : category.id);
    })) !== null && _categoryState$produc4 !== void 0 ? _categoryState$produc4 : [] : (_categoryState$produc6 = categoryState === null || categoryState === void 0 || (_categoryState$produc7 = categoryState.products) === null || _categoryState$produc7 === void 0 ? void 0 : _categoryState$produc7.filter(function (product) {
      var _category$children;
      return category === null || category === void 0 || (_category$children = category.children) === null || _category$children === void 0 ? void 0 : _category$children.some(function (cat) {
        return cat.category_id === (product === null || product === void 0 ? void 0 : product.category_id);
      });
    })) !== null && _categoryState$produc6 !== void 0 ? _categoryState$produc6 : [];
    var shortCategoryDescription = (category === null || category === void 0 || (_category$description4 = category.description) === null || _category$description4 === void 0 ? void 0 : _category$description4.length) > 200 ? "".concat(category === null || category === void 0 || (_category$description5 = category.description) === null || _category$description5 === void 0 ? void 0 : _category$description5.substring(0, 200), "...") : category === null || category === void 0 ? void 0 : category.description;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, products.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, {
      id: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "wrap-header"
    }, /*#__PURE__*/_react.default.createElement(_styles.HeaderWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "category-title"
    }, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitle, null, (category === null || category === void 0 ? void 0 : category.image) && /*#__PURE__*/_react.default.createElement("img", {
      src: category.image
    }), /*#__PURE__*/_react.default.createElement("h3", null, category.name), (category === null || category === void 0 || (_category$ribbon6 = category.ribbon) === null || _category$ribbon6 === void 0 ? void 0 : _category$ribbon6.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
      bgColor: category === null || category === void 0 || (_category$ribbon7 = category.ribbon) === null || _category$ribbon7 === void 0 ? void 0 : _category$ribbon7.color,
      isRoundRect: (category === null || category === void 0 || (_category$ribbon8 = category.ribbon) === null || _category$ribbon8 === void 0 ? void 0 : _category$ribbon8.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
      isCapsule: (category === null || category === void 0 || (_category$ribbon9 = category.ribbon) === null || _category$ribbon9 === void 0 ? void 0 : _category$ribbon9.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
    }, category === null || category === void 0 || (_category$ribbon10 = category.ribbon) === null || _category$ribbon10 === void 0 ? void 0 : _category$ribbon10.text)), (products === null || products === void 0 ? void 0 : products.length) > 9 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      onClick: function onClick() {
        return onClickCategory(category);
      }
    }, t('MORE', 'More'))), (category === null || category === void 0 ? void 0 : category.description) && /*#__PURE__*/_react.default.createElement(_styles.CategoryDescripion, null, /*#__PURE__*/_react.default.createElement("p", null, shortCategoryDescription, (category === null || category === void 0 || (_category$description6 = category.description) === null || _category$description6 === void 0 ? void 0 : _category$description6.length) > 200 && /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return setOpenDescription(category);
      }
    }, t('VIEW_MORE', 'View more')))))), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, products.filter(function (p, index) {
      return index < 9 || (business === null || business === void 0 ? void 0 : business.food);
    }).map(function (product, i) {
      var _currentCart$products3;
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: i,
        isSoldOut: (product === null || product === void 0 ? void 0 : product.inventoried) && !(product !== null && product !== void 0 && product.quantity),
        businessId: businessId,
        product: product,
        onProductClick: onProductClick,
        handleUpdateProducts: handleUpdateProducts,
        isCartOnProductsList: isCartOnProductsList,
        productAddedToCartLength: currentCart === null || currentCart === void 0 || (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.reduce(function (productsLength, Cproduct) {
          return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
        }, 0),
        isCustomerMode: isCustomerMode
      });
    }), !(business !== null && business !== void 0 && business.food) && !(categoryState !== null && categoryState !== void 0 && categoryState.loading) && (products === null || products === void 0 ? void 0 : products.length) > 9 && /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      useCustomFunctionality: true,
      onCustomClick: function onCustomClick() {
        return onClickCategory(category);
      },
      isCartOnProductsList: isCartOnProductsList,
      handleUpdateProducts: handleUpdateProducts,
      customText: t('MORE', 'More'),
      customStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    }), (categoryState === null || categoryState === void 0 ? void 0 : categoryState.loading) && i + 1 === _categories.length && _toConsumableArray(Array(categoryState === null || categoryState === void 0 || (_categoryState$pagina = categoryState.pagination) === null || _categoryState$pagina === void 0 ? void 0 : _categoryState$pagina.nextPageItems).keys()).map(function (i) {
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: "skeleton:".concat(i),
        isSkeleton: true
      });
    }))));
  }), ((categoryState === null || categoryState === void 0 ? void 0 : categoryState.loading) || isBusinessLoading) && /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, _toConsumableArray(Array(categoryState === null || categoryState === void 0 ? void 0 : categoryState.pagination.nextPageItems).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: "skeleton:".concat(i),
      isSkeleton: true
    });
  })), !(categoryState !== null && categoryState !== void 0 && categoryState.loading) && !isBusinessLoading && (categoryState === null || categoryState === void 0 || (_categoryState$produc8 = categoryState.products) === null || _categoryState$produc8 === void 0 ? void 0 : _categoryState$produc8.length) === 0 && !(searchValue && errorQuantityProducts || !searchValue && !errorQuantityProducts) && /*#__PURE__*/_react.default.createElement(_styles.WrapperNotFound, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: !searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.'),
    btnTitle: !searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters'),
    onClickButton: function onClickButton() {
      return !searchValue ? handleSearchRedirect() : handleClearSearch('');
    }
  })), errors && errors.length > 0 && (typeof errors === 'string' ? [errors] : errors).map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, "ERROR: [", e, "]");
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openDescription,
    title: openDescription === null || openDescription === void 0 ? void 0 : openDescription.name,
    onClose: function onClose() {
      return setOpenDescription(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.DescriptionModalContainer, null, (openDescription === null || openDescription === void 0 ? void 0 : openDescription.image) && /*#__PURE__*/_react.default.createElement("img", {
    src: openDescription.image
  }), /*#__PURE__*/_react.default.createElement(_styles.DescriptionContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, openDescription === null || openDescription === void 0 ? void 0 : openDescription.description))))));
};
var BusinessProductsList = function BusinessProductsList(props) {
  var businessProductsListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductsList, businessProductsListProps);
};
exports.BusinessProductsList = BusinessProductsList;