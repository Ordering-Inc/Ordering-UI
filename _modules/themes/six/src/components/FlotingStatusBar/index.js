"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlotingStatusBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FlotingStatusBar = function FlotingStatusBar(props) {
  var _currentCart$products, _currentCart$products2, _currentCart$products3;
  var currentCart = props.currentCart,
    goToCart = props.goToCart,
    businessName = props.businessName;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    newCartItem = _useState2[0],
    setNewCartItem = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    addNotify = _useState4[0],
    setAddNotify = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    currentProductName = _useState6[0],
    setCurrentProductName = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    currnetProductImage = _useState8[0],
    setCurrnetProductImage = _useState8[1];
  var handleAddProduct = function handleAddProduct(product, cart) {
    setCurrentProductName(product.name);
    setCurrnetProductImage(cart.products[0].images);
    setNewCartItem(true);
    setAddNotify(true);
    setTimeout(function () {
      setNewCartItem(false);
    }, 3000);
    setTimeout(function () {
      setAddNotify(false);
    }, 5000);
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  (0, _react.useEffect)(function () {
    events.on('cart_product_added', handleAddProduct);
    return function () {
      return events.off('cart_product_added', handleAddProduct);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.StatusFloting, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessPicker, null, /*#__PURE__*/_react.default.createElement(_styles.PickerTitle, null, t('STORE', 'Store'), ' ', ' : '), /*#__PURE__*/_react.default.createElement(_styles.SelectStore, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'search'
      });
    }
  }, !businessName ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('SELECT_STORE', 'Select Store')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessName), /*#__PURE__*/_react.default.createElement(_MdClose.default, null))), /*#__PURE__*/_react.default.createElement(_styles.CartStates, {
    onClick: goToCart
  }, ((_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("svg", {
    width: "28",
    height: "30",
    viewBox: "0 0 28 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 1.875C15.2432 1.875 16.4355 2.36886 17.3146 3.24794C18.1936 4.12701 18.6875 5.3193 18.6875 6.5625V7.5H9.3125V6.5625C9.3125 5.3193 9.80636 4.12701 10.6854 3.24794C11.5645 2.36886 12.7568 1.875 14 1.875ZM20.5625 7.5V6.5625C20.5625 4.82202 19.8711 3.15282 18.6404 1.92211C17.4097 0.691404 15.7405 0 14 0C12.2595 0 10.5903 0.691404 9.35961 1.92211C8.1289 3.15282 7.4375 4.82202 7.4375 6.5625V7.5H0.875V26.25C0.875 27.2446 1.27009 28.1984 1.97335 28.9016C2.67661 29.6049 3.63044 30 4.625 30H23.375C24.3696 30 25.3234 29.6049 26.0266 28.9016C26.7299 28.1984 27.125 27.2446 27.125 26.25V7.5H20.5625Z",
    fill: "#00A862"
  })), /*#__PURE__*/_react.default.createElement(_styles.CartCount, null, ((_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.length) > 0 && ((_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.length)), newCartItem && /*#__PURE__*/_react.default.createElement(_styles.CounterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Counter, null, /*#__PURE__*/_react.default.createElement(_styles.OutsideShape, null, /*#__PURE__*/_react.default.createElement(_styles.RotateShape, null, /*#__PURE__*/_react.default.createElement(_styles.Shape, null, /*#__PURE__*/_react.default.createElement(_styles.BaseShape, null, /*#__PURE__*/_react.default.createElement("img", {
    src: currnetProductImage,
    role: "presentation"
  })))))))) : /*#__PURE__*/_react.default.createElement("svg", {
    width: "28",
    height: "30",
    viewBox: "0 0 28 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14 1.875C15.2432 1.875 16.4355 2.36886 17.3146 3.24794C18.1936 4.12701 18.6875 5.3193 18.6875 6.5625V7.5H9.3125V6.5625C9.3125 5.3193 9.80636 4.12701 10.6854 3.24794C11.5645 2.36886 12.7568 1.875 14 1.875ZM20.5625 7.5V6.5625C20.5625 4.82202 19.8711 3.15282 18.6404 1.92211C17.4097 0.691404 15.7405 0 14 0C12.2595 0 10.5903 0.691404 9.35961 1.92211C8.1289 3.15282 7.4375 4.82202 7.4375 6.5625V7.5H0.875V26.25C0.875 27.2446 1.27009 28.1984 1.97335 28.9016C2.67661 29.6049 3.63044 30 4.625 30H23.375C24.3696 30 25.3234 29.6049 26.0266 28.9016C26.7299 28.1984 27.125 27.2446 27.125 26.25V7.5H20.5625ZM2.75 9.375H25.25V26.25C25.25 26.7473 25.0525 27.2242 24.7008 27.5758C24.3492 27.9275 23.8723 28.125 23.375 28.125H4.625C4.12772 28.125 3.65081 27.9275 3.29917 27.5758C2.94754 27.2242 2.75 26.7473 2.75 26.25V9.375Z",
    fill: "white"
  }))), addNotify && /*#__PURE__*/_react.default.createElement(_styles.NotifyTost, null, /*#__PURE__*/_react.default.createElement(_styles.NotifyContent, null, currentProductName !== '' ? currentProductName : 'Product', "\xA0", t('CART_NOTIFY', 'added successfully'), /*#__PURE__*/_react.default.createElement(_MdClose.default, null))));
};
exports.FlotingStatusBar = FlotingStatusBar;