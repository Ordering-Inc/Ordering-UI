"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wallets = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _WalletTransactionItem = require("../WalletTransactionItem");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _Tabs = require("../../styles/Tabs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WalletsUI = function WalletsUI(props) {
  var _configs$wallet_cash_, _configs$wallet_credi, _ref, _walletList$wallets, _walletList$wallets2, _walletList$wallets3, _walletList$wallets4, _configs$stripe_curre, _transactionsList$lis, _transactionsList$lis2, _transactionsList$lis3, _transactionsList$lis4, _transactionsList$lis5, _transactionsList$lis6, _walletList$wallets5;

  var walletList = props.walletList,
      transactionsList = props.transactionsList,
      setWalletSelected = props.setWalletSelected;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var isWalletCashEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1';
  var isWalletPointsEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1';

  var _useState = (0, _react.useState)(isWalletCashEnabled ? 'cash' : 'credit_point'),
      _useState2 = _slicedToArray(_useState, 2),
      tabSelected = _useState2[0],
      setTabSelected = _useState2[1];

  var currentWalletSelected = (_ref = ((_walletList$wallets = walletList.wallets) === null || _walletList$wallets === void 0 ? void 0 : _walletList$wallets.length) > 0 && ((_walletList$wallets2 = walletList.wallets) === null || _walletList$wallets2 === void 0 ? void 0 : _walletList$wallets2.find(function (w) {
    return w.type === tabSelected;
  }))) !== null && _ref !== void 0 ? _ref : null;
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

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !walletList.loading && !walletList.error && ((_walletList$wallets3 = walletList.wallets) === null || _walletList$wallets3 === void 0 ? void 0 : _walletList$wallets3.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, (_walletList$wallets4 = walletList.wallets) === null || _walletList$wallets4 === void 0 ? void 0 : _walletList$wallets4.map(function (wallet) {
    var _walletName$wallet$ty, _walletName$wallet$ty2;

    return ((_walletName$wallet$ty = walletName[wallet.type]) === null || _walletName$wallet$ty === void 0 ? void 0 : _walletName$wallet$ty.isActive) && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      key: wallet.id,
      active: tabSelected === wallet.type,
      onClick: function onClick() {
        return handleChangeTab(wallet);
      },
      borderBottom: true
    }, (_walletName$wallet$ty2 = walletName[wallet.type]) === null || _walletName$wallet$ty2 === void 0 ? void 0 : _walletName$wallet$ty2.name);
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '70%',
      margin: '0 auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.SectionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BalanceElement, null, /*#__PURE__*/_react.default.createElement("h1", null, (currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.type) === 'cash' ? parsePrice(currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.balance) : currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.balance), /*#__PURE__*/_react.default.createElement("span", null, (currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.type) === 'cash' ? configs === null || configs === void 0 ? void 0 : (_configs$stripe_curre = configs.stripe_currency) === null || _configs$stripe_curre === void 0 ? void 0 : _configs$stripe_curre.value : t('POINTS', 'Points')))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: 20
    }
  }, !(transactionsList !== null && transactionsList !== void 0 && transactionsList.loading) && ((_transactionsList$lis = transactionsList.list) === null || _transactionsList$lis === void 0 ? void 0 : (_transactionsList$lis2 = _transactionsList$lis["wallet:".concat(currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.id)]) === null || _transactionsList$lis2 === void 0 ? void 0 : _transactionsList$lis2.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontSize: 20
    }
  }, t('TRANSACTIONS_HISTORY', 'Transactions history')), /*#__PURE__*/_react.default.createElement(_styles.TransactionsWrapper, null, (_transactionsList$lis3 = transactionsList.list) === null || _transactionsList$lis3 === void 0 ? void 0 : (_transactionsList$lis4 = _transactionsList$lis3["wallet:".concat(currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.id)]) === null || _transactionsList$lis4 === void 0 ? void 0 : _transactionsList$lis4.map(function (transaction, i) {
    return /*#__PURE__*/_react.default.createElement(_WalletTransactionItem.WalletTransactionItem, {
      idx: i,
      type: currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.type,
      key: transaction.id,
      item: transaction
    });
  }))), (transactionsList === null || transactionsList === void 0 ? void 0 : transactionsList.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(8).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SectionWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 40
    }));
  })), !(transactionsList !== null && transactionsList !== void 0 && transactionsList.loading) && ((transactionsList === null || transactionsList === void 0 ? void 0 : transactionsList.error) || !((_transactionsList$lis5 = transactionsList.list) !== null && _transactionsList$lis5 !== void 0 && (_transactionsList$lis6 = _transactionsList$lis5["wallet:".concat(currentWalletSelected === null || currentWalletSelected === void 0 ? void 0 : currentWalletSelected.id)]) !== null && _transactionsList$lis6 !== void 0 && _transactionsList$lis6.length)) && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: transactionsList !== null && transactionsList !== void 0 && transactionsList.error ? t('ERROR_NOT_FOUND_TRANSACTIONS', 'Sorry, an error has occurred') : t('NOT_FOUND_TRANSACTIONS', 'No transactions to show at this time.')
  })))), (walletList === null || walletList === void 0 ? void 0 : walletList.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
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
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 40
    }));
  }))), !(walletList !== null && walletList !== void 0 && walletList.loading) && ((walletList === null || walletList === void 0 ? void 0 : walletList.error) || !(walletList !== null && walletList !== void 0 && (_walletList$wallets5 = walletList.wallets) !== null && _walletList$wallets5 !== void 0 && _walletList$wallets5.length)) && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: walletList !== null && walletList !== void 0 && walletList.error ? t('ERROR_NOT_FOUND_WALLETS', 'Sorry, an error has occurred') : t('NOT_FOUND_WALLETS', 'No wallets to show at this time.')
  }));
};

var Wallets = function Wallets(props) {
  var walletsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: WalletsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.WalletList, walletsProps);
};

exports.Wallets = Wallets;