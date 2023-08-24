"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PurchaseGiftCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _Buttons = require("../../../styles/Buttons");
var _RiRadioButtonFill = _interopRequireDefault(require("@meronex/icons/ri/RiRadioButtonFill"));
var _MdRadioButtonUnchecked = _interopRequireDefault(require("@meronex/icons/md/MdRadioButtonUnchecked"));
var _NotFoundSource = require("../../NotFoundSource");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PurchaseGiftCardUI = function PurchaseGiftCardUI(props) {
  var productsListState = props.productsListState,
    selectedProduct = props.selectedProduct,
    setSelectedProduct = props.setSelectedProduct,
    handleAccept = props.handleAccept;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PURCHASE_GIFT_CARD', 'Purchase gift card')), /*#__PURE__*/_react.default.createElement(_styles.GiftCardsListContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('SELECT_ONE_OPTION', 'Select one option')), /*#__PURE__*/_react.default.createElement(_styles.GiftCardsWrapper, null, productsListState.loading && _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.GiftCardItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.IconControl, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    })), /*#__PURE__*/_react.default.createElement(_styles.CardImageStyled, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 38,
      height: 38
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }));
  }), productsListState.products.map(function (product) {
    var _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles.GiftCardItem, {
      key: product.id,
      onClick: function onClick() {
        return setSelectedProduct(product);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.IconControl, null, (selectedProduct === null || selectedProduct === void 0 ? void 0 : selectedProduct.id) === product.id ? /*#__PURE__*/_react.default.createElement(_RiRadioButtonFill.default, null) : /*#__PURE__*/_react.default.createElement(_MdRadioButtonUnchecked.default, {
      disabled: true
    })), /*#__PURE__*/_react.default.createElement(_styles.CardImage, {
      bgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.image) || (theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product), 'h_86,c_limit')
    }), /*#__PURE__*/_react.default.createElement("span", null, product.name));
  }), !productsListState.loading && productsListState.products.length === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, null))), /*#__PURE__*/_react.default.createElement(_styles.ActionButtonContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "primary",
    disabled: !selectedProduct,
    onClick: function onClick() {
      return handleAccept();
    }
  }, t('ACCEPT', 'Accept'))));
};
var PurchaseGiftCard = function PurchaseGiftCard(props) {
  var purchaseGiftCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PurchaseGiftCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PurchaseGiftCard, purchaseGiftCardProps);
};
exports.PurchaseGiftCard = PurchaseGiftCard;