"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _FaUserCircle = _interopRequireDefault(require("@meronex/icons/fa/FaUserCircle"));

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

var _TiWarningOutline = _interopRequireDefault(require("@meronex/icons/ti/TiWarningOutline"));

var _styles = require("./styles");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _useOnlineStatus = require("../../../../../hooks/useOnlineStatus");

var _utils = require("../../../../../utils");

var _LanguageSelector = require("../../../../../components/LanguageSelector");

var _AddressesPopover = require("../AddressesPopover");

var _UserPopover = require("../../../../../components/UserPopover");

var _MomentPopover = require("../MomentPopover");

var _CartSidebar = require("../CartSidebar");

var _OrderTypeSelectorHeader = require("../../../../../components/OrderTypeSelectorHeader");

var _CartContent = require("../CartContent");

var _Modal = require("../../../../../components/Modal");

var _MomentContent = require("../MomentContent");

var _AddressList = require("../AddressList");

var _AddressForm = require("../AddressForm");

var _HeaderOption = require("../HeaderOption");

var _SidebarMenu = require("../../../../../components/SidebarMenu");

var _UserDetails = require("../../../../../components/UserDetails");

var _Confirm = require("../../../../../components/Confirm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Header = function Header(props) {
  var _configState$configs, _configState$configs$, _configState$configs2, _configState$configs3, _customerState$user, _orderState$options3, _orderState$options3$, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$logos, _theme$images2, _theme$images2$logos, _theme$images3, _theme$images3$logos, _theme$images4, _theme$images4$logos, _theme$images5, _theme$images5$logos, _theme$images6, _theme$images6$logos, _theme$images7, _theme$images7$logos, _theme$images8, _theme$images8$logos, _configState$configs4, _configState$configs5, _orderState$options5, _theme$defaultLanguag, _theme$defaultLanguag2, _orderState$options6, _configState$configs6, _configState$configs7, _orderState$options7, _orderState$options7$, _orderState$options7$2, _orderState$options7$3, _configState$configs8, _configState$configs9, _orderState$options8, _configState$configs10, _configState$configs11, _configState$configs12, _configState$configs13, _orderState$options9, _customerState$user2, _customerState$user3, _props$afterComponent, _props$afterElements;

  var isHome = props.isHome,
      location = props.location,
      closeCartPopover = props.closeCartPopover,
      isShowOrderOptions = props.isShowOrderOptions,
      isHideSignup = props.isHideSignup,
      isCustomerMode = props.isCustomerMode;

  var _useLocation = (0, _reactRouterDom.useLocation)(),
      pathname = _useLocation.pathname;

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      refreshOrderOptions = _useOrder2[1].refreshOrderOptions;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      openPopover = _useState2[0],
      setOpenPopover = _useState2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var _useCustomer = (0, _orderingComponents.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 2),
      customerState = _useCustomer2[0],
      deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFarAway = _useState4[0],
      setIsFarAway = _useState4[1];

  var clearCustomer = (0, _react.useRef)(null);

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      modalIsOpen = _useState6[0],
      setModalIsOpen = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      customerModalOpen = _useState8[0],
      setCustomerModalOpen = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      modalSelected = _useState10[0],
      setModalSelected = _useState10[1];

  var _useState11 = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      confirm = _useState12[0],
      setConfirm = _useState12[1];

  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
    return cart.products.length > 0;
  }) || null;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var onlineStatus = (0, _useOnlineStatus.useOnlineStatus)();
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isHero = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/login' || location.pathname === '/signin' || location.pathname === '/signup';
  var isStorePage = location.pathname.includes('store');
  var isPreOrderSetting = (configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.preorder_status_enabled) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '1';

  var handleClickUserCustomer = function handleClickUserCustomer(e) {
    var _clearCustomer$curren;

    var isActionsClick = (_clearCustomer$curren = clearCustomer.current) === null || _clearCustomer$curren === void 0 ? void 0 : _clearCustomer$curren.contains(e === null || e === void 0 ? void 0 : e.target);

    if (isActionsClick) {
      setConfirm({
        open: true,
        content: t('QUESTION_CLEAR_CUSTOMER', 'Are you sure that you want to clear the customer?'),
        handleOnAccept: function handleOnAccept() {
          deleteUserCustomer(true);
          refreshOrderOptions();
          handleGoToPage({
            page: 'home'
          });
          setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
            open: false
          }));
        }
      });
      return;
    }

    setCustomerModalOpen(true);
  };

  var openModal = function openModal(opt) {
    setModalSelected(opt);
    setModalIsOpen(true);
  };

  var handleTogglePopover = function handleTogglePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, !openPopover[type])));
  };

  var handleClosePopover = function handleClosePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, false)));
  };

  var handleAddProduct = function handleAddProduct() {
    if (!closeCartPopover) {
      handleTogglePopover('cart');
    }
  };

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  (0, _react.useEffect)(function () {
    events.on('cart_product_added', handleAddProduct);
    return function () {
      return events.off('cart_product_added', handleAddProduct);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (isCustomerMode) {
      setCustomerModalOpen(false);
    }
  }, [customerState === null || customerState === void 0 ? void 0 : (_customerState$user = customerState.user) === null || _customerState$user === void 0 ? void 0 : _customerState$user.address]);
  (0, _react.useEffect)(function () {
    if (!(pathname.includes('/search') || pathname.includes('/checkout'))) {
      setIsFarAway(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(function (pos) {
      var _orderState$options, _orderState$options$a, _orderState$options$a2, _orderState$options2, _orderState$options2$, _orderState$options2$2;

      var crd = pos.coords;
      var distance = (0, _utils.getDistance)(crd.latitude, crd.longitude, orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : (_orderState$options$a2 = _orderState$options$a.location) === null || _orderState$options$a2 === void 0 ? void 0 : _orderState$options$a2.lat, orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : (_orderState$options2$2 = _orderState$options2$.location) === null || _orderState$options2$2 === void 0 ? void 0 : _orderState$options2$2.lng);
      if (distance > 20) setIsFarAway(true);else setIsFarAway(false);
    }, function (err) {
      console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }, [orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : (_orderState$options3$ = _orderState$options3.address) === null || _orderState$options3$ === void 0 ? void 0 : _orderState$options3$.location, pathname]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Header, {
    isHero: isHero,
    isStorePage: isStorePage
  }, /*#__PURE__*/_react.default.createElement(_styles.InnerHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_SidebarMenu.SidebarMenu, {
    auth: auth,
    isHideSignup: isHideSignup,
    userCustomer: userCustomer
  }), !isHome && /*#__PURE__*/_react.default.createElement(_styles.LogoHeader, {
    onClick: function onClick() {
      var _orderState$options4, _orderState$options4$;

      return handleGoToPage({
        page: orderState !== null && orderState !== void 0 && (_orderState$options4 = orderState.options) !== null && _orderState$options4 !== void 0 && (_orderState$options4$ = _orderState$options4.address) !== null && _orderState$options4$ !== void 0 && _orderState$options4$.location && !isCustomerMode ? 'search' : 'home'
      });
    }
  }, !isStorePage ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "170px",
    height: "45px",
    src: isHome ? theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logotypeInvert : theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.logotype,
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: "35px",
    height: "45px",
    src: isHome ? theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$logos = _theme$images3.logos) === null || _theme$images3$logos === void 0 ? void 0 : _theme$images3$logos.isotypeInvert : theme === null || theme === void 0 ? void 0 : (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$logos = _theme$images4.logos) === null || _theme$images4$logos === void 0 ? void 0 : _theme$images4$logos.isotype,
    loading: "lazy"
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "170px",
    height: "45px",
    src: isStorePage ? theme === null || theme === void 0 ? void 0 : (_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$logos = _theme$images5.logos) === null || _theme$images5$logos === void 0 ? void 0 : _theme$images5$logos.logotypeInvert : theme === null || theme === void 0 ? void 0 : (_theme$images6 = theme.images) === null || _theme$images6 === void 0 ? void 0 : (_theme$images6$logos = _theme$images6.logos) === null || _theme$images6$logos === void 0 ? void 0 : _theme$images6$logos.logotype,
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: "35px",
    height: "45px",
    src: isStorePage ? theme === null || theme === void 0 ? void 0 : (_theme$images7 = theme.images) === null || _theme$images7 === void 0 ? void 0 : (_theme$images7$logos = _theme$images7.logos) === null || _theme$images7$logos === void 0 ? void 0 : _theme$images7$logos.isotypeInvert : theme === null || theme === void 0 ? void 0 : (_theme$images8 = theme.images) === null || _theme$images8 === void 0 ? void 0 : (_theme$images8$logos = _theme$images8.logos) === null || _theme$images8$logos === void 0 ? void 0 : _theme$images8$logos.isotype,
    loading: "lazy"
  }))), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelecWrapper, {
    isStorePage: isStorePage
  }, /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null)), isShowOrderOptions && /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    className: "left-header"
  }, isCustomerMode && windowSize.width > 450 && /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, {
    isHome: isHome,
    onClick: function onClick(e) {
      return handleClickUserCustomer(e);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_FaUserCircle.default, null), /*#__PURE__*/_react.default.createElement("p", null, userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name, " ", userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname)), /*#__PURE__*/_react.default.createElement("span", {
    style: styles.headCustomer,
    ref: clearCustomer
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    style: styles.clearCustomer
  }))), !(configState !== null && configState !== void 0 && configState.loading) && configTypes.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelecWrapper, {
    isStorePage: isStorePage
  }, /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    configTypes: configTypes
  })), onlineStatus && windowSize.width > 820 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (isPreOrderSetting || (configState === null || configState === void 0 ? void 0 : (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 ? void 0 : (_configState$configs5 = _configState$configs4.preorder_status_enabled) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value) === undefined) && /*#__PURE__*/_react.default.createElement(_MomentPopover.MomentPopover, {
    open: openPopover.moment,
    onClick: function onClick() {
      return handleTogglePopover('moment');
    },
    onClose: function onClose() {
      return handleClosePopover('moment');
    },
    isHome: isHome
  }), /*#__PURE__*/_react.default.createElement(_styles.AddressWrapper, null, /*#__PURE__*/_react.default.createElement(_AddressesPopover.AddressesPopover, {
    auth: auth,
    addressState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.address,
    open: openPopover.addresses,
    onClick: function onClick() {
      return handleTogglePopover('addresses');
    },
    onClose: function onClose() {
      return handleClosePopover('addresses');
    },
    isHome: isHome
  }), isFarAway && /*#__PURE__*/_react.default.createElement(_styles.FarAwayMessage, null, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address'))))))), onlineStatus && /*#__PURE__*/_react.default.createElement(_styles.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.Menu, null, !auth && windowSize.width > 870 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signin'
      });
    },
    name: "signin"
  }, t('SIGN_IN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SIGN_IN) || 'Sign in')), !isHideSignup && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signup'
      });
    },
    highlight: 1,
    name: "signup"
  }, t('SIGN_UP', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SIGN_UP) || 'Sign up'))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, windowSize.width > 768 && /*#__PURE__*/_react.default.createElement(_UserPopover.UserPopover, {
    withLogout: true,
    isCustomerMode: isCustomerMode,
    open: openPopover.user,
    isHome: isHome,
    onClick: function onClick() {
      return handleTogglePopover('user');
    },
    onClose: function onClose() {
      return handleClosePopover('user');
    }
  }), isShowOrderOptions && (windowSize.width > 768 ? /*#__PURE__*/_react.default.createElement(_CartSidebar.CartSidebar, {
    open: openPopover.cart,
    carts: cartsWithProducts,
    onClick: function onClick() {
      return handleTogglePopover('cart');
    },
    onClose: function onClose() {
      return handleClosePopover('cart');
    },
    auth: auth,
    location: location
  }) : /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "cart",
    totalCarts: cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length,
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  })))))), onlineStatus && isShowOrderOptions && (windowSize.width > 768 && windowSize.width <= 820 ? /*#__PURE__*/_react.default.createElement(_styles.SubMenu, null, /*#__PURE__*/_react.default.createElement(_styles.AddressWrapper, null, /*#__PURE__*/_react.default.createElement(_AddressesPopover.AddressesPopover, {
    auth: auth,
    addressState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.address,
    open: openPopover.addresses,
    onClick: function onClick() {
      return handleTogglePopover('addresses');
    },
    onClose: function onClose() {
      return handleClosePopover('addresses');
    },
    isHome: isHome
  }), isFarAway && /*#__PURE__*/_react.default.createElement(_styles.FarAwayMessage, null, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address')))), (isPreOrderSetting || (configState === null || configState === void 0 ? void 0 : (_configState$configs6 = configState.configs) === null || _configState$configs6 === void 0 ? void 0 : (_configState$configs7 = _configState$configs6.preorder_status_enabled) === null || _configState$configs7 === void 0 ? void 0 : _configState$configs7.value) === undefined) && /*#__PURE__*/_react.default.createElement(_MomentPopover.MomentPopover, {
    open: openPopover.moment,
    onClick: function onClick() {
      return handleTogglePopover('moment');
    },
    onClose: function onClose() {
      return handleClosePopover('moment');
    },
    isHome: isHome
  })) : /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
    isStorePage: isStorePage
  }, /*#__PURE__*/_react.default.createElement(_styles.AddressWrapper, null, /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "address",
    addressState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : (_orderState$options7$ = _orderState$options7.address) === null || _orderState$options7$ === void 0 ? void 0 : (_orderState$options7$2 = _orderState$options7$.address) === null || _orderState$options7$2 === void 0 ? void 0 : (_orderState$options7$3 = _orderState$options7$2.split(',')) === null || _orderState$options7$3 === void 0 ? void 0 : _orderState$options7$3[0],
    onClick: function onClick(variant) {
      return openModal(variant);
    },
    isHome: isHome
  }), isFarAway && /*#__PURE__*/_react.default.createElement(_styles.FarAwayMessage, null, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address')))), (isPreOrderSetting || (configState === null || configState === void 0 ? void 0 : (_configState$configs8 = configState.configs) === null || _configState$configs8 === void 0 ? void 0 : (_configState$configs9 = _configState$configs8.preorder_status_enabled) === null || _configState$configs9 === void 0 ? void 0 : _configState$configs9.value) === undefined) && /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "moment",
    momentState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.moment,
    onClick: (configState === null || configState === void 0 ? void 0 : (_configState$configs10 = configState.configs) === null || _configState$configs10 === void 0 ? void 0 : (_configState$configs11 = _configState$configs10.max_days_preorder) === null || _configState$configs11 === void 0 ? void 0 : _configState$configs11.value) === -1 || (configState === null || configState === void 0 ? void 0 : (_configState$configs12 = configState.configs) === null || _configState$configs12 === void 0 ? void 0 : (_configState$configs13 = _configState$configs12.max_days_preorder) === null || _configState$configs13 === void 0 ? void 0 : _configState$configs13.value) === 0 ? null : function (variant) {
      return openModal(variant);
    },
    isHome: isHome
  }))), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t(modalSelected.toUpperCase(), (0, _utils.capitalize)(modalSelected)),
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "70%",
    padding: modalSelected === 'address' ? '20px' : '5px'
  }, modalSelected === 'cart' && /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: cartsWithProducts,
    isOrderStateCarts: !!orderState.carts,
    onClose: function onClose() {
      return setModalIsOpen(false);
    }
  }), modalSelected === 'address' && (auth ? /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    onAccept: function onAccept() {
      return setModalIsOpen(false);
    }
  }) : /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.address) || {},
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    onSaveAddress: function onSaveAddress() {
      return setModalIsOpen(false);
    }
  })), modalSelected === 'moment' && /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, null)), isCustomerMode && customerModalOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: customerModalOpen,
    width: "60%",
    onClose: function onClose() {
      return setCustomerModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.UserEdit, null, !(customerState !== null && customerState !== void 0 && customerState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    userData: customerState === null || customerState === void 0 ? void 0 : customerState.user,
    userId: customerState === null || customerState === void 0 ? void 0 : (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id,
    isCustomerMode: true
  }), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: customerState === null || customerState === void 0 ? void 0 : (_customerState$user3 = customerState.user) === null || _customerState$user3 === void 0 ? void 0 : _customerState$user3.id,
    changeOrderAddressWithDefault: true,
    userCustomerSetup: customerState.user,
    setCustomerModalOpen: setCustomerModalOpen
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('CUSTOMER', 'Customer'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: isCustomerMode && confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
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

exports.Header = Header;
var styles = {
  headCustomer: {
    margin: 0,
    height: 20,
    width: 20,
    backgroundColor: '#CCCCCC',
    borderRadius: '100%',
    marginLeft: 5
  },
  clearCustomer: {
    margin: 0,
    fontSize: 20
  }
};
Header.defaultProps = {
  isShowOrderOptions: true
};