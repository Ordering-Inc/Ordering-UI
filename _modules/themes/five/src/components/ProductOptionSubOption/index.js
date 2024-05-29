"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOptionSubOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _BsCircleFill = _interopRequireDefault(require("@meronex/icons/bs/BsCircleFill"));
var _BsCircleHalf = _interopRequireDefault(require("@meronex/icons/bs/BsCircleHalf"));
var _BsDashCircle = _interopRequireDefault(require("@meronex/icons/bs/BsDashCircle"));
var _BsPlusCircle = _interopRequireDefault(require("@meronex/icons/bs/BsPlusCircle"));
var _styles = require("./styles");
var _MdCheckBox = _interopRequireDefault(require("@meronex/icons/md/MdCheckBox"));
var _MdCheckBoxOutlineBlank = _interopRequireDefault(require("@meronex/icons/md/MdCheckBoxOutlineBlank"));
var _RiRadioButtonFill = _interopRequireDefault(require("@meronex/icons/ri/RiRadioButtonFill"));
var _MdRadioButtonUnchecked = _interopRequireDefault(require("@meronex/icons/md/MdRadioButtonUnchecked"));
var _Confirm = require("../Confirm");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProductOptionSubOptionPropsAreEqual = function ProductOptionSubOptionPropsAreEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps.state) === JSON.stringify(nextProps.state) && JSON.stringify(prevProps.pizzaState) === JSON.stringify(nextProps.pizzaState) && prevProps.balance === nextProps.balance && JSON.stringify(prevProps.productCart) === JSON.stringify(nextProps.productCart);
};
var ProductOptionSubOptionUI = /*#__PURE__*/_react.default.memo(function (props) {
  var _pizzaState, _option$name, _option$name$toLowerC, _pizzaState2, _props$beforeElements, _props$beforeComponen, _pizzaState3, _pizzaState4, _props$afterComponent, _props$afterElements;
  var state = props.state,
    increment = props.increment,
    decrement = props.decrement,
    balance = props.balance,
    option = props.option,
    suboption = props.suboption,
    toggleSelect = props.toggleSelect,
    changePosition = props.changePosition,
    isSoldOut = props.isSoldOut,
    setIsScrollAvailable = props.setIsScrollAvailable,
    usePizzaValidation = props.usePizzaValidation,
    pizzaState = props.pizzaState,
    changeQuantity = props.changeQuantity,
    isAlsea = props.isAlsea,
    quesoYSalsaOptions = props.quesoYSalsaOptions;
  var disableIncrement = option !== null && option !== void 0 && option.with_half_option ? (pizzaState === null || pizzaState === void 0 || (_pizzaState = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState === void 0 ? void 0 : _pizzaState.value) >= (option === null || option === void 0 ? void 0 : option.max) : option !== null && option !== void 0 && option.limit_suboptions_by_max ? balance === (option === null || option === void 0 ? void 0 : option.max) || state.quantity === suboption.max : state.quantity === (suboption === null || suboption === void 0 ? void 0 : suboption.max) || !state.selected && balance === (option === null || option === void 0 ? void 0 : option.max);
  var quesoYSalsa = quesoYSalsaOptions.includes(option === null || option === void 0 || (_option$name = option.name) === null || _option$name === void 0 || (_option$name$toLowerC = _option$name.toLowerCase) === null || _option$name$toLowerC === void 0 ? void 0 : _option$name$toLowerC.call(_option$name));
  var price = option !== null && option !== void 0 && option.with_half_option && suboption !== null && suboption !== void 0 && suboption.half_price && state.position !== 'whole' ? suboption === null || suboption === void 0 ? void 0 : suboption.half_price : suboption === null || suboption === void 0 ? void 0 : suboption.price;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showMessage = _useState2[0],
    setShowMessage = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showAlert = _useState4[0],
    setShowAlert = _useState4[1];
  var dirtyRef = (0, _react.useRef)(null);
  var handleIncrement = function handleIncrement(e) {
    e.stopPropagation();
    increment();
  };
  var handleDecrement = function handleDecrement(e) {
    e.stopPropagation();
    decrement();
  };
  var handlePosition = function handlePosition(e, position) {
    e.stopPropagation && e.stopPropagation();
    changePosition(position);
  };
  var handleSuboptionClick = function handleSuboptionClick() {
    var _option$suboptions;
    dirtyRef.current = true;
    toggleSelect();
    var minMaxValidation = option !== null && option !== void 0 && option.with_half_option ? usePizzaValidation : balance === (option === null || option === void 0 ? void 0 : option.max) && (option === null || option === void 0 || (_option$suboptions = option.suboptions) === null || _option$suboptions === void 0 ? void 0 : _option$suboptions.length) > balance && !((option === null || option === void 0 ? void 0 : option.min) === 1 && (option === null || option === void 0 ? void 0 : option.max) === 1);
    if (!state.selected && minMaxValidation) {
      setShowMessage(true);
      setShowAlert(true);
    }
  };
  var handleChangeQuantity = function handleChangeQuantity(e, quantity) {
    e.stopPropagation();
    changeQuantity(quantity);
  };
  (0, _react.useEffect)(function () {
    var _option$suboptions2;
    var minMaxValidation = option !== null && option !== void 0 && option.with_half_option ? usePizzaValidation : !state.selected && balance === (option === null || option === void 0 ? void 0 : option.max) && (option === null || option === void 0 || (_option$suboptions2 = option.suboptions) === null || _option$suboptions2 === void 0 ? void 0 : _option$suboptions2.length) > balance && !((option === null || option === void 0 ? void 0 : option.min) === 1 && (option === null || option === void 0 ? void 0 : option.max) === 1);
    if (!minMaxValidation) {
      setShowMessage(false);
    }
  }, [balance, pizzaState === null || pizzaState === void 0 || (_pizzaState2 = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState2 === void 0 ? void 0 : _pizzaState2.value]);
  (0, _react.useEffect)(function () {
    if (balance === (option === null || option === void 0 ? void 0 : option.max) && state !== null && state !== void 0 && state.selected && dirtyRef) {
      if ((dirtyRef === null || dirtyRef === void 0 ? void 0 : dirtyRef.current) !== null) {
        dirtyRef.current = false;
        setIsScrollAvailable(true);
      }
    }
  }, [state === null || state === void 0 ? void 0 : state.selected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    onClick: function onClick(e) {
      return quesoYSalsa && isAlsea ? handleChangeQuantity(e, state.quantity === 0 ? 1 : 0) : handleSuboptionClick();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.LeftOptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconControl, null, (option === null || option === void 0 ? void 0 : option.min) === 0 && (option === null || option === void 0 ? void 0 : option.max) === 1 || (option === null || option === void 0 ? void 0 : option.max) > 1 ? state !== null && state !== void 0 && state.selected && !(quesoYSalsa && isAlsea && state.quantity === 0) ? /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null) : /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, {
    disabled: true
  }) : state !== null && state !== void 0 && state.selected ? /*#__PURE__*/_react.default.createElement(_RiRadioButtonFill.default, null) : /*#__PURE__*/_react.default.createElement(_MdRadioButtonUnchecked.default, {
    disabled: true
  })), suboption.image && suboption.image !== '-' && /*#__PURE__*/_react.default.createElement(_styles.SubOptionThumbnail, {
    src: suboption.image
  }), /*#__PURE__*/_react.default.createElement(_styles.Text, null, /*#__PURE__*/_react.default.createElement("div", null, suboption === null || suboption === void 0 ? void 0 : suboption.name))), /*#__PURE__*/_react.default.createElement(_styles.RightOptionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.QuantityControl, null, !((option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1) && (option === null || option === void 0 ? void 0 : option.allow_suboption_quantity) && (state === null || state === void 0 ? void 0 : state.selected) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsDashCircle.default, {
    disabled: state.quantity === 0 || isSoldOut,
    onClick: handleDecrement
  }), state.quantity, /*#__PURE__*/_react.default.createElement(_BsPlusCircle.default, {
    disabled: disableIncrement || isSoldOut || usePizzaValidation,
    onClick: handleIncrement
  }))), /*#__PURE__*/_react.default.createElement(_styles.PositionControl, null, (option === null || option === void 0 ? void 0 : option.with_half_option) && (state === null || state === void 0 ? void 0 : state.selected) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsCircleHalf.default, {
    className: ['reverse', state.selected && state.position === 'left' ? 'selected' : null].filter(function (classname) {
      return classname;
    }).join(' '),
    onClick: function onClick(e) {
      return handlePosition(e, 'left');
    }
  }), /*#__PURE__*/_react.default.createElement(_BsCircleFill.default, {
    className: [(pizzaState === null || pizzaState === void 0 || (_pizzaState3 = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState3 === void 0 ? void 0 : _pizzaState3.value) >= (option === null || option === void 0 ? void 0 : option.max) && !((option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1) ? 'disabled' : '', state.selected && state.position === 'whole' ? 'selected' : null].filter(function (classname) {
      return classname;
    }).join(' '),
    onClick: function onClick(e) {
      return handlePosition(e, 'whole');
    }
  }), /*#__PURE__*/_react.default.createElement(_BsCircleHalf.default, {
    className: [state.selected && state.position === 'right' ? 'selected' : null].filter(function (classname) {
      return classname;
    }).join(' '),
    onClick: function onClick(e) {
      return handlePosition(e, 'right');
    }
  }))), ((option === null || option === void 0 ? void 0 : option.with_half_option) || quesoYSalsa) && (state === null || state === void 0 ? void 0 : state.selected) && state.quantity > 0 && isAlsea && /*#__PURE__*/_react.default.createElement(_styles.ExtraControl, null, state.quantity >= 2 ? /*#__PURE__*/_react.default.createElement(_styles.ExtraItem, {
    onClick: function onClick(e) {
      return handleChangeQuantity(e, 1);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.Text, null, /*#__PURE__*/_react.default.createElement("div", null, t('EXTRA', 'Extra'))), " ", /*#__PURE__*/_react.default.createElement(_MdCheckBox.default, null)) : /*#__PURE__*/_react.default.createElement(_styles.ExtraItem, {
    onClick: function onClick(e) {
      return handleChangeQuantity(e, 2);
    },
    className: (pizzaState === null || pizzaState === void 0 || (_pizzaState4 = pizzaState["option:".concat(option === null || option === void 0 ? void 0 : option.id)]) === null || _pizzaState4 === void 0 ? void 0 : _pizzaState4.value) >= (option === null || option === void 0 ? void 0 : option.max) && !((option === null || option === void 0 ? void 0 : option.max) === 1 && (option === null || option === void 0 ? void 0 : option.min) === 1) ? 'disabled' : ''
  }, /*#__PURE__*/_react.default.createElement(_styles.Text, null, /*#__PURE__*/_react.default.createElement("div", null, t('EXTRA', 'Extra'))), " ", /*#__PURE__*/_react.default.createElement(_MdCheckBoxOutlineBlank.default, {
    disabled: true
  })))), /*#__PURE__*/_react.default.createElement(_styles.SuboptionPrice, null, price > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "+ ", parsePrice(price)))), showMessage && /*#__PURE__*/_react.default.createElement(_styles.Text, {
    noMargin: true
  }, /*#__PURE__*/_react.default.createElement("span", null, "".concat(t('OPTIONS_MAX_LIMIT', 'Maximum options to choose'), ": ").concat(option === null || option === void 0 ? void 0 : option.max))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PRODUCT_FORM', 'Product form'),
    content: "".concat(t('OPTIONS_MAX_LIMIT', 'Maximum options to choose'), ": ").concat(option === null || option === void 0 ? void 0 : option.max),
    open: showAlert && showMessage,
    acceptText: t('ACCEPT', 'Accept'),
    onClose: function onClose() {
      return setShowAlert(false);
    },
    onAccept: function onAccept() {
      return setShowAlert(false);
    },
    closeOnBackdrop: false
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
}, ProductOptionSubOptionPropsAreEqual);
var ProductOptionSubOption = exports.ProductOptionSubOption = function ProductOptionSubOption(props) {
  var productOptionSubOptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductOptionSubOptionUI,
    isOrigin: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductOptionSuboption, productOptionSubOptionProps);
};