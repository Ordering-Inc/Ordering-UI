"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _IosMenu = _interopRequireDefault(require("@meronex/icons/ios/IosMenu"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _FaRegAddressCard = _interopRequireDefault(require("@meronex/icons/fa/FaRegAddressCard"));
var _FaRegListAlt = _interopRequireDefault(require("@meronex/icons/fa/FaRegListAlt"));
var _AiOutlineHome = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineHome"));
var _BiStore = _interopRequireDefault(require("@meronex/icons/bi/BiStore"));
var _FaUserCircle = _interopRequireDefault(require("@meronex/icons/fa/FaUserCircle"));
var _orderingComponents = require("ordering-components");
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _utils = require("../../../../../utils");
var _MomentContent = require("../../../../../components/MomentContent");
var _Buttons = require("../../../../../styles/Buttons");
var _OrderTypeSelectorHeader = require("../OrderTypeSelectorHeader");
var _LogoutButton = require("../LogoutButton");
var _HeaderOption = require("../HeaderOption");
var _Modal = require("../Modal");
var _AddressForm = require("../AddressForm");
var _AddressList = require("../AddressList");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SidebarMenu = function SidebarMenu(props) {
  var _configState$configs, _props$beforeElements, _props$beforeComponen, _options$address2, _options$address3, _options$address4, _configState$configs2, _configState$configs3, _theme$defaultLanguag, _theme$defaultLanguag2, _props$afterComponent, _props$afterElements;
  var auth = props.auth,
    isHideSignup = props.isHideSignup,
    userCustomer = props.userCustomer,
    isCustomerMode = props.isCustomerMode;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    options = _useOrder2[0].options;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalIsOpen = _useState4[0],
    setModalIsOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    sideBackOver = _useState6[0],
    setSideBackOver = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    modalSelected = _useState8[0],
    setModalSelected = _useState8[1];
  var theme = (0, _styledComponents.useTheme)();
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
    actionSidebar(false);
    setIsMenuOpen(false);
  };
  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    setSideBackOver(value);
    document.getElementById('sidebar_menu').style.width = value ? width > 489 ? '340px' : '87vw' : '0';
    if (value) {
      var x = document.getElementsByTagName('BODY')[0];
      x.style.overflow = 'hidden';
    } else {
      var _x2 = document.getElementsByTagName('BODY')[0];
      _x2.style.overflow = 'unset';
    }
  };
  var openModal = function openModal(opt) {
    setModalSelected(opt);
    setModalIsOpen(true);
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
    "aria-label": "menu"
  }, isMenuOpen ? /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }) : /*#__PURE__*/_react.default.createElement(_IosMenu.default, {
    onClick: function onClick() {
      return actionSidebar(true);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    id: "sidebar_menu"
  }, userCustomer && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isCustomer: userCustomer
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: false
  }, /*#__PURE__*/_react.default.createElement(_FaUserCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: false
  }, "".concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name, " ").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
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
  }, options !== null && options !== void 0 && (_options$address3 = options.address) !== null && _options$address3 !== void 0 && _options$address3.location ? t('BUSINESSES', 'Businesses') : t('HOME', 'Home'))))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'profile'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/profile'
  }, /*#__PURE__*/_react.default.createElement(_FaRegAddressCard.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/profile'
  }, t('PROFILE', 'Profile'))))), !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    active: window.location.pathname === '/profile/orders'
  }, /*#__PURE__*/_react.default.createElement(_FaRegListAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    active: window.location.pathname === '/profile/orders'
  }, t('ORDERS', 'Orders')))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, null, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1
  })), /*#__PURE__*/_react.default.createElement(_styles.Hr, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    style: {
      marginTop: '25px'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "address",
    addressState: options === null || options === void 0 || (_options$address4 = options.address) === null || _options$address4 === void 0 || (_options$address4 = _options$address4.address) === null || _options$address4 === void 0 || (_options$address4 = _options$address4.split(',')) === null || _options$address4 === void 0 ? void 0 : _options$address4[0],
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, null, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "moment",
    momentState: options === null || options === void 0 ? void 0 : options.moment,
    onClick: (configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.max_days_preorder) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value) === -1 || (configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.max_days_preorder) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === 0 ? null : function (variant) {
      return openModal(variant);
    }
  }))), auth && /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, {
    onCustomClick: function onCustomClick() {
      return actionSidebar(false);
    },
    inSide: "SideMenu"
  }), !auth && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    style: {
      marginTop: '25px'
    }
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "secundary",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signin'
      });
    },
    name: "signin"
  }, t((theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SIGN_IN) || 'Sign in')), !isHideSignup && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signup'
      });
    },
    highlight: 1,
    name: "signup"
  }, t((theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SIGN_UP) || 'Join now')))), sideBackOver && /*#__PURE__*/_react.default.createElement(_styles.SideBarOver, {
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t(modalSelected.toUpperCase(), (0, _utils.capitalize)(modalSelected)),
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "70%",
    padding: modalSelected === 'address' ? '15px' : '5px'
  }, modalSelected === 'address' && (auth ? /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
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
    address: (options === null || options === void 0 ? void 0 : options.address) || {},
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    onSaveAddress: function onSaveAddress() {
      return setModalIsOpen(false);
    }
  })), modalSelected === 'moment' && /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, null))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.SidebarMenu = SidebarMenu;