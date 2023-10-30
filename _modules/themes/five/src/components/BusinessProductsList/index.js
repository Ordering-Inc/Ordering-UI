"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _SingleProductCard = require("../SingleProductCard");
var _NotFoundSource = require("../NotFoundSource");
var _Modal = require("../Modal");
var _utils = require("../../../../../utils");
var _AutoScroll = require("../AutoScroll");
var _styles = require("./styles");
var _SubcategoriesComponent = require("./SubcategoriesComponent");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
  var _configs$use_parent_c, _configs$use_parent_c2, _categoryState$produc, _category$subcategori, _category$subcategori2, _category$subcategori3, _headerRef$current, _categoryState$produc2, _categoryState$produc3, _categoryState$produc4, _categoryState$produc9;
  var errors = props.errors,
    businessId = props.businessId,
    isLazy = props.isLazy,
    category = props.category,
    categories = props.categories,
    categoryState = props.categoryState,
    isBusinessLoading = props.isBusinessLoading,
    onProductClick = props.onProductClick,
    handleSearchRedirect = props.handleSearchRedirect,
    featured = props.featured,
    useKioskApp = props.useKioskApp,
    searchValue = props.searchValue,
    isCartOnProductsList = props.isCartOnProductsList,
    handleClearSearch = props.handleClearSearch,
    errorQuantityProducts = props.errorQuantityProducts,
    currentCart = props.currentCart,
    setSubcategoriesSelected = props.setSubcategoriesSelected,
    subcategoriesSelected = props.subcategoriesSelected,
    onClickCategory = props.onClickCategory,
    handleUpdateProducts = props.handleUpdateProducts,
    isSearchMode = props.isSearchMode,
    business = props.business,
    previouslyProducts = props.previouslyProducts;
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
  var headerRef = (0, _react.useRef)();
  var onClickSubcategory = function onClickSubcategory(subCategory, parentCategory) {
    if (parentCategory && isLazy) {
      onClickCategory(parentCategory);
    }
    if (!subCategory) {
      setSubcategoriesSelected(subcategoriesSelected === null || subcategoriesSelected === void 0 ? void 0 : subcategoriesSelected.filter(function (_subcategory) {
        return (_subcategory === null || _subcategory === void 0 ? void 0 : _subcategory.parent_category_id) !== (parentCategory === null || parentCategory === void 0 ? void 0 : parentCategory.id);
      }));
      return;
    }
    var categoryFounded = subcategoriesSelected === null || subcategoriesSelected === void 0 ? void 0 : subcategoriesSelected.find(function (_subcategory) {
      return (subCategory === null || subCategory === void 0 ? void 0 : subCategory.id) === (_subcategory === null || _subcategory === void 0 ? void 0 : _subcategory.id);
    });
    if (categoryFounded) {
      setSubcategoriesSelected(subcategoriesSelected === null || subcategoriesSelected === void 0 ? void 0 : subcategoriesSelected.filter(function (_subcategory) {
        return (subCategory === null || subCategory === void 0 ? void 0 : subCategory.id) !== (_subcategory === null || _subcategory === void 0 ? void 0 : _subcategory.id);
      }));
    } else {
      setSubcategoriesSelected([].concat(_toConsumableArray(subcategoriesSelected), [subCategory]));
    }
  };
  var productsCategorySelected = (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.filter(function (product) {
    return !(subcategoriesSelected !== null && subcategoriesSelected !== void 0 && subcategoriesSelected.find(function (subcategory) {
      return (subcategory === null || subcategory === void 0 ? void 0 : subcategory.parent_category_id) === (category === null || category === void 0 ? void 0 : category.id);
    })) || (subcategoriesSelected === null || subcategoriesSelected === void 0 ? void 0 : subcategoriesSelected.some(function (subcategory) {
      return subcategory.id === (product === null || product === void 0 ? void 0 : product.category_id);
    }));
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, (category === null || category === void 0 ? void 0 : category.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderWrapper, null, (category === null || category === void 0 || (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0 && !isSearchMode && /*#__PURE__*/_react.default.createElement(_SubcategoriesComponent.SubcategoriesComponent, {
    category: category,
    subcategoriesSelected: subcategoriesSelected,
    onClickSubcategory: onClickSubcategory
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, productsCategorySelected.map(function (product, i) {
    var _currentCart$products;
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: i,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      useKioskApp: useKioskApp,
      businessId: businessId,
      onProductClick: onProductClick,
      isCartOnProductsList: isCartOnProductsList,
      handleUpdateProducts: handleUpdateProducts,
      productAddedToCartLength: currentCart === null || currentCart === void 0 || (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.reduce(function (productsLength, Cproduct) {
        return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
      }, 0)
    });
  })), isSearchMode && (category === null || category === void 0 || (_category$subcategori2 = category.subcategories) === null || _category$subcategori2 === void 0 ? void 0 : _category$subcategori2.length) > 0 && (category === null || category === void 0 || (_category$subcategori3 = category.subcategories) === null || _category$subcategori3 === void 0 || (_category$subcategori3 = _category$subcategori3.filter(function (subcategory) {
    return productsCategorySelected === null || productsCategorySelected === void 0 ? void 0 : productsCategorySelected.some(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
    });
  })) === null || _category$subcategori3 === void 0 ? void 0 : _category$subcategori3.map(function (subcategory) {
    var _productsCategorySele;
    return /*#__PURE__*/_react.default.createElement(_styles.SubcategorySearchContainer, {
      key: subcategory === null || subcategory === void 0 ? void 0 : subcategory.id
    }, /*#__PURE__*/_react.default.createElement("h4", null, subcategory === null || subcategory === void 0 ? void 0 : subcategory.name), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, {
      isSubcategorySearch: true
    }, productsCategorySelected === null || productsCategorySelected === void 0 || (_productsCategorySele = productsCategorySelected.filter(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
    })) === null || _productsCategorySele === void 0 ? void 0 : _productsCategorySele.map(function (product, i) {
      var _currentCart$products2;
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: i,
        isSoldOut: product.inventoried && !product.quantity,
        businessId: businessId,
        product: product,
        onProductClick: onProductClick,
        isCartOnProductsList: isCartOnProductsList,
        handleUpdateProducts: handleUpdateProducts,
        useKioskApp: useKioskApp,
        productAddedToCartLength: currentCart === null || currentCart === void 0 || (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.reduce(function (productsLength, Cproduct) {
          return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
        }, 0)
      });
    })));
  }))), !(category !== null && category !== void 0 && category.id) && (previouslyProducts === null || previouslyProducts === void 0 ? void 0 : previouslyProducts.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, {
    id: "previously_block"
  }, /*#__PURE__*/_react.default.createElement("h3", null, t('ORDER_IT_AGAIN', 'Order it again')), /*#__PURE__*/_react.default.createElement(_styles.CategoryDescription, {
    maxWidth: headerRef === null || headerRef === void 0 || (_headerRef$current = headerRef.current) === null || _headerRef$current === void 0 ? void 0 : _headerRef$current.clientWidth
  }, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_IT_AGAIN_DESC', 'Quickly add items from your past orders.'))), /*#__PURE__*/_react.default.createElement(_styles.PreviouslyOrderedContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PreviouslyOrderedWrapper, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "previously_ordered"
  }, previouslyProducts === null || previouslyProducts === void 0 ? void 0 : previouslyProducts.map(function (product, i) {
    var _currentCart$products3;
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: i,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      useKioskApp: useKioskApp,
      businessId: businessId,
      onProductClick: onProductClick,
      isCartOnProductsList: isCartOnProductsList,
      handleUpdateProducts: handleUpdateProducts,
      productAddedToCartLength: currentCart === null || currentCart === void 0 || (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.reduce(function (productsLength, Cproduct) {
        return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
      }, 0)
    });
  }))))), !(category !== null && category !== void 0 && category.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, featured && (categoryState === null || categoryState === void 0 || (_categoryState$produc2 = categoryState.products) === null || _categoryState$produc2 === void 0 ? void 0 : _categoryState$produc2.find(function (product) {
    return product.featured;
  })) && /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, {
    id: "categoryfeatured"
  }, /*#__PURE__*/_react.default.createElement("h3", null, t('FEATURED', 'Featured')), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, (_categoryState$produc3 = categoryState.products) === null || _categoryState$produc3 === void 0 ? void 0 : _categoryState$produc3.map(function (product, i) {
    var _currentCart$products4;
    return product.featured && /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: i,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      useKioskApp: useKioskApp,
      businessId: businessId,
      onProductClick: onProductClick,
      isCartOnProductsList: isCartOnProductsList,
      handleUpdateProducts: handleUpdateProducts,
      productAddedToCartLength: currentCart === null || currentCart === void 0 || (_currentCart$products4 = currentCart.products) === null || _currentCart$products4 === void 0 ? void 0 : _currentCart$products4.reduce(function (productsLength, Cproduct) {
        return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
      }, 0)
    });
  }), (business === null || business === void 0 ? void 0 : business.front_layout) !== 'food' && !(categoryState !== null && categoryState !== void 0 && categoryState.loading) && (categoryState === null || categoryState === void 0 || (_categoryState$produc4 = categoryState.products) === null || _categoryState$produc4 === void 0 ? void 0 : _categoryState$produc4.length) > 9 && /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
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
  })))), !(category !== null && category !== void 0 && category.id) && categories.filter(function (category) {
    return (category === null || category === void 0 ? void 0 : category.id) !== null;
  }).map(function (category, i, _categories) {
    var _categoryState$produc5, _categoryState$produc6, _categoryState$produc7, _categoryState$produc8, _category$description, _category$description2, _category$subcategori4, _category$subcategori5, _category$ribbon, _category$ribbon2, _category$ribbon3, _category$ribbon4, _category$ribbon5, _headerRef$current2, _category$description3, _category$subcategori6, _category$subcategori7, _products$filter, _category$subcategori8, _category$subcategori9;
    var _products = !isUseParentCategory ? (_categoryState$produc5 = categoryState === null || categoryState === void 0 || (_categoryState$produc6 = categoryState.products) === null || _categoryState$produc6 === void 0 ? void 0 : _categoryState$produc6.filter(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === (category === null || category === void 0 ? void 0 : category.id);
    })) !== null && _categoryState$produc5 !== void 0 ? _categoryState$produc5 : [] : (_categoryState$produc7 = categoryState === null || categoryState === void 0 || (_categoryState$produc8 = categoryState.products) === null || _categoryState$produc8 === void 0 ? void 0 : _categoryState$produc8.filter(function (product) {
      var _category$children;
      return category === null || category === void 0 || (_category$children = category.children) === null || _category$children === void 0 ? void 0 : _category$children.some(function (cat) {
        return cat.category_id === (product === null || product === void 0 ? void 0 : product.category_id);
      });
    })) !== null && _categoryState$produc7 !== void 0 ? _categoryState$produc7 : [];
    var products = (subcategoriesSelected === null || subcategoriesSelected === void 0 ? void 0 : subcategoriesSelected.length) > 0 ? _products === null || _products === void 0 ? void 0 : _products.filter(function (product) {
      return !(subcategoriesSelected !== null && subcategoriesSelected !== void 0 && subcategoriesSelected.find(function (subcategory) {
        return (subcategory === null || subcategory === void 0 ? void 0 : subcategory.parent_category_id) === (category === null || category === void 0 ? void 0 : category.id);
      })) || subcategoriesSelected.some(function (subcategory) {
        var _subcategory$children;
        return (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id) === (product === null || product === void 0 ? void 0 : product.category_id) || (subcategory === null || subcategory === void 0 || (_subcategory$children = subcategory.children) === null || _subcategory$children === void 0 || (_subcategory$children = _subcategory$children.reduce(function (prev, cur) {
          return [].concat(_toConsumableArray(prev), [cur === null || cur === void 0 ? void 0 : cur.category_id]);
        }, [])) === null || _subcategory$children === void 0 ? void 0 : _subcategory$children.includes(product === null || product === void 0 ? void 0 : product.category_id));
      });
    }) : _products;
    var shortCategoryDescription = (category === null || category === void 0 || (_category$description = category.description) === null || _category$description === void 0 ? void 0 : _category$description.length) > 200 ? "".concat(category === null || category === void 0 || (_category$description2 = category.description) === null || _category$description2 === void 0 ? void 0 : _category$description2.substring(0, 200), "...") : category === null || category === void 0 ? void 0 : category.description;
    var isSubcategorySearch = isSearchMode && (category === null || category === void 0 || (_category$subcategori4 = category.subcategories) === null || _category$subcategori4 === void 0 ? void 0 : _category$subcategori4.length) > 0 && (category === null || category === void 0 || (_category$subcategori5 = category.subcategories) === null || _category$subcategori5 === void 0 ? void 0 : _category$subcategori5.some(function (subcategory) {
      return products === null || products === void 0 ? void 0 : products.some(function (product) {
        return (product === null || product === void 0 ? void 0 : product.category_id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
      });
    }));
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, products.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, {
      id: "category".concat(category === null || category === void 0 ? void 0 : category.id)
    }, /*#__PURE__*/_react.default.createElement(_styles.HeaderWrapper, {
      ref: headerRef
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "category-title"
    }, (category === null || category === void 0 ? void 0 : category.image) && /*#__PURE__*/_react.default.createElement("img", {
      src: category.image
    }), /*#__PURE__*/_react.default.createElement("h3", null, category.name), (category === null || category === void 0 || (_category$ribbon = category.ribbon) === null || _category$ribbon === void 0 ? void 0 : _category$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
      bgColor: category === null || category === void 0 || (_category$ribbon2 = category.ribbon) === null || _category$ribbon2 === void 0 ? void 0 : _category$ribbon2.color,
      isRoundRect: (category === null || category === void 0 || (_category$ribbon3 = category.ribbon) === null || _category$ribbon3 === void 0 ? void 0 : _category$ribbon3.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
      isCapsule: (category === null || category === void 0 || (_category$ribbon4 = category.ribbon) === null || _category$ribbon4 === void 0 ? void 0 : _category$ribbon4.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
    }, category === null || category === void 0 || (_category$ribbon5 = category.ribbon) === null || _category$ribbon5 === void 0 ? void 0 : _category$ribbon5.text)), (category === null || category === void 0 ? void 0 : category.description) && /*#__PURE__*/_react.default.createElement(_styles.CategoryDescription, {
      maxWidth: headerRef === null || headerRef === void 0 || (_headerRef$current2 = headerRef.current) === null || _headerRef$current2 === void 0 ? void 0 : _headerRef$current2.clientWidth
    }, /*#__PURE__*/_react.default.createElement("p", null, shortCategoryDescription), (category === null || category === void 0 || (_category$description3 = category.description) === null || _category$description3 === void 0 ? void 0 : _category$description3.length) > 200 && /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return setOpenDescription(category);
      }
    }, t('VIEW_MORE', 'View more'))), (category === null || category === void 0 || (_category$subcategori6 = category.subcategories) === null || _category$subcategori6 === void 0 ? void 0 : _category$subcategori6.length) > 0 && !isSearchMode && /*#__PURE__*/_react.default.createElement(_SubcategoriesComponent.SubcategoriesComponent, {
      category: category,
      subcategoriesSelected: subcategoriesSelected,
      onClickSubcategory: onClickSubcategory
    })), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, {
      isSubcategorySearch: isSubcategorySearch
    }, isSearchMode && (category === null || category === void 0 || (_category$subcategori7 = category.subcategories) === null || _category$subcategori7 === void 0 ? void 0 : _category$subcategori7.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, products === null || products === void 0 || (_products$filter = products.filter(function (product, i) {
      return i < 9 && (product === null || product === void 0 ? void 0 : product.category_id) === (category === null || category === void 0 ? void 0 : category.id) || (business === null || business === void 0 ? void 0 : business.front_layout) === 'food';
    })) === null || _products$filter === void 0 ? void 0 : _products$filter.map(function (product, i) {
      var _currentCart$products5;
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: i,
        isSoldOut: product.inventoried && !product.quantity,
        businessId: businessId,
        product: product,
        onProductClick: onProductClick,
        useKioskApp: useKioskApp,
        isCartOnProductsList: isCartOnProductsList,
        handleUpdateProducts: handleUpdateProducts,
        productAddedToCartLength: currentCart === null || currentCart === void 0 || (_currentCart$products5 = currentCart.products) === null || _currentCart$products5 === void 0 ? void 0 : _currentCart$products5.reduce(function (productsLength, Cproduct) {
          return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
        }, 0)
      });
    }), (business === null || business === void 0 ? void 0 : business.front_layout) !== 'food' && !(categoryState !== null && categoryState !== void 0 && categoryState.loading) && (products === null || products === void 0 ? void 0 : products.length) > 9 && /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
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
    })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, products.filter(function (_, i) {
      return i < 9 || (business === null || business === void 0 ? void 0 : business.front_layout) === 'food';
    }).map(function (product, i) {
      var _currentCart$products6;
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: i,
        isSoldOut: product.inventoried && !product.quantity,
        businessId: businessId,
        product: product,
        onProductClick: onProductClick,
        useKioskApp: useKioskApp,
        isCartOnProductsList: isCartOnProductsList,
        handleUpdateProducts: handleUpdateProducts,
        productAddedToCartLength: currentCart === null || currentCart === void 0 || (_currentCart$products6 = currentCart.products) === null || _currentCart$products6 === void 0 ? void 0 : _currentCart$products6.reduce(function (productsLength, Cproduct) {
          return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
        }, 0)
      });
    }), (business === null || business === void 0 ? void 0 : business.front_layout) !== 'food' && !(categoryState !== null && categoryState !== void 0 && categoryState.loading) && (products === null || products === void 0 ? void 0 : products.length) > 9 && /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
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
    })), categoryState.loading && i + 1 === _categories.length && _toConsumableArray(Array(categoryState.pagination.nextPageItems).keys()).map(function (i) {
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: "skeleton:".concat(i),
        isSkeleton: true
      });
    })), isSearchMode && (category === null || category === void 0 || (_category$subcategori8 = category.subcategories) === null || _category$subcategori8 === void 0 ? void 0 : _category$subcategori8.length) > 0 && (category === null || category === void 0 || (_category$subcategori9 = category.subcategories) === null || _category$subcategori9 === void 0 || (_category$subcategori9 = _category$subcategori9.filter(function (subcategory) {
      return products === null || products === void 0 ? void 0 : products.some(function (product) {
        return (product === null || product === void 0 ? void 0 : product.category_id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
      });
    })) === null || _category$subcategori9 === void 0 ? void 0 : _category$subcategori9.map(function (subcategory) {
      var _products$filter2;
      return /*#__PURE__*/_react.default.createElement(_styles.SubcategorySearchContainer, {
        key: subcategory === null || subcategory === void 0 ? void 0 : subcategory.id
      }, /*#__PURE__*/_react.default.createElement("h4", null, subcategory === null || subcategory === void 0 ? void 0 : subcategory.name), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, {
        isSubcategorySearch: isSubcategorySearch
      }, products === null || products === void 0 || (_products$filter2 = products.filter(function (product) {
        return (product === null || product === void 0 ? void 0 : product.category_id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
      })) === null || _products$filter2 === void 0 ? void 0 : _products$filter2.map(function (product, i) {
        var _currentCart$products7;
        return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
          key: i,
          isSoldOut: product.inventoried && !product.quantity,
          businessId: businessId,
          product: product,
          onProductClick: onProductClick,
          isCartOnProductsList: isCartOnProductsList,
          handleUpdateProducts: handleUpdateProducts,
          useKioskApp: useKioskApp,
          productAddedToCartLength: currentCart === null || currentCart === void 0 || (_currentCart$products7 = currentCart.products) === null || _currentCart$products7 === void 0 ? void 0 : _currentCart$products7.reduce(function (productsLength, Cproduct) {
            return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
          }, 0)
        });
      })));
    }))));
  }), (categoryState.loading || isBusinessLoading) && /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, _toConsumableArray(Array(useKioskApp ? 24 : categoryState.pagination.nextPageItems).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: "skeleton:".concat(i),
      isSkeleton: true
    });
  })), !(categoryState !== null && categoryState !== void 0 && categoryState.loading) && !isBusinessLoading && (categoryState === null || categoryState === void 0 || (_categoryState$produc9 = categoryState.products) === null || _categoryState$produc9 === void 0 ? void 0 : _categoryState$produc9.length) === 0 && !(!searchValue && !errorQuantityProducts) && /*#__PURE__*/_react.default.createElement(_styles.WrapperNotFound, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
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
  }), /*#__PURE__*/_react.default.createElement(_styles.DescriptionContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, openDescription === null || openDescription === void 0 ? void 0 : openDescription.description)))))));
};
var BusinessProductsList = exports.BusinessProductsList = function BusinessProductsList(props) {
  var businessProductsListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductsList, businessProductsListProps);
};