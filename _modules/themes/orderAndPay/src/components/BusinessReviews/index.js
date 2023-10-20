"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var _Select = require("../../styles/Select");
var _AiOutlineStar = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineStar"));
var _BsFillStarFill = _interopRequireDefault(require("@meronex/icons/bs/BsFillStarFill"));
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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessReviewsUI = exports.BusinessReviewsUI = function BusinessReviewsUI(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _props$afterComponent, _props$afterElements;
  var stars = props.stars,
    reviewsList = props.reviewsList,
    handleClickOption = props.handleClickOption;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme2 = _slicedToArray(_useTheme, 1),
    theme = _useTheme2[0];
  var values = ['all', 1, 2, 3, 4, 5];
  var options = reviewsList.loading ? [] : values.map(function (value) {
    if (value === 'all') {
      return {
        value: value,
        content: t('ALL', 'ALL'),
        showOnSelected: t('ALL', 'ALL')
      };
    } else {
      return {
        value: value,
        content: value,
        showOnSelected: value
      };
    }
  });
  var handleOnChange = function handleOnChange(evt) {
    if (evt.target.value === '') handleClickOption('all');else handleClickOption(evt.target.value);
  };
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
  })), /*#__PURE__*/_react.default.createElement(_styles.ReviewOf, null, !reviewsList.loading ? /*#__PURE__*/_react.default.createElement(_styles.SearchContainer, null, /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    min: "1",
    max: "5",
    onChange: handleOnChange,
    placeholder: t('SEARCH', 'Search'),
    style: {
      backgroundImage: "url(".concat(theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.searchIcon, ")")
    }
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  })), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('REVIEW_ORDER', 'Review order')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressContent, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressBar, {
    style: {
      width: "".concat(stars / 5 * 100, "%")
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
    style: {
      left: '0'
    }
  }, t('TERRIBLE', 'Terrible')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
    style: {
      left: '25%'
    }
  }, t('BAD', 'Bad')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
    style: {
      left: '50%'
    }
  }, t('OKAY', 'Okay')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
    style: {
      left: '75%'
    }
  }, t('GOOD', 'Good')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
    style: {
      right: '0'
    }
  }, t('GREAT', 'Great')))), /*#__PURE__*/_react.default.createElement(_styles.WrapperSelect, null, !reviewsList.loading ? /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: options,
    defaultValue: options[0].value,
    onChange: function onChange(val) {
      return handleClickOption(val);
    },
    notAsync: true,
    InitialIcon: _AiOutlineStar.default
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  })), /*#__PURE__*/_react.default.createElement(_styles.Content, {
    id: "content"
  }, !reviewsList.loading ? reviewsList === null || reviewsList === void 0 ? void 0 : reviewsList.reviews.map(function (review) {
    return /*#__PURE__*/_react.default.createElement(_styles.Review, {
      key: review.id,
      id: "review"
    }, /*#__PURE__*/_react.default.createElement(_styles.ReviewItemHeader, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewTime, null, (0, _moment.default)(review === null || review === void 0 ? void 0 : review.created_at).format('LLL'))), /*#__PURE__*/_react.default.createElement(_styles.ReviewItemContent, null, review === null || review === void 0 ? void 0 : review.comment));
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
var BusinessReviews = exports.BusinessReviews = function BusinessReviews(props) {
  var BusinessReviewProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessReviewsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessReviews, BusinessReviewProps);
};