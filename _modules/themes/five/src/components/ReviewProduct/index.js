"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ReviewProduct = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactHookForm = require("react-hook-form");
var _styles = require("./styles");
var _AiOutlineLike = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineLike"));
var _AiOutlineDislike = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineDislike"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _Confirm = require("../Confirm");
var _utils = require("../../../../../utils");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleProductReview = function SingleProductReview(props) {
  var _theme$images, _theme$images$dummies, _theme$images2, _theme$images2$dummie, _commentsList;
  var product = props.product,
    handleChangeFormState = props.handleChangeFormState,
    formState = props.formState;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLike = _useState2[0],
    setIsLike = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isExtraComment = _useState4[0],
    setIsExtraComment = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    comments = _useState6[0],
    setComments = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    extraComment = _useState8[0],
    setExtraComment = _useState8[1];
  var _useState9 = (0, _react.useState)(5),
    _useState10 = _slicedToArray(_useState9, 2),
    currentValue = _useState10[0],
    setCurrentValue = _useState10[1];
  var commentsList = (0, _utils.reviewCommentList)('product');
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
    var _formState$changes;
    var value = isLike ? 5 : 1;
    setCurrentValue(value);
    if (value !== currentValue) setComments([]);
    if ((comments === null || comments === void 0 ? void 0 : comments.length) === 0 && !extraComment && ((_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.length) === 0 && isLike) return;
    var _comments = '';
    if (comments.length > 0) {
      comments.map(function (comment) {
        return _comments += comment.content + '. ';
      });
    }
    var _comment = _comments + extraComment;
    var found = false;
    var _changes = formState.changes.map(function (item) {
      if ((item === null || item === void 0 ? void 0 : item.product_id) === (product === null || product === void 0 ? void 0 : product.product_id)) {
        found = true;
        return {
          product_id: product === null || product === void 0 ? void 0 : product.product_id,
          comment: _comment,
          qualification: isLike ? 5 : 1
        };
      }
      return item;
    });
    if (!found) {
      _changes.push({
        product_id: product === null || product === void 0 ? void 0 : product.product_id,
        comment: _comment,
        qualification: isLike ? 5 : 1
      });
    }
    handleChangeFormState && handleChangeFormState(_changes);
  }, [comments, extraComment, isLike]);
  return /*#__PURE__*/_react.default.createElement(_styles.SingleProductReviewContainer, null, ((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.WrapperProductLogo, null, /*#__PURE__*/_react.default.createElement(_styles.ProductLogo, {
    bgimage: (product === null || product === void 0 ? void 0 : product.images) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo)
  })), /*#__PURE__*/_react.default.createElement(_styles.HandReviewWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.name), /*#__PURE__*/_react.default.createElement(_styles.HandReviewContent, null, /*#__PURE__*/_react.default.createElement(_styles.HandIconWrapper, {
    onClick: function onClick() {
      return setIsLike(true);
    },
    active: isLike
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineLike.default, null)), /*#__PURE__*/_react.default.createElement(_styles.HandIconWrapper, {
    onClick: function onClick() {
      return setIsLike(false);
    },
    active: !isLike
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineDislike.default, null)))), /*#__PURE__*/_react.default.createElement(_styles.CommentsList, null, (_commentsList = commentsList[isLike ? 'like' : 'dislike']) === null || _commentsList === void 0 ? void 0 : _commentsList.map(function (commentItem, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ButtonCustomized, {
      key: i,
      type: "button",
      active: isSelectedComment(commentItem.key),
      onClick: function onClick() {
        return handleChangeComment(commentItem);
      },
      initialIcon: true
    }, commentItem.content, isSelectedComment(commentItem.key) && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  })), /*#__PURE__*/_react.default.createElement(_styles.AdditionCommentsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.AddCommentHideShow, {
    onClick: function onClick() {
      return setIsExtraComment(!isExtraComment);
    },
    active: isExtraComment
  }, t('ADDITIONAL_COMMENTS', 'Additional comments')), isExtraComment && /*#__PURE__*/_react.default.createElement(_styles.Comments, null, /*#__PURE__*/_react.default.createElement("p", null, t('DO_YOU_WANT_TO_ADD_SOMETHING', 'Do you want to add something?')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    name: "comments",
    value: extraComment || '',
    onChange: function onChange(e) {
      return setExtraComment(e.target.value);
    },
    autoComplete: "off"
  }))));
};
var ReviewProductUI = function ReviewProductUI(props) {
  var _props$beforeElements, _props$beforeComponen, _formState$changes2, _props$afterComponent, _props$afterElements;
  var order = props.order,
    closeReviewProduct = props.closeReviewProduct,
    formState = props.formState,
    handleSendProductReview = props.handleSendProductReview,
    setIsProductReviewed = props.setIsProductReviewed;
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.errors;
  var _useState11 = (0, _react.useState)({
      open: false,
      content: [],
      success: false
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    alertState = _useState12[0],
    setAlertState = _useState12[1];
  var onSubmit = function onSubmit(values) {
    setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
      success: true
    }));
    handleSendProductReview();
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
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
      setIsProductReviewed && setIsProductReviewed(true);
      closeReviewProduct && closeReviewProduct();
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ReviewProductContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, (order === null || order === void 0 ? void 0 : order.products) && order.products.length > 0 && order.products.map(function (product, i) {
    return !(product !== null && product !== void 0 && product.deleted) && /*#__PURE__*/_react.default.createElement(SingleProductReview, _extends({}, props, {
      key: i,
      product: product
    }));
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: closeReviewProduct
  }, t('SKIP', 'Skip')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !formState.loading ? 'primary' : 'secondary',
    type: "submit",
    disabled: formState.loading || (formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.length) === 0,
    className: "review-sent"
  }, !formState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('CONTINUE', 'Continue'), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)) : t('LOADING', 'Loading'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PRODUCT_REVIEW', 'Product Review'),
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
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var ReviewProduct = function ReviewProduct(props) {
  var reviewProductProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReviewProductUI,
    isToast: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ReviewProduct, reviewProductProps);
};
exports.ReviewProduct = ReviewProduct;
var _default = ReviewProduct;
exports.default = _default;