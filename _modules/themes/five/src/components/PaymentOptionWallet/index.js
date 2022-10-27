"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionWallet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Confirm = require("../Confirm");
var _pfchangs = require("../Confirm/layouts/pfchangs");
var _Checkbox = require("../../../../../styles/Checkbox");
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
var PaymentOptionWalletUI = function PaymentOptionWalletUI(props) {
  var _walletsState$result, _theme$layouts, _theme$layouts$genera, _theme$layouts$genera2, _theme$layouts$genera3, _configs$wallet_cash_, _configs$wallet_credi, _businessConfigs$find, _businessConfigs$find2, _walletsState$result4, _walletsState$result5, _walletsState$result6;
  var cart = props.cart,
    errorState = props.errorState,
    setErrorState = props.setErrorState,
    selectWallet = props.selectWallet,
    walletsState = props.walletsState,
    businessConfigs = props.businessConfigs,
    deletetWalletSelected = props.deletetWalletSelected,
    setHasWallets = props.setHasWallets;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(new Array((_walletsState$result = walletsState.result) === null || _walletsState$result === void 0 ? void 0 : _walletsState$result.length).fill(false)),
    _useState4 = _slicedToArray(_useState3, 2),
    checkedState = _useState4[0],
    setCheckedState = _useState4[1];
  var AlertComponent = (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$genera = _theme$layouts.general) === null || _theme$layouts$genera === void 0 ? void 0 : (_theme$layouts$genera2 = _theme$layouts$genera.components) === null || _theme$layouts$genera2 === void 0 ? void 0 : (_theme$layouts$genera3 = _theme$layouts$genera2.layout) === null || _theme$layouts$genera3 === void 0 ? void 0 : _theme$layouts$genera3.type) === 'pfchangs' ? _pfchangs.Alert : _Confirm.Alert;
  var isWalletCashEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1';
  var isWalletPointsEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1';
  var isBusinessWalletCashEnabled = ((_businessConfigs$find = businessConfigs.find(function (config) {
    return config.key === 'wallet_cash_enabled';
  })) === null || _businessConfigs$find === void 0 ? void 0 : _businessConfigs$find.value) === '1';
  var isBusinessWalletPointsEnabled = ((_businessConfigs$find2 = businessConfigs.find(function (config) {
    return config.key === 'wallet_credit_point_enabled';
  })) === null || _businessConfigs$find2 === void 0 ? void 0 : _businessConfigs$find2.value) === '1';
  var walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet'),
      isActive: isWalletCashEnabled && isBusinessWalletCashEnabled
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet'),
      isActive: isWalletPointsEnabled && isBusinessWalletPointsEnabled
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setErrorState(null);
  };
  var handleOnChange = function handleOnChange(position, wallet) {
    var updatedCheckedState = checkedState.map(function (item, index) {
      return index === position ? !item : item;
    });
    if (!checkedState[position]) {
      selectWallet(wallet);
    } else {
      deletetWalletSelected(wallet);
    }
    setCheckedState(updatedCheckedState);
  };
  (0, _react.useEffect)(function () {
    if (!walletsState.loading) {
      var _walletsState$result2, _walletsState$result3;
      setCheckedState(walletsState === null || walletsState === void 0 ? void 0 : (_walletsState$result2 = walletsState.result) === null || _walletsState$result2 === void 0 ? void 0 : _walletsState$result2.map(function (wallet) {
        var _cart$wallets;
        return !!(cart !== null && cart !== void 0 && (_cart$wallets = cart.wallets) !== null && _cart$wallets !== void 0 && _cart$wallets.find(function (w) {
          return w.id === wallet.id;
        }));
      }));
      var length = (_walletsState$result3 = walletsState.result) === null || _walletsState$result3 === void 0 ? void 0 : _walletsState$result3.map(function (wallet, idx) {
        var _walletName$wallet$ty;
        return wallet.valid && wallet.balance >= 0 && ((_walletName$wallet$ty = walletName[wallet.type]) === null || _walletName$wallet$ty === void 0 ? void 0 : _walletName$wallet$ty.isActive);
      });
      setHasWallets && setHasWallets(length > 0);
    }
  }, [(_walletsState$result4 = walletsState.result) === null || _walletsState$result4 === void 0 ? void 0 : _walletsState$result4.length]);
  (0, _react.useEffect)(function () {
    if (errorState) {
      setAlertState({
        open: true,
        content: errorState
      });
    }
  }, [errorState]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, !walletsState.loading && !walletsState.error && ((_walletsState$result5 = walletsState.result) === null || _walletsState$result5 === void 0 ? void 0 : _walletsState$result5.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_walletsState$result6 = walletsState.result) === null || _walletsState$result6 === void 0 ? void 0 : _walletsState$result6.map(function (wallet, idx) {
    var _walletName$wallet$ty2, _walletsState$result7, _walletName$wallet$ty3;
    return wallet.valid && wallet.balance >= 0 && ((_walletName$wallet$ty2 = walletName[wallet.type]) === null || _walletName$wallet$ty2 === void 0 ? void 0 : _walletName$wallet$ty2.isActive) && /*#__PURE__*/_react.default.createElement(_styles.Container, {
      key: wallet.id,
      isBottomBorder: idx === ((_walletsState$result7 = walletsState.result) === null || _walletsState$result7 === void 0 ? void 0 : _walletsState$result7.length) - 1
    }, /*#__PURE__*/_react.default.createElement(_styles.SectionLeft, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
      name: "payment_option_".concat(wallet.type),
      id: "custom-checkbox-".concat(idx),
      disabled: (cart === null || cart === void 0 ? void 0 : cart.balance) === 0 && !checkedState[idx] || wallet.balance === 0,
      checked: checkedState[idx],
      value: "payment_option_".concat(wallet.type),
      onChange: function onChange() {
        return handleOnChange(idx, wallet);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles.SectionLeftText, {
      disabled: (cart === null || cart === void 0 ? void 0 : cart.balance) === 0 && !checkedState[idx] || wallet.balance === 0
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "custom-checkbox-".concat(idx)
    }, (_walletName$wallet$ty3 = walletName[wallet.type]) === null || _walletName$wallet$ty3 === void 0 ? void 0 : _walletName$wallet$ty3.name))), /*#__PURE__*/_react.default.createElement("div", null, wallet.type === 'cash' && /*#__PURE__*/_react.default.createElement("span", null, parsePrice(wallet === null || wallet === void 0 ? void 0 : wallet.balance, {
      isTruncable: true
    })), wallet.type === 'credit_point' && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: theme.colors.primary
      }
    }, "".concat(wallet === null || wallet === void 0 ? void 0 : wallet.balance, " ").concat(t('POINTS', 'Points'))), " ", (wallet === null || wallet === void 0 ? void 0 : wallet.balance) > 0 && "= ".concat(parsePrice((wallet === null || wallet === void 0 ? void 0 : wallet.balance) / (wallet === null || wallet === void 0 ? void 0 : wallet.redemption_rate), {
      isTruncable: true
    })))));
  })), (walletsState === null || walletsState === void 0 ? void 0 : walletsState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(2).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SectionWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 40
    }));
  })), /*#__PURE__*/_react.default.createElement(AlertComponent, {
    title: t('WALLET_ERROR_MESSAGES', 'Wallet'),
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
  }));
};
var PaymentOptionWallet = function PaymentOptionWallet(props) {
  var paymentWalletProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionWalletUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PaymentOptionWallet, paymentWalletProps);
};
exports.PaymentOptionWallet = PaymentOptionWallet;