"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersLateralBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _useWindowSize2 = require("../../../../../../hooks/useWindowSize");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _OrdersManager = require("../OrdersManager");
var _Buttons = require("../../../styles/Buttons");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersLateralBar = function OrdersLateralBar(props) {
  var _theme$images, _theme$images$dummies, _theme$images2, _theme$images2$icons;
  var open = props.open,
    user = props.user,
    business = props.business,
    isDriver = props.isDriver,
    isCustomer = props.isCustomer,
    isBusiness = props.isBusiness;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpand = _useState2[0],
    setIsExpand = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMenuOpen = _useState4[0],
    setIsMenuOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOpenDriverOrderDetails = _useState6[0],
    setIsOpenDriverOrderDetails = _useState6[1];
  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      props.onClose();
    }
    setIsMenuOpen(value);
  };
  var handleCustomOrderDetail = function handleCustomOrderDetail(open) {
    setIsOpenDriverOrderDetails(open);
  };
  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('driver_lateral_bar').style.width = '100vw';
      } else {
        if (isOpenDriverOrderDetails && width >= 1000) {
          document.getElementById('driver_lateral_bar').style.width = '1100px';
        } else {
          document.getElementById('driver_lateral_bar').style.width = '600px';
        }
      }
    }
  };
  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    if (width < 1000) return;
    if (isOpenDriverOrderDetails) {
      document.getElementById('driver_lateral_bar').style.width = '1100px';
    } else {
      toggleMainContent();
    }
  }, [isOpenDriverOrderDetails]);
  var onCloseSidebar = function onCloseSidebar(e) {
    if (e.code === 'Escape') {
      props.onClose() && props.onClose();
    }
  };
  var expandSideBar = function expandSideBar() {
    var element = document.getElementById('driver_lateral_bar');
    if (!element) return;
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    if (!open) return;
    document.addEventListener('keydown', onCloseSidebar);
    return function () {
      return document.removeEventListener('keydown', onCloseSidebar);
    };
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_styles.LateralBarContainer, {
    id: "driver_lateral_bar"
  }, /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CloseButtonWrapper, null, width > 576 && /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return expandSideBar();
    }
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_Buttons.IconButton, {
    color: "black",
    onClick: function onClick() {
      return props.onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), /*#__PURE__*/_react.default.createElement(_styles.Info, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, isBusiness ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_styles.Image, {
    bgimage: optimizeImage((user === null || user === void 0 ? void 0 : user.photo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$icons = _theme$images2.icons) === null || _theme$images2$icons === void 0 ? void 0 : _theme$images2$icons.noDriver), 'h_50,c_limit')
  })), /*#__PURE__*/_react.default.createElement(_styles.Name, null, /*#__PURE__*/_react.default.createElement("p", null, isBusiness ? business.name : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname)), /*#__PURE__*/_react.default.createElement("p", null, isDriver && t('DRIVER', 'Driver'), isCustomer && t('CUSTOMER', 'Customer'), isBusiness && t('BUSINESS', 'Business')))), /*#__PURE__*/_react.default.createElement(_OrdersManager.OrdersManager, {
    isSelectedOrders: true,
    driverId: isDriver ? user.id : null,
    customerId: isCustomer ? user.id : null,
    businessId: isBusiness ? business.id : null,
    handleCustomOrderDetail: handleCustomOrderDetail
  })));
};
exports.OrdersLateralBar = OrdersLateralBar;