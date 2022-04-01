"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpIcon = exports.SignInIcon = exports.Header = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _styles = require("./styles");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _useOnlineStatus = require("../../../../../hooks/useOnlineStatus");

var _utils = require("../../../../../utils");

var _Modal = require("../../../../../components/Modal");

var _UserDetails = require("../../../../../components/UserDetails");

var _Confirm = require("../../../../../components/Confirm");

var _OrderTypeSelectorHeader = require("../OrderTypeSelectorHeader");

var _LanguageSelector = require("../LanguageSelector");

var _HeaderOption = require("../HeaderOption");

var _UserPopover = require("../UserPopover");

var _CartPopover = require("../CartPopover");

var _CartContent = require("../CartContent");

var _AddressList = require("../AddressList");

var _AddressForm = require("../AddressForm");

var _SidebarMenu = require("../SidebarMenu");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var _configState$configs, _configState$configs$, _customerState$user, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$logos, _theme$images2, _theme$images2$logos, _orderState$options2, _orderState$options2$, _orderState$options2$2, _orderState$options2$3, _theme$defaultLanguag, _theme$defaultLanguag2, _orderState$options3, _orderState$options3$, _orderState$options3$2, _orderState$options3$3, _orderState$options4, _customerState$user2, _customerState$user3, _theme$defaultLanguag3, _theme$defaultLanguag4, _props$afterComponent, _props$afterElements;

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
      deleteUserCustomer = _useCustomer2[1].deleteUserCustomer; // const clearCustomer = useRef(null)


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

  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
    var _cart$products;

    return cart.products && ((_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) > 0;
  }) || null;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var onlineStatus = (0, _useOnlineStatus.useOnlineStatus)();
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isSubmit = _useState12[0],
      setIsSubmit = _useState12[1];

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

    if (isCustomerMode && pathname.includes('/orders')) {
      deleteUserCustomer(true);
      refreshOrderOptions();
    }
  };

  (0, _react.useEffect)(function () {
    events.on('cart_product_added', handleAddProduct);
    return function () {
      return events.off('cart_product_added', handleAddProduct);
    };
  }, [events]);
  (0, _react.useEffect)(function () {
    if (isCustomerMode) {
      setCustomerModalOpen(false);
    }
  }, [customerState === null || customerState === void 0 ? void 0 : (_customerState$user = customerState.user) === null || _customerState$user === void 0 ? void 0 : _customerState$user.address]);
  var history = (0, _reactRouterDom.useHistory)();

  var handleGotoHome = function handleGotoHome() {
    history.push('/home');
  };

  var handleSaveAdress = function handleSaveAdress() {
    setIsSubmit(true);
    setModalIsOpen(false);
  };

  (0, _react.useEffect)(function () {
    var _orderState$options, _orderState$options$a;

    if (orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options$a = _orderState$options.address) !== null && _orderState$options$a !== void 0 && _orderState$options$a.address && isSubmit && isHome) {
      history.push('/search');
    }
  }, [orderState, isSubmit]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Header, {
    home: isHome
  }, /*#__PURE__*/_react.default.createElement(_styles.InnerHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_SidebarMenu.SidebarMenu, {
    auth: auth,
    isHideSignup: isHideSignup,
    userCustomer: userCustomer,
    isCustomerMode: isCustomerMode
  }), /*#__PURE__*/_react.default.createElement(_styles.LogoHeader, {
    onClick: function onClick() {
      return handleGotoHome();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logotype,
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: "35px",
    height: "45px",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.isotype,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.OptionsHeader, null, isShowOrderOptions && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, onlineStatus && windowSize.width > 850 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "address",
    addressState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : (_orderState$options2$2 = _orderState$options2$.address) === null || _orderState$options2$2 === void 0 ? void 0 : (_orderState$options2$3 = _orderState$options2$2.split(',')) === null || _orderState$options2$3 === void 0 ? void 0 : _orderState$options2$3[0],
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypes, null, /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1
  })))))), onlineStatus && /*#__PURE__*/_react.default.createElement(_styles.RightHeader, null, windowSize.width > 1023 && /*#__PURE__*/_react.default.createElement(_styles.Navlinks, null, /*#__PURE__*/_react.default.createElement("a", {
    href: t('ARCHIES_MENU_LINK', 'https://archies.cluvi.co'),
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: window.location.pathname === '/menu' ? 'active' : ''
  }, t('ARCHIES_MENU_TEXT', 'Menu'))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/location"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: window.location.pathname === '/location' ? 'active' : ''
  }, t('ARCHIES_UBICATION_TEXT', 'Location'))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/picoli"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: window.location.pathname === '/picoli' ? 'active' : ''
  }, t('ARCHIES_PICOLI_TEXT ', 'Piccoli'))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/promotions"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: window.location.pathname === '/promotions' ? 'active' : ''
  }, t('ARCHIES_PROMOS_TEXT', 'Promotions'))), /*#__PURE__*/_react.default.createElement("a", {
    href: t('ARCHIES_CONTACT_LINK', 'https://contacto.miexperienciaarchies.com.co'),
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: window.location.pathname === '/contact' ? 'active' : ''
  }, t('ARCHIES_CONTACT_TEXT', 'Contact')))), /*#__PURE__*/_react.default.createElement(_styles.Menu, null, !auth && windowSize.width > 1367 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signin'
      });
    },
    name: "signin"
  }, t('SIGN_IN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SIGN_IN) || 'LogIn')), !isHideSignup && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signup'
      });
    },
    highlight: 1,
    name: "signup"
  }, t('SIGN_UP', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SIGN_UP) || 'Sign Up'))), !auth && windowSize.width > 1023 && windowSize.width < 1367 && /*#__PURE__*/_react.default.createElement(_styles.IconLinks, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signin'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(SignInIcon, null)), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signup'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(SignUpIcon, null))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, windowSize.width > 768 && /*#__PURE__*/_react.default.createElement(_UserPopover.UserPopover, {
    withLogout: true,
    isCustomerMode: isCustomerMode,
    open: openPopover.user,
    onClick: function onClick() {
      return handleTogglePopover('user');
    },
    onClose: function onClose() {
      return handleClosePopover('user');
    }
  }), isShowOrderOptions && (windowSize.width > 768 ? /*#__PURE__*/_react.default.createElement(_CartPopover.CartPopover, {
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
    isCustomerMode: isCustomerMode
  }) : /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "cart",
    totalCarts: cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length,
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  }))), /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null)))), onlineStatus && isShowOrderOptions && windowSize.width <= 850 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SubMenu, null, /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "address",
    addressState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : (_orderState$options3$ = _orderState$options3.address) === null || _orderState$options3$ === void 0 ? void 0 : (_orderState$options3$2 = _orderState$options3$.address) === null || _orderState$options3$2 === void 0 ? void 0 : (_orderState$options3$3 = _orderState$options3$2.split(',')) === null || _orderState$options3$3 === void 0 ? void 0 : _orderState$options3$3[0],
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypes, null, /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1
  })))), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t(modalSelected.toUpperCase(), (0, _utils.capitalize)(modalSelected)),
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "70%",
    padding: "20px"
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
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.address) || {},
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    } // onSaveAddress={() => setModalIsOpen(false)}
    ,
    onSaveAddress: function onSaveAddress() {
      return handleSaveAdress();
    }
  }))), isCustomerMode && customerModalOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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
    title: t('CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.CUSTOMER) || 'Customer'),
    content: confirm.content,
    acceptText: t('ACCEPT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.ACCEPT) || 'Accept'),
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
Header.defaultProps = {
  isShowOrderOptions: true
};

var SignInIcon = function SignInIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    height: "512pt",
    viewBox: "0 0 512 512",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "m512 80v352c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20v40c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-352c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80zm-286.085938 227.800781c-7.839843 7.78125-7.890624 20.445313-.113281 28.285157 3.910157 3.941406 9.054688 5.914062 14.199219 5.914062 5.09375 0 10.1875-1.933594 14.085938-5.800781l45.144531-44.789063c9.523437-9.449218 14.769531-22.023437 14.769531-35.410156s-5.246094-25.960938-14.769531-35.410156l-45.144531-44.789063c-7.839844-7.777343-20.503907-7.730469-28.285157.113281-7.777343 7.839844-7.726562 20.503907.113281 28.28125l32.054688 31.804688h-237.96875c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h237.96875zm0 0"
  }));
};

