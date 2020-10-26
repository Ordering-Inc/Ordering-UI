"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewOrder = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _Confirm = require("../Confirm");

var _ai = require("react-icons/ai");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ReviewOrderUI = function ReviewOrderUI(props) {
  var stars = props.stars,
      handleChangeInput = props.handleChangeInput,
      handleChangeRating = props.handleChangeRating,
      handleSendReview = props.handleSendReview,
      formState = props.formState;

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

    if (!formState.loading && ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.error)) {
      var _formState$result2;

      setAlertState({
        open: true,
        success: false,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR')]
      });
    }

    if (!formState.loading && !((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.error) && alertState.success) {
      setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        open: true,
        title: t('REVIEW_SUCCESS'),
        content: t('REVIEW_SUCCESS')
      }));
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
    setAlertState({
      open: false,
      content: []
    });
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
      }), /*#__PURE__*/_react.default.createElement(_ai.AiFillStar, {
        color: i + 1 <= (hover[name] || stars[name]) ? 'yellow' : 'gray',
        size: 25,
        onMouseEnter: function onMouseEnter() {
          return setHover(_defineProperty({}, name, i + 1));
        }
      }));
    });
  };

  return /*#__PURE__*/_react.default.createElement(_styles.ReviewOrderContainer, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.Reviews, null, /*#__PURE__*/_react.default.createElement("h2", null, t('REVIEWS', 'Reviews'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Categories, null, /*#__PURE__*/_react.default.createElement(_styles.Category, {
    onMouseLeave: function onMouseLeave() {
      return setHover(stars);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('QUALITY', 'Quality of Product'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Stars, null, /*#__PURE__*/_react.default.createElement(StarsComponent, {
    name: "quality"
  }))), /*#__PURE__*/_react.default.createElement(_styles.Category, {
    onMouseLeave: function onMouseLeave() {
      return setHover(stars);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('PUNCTUALITY', 'Punctuality'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Stars, null, /*#__PURE__*/_react.default.createElement(StarsComponent, {
    name: "punctiality"
  }))), /*#__PURE__*/_react.default.createElement(_styles.Category, {
    onMouseLeave: function onMouseLeave() {
      return setHover(stars);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('SERVICE', 'Service'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Stars, null, /*#__PURE__*/_react.default.createElement(StarsComponent, {
    name: "service"
  }))), /*#__PURE__*/_react.default.createElement(_styles.Category, {
    onMouseLeave: function onMouseLeave() {
      return setHover(stars);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('PRODUCT_PACKAGING', 'Product Packaging'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Stars, null, /*#__PURE__*/_react.default.createElement(StarsComponent, {
    name: "packaging"
  }))))), /*#__PURE__*/_react.default.createElement(_styles.Comments, null, /*#__PURE__*/_react.default.createElement("h2", null, t('COMMENTS', 'Comments'), ":"), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: t('COMMENTS', 'Comments'),
    name: "comments",
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    ref: register({
      required: t('FIELD_COMMENT_REQUIRED', 'The field comments is required')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles.Send, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit"
  }, t('SEND_REVIEW', 'Send a Review'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ORDER REVIEW'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
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

var ReviewOrder = function ReviewOrder(props) {
  var ReviewOrderProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ReviewOrderUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderReview, ReviewOrderProps);
};

exports.ReviewOrder = ReviewOrder;