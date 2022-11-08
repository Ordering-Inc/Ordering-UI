"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleProductCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _utils = require("../../../../../../../utils");
var _useIntersectionObserver = require("../../../../../../../hooks/useIntersectionObserver");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _Modal = require("../../../Modal");
var _LoginForm = require("../../../LoginForm");
var _SignUpForm = require("../../../SignUpForm");
var _ForgotPasswordForm = require("../../../ForgotPasswordForm");
var _Confirm = require("../../../Confirm");
var _MdAddCircleOutline = _interopRequireDefault(require("@meronex/icons/ios/MdAddCircleOutline"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var SingleProductCardUI = function SingleProductCardUI(props) {
  var _theme$business_view$, _theme$business_view, _theme$business_view$2, _theme$business_view$3, _theme$business_view$4, _theme$business_view$5, _theme$images, _theme$images$dummies, _theme$images2, _theme$images2$dummie, _product$ribbon, _product$ribbon2, _product$ribbon3, _product$ribbon4, _product$ribbon5, _theme$images3, _theme$images3$dummie, _product$ribbon6, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4;
  var product = props.product,
    isSoldOut = props.isSoldOut,
    isSkeleton = props.isSkeleton,
    onProductClick = props.onProductClick,
    isCartOnProductsList = props.isCartOnProductsList,
    useCustomFunctionality = props.useCustomFunctionality,
    onCustomClick = props.onCustomClick,
    customText = props.customText,
    customStyle = props.customStyle,
    useKioskApp = props.useKioskApp,
    productAddedToCartLength = props.productAddedToCartLength,
    handleFavoriteProduct = props.handleFavoriteProduct,
    isFavorite = props.isFavorite,
    isPreviously = props.isPreviously;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useIntersectionObser = (0, _useIntersectionObserver.useIntersectionObserver)(),
    _useIntersectionObser2 = _slicedToArray(_useIntersectionObser, 2),
    $element = _useIntersectionObser2[0],
    isObserved = _useIntersectionObser2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    stateConfig = _useConfig2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    optimizeImage = _useUtils2$.optimizeImage,
    parseDate = _useUtils2$.parseDate;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    auth = _useSession2[0].auth,
    login = _useSession2[1].login;
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var theme = (0, _styledComponents.useTheme)();
  var favoriteRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isModalOpen = _useState2[0],
    setIsModalOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    modalPageToShow = _useState4[0],
    setModalPageToShow = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var editMode = typeof (product === null || product === void 0 ? void 0 : product.code) !== 'undefined';
  var isObservedValidation = isObserved || useKioskApp;
  var removeToBalance = editMode ? product === null || product === void 0 ? void 0 : product.quantity : 0;
  var cartProducts = Object.values(orderState.carts).reduce(function (products, _cart) {
    return [].concat(_toConsumableArray(products), _toConsumableArray(_cart === null || _cart === void 0 ? void 0 : _cart.products));
  }, []);
  var productBalance = cartProducts.reduce(function (sum, _product) {
    return sum + (_product.id === (product === null || product === void 0 ? void 0 : product.id) ? _product.quantity : 0);
  }, 0);
  var totalBalance = (productBalance || 0) - removeToBalance;
  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;
  var hideAddButton = (_theme$business_view$ = theme === null || theme === void 0 ? void 0 : (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 ? void 0 : (_theme$business_view$2 = _theme$business_view.components) === null || _theme$business_view$2 === void 0 ? void 0 : (_theme$business_view$3 = _theme$business_view$2.products) === null || _theme$business_view$3 === void 0 ? void 0 : (_theme$business_view$4 = _theme$business_view$3.components) === null || _theme$business_view$4 === void 0 ? void 0 : (_theme$business_view$5 = _theme$business_view$4.add_to_cart_button) === null || _theme$business_view$5 === void 0 ? void 0 : _theme$business_view$5.hidden) !== null && _theme$business_view$ !== void 0 ? _theme$business_view$ : true;
  // const productsRows = theme?.layouts?.business_view?.components?.products?.components?.layout?.rows

  var maxCartProductInventory = (product !== null && product !== void 0 && product.inventoried ? product === null || product === void 0 ? void 0 : product.quantity : undefined) - totalBalance;
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig;
  var maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory);
  var handleClickProduct = function handleClickProduct(e) {
    var _favoriteRef$current, _product$business;
    if (favoriteRef !== null && favoriteRef !== void 0 && (_favoriteRef$current = favoriteRef.current) !== null && _favoriteRef$current !== void 0 && _favoriteRef$current.contains(e.target)) return;
    if (productAddedToCartLength && product !== null && product !== void 0 && product.maximum_per_order && productAddedToCartLength >= (product === null || product === void 0 ? void 0 : product.maximum_per_order)) {
      setAlertState({
        open: true,
        content: [t('PRODUCT_ON_MAXIMUM_ORDER', 'The product is on maximum order')]
      });
      return;
    }
    if (isFavorite) {
      onProductClick && onProductClick();
      return;
    }
    !isSkeleton && !useCustomFunctionality && onProductClick && onProductClick(product, product === null || product === void 0 ? void 0 : (_product$business = product.business) === null || _product$business === void 0 ? void 0 : _product$business.slug) || useCustomFunctionality && onCustomClick && onCustomClick();
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangeFavorite = function handleChangeFavorite() {
    if (auth) {
      handleFavoriteProduct && handleFavoriteProduct(!(product !== null && product !== void 0 && product.favorite));
    } else {
      setModalPageToShow('login');
      setIsModalOpen(true);
    }
  };
  var closeAuthModal = function closeAuthModal() {
    setIsModalOpen(false);
    setModalPageToShow(null);
  };
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) {
      closeAuthModal();
    }
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
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CardContainer, {
    ref: $element,
    soldOut: isSoldOut || maxProductQuantity <= 0,
    onClick: handleClickProduct,
    isCartOnProductsList: isCartOnProductsList,
    style: useCustomFunctionality && customStyle,
    className: "product-card",
    isShowAddButt: !useCustomFunctionality && !hideAddButton && !isSkeleton
    // productsRows={productsRows}
  }, isObservedValidation ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, !useCustomFunctionality && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CardInfo, {
    soldOut: isSoldOut || maxProductQuantity <= 0,
    isBgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || (theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.product), 'h_86,c_limit'),
    oneLine: isPreviously
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.WrapLogo, {
    isBgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || (theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.product), 'h_86,c_limit')
  }, !isSkeleton && productAddedToCartLength > 0 && /*#__PURE__*/_react.default.createElement(_styles.QuantityContainer, null, /*#__PURE__*/_react.default.createElement("span", null, productAddedToCartLength)), (product === null || product === void 0 ? void 0 : (_product$ribbon = product.ribbon) === null || _product$ribbon === void 0 ? void 0 : _product$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: product === null || product === void 0 ? void 0 : (_product$ribbon2 = product.ribbon) === null || _product$ribbon2 === void 0 ? void 0 : _product$ribbon2.color,
    isRoundRect: (product === null || product === void 0 ? void 0 : (_product$ribbon3 = product.ribbon) === null || _product$ribbon3 === void 0 ? void 0 : _product$ribbon3.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (product === null || product === void 0 ? void 0 : (_product$ribbon4 = product.ribbon) === null || _product$ribbon4 === void 0 ? void 0 : _product$ribbon4.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, product === null || product === void 0 ? void 0 : (_product$ribbon5 = product.ribbon) === null || _product$ribbon5 === void 0 ? void 0 : _product$ribbon5.text), /*#__PURE__*/_react.default.createElement(_styles.CardLogo, {
    className: "image",
    soldOut: isSoldOut || maxProductQuantity <= 0,
    bgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || (theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.product), 'h_86,c_limit')
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 75,
    width: 75
  }), !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.PriceWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, product !== null && product !== void 0 && product.price ? parsePrice(product === null || product === void 0 ? void 0 : product.price) : ''), !(isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement("span", {
    className: "off-price"
  }, product !== null && product !== void 0 && product.offer_price && product !== null && product !== void 0 && product.in_offer ? parsePrice(product === null || product === void 0 ? void 0 : product.offer_price) : '')) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !isSkeleton ? /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !useKioskApp && !isPreviously && (!isSkeleton ? /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return handleChangeFavorite();
    },
    ref: favoriteRef
  }, product !== null && product !== void 0 && product.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 16,
    height: 16
  }))), isPreviously && (!isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.LastOrder, null, t('LAST_ORDERED_ON', 'Last ordered on'), " ", parseDate(product === null || product === void 0 ? void 0 : product.last_ordered_date, {
    outputFormat: 'MMM DD, YYYY'
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }))), (isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_styles.SoldOut, {
    isBottom: product === null || product === void 0 ? void 0 : (_product$ribbon6 = product.ribbon) === null || _product$ribbon6 === void 0 ? void 0 : _product$ribbon6.enabled
  }, t('SOLD_OUT', 'SOLD OUT'))), useCustomFunctionality && customText && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, customText)), !useCustomFunctionality && !hideAddButton && !isSkeleton && /*#__PURE__*/_react.default.createElement(_styles.AddButton, null, /*#__PURE__*/_react.default.createElement(_MdAddCircleOutline.default, {
    disabled: productAddedToCartLength && (product === null || product === void 0 ? void 0 : product.maximum_per_order) && productAddedToCartLength >= (product === null || product === void 0 ? void 0 : product.maximum_per_order)
  }))) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonCardLogo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 75,
    width: 75
  })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonCardInfo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isModalOpen,
    onRemove: function onRemove() {
      return closeAuthModal();
    },
    onClose: function onClose() {
      return closeAuthModal();
    },
    width: "50%",
    authModal: true
  }, modalPageToShow === 'login' && /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    handleSuccessLogin: handleSuccessLogin,
    elementLinkToSignup: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'signup'
        });
      },
      href: "#"
    }, t('CREATE_ACCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.CREATE_ACCOUNT) || 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.RESET_PASSWORD) || 'Reset password')),
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
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.LOGIN) || 'Login')),
    useLoginByCellphone: true,
    useChekoutFileds: true,
    handleSuccessSignup: handleSuccessSignup,
    isPopup: true,
    closeModal: function closeModal() {
      return closeAuthModal();
    }
  }), modalPageToShow === 'forgotpassword' && /*#__PURE__*/_react.default.createElement(_ForgotPasswordForm.ForgotPasswordForm, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.LOGIN) || 'Login')),
    isPopup: true
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PRODUCT', 'Product'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var SingleProductCard = function SingleProductCard(props) {
  var singleProductCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleProductCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SingleProductCard, singleProductCardProps);
};
exports.SingleProductCard = SingleProductCard;