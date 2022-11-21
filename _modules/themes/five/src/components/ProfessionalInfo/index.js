"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProfessionalInfoUI = function ProfessionalInfoUI(props) {
  var _userState$user, _userState$user2, _userState$user3, _userState$user4, _userState$user4$occu, _userState$user5, _userState$user5$occu, _userState$user6, _userState$user6$occu;
  var userState = props.userState,
    userReviewState = props.userReviewState;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var getReviewPercent = function getReviewPercent(quality) {
    var reviewPercents = {
      1: 0,
      2: 25,
      3: 50,
      4: 75,
      5: 100
    };
    if (typeof reviewPercents[quality] !== 'undefined') return reviewPercents[quality];
    return quality / 5 * 100;
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 250,
    height: 250
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, userState !== null && userState !== void 0 && (_userState$user = userState.user) !== null && _userState$user !== void 0 && _userState$user.photo ? /*#__PURE__*/_react.default.createElement(_styles.ProfessionalPhoto, {
    bgimage: optimizeImage(userState === null || userState === void 0 ? void 0 : (_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.photo, 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null))), /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120,
    height: 20
  }) : userState === null || userState === void 0 ? void 0 : (_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.name), /*#__PURE__*/_react.default.createElement(_styles.OccupationWrapper, null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 15
  }) : /*#__PURE__*/_react.default.createElement("p", null, userState === null || userState === void 0 ? void 0 : (_userState$user4 = userState.user) === null || _userState$user4 === void 0 ? void 0 : (_userState$user4$occu = _userState$user4.occupation) === null || _userState$user4$occu === void 0 ? void 0 : _userState$user4$occu.name)), (userState === null || userState === void 0 ? void 0 : (_userState$user5 = userState.user) === null || _userState$user5 === void 0 ? void 0 : (_userState$user5$occu = _userState$user5.occupation) === null || _userState$user5$occu === void 0 ? void 0 : _userState$user5$occu.description) && /*#__PURE__*/_react.default.createElement(_styles.Description, null, userState === null || userState === void 0 ? void 0 : (_userState$user6 = userState.user) === null || _userState$user6 === void 0 ? void 0 : (_userState$user6$occu = _userState$user6.occupation) === null || _userState$user6$occu === void 0 ? void 0 : _userState$user6$occu.description)), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.ReviewWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('REVIEWS', 'Reviews')), userReviewState.loading ? _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewItemContatiner, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewBarContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 10
    }))), /*#__PURE__*/_react.default.createElement(_styles.ReviewQualityTextContainer, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40
    }))), /*#__PURE__*/_react.default.createElement(_styles.Comment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200
    }))));
  }) : userReviewState === null || userReviewState === void 0 ? void 0 : userReviewState.reviews.map(function (review) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewItemContatiner, {
      key: review === null || review === void 0 ? void 0 : review.id
    }, /*#__PURE__*/_react.default.createElement(_styles.ReviewQualityContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewBarContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewBar, {
      percentage: getReviewPercent(review === null || review === void 0 ? void 0 : review.qualification)
    })), /*#__PURE__*/_react.default.createElement(_styles.ReviewQualityTextContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('TERRIBLE', 'Terrible')), /*#__PURE__*/_react.default.createElement("p", null, t('BAD', 'Bad')), /*#__PURE__*/_react.default.createElement("p", null, t('OKAY', 'Okay')), /*#__PURE__*/_react.default.createElement("p", null, t('GOOD', 'Good')), /*#__PURE__*/_react.default.createElement("p", null, t('GREAT', 'Great')))), /*#__PURE__*/_react.default.createElement(_styles.Comment, null, review === null || review === void 0 ? void 0 : review.comment));
  }), !userReviewState.loading && userReviewState.reviews.length === 0 && /*#__PURE__*/_react.default.createElement(_styles.NotReviewed, null, t('ERROR_REVIEW_FIND', 'The review does not exist.'))));
};
var ProfessionalInfo = function ProfessionalInfo(props) {
  var professionalInfoProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProfessionalInfoUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProfessionalInfo, professionalInfoProps);
};
exports.ProfessionalInfo = ProfessionalInfo;