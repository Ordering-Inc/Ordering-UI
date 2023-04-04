"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInfoComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _utils = require("../../../../../utils");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _styledComponents = require("styled-components");
var _SocialNetWork = require("./SocialNetWork");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _SearchComponent = require("./SearchComponent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessInfoComponent = function BusinessInfoComponent(props) {
  var _theme$business_view, _theme$business_view$, _theme$business_view$2, _theme$business_view$3, _theme$business_view$4, _theme$business_view$5, _theme$business_view$6, _theme$business_view2, _theme$business_view3, _theme$business_view4, _theme$business_view5, _theme$business_view6, _theme$business_view7, _theme$business_view8, _theme$business_view9, _theme$business_view10, _theme$business_view11, _theme$business_view12, _theme$business_view13, _theme$business_view14, _theme$business_view15, _theme$business_view16, _theme$business_view17, _theme$business_view18, _theme$business_view19, _theme$business_view20, _theme$business_view21, _theme$business_view22, _theme$business_view23, _theme$business_view24, _theme$business_view25, _theme$business_view26, _theme$business_view27, _theme$business_view28, _theme$business_view29, _theme$business_view30, _theme$business_view31, _theme$business_view32, _theme$business_view33, _theme$business_view34, _theme$business_view35, _theme$business_view36, _theme$business_view37, _theme$business_view38, _theme$business_view39, _configs$preorder_sta, _business$ribbon, _business$ribbon2, _business$ribbon3, _business$ribbon4, _business$ribbon5, _business$ribbon6, _business$ribbon7, _business$city, _business$city2, _orderState$options, _business$reviews, _business$reviews2, _categoryState$produc, _business$professiona;
  var isChew = props.isChew,
    loading = props.loading,
    business = props.business,
    isInfoShrunken = props.isInfoShrunken,
    isCustomerMode = props.isCustomerMode,
    setIsPreOrder = props.setIsPreOrder,
    setIsBusinessReviews = props.setIsBusinessReviews,
    categoryState = props.categoryState,
    searchValue = props.searchValue,
    errorQuantityProducts = props.errorQuantityProducts,
    setOpenSearchProducts = props.setOpenSearchProducts,
    handleChangeSortBy = props.handleChangeSortBy,
    sortByValue = props.sortByValue,
    sortByOptions = props.sortByOptions,
    isCustomLayout = props.isCustomLayout;
  var theme = (0, _styledComponents.useTheme)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDistance = _useUtils2$.parseDistance;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var hideDeliveryFee = theme === null || theme === void 0 ? void 0 : (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 ? void 0 : (_theme$business_view$ = _theme$business_view.components) === null || _theme$business_view$ === void 0 ? void 0 : (_theme$business_view$2 = _theme$business_view$.header) === null || _theme$business_view$2 === void 0 ? void 0 : (_theme$business_view$3 = _theme$business_view$2.components) === null || _theme$business_view$3 === void 0 ? void 0 : (_theme$business_view$4 = _theme$business_view$3.business) === null || _theme$business_view$4 === void 0 ? void 0 : (_theme$business_view$5 = _theme$business_view$4.components) === null || _theme$business_view$5 === void 0 ? void 0 : (_theme$business_view$6 = _theme$business_view$5.fee) === null || _theme$business_view$6 === void 0 ? void 0 : _theme$business_view$6.hidden;
  var hideTime = theme === null || theme === void 0 ? void 0 : (_theme$business_view2 = theme.business_view) === null || _theme$business_view2 === void 0 ? void 0 : (_theme$business_view3 = _theme$business_view2.components) === null || _theme$business_view3 === void 0 ? void 0 : (_theme$business_view4 = _theme$business_view3.header) === null || _theme$business_view4 === void 0 ? void 0 : (_theme$business_view5 = _theme$business_view4.components) === null || _theme$business_view5 === void 0 ? void 0 : (_theme$business_view6 = _theme$business_view5.business) === null || _theme$business_view6 === void 0 ? void 0 : (_theme$business_view7 = _theme$business_view6.components) === null || _theme$business_view7 === void 0 ? void 0 : (_theme$business_view8 = _theme$business_view7.time) === null || _theme$business_view8 === void 0 ? void 0 : _theme$business_view8.hidden;
  var hideReviews = theme === null || theme === void 0 ? void 0 : (_theme$business_view9 = theme.business_view) === null || _theme$business_view9 === void 0 ? void 0 : (_theme$business_view10 = _theme$business_view9.components) === null || _theme$business_view10 === void 0 ? void 0 : (_theme$business_view11 = _theme$business_view10.header) === null || _theme$business_view11 === void 0 ? void 0 : (_theme$business_view12 = _theme$business_view11.components) === null || _theme$business_view12 === void 0 ? void 0 : (_theme$business_view13 = _theme$business_view12.business) === null || _theme$business_view13 === void 0 ? void 0 : (_theme$business_view14 = _theme$business_view13.components) === null || _theme$business_view14 === void 0 ? void 0 : (_theme$business_view15 = _theme$business_view14.reviews) === null || _theme$business_view15 === void 0 ? void 0 : _theme$business_view15.hidden;
  var hideReviewsPopup = theme === null || theme === void 0 ? void 0 : (_theme$business_view16 = theme.business_view) === null || _theme$business_view16 === void 0 ? void 0 : (_theme$business_view17 = _theme$business_view16.components) === null || _theme$business_view17 === void 0 ? void 0 : (_theme$business_view18 = _theme$business_view17.header) === null || _theme$business_view18 === void 0 ? void 0 : (_theme$business_view19 = _theme$business_view18.components) === null || _theme$business_view19 === void 0 ? void 0 : (_theme$business_view20 = _theme$business_view19.reviews) === null || _theme$business_view20 === void 0 ? void 0 : _theme$business_view20.hidden;
  var hideDistance = theme === null || theme === void 0 ? void 0 : (_theme$business_view21 = theme.business_view) === null || _theme$business_view21 === void 0 ? void 0 : (_theme$business_view22 = _theme$business_view21.components) === null || _theme$business_view22 === void 0 ? void 0 : (_theme$business_view23 = _theme$business_view22.header) === null || _theme$business_view23 === void 0 ? void 0 : (_theme$business_view24 = _theme$business_view23.components) === null || _theme$business_view24 === void 0 ? void 0 : (_theme$business_view25 = _theme$business_view24.business) === null || _theme$business_view25 === void 0 ? void 0 : (_theme$business_view26 = _theme$business_view25.components) === null || _theme$business_view26 === void 0 ? void 0 : (_theme$business_view27 = _theme$business_view26.distance) === null || _theme$business_view27 === void 0 ? void 0 : _theme$business_view27.hidden;
  var hideCity = theme === null || theme === void 0 ? void 0 : (_theme$business_view28 = theme.business_view) === null || _theme$business_view28 === void 0 ? void 0 : (_theme$business_view29 = _theme$business_view28.components) === null || _theme$business_view29 === void 0 ? void 0 : (_theme$business_view30 = _theme$business_view29.header) === null || _theme$business_view30 === void 0 ? void 0 : (_theme$business_view31 = _theme$business_view30.components) === null || _theme$business_view31 === void 0 ? void 0 : (_theme$business_view32 = _theme$business_view31.business) === null || _theme$business_view32 === void 0 ? void 0 : (_theme$business_view33 = _theme$business_view32.components) === null || _theme$business_view33 === void 0 ? void 0 : (_theme$business_view34 = _theme$business_view33.city) === null || _theme$business_view34 === void 0 ? void 0 : _theme$business_view34.hidden;
  var layoutsWithOldSearch = ['starbucks', 'old', 'floating'];
  var hideSearch = layoutsWithOldSearch.includes(theme === null || theme === void 0 ? void 0 : (_theme$business_view35 = theme.business_view) === null || _theme$business_view35 === void 0 ? void 0 : (_theme$business_view36 = _theme$business_view35.components) === null || _theme$business_view36 === void 0 ? void 0 : (_theme$business_view37 = _theme$business_view36.product_search) === null || _theme$business_view37 === void 0 ? void 0 : (_theme$business_view38 = _theme$business_view37.components) === null || _theme$business_view38 === void 0 ? void 0 : (_theme$business_view39 = _theme$business_view38.layout) === null || _theme$business_view39 === void 0 ? void 0 : _theme$business_view39.type);
  var isPreOrderSetting = (configs === null || configs === void 0 ? void 0 : (_configs$preorder_sta = configs.preorder_status_enabled) === null || _configs$preorder_sta === void 0 ? void 0 : _configs$preorder_sta.value) === '1';
  var searchComponentProps = {
    setOpenSearchProducts: setOpenSearchProducts,
    handleChangeSortBy: handleChangeSortBy,
    sortByValue: sortByValue,
    sortByOptions: sortByOptions
  };
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoContainer, {
    isChew: isChew,
    isFlexEnd: windowSize.width >= 768
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, {
    isInfoShrunken: isInfoShrunken
  }, !loading ? /*#__PURE__*/_react.default.createElement(_styles.TitleWrapper, {
    isCustomLayout: isCustomLayout
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "bold",
    id: "business_name"
  }, business === null || business === void 0 ? void 0 : business.name), (business === null || business === void 0 ? void 0 : (_business$ribbon = business.ribbon) === null || _business$ribbon === void 0 ? void 0 : _business$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: business === null || business === void 0 ? void 0 : (_business$ribbon2 = business.ribbon) === null || _business$ribbon2 === void 0 ? void 0 : _business$ribbon2.color,
    colorText: (0, _utils.lightenDarkenColor)(business === null || business === void 0 ? void 0 : (_business$ribbon3 = business.ribbon) === null || _business$ribbon3 === void 0 ? void 0 : _business$ribbon3.color),
    borderRibbon: (0, _utils.lightenDarkenColor)(business === null || business === void 0 ? void 0 : (_business$ribbon4 = business.ribbon) === null || _business$ribbon4 === void 0 ? void 0 : _business$ribbon4.color),
    isRoundRect: (business === null || business === void 0 ? void 0 : (_business$ribbon5 = business.ribbon) === null || _business$ribbon5 === void 0 ? void 0 : _business$ribbon5.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (business === null || business === void 0 ? void 0 : (_business$ribbon6 = business.ribbon) === null || _business$ribbon6 === void 0 ? void 0 : _business$ribbon6.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, business === null || business === void 0 ? void 0 : (_business$ribbon7 = business.ribbon) === null || _business$ribbon7 === void 0 ? void 0 : _business$ribbon7.text)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 100 : 150,
    height: isCustomerMode ? 35 : 'auto'
  }), typeof hideCity !== 'undefined' && !hideCity && (business === null || business === void 0 ? void 0 : (_business$city = business.city) === null || _business$city === void 0 ? void 0 : _business$city.name) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("p", {
    className: "type"
  }, business === null || business === void 0 ? void 0 : (_business$city2 = business.city) === null || _business$city2 === void 0 ? void 0 : _business$city2.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 100 : 150
  })), !loading ? /*#__PURE__*/_react.default.createElement(_styles.SocialList, null, (business === null || business === void 0 ? void 0 : business.facebook_profile) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.facebook_profile,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Facebook, null)
  }), (business === null || business === void 0 ? void 0 : business.instagram_profile) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.instagram_profile,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Instagram, null)
  }), (business === null || business === void 0 ? void 0 : business.tiktok_profile) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.tiktok_profile,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Tiktok, null)
  }), (business === null || business === void 0 ? void 0 : business.pinterest_profile) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.pinterest_profile,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pinterest, null)
  }), (business === null || business === void 0 ? void 0 : business.whatsapp_number) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.whatsapp_number,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Whatsapp, null)
  }), (business === null || business === void 0 ? void 0 : business.snapchat_profile) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.snapchat_profile,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Snapchat, null)
  })) : /*#__PURE__*/_react.default.createElement(_styles.SocialList, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, {
      isSkeleton: true,
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 27,
      height: 27
    }));
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessDetail, {
    isSkeleton: loading
  }, (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && !hideDeliveryFee && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivery fee')), business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 70 : 50
  })), !hideTime && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022"))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 70 : 50
  })), !hideDistance && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 70 : 50
  })), !hideReviews && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "review"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, {
    className: "start"
  }), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 100 : 50
  }))), !loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "preorder-Reviews"
  }, isPreOrderSetting && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setIsPreOrder(true);
    }
  }, t('PREORDER', 'Preorder')), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")), ((_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.reviews) && !hideReviewsPopup && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setIsBusinessReviews(true);
    }
  }, t('REVIEWS', 'Reviews'))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 100 : 150
  })))), !hideSearch && ((categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.length) !== 0 || searchValue) && !errorQuantityProducts && !isInfoShrunken && !(business !== null && business !== void 0 && (_business$professiona = business.professionals) !== null && _business$professiona !== void 0 && _business$professiona.length) &&
  /*#__PURE__*/
  // (categoryClicked || windowSize.width >= 993) &&
  _react.default.createElement(_SearchComponent.SearchComponent, searchComponentProps));
};
exports.BusinessInfoComponent = BusinessInfoComponent;