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
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _TiWarningOutline = _interopRequireDefault(require("@meronex/icons/ti/TiWarningOutline"));
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
var _utils = require("../../../../../utils");
var _BusinessPreorder = require("../BusinessPreorder");
var _AdminAreaPopover = require("../AdminAreaPopover");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Header = function Header(props) {
  var _configState$configs, _configState$configs2, _orderState$options, _theme$images, _theme$images2, _theme$images3, _orderState$options3, _configState$configs3, _configState$configs4, _configState$configs5, _orderState$options4, _orderState$options5, _configState$configs6, _theme$defaultLanguag2, _theme$defaultLanguag3, _orderState$options6, _configState$configs7, _orderState$options7, _configState$configs8, _configState$configs9, _orderState$options8, _configState$configs10, _orderState$options9, _configState$configs11, _configState$configs12, _orderState$options10, _customerState$user, _customerState$user2, _theme$defaultLanguag4, _theme$defaultLanguag5;
  var isHome = props.isHome,
    location = props.location,
    isShowOrderOptions = props.isShowOrderOptions,
    isHideSignup = props.isHideSignup,
    isCustomerMode = props.isCustomerMode,
    isShowRedirectButton = props.isShowRedirectButton;
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
  (0, _react.useEffect)(function () {
    if (isCustomerMode) {
      setCustomerModalOpen(false);
    }
  }, [JSON.stringify(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address)]);
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
  }, /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    onClick: function onClick(e) {
      return handleClickUserCustomer(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null), " ", /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, ((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.address) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.address) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.split(',')) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3[0]) || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), isCustomerMode && windowSize.width > 450 && /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, {
    onClick: function onClick(e) {
      return handleClickUserCustomer(e);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name, " ", userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname)), /*#__PURE__*/_react.default.createElement("span", {
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
  })), (user === null || user === void 0 ? void 0 : user.level) === 0 && /*#__PURE__*/_react.default.createElement(_AdminAreaPopover.AdminAreaPopover, {
    withLogout: true,
    isCustomerMode: isCustomerMode,
    open: openPopover.admin,
    onClick: function onClick() {
      return handleTogglePopover('admin');
    },
    onClose: function onClose() {
      return handleClosePopover('admin');
    }
  })), onlineStatus && /*#__PURE__*/_react.default.createElement(_styles.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.Menu, null, isShowRedirectButton && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
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
    }
  }), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: customerState === null || customerState === void 0 || (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id,
    changeOrderAddressWithDefault: true,
    userCustomerSetup: customerState.user,
    isOpenUserData: isOpenUserData,
    setCustomerModalOpen: setCustomerModalOpen,
    setIsOpenUserData: setIsOpenUserData,
    setIsAddressFormOpen: setIsAddressFormOpen,
    isHeader: true
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
exports.Header = Header;
Header.defaultProps = {
  isShowOrderOptions: true
};