"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPopover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _reactPopper = require("react-popper");

var _styles = require("./styles");

var _style = require("../../../../../components/Dropdown/style");

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _utils = require("../../../../../utils");

var _AiOutlineMenu = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineMenu"));

var _EnChevronSmallDown = _interopRequireDefault(require("@meronex/icons/en/EnChevronSmallDown"));

var _styledComponents = require("styled-components");

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

var UserPopover = function UserPopover(props) {
  var _configs$cash_wallet, _configs$wallet_enabl, _configs$wallet_cash_, _configs$wallet_credi, _configs$advanced_off, _configs$advanced_off2, _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _orderingTheme$theme$5, _theme$general, _theme$general$compon, _theme$general$compon2, _theme$layouts, _theme$layouts$header, _theme$layouts$header2, _theme$layouts$header3, _theme$layouts$header4, _theme$layouts$header5, _theme$layouts$header6, _props$beforeElements, _props$beforeComponen, _sessionState$user, _sessionState$user2, _sessionState$user3, _sessionState$user4, _props$afterComponent, _props$afterElements;

  var open = props.open,
      isHome = props.isHome,
      optionsList = props.optionsList,
      withLogout = props.withLogout,
      isCustomerMode = props.isCustomerMode;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      sessionState = _useSession2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
      _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
      orderingTheme = _useOrderingTheme2[0];

  var theme = (0, _styledComponents.useTheme)();
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)();
  var isWalletEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 ? void 0 : (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && ((configs === null || configs === void 0 ? void 0 : (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1' || (configs === null || configs === void 0 ? void 0 : (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1');
  var isPromotionsEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$advanced_off = configs.advanced_offers_module) === null || _configs$advanced_off === void 0 ? void 0 : _configs$advanced_off.value) === '1' || (configs === null || configs === void 0 ? void 0 : (_configs$advanced_off2 = configs.advanced_offers_module) === null || _configs$advanced_off2 === void 0 ? void 0 : _configs$advanced_off2.value) === true;
  var isAddressListNewPage = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.profile) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.address_list) === null || _orderingTheme$theme$3 === void 0 ? void 0 : (_orderingTheme$theme$4 = _orderingTheme$theme$3.components) === null || _orderingTheme$theme$4 === void 0 ? void 0 : (_orderingTheme$theme$5 = _orderingTheme$theme$4.layout) === null || _orderingTheme$theme$5 === void 0 ? void 0 : _orderingTheme$theme$5.position) === 'new_page';
  var pfchangs = (theme === null || theme === void 0 ? void 0 : (_theme$general = theme.general) === null || _theme$general === void 0 ? void 0 : (_theme$general$compon = _theme$general.components) === null || _theme$general$compon === void 0 ? void 0 : (_theme$general$compon2 = _theme$general$compon.layout) === null || _theme$general$compon2 === void 0 ? void 0 : _theme$general$compon2.type) === 'pfchangs';
  var loginSignupIcon = theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$header = _theme$layouts.header) === null || _theme$layouts$header === void 0 ? void 0 : (_theme$layouts$header2 = _theme$layouts$header.components) === null || _theme$layouts$header2 === void 0 ? void 0 : (_theme$layouts$header3 = _theme$layouts$header2.login_signup) === null || _theme$layouts$header3 === void 0 ? void 0 : (_theme$layouts$header4 = _theme$layouts$header3.components) === null || _theme$layouts$header4 === void 0 ? void 0 : (_theme$layouts$header5 = _theme$layouts$header4.icon) === null || _theme$layouts$header5 === void 0 ? void 0 : (_theme$layouts$header6 = _theme$layouts$header5.components) === null || _theme$layouts$header6 === void 0 ? void 0 : _theme$layouts$header6.image;
  var optionsDefault = [{
    name: 'search',
    pathname: '/explore',
    displayName: 'My home',
    key: 'my_home',
    isActive: !pfchangs
  }, {
    name: pfchangs ? 'home' : 'business_search',
    pathname: pfchangs ? '/' : '/business_search',
    displayName: 'Browse & Search',
    key: 'browse_search',
    isActive: true
  }, {
    name: 'orders',
    pathname: '/profile/orders',
    displayName: 'orders',
    key: 'orders',
    isActive: true
  }];
  var extraOptions = [{
    name: 'profile',
    pathname: '/profile',
    displayName: 'view account',
    key: 'view_account',
    isActive: true
  }, {
    name: 'wallets',
    pathname: '/wallets',
    displayName: 'wallets',
    key: 'wallets',
    isActive: isWalletEnabled && !isCustomerMode
  }, {
    name: 'promotions',
    pathname: '/promotions',
    displayName: 'promotions',
    key: 'promotions',
    isActive: isPromotionsEnabled && !pfchangs
  }, {
    name: 'messages',
    pathname: '/messages',
    displayName: 'messages',
    key: 'messages',
    isActive: !isCustomerMode && !pfchangs
  }, {
    name: 'help',
    pathname: '/help',
    displayName: 'help',
    key: 'help',
    isActive: true && !pfchangs
  }, {
    name: 'sessions',
    pathname: '/sessions',
    displayName: 'sessions',
    key: 'sessions',
    isActive: true
  }, {
    name: 'favorite',
    pathname: '/favorite',
    displayName: 'favorites',
    key: 'favorites',
    isActive: !pfchangs
  }, {
    name: 'addresses',
    pathname: '/profile/addresses',
    displayName: 'places',
    key: 'places',
    isActive: isAddressListNewPage
  }];
  var options = isCustomerMode ? optionsDefault.filter(function (option) {
    return option.name === 'profile';
  }) : optionsList || optionsDefault.filter(function (option) {
    return option.isActive;
  });
  var popper = (0, _reactPopper.usePopper)(referenceElement.current, popperElement.current, {
    placement: 'auto',
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement.current
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 12]
      }
    }]
  });
  var styles = popper.styles,
      attributes = popper.attributes;
  (0, _react.useEffect)(function () {// forceUpdate && forceUpdate()
  }, [open, sessionState]);

  var handleClickOutside = function handleClickOutside(e) {
    var _popperElement$curren, _referenceElement$cur;

    if (!open) return;
    var outsidePopover = !((_popperElement$curren = popperElement.current) !== null && _popperElement$curren !== void 0 && _popperElement$curren.contains(e.target));
    var outsidePopoverMenu = !((_referenceElement$cur = referenceElement.current) !== null && _referenceElement$cur !== void 0 && _referenceElement$cur.contains(e.target));

    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose();
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      props.onClose && props.onClose();
    }
  };

  var handleGoToPage = function handleGoToPage(page) {
    events.emit('go_to_page', {
      page: page
    });
    props.onClick && props.onClick();
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  var popStyle = _objectSpread(_objectSpread({}, styles.popper), {}, {
    visibility: open ? 'visible' : 'hidden',
    minWidth: '150px'
  });

  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)';
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    isPhoto: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.photo,
    isHome: isHome,
    ref: referenceElement,
    isOpen: open,
    onClick: props.onClick
  }, pfchangs ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UserImgWrapper, null, /*#__PURE__*/_react.default.createElement(_style.DropDownCircleImage, {
    fallback: /*#__PURE__*/_react.default.createElement("img", {
      alt: "login-icon",
      width: "28px",
      height: "28px",
      src: loginSignupIcon,
      loading: "lazy"
    })
  })), /*#__PURE__*/_react.default.createElement("p", null, t('HI', 'Hi'), ", ", (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.name), /*#__PURE__*/_react.default.createElement(_EnChevronSmallDown.default, {
    width: 20,
    height: 20
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_AiOutlineMenu.default, {
    className: "menu-list"
  }), /*#__PURE__*/_react.default.createElement(_styles.UserImgWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.RoundMark, null), /*#__PURE__*/_react.default.createElement(_style.DropDownCircleImage, {
    src: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user3 = sessionState.user) === null || _sessionState$user3 === void 0 ? void 0 : _sessionState$user3.photo,
    fallback: pfchangs ? /*#__PURE__*/_react.default.createElement("img", {
      alt: "login-icon",
      width: "40px",
      height: "40px",
      src: loginSignupIcon,
      loading: "lazy"
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  })))), /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, _extends({
    ref: popperElement,
    style: popStyle
  }, attributes.popper), pfchangs && /*#__PURE__*/_react.default.createElement("h1", null, t('HI', 'Hi'), ", ", (_sessionState$user4 = sessionState.user) === null || _sessionState$user4 === void 0 ? void 0 : _sessionState$user4.name), /*#__PURE__*/_react.default.createElement(_styles.PopoverList, null, options && options.length > 0 && options.map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.PopoverListLink, {
      key: i,
      active: window.location.pathname === option.pathname,
      onClick: function onClick() {
        return handleGoToPage(option.name);
      }
    }, t((option.key || option.name).toUpperCase(), (0, _utils.capitalize)(option.displayName || option.name)));
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.ExtraOptions, null, extraOptions && extraOptions.length > 0 && extraOptions.map(function (option, i) {
    return option.isActive && /*#__PURE__*/_react.default.createElement(_styles.PopoverListLink, {
      key: i,
      active: window.location.pathname === option.pathname,
      onClick: function onClick() {
        return handleGoToPage(option.name);
      }
    }, t((option.key || option.name).toUpperCase(), (0, _utils.capitalize)(option.displayName || option.name)));
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), withLogout && /*#__PURE__*/_react.default.createElement(PopoverListItemLogout, {
    onClose: props.onClose
  })))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.UserPopover = UserPopover;

var LogoutActionUI = function LogoutActionUI(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var _useCustomer = (0, _orderingComponents.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 2),
      deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;

  var handleClick = function handleClick() {
    var _window, _window$gapi, _window$gapi$auth;

    var GoogleAuth = (_window = window) === null || _window === void 0 ? void 0 : (_window$gapi = _window.gapi) === null || _window$gapi === void 0 ? void 0 : (_window$gapi$auth = _window$gapi.auth2) === null || _window$gapi$auth === void 0 ? void 0 : _window$gapi$auth.getAuthInstance();

    if (GoogleAuth) {
      var signedIn = GoogleAuth.isSignedIn.get();

      if (signedIn) {
        GoogleAuth.signOut().then(function () {
          GoogleAuth.disconnect();
        });
      }
    }

    deleteUserCustomer(true);
    props.handleLogoutClick();
    props.onClose && props.onClose();
  };

  return /*#__PURE__*/_react.default.createElement(_styles.PopoverListItem, {
    onClick: handleClick
  }, t('LOGOUT', 'Logout'));
};

var PopoverListItemLogout = function PopoverListItemLogout(props) {
  var logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  };
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LogoutAction, logoutActionProps);
};