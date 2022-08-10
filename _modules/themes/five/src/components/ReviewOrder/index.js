"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewOrder = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _orderingComponents = require("ordering-components");

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("./styles");

var _Confirm = require("../Confirm");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _styledComponents = require("styled-components");

var _utils = require("../../../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ReviewOrderUI = function ReviewOrderUI(props) {
  var _props$beforeElements, _props$beforeComponen, _order$business, _theme$images, _theme$images$dummies, _order$business2, _theme$images2, _theme$images2$dummie, _order$business3, _order$business4, _commentsList, _commentsList2, _commentsList2$list, _props$afterMidElemen, _props$afterMidCompon, _props$afterComponent, _props$afterElements;

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
      _useUtils2$ = _useUtils2[0],
      optimizeImage = _useUtils2$.optimizeImage,
      parseDate = _useUtils2$.parseDate;

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

  var placedOnDate = parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    outputFormat: 'dddd MMMM DD, YYYY'
  });
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
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.LogoAndReviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, ((order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo), 'h_200,c_limit')
  })), (order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name) && /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.name), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressWrapper, null, false && /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressContent, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressBar, {
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
  })), /*#__PURE__*/_react.default.createElement(_styles.ReviewStarWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.StarWrapper, null, _toConsumableArray(Array(5).keys()).map(function (index) {
    var _theme$colors;

    return index <= (stars === null || stars === void 0 ? void 0 : stars.quality) - 1 ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, {
      size: 40,
      key: "star-symbol-".concat(index),
      onClick: function onClick() {
        return handleChangeStars(index + 1);
      },
      color: theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Star, {
      size: 40,
      key: "star-symbol-".concat(index),
      onClick: function onClick() {
        return handleChangeStars(index + 1);
      }
    });
  })))), /*#__PURE__*/_react.default.createElement(_styles.PlacedDate, null, t('DONOT_FORGET_RATE_YOUR_ORDER', 'Do not forget to rate your order placed on '), " ", /*#__PURE__*/_react.default.createElement("strong", null, placedOnDate)), false && /*#__PURE__*/_react.default.createElement(_styles.CommentsList, null, /*#__PURE__*/_react.default.createElement("p", null, (_commentsList = commentsList[(stars === null || stars === void 0 ? void 0 : stars.quality) || 1]) === null || _commentsList === void 0 ? void 0 : _commentsList.title), (_commentsList2 = commentsList[(stars === null || stars === void 0 ? void 0 : stars.quality) || 1]) === null || _commentsList2 === void 0 ? void 0 : (_commentsList2$list = _commentsList2.list) === null || _commentsList2$list === void 0 ? void 0 : _commentsList2$list.map(function (commentItem, i) {
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
  }, false && /*#__PURE__*/_react.default.createElement(_styles.Comments, null, /*#__PURE__*/_react.default.createElement("p", null, t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
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
  }, !formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.ContinueContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('GOTO_REVIEW', 'Go to review')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)) : t('LOADING', 'Loading'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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

var ReviewOrder = function ReviewOrder(props) {
  var ReviewOrderProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReviewOrderUI,
    isToast: true,
    defaultStar: 5
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderReview, ReviewOrderProps);
};

exports.ReviewOrder = ReviewOrder;