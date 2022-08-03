"use strict";

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessReviewsUI = function BusinessReviewsUI(props) {
  var _theme$layouts, _theme$layouts$busine, _theme$layouts$busine2, _theme$layouts$busine3, _theme$layouts$busine4, _theme$layouts$busine5, _theme$layouts2, _theme$layouts2$busin, _theme$layouts2$busin2, _theme$layouts2$busin3, _theme$layouts2$busin4, _theme$layouts2$busin5, _theme$layouts3, _theme$layouts3$busin, _theme$layouts3$busin2, _theme$layouts3$busin3, _theme$layouts3$busin4, _theme$layouts3$busin5, _theme$layouts4, _theme$layouts4$busin, _theme$layouts4$busin2, _theme$layouts4$busin3, _theme$layouts4$busin4, _theme$layouts4$busin5, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$general, _props$afterComponent, _props$afterElements;

  var stars = props.stars,
      reviewsList = props.reviewsList,
      handleClickOption = props.handleClickOption;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme2 = _slicedToArray(_useTheme, 1),
      theme = _useTheme2[0];

  var handleOnChange = function handleOnChange(evt) {
    if (evt.target.value === '') handleClickOption('all');else handleClickOption(evt.target.value);
  };

  var showRanking = !(theme !== null && theme !== void 0 && (_theme$layouts = theme.layouts) !== null && _theme$layouts !== void 0 && (_theme$layouts$busine = _theme$layouts.business_view) !== null && _theme$layouts$busine !== void 0 && (_theme$layouts$busine2 = _theme$layouts$busine.components) !== null && _theme$layouts$busine2 !== void 0 && (_theme$layouts$busine3 = _theme$layouts$busine2.reviews) !== null && _theme$layouts$busine3 !== void 0 && (_theme$layouts$busine4 = _theme$layouts$busine3.components) !== null && _theme$layouts$busine4 !== void 0 && (_theme$layouts$busine5 = _theme$layouts$busine4.ranking) !== null && _theme$layouts$busine5 !== void 0 && _theme$layouts$busine5.hidden);
  var showReviewDate = !(theme !== null && theme !== void 0 && (_theme$layouts2 = theme.layouts) !== null && _theme$layouts2 !== void 0 && (_theme$layouts2$busin = _theme$layouts2.business_view) !== null && _theme$layouts2$busin !== void 0 && (_theme$layouts2$busin2 = _theme$layouts2$busin.components) !== null && _theme$layouts2$busin2 !== void 0 && (_theme$layouts2$busin3 = _theme$layouts2$busin2.reviews) !== null && _theme$layouts2$busin3 !== void 0 && (_theme$layouts2$busin4 = _theme$layouts2$busin3.components) !== null && _theme$layouts2$busin4 !== void 0 && (_theme$layouts2$busin5 = _theme$layouts2$busin4.review_date) !== null && _theme$layouts2$busin5 !== void 0 && _theme$layouts2$busin5.hidden);
  var showCustomerComments = !(theme !== null && theme !== void 0 && (_theme$layouts3 = theme.layouts) !== null && _theme$layouts3 !== void 0 && (_theme$layouts3$busin = _theme$layouts3.business_view) !== null && _theme$layouts3$busin !== void 0 && (_theme$layouts3$busin2 = _theme$layouts3$busin.components) !== null && _theme$layouts3$busin2 !== void 0 && (_theme$layouts3$busin3 = _theme$layouts3$busin2.reviews) !== null && _theme$layouts3$busin3 !== void 0 && (_theme$layouts3$busin4 = _theme$layouts3$busin3.components) !== null && _theme$layouts3$busin4 !== void 0 && (_theme$layouts3$busin5 = _theme$layouts3$busin4.customer_comments) !== null && _theme$layouts3$busin5 !== void 0 && _theme$layouts3$busin5.hidden);
  var showSearch = !(theme !== null && theme !== void 0 && (_theme$layouts4 = theme.layouts) !== null && _theme$layouts4 !== void 0 && (_theme$layouts4$busin = _theme$layouts4.business_view) !== null && _theme$layouts4$busin !== void 0 && (_theme$layouts4$busin2 = _theme$layouts4$busin.components) !== null && _theme$layouts4$busin2 !== void 0 && (_theme$layouts4$busin3 = _theme$layouts4$busin2.reviews) !== null && _theme$layouts4$busin3 !== void 0 && (_theme$layouts4$busin4 = _theme$layouts4$busin3.components) !== null && _theme$layouts4$busin4 !== void 0 && (_theme$layouts4$busin5 = _theme$layouts4$busin4.search) !== null && _theme$layouts4$busin5 !== void 0 && _theme$layouts4$busin5.hidden);
  var hideElement = !(!showReviewDate && !showCustomerComments);
  var reviewPoints = [t('TERRIBLE', 'Terrible'), t('BAD', 'Bad'), t('OKAY', 'Okay'), t('GOOD', 'Good'), t('GREAT', 'Great')];
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
    type: "number",
    min: "1",
    max: "5",
    onChange: handleOnChange,
    placeholder: t('SEARCH', 'Search'),
    style: {
      backgroundImage: "url(".concat(theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.searchIcon, ")")
    }
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  })), showRanking && /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('REVIEW_ORDER', 'Review order')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressContent, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressBar, {
    style: {
      width: "".concat(stars / 5 * 100, "%")
    }
  }), reviewPoints.map(function (reviewPoint, i) {
    var isLastReviewPoint = i === (reviewPoints === null || reviewPoints === void 0 ? void 0 : reviewPoints.length) - 1;
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
      key: i,
      style: {
        left: theme.rtl !== isLastReviewPoint ? 'initial' : "".concat(25 * (isLastReviewPoint ? 0 : i), "%"),
        right: theme.rtl !== isLastReviewPoint ? "".concat(25 * (isLastReviewPoint ? 0 : i), "%") : 'initial'
      }
    }, reviewPoint);
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