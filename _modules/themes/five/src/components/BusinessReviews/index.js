"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessReviewsUI = exports.BusinessReviews = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _ThemeContext = require("../../../../../contexts/ThemeContext");
var _moment = _interopRequireDefault(require("moment"));
var _styles = require("./styles");
var _BsFillStarFill = _interopRequireDefault(require("@meronex/icons/bs/BsFillStarFill"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var BusinessReviewsUI = function BusinessReviewsUI(props) {
  var _theme$business_view, _theme$business_view$, _theme$business_view$2, _theme$business_view$3, _theme$business_view$4, _theme$business_view2, _theme$business_view3, _theme$business_view4, _theme$business_view5, _theme$business_view6, _theme$business_view7, _theme$business_view8, _theme$business_view9, _theme$business_view10, _theme$business_view11, _theme$business_view12, _theme$business_view13, _theme$business_view14, _theme$business_view15, _theme$business_view16, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$general, _props$afterComponent, _props$afterElements;
  var stars = props.stars,
    reviewsList = props.reviewsList,
    handleClickOption = props.handleClickOption,
    onChangeReview = props.onChangeReview;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme2 = _slicedToArray(_useTheme, 1),
    theme = _useTheme2[0];
  var handleOnChange = function handleOnChange(evt) {
    if (evt.target.value) onChangeReview(evt.target.value);else onChangeReview('');
  };
  var handleClickRaiting = function handleClickRaiting(raiting) {
    if (raiting) handleClickOption(raiting);
  };
  var showRanking = !(theme !== null && theme !== void 0 && (_theme$business_view = theme.business_view) !== null && _theme$business_view !== void 0 && (_theme$business_view$ = _theme$business_view.components) !== null && _theme$business_view$ !== void 0 && (_theme$business_view$2 = _theme$business_view$.review) !== null && _theme$business_view$2 !== void 0 && (_theme$business_view$3 = _theme$business_view$2.components) !== null && _theme$business_view$3 !== void 0 && (_theme$business_view$4 = _theme$business_view$3.ranking) !== null && _theme$business_view$4 !== void 0 && _theme$business_view$4.hidden);
  var showReviewDate = !(theme !== null && theme !== void 0 && (_theme$business_view2 = theme.business_view) !== null && _theme$business_view2 !== void 0 && (_theme$business_view3 = _theme$business_view2.components) !== null && _theme$business_view3 !== void 0 && (_theme$business_view4 = _theme$business_view3.review) !== null && _theme$business_view4 !== void 0 && (_theme$business_view5 = _theme$business_view4.components) !== null && _theme$business_view5 !== void 0 && (_theme$business_view6 = _theme$business_view5.review_date) !== null && _theme$business_view6 !== void 0 && _theme$business_view6.hidden);
  var showCustomerComments = !(theme !== null && theme !== void 0 && (_theme$business_view7 = theme.business_view) !== null && _theme$business_view7 !== void 0 && (_theme$business_view8 = _theme$business_view7.components) !== null && _theme$business_view8 !== void 0 && (_theme$business_view9 = _theme$business_view8.review) !== null && _theme$business_view9 !== void 0 && (_theme$business_view10 = _theme$business_view9.components) !== null && _theme$business_view10 !== void 0 && (_theme$business_view11 = _theme$business_view10.customer_comments) !== null && _theme$business_view11 !== void 0 && _theme$business_view11.hidden);
  var showSearch = !(theme !== null && theme !== void 0 && (_theme$business_view12 = theme.business_view) !== null && _theme$business_view12 !== void 0 && (_theme$business_view13 = _theme$business_view12.components) !== null && _theme$business_view13 !== void 0 && (_theme$business_view14 = _theme$business_view13.review) !== null && _theme$business_view14 !== void 0 && (_theme$business_view15 = _theme$business_view14.components) !== null && _theme$business_view15 !== void 0 && (_theme$business_view16 = _theme$business_view15.search) !== null && _theme$business_view16 !== void 0 && _theme$business_view16.hidden);
  var hideElement = !(!showReviewDate && !showCustomerComments);
  var reviewPoints = [1, 2, 3, 4, 5];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessReviewsContainer, null, reviewsList.error ? /*#__PURE__*/_react.default.createElement("h2", null, t('ERROR_UNKNOWN', 'An error has ocurred')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsHeaderWrapper, {
    noReviews: (reviewsList === null || reviewsList === void 0 ? void 0 : reviewsList.reviews.length) === 0
  }, !reviewsList.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsFillStarFill.default, null), /*#__PURE__*/_react.default.createElement("h2", null, "".concat(stars, " (").concat(reviewsList === null || reviewsList === void 0 ? void 0 : reviewsList.reviews.length, " ").concat(t('REVIEWS', 'Reviews'), ")"))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 30
  })), showSearch && /*#__PURE__*/_react.default.createElement(_styles.ReviewOf, null, !reviewsList.loading ? /*#__PURE__*/_react.default.createElement(_styles.SearchContainer, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    onChange: handleOnChange,
    placeholder: t('SEARCH', 'Search'),
    style: {
      backgroundImage: "url(".concat(theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.searchIcon, ")")
    }
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  })), showRanking && /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMER_REVIEWS', 'Customers reviews')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressContent, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressBar, {
    style: {
      width: "".concat(stars / 5 * 100, "%")
    }
  }), reviewPoints.map(function (reviewPoint, i) {
    var isLastReviewPoint = i === (reviewPoints === null || reviewPoints === void 0 ? void 0 : reviewPoints.length) - 1;
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
      key: i,
      onClick: function onClick() {
        return handleClickRaiting(i + 1);
      },
      style: {
        left: theme.rtl !== isLastReviewPoint ? 'initial' : "".concat(25 * (isLastReviewPoint ? 0 : i), "%"),
        right: theme.rtl !== isLastReviewPoint ? "".concat(25 * (isLastReviewPoint ? 0 : i), "%") : 'initial'
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.ReviewStars, null, reviewPoint, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, {
      className: "start"
    })));
  }))), hideElement && /*#__PURE__*/_react.default.createElement(_styles.Content, {
    id: "content"
  }, !reviewsList.loading ? reviewsList === null || reviewsList === void 0 ? void 0 : reviewsList.reviews.map(function (review) {
    return /*#__PURE__*/_react.default.createElement(_styles.Review, {
      key: review.id,
      id: "review"
    }, showReviewDate && /*#__PURE__*/_react.default.createElement(_styles.ReviewItemHeader, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewTime, null, (0, _moment.default)(review === null || review === void 0 ? void 0 : review.created_at).format('LLL'))), showCustomerComments && /*#__PURE__*/_react.default.createElement(_styles.ReviewItemContent, null, review === null || review === void 0 ? void 0 : review.comment));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(2)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 50
    })));
  })), !reviewsList.loading && (reviewsList === null || reviewsList === void 0 ? void 0 : reviewsList.reviews.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.ReviewsNotFound, null, t('NO_REVIEWS', 'No reviews'))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.BusinessReviewsUI = BusinessReviewsUI;
var BusinessReviews = function BusinessReviews(props) {
  var BusinessReviewProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessReviewsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessReviews, BusinessReviewProps);
};
exports.BusinessReviews = BusinessReviews;