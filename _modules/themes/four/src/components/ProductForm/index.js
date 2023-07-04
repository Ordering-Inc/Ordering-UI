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
var _FiZoomIn = _interopRequireDefault(require("@meronex/icons/fi/FiZoomIn"));
var _orderingComponents = require("ordering-components");
var _utils = require("../../../../../utils");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _ProductIngredient = require("../../../../../components/ProductIngredient");
var _ProductOption = require("../../../../../components/ProductOption");
var _ProductOptionSubOption = require("../../../../../components/ProductOptionSubOption");
var _ProductShare = require("../../../../../components/ProductShare");
var _LoginForm = require("../LoginForm");
var _SignUpForm = require("../SignUpForm");
var _ForgotPasswordForm = require("../ForgotPasswordForm");
var _AddressList = require("../../../../../components/AddressList");
var _Modal = require("../../../../../components/Modal");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
var _Inputs = require("../../styles/Inputs");
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _react2 = require("swiper/react");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_swiper.default.use([_swiper.Navigation, _swiper.Thumbs]);
var ProductOptionsUI = function ProductOptionsUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _props$afterMidElemen, _props$afterMidCompon, _orderState$options, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _orderState$options2, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _error$, _props$afterComponent, _props$afterElements;
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
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    thumbsSwiper = _useState6[0],
    setThumbsSwiper = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    gallery = _useState8[0],
    setGallery = _useState8[1];
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
      token: user === null || user === void 0 || (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
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
  (0, _react.useEffect)(function () {
    var _theme$images, _product$gallery;
    var imageList = [];
    imageList.push((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product));
    if (product !== null && product !== void 0 && product.gallery && (product === null || product === void 0 || (_product$gallery = product.gallery) === null || _product$gallery === void 0 ? void 0 : _product$gallery.length) > 0) {
      var _iterator = _createForOfIteratorHelper(product === null || product === void 0 ? void 0 : product.gallery),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var galleryItem = _step.value;
          imageList.push(galleryItem === null || galleryItem === void 0 ? void 0 : galleryItem.file);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setGallery(imageList);
  }, [product]);
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
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 200
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
  }), !loading && !error && product && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    spaceBetween: 10,
    navigation: true,
    thumbs: {
      swiper: thumbsSwiper
    },
    className: "mySwiper2"
  }, gallery.map(function (img, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: img,
      alt: ""
    }));
  })), /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    onSwiper: setThumbsSwiper,
    spaceBetween: 20,
    slidesPerView: 5,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      300: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      400: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      550: {
        slidesPerView: 6,
        spaceBetween: 20
      },
      769: {
        slidesPerView: 6,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 7,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      1600: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
    className: "product-thumb"
  }, gallery.map(function (img, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: img,
      alt: ""
    }));
  })), (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/_react.default.createElement(_styles.Zoomlink, {
    target: "_blank",
    href: product === null || product === void 0 ? void 0 : product.images
  }, /*#__PURE__*/_react.default.createElement(_FiZoomIn.default, null))), /*#__PURE__*/_react.default.createElement(_styles.ProductInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ProductFormTitle, null, /*#__PURE__*/_react.default.createElement(_styles.ProductName, null, product === null || product === void 0 ? void 0 : product.name), /*#__PURE__*/_react.default.createElement(_styles.Properties, null, /*#__PURE__*/_react.default.createElement(_styles.PriceContent, null, parsePrice(product === null || product === void 0 ? void 0 : product.price)), /*#__PURE__*/_react.default.createElement(_styles.ProductMeta, null, (product === null || product === void 0 ? void 0 : product.sku) && (product === null || product === void 0 ? void 0 : product.sku) !== '-1' && (product === null || product === void 0 ? void 0 : product.sku) !== '1' && /*#__PURE__*/_react.default.createElement(_styles.SkuContent, null, /*#__PURE__*/_react.default.createElement("span", null, t('SKU', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SKU) || 'Sku'), "\xA0"), /*#__PURE__*/_react.default.createElement("span", null, product === null || product === void 0 ? void 0 : product.sku)), (product === null || product === void 0 ? void 0 : product.sku) && (product === null || product === void 0 ? void 0 : product.sku) !== '-1' && (product === null || product === void 0 ? void 0 : product.sku) !== '1' && (product === null || product === void 0 ? void 0 : product.estimated_person) && /*#__PURE__*/_react.default.createElement("span", null, "\xA0\xB7\xA0"), (product === null || product === void 0 ? void 0 : product.estimated_person) && /*#__PURE__*/_react.default.createElement(_styles.EstimatedPersons, null, /*#__PURE__*/_react.default.createElement("span", null, product === null || product === void 0 ? void 0 : product.estimated_person, "\xA0"), /*#__PURE__*/_react.default.createElement("span", null, t('ESTIMATED_PERSONS', 'persons'))))), (product === null || product === void 0 ? void 0 : product.description) && /*#__PURE__*/_react.default.createElement(_styles.ProductDescription, null, product === null || product === void 0 ? void 0 : product.description)), /*#__PURE__*/_react.default.createElement(_styles.ProductTagsListContainer, null, product.tags.map(function (tag) {
    var _theme$images2;
    return /*#__PURE__*/_react.default.createElement(_styles.ProductTagWrapper, {
      key: tag.id
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage((tag === null || tag === void 0 ? void 0 : tag.image) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.product), 'h_40,c_limit'),
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("span", null, tag.name));
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductEdition, null, (product === null || product === void 0 ? void 0 : product.ingredients.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('INGREDIENTS', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.INGREDIENTS) || 'Ingredients')), /*#__PURE__*/_react.default.createElement(_styles.WrapperIngredients, {
    isProductSoldout: isSoldOut || maxProductQuantity <= 0
  }, product === null || product === void 0 ? void 0 : product.ingredients.map(function (ingredient) {
    return /*#__PURE__*/_react.default.createElement(_ProductIngredient.ProductIngredient, {
      key: ingredient.id,
      ingredient: ingredient,
      state: productCart.ingredients["id:".concat(ingredient.id)],
      onChange: handleChangeIngredientState
    });
  })), product === null || product === void 0 ? void 0 : product.extras.map(function (extra) {
    return extra.options.map(function (option) {
      var currentState = productCart.options["id:".concat(option.id)] || {};
      return /*#__PURE__*/_react.default.createElement("div", {
        key: option.id
      }, showOption(option) && /*#__PURE__*/_react.default.createElement(_ProductOption.ProductOption, {
        option: option,
        currentState: currentState,
        error: errors["id:".concat(option.id)]
      }, /*#__PURE__*/_react.default.createElement(_styles.WrapperSubOption, {
        className: isError(option.id)
      }, option.suboptions.filter(function (suboptions) {
        return suboptions.enabled;
      }).map(function (suboption) {
        var _productCart$options, _productCart$options2;
        var currentState = ((_productCart$options = productCart.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _productCart$options === void 0 ? void 0 : _productCart$options.suboptions["id:".concat(suboption === null || suboption === void 0 ? void 0 : suboption.id)]) || {};
        var balance = ((_productCart$options2 = productCart.options["id:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _productCart$options2 === void 0 ? void 0 : _productCart$options2.balance) || 0;
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
  }), !(product !== null && product !== void 0 && product.hide_special_instructions) && /*#__PURE__*/_react.default.createElement(_styles.ProductComment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('SPECIAL_COMMENT', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.SPECIAL_COMMENT) || 'Special comment')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    rows: 4,
    placeholder: t('SPECIAL_COMMENT', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.SPECIAL_COMMENT) || 'Special comment'),
    defaultValue: productCart.comment,
    onChange: handleChangeCommentState,
    disabled: !(productCart && !isSoldOut && maxProductQuantity)
  })), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, productCart && !isSoldOut && maxProductQuantity > 0 && /*#__PURE__*/_react.default.createElement("div", {
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
  }, orderState.loading ? /*#__PURE__*/_react.default.createElement("span", null, t('LOADING', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.LOADING) || 'Loading')) : /*#__PURE__*/_react.default.createElement("span", null, editMode ? t('UPDATE', (theme === null || theme === void 0 || (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.UPDATE) || 'Update') : t('ADD_TO_CART', (theme === null || theme === void 0 || (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.ADD_TO_CART) || 'Add to Cart')), /*#__PURE__*/_react.default.createElement("span", null, productCart.total && parsePrice(productCart.total))), auth && !((_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.address_id) && (orderState.loading ? /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add",
    color: "primary",
    disabled: true
  }, t('LOADING', (theme === null || theme === void 0 || (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.LOADING) || 'Loading')) : /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    addressList: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? user.addresses : null,
    isProductForm: true
  })), (!auth || isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add ".concat(!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''),
    color: "primary",
    outline: true,
    disabled: isSoldOut || maxProductQuantity <= 0,
    onClick: function onClick() {
      return setModalIsOpen(true);
    }
  }, isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', (theme === null || theme === void 0 || (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.SOLD_OUT) || 'Sold out') : t('LOGIN_SIGNUP', (theme === null || theme === void 0 || (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.LOGIN_SIGNUP) || 'Login / Sign Up'))))), modalIsOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return closeModal();
    },
    width: "70%",
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
    }, t('CREATE_ACCOUNT', 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', (theme === null || theme === void 0 || (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.RESET_PASSWORD) || 'Reset password')),
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
    }, t('LOGIN', (theme === null || theme === void 0 || (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.LOGIN) || 'Login')),
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
    }, t('LOGIN', (theme === null || theme === void 0 || (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.LOGIN) || 'Login')),
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
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductForm, productOptionsProps);
};
exports.ProductForm = ProductForm;