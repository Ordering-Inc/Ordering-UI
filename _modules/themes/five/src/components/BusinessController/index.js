"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _styles = require("./styles");
var _GoPrimitiveDot = _interopRequireDefault(require("@meronex/icons/go/GoPrimitiveDot"));
var _BisStar = _interopRequireDefault(require("@meronex/icons/bi/BisStar"));
var _FaCrown = _interopRequireDefault(require("@meronex/icons/fa/FaCrown"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessControllerUI = function BusinessControllerUI(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _theme$business_listi, _theme$business_listi2, _theme$business_listi3, _theme$business_listi4, _theme$business_listi5, _theme$business_listi6, _theme$business_listi7, _theme$business_listi8, _theme$business_listi9, _theme$business_listi10, _theme$business_listi11, _theme$business_listi12, _theme$business_listi13, _theme$business_listi14, _theme$business_listi15, _theme$business_listi16, _theme$business_listi17, _theme$business_listi18, _theme$business_listi19, _theme$business_listi20, _theme$business_listi21, _theme$business_listi22, _theme$business_listi23, _theme$business_listi24, _theme$business_listi25, _theme$business_listi26, _theme$business_listi27, _theme$business_listi28, _theme$business_listi29, _theme$business_listi30, _theme$business_listi31, _theme$business_listi32, _theme$business_listi33, _theme$business_listi34, _theme$business_listi35, _business$available_d, _business$busy_driver, _business$active_orde, _business$ribbon, _business$ribbon2, _business$ribbon3, _business$ribbon4, _business$ribbon5, _business$ribbon6, _business$ribbon7, _theme$images, _theme$images$dummies, _configState$configs, _configState$configs$, _orderState$options, _theme$images2, _theme$images2$dummie, _theme$images3, _theme$images3$dummie, _business$reviews, _business$reviews2, _orderState$options2, _business$available_d2, _business$available_d3, _business$busy_driver2, _business$busy_driver3, _business$active_orde2, _business$active_orde3, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4;
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
    handleFavoriteBusiness = props.handleFavoriteBusiness;
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
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
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
  var businessRows = orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.business_listing_view) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.layout) === null || _orderingTheme$theme$3 === void 0 ? void 0 : _orderingTheme$theme$3.rows;
  var hideBusinessLogo = theme === null || theme === void 0 ? void 0 : (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 ? void 0 : (_theme$business_listi2 = _theme$business_listi.components) === null || _theme$business_listi2 === void 0 ? void 0 : (_theme$business_listi3 = _theme$business_listi2.business) === null || _theme$business_listi3 === void 0 ? void 0 : (_theme$business_listi4 = _theme$business_listi3.components) === null || _theme$business_listi4 === void 0 ? void 0 : (_theme$business_listi5 = _theme$business_listi4.logo) === null || _theme$business_listi5 === void 0 ? void 0 : _theme$business_listi5.hidden;
  var hideBusinessFee = theme === null || theme === void 0 ? void 0 : (_theme$business_listi6 = theme.business_listing_view) === null || _theme$business_listi6 === void 0 ? void 0 : (_theme$business_listi7 = _theme$business_listi6.components) === null || _theme$business_listi7 === void 0 ? void 0 : (_theme$business_listi8 = _theme$business_listi7.business) === null || _theme$business_listi8 === void 0 ? void 0 : (_theme$business_listi9 = _theme$business_listi8.components) === null || _theme$business_listi9 === void 0 ? void 0 : (_theme$business_listi10 = _theme$business_listi9.fee) === null || _theme$business_listi10 === void 0 ? void 0 : _theme$business_listi10.hidden;
  var hideBusinessTime = theme === null || theme === void 0 ? void 0 : (_theme$business_listi11 = theme.business_listing_view) === null || _theme$business_listi11 === void 0 ? void 0 : (_theme$business_listi12 = _theme$business_listi11.components) === null || _theme$business_listi12 === void 0 ? void 0 : (_theme$business_listi13 = _theme$business_listi12.business) === null || _theme$business_listi13 === void 0 ? void 0 : (_theme$business_listi14 = _theme$business_listi13.components) === null || _theme$business_listi14 === void 0 ? void 0 : (_theme$business_listi15 = _theme$business_listi14.time) === null || _theme$business_listi15 === void 0 ? void 0 : _theme$business_listi15.hidden;
  var hideBusinessDistance = theme === null || theme === void 0 ? void 0 : (_theme$business_listi16 = theme.business_listing_view) === null || _theme$business_listi16 === void 0 ? void 0 : (_theme$business_listi17 = _theme$business_listi16.components) === null || _theme$business_listi17 === void 0 ? void 0 : (_theme$business_listi18 = _theme$business_listi17.business) === null || _theme$business_listi18 === void 0 ? void 0 : (_theme$business_listi19 = _theme$business_listi18.components) === null || _theme$business_listi19 === void 0 ? void 0 : (_theme$business_listi20 = _theme$business_listi19.distance) === null || _theme$business_listi20 === void 0 ? void 0 : _theme$business_listi20.hidden;
  var hideBusinessReviews = theme === null || theme === void 0 ? void 0 : (_theme$business_listi21 = theme.business_listing_view) === null || _theme$business_listi21 === void 0 ? void 0 : (_theme$business_listi22 = _theme$business_listi21.components) === null || _theme$business_listi22 === void 0 ? void 0 : (_theme$business_listi23 = _theme$business_listi22.business) === null || _theme$business_listi23 === void 0 ? void 0 : (_theme$business_listi24 = _theme$business_listi23.components) === null || _theme$business_listi24 === void 0 ? void 0 : (_theme$business_listi25 = _theme$business_listi24.reviews) === null || _theme$business_listi25 === void 0 ? void 0 : _theme$business_listi25.hidden;
  var hideBusinessFavorite = theme === null || theme === void 0 ? void 0 : (_theme$business_listi26 = theme.business_listing_view) === null || _theme$business_listi26 === void 0 ? void 0 : (_theme$business_listi27 = _theme$business_listi26.components) === null || _theme$business_listi27 === void 0 ? void 0 : (_theme$business_listi28 = _theme$business_listi27.business) === null || _theme$business_listi28 === void 0 ? void 0 : (_theme$business_listi29 = _theme$business_listi28.components) === null || _theme$business_listi29 === void 0 ? void 0 : (_theme$business_listi30 = _theme$business_listi29.favorite) === null || _theme$business_listi30 === void 0 ? void 0 : _theme$business_listi30.hidden;
  var hideBusinessOffer = theme === null || theme === void 0 ? void 0 : (_theme$business_listi31 = theme.business_listing_view) === null || _theme$business_listi31 === void 0 ? void 0 : (_theme$business_listi32 = _theme$business_listi31.components) === null || _theme$business_listi32 === void 0 ? void 0 : (_theme$business_listi33 = _theme$business_listi32.business) === null || _theme$business_listi33 === void 0 ? void 0 : (_theme$business_listi34 = _theme$business_listi33.components) === null || _theme$business_listi34 === void 0 ? void 0 : (_theme$business_listi35 = _theme$business_listi34.offer) === null || _theme$business_listi35 === void 0 ? void 0 : _theme$business_listi35.hidden;

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
      handleFavoriteBusiness && handleFavoriteBusiness(!(business !== null && business !== void 0 && business.favorite));
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
  var hasInformationLength = (business === null || business === void 0 ? void 0 : (_business$available_d = business.available_drivers) === null || _business$available_d === void 0 ? void 0 : _business$available_d.length) + (business === null || business === void 0 ? void 0 : (_business$busy_driver = business.busy_drivers) === null || _business$busy_driver === void 0 ? void 0 : _business$busy_driver.length) + (business === null || business === void 0 ? void 0 : (_business$active_orde = business.active_orders) === null || _business$active_orde === void 0 ? void 0 : _business$active_orde.length) > 0;
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
  }, (business === null || business === void 0 ? void 0 : (_business$ribbon = business.ribbon) === null || _business$ribbon === void 0 ? void 0 : _business$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: business === null || business === void 0 ? void 0 : (_business$ribbon2 = business.ribbon) === null || _business$ribbon2 === void 0 ? void 0 : _business$ribbon2.color,
    colorText: (0, _utils.LightenDarkenColor)(business === null || business === void 0 ? void 0 : (_business$ribbon3 = business.ribbon) === null || _business$ribbon3 === void 0 ? void 0 : _business$ribbon3.color, -200),
    borderRibbon: (0, _utils.LightenDarkenColor)(business === null || business === void 0 ? void 0 : (_business$ribbon4 = business.ribbon) === null || _business$ribbon4 === void 0 ? void 0 : _business$ribbon4.color, -200),
    isRoundRect: (business === null || business === void 0 ? void 0 : (_business$ribbon5 = business.ribbon) === null || _business$ribbon5 === void 0 ? void 0 : _business$ribbon5.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (business === null || business === void 0 ? void 0 : (_business$ribbon6 = business.ribbon) === null || _business$ribbon6 === void 0 ? void 0 : _business$ribbon6.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, business === null || business === void 0 ? void 0 : (_business$ribbon7 = business.ribbon) === null || _business$ribbon7 === void 0 ? void 0 : _business$ribbon7.text), /*#__PURE__*/_react.default.createElement(_styles.BusinessHero, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: isCustomerMode ? 100 : 140
  }) : /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
    bgimage: optimizeImage(businessHeader || (business === null || business === void 0 ? void 0 : business.header) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessHeader), 'h_400,c_limit'),
    isClosed: !isBusinessOpen
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessTags, null, (businessFeatured !== null && businessFeatured !== void 0 ? businessFeatured : business === null || business === void 0 ? void 0 : business.featured) && /*#__PURE__*/_react.default.createElement("span", {
    className: "crown"
  }, /*#__PURE__*/_react.default.createElement(_FaCrown.default, null)), !hideBusinessOffer && !isCustomLayout && (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.preorder_status_enabled) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value) === '1' && /*#__PURE__*/_react.default.createElement("div", null, getBusinessOffer(businessOffers !== null && businessOffers !== void 0 ? businessOffers : business === null || business === void 0 ? void 0 : business.offers) && /*#__PURE__*/_react.default.createElement("span", null, getBusinessOffer(businessOffers !== null && businessOffers !== void 0 ? businessOffers : business === null || business === void 0 ? void 0 : business.offers) || parsePrice(0)), !isBusinessOpen && /*#__PURE__*/_react.default.createElement("span", null, t('PREORDER', 'PreOrder')))), !!businessWillCloseSoonMinutes && (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.moment) === null && isBusinessOpen && /*#__PURE__*/_react.default.createElement("h1", null, businessWillCloseSoonMinutes, " ", t('MINUTES_TO_CLOSE', 'minutes to close')), !isBusinessOpen && /*#__PURE__*/_react.default.createElement("h1", {
    className: "closed"
  }, t('CLOSED', 'Closed')))), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogoWrapper, null, !hideBusinessLogo && /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, {
    isSkeleton: isSkeleton,
    isCustomerMode: isCustomerMode
  }, !isSkeleton && (businessLogo || business !== null && business !== void 0 && business.logo || (_theme$images2 = theme.images) !== null && _theme$images2 !== void 0 && (_theme$images2$dummie = _theme$images2.dummies) !== null && _theme$images2$dummie !== void 0 && _theme$images2$dummie.businessLogo) ? /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage(businessLogo || (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.businessLogo), 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 70,
    width: 70
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessStarInfo, null, !hideBusinessReviews && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isSkeleton ? (businessReviews !== null && businessReviews !== void 0 ? businessReviews : business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "reviews"
  }, /*#__PURE__*/_react.default.createElement(_BisStar.default, null), /*#__PURE__*/_react.default.createElement("span", null, businessReviews !== null && businessReviews !== void 0 ? businessReviews : business === null || business === void 0 ? void 0 : (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  })), !hideBusinessFavorite && /*#__PURE__*/_react.default.createElement(_styles.FavoriteWrapper, {
    ref: favoriteRef,
    onClick: handleChangeFavorite
  }, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, business !== null && business !== void 0 && business.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
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
  }, /*#__PURE__*/_react.default.createElement(_GoPrimitiveDot.default, null), (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 1 ? businessDeliveryTime !== null && businessDeliveryTime !== void 0 ? businessDeliveryTime : business === null || business === void 0 ? void 0 : business.delivery_time : businessPickupTime !== null && businessPickupTime !== void 0 ? businessPickupTime : business === null || business === void 0 ? void 0 : business.pickup_time) || /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 65
  })), !hideBusinessDistance && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (businessDistance !== null && businessDistance !== void 0 ? businessDistance : business === null || business === void 0 ? void 0 : business.distance) >= 0 ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_GoPrimitiveDot.default, null), parseDistance(businessDistance !== null && businessDistance !== void 0 ? businessDistance : business === null || business === void 0 ? void 0 : business.distance)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 65
  })), isCustomerMode && hasInformationLength && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformation, null, (business === null || business === void 0 ? void 0 : (_business$available_d2 = business.available_drivers) === null || _business$available_d2 === void 0 ? void 0 : _business$available_d2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, null, /*#__PURE__*/_react.default.createElement(_styles.InfoLength, null, business === null || business === void 0 ? void 0 : (_business$available_d3 = business.available_drivers) === null || _business$available_d3 === void 0 ? void 0 : _business$available_d3.length), /*#__PURE__*/_react.default.createElement(_styles.InfoDescription, null, t('OPEN_ORDERS', 'Open orders'))), (business === null || business === void 0 ? void 0 : (_business$busy_driver2 = business.busy_drivers) === null || _business$busy_driver2 === void 0 ? void 0 : _business$busy_driver2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, null, /*#__PURE__*/_react.default.createElement(_styles.InfoLength, null, business === null || business === void 0 ? void 0 : (_business$busy_driver3 = business.busy_drivers) === null || _business$busy_driver3 === void 0 ? void 0 : _business$busy_driver3.length), /*#__PURE__*/_react.default.createElement(_styles.InfoDescription, null, t('BUSY_DRIVERS', 'Busy drivers'))), (business === null || business === void 0 ? void 0 : (_business$active_orde2 = business.active_orders) === null || _business$active_orde2 === void 0 ? void 0 : _business$active_orde2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, null, /*#__PURE__*/_react.default.createElement(_styles.InfoLength, null, business === null || business === void 0 ? void 0 : (_business$active_orde3 = business.active_orders) === null || _business$active_orde3 === void 0 ? void 0 : _business$active_orde3.length), /*#__PURE__*/_react.default.createElement(_styles.InfoDescription, null, t('AVAILABLE_DRIVERS', 'Avalable drivers')))))))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  })));
};
var BusinessController = function BusinessController(props) {
  var businessControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessControllerUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessController, businessControllerProps);
};
exports.BusinessController = BusinessController;