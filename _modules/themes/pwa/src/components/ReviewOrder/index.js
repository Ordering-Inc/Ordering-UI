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
var _styles = require("./styles");
var _Confirm = require("../Confirm");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  var _props$beforeElements, _props$beforeComponen, _theme$defaultLanguag, _order$business, _theme$images, _theme$images$dummies, _order$business2, _theme$images2, _theme$images2$dummie, _props$afterMidElemen, _props$afterMidCompon, _props$afterComponent, _props$afterElements;
  var stars = props.stars,
    order = props.order,
    handleSendReview = props.handleSendReview,
    formState = props.formState,
    closeReviewOrder = props.closeReviewOrder,
    setIsReviewed = props.setIsReviewed,
    setStars = props.setStars,
    handleIsReviewed = props.handleIsReviewed;
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
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    comment = _useState4[0],
    setComment = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    extraComment = _useState6[0],
    setExtraComment = _useState6[1];
  var commentsList = [t('IT_WASNT_TASTY', "It wasn't tasty"), t('IT_DOESNT_PACK_WELL', "It doesn't pack well"), t('IT_ISNT_WORTH_WHAT_IT_COSTS', "It isn't worth what it costs"), t('TOO_SLOW', 'Too slow'), t('SUSTAINABLE_PACKAGING_WASNT_USED', "Sustainable packaging wasn't used"), t('THEY_DID_NOT_FOLLOW_THE_ORDER_NOTES', 'They did not follow the order notes')];
  var handleChangeStars = function handleChangeStars(index) {
    switch (index) {
      case 'terrible':
        setStars(_objectSpread(_objectSpread({}, stars), {}, {
          quality: 1,
          punctiality: 1,
          service: 1,
          packaging: 1
        }));
        break;
      case 'bad':
        setStars(_objectSpread(_objectSpread({}, stars), {}, {
          quality: 2,
          punctiality: 2,
          service: 2,
          packaging: 2
        }));
        break;
      case 'okay':
        setStars(_objectSpread(_objectSpread({}, stars), {}, {
          quality: 3,
          punctiality: 3,
          service: 3,
          packaging: 3
        }));
        break;
      case 'good':
        setStars(_objectSpread(_objectSpread({}, stars), {}, {
          quality: 4,
          punctiality: 4,
          service: 4,
          packaging: 4
        }));
        break;
      case 'great':
        setStars(_objectSpread(_objectSpread({}, stars), {}, {
          quality: 5,
          punctiality: 5,
          service: 5,
          packaging: 5
        }));
        break;
    }
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
      setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        open: true,
        title: t('REVIEW_SUCCESS_TITLE', 'Well done'),
        content: t('REVIEW_SUCCESS_CONTENT', 'Thank you, Review successfully submitted!')
      }));
      setIsReviewed && setIsReviewed(true);
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
    setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
      success: true
    }));
    handleSendReview();
    handleIsReviewed && handleIsReviewed(order.id);
  };
  var handleChangeComments = function handleChangeComments(text) {
    if (comment === text) setComment(null);else setComment(text);
  };
  var closeAlert = function closeAlert() {
    var _formState$result4;
    setAlertState({
      open: false,
      content: []
    });
    if (!formState.loading && !((_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && _formState$result4.error) && alertState.success) {
      closeReviewOrder();
    }
  };
  (0, _react.useEffect)(function () {
    var _comment = comment ? extraComment !== '' ? "".concat(comment, ". ").concat(extraComment) : "".concat(comment, ".") : extraComment;
    setStars(_objectSpread(_objectSpread({}, stars), {}, {
      comments: _comment
    }));
  }, [comment, extraComment]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.LogoAndReviewWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, order ? "".concat(t('REVIEW_ORDER', 'Review order')) : t('LOADING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.LOADING) || 'Loading...')), /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, ((order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo), 'h_200,c_limit')
  })), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('HOW_WAS_YOUR_ORDER', 'How was your order?')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressContent, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsProgressBar, {
    style: {
      width: "".concat(((stars === null || stars === void 0 ? void 0 : stars.quality) - 1) / 4 * 100, "%")
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
    style: {
      left: theme.rtl ? 'initial' : '0',
      right: theme !== null && theme !== void 0 && theme.rtl ? '0' : 'initial'
    },
    active: (stars === null || stars === void 0 ? void 0 : stars.quality) === 1,
    onClick: function onClick() {
      return handleChangeStars('terrible');
    }
  }, t('TERRIBLE', 'Terrible')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
    style: {
      left: theme.rtl ? 'initial' : '25%',
      right: theme !== null && theme !== void 0 && theme.rtl ? '25%' : 'initial'
    },
    active: (stars === null || stars === void 0 ? void 0 : stars.quality) === 2,
    onClick: function onClick() {
      return handleChangeStars('bad');
    }
  }, t('BAD', 'Bad')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
    style: {
      left: theme.rtl ? 'initial' : '50%',
      right: theme !== null && theme !== void 0 && theme.rtl ? '50%' : 'initial'
    },
    active: (stars === null || stars === void 0 ? void 0 : stars.quality) === 3,
    onClick: function onClick() {
      return handleChangeStars('okay');
    }
  }, t('OKAY', 'Okay')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
    style: {
      left: theme.rtl ? 'initial' : '75%',
      right: theme !== null && theme !== void 0 && theme.rtl ? '75%' : 'initial'
    },
    active: (stars === null || stars === void 0 ? void 0 : stars.quality) === 4,
    onClick: function onClick() {
      return handleChangeStars('good');
    }
  }, t('GOOD', 'Good')), /*#__PURE__*/_react.default.createElement(_styles.ReviewsMarkPoint, {
    style: {
      left: theme.rtl ? '0' : 'initial',
      right: theme !== null && theme !== void 0 && theme.rtl ? 'initial' : '0'
    },
    active: (stars === null || stars === void 0 ? void 0 : stars.quality) === 5,
    onClick: function onClick() {
      return handleChangeStars('great');
    }
  }, t('GREAT', 'Great')))), /*#__PURE__*/_react.default.createElement(_styles.CommentsList, null, /*#__PURE__*/_react.default.createElement("p", null, t('COMMENTS', 'Comments')), commentsList === null || commentsList === void 0 ? void 0 : commentsList.map(function (commentItem, i) {
    return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      key: i,
      color: comment === commentItem ? 'primary' : 'secundary',
      onClick: function onClick() {
        return handleChangeComments(commentItem);
      },
      initialIcon: true
    }, commentItem, comment === commentItem && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  }))), /*#__PURE__*/_react.default.createElement(_styles.ReviewOrderContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.Comments, null, /*#__PURE__*/_react.default.createElement("p", null, t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    placeholder: t('COMMENTS', 'Comments'),
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
    disabled: formState.loading
  }, !formState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('CONTINUE', 'Continue'), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)) : t('LOADING', 'Loading'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
    UIComponent: ReviewOrderUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderReview, ReviewOrderProps);
};
exports.ReviewOrder = ReviewOrder;