"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var SingleProductReview = function SingleProductReview(props) {
  var _theme$images, _theme$images2, _commentsList;
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
    _useState0 = _slicedToArray(_useState9, 2),
    currentValue = _useState0[0],
    setCurrentValue = _useState0[1];
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
  return /*#__PURE__*/_react.default.createElement(_styles.SingleProductReviewContainer, null, ((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.WrapperProductLogo, null, /*#__PURE__*/_react.default.createElement(_styles.ProductLogo, {
    bgimage: (product === null || product === void 0 ? void 0 : product.images) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo)
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
  var _useState1 = (0, _react.useState)({
      open: false,
      content: [],
      success: false
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    alertState = _useState10[0],
    setAlertState = _useState10[1];
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
  }, (order === null || order === void 0 ? void 0 : order.products) && order.products.length > 0 && (order === null || order === void 0 ? void 0 : order.products.map(function (productsOrder) {
    return productsOrder !== null && productsOrder !== void 0 && productsOrder.length ? productsOrder === null || productsOrder === void 0 ? void 0 : productsOrder.map(function (product, i) {
      return !(product !== null && product !== void 0 && product.deleted) && /*#__PURE__*/_react.default.createElement(SingleProductReview, _extends({}, props, {
        key: i,
        product: product
      }));
    }) : !(productsOrder !== null && productsOrder !== void 0 && productsOrder.deleted) && /*#__PURE__*/_react.default.createElement(SingleProductReview, _extends({}, props, {
      key: productsOrder === null || productsOrder === void 0 ? void 0 : productsOrder.id,
      product: productsOrder
    }));
  })), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: closeReviewProduct
  }, t('SKIP', 'Skip')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !formState.loading ? 'primary' : 'secondary',
    type: "submit",
    disabled: formState.loading || (formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.length) === 0,
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
var ReviewProduct = exports.ReviewProduct = function ReviewProduct(props) {
  var reviewProductProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReviewProductUI,
    isToast: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ReviewProduct, reviewProductProps);
};
var _default = exports.default = ReviewProduct;