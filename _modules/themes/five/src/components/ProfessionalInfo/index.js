"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProfessionalInfoUI = function ProfessionalInfoUI(props) {
  var _userState$user, _userState$user2, _userState$user3, _userState$user4, _userState$user5, _userState$user6;
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
    bgimage: optimizeImage(userState === null || userState === void 0 || (_userState$user2 = userState.user) === null || _userState$user2 === void 0 ? void 0 : _userState$user2.photo, 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null))), /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120,
    height: 20
  }) : userState === null || userState === void 0 || (_userState$user3 = userState.user) === null || _userState$user3 === void 0 ? void 0 : _userState$user3.name), /*#__PURE__*/_react.default.createElement(_styles.OccupationWrapper, null, userState !== null && userState !== void 0 && userState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 15
  }) : /*#__PURE__*/_react.default.createElement("p", null, userState === null || userState === void 0 || (_userState$user4 = userState.user) === null || _userState$user4 === void 0 || (_userState$user4 = _userState$user4.occupation) === null || _userState$user4 === void 0 ? void 0 : _userState$user4.name)), (userState === null || userState === void 0 || (_userState$user5 = userState.user) === null || _userState$user5 === void 0 || (_userState$user5 = _userState$user5.occupation) === null || _userState$user5 === void 0 ? void 0 : _userState$user5.description) && /*#__PURE__*/_react.default.createElement(_styles.Description, null, userState === null || userState === void 0 || (_userState$user6 = userState.user) === null || _userState$user6 === void 0 || (_userState$user6 = _userState$user6.occupation) === null || _userState$user6 === void 0 ? void 0 : _userState$user6.description)), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.ReviewWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('REVIEWS', 'Reviews')), userReviewState.loading ? _toConsumableArray(Array(5).keys()).map(function (i) {
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
var ProfessionalInfo = exports.ProfessionalInfo = function ProfessionalInfo(props) {
  var professionalInfoProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProfessionalInfoUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProfessionalInfo, professionalInfoProps);
};