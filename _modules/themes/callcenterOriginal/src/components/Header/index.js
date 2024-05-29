"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Header = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _OrderTypeSelectorContent = require("../OrderTypeSelectorContent");
var _LanguageSelector = require("../LanguageSelector");
var _AiOutlineClose = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineClose"));
var _styles = require("./styles");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _useOnlineStatus = require("../../../../../hooks/useOnlineStatus");
var _UserPopover = require("../UserPopover");
var _CartPopover = require("../CartPopover");
var _OrderTypeSelectorHeader = require("../OrderTypeSelectorHeader");
var _CartContent = require("../CartContent");
var _Modal = require("../Modal");
var _MomentContent = require("../MomentContent");
var _AddressList = require("../AddressList");
var _AddressForm = require("../AddressForm");
var _HeaderOption = require("../HeaderOption");
var _SidebarMenu = require("../SidebarMenu");
var _UserDetails = require("../UserDetails");
var _Confirm = require("../Confirm");
var _BusinessPreorder = require("../BusinessPreorder");
var _AdminAreaPopover = require("../AdminAreaPopover");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Header = exports.Header = function Header(props) {
  var _configState$configs, _configState$configs2, _orderState$options, _theme$images, _theme$images2, _theme$images3, _orderState$options3, _configState$configs3, _configState$configs4, _configState$configs5, _orderState$options4, _orderState$options5, _configState$configs6, _theme$defaultLanguag2, _theme$defaultLanguag3, _orderState$options6, _configState$configs7, _orderState$options7, _configState$configs8, _configState$configs9, _orderState$options8, _configState$configs10, _orderState$options9, _configState$configs11, _configState$configs12, _orderState$options10, _customerState$user, _customerState$user2, _theme$defaultLanguag4, _theme$defaultLanguag5;
  var isHome = props.isHome,
    location = props.location,
    isShowOrderOptions = props.isShowOrderOptions,
    isHideSignup = props.isHideSignup,
    isCustomerMode = props.isCustomerMode,
    isShowRedirectButton = props.isShowRedirectButton,
    franchiseId = props.franchiseId;
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    user = _useSession2$.user;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    _useOrder2$ = _useOrder2[1],
    refreshOrderOptions = _useOrder2$.refreshOrderOptions,
    changeType = _useOrder2$.changeType;
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
  var clearCustomer = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalIsOpen = _useState4[0],
    setModalIsOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    customerModalOpen = _useState6[0],
    setCustomerModalOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    modalSelected = _useState8[0],
    setModalSelected = _useState8[1];
  var _useState9 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    confirm = _useState10[0],
    setConfirm = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOpenUserData = _useState12[0],
    setIsOpenUserData = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isAddressFormOpen = _useState14[0],
    setIsAddressFormOpen = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    preorderBusiness = _useState16[0],
    setPreorderBusiness = _useState16[1];
  var _useState17 = (0, _react.useState)({
      open: false,
      result: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    userConfirmPhone = _useState18[0],
    setUserConfirmPhone = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    disabledSms = _useState20[0],
    setDisableSms = _useState20[1];
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
    var _cart$products;
    return cart.products && ((_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) > 0;
  }) || null;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var onlineStatus = (0, _useOnlineStatus.useOnlineStatus)();
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru')];
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isPreOrderSetting = (configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.preorder_status_enabled) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value) === '1';
  var handleClickUserCustomer = function handleClickUserCustomer(e) {
    var _clearCustomer$curren;
    var isActionsClick = (_clearCustomer$curren = clearCustomer.current) === null || _clearCustomer$curren === void 0 ? void 0 : _clearCustomer$curren.contains(e === null || e === void 0 ? void 0 : e.target);
    if (isActionsClick) {
      var _theme$defaultLanguag;
      setConfirm({
        open: true,
        content: t('QUESTION_CLEAR_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.QUESTION_CLEAR_CUSTOMER) || 'Are you sure that you want to clear the customer?'),
        handleOnAccept: function handleOnAccept() {
          deleteUserCustomer(true);
          changeType(1);
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
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
    if (isCustomerMode && pathname.includes('/orders')) {
      deleteUserCustomer(true);
      refreshOrderOptions();
    }
  };
  var handleOpenLoginSignUp = function handleOpenLoginSignUp(page) {
    events.emit('go_to_page', {
      page: 'home'
    });
  };
  var handleClosePreorder = function handleClosePreorder() {
    setPreorderBusiness(null);
  };
  var handleBusinessClick = function handleBusinessClick(business) {
    events.emit('go_to_page', {
      page: 'business',
      params: {
        store: business.slug
      }
    });
  };
  var cutCharactersName = function cutCharactersName(_ref) {
    var str = _ref.str,
      _ref$maxSize = _ref.maxSize,
      maxSize = _ref$maxSize === void 0 ? 8 : _ref$maxSize;
    return str.length <= maxSize ? str : str.slice(0, maxSize) + '...';
  };
  (0, _react.useEffect)(function () {
    if (isCustomerMode) {
      setCustomerModalOpen(false);
    }
  }, [JSON.stringify(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address)]);
  (0, _react.useEffect)(function () {
    var timeout = null;
    if (userConfirmPhone !== null && userConfirmPhone !== void 0 && userConfirmPhone.result) {
      setDisableSms(true);
      timeout = setTimeout(function () {
        setDisableSms(false);
      }, 30000);
    }
    return function () {
      clearTimeout(timeout);
    };
  }, [userConfirmPhone === null || userConfirmPhone === void 0 ? void 0 : userConfirmPhone.result]);
  return /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.InnerHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_SidebarMenu.SidebarMenu, {
    auth: auth,
    isHideSignup: isHideSignup,
    userCustomer: userCustomer,
    isCustomerMode: isCustomerMode
  }), /*#__PURE__*/_react.default.createElement(_styles.LogoHeader, {
    onClick: function onClick() {
      var _orderState$options2;
      return handleGoToPage({
        page: orderState !== null && orderState !== void 0 && (_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && (_orderState$options2 = _orderState$options2.address) !== null && _orderState$options2 !== void 0 && _orderState$options2.location && !isCustomerMode ? 'search' : 'home'
      });
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "170px",
    height: "45px",
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.logos) === null || _theme$images === void 0 ? void 0 : _theme$images.logotype,
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: "35px",
    height: "45px",
    src: isHome ? theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.logos) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.isotypeInvert : theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.logos) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.isotype,
    loading: "lazy"
  }))), isShowOrderOptions && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    className: "left-header",
    id: "center-side"
  }, windowSize.width > 820 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    onClick: function onClick(e) {
      return handleClickUserCustomer(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null), " ", /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, ((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.address) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.address) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.split(',')) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3[0]) || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, {
    onClick: function onClick(e) {
      return handleClickUserCustomer(e);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, windowSize.width > 1200 ? userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name : cutCharactersName({
    str: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name
  }), ' ', windowSize.width > 1200 ? userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname : null)), /*#__PURE__*/_react.default.createElement("span", {
    ref: clearCustomer
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineClose.default, null))), onlineStatus && windowSize.width > 820 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (isPreOrderSetting || (configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.preorder_status_enabled) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === undefined) && /*#__PURE__*/_react.default.createElement(_styles.MomentMenu, {
    onClick: (configState === null || configState === void 0 || (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 || (_configState$configs4 = _configState$configs4.max_days_preorder) === null || _configState$configs4 === void 0 ? void 0 : _configState$configs4.value) === -1 || (configState === null || configState === void 0 || (_configState$configs5 = configState.configs) === null || _configState$configs5 === void 0 || (_configState$configs5 = _configState$configs5.max_days_preorder) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value) === 0 ? null : function () {
      return openModal('moment');
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, (_orderState$options4 = orderState.options) !== null && _orderState$options4 !== void 0 && _orderState$options4.moment ? parseDate((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.moment, {
    outputFormat: configState === null || configState === void 0 || (_configState$configs6 = configState.configs) === null || _configState$configs6 === void 0 || (_configState$configs6 = _configState$configs6.dates_moment_format) === null || _configState$configs6 === void 0 ? void 0 : _configState$configs6.value
  }) : t('ASAP_ABBREVIATION', 'ASAP')))), windowSize.width > 576 && /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    orderTypeList: orderTypeList,
    onClick: function onClick() {
      return openModal('delivery');
    }
  }))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (user === null || user === void 0 ? void 0 : user.level) === 0 && windowSize.width > 1200 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isShowOrderOptions && /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    className: "left-header invisible",
    id: "center-side"
  }), /*#__PURE__*/_react.default.createElement(_AdminAreaPopover.AdminAreaPopover, {
    open: openPopover.admin,
    onClick: function onClick() {
      return handleTogglePopover('admin');
    },
    onClose: function onClose() {
      return handleClosePopover('admin');
    }
  }))), onlineStatus && /*#__PURE__*/_react.default.createElement(_styles.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.Menu, null, isShowRedirectButton && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return window.open("".concat(t('CALL_CENTER_REDIRECT_URL', '#')));
    },
    highlight: 1,
    style: {
      whiteSpace: 'nowrap'
    },
    name: "redirect"
  }, t('CALL_CENTER_REDIRECT_BUTTON', 'Call Center')), !auth && windowSize.width > 920 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleOpenLoginSignUp('login');
    },
    style: {
      whiteSpace: 'nowrap'
    },
    name: "signin"
  }, t('LOGIN', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.LOGIN) || 'Login')), !isHideSignup && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleOpenLoginSignUp('signup');
    },
    highlight: 1,
    style: {
      whiteSpace: 'nowrap'
    },
    name: "signup"
  }, t('SIGN_UP', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.SIGN_UP) || 'Sign up'))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isShowOrderOptions && (windowSize.width > 768 ? /*#__PURE__*/_react.default.createElement(_CartPopover.CartPopover, {
    open: openPopover.cart,
    carts: cartsWithProducts,
    onClick: function onClick() {
      return handleTogglePopover('cart');
    },
    onClose: function onClose() {
      return handleClosePopover('cart');
    },
    auth: auth,
    location: location,
    isCustomerMode: isCustomerMode,
    setPreorderBusiness: setPreorderBusiness
  }) : /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "cart",
    totalCarts: cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length,
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  })), /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null), windowSize.width > 768 && /*#__PURE__*/_react.default.createElement(_UserPopover.UserPopover, {
    withLogout: true,
    isCustomerMode: isCustomerMode,
    open: openPopover.user,
    onClick: function onClick() {
      return handleTogglePopover('user');
    },
    onClose: function onClose() {
      return handleClosePopover('user');
    }
  }))))), onlineStatus && isShowOrderOptions && (windowSize.width > 768 && windowSize.width <= 820 ? /*#__PURE__*/_react.default.createElement(_styles.SubMenu, null, /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    onClick: function onClick() {
      return openModal('address');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null), " ", ((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 || (_orderState$options6 = _orderState$options6.address) === null || _orderState$options6 === void 0 || (_orderState$options6 = _orderState$options6.address) === null || _orderState$options6 === void 0 || (_orderState$options6 = _orderState$options6.split(',')) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6[0]) || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')), !isCustomerMode && (isPreOrderSetting || (configState === null || configState === void 0 || (_configState$configs7 = configState.configs) === null || _configState$configs7 === void 0 || (_configState$configs7 = _configState$configs7.preorder_status_enabled) === null || _configState$configs7 === void 0 ? void 0 : _configState$configs7.value) === undefined) && /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "moment",
    momentState: orderState === null || orderState === void 0 || (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.moment,
    onClick: (configState === null || configState === void 0 || (_configState$configs8 = configState.configs) === null || _configState$configs8 === void 0 || (_configState$configs8 = _configState$configs8.max_days_preorder) === null || _configState$configs8 === void 0 ? void 0 : _configState$configs8.value) === -1 || (configState === null || configState === void 0 || (_configState$configs9 = configState.configs) === null || _configState$configs9 === void 0 || (_configState$configs9 = _configState$configs9.max_days_preorder) === null || _configState$configs9 === void 0 ? void 0 : _configState$configs9.value) === 0 ? null : function (variant) {
      return openModal(variant);
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles.SubMenu, null, /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "address",
    addressState: orderState === null || orderState === void 0 || (_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 || (_orderState$options8 = _orderState$options8.address) === null || _orderState$options8 === void 0 || (_orderState$options8 = _orderState$options8.address) === null || _orderState$options8 === void 0 || (_orderState$options8 = _orderState$options8.split(',')) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8[0],
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  }), !isCustomerMode && (isPreOrderSetting || (configState === null || configState === void 0 || (_configState$configs10 = configState.configs) === null || _configState$configs10 === void 0 || (_configState$configs10 = _configState$configs10.preorder_status_enabled) === null || _configState$configs10 === void 0 ? void 0 : _configState$configs10.value) === undefined) && /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "moment",
    momentState: orderState === null || orderState === void 0 || (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.moment,
    onClick: (configState === null || configState === void 0 || (_configState$configs11 = configState.configs) === null || _configState$configs11 === void 0 || (_configState$configs11 = _configState$configs11.max_days_preorder) === null || _configState$configs11 === void 0 ? void 0 : _configState$configs11.value) === -1 || (configState === null || configState === void 0 || (_configState$configs12 = configState.configs) === null || _configState$configs12 === void 0 || (_configState$configs12 = _configState$configs12.max_days_preorder) === null || _configState$configs12 === void 0 ? void 0 : _configState$configs12.value) === 0 ? null : function (variant) {
      return openModal(variant);
    }
  }))), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: modalSelected === 'address' ? t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?') : null,
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "700px"
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
    address: (orderState === null || orderState === void 0 || (_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.address) || {},
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    onSaveAddress: function onSaveAddress() {
      return setModalIsOpen(false);
    }
  })), modalSelected === 'moment' && /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, {
    onClose: function onClose() {
      return setModalIsOpen(false);
    }
  }), modalSelected === 'delivery' && /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorContent.OrderTypeSelectorContent, {
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1
  })), isCustomerMode && customerModalOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: customerModalOpen,
    width: "80%",
    onClose: function onClose() {
      return setCustomerModalOpen(false);
    },
    padding: "20px",
    hideCloseDefault: true
  }, /*#__PURE__*/_react.default.createElement(_styles.UserEdit, {
    isOpenUserData: isOpenUserData
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isAddressFormOpen: isAddressFormOpen,
    userData: customerState === null || customerState === void 0 ? void 0 : customerState.user,
    userId: customerState === null || customerState === void 0 || (_customerState$user = customerState.user) === null || _customerState$user === void 0 ? void 0 : _customerState$user.id,
    isOpenUserData: isOpenUserData,
    isCustomerMode: true,
    isModal: true,
    setIsOpenUserData: setIsOpenUserData,
    onClose: function onClose() {
      return setCustomerModalOpen(false);
    },
    franchiseId: franchiseId,
    userConfirmPhone: userConfirmPhone,
    setUserConfirmPhone: setUserConfirmPhone
  }), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: customerState === null || customerState === void 0 || (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id,
    changeOrderAddressWithDefault: true,
    userCustomerSetup: customerState.user,
    isOpenUserData: isOpenUserData,
    setCustomerModalOpen: setCustomerModalOpen,
    setIsOpenUserData: setIsOpenUserData,
    setIsAddressFormOpen: setIsAddressFormOpen,
    franchiseId: franchiseId,
    isHeader: true,
    userConfirmPhone: userConfirmPhone,
    setUserConfirmPhone: setUserConfirmPhone,
    disabledSms: disabledSms
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.CUSTOMER) || 'Customer'),
    content: confirm.content,
    acceptText: t('ACCEPT', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.ACCEPT) || 'Accept'),
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
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: !!preorderBusiness,
    width: "760px",
    onClose: function onClose() {
      return handleClosePreorder();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: preorderBusiness,
    handleClick: handleBusinessClick,
    showButton: true
  })));
};
Header.defaultProps = {
  isShowOrderOptions: true
};
var _default = exports.default = Header;