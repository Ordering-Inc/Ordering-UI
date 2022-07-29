"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var BusinessProductsListUI = function BusinessProductsListUI(props) {
  var _configs$use_parent_c, _configs$use_parent_c2, _categoryState$produc, _props$beforeElements, _props$beforeComponen, _category$subcategori2, _productsCategorySele, _category$subcategori3, _category$subcategori4, _category$subcategori5, _categoryState$produc2, _categoryState$produc3, _props$afterComponent, _props$afterElements;

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
      isSearchMode = props.isSearchMode;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var isUseParentCategory = (configs === null || configs === void 0 ? void 0 : (_configs$use_parent_c = configs.use_parent_category) === null || _configs$use_parent_c === void 0 ? void 0 : _configs$use_parent_c.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$use_parent_c2 = configs.use_parent_category) === null || _configs$use_parent_c2 === void 0 ? void 0 : _configs$use_parent_c2.value) === '1';

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
      setSubcategoriesSelected(subcategoriesSelected.filter(function (_subcategory) {
        return (_subcategory === null || _subcategory === void 0 ? void 0 : _subcategory.parent_category_id) !== (parentCategory === null || parentCategory === void 0 ? void 0 : parentCategory.id);
      }));
      return;
    }

    var categoryFounded = subcategoriesSelected.find(function (_subcategory) {
      return (subCategory === null || subCategory === void 0 ? void 0 : subCategory.id) === (_subcategory === null || _subcategory === void 0 ? void 0 : _subcategory.id);
    });

    if (categoryFounded) {
      setSubcategoriesSelected(subcategoriesSelected.filter(function (_subcategory) {
        return (subCategory === null || subCategory === void 0 ? void 0 : subCategory.id) !== (_subcategory === null || _subcategory === void 0 ? void 0 : _subcategory.id);
      }));
    } else {
      setSubcategoriesSelected([].concat(_toConsumableArray(subcategoriesSelected), [subCategory]));
    }
  };

  var SubcategoriesComponent = function SubcategoriesComponent(_ref) {
    var _category$subcategori;

    var category = _ref.category;
    var allsubcategorySelected = !(subcategoriesSelected !== null && subcategoriesSelected !== void 0 && subcategoriesSelected.some(function (subcategory) {
      return (category === null || category === void 0 ? void 0 : category.id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.parent_category_id);
    }));
    return /*#__PURE__*/_react.default.createElement(_styles.SubCategoriesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ContainerButton, {
      isSelected: allsubcategorySelected
    }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      onClick: function onClick() {
        return onClickSubcategory(null, category);
      },
      color: allsubcategorySelected ? 'primary' : 'secondary'
    }, t('ALL', 'All'), " ", allsubcategorySelected && 'X')), category === null || category === void 0 ? void 0 : (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.map(function (subcategory) {
      var isSubcategorySelected = subcategoriesSelected === null || subcategoriesSelected === void 0 ? void 0 : subcategoriesSelected.find(function (_subcategory) {
        return (_subcategory === null || _subcategory === void 0 ? void 0 : _subcategory.id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
      });
      return /*#__PURE__*/_react.default.createElement(_styles.ContainerButton, {
        key: subcategory === null || subcategory === void 0 ? void 0 : subcategory.id,
        isSelected: isSubcategorySelected
      }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        onClick: function onClick() {
          return onClickSubcategory(subcategory, category);
        },
        color: isSubcategorySelected ? 'primary' : 'secondary'
      }, subcategory === null || subcategory === void 0 ? void 0 : subcategory.name, " ", isSubcategorySelected && 'X'));
    }));
  };

  var productsCategorySelected = (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.filter(function (product) {
    return !(subcategoriesSelected !== null && subcategoriesSelected !== void 0 && subcategoriesSelected.find(function (subcategory) {
      return (subcategory === null || subcategory === void 0 ? void 0 : subcategory.parent_category_id) === (category === null || category === void 0 ? void 0 : category.id);
    })) || (subcategoriesSelected === null || subcategoriesSelected === void 0 ? void 0 : subcategoriesSelected.some(function (subcategory) {
      return subcategory.id === (product === null || product === void 0 ? void 0 : product.category_id);
    }));
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, (category === null || category === void 0 ? void 0 : category.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderWrapper, null, (category === null || category === void 0 ? void 0 : (_category$subcategori2 = category.subcategories) === null || _category$subcategori2 === void 0 ? void 0 : _category$subcategori2.length) > 0 && !isSearchMode && /*#__PURE__*/_react.default.createElement(SubcategoriesComponent, {
    category: category
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, productsCategorySelected === null || productsCategorySelected === void 0 ? void 0 : (_productsCategorySele = productsCategorySelected.filter(function (product) {
    return (product === null || product === void 0 ? void 0 : product.category_id) === (category === null || category === void 0 ? void 0 : category.id);
  })) === null || _productsCategorySele === void 0 ? void 0 : _productsCategorySele.map(function (product, i) {
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
      productAddedToCartLength: currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.reduce(function (productsLength, Cproduct) {
        return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
      }, 0)
    });
  })), isSearchMode && (category === null || category === void 0 ? void 0 : (_category$subcategori3 = category.subcategories) === null || _category$subcategori3 === void 0 ? void 0 : _category$subcategori3.length) > 0 && (category === null || category === void 0 ? void 0 : (_category$subcategori4 = category.subcategories) === null || _category$subcategori4 === void 0 ? void 0 : (_category$subcategori5 = _category$subcategori4.filter(function (subcategory) {
    return productsCategorySelected === null || productsCategorySelected === void 0 ? void 0 : productsCategorySelected.some(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
    });
  })) === null || _category$subcategori5 === void 0 ? void 0 : _category$subcategori5.map(function (subcategory) {
    var _productsCategorySele2;

    return /*#__PURE__*/_react.default.createElement(_styles.SubcategorySearchContainer, {
      key: subcategory === null || subcategory === void 0 ? void 0 : subcategory.id
    }, /*#__PURE__*/_react.default.createElement("h4", null, subcategory === null || subcategory === void 0 ? void 0 : subcategory.name), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, {
      isSubcategorySearch: true
    }, productsCategorySelected === null || productsCategorySelected === void 0 ? void 0 : (_productsCategorySele2 = productsCategorySelected.filter(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
    })) === null || _productsCategorySele2 === void 0 ? void 0 : _productsCategorySele2.map(function (product, i) {
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
        productAddedToCartLength: currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.reduce(function (productsLength, Cproduct) {
          return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
        }, 0)
      });
    })));
  }))), !(category !== null && category !== void 0 && category.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, featured && (categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$produc2 = categoryState.products) === null || _categoryState$produc2 === void 0 ? void 0 : _categoryState$produc2.find(function (product) {
    return product.featured;
  })) && /*#__PURE__*/_react.default.createElement(_styles.WrapAllCategories, {
    id: "categoryfeatured"
  }, /*#__PURE__*/_react.default.createElement("h3", null, t('FEATURED', 'Featured')), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, (_categoryState$produc3 = categoryState.products) === null || _categoryState$produc3 === void 0 ? void 0 : _categoryState$produc3.map(function (product, i) {
    var _currentCart$products3;

    return product.featured && /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: i,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      useKioskApp: useKioskApp,
      businessId: businessId,
      onProductClick: onProductClick,
      isCartOnProductsList: isCartOnProductsList,
      handleUpdateProducts: handleUpdateProducts,
      productAddedToCartLength: currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.reduce(function (productsLength, Cproduct) {
        return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
      }, 0)
    });
  })))), !(category !== null && category !== void 0 && category.id) && categories.filter(function (category) {
    return (category === null || category === void 0 ? void 0 : category.id) !== null;
  }).map(function (category, i, _categories) {
    var _categoryState$produc4, _categoryState$produc5, _categoryState$produc6, _categoryState$produc7, _category$description, _category$description2, _category$subcategori6, _category$subcategori7, _category$ribbon, _category$ribbon2, _category$ribbon3, _category$ribbon4, _category$ribbon5, _headerRef$current, _category$description3, _category$subcategori8, _category$subcategori9, _products$filter, _category$subcategori10, _category$subcategori11, _category$subcategori12;

    var _products = !isUseParentCategory ? (_categoryState$produc4 = categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$produc5 = categoryState.products) === null || _categoryState$produc5 === void 0 ? void 0 : _categoryState$produc5.filter(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === (category === null || category === void 0 ? void 0 : category.id);
    })) !== null && _categoryState$produc4 !== void 0 ? _categoryState$produc4 : [] : (_categoryState$produc6 = categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$produc7 = categoryState.products) === null || _categoryState$produc7 === void 0 ? void 0 : _categoryState$produc7.filter(function (product) {
      var _category$children;

      return category === null || category === void 0 ? void 0 : (_category$children = category.children) === null || _category$children === void 0 ? void 0 : _category$children.some(function (cat) {
        return cat.category_id === (product === null || product === void 0 ? void 0 : product.category_id);
      });
    })) !== null && _categoryState$produc6 !== void 0 ? _categoryState$produc6 : [];

    var products = (subcategoriesSelected === null || subcategoriesSelected === void 0 ? void 0 : subcategoriesSelected.length) > 0 ? _products === null || _products === void 0 ? void 0 : _products.filter(function (product) {
      return !subcategoriesSelected.find(function (subcategory) {
        return (subcategory === null || subcategory === void 0 ? void 0 : subcategory.parent_category_id) === (category === null || category === void 0 ? void 0 : category.id);
      }) || (subcategoriesSelected === null || subcategoriesSelected === void 0 ? void 0 : subcategoriesSelected.some(function (subcategory) {
        return subcategory.id === (product === null || product === void 0 ? void 0 : product.category_id);
      }));
    }) : _products;
    var shortCategoryDescription = (category === null || category === void 0 ? void 0 : (_category$description = category.description) === null || _category$description === void 0 ? void 0 : _category$description.length) > 200 ? "".concat(category === null || category === void 0 ? void 0 : (_category$description2 = category.description) === null || _category$description2 === void 0 ? void 0 : _category$description2.substring(0, 200), "...") : category === null || category === void 0 ? void 0 : category.description;
    var isSubcategorySearch = isSearchMode && (category === null || category === void 0 ? void 0 : (_category$subcategori6 = category.subcategories) === null || _category$subcategori6 === void 0 ? void 0 : _category$subcategori6.length) > 0 && (category === null || category === void 0 ? void 0 : (_category$subcategori7 = category.subcategories) === null || _category$subcategori7 === void 0 ? void 0 : _category$subcategori7.some(function (subcategory) {
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
    }), /*#__PURE__*/_react.default.createElement("h3", null, category.name), (category === null || category === void 0 ? void 0 : (_category$ribbon = category.ribbon) === null || _category$ribbon === void 0 ? void 0 : _category$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
      bgColor: category === null || category === void 0 ? void 0 : (_category$ribbon2 = category.ribbon) === null || _category$ribbon2 === void 0 ? void 0 : _category$ribbon2.color,
      isRoundRect: (category === null || category === void 0 ? void 0 : (_category$ribbon3 = category.ribbon) === null || _category$ribbon3 === void 0 ? void 0 : _category$ribbon3.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
      isCapsule: (category === null || category === void 0 ? void 0 : (_category$ribbon4 = category.ribbon) === null || _category$ribbon4 === void 0 ? void 0 : _category$ribbon4.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
    }, category === null || category === void 0 ? void 0 : (_category$ribbon5 = category.ribbon) === null || _category$ribbon5 === void 0 ? void 0 : _category$ribbon5.text)), (category === null || category === void 0 ? void 0 : category.description) && /*#__PURE__*/_react.default.createElement(_styles.CategoryDescription, {
      maxWidth: headerRef === null || headerRef === void 0 ? void 0 : (_headerRef$current = headerRef.current) === null || _headerRef$current === void 0 ? void 0 : _headerRef$current.clientWidth
    }, /*#__PURE__*/_react.default.createElement("p", null, shortCategoryDescription), (category === null || category === void 0 ? void 0 : (_category$description3 = category.description) === null || _category$description3 === void 0 ? void 0 : _category$description3.length) > 200 && /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return setOpenDescription(category);
      }
    }, t('VIEW_MORE', 'View more'))), (category === null || category === void 0 ? void 0 : (_category$subcategori8 = category.subcategories) === null || _category$subcategori8 === void 0 ? void 0 : _category$subcategori8.length) > 0 && !isSearchMode && /*#__PURE__*/_react.default.createElement(SubcategoriesComponent, {
      category: category
    })), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, {
      isSubcategorySearch: isSubcategorySearch
    }, isSearchMode && (category === null || category === void 0 ? void 0 : (_category$subcategori9 = category.subcategories) === null || _category$subcategori9 === void 0 ? void 0 : _category$subcategori9.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, products === null || products === void 0 ? void 0 : (_products$filter = products.filter(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === (category === null || category === void 0 ? void 0 : category.id);
    })) === null || _products$filter === void 0 ? void 0 : _products$filter.map(function (product, i) {
      var _currentCart$products4;

      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: i,
        isSoldOut: product.inventoried && !product.quantity,
        businessId: businessId,
        product: product,
        onProductClick: onProductClick,
        useKioskApp: useKioskApp,
        isCartOnProductsList: isCartOnProductsList,
        handleUpdateProducts: handleUpdateProducts,
        productAddedToCartLength: currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products4 = currentCart.products) === null || _currentCart$products4 === void 0 ? void 0 : _currentCart$products4.reduce(function (productsLength, Cproduct) {
          return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
        }, 0)
      });
    })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, products.map(function (product, i) {
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
        productAddedToCartLength: currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products5 = currentCart.products) === null || _currentCart$products5 === void 0 ? void 0 : _currentCart$products5.reduce(function (productsLength, Cproduct) {
          return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === (product === null || product === void 0 ? void 0 : product.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
        }, 0)
      });
    })), categoryState.loading && i + 1 === _categories.length && _toConsumableArray(Array(categoryState.pagination.nextPageItems).keys()).map(function (i) {
      return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
        key: "skeleton:".concat(i),
        isSkeleton: true
      });
    })), isSearchMode && (category === null || category === void 0 ? void 0 : (_category$subcategori10 = category.subcategories) === null || _category$subcategori10 === void 0 ? void 0 : _category$subcategori10.length) > 0 && (category === null || category === void 0 ? void 0 : (_category$subcategori11 = category.subcategories) === null || _category$subcategori11 === void 0 ? void 0 : (_category$subcategori12 = _category$subcategori11.filter(function (subcategory) {
      return products === null || products === void 0 ? void 0 : products.some(function (product) {
        return (product === null || product === void 0 ? void 0 : product.category_id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
      });
    })) === null || _category$subcategori12 === void 0 ? void 0 : _category$subcategori12.map(function (subcategory) {
      var _products$filter2;

      return /*#__PURE__*/_react.default.createElement(_styles.SubcategorySearchContainer, {
        key: subcategory === null || subcategory === void 0 ? void 0 : subcategory.id
      }, /*#__PURE__*/_react.default.createElement("h4", null, subcategory === null || subcategory === void 0 ? void 0 : subcategory.name), /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, {
        isSubcategorySearch: isSubcategorySearch
      }, products === null || products === void 0 ? void 0 : (_products$filter2 = products.filter(function (product) {
        return (product === null || product === void 0 ? void 0 : product.category_id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
      })) === null || _products$filter2 === void 0 ? void 0 : _products$filter2.map(function (product, i) {
        var _currentCart$products6;

        return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
          key: i,
          isSoldOut: product.inventoried && !product.quantity,
          businessId: businessId,
          product: product,
          onProductClick: onProductClick,
          isCartOnProductsList: isCartOnProductsList,
          handleUpdateProducts: handleUpdateProducts,
          useKioskApp: useKioskApp,
          productAddedToCartLength: currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products6 = currentCart.products) === null || _currentCart$products6 === void 0 ? void 0 : _currentCart$products6.reduce(function (productsLength, Cproduct) {
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
  })), !categoryState.loading && !isBusinessLoading && categoryState.products.length === 0 && !(searchValue && errorQuantityProducts || !searchValue && !errorQuantityProducts) && /*#__PURE__*/_react.default.createElement(_styles.WrapperNotFound, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: !searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.'),
    btnTitle: !searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters'),
    onClickButton: function onClickButton() {
      return !searchValue ? handleSearchRedirect() : handleClearSearch('');
    }
  })), errors && errors.length > 0 && errors.map(function (e, i) {
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
  }), /*#__PURE__*/_react.default.createElement(_styles.DescriptionContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, openDescription === null || openDescription === void 0 ? void 0 : openDescription.description)))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
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