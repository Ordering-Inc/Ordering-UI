"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _IosMenu = _interopRequireDefault(require("@meronex/icons/ios/IosMenu"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _AiOutlineLogin = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineLogin"));
var _AiOutlineUserAdd = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineUserAdd"));
var _FaRegAddressCard = _interopRequireDefault(require("@meronex/icons/fa/FaRegAddressCard"));
var _FaRegListAlt = _interopRequireDefault(require("@meronex/icons/fa/FaRegListAlt"));
var _AiOutlineHome = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineHome"));
var _BiWallet = _interopRequireDefault(require("@meronex/icons/bi/BiWallet"));
var _BiStore = _interopRequireDefault(require("@meronex/icons/bi/BiStore"));
var _FaUserCircle = _interopRequireDefault(require("@meronex/icons/fa/FaUserCircle"));
var _BiHelpCircle = _interopRequireDefault(require("@meronex/icons/bi/BiHelpCircle"));
var _SiJsonwebtokens = _interopRequireDefault(require("@meronex/icons/si/SiJsonwebtokens"));
var _BiMessageDetail = _interopRequireDefault(require("@meronex/icons/bi/BiMessageDetail"));
var _BsSearch = _interopRequireDefault(require("@meronex/icons/bs/BsSearch"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _LogoutButton = require("../../../../../components/LogoutButton");
var _Modal = require("../Modal");
var _SignUpForm = require("../SignUpForm");
var _LoginForm = require("../LoginForm");
var _ForgotPasswordForm = require("../ForgotPasswordForm");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SidebarMenu = exports.SidebarMenu = function SidebarMenu(props) {
  var _configs$cash_wallet, _configs$wallet_enabl, _configs$wallet_cash_, _configs$wallet_credi, _configs$advanced_off, _configs$advanced_off2, _theme$bar_menu, _theme$bar_menu2, _theme$bar_menu3, _theme$bar_menu4, _theme$bar_menu5, _theme$bar_menu6, _theme$bar_menu7, _theme$bar_menu8, _theme$bar_menu9, _props$beforeElements, _props$beforeComponen, _options$address2, _options$address3, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _props$afterComponent, _props$afterElements;
  var auth = props.auth,
    isHideSignup = props.isHideSignup,
    userCustomer = props.userCustomer,
    isCustomerMode = props.isCustomerMode,
    notificationState = props.notificationState;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    login = _useSession2[1].login;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    options = _useOrder2[0].options;
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalIsOpen = _useState4[0],
    setModalIsOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    modalPageToShow = _useState6[0],
    setModalPageToShow = _useState6[1];
  var isWalletEnabled = (configs === null || configs === void 0 || (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 || (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && ((configs === null || configs === void 0 || (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1' || (configs === null || configs === void 0 || (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1');
  var isPromotionsEnabled = (configs === null || configs === void 0 || (_configs$advanced_off = configs.advanced_offers_module) === null || _configs$advanced_off === void 0 ? void 0 : _configs$advanced_off.value) === '1' || (configs === null || configs === void 0 || (_configs$advanced_off2 = configs.advanced_offers_module) === null || _configs$advanced_off2 === void 0 ? void 0 : _configs$advanced_off2.value) === true;
  var hideBrowse = theme === null || theme === void 0 || (_theme$bar_menu = theme.bar_menu) === null || _theme$bar_menu === void 0 || (_theme$bar_menu = _theme$bar_menu.components) === null || _theme$bar_menu === void 0 || (_theme$bar_menu = _theme$bar_menu.browse) === null || _theme$bar_menu === void 0 ? void 0 : _theme$bar_menu.hidden;
  var hideOrders = theme === null || theme === void 0 || (_theme$bar_menu2 = theme.bar_menu) === null || _theme$bar_menu2 === void 0 || (_theme$bar_menu2 = _theme$bar_menu2.components) === null || _theme$bar_menu2 === void 0 || (_theme$bar_menu2 = _theme$bar_menu2.orders) === null || _theme$bar_menu2 === void 0 ? void 0 : _theme$bar_menu2.hidden;
  var hideProfile = theme === null || theme === void 0 || (_theme$bar_menu3 = theme.bar_menu) === null || _theme$bar_menu3 === void 0 || (_theme$bar_menu3 = _theme$bar_menu3.components) === null || _theme$bar_menu3 === void 0 || (_theme$bar_menu3 = _theme$bar_menu3.profile) === null || _theme$bar_menu3 === void 0 ? void 0 : _theme$bar_menu3.hidden;
  var hideWallet = theme === null || theme === void 0 || (_theme$bar_menu4 = theme.bar_menu) === null || _theme$bar_menu4 === void 0 || (_theme$bar_menu4 = _theme$bar_menu4.components) === null || _theme$bar_menu4 === void 0 || (_theme$bar_menu4 = _theme$bar_menu4.wallet) === null || _theme$bar_menu4 === void 0 ? void 0 : _theme$bar_menu4.hidden;
  var hideMessages = theme === null || theme === void 0 || (_theme$bar_menu5 = theme.bar_menu) === null || _theme$bar_menu5 === void 0 || (_theme$bar_menu5 = _theme$bar_menu5.components) === null || _theme$bar_menu5 === void 0 || (_theme$bar_menu5 = _theme$bar_menu5.messages) === null || _theme$bar_menu5 === void 0 ? void 0 : _theme$bar_menu5.hidden;
  var hideHelp = theme === null || theme === void 0 || (_theme$bar_menu6 = theme.bar_menu) === null || _theme$bar_menu6 === void 0 || (_theme$bar_menu6 = _theme$bar_menu6.components) === null || _theme$bar_menu6 === void 0 || (_theme$bar_menu6 = _theme$bar_menu6.help) === null || _theme$bar_menu6 === void 0 ? void 0 : _theme$bar_menu6.hidden;
  var hideFavorites = theme === null || theme === void 0 || (_theme$bar_menu7 = theme.bar_menu) === null || _theme$bar_menu7 === void 0 || (_theme$bar_menu7 = _theme$bar_menu7.components) === null || _theme$bar_menu7 === void 0 || (_theme$bar_menu7 = _theme$bar_menu7.favortes) === null || _theme$bar_menu7 === void 0 ? void 0 : _theme$bar_menu7.hidden;
  var hideSession = theme === null || theme === void 0 || (_theme$bar_menu8 = theme.bar_menu) === null || _theme$bar_menu8 === void 0 || (_theme$bar_menu8 = _theme$bar_menu8.components) === null || _theme$bar_menu8 === void 0 || (_theme$bar_menu8 = _theme$bar_menu8.sessions) === null || _theme$bar_menu8 === void 0 ? void 0 : _theme$bar_menu8.hidden;
  var hidePromotions = theme === null || theme === void 0 || (_theme$bar_menu9 = theme.bar_menu) === null || _theme$bar_menu9 === void 0 || (_theme$bar_menu9 = _theme$bar_menu9.components) === null || _theme$bar_menu9 === void 0 || (_theme$bar_menu9 = _theme$bar_menu9.promotions) === null || _theme$bar_menu9 === void 0 ? void 0 : _theme$bar_menu9.hidden;
  var _closeModal = function closeModal() {
    setModalIsOpen(false);
    setModalPageToShow(null);
    actionSidebar(false);
  };
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) {
      _closeModal();
    }
  };
  var handleOpenLoginSignUp = function handleOpenLoginSignUp(index) {
    setModalPageToShow(index);
    setModalIsOpen(true);
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
    actionSidebar(false);
    setIsMenuOpen(false);
  };
  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    document.getElementById('sidebar_menu').style.width = value ? width > 489 ? '340px' : '100vw' : '0';
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
    _closeModal();
  };
  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width <= 489) {
        document.getElementById('sidebar_menu').style.width = '100vh';
      } else {
        document.getElementById('sidebar_menu').style.width = '340px';
      }
    }
  }, [width]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    auth: auth
  }, /*#__PURE__*/_react.default.createElement(_styles.IconContent, {
    "aria-label": "menu",
    onClick: function onClick() {
      return actionSidebar(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_IosMenu.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    id: "sidebar_menu"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuClose, {
    "aria-label": "close",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)), userCustomer && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isCustomer: userCustomer
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: false
  }, /*#__PURE__*/_react.default.createElement(_FaUserCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: false
  }, "".concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name, " ").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      var _options$address;
      return handleGoToPage({
        page: options !== null && options !== void 0 && (_options$address = options.address) !== null && _options$address !== void 0 && _options$address.location ? 'search' : 'home'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/search'
  }, options !== null && options !== void 0 && (_options$address2 = options.address) !== null && _options$address2 !== void 0 && _options$address2.location ? /*#__PURE__*/_react.default.createElement(_BiStore.default, null) : /*#__PURE__*/_react.default.createElement(_AiOutlineHome.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/search'
  }, options !== null && options !== void 0 && (_options$address3 = options.address) !== null && _options$address3 !== void 0 && _options$address3.location ? t('BUSINESSES', 'Businesses') : t('HOME', 'Home'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hideBrowse && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'business_search'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/business_search'
  }, /*#__PURE__*/_react.default.createElement(_BsSearch.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/business_search'
  }, t('BROWSE_SEARCH', 'Browse & Search'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), !isCustomerMode && !hideOrders && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/profile/orders'
  }, /*#__PURE__*/_react.default.createElement(_FaRegListAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/profile/orders'
  }, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), !hideProfile && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'profile'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/profile'
  }, /*#__PURE__*/_react.default.createElement(_FaRegAddressCard.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/profile'
  }, t('VIEW_ACCOUNT', 'View account'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), isWalletEnabled && !hideWallet && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'wallets'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/wallets'
  }, /*#__PURE__*/_react.default.createElement(_BiWallet.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/wallets'
  }, t('WALLETS', 'Wallets'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), isPromotionsEnabled && !hidePromotions && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'promotions'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/promotions'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Tag, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/promotions'
  }, t('PROMOTIONS', 'Promotions'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), !hideMessages && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'messages'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/messages'
  }, /*#__PURE__*/_react.default.createElement(_BiMessageDetail.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/messages'
  }, t('MESSAGES', 'Messages'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), !hideHelp && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'help'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/help'
  }, /*#__PURE__*/_react.default.createElement(_BiHelpCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/help'
  }, t('HELP', 'help'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), !hideSession && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'sessions'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/sessions'
  }, /*#__PURE__*/_react.default.createElement(_SiJsonwebtokens.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/sessions'
  }, t('SESSIONS', 'Sessions'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), !hideFavorites && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'favorite'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/favorite'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/favorite'
  }, t('FAVORITES', 'Favorites'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, {
    onCustomClick: function onCustomClick() {
      return actionSidebar(false);
    }
  })), !auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      handleOpenLoginSignUp('login');
      actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: modalPageToShow === 'login'
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineLogin.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: modalPageToShow === 'login'
  }, t('SIGN_IN', 'Sign in'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), !isHideSignup && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      handleOpenLoginSignUp('signup');
      actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: modalPageToShow === 'signup'
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineUserAdd.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: modalPageToShow === 'signup'
  }, t('SIGNUP', 'Sign up'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))))), modalIsOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return _closeModal();
    },
    width: "50%"
  }, modalPageToShow === 'login' && /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    notificationState: notificationState,
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
    notificationState: notificationState,
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
      return _closeModal();
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
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};