exports.SignInIcon = SignInIcon;

var SignUpIcon = function SignUpIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M367.57,256.909c-9.839-4.677-19.878-8.706-30.093-12.081C370.56,219.996,392,180.455,392,136C392,61.01,330.991,0,256,0\r c-74.991,0-136,61.01-136,136c0,44.504,21.488,84.084,54.633,108.911c-30.368,9.998-58.863,25.555-83.803,46.069\r c-45.732,37.617-77.529,90.086-89.532,147.743c-3.762,18.066,0.745,36.622,12.363,50.908C25.222,503.847,42.365,512,60.693,512\r H307c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H60.693c-8.538,0-13.689-4.766-15.999-7.606\r c-3.989-4.905-5.533-11.29-4.236-17.519c20.755-99.695,108.691-172.521,210.24-174.977c1.759,0.068,3.526,0.102,5.302,0.102\r c1.793,0,3.578-0.035,5.354-0.104c31.12,0.73,61.05,7.832,89.044,21.14c9.977,4.74,21.907,0.499,26.649-9.478\r C381.789,273.582,377.547,261.651,367.57,256.909z M260.878,231.877c-1.623-0.029-3.249-0.044-4.878-0.044\r c-1.614,0-3.228,0.016-4.84,0.046C200.465,229.35,160,187.312,160,136c0-52.935,43.065-96,96-96s96,43.065,96,96\r C352,187.299,311.555,229.329,260.878,231.877z"
  }))), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M492,397h-55v-55c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v55h-55c-11.046,0-20,8.954-20,20\r c0,11.046,8.954,20,20,20h55v55c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-55h55c11.046,0,20-8.954,20-20\r C512,405.954,503.046,397,492,397z"
  }))));
};

exports.SignUpIcon = SignUpIcon;