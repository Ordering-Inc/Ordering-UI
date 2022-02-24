"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _FiMinusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiMinusCircle"));

var _FiPlusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiPlusCircle"));

var _orderingComponents = require("ordering-components");

var _productForm = require("./productForm");

var _utils = require("../../../../../utils");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _ProductIngredient = require("../../../../../components/ProductIngredient");

var _ProductOption = require("../../../../../components/ProductOption");

var _ProductOptionSubOption = require("../../../../../components/ProductOptionSubOption");

var _LoginForm = require("../LoginForm");

var _SignUpForm = require("../SignUpForm");

var _ForgotPasswordForm = require("../ForgotPasswordForm");

var _AddressList = require("../../../../../components/AddressList");

var _Modal = require("../../../../../components/Modal");

var _ProductShare = require("../ProductShare");

var _Buttons = require("../../styles/Buttons");

var _Tabs = require("../../styles/Tabs");

var _styles = require("./styles");

var _styledComponents = require("styled-components");

var _Inputs = require("../../styles/Inputs");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ProductOptionsUI = function ProductOptionsUI(props) {
  var _theme$defaultLanguag, _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _theme$images, _theme$images$dummies, _theme$defaultLanguag3, _orderState$options, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _orderState$options2, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _theme$defaultLanguag16, _error$, _props$afterComponent, _props$afterElements;

  var businessSlug = props.businessSlug,
      editMode = props.editMode,
      isSoldOut = props.isSoldOut,
      productObject = props.productObject,
      productCart = props.productCart,
      increment = props.increment,
      decrement = props.decrement,
      showOption = props.showOption,
      maxProductQuantity = props.maxProductQuantity,
      errors = props.errors,
      handleSave = props.handleSave,
      handleChangeIngredientState = props.handleChangeIngredientState,
      handleChangeSuboptionState = props.handleChangeSuboptionState,
      handleChangeCommentState = props.handleChangeCommentState;
  var product = productObject.product,
      loading = productObject.loading,
      error = productObject.error;
  var windowSize = (0, _useWindowSize.useWindowSize)();

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 2),
      _useSession2$ = _useSession2[0],
      auth = _useSession2$.auth,
      user = _useSession2$.user,
      login = _useSession2[1].login;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalIsOpen = _useState2[0],
      setModalIsOpen = _useState2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      optimizeImage = _useUtils2$.optimizeImage,
      parsePrice = _useUtils2$.parsePrice;

  var theme = (0, _styledComponents.useTheme)();

  var _useState3 = (0, _react.useState)('login'),
      _useState4 = _slicedToArray(_useState3, 2),
      modalPageToShow = _useState4[0],
      setModalPageToShow = _useState4[1];

  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));

  var closeModal = function closeModal() {
    setModalIsOpen(false);
    setModalPageToShow('login');
  };

  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) {
      closeModal();
    }
  };

  var handleSaveProduct = function handleSaveProduct() {
    var isErrors = Object.values(errors).length > 0;

    if (!isErrors) {
      handleSave && handleSave();
      return;
    }

    var myElement = document.getElementsByClassName('error')[0];
    var productContainer = document.getElementsByClassName('product-container')[0];

    if (!myElement || !productContainer) {
      return;
    }

    var topPos = myElement.offsetTop - productContainer.offsetTop;

    if (windowSize.width <= 768) {
      var productImage = document.getElementById('product_image');
      topPos = topPos + (myElement.offsetTop < productImage.clientHeight ? productImage.clientHeight : 0);
    }

    (0, _utils.scrollTo)(productContainer, topPos, 1250);
  };

  var handleCustomModalClick = function handleCustomModalClick(e, _ref) {
    var page = _ref.page;
    e.preventDefault();
    setModalPageToShow(page);
  };

  var handleSuccessSignup = function handleSuccessSignup(user) {
    var _user$session;

    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
    closeModal();
  };

  var isError = function isError(id) {
    var classnames = '';

    if (errors["id:".concat(id)]) {
      classnames = 'error';
    }

    if (isSoldOut || maxProductQuantity <= 0) {
      classnames += ' soldout';
    }

    return classnames;
  };

  var _useState5 = (0, _react.useState)({
    id: null,
    name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ALL) || 'All') // initial selected category all

  }),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedCategory = _useState6[0],
      setSelectedCategory = _useState6[1];

  var handlerClickCategory = function handlerClickCategory(category) {
    setSelectedCategory(category);
  };

  var ProductOptionCategory = function ProductOptionCategory() {
    var _theme$defaultLanguag2;

    var __options = product.extras[0].options.filter(function (op) {
      return showOption(op);
    });

    var _options = __options.sort(function (a, b) {
      return a.rank - b.rank;
    });

    var optionCategories = [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.ALL) || 'All')
    }].concat(_toConsumableArray(_options));
    return optionCategories && optionCategories.length && optionCategories.map(function (category) {
      return /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
        key: category.name,
        className: "".concat(!category.id ? 'category-all' : 'category'),
        active: (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id) === category.id,
        onClick: function onClick() {
          return handlerClickCategory(category);
        },
        borderBottom: true
      }, /*#__PURE__*/_react.default.createElement("span", null, category.name));
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
  }), /*#__PURE__*/_react.default.createElement(_styles.ProductContainer, {
    className: "product-container"
  }, loading && !error && /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 90
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 200
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 50
  })), product && !loading && !error && /*#__PURE__*/_react.default.createElement(_ProductShare.ProductShare, {
    slug: businessSlug,
    categoryId: product === null || product === void 0 ? void 0 : product.category_id,
    productId: product === null || product === void 0 ? void 0 : product.id
  }), (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), !loading && !error && product && /*#__PURE__*/_react.default.createElement(_styles.ProductInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.ProductImage, {
    id: "product_image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.product),
    alt: "product",
    loading: "lazy",
    onError: function onError(e) {
      var _theme$images2, _theme$images2$dummie;

      e.target.onerror = null;
      e.target.src = (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.product;
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductMeta, null, /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name), /*#__PURE__*/_react.default.createElement("h5", null, '$', ' ', product === null || product === void 0 ? void 0 : product.price), (product === null || product === void 0 ? void 0 : product.description) && /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description), (product === null || product === void 0 ? void 0 : product.sku) && (product === null || product === void 0 ? void 0 : product.sku) !== '-1' && (product === null || product === void 0 ? void 0 : product.sku) !== '1' && /*#__PURE__*/_react.default.createElement(_styles.SkuContent, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SKU', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.SKU) || 'Sku')), /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.sku))), /*#__PURE__*/_react.default.createElement(_styles.ProductTagsListContainer, null, product.tags.map(function (tag) {
    var _theme$images3, _theme$images3$dummie;

    return /*#__PURE__*/_react.default.createElement(_styles.ProductTagWrapper, {
      key: tag.id
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage((tag === null || tag === void 0 ? void 0 : tag.image) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.product), 'h_40,c_limit'),
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("span", null, tag.name));
  })), (product === null || product === void 0 ? void 0 : product.extras.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.Hr, {
    height: 8,
    color: "#FAFAFA"
  }), (product === null || product === void 0 ? void 0 : product.extras.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProductEdition, {
    className: "product-edtion"
  }, /*#__PURE__*/_react.default.createElement(_styles.CategoriesContainer, {
    className: "product-category-container"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary",
    borderBottom: true
  }, /*#__PURE__*/_react.default.createElement(ProductOptionCategory, null))), selectedCategory !== null && selectedCategory !== void 0 && selectedCategory.id ? /*#__PURE__*/_react.default.createElement("div", {
    className: "selecte-options"
  }, /*#__PURE__*/_react.default.createElement(_ProductOption.ProductOption, {
    option: selectedCategory,
    error: errors["id:".concat(selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id)]
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperSubOption, {
    className: isError(selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id)
  }, selectedCategory.suboptions.map(function (suboption) {
    var _productCart$options$, _productCart$options$2;

    var currentState = ((_productCart$options$ = productCart.options["id:".concat(selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id)]) === null || _productCart$options$ === void 0 ? void 0 : _productCart$options$.suboptions["id:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)]) || {};
    var balance = ((_productCart$options$2 = productCart.options["id:".concat(selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id)]) === null || _productCart$options$2 === void 0 ? void 0 : _productCart$options$2.balance) || 0;
    return suboption !== null && suboption !== void 0 && suboption.enabled ? /*#__PURE__*/_react.default.createElement(_ProductOptionSubOption.ProductOptionSubOption, {
      key: suboption === null || suboption === void 0 ? void 0 : suboption.id,
      onChange: handleChangeSuboptionState,
      balance: balance,
      option: selectedCategory,
      suboption: suboption,
      state: currentState
    }) : null;
  })))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "all-options"
  }, product === null || product === void 0 ? void 0 : product.extras.map(function (extra) {
    return extra.options.map(function (option) {
      var currentState = productCart.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)] || {};
      return /*#__PURE__*/_react.default.createElement("div", {
        key: option === null || option === void 0 ? void 0 : option.id
      }, showOption(option) && /*#__PURE__*/_react.default.createElement(_ProductOption.ProductOption, {
        option: option,
        currentState: currentState,
        error: errors["id:".concat(option === null || option === void 0 ? void 0 : option.id)]
      }, /*#__PURE__*/_react.default.createElement(_styles.WrapperSubOption, {
        className: isError(option === null || option === void 0 ? void 0 : option.id)
      }, option.suboptions.filter(function (suboptions) {
        return suboptions.enabled;
      }).sort(function (a, b) {
        return a.rank - b.rank;
      }).map(function (suboption) {
        var _productCart$options$3, _productCart$options$4;

        var currentState = ((_productCart$options$3 = productCart.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _productCart$options$3 === void 0 ? void 0 : _productCart$options$3.suboptions["id:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)]) || {};
        var balance = ((_productCart$options$4 = productCart.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _productCart$options$4 === void 0 ? void 0 : _productCart$options$4.balance) || 0;
        return /*#__PURE__*/_react.default.createElement(_ProductOptionSubOption.ProductOptionSubOption, {
          key: suboption === null || suboption === void 0 ? void 0 : suboption.id,
          onChange: handleChangeSuboptionState,
          balance: balance,
          option: option,
          suboption: suboption,
          state: currentState
        });
      }))));
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, /*#__PURE__*/_react.default.createElement(_styles.ActionItem, null, productCart && /*#__PURE__*/_react.default.createElement("span", {
    className: "total-price"
  }, productCart.total && parsePrice(productCart.total))), /*#__PURE__*/_react.default.createElement(_styles.ActionItem, null, productCart && !isSoldOut && maxProductQuantity > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "incdec-control"
  }, /*#__PURE__*/_react.default.createElement(_FiMinusCircle.default, {
    onClick: decrement,
    className: "".concat(productCart.quantity === 1 || isSoldOut ? 'disabled' : '')
  }), /*#__PURE__*/_react.default.createElement("span", null, productCart.quantity), /*#__PURE__*/_react.default.createElement(_FiPlusCircle.default, {
    onClick: increment,
    className: "".concat(maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity || isSoldOut ? 'disabled' : '')
  })), productCart && !isSoldOut && maxProductQuantity > 0 && auth && ((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address_id) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add ".concat(maxProductQuantity === 0 || Object.keys(errors).length > 0 ? 'disabled' : ''),
    color: "primary",
    onClick: function onClick() {
      return handleSaveProduct();
    },
    disabled: orderState.loading
  }, orderState.loading ? /*#__PURE__*/_react.default.createElement("span", null, t('LOADING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.LOADING) || 'Loading')) : /*#__PURE__*/_react.default.createElement("span", null, editMode ? t('UPDATE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.UPDATE) || 'Update') : t('ADD_TO_CART', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.ADD_TO_CART) || 'Add to Cart'))), auth && !((_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.address_id) && (orderState.loading ? /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add",
    color: "primary",
    disabled: true
  }, t('LOADING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.LOADING) || 'Loading')) : /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    addressList: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? user.addresses : null,
    isProductForm: true
  })), (!auth || isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add ".concat(!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''),
    color: "primary",
    disabled: isSoldOut || maxProductQuantity <= 0,
    onClick: function onClick() {
      return setModalIsOpen(true);
    }
  }, isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.SOLD_OUT) || 'Sold out') : t('LOGIN_SIGNUP', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.LOGIN_SIGNUP) || 'Login / Sign Up')))), (product === null || product === void 0 ? void 0 : product.ingredients.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperIngredients, {
    isProductSoldout: isSoldOut || maxProductQuantity <= 0
  }, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('INGREDIENTS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.INGREDIENTS) || 'Ingredients')), product === null || product === void 0 ? void 0 : product.ingredients.map(function (ingredient) {
    return /*#__PURE__*/_react.default.createElement(_ProductIngredient.ProductIngredient, {
      key: ingredient === null || ingredient === void 0 ? void 0 : ingredient.id,
      ingredient: ingredient,
      state: productCart.ingredients["id:".concat(ingredient === null || ingredient === void 0 ? void 0 : ingredient.id)],
      onChange: handleChangeIngredientState
    });
  })), !(product !== null && product !== void 0 && product.hide_special_instructions) && /*#__PURE__*/_react.default.createElement(_styles.ProductComment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('SPECIAL_COMMENT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.SPECIAL_COMMENT) || 'Special comment')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    rows: 4,
    placeholder: t('SPECIAL_COMMENT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.SPECIAL_COMMENT) || 'Special comment'),
    defaultValue: productCart.comment,
    onChange: handleChangeCommentState,
    disabled: !(productCart && !isSoldOut && maxProductQuantity)
  }))), modalIsOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return closeModal();
    },
    width: "50%",
    padding: "0"
  }, modalPageToShow === 'login' && /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    handleSuccessLogin: handleSuccessLogin,
    elementLinkToSignup: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'signup'
        });
      },
      href: "#"
    }, t('CREATE_ACCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.CREATE_ACCOUNT) || 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.RESET_PASSWORD) || 'Reset password')),
    useLoginByCellphone: true,
    isPopup: true
  }), modalPageToShow === 'signup' && /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.LOGIN) || 'Login')),
    useLoginByCellphone: true,
    useChekoutFileds: true,
    handleSuccessSignup: handleSuccessSignup,
    isPopup: true
  }), modalPageToShow === 'forgotpassword' && /*#__PURE__*/_react.default.createElement(_ForgotPasswordForm.ForgotPasswordForm, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.LOGIN) || 'Login')),
    isPopup: true
  })), error && error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.message) || error[0]
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

var ProductForm = function ProductForm(props) {
  var productOptionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductOptionsUI
  });

  return /*#__PURE__*/_react.default.createElement(_productForm.ProductForm, productOptionsProps);
};

exports.ProductForm = ProductForm;