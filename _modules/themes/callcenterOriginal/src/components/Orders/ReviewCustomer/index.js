"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewCustomer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _utils = require("../../../../../../utils");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReviewCustomerUI = function ReviewCustomerUI(props) {
  var _commentsList, _commentsList2, _commentsList2$list;
  var customer = props.customer,
    reviewState = props.reviewState,
    setReviewState = props.setReviewState,
    actionState = props.actionState,
    handleSendCustomerReview = props.handleSendCustomerReview;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
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
  var commentsList = (0, _utils.reviewCommentList)(1);
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangeQualification = function handleChangeQualification(index) {
    if (index) setReviewState(_objectSpread(_objectSpread({}, reviewState), {}, {
      qualification: index,
      comment: ''
    }));
    setComments([]);
  };
  var isSelectedComment = function isSelectedComment(commentKey) {
    var found = comments.find(function (comment) {
      return (comment === null || comment === void 0 ? void 0 : comment.key) === commentKey;
    });
    return found;
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
  (0, _react.useEffect)(function () {
    var _comments = '';
    if (comments.length > 0) {
      comments.map(function (comment) {
        return _comments += comment.content + '. ';
      });
    }
    var _comment = _comments + extraComment;
    setReviewState(_objectSpread(_objectSpread({}, reviewState), {}, {
      comment: _comment
    }));
  }, [comments, extraComment]);
  (0, _react.useEffect)(function () {
    if (!actionState.error) return;
    setAlertState({
      open: true,
      content: actionState.error
    });
  }, [actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('REVIEW_CUSTOMER', 'Review customer')), /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, customer !== null && customer !== void 0 && customer.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(customer === null || customer === void 0 ? void 0 : customer.photo, 'h_150,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.CustomerName, null, customer === null || customer === void 0 ? void 0 : customer.name, " ", customer === null || customer === void 0 ? void 0 : customer.middle_name, " ", customer === null || customer === void 0 ? void 0 : customer.lastname, " ", customer === null || customer === void 0 ? void 0 : customer.second_lastname), /*#__PURE__*/_react.default.createElement(_styles2.ReviewsProgressWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('HOW_WAS_THE_DELIVERY', 'How was the delivery?')), /*#__PURE__*/_react.default.createElement(_styles2.ReviewsProgressContent, null, /*#__PURE__*/_react.default.createElement(_styles2.ReviewsProgressBar, {
    style: {
      width: "".concat(((reviewState === null || reviewState === void 0 ? void 0 : reviewState.qualification) === 0 ? 0 : ((reviewState === null || reviewState === void 0 ? void 0 : reviewState.qualification) - 1) / 4) * 100, "%")
    }
  }), qualificationList === null || qualificationList === void 0 ? void 0 : qualificationList.map(function (qualification) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ReviewsMarkPoint, {
      key: qualification === null || qualification === void 0 ? void 0 : qualification.key,
      style: {
        left: theme !== null && theme !== void 0 && theme.rtl ? qualification !== null && qualification !== void 0 && qualification.middleNode ? 'initial' : qualification === null || qualification === void 0 ? void 0 : qualification.right : qualification === null || qualification === void 0 ? void 0 : qualification.left,
        right: theme !== null && theme !== void 0 && theme.rtl ? qualification === null || qualification === void 0 ? void 0 : qualification.left : qualification !== null && qualification !== void 0 && qualification.middleNode ? 'initial' : qualification === null || qualification === void 0 ? void 0 : qualification.right
      },
      active: (reviewState === null || reviewState === void 0 ? void 0 : reviewState.qualification) === (qualification === null || qualification === void 0 ? void 0 : qualification.key),
      pass: (reviewState === null || reviewState === void 0 ? void 0 : reviewState.qualification) >= (qualification === null || qualification === void 0 ? void 0 : qualification.key),
      className: qualification !== null && qualification !== void 0 && qualification.middleNode ? 'mark-point' : '',
      onClick: function onClick() {
        return handleChangeQualification(qualification === null || qualification === void 0 ? void 0 : qualification.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, qualification === null || qualification === void 0 ? void 0 : qualification.text, /*#__PURE__*/_react.default.createElement("span", null)));
  }))), /*#__PURE__*/_react.default.createElement(_styles2.CommentsList, null, /*#__PURE__*/_react.default.createElement("p", null, (_commentsList = commentsList[(reviewState === null || reviewState === void 0 ? void 0 : reviewState.qualification) || 1]) === null || _commentsList === void 0 ? void 0 : _commentsList.title), (_commentsList2 = commentsList[(reviewState === null || reviewState === void 0 ? void 0 : reviewState.qualification) || 1]) === null || _commentsList2 === void 0 ? void 0 : (_commentsList2$list = _commentsList2.list) === null || _commentsList2$list === void 0 ? void 0 : _commentsList2$list.map(function (commentItem, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.CommentButton, {
      key: i,
      active: isSelectedComment(commentItem === null || commentItem === void 0 ? void 0 : commentItem.key),
      onClick: function onClick() {
        return handleChangeComment(commentItem);
      },
      initialIcon: true
    }, commentItem.content, isSelectedComment(commentItem === null || commentItem === void 0 ? void 0 : commentItem.key) && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  })), /*#__PURE__*/_react.default.createElement(_styles2.Comments, null, /*#__PURE__*/_react.default.createElement("p", null, t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "comments",
    value: extraComment,
    onChange: function onChange(e) {
      return setExtraComment(e.target.value);
    },
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return handleSendCustomerReview();
    },
    disabled: actionState.loading
  }, t('SEND_REVIEW', 'Send review'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
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
  }));
};
var ReviewCustomer = function ReviewCustomer(props) {
  var reviewProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReviewCustomerUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ReviewCustomer, reviewProps);
};
exports.ReviewCustomer = ReviewCustomer;