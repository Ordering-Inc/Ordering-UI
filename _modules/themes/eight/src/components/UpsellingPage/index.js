"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpsellingPage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Modal = require("../../../../../components/Modal");
var _AutoScroll = require("../AutoScroll");
var _ProductForm = require("../ProductForm");
var _styles = require("../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UpsellingPageUI = function UpsellingPageUI(props) {
  var _upsellingProducts$pr3;
  var upsellingProducts = props.upsellingProducts,
    handleUpsellingPage = props.handleUpsellingPage,
    openUpselling = props.openUpselling,
    canOpenUpselling = props.canOpenUpselling,
    setCanOpenUpselling = props.setCanOpenUpselling,
    business = props.business,
    isCustomMode = props.isCustomMode,
    setOpenUpselling = props.setOpenUpselling;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    actualProduct = _useState2[0],
    setActualProduct = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalIsOpen = _useState4[0],
    setModalIsOpen = _useState4[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  (0, _react.useEffect)(function () {
    if (!isCustomMode) {
      var _upsellingProducts$pr, _upsellingProducts$pr2;
      if (upsellingProducts !== null && upsellingProducts !== void 0 && (_upsellingProducts$pr = upsellingProducts.products) !== null && _upsellingProducts$pr !== void 0 && _upsellingProducts$pr.length && !upsellingProducts.loading) {
        setCanOpenUpselling && setCanOpenUpselling(true);
      } else if (!(upsellingProducts !== null && upsellingProducts !== void 0 && (_upsellingProducts$pr2 = upsellingProducts.products) !== null && _upsellingProducts$pr2 !== void 0 && _upsellingProducts$pr2.length) && !upsellingProducts.loading && !canOpenUpselling && openUpselling) {
        handleUpsellingPage();
      }
      if (!upsellingProducts.loading && (upsellingProducts === null || upsellingProducts === void 0 ? void 0 : upsellingProducts.products.length) === 0) {
        setCanOpenUpselling && setCanOpenUpselling(false);
        setOpenUpselling && setOpenUpselling(false);
      }
    }
  }, [upsellingProducts.loading, upsellingProducts === null || upsellingProducts === void 0 ? void 0 : upsellingProducts.products.length]);
  var handleFormProduct = function handleFormProduct(product) {
    setActualProduct(product);
    setModalIsOpen(true);
  };
  var handleSaveProduct = function handleSaveProduct() {
    setActualProduct(null);
    setModalIsOpen(false);
  };
  var UpsellingLayout = function UpsellingLayout() {
    var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, BeforeElement);
    }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
      return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
        key: i
      }, props));
    }), /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.UpsellingContainer, {
      isCustomMode: isCustomMode
    }, isCustomMode ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (upsellingProducts === null || upsellingProducts === void 0 ? void 0 : upsellingProducts.products.length) > 0 && /*#__PURE__*/_react.default.createElement("h1", null, t('WANT_SOMETHING_ELSE', 'Do you want something else?')), /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, !upsellingProducts.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !upsellingProducts.error ? upsellingProducts.products.map(function (product, i) {
      return /*#__PURE__*/_react.default.createElement(_styles2.Item, {
        key: product.id,
        name: product.name,
        isCustomMode: true
      }, /*#__PURE__*/_react.default.createElement(_styles2.Image, null, /*#__PURE__*/_react.default.createElement("img", {
        src: product.images,
        alt: "product-".concat(i),
        width: "150px",
        height: "150px",
        loading: "lazy"
      }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
        color: "primaryGradient",
        onClick: function onClick() {
          return handleFormProduct(product);
        }
      }, t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_styles2.Details, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
        title: product.name
      }, product.name)), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(product.price))));
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, upsellingProducts.message)) : _toConsumableArray(Array(8)).map(function (item, i) {
      return /*#__PURE__*/_react.default.createElement(_styles2.SkeletonContainer, {
        key: i
      }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        width: 300,
        height: 100
      }));
    }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !upsellingProducts.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !upsellingProducts.error ? upsellingProducts.products.map(function (product, i) {
      return /*#__PURE__*/_react.default.createElement(_styles2.Item, {
        key: product.id,
        name: product.name
      }, /*#__PURE__*/_react.default.createElement(_styles2.Image, null, /*#__PURE__*/_react.default.createElement("img", {
        src: product.images,
        alt: "product-".concat(i),
        width: "150px",
        height: "150px",
        loading: "lazy"
      }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
        color: "primaryGradient",
        onClick: function onClick() {
          return handleFormProduct(product);
        }
      }, t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_styles2.Details, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
        title: product.name
      }, product.name)), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(product.price))));
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, upsellingProducts.message)) : _toConsumableArray(Array(8)).map(function (item, i) {
      return /*#__PURE__*/_react.default.createElement(_styles2.SkeletonContainer, {
        key: i
      }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        width: 150,
        height: 250
      }));
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isCustomMode ? /*#__PURE__*/_react.default.createElement(UpsellingLayout, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !canOpenUpselling || (upsellingProducts === null || upsellingProducts === void 0 ? void 0 : (_upsellingProducts$pr3 = upsellingProducts.products) === null || _upsellingProducts$pr3 === void 0 ? void 0 : _upsellingProducts$pr3.length) === 0 ? '' : /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('WANT_SOMETHING_ELSE', 'Do you want something else?'),
    open: openUpselling,
    onClose: function onClose() {
      return handleUpsellingPage();
    },
    width: "70%"
  }, /*#__PURE__*/_react.default.createElement(UpsellingLayout, null), /*#__PURE__*/_react.default.createElement(_styles2.CloseUpselling, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secondary",
    outline: true,
    onClick: function onClick() {
      return handleUpsellingPage(false);
    }
  }, t('NO_THANKS', 'No, Thanks'))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "70%",
    padding: "0",
    closeOnBackdrop: true
  }, actualProduct && /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    product: actualProduct,
    businessId: actualProduct.api.businessId,
    businessSlug: business.slug,
    onSave: function onSave() {
      return handleSaveProduct();
    }
  })));
};
var UpsellingPage = function UpsellingPage(props) {
  var UpsellingPageProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UpsellingPageUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UpsellingPage, UpsellingPageProps);
};
exports.UpsellingPage = UpsellingPage;