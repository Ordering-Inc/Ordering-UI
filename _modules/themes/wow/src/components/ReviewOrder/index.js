"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewOrder = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _orderingComponents = require("ordering-components");
var _AiFillStar = _interopRequireDefault(require("@meronex/icons/ai/AiFillStar"));
var _Confirm = require("../../../../../components/Confirm");
var _Inputs = require("../../../../../styles/Inputs");
var _utils = require("../../../../../utils");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReviewOrderUI = function ReviewOrderUI(props) {
  var _props$beforeElements, _props$beforeComponen, _order$business, _theme$images, _order$business2, _order$business3, _props$beforeMidEleme, _props$beforeMidCompo, _props$afterMidElemen, _props$afterMidCompon, _props$afterComponent, _props$afterElements;
  var order = props.order;
  var theme = (0, _styledComponents.useTheme)();
  var stars = props.stars,
    handleChangeInput = props.handleChangeInput,
    handleChangeRating = props.handleChangeRating,
    handleSendReview = props.handleSendReview,
    formState = props.formState,
    closeReviewOrder = props.closeReviewOrder,
    setIsReviewed = props.setIsReviewed;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)(stars),
    _useState2 = _slicedToArray(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: [],
      success: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
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
      setIsReviewed(true);
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
  var StarsComponent = function StarsComponent(_ref) {
    var name = _ref.name;
    return _toConsumableArray(Array(5)).map(function (star, i) {
      return /*#__PURE__*/_react.default.createElement("label", {
        key: i,
        onMouseLeave: function onMouseLeave() {
          return setHover(stars);
        }
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        name: name,
        value: i + 1,
        onClick: function onClick(e) {
          return handleChangeRating(e);
        }
      }), /*#__PURE__*/_react.default.createElement(_AiFillStar.default, {
        color: i + 1 <= (hover[name] || stars[name]) ? '#FFD605' : 'gray',
        size: 25,
        onMouseEnter: function onMouseEnter() {
          return setHover(_defineProperty({}, name, i + 1));
        }
      }));
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ReviewOrderContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.ReviewOrderInnerContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('WANNA_KNOW_OPINION', 'We want to know your opinion')), /*#__PURE__*/_react.default.createElement(_styles.BusinessGeneralInfo, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: (order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.address))), /*#__PURE__*/_react.default.createElement(_styles.Reviews, null, /*#__PURE__*/_react.default.createElement(_styles.Categories, {
    id: "list"
  }, Object.keys(stars).map(function (key) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: key
    }, key !== 'Comments' && /*#__PURE__*/_react.default.createElement(_styles.InvisibleInput, {
      type: "text",
      name: key,
      value: stars[key],
      ref: register({
        validate: function validate(value) {
          return value === '0' ? t('CATEGORY_ATLEAST_ONE', "".concat((0, _utils.capitalize)(key), " must be at least one point")).replace('CATEGORY', key.toUpperCase()) : null;
        }
      }),
      disabled: true
    }));
  }), (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Category, {
    id: "stars",
    onMouseLeave: function onMouseLeave() {
      return setHover(stars);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('QUALITY', 'Quality of Product')), /*#__PURE__*/_react.default.createElement(_styles.Stars, null, /*#__PURE__*/_react.default.createElement(StarsComponent, {
    name: "quality"
  }))), /*#__PURE__*/_react.default.createElement(_styles.Category, {
    id: "stars",
    onMouseLeave: function onMouseLeave() {
      return setHover(stars);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('PUNCTUALITY', 'Punctuality')), /*#__PURE__*/_react.default.createElement(_styles.Stars, null, /*#__PURE__*/_react.default.createElement(StarsComponent, {
    name: "punctiality"
  }))), /*#__PURE__*/_react.default.createElement(_styles.Category, {
    id: "stars",
    onMouseLeave: function onMouseLeave() {
      return setHover(stars);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('SERVICE', 'Service')), /*#__PURE__*/_react.default.createElement(_styles.Stars, null, /*#__PURE__*/_react.default.createElement(StarsComponent, {
    name: "service"
  }))), /*#__PURE__*/_react.default.createElement(_styles.Category, {
    id: "stars",
    onMouseLeave: function onMouseLeave() {
      return setHover(stars);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_PACKAGING', 'Product Packaging')), /*#__PURE__*/_react.default.createElement(_styles.Stars, null, /*#__PURE__*/_react.default.createElement(StarsComponent, {
    name: "packaging"
  }))))), /*#__PURE__*/_react.default.createElement(_styles.Comments, null, /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    rows: 4,
    placeholder: t('COMMENTS', 'Comments'),
    name: "comments",
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      required: t('FIELD_COMMENT_REQUIRED', 'The field comments is required')
    }),
    autoComplete: "off"
  })), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Send, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !formState.loading ? 'primary' : 'secondary',
    type: "submit",
    disabled: formState.loading
  }, !formState.loading ? t('SEND_REVIEW', 'Send a Review') : t('LOADING', 'Loading'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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