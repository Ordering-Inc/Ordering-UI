"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessController = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _Confirm = require("../Confirm");
var _Modal = require("../Modal");
var _LoginForm = require("../LoginForm");
var _SignUpForm = require("../SignUpForm");
var _ForgotPasswordForm = require("../ForgotPasswordForm");
var _utils = require("../../../../../utils");
var _BiCar = _interopRequireDefault(require("@meronex/icons/bi/BiCar"));
var _BiBasket = _interopRequireDefault(require("@meronex/icons/bi/BiBasket"));
var _styles = require("./styles");
var _GoPrimitiveDot = _interopRequireDefault(require("@meronex/icons/go/GoPrimitiveDot"));
var _BisStar = _interopRequireDefault(require("@meronex/icons/bi/BisStar"));
var _FaCrown = _interopRequireDefault(require("@meronex/icons/fa/FaCrown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessControllerUI = function BusinessControllerUI(props) {
  var _theme$business_listi, _theme$business_listi2, _theme$business_listi3, _theme$business_listi4, _theme$business_listi5, _theme$business_listi6, _theme$business_listi7, _theme$business_listi8, _theme$business_listi9, _theme$business_listi10, _business$ribbon, _business$ribbon2, _business$ribbon3, _business$ribbon4, _business$ribbon5, _business$ribbon6, _business$ribbon7, _theme$images, _configState$configs, _orderState$options, _theme$images2, _theme$images3, _business$reviews, _business$reviews2, _businessState$busine2, _orderState$options2, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4;
  var isSkeleton = props.isSkeleton,
    business = props.business,
    getBusinessOffer = props.getBusinessOffer,
    handleClick = props.handleClick,
    orderType = props.orderType,
    isCustomLayout = props.isCustomLayout,
    isCustomerMode = props.isCustomerMode,
    isBusinessOpen = props.isBusinessOpen,
    businessWillCloseSoonMinutes = props.businessWillCloseSoonMinutes,
    onPreorderBusiness = props.onPreorderBusiness,
    firstCard = props.firstCard,
    minWidthEnabled = props.minWidthEnabled,
    typeButton = props.typeButton,
    children = props.children,
    businessHeader = props.businessHeader,
    businessFeatured = props.businessFeatured,
    businessOffers = props.businessOffers,
    businessLogo = props.businessLogo,
    businessReviews = props.businessReviews,
    businessDeliveryPrice = props.businessDeliveryPrice,
    businessDeliveryTime = props.businessDeliveryTime,
    businessPickupTime = props.businessPickupTime,
    businessDistance = props.businessDistance,
    handleFavoriteBusiness = props.handleFavoriteBusiness,
    businessState = props.businessState;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    auth = _useSession2[0].auth,
    login = _useSession2[1].login;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDistance = _useUtils2$.parseDistance,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isModalOpen = _useState4[0],
    setIsModalOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    modalPageToShow = _useState6[0],
    setModalPageToShow = _useState6[1];
  var favoriteRef = (0, _react.useRef)(null);
  var businessRows = theme === null || theme === void 0 || (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.layout) === null || _theme$business_listi === void 0 ? void 0 : _theme$business_listi.rows;
  var hideBusinessLogo = theme === null || theme === void 0 || (_theme$business_listi2 = theme.business_listing_view) === null || _theme$business_listi2 === void 0 || (_theme$business_listi2 = _theme$business_listi2.components) === null || _theme$business_listi2 === void 0 || (_theme$business_listi2 = _theme$business_listi2.business) === null || _theme$business_listi2 === void 0 || (_theme$business_listi2 = _theme$business_listi2.components) === null || _theme$business_listi2 === void 0 || (_theme$business_listi2 = _theme$business_listi2.logo) === null || _theme$business_listi2 === void 0 ? void 0 : _theme$business_listi2.hidden;
  var hideBusinessFee = theme === null || theme === void 0 || (_theme$business_listi3 = theme.business_listing_view) === null || _theme$business_listi3 === void 0 || (_theme$business_listi3 = _theme$business_listi3.components) === null || _theme$business_listi3 === void 0 || (_theme$business_listi3 = _theme$business_listi3.business) === null || _theme$business_listi3 === void 0 || (_theme$business_listi3 = _theme$business_listi3.components) === null || _theme$business_listi3 === void 0 || (_theme$business_listi3 = _theme$business_listi3.fee) === null || _theme$business_listi3 === void 0 ? void 0 : _theme$business_listi3.hidden;
  var hideBusinessTime = theme === null || theme === void 0 || (_theme$business_listi4 = theme.business_listing_view) === null || _theme$business_listi4 === void 0 || (_theme$business_listi4 = _theme$business_listi4.components) === null || _theme$business_listi4 === void 0 || (_theme$business_listi4 = _theme$business_listi4.business) === null || _theme$business_listi4 === void 0 || (_theme$business_listi4 = _theme$business_listi4.components) === null || _theme$business_listi4 === void 0 || (_theme$business_listi4 = _theme$business_listi4.time) === null || _theme$business_listi4 === void 0 ? void 0 : _theme$business_listi4.hidden;
  var hideBusinessDistance = theme === null || theme === void 0 || (_theme$business_listi5 = theme.business_listing_view) === null || _theme$business_listi5 === void 0 || (_theme$business_listi5 = _theme$business_listi5.components) === null || _theme$business_listi5 === void 0 || (_theme$business_listi5 = _theme$business_listi5.business) === null || _theme$business_listi5 === void 0 || (_theme$business_listi5 = _theme$business_listi5.components) === null || _theme$business_listi5 === void 0 || (_theme$business_listi5 = _theme$business_listi5.distance) === null || _theme$business_listi5 === void 0 ? void 0 : _theme$business_listi5.hidden;
  var hideBusinessReviews = theme === null || theme === void 0 || (_theme$business_listi6 = theme.business_listing_view) === null || _theme$business_listi6 === void 0 || (_theme$business_listi6 = _theme$business_listi6.components) === null || _theme$business_listi6 === void 0 || (_theme$business_listi6 = _theme$business_listi6.business) === null || _theme$business_listi6 === void 0 || (_theme$business_listi6 = _theme$business_listi6.components) === null || _theme$business_listi6 === void 0 || (_theme$business_listi6 = _theme$business_listi6.reviews) === null || _theme$business_listi6 === void 0 ? void 0 : _theme$business_listi6.hidden;
  var hideBusinessFavorite = theme === null || theme === void 0 || (_theme$business_listi7 = theme.business_listing_view) === null || _theme$business_listi7 === void 0 || (_theme$business_listi7 = _theme$business_listi7.components) === null || _theme$business_listi7 === void 0 || (_theme$business_listi7 = _theme$business_listi7.business) === null || _theme$business_listi7 === void 0 || (_theme$business_listi7 = _theme$business_listi7.components) === null || _theme$business_listi7 === void 0 || (_theme$business_listi7 = _theme$business_listi7.favorite) === null || _theme$business_listi7 === void 0 ? void 0 : _theme$business_listi7.hidden;
  var hideBusinessOffer = theme === null || theme === void 0 || (_theme$business_listi8 = theme.business_listing_view) === null || _theme$business_listi8 === void 0 || (_theme$business_listi8 = _theme$business_listi8.components) === null || _theme$business_listi8 === void 0 || (_theme$business_listi8 = _theme$business_listi8.business) === null || _theme$business_listi8 === void 0 || (_theme$business_listi8 = _theme$business_listi8.components) === null || _theme$business_listi8 === void 0 || (_theme$business_listi8 = _theme$business_listi8.offer) === null || _theme$business_listi8 === void 0 ? void 0 : _theme$business_listi8.hidden;
  var hideBusinessHeader = theme === null || theme === void 0 || (_theme$business_listi9 = theme.business_listing_view) === null || _theme$business_listi9 === void 0 || (_theme$business_listi9 = _theme$business_listi9.components) === null || _theme$business_listi9 === void 0 || (_theme$business_listi9 = _theme$business_listi9.business) === null || _theme$business_listi9 === void 0 || (_theme$business_listi9 = _theme$business_listi9.components) === null || _theme$business_listi9 === void 0 || (_theme$business_listi9 = _theme$business_listi9.header) === null || _theme$business_listi9 === void 0 ? void 0 : _theme$business_listi9.hidden;
  var hideBusinessFavoriteBadge = theme === null || theme === void 0 || (_theme$business_listi10 = theme.business_listing_view) === null || _theme$business_listi10 === void 0 || (_theme$business_listi10 = _theme$business_listi10.components) === null || _theme$business_listi10 === void 0 || (_theme$business_listi10 = _theme$business_listi10.business) === null || _theme$business_listi10 === void 0 || (_theme$business_listi10 = _theme$business_listi10.components) === null || _theme$business_listi10 === void 0 || (_theme$business_listi10 = _theme$business_listi10.featured_badge) === null || _theme$business_listi10 === void 0 ? void 0 : _theme$business_listi10.hidden;

  // const handleShowAlert = () => {
  //   setAlertState({ open: true, content: [t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The Business is closed at the moment')] })
  // }

  var handleBusinessClick = function handleBusinessClick(e) {
    var _favoriteRef$current;
    if (favoriteRef !== null && favoriteRef !== void 0 && (_favoriteRef$current = favoriteRef.current) !== null && _favoriteRef$current !== void 0 && _favoriteRef$current.contains(e.target)) return;
    if (onPreorderBusiness && !isBusinessOpen) onPreorderBusiness(business);else handleClick(business);
  };
  var handleChangeFavorite = function handleChangeFavorite() {
    if (auth) {
      var _businessState$busine;
      handleFavoriteBusiness && handleFavoriteBusiness(!(businessState !== null && businessState !== void 0 && (_businessState$busine = businessState.business) !== null && _businessState$busine !== void 0 && _businessState$busine.favorite));
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
  var hasInformationLength = !!(business !== null && business !== void 0 && business.idle_drivers_count) || !!(business !== null && business !== void 0 && business.busy_drivers_count) || !!(business !== null && business !== void 0 && business.activated_orders);
  if (typeButton) {
    return /*#__PURE__*/_react.default.createElement(_styles.ContainerCard, {
      typeButton: typeButton
    }, children);
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ContainerCard, {
    isSkeleton: isSkeleton,
    isCustomerMode: isCustomerMode && hasInformationLength,
    firstCard: firstCard,
    minWidthEnabled: minWidthEnabled,
    businessRows: businessRows
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessCard, {
    isSkeleton: isSkeleton,
    onClick: function onClick(e) {
      return !isSkeleton && handleClick && handleBusinessClick(e);
    }
  }, (business === null || business === void 0 || (_business$ribbon = business.ribbon) === null || _business$ribbon === void 0 ? void 0 : _business$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: business === null || business === void 0 || (_business$ribbon2 = business.ribbon) === null || _business$ribbon2 === void 0 ? void 0 : _business$ribbon2.color,
    colorText: (0, _utils.lightenDarkenColor)(business === null || business === void 0 || (_business$ribbon3 = business.ribbon) === null || _business$ribbon3 === void 0 ? void 0 : _business$ribbon3.color),
    borderRibbon: (0, _utils.lightenDarkenColor)(business === null || business === void 0 || (_business$ribbon4 = business.ribbon) === null || _business$ribbon4 === void 0 ? void 0 : _business$ribbon4.color),
    isRoundRect: (business === null || business === void 0 || (_business$ribbon5 = business.ribbon) === null || _business$ribbon5 === void 0 ? void 0 : _business$ribbon5.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (business === null || business === void 0 || (_business$ribbon6 = business.ribbon) === null || _business$ribbon6 === void 0 ? void 0 : _business$ribbon6.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, business === null || business === void 0 || (_business$ribbon7 = business.ribbon) === null || _business$ribbon7 === void 0 ? void 0 : _business$ribbon7.text), /*#__PURE__*/_react.default.createElement(_styles.BusinessHero, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: isCustomerMode ? 100 : 140
  }) : /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
    bgimage: !hideBusinessHeader ? optimizeImage(businessHeader || (business === null || business === void 0 ? void 0 : business.header) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessHeader), 'h_400,c_limit') : '',
    isClosed: !isBusinessOpen
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessTags, null, (businessFeatured !== null && businessFeatured !== void 0 ? businessFeatured : business === null || business === void 0 ? void 0 : business.featured) && !hideBusinessFavoriteBadge && /*#__PURE__*/_react.default.createElement("span", {
    className: "crown"
  }, /*#__PURE__*/_react.default.createElement(_FaCrown.default, null)), !hideBusinessOffer && !isCustomLayout && (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.preorder_status_enabled) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === '1' && /*#__PURE__*/_react.default.createElement("div", null, !!getBusinessOffer(businessOffers !== null && businessOffers !== void 0 ? businessOffers : business === null || business === void 0 ? void 0 : business.offers) && /*#__PURE__*/_react.default.createElement("span", null, t('DISCOUNT', 'Discount'), ' ', getBusinessOffer(businessOffers !== null && businessOffers !== void 0 ? businessOffers : business === null || business === void 0 ? void 0 : business.offers)), !isBusinessOpen && /*#__PURE__*/_react.default.createElement("span", null, t('PREORDER', 'PreOrder')))), !!businessWillCloseSoonMinutes && (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.moment) === null && isBusinessOpen && /*#__PURE__*/_react.default.createElement("h1", null, businessWillCloseSoonMinutes, " ", t('MINUTES_TO_CLOSE', 'minutes to close')), !isBusinessOpen && /*#__PURE__*/_react.default.createElement("h1", {
    className: "closed"
  }, t('CLOSED', 'Closed')))), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogoWrapper, null, !hideBusinessLogo && /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, {
    isSkeleton: isSkeleton,
    isCustomerMode: isCustomerMode
  }, !isSkeleton && (businessLogo || business !== null && business !== void 0 && business.logo || (_theme$images2 = theme.images) !== null && _theme$images2 !== void 0 && (_theme$images2 = _theme$images2.dummies) !== null && _theme$images2 !== void 0 && _theme$images2.businessLogo) ? /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage(businessLogo || (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.dummies) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.businessLogo), 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 70,
    width: 70
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessStarInfo, null, !hideBusinessReviews && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isSkeleton ? (businessReviews !== null && businessReviews !== void 0 ? businessReviews : business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "reviews"
  }, /*#__PURE__*/_react.default.createElement(_BisStar.default, null), /*#__PURE__*/_react.default.createElement("span", null, businessReviews !== null && businessReviews !== void 0 ? businessReviews : business === null || business === void 0 || (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })), !hideBusinessFavorite && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.FavoriteWrapper, {
    ref: favoriteRef,
    onClick: handleChangeFavorite
  }, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessState !== null && businessState !== void 0 && (_businessState$busine2 = businessState.business) !== null && _businessState$busine2 !== void 0 && _businessState$busine2.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 16,
    height: 16
  })))), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement("div", null, business !== null && business !== void 0 && business.name ? /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, business === null || business === void 0 ? void 0 : business.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), /*#__PURE__*/_react.default.createElement(_styles.Medadata, {
    isCustomerMode: isCustomerMode,
    isSkeleton: isSkeleton
  }, !hideBusinessFee && orderType === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (businessDeliveryPrice !== null && businessDeliveryPrice !== void 0 ? businessDeliveryPrice : business === null || business === void 0 ? void 0 : business.delivery_price) >= 0 ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivery fee')), business && parsePrice(businessDeliveryPrice !== null && businessDeliveryPrice !== void 0 ? businessDeliveryPrice : business === null || business === void 0 ? void 0 : business.delivery_price)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 70 : 65
  })), !hideBusinessTime && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys(business).length > 0 ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_GoPrimitiveDot.default, null), (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 1 ? businessDeliveryTime !== null && businessDeliveryTime !== void 0 ? businessDeliveryTime : business === null || business === void 0 ? void 0 : business.delivery_time : businessPickupTime !== null && businessPickupTime !== void 0 ? businessPickupTime : business === null || business === void 0 ? void 0 : business.pickup_time) || /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 65
  })), !hideBusinessDistance && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (businessDistance !== null && businessDistance !== void 0 ? businessDistance : business === null || business === void 0 ? void 0 : business.distance) >= 0 ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_GoPrimitiveDot.default, null), parseDistance(businessDistance !== null && businessDistance !== void 0 ? businessDistance : business === null || business === void 0 ? void 0 : business.distance)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 65
  })), isCustomerMode && hasInformationLength && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformation, null, (business === null || business === void 0 ? void 0 : business.idle_drivers_count) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "#4CAF50"
  }, /*#__PURE__*/_react.default.createElement(_BiCar.default, null), business === null || business === void 0 ? void 0 : business.idle_drivers_count), (business === null || business === void 0 ? void 0 : business.busy_drivers_count) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "#E91E63"
  }, /*#__PURE__*/_react.default.createElement(_BiCar.default, null), business === null || business === void 0 ? void 0 : business.busy_drivers_count), (business === null || business === void 0 ? void 0 : business.activated_orders) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "#FF9800"
  }, /*#__PURE__*/_react.default.createElement(_BiBasket.default, null), business === null || business === void 0 ? void 0 : business.activated_orders)))))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('BUSINESS_CLOSED', 'Business Closed'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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
  })));
};
var BusinessController = exports.BusinessController = function BusinessController(props) {
  var businessControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessControllerUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessController, businessControllerProps);
};