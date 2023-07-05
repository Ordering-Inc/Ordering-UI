"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionStripeUI = exports.PaymentOptionStripe = exports.PaymentCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _StripeElementsForm = require("../StripeElementsForm");
var _IosRadioButtonOn = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOn"));
var _IosRadioButtonOff = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOff"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _Shared = require("../../../Shared");
var _utils = require("../../../../../../../utils");
var _styles = require("./styles");
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PaymentOptionStripeUI = function PaymentOptionStripeUI(props) {
  var _validationFields$fie, _validationFields$fie2, _props$beforeElements, _props$beforeComponen, _cardsList$error$, _cardsList$cards2, _props$afterComponent, _props$afterElements;
  var deleteCard = props.deleteCard,
    cardsList = props.cardsList,
    _handleCardClick = props.handleCardClick,
    handleNewCard = props.handleNewCard,
    paymethodSelected = props.paymethodSelected,
    cardSelected = props.cardSelected,
    gateway = props.gateway;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
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
  var validateZipcodeCard = (validationFields === null || validationFields === void 0 || (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.card) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.zipcode) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.enabled) && (validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.card) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.zipcode) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.required);
  var paymethodsWithoutSaveCards = ['credomatic'];
  var _handleNewCard = function _handleNewCard(card) {
    setAddCardOpen(false);
    handleNewCard(card);
  };
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
  (0, _react.useEffect)(function () {
    var _cardsList$cards;
    if (!(cardsList !== null && cardsList !== void 0 && cardsList.loading) && (cardsList === null || cardsList === void 0 || (_cardsList$cards = cardsList.cards) === null || _cardsList$cards === void 0 ? void 0 : _cardsList$cards.length) === 0 && !paymethodsWithoutSaveCards.includes(gateway)) {
      setAddCardOpen(true);
    }
  }, [cardsList === null || cardsList === void 0 ? void 0 : cardsList.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.OptionStripeContainer, null, !token && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, t('NEED_LOGIN_TO_USE', 'Sorry, you need to login to use this method')), token && !cardsList.loading && cardsList.cards && cardsList.cards.length === 0 && /*#__PURE__*/_react.default.createElement(_styles.CardItem, null, /*#__PURE__*/_react.default.createElement("span", null, t('NO_CARDS', 'No cards'))), token && cardsList.error && cardsList.error.length > 0 && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: (cardsList === null || cardsList === void 0 || (_cardsList$error$ = cardsList.error[0]) === null || _cardsList$error$ === void 0 ? void 0 : _cardsList$error$.message) || (cardsList === null || cardsList === void 0 ? void 0 : cardsList.error[0])
  }), token && cardsList.cards && cardsList.cards.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cardsList === null || cardsList === void 0 || (_cardsList$cards2 = cardsList.cards) === null || _cardsList$cards2 === void 0 ? void 0 : _cardsList$cards2.map(function (card, i) {
    return /*#__PURE__*/_react.default.createElement(PaymentCard, _extends({}, props, {
      key: i,
      handleCardClick: function handleCardClick() {
        return _handleCardClick(card);
      },
      handleDeleteCard: function handleDeleteCard() {
        return _handleDeleteCard(card);
      },
      card: card,
      defaultSelected: i === 0,
      active: (paymethodSelected || (cardSelected === null || cardSelected === void 0 ? void 0 : cardSelected.id)) === card.id,
      cardSelected: cardSelected,
      paymethodSelected: paymethodSelected,
      validateZipcodeCard: validateZipcodeCard
    }));
  })), token && !cardsList.loading && !paymethodsWithoutSaveCards.includes(gateway) && /*#__PURE__*/_react.default.createElement(_styles.AddNewCard, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setAddCardOpen(true);
    }
  }, t('ADD_NEW_CARD', 'Add new card'))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    title: t('ADD_NEW_CARD', 'Add new card'),
    className: "modal-info",
    open: addCartOpen,
    onClose: function onClose() {
      return setAddCardOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_StripeElementsForm.StripeElementsForm, {
    businessIds: props.businessIds,
    businessId: props.businessId,
    publicKey: props.publicKey,
    toSave: true,
    requirements: props.clientSecret,
    onCancel: function onCancel() {
      return setAddCardOpen(false);
    },
    onNewCard: _handleNewCard
  })), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
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
  }), token && cardsList.loading && _toConsumableArray(Array(5).keys()).map(function (i) {
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
exports.PaymentOptionStripeUI = PaymentOptionStripeUI;
var PaymentCard = function PaymentCard(props) {
  var handleDeleteCard = props.handleDeleteCard,
    card = props.card,
    handleCardClick = props.handleCardClick,
    onSelectCard = props.onSelectCard,
    active = props.active,
    cardSelected = props.cardSelected,
    validateZipcodeCard = props.validateZipcodeCard;
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isShowActions = _useState6[0],
    setIsShowActions = _useState6[1];
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var cardActionsRef = (0, _react.useRef)(null);
  var actionWrapperRef = (0, _react.useRef)(null);
  var theme = (0, _styledComponents.useTheme)();
  var handleClickOutside = function handleClickOutside(e) {
    var _cardActionsRef$curre;
    if (!isShowActions) return;
    var outsideCalendar = !((_cardActionsRef$curre = cardActionsRef.current) !== null && _cardActionsRef$curre !== void 0 && _cardActionsRef$curre.contains(e.target));
    if (outsideCalendar) {
      setIsShowActions(false);
    }
  };
  var handleChangeDefaultCard = function handleChangeDefaultCard(e) {
    var _actionWrapperRef$cur;
    if ((_actionWrapperRef$cur = actionWrapperRef.current) !== null && _actionWrapperRef$cur !== void 0 && _actionWrapperRef$cur.contains(e.target) || !(card !== null && card !== void 0 && card.zipcode) && validateZipcodeCard) return;
    handleCardClick(card);
    onSelectCard && onSelectCard(_objectSpread(_objectSpread({}, cardSelected), {}, {
      id: card.id,
      type: 'card',
      card: {
        brand: card.brand,
        last4: card.last4,
        zipcode: card.zipcode
      }
    }));
  };
  (0, _react.useEffect)(function () {
    var _cardSelected$card, _cardSelected$card2, _cardSelected$card3;
    if (!cardSelected) return;
    onSelectCard && onSelectCard(_objectSpread(_objectSpread({}, cardSelected), {}, {
      id: cardSelected === null || cardSelected === void 0 ? void 0 : cardSelected.id,
      type: 'card',
      card: {
        brand: cardSelected === null || cardSelected === void 0 || (_cardSelected$card = cardSelected.card) === null || _cardSelected$card === void 0 ? void 0 : _cardSelected$card.brand,
        last4: cardSelected === null || cardSelected === void 0 || (_cardSelected$card2 = cardSelected.card) === null || _cardSelected$card2 === void 0 ? void 0 : _cardSelected$card2.last4,
        zipcode: cardSelected === null || cardSelected === void 0 || (_cardSelected$card3 = cardSelected.card) === null || _cardSelected$card3 === void 0 ? void 0 : _cardSelected$card3.zipcode
      }
    }));
  }, [cardSelected]);
  (0, _react.useEffect)(function () {
    window.addEventListener('click', handleClickOutside);
    return function () {
      return window.removeEventListener('click', handleClickOutside);
    };
  }, [isShowActions]);
  return /*#__PURE__*/_react.default.createElement(_styles.CardItem, {
    onClick: handleChangeDefaultCard,
    isCursor: true,
    invalid: !(card !== null && card !== void 0 && card.zipcode) && validateZipcodeCard
  }, /*#__PURE__*/_react.default.createElement(_styles.CardItemContent, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "checks"
  }, active ? /*#__PURE__*/_react.default.createElement(_IosRadioButtonOn.default, null) : /*#__PURE__*/_react.default.createElement(_IosRadioButtonOff.default, null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: (0, _utils.getIconCard)(card === null || card === void 0 ? void 0 : card.brand),
    alt: card === null || card === void 0 ? void 0 : card.brand
  })), /*#__PURE__*/_react.default.createElement("span", null, "XXXX-XXXX-XXXX-", card === null || card === void 0 ? void 0 : card.last4), !(card !== null && card !== void 0 && card.zipcode) && validateZipcodeCard && /*#__PURE__*/_react.default.createElement("p", null, "(", t('MISSING_ZIPCODE', 'Missing zipcode'), ")")), /*#__PURE__*/_react.default.createElement(_styles.CardItemActions, null, /*#__PURE__*/_react.default.createElement(_styles.CardItemActionsWrapper, {
    ref: actionWrapperRef
  }, /*#__PURE__*/_react.default.createElement("span", {
    ref: cardActionsRef
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, {
    color: theme.colors.lightGray,
    onClick: function onClick() {
      return handleDeleteCard();
    }
  })))));
};
exports.PaymentCard = PaymentCard;
var PaymentOptionStripe = function PaymentOptionStripe(props) {
  var paymentOptionStripeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionStripeUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PaymentOptionStripe, paymentOptionStripeProps);
};
exports.PaymentOptionStripe = PaymentOptionStripe;