"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
_swiper.default.use([_swiper.Navigation]);
var PageBannerUI = function PageBannerUI(props) {
  var _pageBannerState$bann, _pageBannerState$bann2, _pageBannerState$bann3, _pageBannerState$bann4;
  var pageBannerState = props.pageBannerState,
    isCustomerMode = props.isCustomerMode,
    handleCustomProductBannerClick = props.handleCustomProductBannerClick,
    business = props.business;
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
      if (isCustomerMode) {
        return events.emit('go_to_page', {
          page: 'business',
          params: {
            store: slug
          }
        });
      } else {
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
    }
    events.emit('product_banner_clicked');
    if (isCustomerMode) {
      return events.emit('go_to_page', {
        page: 'business',
        params: {
          store: slug
        },
        search: "?category=".concat(category, "&product=").concat(product),
        replace: true
      });
    } else {
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
      var _action$url$split$, _business$categories, _foundCategory$produc;
      slug = (_action$url$split$ = action.url.split('store/')[1]) === null || _action$url$split$ === void 0 ? void 0 : _action$url$split$.split('?')[0];
      var paramString = action.url.split('?')[1];
      var urlParams = new URLSearchParams(paramString);
      var productId = urlParams.get('product');
      var categoryId = urlParams.get('category');
      var foundCategory = business === null || business === void 0 || (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.find(function (category) {
        return category.id === Number(categoryId);
      });
      var foundProduct = foundCategory === null || foundCategory === void 0 || (_foundCategory$produc = foundCategory.products) === null || _foundCategory$produc === void 0 ? void 0 : _foundCategory$produc.find(function (product) {
        return product.id === Number(productId);
      });
      if ((business === null || business === void 0 ? void 0 : business.slug) === slug && foundProduct) {
        handleCustomProductBannerClick(foundProduct);
      } else {
        onProductRedirect({
          slug: slug,
          category: categoryId,
          product: productId
        });
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_pageBannerState$bann = pageBannerState.banner) === null || _pageBannerState$bann === void 0 || (_pageBannerState$bann = _pageBannerState$bann.items) === null || _pageBannerState$bann === void 0 ? void 0 : _pageBannerState$bann.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BannerContainer, null, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    navigation: ((_pageBannerState$bann2 = pageBannerState.banner) === null || _pageBannerState$bann2 === void 0 || (_pageBannerState$bann2 = _pageBannerState$bann2.items) === null || _pageBannerState$bann2 === void 0 ? void 0 : _pageBannerState$bann2.length) > 1,
    spaceBetween: 0,
    shortSwipes: false,
    loop: ((_pageBannerState$bann3 = pageBannerState.banner) === null || _pageBannerState$bann3 === void 0 ? void 0 : _pageBannerState$bann3.items.length) > 1,
    touchStartPreventDefault: false,
    slidesPerView: 1
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
var PageBanner = exports.PageBanner = function PageBanner(props) {
  var pageBannerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PageBannerUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PageBanner, pageBannerProps);
};