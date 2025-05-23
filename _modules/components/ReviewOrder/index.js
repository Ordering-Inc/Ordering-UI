"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewOrder = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _orderingComponents = require("ordering-components");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _styles = require("./styles");
var _Confirm = require("../Confirm");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _styledComponents = require("styled-components");
var _utils = require("../../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ReviewOrderUI = function ReviewOrderUI(props) {
  var _props$beforeElements, _props$beforeComponen, _order$business, _theme$images, _order$business2, _theme$images2, _commentsList, _commentsList2, _props$afterMidElemen, _props$afterMidCompon, _props$afterComponent, _props$afterElements;
  var stars = props.stars,
    order = props.order,
    handleSendReview = props.handleSendReview,
    formState = props.formState,
    closeReviewOrder = props.closeReviewOrder,
    setIsReviewed = props.setIsReviewed,
    setStars = props.setStars;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var theme = (0, _styledComponents.useTheme)();
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)({
      open: false,
      content: [],
      success: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    comments = _useState4[0],
    setComments = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    extraComment = _useState6[0],
    setExtraComment = _useState6[1];
  var commentsList = (0, _utils.reviewCommentList)('order');
  var qualificationList = [{
    key: 1,
    text: t('TERRIBLE', 'Terrible'),
    middleNode: false,
    left: 0,
    right: 'initial'
  }, {
    key: 2,
    text: t('BAD', 'Bad'),
    middleNode: true,
    left: '25%',
    right: '75%'
  }, {
    key: 3,
    text: t('OKAY', 'Okay'),
    middleNode: true,
    left: '50%',
    right: '50%'
  }, {
    key: 4,
    text: t('GOOD', 'Good'),
    middleNode: true,
    left: '75%',
    right: '25%'
  }, {
    key: 5,
    text: t('GREAT', 'Great'),
    middleNode: false,
    left: 'initial',
    right: 0
  }];
  var handleChangeStars = function handleChangeStars(index) {
    if (index) setStars(_objectSpread(_objectSpread({}, stars), {}, {
      quality: index,
      punctiality: index,
      service: index,
      packaging: index,
      comments: ''
    }));
    setComments([]);
  };
  var handleChangeComment = function handleChangeComment(commentItem) {
    var found = comments.find(function (comment) {
      return (comment === null || comment === void 0 ? void 0 : comment.key) === commentItem.key;
    });
    if (found) {
      var _comments = comments.filter(function (comment) {
        return (comment === null || comment === void 0 ? void 0 : comment.key) !== commentItem.key;
      });
      setComments(_comments);
    } else {
      setComments([].concat(_toConsumableArray(comments), [commentItem]));
    }
  };
  var isSelectedComment = function isSelectedComment(commentKey) {
    var found = comments.find(function (comment) {
      return (comment === null || comment === void 0 ? void 0 : comment.key) === commentKey;
    });
    return found;
  };
  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result3;
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        success: false,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
    if (!formState.loading && !((_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.error) && alertState.success) {
      setIsReviewed && setIsReviewed(true);
      closeReviewOrder && closeReviewOrder();
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        success: false,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  var onSubmit = function onSubmit(values) {
    if (Object.values(stars).some(function (value) {
      return value === 0;
    })) {
      setAlertState({
        open: true,
        content: stars.quality === 0 ? ["".concat(t('REVIEW_QUALIFICATION_REQUIRED', 'Review qualification is required'))] : []
      });
      return;
    }
    setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
      success: true
    }));
    handleSendReview();
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    var _comments = '';
    if (comments.length > 0) {
      comments.map(function (comment) {
        return _comments += comment.content + '. ';
      });
    }
    var _comment = _comments + extraComment;
    setStars(_objectSpread(_objectSpread({}, stars), {}, {
      comments: _comment
    }));
  }, [comments, extraComment]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.LogoAndReviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, ((order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo), 'h_200,c_limit')
  })), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('HOW_WAS_YOUR_ORDER', 'How was your order?')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressContent, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressBar, {
    style: {
      width: "".concat(((stars === null || stars === void 0 ? void 0 : stars.quality) === 0 ? 0 : ((stars === null || stars === void 0 ? void 0 : stars.quality) - 1) / 4) * 100, "%")
    }
  }), qualificationList === null || qualificationList === void 0 ? void 0 : qualificationList.map(function (qualification) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
      key: qualification === null || qualification === void 0 ? void 0 : qualification.key,
      style: {
        left: theme !== null && theme !== void 0 && theme.rtl ? qualification !== null && qualification !== void 0 && qualification.middleNode ? 'initial' : qualification === null || qualification === void 0 ? void 0 : qualification.right : qualification === null || qualification === void 0 ? void 0 : qualification.left,
        right: theme !== null && theme !== void 0 && theme.rtl ? qualification === null || qualification === void 0 ? void 0 : qualification.left : qualification !== null && qualification !== void 0 && qualification.middleNode ? 'initial' : qualification === null || qualification === void 0 ? void 0 : qualification.right
      },
      active: (stars === null || stars === void 0 ? void 0 : stars.quality) === (qualification === null || qualification === void 0 ? void 0 : qualification.key),
      pass: (stars === null || stars === void 0 ? void 0 : stars.quality) >= (qualification === null || qualification === void 0 ? void 0 : qualification.key),
      className: qualification !== null && qualification !== void 0 && qualification.middleNode ? 'mark-point' : '',
      onClick: function onClick() {
        return handleChangeStars(qualification === null || qualification === void 0 ? void 0 : qualification.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, qualification === null || qualification === void 0 ? void 0 : qualification.text, /*#__PURE__*/_react.default.createElement("span", null)));
  }))), /*#__PURE__*/_react.default.createElement(_styles.CommentsList, null, /*#__PURE__*/_react.default.createElement("p", null, (_commentsList = commentsList[(stars === null || stars === void 0 ? void 0 : stars.quality) || 1]) === null || _commentsList === void 0 ? void 0 : _commentsList.title), (_commentsList2 = commentsList[(stars === null || stars === void 0 ? void 0 : stars.quality) || 1]) === null || _commentsList2 === void 0 || (_commentsList2 = _commentsList2.list) === null || _commentsList2 === void 0 ? void 0 : _commentsList2.map(function (commentItem, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.CommentButton, {
      key: i,
      active: isSelectedComment(commentItem === null || commentItem === void 0 ? void 0 : commentItem.key),
      onClick: function onClick() {
        return handleChangeComment(commentItem);
      },
      initialIcon: true
    }, commentItem.content, isSelectedComment(commentItem === null || commentItem === void 0 ? void 0 : commentItem.key) && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  }))), /*#__PURE__*/_react.default.createElement(_styles.ReviewOrderContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.Comments, null, /*#__PURE__*/_react.default.createElement("p", null, t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    name: "comments",
    value: extraComment,
    onChange: function onChange(e) {
      return setExtraComment(e.target.value);
    },
    autoComplete: "off"
  })), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Send, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: closeReviewOrder
  }, t('SKIP', 'Skip')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !formState.loading ? 'primary' : 'secondary',
    type: "submit",
    disabled: formState.loading,
    className: "review-sent"
  }, !formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.ContinueContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('CONTINUE', 'Continue')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)) : t('LOADING', 'Loading'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ORDER_REVIEW', 'Order Review'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var ReviewOrder = exports.ReviewOrder = function ReviewOrder(props) {
  var ReviewOrderProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReviewOrderUI,
    isToast: true,
    defaultStar: 0
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderReview, ReviewOrderProps);
};