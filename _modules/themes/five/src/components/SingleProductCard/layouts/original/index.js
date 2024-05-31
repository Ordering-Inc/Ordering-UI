"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var _styles = require("./styles");
var _Buttons = require("../../../../styles/Buttons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var singleProductCardPropsAreEqual = function singleProductCardPropsAreEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps.product) === JSON.stringify(nextProps.product) && prevProps.isSkeleton === nextProps.isSkeleton && prevProps.isSoldOut === nextProps.isSoldOut && prevProps.isCartOnProductsList === nextProps.isCartOnProductsList && prevProps.productAddedToCartLength === nextProps.productAddedToCartLength;
};
var SingleProductCardUI = /*#__PURE__*/_react.default.memo(function (props) {
  var _theme$business_view$, _theme$business_view, _theme$business_view2, _theme$business_view3, _theme$viewString, _theme$business_view4, _theme$business_view5, _theme$images, _theme$images2, _product$ribbon, _product$ribbon2, _product$ribbon3, _product$ribbon4, _product$ribbon5, _theme$images3, _product$ribbon6, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4;
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
    isPreviously = props.isPreviously,
    viewString = props.viewString,
    isCustomerMode = props.isCustomerMode;
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
  var hideAddButton = (_theme$business_view$ = theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.products) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.add_to_cart_button) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.hidden) !== null && _theme$business_view$ !== void 0 ? _theme$business_view$ : true;
  var hideProductDescription = theme === null || theme === void 0 || (_theme$business_view2 = theme.business_view) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.products) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.product) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.description) === null || _theme$business_view2 === void 0 ? void 0 : _theme$business_view2.hidden;
  var hideProductDummyLogo = theme === null || theme === void 0 || (_theme$business_view3 = theme.business_view) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.products) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.product) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.dummy) === null || _theme$business_view3 === void 0 ? void 0 : _theme$business_view3.hidden;
  var hideProductLogo = viewString ? theme === null || theme === void 0 || (_theme$viewString = theme[viewString]) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.components) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.cart) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.components) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.products) === null || _theme$viewString === void 0 || (_theme$viewString = _theme$viewString.image) === null || _theme$viewString === void 0 ? void 0 : _theme$viewString.hidden : theme === null || theme === void 0 || (_theme$business_view4 = theme.business_view) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.products) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.product) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.image) === null || _theme$business_view4 === void 0 ? void 0 : _theme$business_view4.hidden;
  var hideFavoriteIcon = theme === null || theme === void 0 || (_theme$business_view5 = theme.business_view) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.products) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.product) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.favorite) === null || _theme$business_view5 === void 0 ? void 0 : _theme$business_view5.hidden;

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
    !isSkeleton && !useCustomFunctionality && onProductClick && onProductClick(product, product === null || product === void 0 || (_product$business = product.business) === null || _product$business === void 0 ? void 0 : _product$business.slug) || useCustomFunctionality && onCustomClick && onCustomClick();
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
      token: user === null || user === void 0 || (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
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
  }, isObservedValidation && /*#__PURE__*/_react.default.createElement("div", null, !useCustomFunctionality && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isSkeleton && productAddedToCartLength > 0 && /*#__PURE__*/_react.default.createElement(_styles.QuantityContainer, null, /*#__PURE__*/_react.default.createElement("span", null, productAddedToCartLength)), /*#__PURE__*/_react.default.createElement(_styles.CardInfo, {
    soldOut: isSoldOut || maxProductQuantity <= 0,
    isBgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || (theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product), 'h_86,c_limit'),
    oneLine: isPreviously
  }, /*#__PURE__*/_react.default.createElement(_styles.TitleWrapper, null, !isSkeleton ? /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !useKioskApp && !isPreviously && isCustomerMode && !hideFavoriteIcon && (!isSkeleton ? /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return handleChangeFavorite();
    },
    ref: favoriteRef
  }, product !== null && product !== void 0 && product.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 16,
    height: 16
  }))), !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.PriceWrapper, {
    isOffPrice: (product === null || product === void 0 ? void 0 : product.offer_price) && (product === null || product === void 0 ? void 0 : product.in_offer)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "current-price"
  }, product !== null && product !== void 0 && product.price ? parsePrice(product === null || product === void 0 ? void 0 : product.price) : ''), !(isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement("span", {
    className: "off-price"
  }, product !== null && product !== void 0 && product.offer_price && product !== null && product !== void 0 && product.in_offer ? parsePrice(product === null || product === void 0 ? void 0 : product.offer_price) : ''), (product === null || product === void 0 ? void 0 : product.tags) && (product === null || product === void 0 ? void 0 : product.tags.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapTags, null, product === null || product === void 0 ? void 0 : product.tags.map(function (tag, i) {
    var _tag$image;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (_tag$image = tag.image) !== null && _tag$image !== void 0 ? _tag$image : ''
    }));
  }))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !hideProductDescription && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isSkeleton ? /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), isPreviously && (!isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.LastOrder, null, t('LAST_ORDERED_ON', 'Last ordered on'), " ", parseDate(product === null || product === void 0 ? void 0 : product.last_ordered_date, {
    outputFormat: 'MMM DD, YYYY'
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }))), !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.WrapLogo, {
    isBgimage: optimizeImage(!hideProductLogo ? (product === null || product === void 0 ? void 0 : product.images) || (theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.product) : '', 'h_86,c_limit')
  }, (product === null || product === void 0 || (_product$ribbon = product.ribbon) === null || _product$ribbon === void 0 ? void 0 : _product$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: product === null || product === void 0 || (_product$ribbon2 = product.ribbon) === null || _product$ribbon2 === void 0 ? void 0 : _product$ribbon2.color,
    isRoundRect: (product === null || product === void 0 || (_product$ribbon3 = product.ribbon) === null || _product$ribbon3 === void 0 ? void 0 : _product$ribbon3.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (product === null || product === void 0 || (_product$ribbon4 = product.ribbon) === null || _product$ribbon4 === void 0 ? void 0 : _product$ribbon4.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, product === null || product === void 0 || (_product$ribbon5 = product.ribbon) === null || _product$ribbon5 === void 0 ? void 0 : _product$ribbon5.text), /*#__PURE__*/_react.default.createElement(_styles.CardLogo, {
    className: "image",
    soldOut: isSoldOut || maxProductQuantity <= 0,
    bgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || !hideProductDummyLogo && (theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.dummies) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.product), 'h_86,c_limit')
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 75,
    width: 75
  }), (isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_styles.SoldOut, {
    isBottom: product === null || product === void 0 || (_product$ribbon6 = product.ribbon) === null || _product$ribbon6 === void 0 ? void 0 : _product$ribbon6.enabled
  }, t('SOLD_OUT', 'SOLD OUT'))), useCustomFunctionality && customText && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, customText)), !useCustomFunctionality && !hideAddButton && !isSkeleton && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    disabled: productAddedToCartLength && (product === null || product === void 0 ? void 0 : product.maximum_per_order) && productAddedToCartLength >= (product === null || product === void 0 ? void 0 : product.maximum_per_order)
  }, t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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
    }, t('CREATE_ACCOUNT', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.CREATE_ACCOUNT) || 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.RESET_PASSWORD) || 'Reset password')),
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
    }, t('LOGIN', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.LOGIN) || 'Login')),
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
    }, t('LOGIN', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.LOGIN) || 'Login')),
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
}, singleProductCardPropsAreEqual);
var SingleProductCard = exports.SingleProductCard = function SingleProductCard(props) {
  var singleProductCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleProductCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SingleProductCard, singleProductCardProps);
};