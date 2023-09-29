"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NavigationBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _reactRouterDom = require("react-router-dom");
var _orderingComponents = require("ordering-components");
var _BsHouse = _interopRequireDefault(require("@meronex/icons/bs/BsHouse"));
var _BsSearch = _interopRequireDefault(require("@meronex/icons/bs/BsSearch"));
var _AiOutlineShoppingCart = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineShoppingCart"));
var _BsCardChecklist = _interopRequireDefault(require("@meronex/icons/bs/BsCardChecklist"));
var _FaRegUser = _interopRequireDefault(require("@meronex/icons/fa/FaRegUser"));
var _CartContent = require("../CartContent");
var _Modal = require("../Modal");
var _AddressForm = require("../AddressForm");
var _LoginForm = require("../LoginForm");
var _SignUpForm = require("../SignUpForm");
var _ForgotPasswordForm = require("../ForgotPasswordForm");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var NavigationBar = exports.NavigationBar = function NavigationBar() {
  var _orderState$options, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var location = (0, _reactRouterDom.useLocation)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    auth = _useSession2[0].auth,
    login = _useSession2[1].login;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCart = _useState2[0],
    setIsCart = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isAddress = _useState4[0],
    setIsAddress = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    modalPageToShow = _useState6[0],
    setModalPageToShow = _useState6[1];
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
    var _cart$products;
    return cart.products && ((_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) > 0;
  }) || null;
  var handleGoToPage = function handleGoToPage(data) {
    auth ? events.emit('go_to_page', data) : handleOpenLoginSignUp('login');
  };
  var handleChangeExplore = function handleChangeExplore() {
    auth ? handleGoToPage({
      page: 'search'
    }) : setIsAddress(true);
  };
  var handleOpenLoginSignUp = function handleOpenLoginSignUp(index) {
    setModalPageToShow(index);
  };
  var handleCustomModalClick = function handleCustomModalClick(e, _ref) {
    var page = _ref.page;
    e.preventDefault();
    setModalPageToShow(page);
  };
  var closeAuthModal = function closeAuthModal() {
    setModalPageToShow(null);
  };
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) {
      closeAuthModal();
    }
  };
  var handleSuccessSignup = function handleSuccessSignup(user) {
    var _user$session;
    login({
      user: user,
      token: user === null || user === void 0 || (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
  };
  var itemlist = {
    home: {
      key: 'home',
      text: t('HOME', 'Home'),
      active: location.pathname === '/search' || isAddress,
      onClick: handleChangeExplore
    },
    browse: {
      key: 'browse',
      active: location.pathname === '/business_search',
      onClick: function onClick() {
        return handleGoToPage({
          page: 'business_search'
        });
      },
      text: t('EXPLORE', 'Explore')
    },
    cart: {
      key: 'cart',
      active: isCart,
      text: t('MY_CART', 'My cart'),
      onClick: function onClick() {
        return setIsCart(true);
      }
    },
    orders: {
      key: 'orders',
      active: location.pathname === '/profile/orders',
      text: t('ORDERS', 'Orders'),
      onClick: function onClick() {
        return handleGoToPage({
          page: 'orders'
        });
      }
    },
    profile: {
      key: 'profile',
      active: location.pathname === '/profile',
      text: t('PROFILE', 'Profile'),
      onClick: function onClick() {
        return handleGoToPage({
          page: 'profile'
        });
      }
    }
  };
  var getIcon = function getIcon(icon) {
    return icon === 'home' ? /*#__PURE__*/_react.default.createElement(_BsHouse.default, null) : icon === 'browse' ? /*#__PURE__*/_react.default.createElement(_BsSearch.default, null) : icon === 'orders' ? /*#__PURE__*/_react.default.createElement(_BsCardChecklist.default, null) : icon === 'cart' ? /*#__PURE__*/_react.default.createElement(_AiOutlineShoppingCart.default, null) : /*#__PURE__*/_react.default.createElement(_FaRegUser.default, null);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.NavigationBarContainer, null, Object.values(itemlist).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.NavigationLink, {
      key: item.key,
      active: item.active,
      onClick: function onClick() {
        return item.onClick();
      }
    }, getIcon(item.key), /*#__PURE__*/_react.default.createElement("p", null, item.text));
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isCart,
    onClose: function onClose() {
      return setIsCart(false);
    },
    width: "50%"
  }, /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: cartsWithProducts,
    isOrderStateCarts: !!orderState.carts,
    onClose: function onClose() {
      return setIsCart(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isAddress,
    title: t('WHERE_DO_WE_DELIVERY', 'Where do we delivery?'),
    onClose: function onClose() {
      return setIsAddress(false);
    },
    width: "50%"
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address) || {},
    onCancel: function onCancel() {
      return setIsAddress(false);
    },
    onSaveAddress: function onSaveAddress() {
      return setIsAddress(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalPageToShow && !auth,
    onRemove: function onRemove() {
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
    isPopup: true
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
var _default = exports.default = NavigationBar;