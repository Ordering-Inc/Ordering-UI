"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wallets = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _WalletTransactionItem = require("../WalletTransactionItem");
var _Tabs = require("../../styles/Tabs");
var _GiftCardUI = require("../GiftCard/GiftCardUI");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var WalletsUI = function WalletsUI(props) {
  var _ref, _walletList$wallets, _walletList$wallets2, _userLoyaltyLevel$loy, _walletList$wallets3, _walletList$wallets4, _configs$stripe_curre, _transactionsList$lis, _transactionsList$lis2, _loyaltyLevel$image, _transactionsList$lis3, _walletList$wallets5, _walletList$wallets6;
  var walletList = props.walletList,
    userLoyaltyLevel = props.userLoyaltyLevel,
    transactionsList = props.transactionsList,
    setWalletSelected = props.setWalletSelected,
    isWalletCashEnabled = props.isWalletCashEnabled,
    isWalletPointsEnabled = props.isWalletPointsEnabled;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(isWalletCashEnabled ? 'cash' : 'credit_point'),
    _useState2 = _slicedToArray(_useState, 2),
    tabSelected = _useState2[0],
    setTabSelected = _useState2[1];
  var currentWalletSelected = (_ref = ((_walletList$wallets = walletList.wallets) === null || _walletList$wallets === void 0 ? void 0 : _walletList$wallets.length) > 0 && ((_walletList$wallets2 = walletList.wallets) === null || _walletList$wallets2 === void 0 ? void 0 : _walletList$wallets2.find(function (w) {
    return w.type === tabSelected;
  }))) !== null && _ref !== void 0 ? _ref : null;
  var loyaltyLevel = Object.keys((_userLoyaltyLevel$loy = userLoyaltyLevel.loyaltyLevel) !== null && _userLoyaltyLevel$loy !== void 0 ? _userLoyaltyLevel$loy : {}).length > 0 && userLoyaltyLevel.loyaltyLevel;
  var walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet'),
      value: 0,
      isActive: isWalletCashEnabled
    },
    credit_point: {
      name: t('CREDITS_POINTS_WALLET', 'Credit Points Wallet'),
      value: 1,
      isActive: isWalletPointsEnabled
    }
  };
  var handleChangeTab = function handleChangeTab(wallet) {
    setTabSelected(wallet.type);
    setWalletSelected(wallet.id);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !walletList.loading && !userLoyaltyLevel.loading && !walletList.error && ((_walletList$wallets3 = walletList.wallets) === null || _walletList$wallets3 === void 0 ? void 0 : _walletList$wallets3.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('WALLETS', 'Wallets')), /*#__PURE__*/_react.default.createElement(_styles.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary",
    className: "tabs"
  }, (_walletList$wallets4 = walletList.wallets) === null || _walletList$wallets4 === void 0 ? void 0 : _walletList$wallets4.map(function (wallet) {
    var _walletName$wallet$ty, _walletName$wallet$ty2;
    return ((_walletName$wallet$ty = walletName[wallet.type]) === null || _walletName$wallet$ty === void 0 ? void 0 : _walletName$wallet$ty.isActive) && /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      key: wallet.id,
      active: tabSelected === wallet.type,
      onClick: function onClick() {
        return handleChangeTab(wallet);
      },
      borderBottom: true,
      className: "tab_title"
    }, (_walletName$wallet$ty2 = walletName[wallet.type]) === null || _walletName$wallet$ty2 === void 0 ? void 0 : _walletName$wallet$ty2.name);
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(_styles.Transactions, {
    isLoyaltyLevel: !!loyaltyLevel
  }, /*#__PURE__*/_react.default.createElement(_styles.SectionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BalanceElement, null, /*#__PURE__*/_react.default.createElement("h1", null, (currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.type) === 'cash' ? parsePrice(currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.balance) : currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.balance), /*#__PURE__*/_react.default.createElement("span", null, (currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.type) === 'cash' ? configs === null || configs === void 0 || (_configs$stripe_curre = configs.stripe_currency) === null || _configs$stripe_curre === void 0 ? void 0 : _configs$stripe_curre.value : t('POINTS', 'Points')))), (currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.type) === 'cash' && /*#__PURE__*/_react.default.createElement(_GiftCardUI.GiftCardUI, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "transactions_list"
  }, !(transactionsList !== null && transactionsList !== void 0 && transactionsList.loading) && ((_transactionsList$lis = transactionsList.list) === null || _transactionsList$lis === void 0 || (_transactionsList$lis = _transactionsList$lis["wallet:".concat(currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.id)]) === null || _transactionsList$lis === void 0 ? void 0 : _transactionsList$lis.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontSize: 20
    }
  }, t('TRANSACTIONS_HISTORY', 'Transactions history')), /*#__PURE__*/_react.default.createElement(_styles.TransactionsWrapper, null, (_transactionsList$lis2 = transactionsList.list) === null || _transactionsList$lis2 === void 0 || (_transactionsList$lis2 = _transactionsList$lis2["wallet:".concat(currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.id)]) === null || _transactionsList$lis2 === void 0 ? void 0 : _transactionsList$lis2.map(function (transaction, i) {
    return /*#__PURE__*/_react.default.createElement(_WalletTransactionItem.WalletTransactionItem, {
      idx: i,
      type: currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.type,
      key: transaction.id,
      item: transaction
    });
  }))), (transactionsList === null || transactionsList === void 0 ? void 0 : transactionsList.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(8).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SectionWrapper, {
      key: i,
      isLoading: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 40
    }));
  })))), !!loyaltyLevel && tabSelected === 'credit_point' && /*#__PURE__*/_react.default.createElement(_styles.LoyaltyContent, null, /*#__PURE__*/_react.default.createElement(_styles.LoyaltyWrapp, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "loyalty_title"
  }, t('LOYALTY_LEVEL_TITLE', 'Your level is'), ":"), /*#__PURE__*/_react.default.createElement("img", {
    src: (_loyaltyLevel$image = loyaltyLevel.image) !== null && _loyaltyLevel$image !== void 0 ? _loyaltyLevel$image : theme.images.dummies.loyaltyLevel
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "loyalty_name"
  }, loyaltyLevel.name))))), ((walletList === null || walletList === void 0 ? void 0 : walletList.loading) || userLoyaltyLevel.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 40,
    style: {
      marginRight: 10
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 40,
    style: {
      marginRight: 10
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 40,
    style: {
      marginBottom: 15
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '85%',
      margin: '0 auto'
    }
  }, _toConsumableArray(Array(8).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SectionWrapper, {
      key: i,
      isLoading: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 40
    }));
  }))), !(transactionsList !== null && transactionsList !== void 0 && transactionsList.loading) && ((transactionsList === null || transactionsList === void 0 ? void 0 : transactionsList.error) || !((_transactionsList$lis3 = transactionsList.list) !== null && _transactionsList$lis3 !== void 0 && (_transactionsList$lis3 = _transactionsList$lis3["wallet:".concat(currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.id)]) !== null && _transactionsList$lis3 !== void 0 && _transactionsList$lis3.length)) && !walletList.loading && !userLoyaltyLevel.loading && !walletList.error && ((_walletList$wallets5 = walletList.wallets) === null || _walletList$wallets5 === void 0 ? void 0 : _walletList$wallets5.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.NotFoundText, null, transactionsList !== null && transactionsList !== void 0 && transactionsList.error ? t('ERROR_NOT_FOUND_TRANSACTIONS', 'Sorry, an error has occurred') : t('NOT_FOUND_TRANSACTIONS', 'No transactions to show at this time.')), !(walletList !== null && walletList !== void 0 && walletList.loading) && !userLoyaltyLevel.loading && ((walletList === null || walletList === void 0 ? void 0 : walletList.error) || !(walletList !== null && walletList !== void 0 && (_walletList$wallets6 = walletList.wallets) !== null && _walletList$wallets6 !== void 0 && _walletList$wallets6.length)) && /*#__PURE__*/_react.default.createElement(_styles.NotFoundText, null, walletList !== null && walletList !== void 0 && walletList.error ? t('ERROR_NOT_FOUND_WALLETS', 'Sorry, an error has occurred') : t('NOT_FOUND_WALLETS', 'No wallets to show at this time.')));
};
var Wallets = exports.Wallets = function Wallets(props) {
  var _configs$wallet_cash_, _configs$wallet_credi;
  var _useConfig3 = (0, _orderingComponents.useConfig)(),
    _useConfig4 = _slicedToArray(_useConfig3, 1),
    configs = _useConfig4[0].configs;
  var isWalletCashEnabled = (configs === null || configs === void 0 || (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1';
  var isWalletPointsEnabled = (configs === null || configs === void 0 || (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1';
  var walletsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: WalletsUI,
    isWalletCashEnabled: isWalletCashEnabled,
    isWalletPointsEnabled: isWalletPointsEnabled
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.WalletList, walletsProps);
};