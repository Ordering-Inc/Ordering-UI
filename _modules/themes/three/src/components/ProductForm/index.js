"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _FiMinusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiMinusCircle"));
var _FiPlusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiPlusCircle"));
var _IosArrowDown = _interopRequireDefault(require("@meronex/icons/ios/IosArrowDown"));
var _orderingComponents = require("ordering-components");
var _utils = require("../../../../../utils");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _ProductIngredient = require("../../../../../components/ProductIngredient");
var _ProductOption = require("../ProductOption");
var _ProductOptionSubOption = require("../../../../../components/ProductOptionSubOption");
var _ProductShare = require("../../../../../components/ProductShare");
var _LoginForm = require("../LoginForm");
var _SignUpForm = require("../SignUpForm");
var _ForgotPasswordForm = require("../ForgotPasswordForm");
var _AddressList = require("../AddressList");
var _Modal = require("../../../../../components/Modal");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
var _Inputs = require("../../styles/Inputs");
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _react2 = require("swiper/react");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_swiper.default.use([_swiper.Navigation, _swiper.Thumbs]);
var ProductOptionsUI = function ProductOptionsUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _theme$defaultLanguag, _props$afterMidElemen, _props$afterMidCompon, _orderState$options, _orderState$options2, _error$, _props$afterComponent, _props$afterElements;
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
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    thumbsSwiper = _useState2[0],
    setThumbsSwiper = _useState2[1];
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
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalIsOpen = _useState4[0],
    setModalIsOpen = _useState4[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parsePrice = _useUtils2$.parsePrice;
  var _useState5 = (0, _react.useState)('login'),
    _useState6 = _slicedToArray(_useState5, 2),
    modalPageToShow = _useState6[0],
    setModalPageToShow = _useState6[1];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var _useState7 = (0, _react.useState)('active'),
    _useState8 = _slicedToArray(_useState7, 2),
    setActive = _useState8[0],
    setActiveState = _useState8[1];
  var _useState9 = (0, _react.useState)('accordion__icon rotate'),
    _useState10 = _slicedToArray(_useState9, 2),
    setRotate = _useState10[0],
    setRotateState = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    gallery = _useState12[0],
    setGallery = _useState12[1];
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
  var toggleAccordion = function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
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
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ProductFormTitle, null, /*#__PURE__*/_react.default.createElement(_styles.ProductName, null, product === null || product === void 0 ? void 0 : product.name), /*#__PURE__*/_react.default.createElement(_styles.Properties, null, /*#__PURE__*/_react.default.createElement(_styles.PriceContent, null, parsePrice(product === null || product === void 0 ? void 0 : product.price)), /*#__PURE__*/_react.default.createElement(_styles.ProductMeta, null, (product === null || product === void 0 ? void 0 : product.sku) && (product === null || product === void 0 ? void 0 : product.sku) !== '-1' && (product === null || product === void 0 ? void 0 : product.sku) !== '1' && /*#__PURE__*/_react.default.createElement(_styles.SkuContent, null, /*#__PURE__*/_react.default.createElement("span", null, t('SKU', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SKU) || 'Sku'), "\xA0"), /*#__PURE__*/_react.default.createElement("span", null, product === null || product === void 0 ? void 0 : product.sku)), (product === null || product === void 0 ? void 0 : product.sku) && (product === null || product === void 0 ? void 0 : product.sku) !== '-1' && (product === null || product === void 0 ? void 0 : product.sku) !== '1' && (product === null || product === void 0 ? void 0 : product.estimated_person) && /*#__PURE__*/_react.default.createElement("span", null, "\xA0\xB7\xA0"), (product === null || product === void 0 ? void 0 : product.estimated_person) && /*#__PURE__*/_react.default.createElement(_styles.EstimatedPersons, null, /*#__PURE__*/_react.default.createElement("span", null, product === null || product === void 0 ? void 0 : product.estimated_person, "\xA0"), /*#__PURE__*/_react.default.createElement("span", null, t('ESTIMATED_PERSONS', 'persons'))))), (product === null || product === void 0 ? void 0 : product.description) && /*#__PURE__*/_react.default.createElement(_styles.ProductDescription, null, product === null || product === void 0 ? void 0 : product.description)), /*#__PURE__*/_react.default.createElement(_styles.ProductTagsListContainer, null, product.tags.map(function (tag) {
    var _theme$images2;
    return /*#__PURE__*/_react.default.createElement(_styles.ProductTagWrapper, {
      key: tag.id
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage((tag === null || tag === void 0 ? void 0 : tag.image) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.product), 'h_40,c_limit'),
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("span", null, tag.name));
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductEdition, null, (product === null || product === void 0 ? void 0 : product.ingredients.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.IngredientHeader, {
    className: "accordion ".concat(setActive),
    onClick: function onClick() {
      return toggleAccordion();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('INGREDIENTS', 'Ingredients')), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_IosArrowDown.default, {
    className: "".concat(setRotate)
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperIngredients, {
    isProductSoldout: isSoldOut || maxProductQuantity <= 0,
    style: {
      maxHeight: !setActive && '0px'
    }
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
  }), !(product !== null && product !== void 0 && product.hide_special_instructions) && /*#__PURE__*/_react.default.createElement(_styles.ProductComment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('SPECIAL_COMMENT', 'Special comment')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    rows: 4,
    placeholder: t('SPECIAL_COMMENT', 'Special comment'),
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
    rectangle: true,
    className: "add ".concat(maxProductQuantity === 0 || Object.keys(errors).length > 0 ? 'disabled' : ''),
    color: "primary",
    onClick: function onClick() {
      return handleSaveProduct();
    },
    disabled: orderState.loading
  }, orderState.loading ? /*#__PURE__*/_react.default.createElement("span", null, t('LOADING', 'Loading')) : /*#__PURE__*/_react.default.createElement("span", null, editMode ? t('UPDATE', 'Update') : t('ADD_TO_CART', 'Add to Cart')), /*#__PURE__*/_react.default.createElement("span", null, productCart.total && parsePrice(productCart.total))), auth && !((_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.address_id) && (orderState.loading ? /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    rectangle: true,
    className: "add",
    color: "primary",
    disabled: true
  }, t('LOADING', 'Loading')) : /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    addressList: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? user.addresses : null,
    isProductForm: true
  })), (!auth || isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    rectangle: true,
    className: "add ".concat(!(productCart && !isSoldOut && maxProductQuantity > 0) ? 'soldout' : ''),
    color: "primary",
    outline: true,
    disabled: isSoldOut || maxProductQuantity <= 0,
    onClick: function onClick() {
      return setModalIsOpen(true);
    }
  }, isSoldOut || maxProductQuantity <= 0 ? t('SOLD_OUT', 'Sold out') : t('LOGIN_SIGNUP', 'Login / Sign Up'))))), modalIsOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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
    }, t('RESET_PASSWORD', 'Reset password')),
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
    }, t('LOGIN', 'Login')),
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
    }, t('LOGIN', 'Login')),
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
var ProductForm = exports.ProductForm = function ProductForm(props) {
  var productOptionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductOptionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductForm, productOptionsProps);
};