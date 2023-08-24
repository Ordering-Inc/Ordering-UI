"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryLoginSpoonity = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _SpinnerLoader = require("../../../../../components/SpinnerLoader");
var _Modal = _interopRequireDefault(require("../Modal"));
var _LoginForm = require("../LoginForm");
var _SignUpForm = require("../SignUpForm");
var _ForgotPasswordForm = require("../ForgotPasswordForm");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var QueryLoginSpoonityUI = function QueryLoginSpoonityUI(props) {
  var _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4;
  var userState = props.userState,
    notificationState = props.notificationState,
    authModalOpen = props.authModalOpen,
    setAuthModalOpen = props.setAuthModalOpen,
    modalPageToShow = props.modalPageToShow,
    setModalPageToShow = props.setModalPageToShow;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    auth = _useSession2[0].auth,
    login = _useSession2[1].login;
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useSite = (0, _orderingComponents.useSite)(),
    _useSite2 = _slicedToArray(_useSite, 1),
    site = _useSite2[0].site;
  var businessUrlTemplate = (site === null || site === void 0 ? void 0 : site.business_url_template) || '/store/:business_slug';
  var closeAuthModal = function closeAuthModal() {
    var _window$location$path;
    setAuthModalOpen(false);
    setModalPageToShow(null);
    var store = (_window$location$path = window.location.pathname.split('/')) === null || _window$location$path === void 0 || (_window$location$path = _window$location$path.filter(function (text) {
      return text !== '' && text !== 'store';
    })) === null || _window$location$path === void 0 ? void 0 : _window$location$path[0];
    if (store) {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        events.emit('go_to_page', {
          page: 'business',
          params: {
            business_slug: store
          }
        });
      } else {
        events.emit('go_to_page', {
          page: 'business',
          search: "?".concat(businessUrlTemplate.split('?')[1].replace(':business_slug', '')).concat(store)
        });
      }
    } else {
      events.emit('go_to_page', {
        page: 'search'
      });
    }
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
  var handleCustomModalClick = function handleCustomModalClick(e, _ref) {
    var page = _ref.page;
    e.preventDefault();
    setModalPageToShow(page);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    content: t('LOADING_DELICIOUS_FOOD', 'Loading Ordering Dashboard...')
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, authModalOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: authModalOpen,
    onRemove: function onRemove() {
      return closeAuthModal();
    },
    onClose: function onClose() {
      return closeAuthModal();
    },
    width: "50%",
    authModal: true,
    closeOnBackdrop: true
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
  }))));
};
var QueryLoginSpoonity = function QueryLoginSpoonity(props) {
  var queryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: QueryLoginSpoonityUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.QueryLoginSpoonity, queryProps);
};
exports.QueryLoginSpoonity = QueryLoginSpoonity;