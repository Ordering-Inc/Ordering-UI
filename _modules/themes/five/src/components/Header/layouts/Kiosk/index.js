"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Header = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _styles = require("../../styles");
var _useOnlineStatus = require("../../../../../../../hooks/useOnlineStatus");
var _useWindowSize = require("../../../../../../../hooks/useWindowSize");
var _HeaderOption = require("../../../HeaderOption");
var _Modal = require("../../../Modal");
var _LoginForm = require("../../../LoginForm");
var _Kiosk = require("../../../OrderTypeSelectorContent/layouts/Kiosk");
var _OrderTypeSelectorHeader = require("../../../OrderTypeSelectorHeader");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Header = function Header(props) {
  var _configState$configs, _theme$images, _theme$images2, _theme$images3, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3;
  var isHome = props.isHome;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var theme = (0, _styledComponents.useTheme)();
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalIsOpen = _useState2[0],
    setModalIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    authModalOpen = _useState4[0],
    setAuthModalOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    modalSelected = _useState6[0],
    setModalSelected = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    modalPageToShow = _useState8[0],
    setModalPageToShow = _useState8[1];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var onlineStatus = (0, _useOnlineStatus.useOnlineStatus)();
  var orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru')];
  var excludeTypes = [1];
  // const configTypes = configState?.configs?.order_types_allowed?.value.split('|').map(value => Number(value)).filter(val => !excludeTypes.includes(val)) || []
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return !excludeTypes.includes(Number(value)) && Number(value);
  })) || [];
  var openModal = function openModal(opt) {
    setModalSelected(opt);
    setModalIsOpen(true);
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  var handleCustomModalClick = function handleCustomModalClick(e, _ref) {
    var page = _ref.page;
    e.preventDefault();
    setModalPageToShow(page);
  };
  var closeAuthModal = function closeAuthModal() {
    setAuthModalOpen(false);
    setModalPageToShow(null);
  };
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) {
      closeAuthModal();
    }
  };
  var handleOpenLoginSignUp = function handleOpenLoginSignUp(index) {
    setModalPageToShow(index);
    setAuthModalOpen(true);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Header, {
    style: {
      height: 80
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.InnerHeader, {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LogoHeader, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'home'
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
  }))), /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    className: "left-header"
  }, windowSize.width > 768 ? /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    isFullClick: true,
    containerStyle: {
      margin: 'auto'
    },
    orderTypeList: orderTypeList,
    onClick: function onClick() {
      return openModal('delivery');
    }
  }) : /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "delivery",
    onClick: function onClick(variant) {
      return openModal(variant);
    },
    orderTypeList: orderTypeList
  })), onlineStatus && !auth && windowSize.width > 920 && /*#__PURE__*/_react.default.createElement(_styles.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.Menu, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleOpenLoginSignUp('login');
    },
    style: {
      whiteSpace: 'nowrap'
    },
    name: "signin"
  }, t('LOGIN', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.LOGIN) || 'Login'))))), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "100%",
    customStyle: {
      height: '100%',
      maxHeight: '100vh'
    }
  }, modalSelected === 'delivery' && /*#__PURE__*/_react.default.createElement(_Kiosk.OrderTypeSelectorContent, {
    title: t('PLEASE_SELECT_YOUR_ORDER_TYPE', 'Please select your order type'),
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1
  })), authModalOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: authModalOpen,
    onRemove: function onRemove() {
      return closeAuthModal();
    },
    onClose: function onClose() {
      return closeAuthModal();
    },
    width: "50%",
    authModal: true
  }, modalPageToShow === 'login' && /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    isPopup: true,
    useKioskApp: true,
    useLoginByCellphone: true,
    allowedLevels: [0, 2],
    handleSuccessLogin: handleSuccessLogin,
    elementLinkToSignup: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'signup'
        });
      },
      href: "#"
    }, t('CREATE_ACCOUNT', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.CREATE_ACCOUNT) || 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.RESET_PASSWORD) || 'Reset password'))
  })));
};
exports.Header = Header;
var _default = Header;
exports.default = _default;