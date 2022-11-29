"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionOpenPay = exports.PaymentCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));
var _styledComponents = require("styled-components");
var _Modal = require("../Modal");
var _Confirm = require("../Confirm");
var _NotFoundSource = require("../NotFoundSource");
var _ValidateInfo = _interopRequireDefault(require("./ValidateInfo"));
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _Inputs = require("../../styles/Inputs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var PaymentOptionOpenPayUI = function PaymentOptionOpenPayUI(props) {
  var _props$beforeElements, _props$beforeComponen, _cardsList$error$, _cardsList$cards, _errors$message, _errors$message$toLow, _props$afterComponent, _props$afterElements;
  var deleteCard = props.deleteCard,
    cardsList = props.cardsList,
    _handleCardClick = props.handleCardClick,
    handleNewCard = props.handleNewCard;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirm = _useState2[0],
    setConfirm = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    addCartOpen = _useState4[0],
    setAddCardOpen = _useState4[1];
  var _useState5 = (0, _react.useState)({
      cardName: '',
      cardNumber: '',
      cardMonth: '',
      cardYear: '',
      cardSecurityCode: '',
      focus: ''
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    values = _useState6[0],
    setValues = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    errors = _useState8[0],
    setErrors = _useState8[1];
  var _handleDeleteCard = function handleDeleteCard(card) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_CARD', 'Are you sure that you want to delete the card?'),
      handleOnAccept: function handleOnAccept() {
        deleteCard(card);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if ((0, _ValidateInfo.default)(values).variant === 'success') {
      setAddCardOpen(false);
      handleNewCard(values);
      setValues({
        cardName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardSecurityCode: '',
        focus: ''
      });
    } else {
      setErrors((0, _ValidateInfo.default)(values));
    }
  };
  var closeAlert = function closeAlert() {
    setErrors(_objectSpread(_objectSpread({}, errors), {}, {
      show: false,
      border: true
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.OptionStripeContainer, null, !token && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, t('NEED_LOGIN_TO_USE', 'Sorry, you need to login to use this method')), token && cardsList.error && cardsList.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: (cardsList === null || cardsList === void 0 ? void 0 : (_cardsList$error$ = cardsList.error[0]) === null || _cardsList$error$ === void 0 ? void 0 : _cardsList$error$.message) || (cardsList === null || cardsList === void 0 ? void 0 : cardsList.error[0])
  }), token && cardsList.cards && cardsList.cards.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cardsList === null || cardsList === void 0 ? void 0 : (_cardsList$cards = cardsList.cards) === null || _cardsList$cards === void 0 ? void 0 : _cardsList$cards.map(function (card, i) {
    return /*#__PURE__*/_react.default.createElement(PaymentCard, _extends({}, props, {
      key: i,
      handleCardClick: function handleCardClick() {
        return _handleCardClick(card);
      },
      handleDeleteCard: function handleDeleteCard() {
        return _handleDeleteCard(card);
      },
      card: card,
      defaultSelected: i === 0
    }));
  })), token && !cardsList.loading && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return setAddCardOpen(true);
    },
    color: "primary"
  }, t('ADD_NEW_CARD', 'Add new card')), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADD_NEW_CARD', 'Add new card'),
    className: "modal-info",
    open: addCartOpen,
    onClose: function onClose() {
      return setAddCardOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.CardForm, null, /*#__PURE__*/_react.default.createElement(_styles.Row, null, /*#__PURE__*/_react.default.createElement(_styles.InputContainer, {
    isValid: errors.cname,
    showBorder: errors.border
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    "data-openpay-card": "holder_name",
    id: "holderName",
    value: values.cardName,
    name: "cardName",
    onChange: handleChange,
    placeholder: t('HOLDER_NAME', 'Holder Name')
  }))), /*#__PURE__*/_react.default.createElement(_styles.Row, null, /*#__PURE__*/_react.default.createElement(_styles.InputContainer, {
    isValid: errors.cnumber,
    showBorder: errors.border
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    "data-openpay-card": "card_number",
    id: "cardNumber",
    value: values.cardNumber,
    name: "cardNumber",
    onChange: handleChange,
    maxLength: 16,
    placeholder: t('CARD_NUMBER', 'Card number')
  }))), /*#__PURE__*/_react.default.createElement(_styles.Row, null, /*#__PURE__*/_react.default.createElement(_styles.InputContainer, {
    isValid: errors.year,
    showBorder: errors.border
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "cardYear",
    "data-openpay-card": "expiration_year",
    id: "expirationYear",
    onChange: handleChange,
    maxLength: 2,
    placeholder: t('EXPIRATION_YEAR', 'Expiration year')
  })), /*#__PURE__*/_react.default.createElement(_styles.InputContainer, {
    isValid: errors.month,
    showBorder: errors.border
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "cardMonth",
    "data-openpay-card": "expiration_month",
    id: "expirationMonth",
    onChange: handleChange,
    maxLength: 2,
    placeholder: t('EXPIRATION_MONTH', 'Expiration month')
  })), /*#__PURE__*/_react.default.createElement(_styles.InputContainer, {
    isValid: errors.cvv,
    showBorder: errors.border
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "cardSecurityCode",
    "data-openpay-card": "cvv2",
    id: "cvv2",
    maxLength: 4,
    onChange: handleChange,
    placeholder: "CVV"
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: handleSubmit,
    color: "primary"
  }, t('ADD_CARD', 'Add Card')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PAYMENT_METHODS', 'Payment methods'),
    content: t(errors.message, errors === null || errors === void 0 ? void 0 : (_errors$message = errors.message) === null || _errors$message === void 0 ? void 0 : (_errors$message$toLow = _errors$message.toLowerCase()) === null || _errors$message$toLow === void 0 ? void 0 : _errors$message$toLow.replaceAll('_', ' ')),
    acceptText: t('ACCEPT', 'Accept'),
    open: errors.show,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('CARD', 'Card'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), token && (cardsList === null || cardsList === void 0 ? void 0 : cardsList.loading) && _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.BlockLoading, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 50
    }));
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
var PaymentCard = function PaymentCard(props) {
  var handleDeleteCard = props.handleDeleteCard,
    card = props.card,
    handleCardClick = props.handleCardClick,
    onSelectCard = props.onSelectCard;
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isShowActions = _useState10[0],
    setIsShowActions = _useState10[1];
  var cardActionsRef = (0, _react.useRef)(null);
  var actionWrapperRef = (0, _react.useRef)(null);
  var getIconCard = function getIconCard() {
    var _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _theme$images3, _theme$images3$genera;
    var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var value = brand.toLowerCase();
    switch (value) {
      case 'visa':
        return (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.visa;
      case 'mastercard':
        return (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.mastercard;
      default:
        return (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$genera = _theme$images3.general) === null || _theme$images3$genera === void 0 ? void 0 : _theme$images3$genera.credit;
    }
  };
  var handleClickOutside = function handleClickOutside(e) {
    var _cardActionsRef$curre;
    if (!isShowActions) return;
    var outsideCalendar = !((_cardActionsRef$curre = cardActionsRef.current) !== null && _cardActionsRef$curre !== void 0 && _cardActionsRef$curre.contains(e.target));
    if (outsideCalendar) {
      setIsShowActions(false);
    }
  };
  var handleChangeDefaultCard = function handleChangeDefaultCard(e) {
    var _actionWrapperRef$cur, _window, _window$OpenPay, _window$OpenPay$devic, _window$OpenPay$devic2;
    if ((_actionWrapperRef$cur = actionWrapperRef.current) !== null && _actionWrapperRef$cur !== void 0 && _actionWrapperRef$cur.contains(e.target)) return;
    handleCardClick(card);
    onSelectCard(_objectSpread(_objectSpread({}, card), {}, {
      id: card.id,
      type: 'card',
      card: {
        brand: card.brand,
        last4: card.last4
      },
      data: {
        card_id: card.id,
        device_session_id: (_window = window) === null || _window === void 0 ? void 0 : (_window$OpenPay = _window.OpenPay) === null || _window$OpenPay === void 0 ? void 0 : (_window$OpenPay$devic = _window$OpenPay.deviceData) === null || _window$OpenPay$devic === void 0 ? void 0 : (_window$OpenPay$devic2 = _window$OpenPay$devic.setup) === null || _window$OpenPay$devic2 === void 0 ? void 0 : _window$OpenPay$devic2.call(_window$OpenPay$devic)
      }
    }));
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('click', handleClickOutside);
    return function () {
      return window.removeEventListener('click', handleClickOutside);
    };
  }, [isShowActions]);
  return /*#__PURE__*/_react.default.createElement(_styles.CardItem, {
    onClick: handleChangeDefaultCard,
    isCursor: true
  }, /*#__PURE__*/_react.default.createElement(_styles.CardItemContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: getIconCard(card === null || card === void 0 ? void 0 : card.brandCardName),
    alt: card === null || card === void 0 ? void 0 : card.brandCardName
  })), /*#__PURE__*/_react.default.createElement("span", null, card === null || card === void 0 ? void 0 : card.brandCardName, " ", card === null || card === void 0 ? void 0 : card.last4)), /*#__PURE__*/_react.default.createElement(_styles.CardItemActions, null, /*#__PURE__*/_react.default.createElement(_styles.CardItemActionsWrapper, {
    ref: actionWrapperRef
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: cardActionsRef
  }, /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, {
    onClick: function onClick() {
      return setIsShowActions(true);
    }
  })), isShowActions && /*#__PURE__*/_react.default.createElement(_styles.ActionsContent, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "delete",
    onClick: handleDeleteCard
  }, t('DELETE', 'Delete'))))));
};
exports.PaymentCard = PaymentCard;
var PaymentOptionOpenPay = function PaymentOptionOpenPay(props) {
  var paymentOptionStripeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionOpenPayUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PaymentOptionOpenPay, paymentOptionStripeProps);
};
exports.PaymentOptionOpenPay = PaymentOptionOpenPay;