"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageBanner = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _react2 = require("swiper/react");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper-bundle.min.css");
require("swiper/swiper.min.css");
var _utils = require("../../../../../utils");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_swiper.default.use([_swiper.Navigation]);
var PageBannerUI = function PageBannerUI(props) {
  var _pageBannerState$bann, _pageBannerState$bann2, _pageBannerState$bann3, _pageBannerState$bann4;
  var pageBannerState = props.pageBannerState;
  var _useSite = (0, _orderingComponents.useSite)(),
    _useSite2 = _slicedToArray(_useSite, 1),
    site = _useSite2[0].site;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var businessUrlTemplate = (0, _utils.checkSiteUrl)(site === null || site === void 0 ? void 0 : site.business_url_template, '/store/:business_slug');
  var productUrlTemplate = (0, _utils.checkSiteUrl)(site === null || site === void 0 ? void 0 : site.product_url_template, '/store/:business_slug?category=:category_id&product=:product_id');
  var onProductRedirect = function onProductRedirect(_ref) {
    var slug = _ref.slug,
      category = _ref.category,
      product = _ref.product;
    if (!category && !product) {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        return events.emit('go_to_page', {
          page: 'business',
          params: {
            business_slug: slug
          },
          replace: false
        });
      } else {
        return events.emit('go_to_page', {
          page: 'business',
          search: "?".concat(businessUrlTemplate.split('?')[1].replace(':business_slug', '')).concat(slug),
          replace: false
        });
      }
    }
    events.emit('product_banner_clicked');
    if (productUrlTemplate === '/store/:business_slug/:category_slug/:product_slug' || productUrlTemplate === '/:business_slug/:category_slug/:product_slug') {
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          business_slug: slug,
          category_slug: category,
          product_slug: product
        },
        replace: false
      });
    }
    if (productUrlTemplate.includes('/store/:category_slug/:product_slug')) {
      var businessParameter = businessUrlTemplate.replace('/store?', '').replace('=:business_slug', '');
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          category_slug: category,
          product_slug: product
        },
        search: "?".concat(businessParameter, "=").concat(slug),
        replace: false
      });
    }
    if (productUrlTemplate.includes('/store/:business_slug') && productUrlTemplate.includes('category_id')) {
      var ids = productUrlTemplate.split('?')[1].split('&');
      var categoryParameter = ids[0].replace('=:category_id', '');
      var productParameter = ids[1].replace('=:product_id', '');
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          business_slug: slug
        },
        search: "?".concat(categoryParameter, "=").concat(category, "&").concat(productParameter, "=").concat(product),
        replace: false
      });
    }
    if (productUrlTemplate.includes('/:business_slug') && !productUrlTemplate.includes('store')) {
      var _ids = productUrlTemplate.split('?')[1].split('&');
      var _categoryParameter = _ids[0].replace('=:category_id', '');
      var _productParameter = _ids[1].replace('=:product_id', '');
      return events.emit('go_to_page', {
        page: 'product',
        params: {
          business_slug: slug
        },
        search: "?".concat(_categoryParameter, "=").concat(category, "&").concat(_productParameter, "=").concat(product),
        replace: false
      });
    }
  };
  var handleGoToPage = function handleGoToPage(action) {
    if (!(action !== null && action !== void 0 && action.url)) return;
    var slug;
    if (action.type === 'business') {
      slug = action.url.split('store/')[1];
      onProductRedirect({
        slug: slug
      });
    }
    if (action.type === 'product') {
      var _action$url$split$;
      slug = (_action$url$split$ = action.url.split('store/')[1]) === null || _action$url$split$ === void 0 ? void 0 : _action$url$split$.split('?')[0];
      var paramString = action.url.split('?')[1];
      var urlParams = new URLSearchParams(paramString);
      var product = urlParams.get('product');
      var category = urlParams.get('category');
      onProductRedirect({
        slug: slug,
        category: category,
        product: product
      });
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, pageBannerState.loading ? /*#__PURE__*/_react.default.createElement(_styles.BannerContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 250
  })) : ((_pageBannerState$bann = pageBannerState.banner) === null || _pageBannerState$bann === void 0 ? void 0 : (_pageBannerState$bann2 = _pageBannerState$bann.items) === null || _pageBannerState$bann2 === void 0 ? void 0 : _pageBannerState$bann2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BannerContainer, null, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    navigation: true,
    spaceBetween: 0,
    shortSwipes: false,
    loop: ((_pageBannerState$bann3 = pageBannerState.banner) === null || _pageBannerState$bann3 === void 0 ? void 0 : _pageBannerState$bann3.items.length) > 1
  }, (_pageBannerState$bann4 = pageBannerState.banner) === null || _pageBannerState$bann4 === void 0 ? void 0 : _pageBannerState$bann4.items.map(function (img, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i,
      onClick: function onClick() {
        return handleGoToPage(img === null || img === void 0 ? void 0 : img.action);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.ImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
      src: img.url,
      className: "banner-img",
      alt: ""
    })));
  }))));
};
var PageBanner = function PageBanner(props) {
  var pageBannerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PageBannerUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PageBanner, pageBannerProps);
};
exports.PageBanner = PageBanner;