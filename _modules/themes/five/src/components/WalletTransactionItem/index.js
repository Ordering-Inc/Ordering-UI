"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletTransactionItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var WalletTransactionItem = function WalletTransactionItem(props) {
  var _item$event, _item$event$author$na, _item$event2, _item$event2$author, _item$event$order_id, _item$event3;
  var item = props.item,
    idx = props.idx,
    type = props.type;
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDate = _useUtils2$.parseDate;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var LANG_EVENT_KEY = "WALLET_".concat(type.toUpperCase(), "_").concat(item === null || item === void 0 ? void 0 : item.event.toUpperCase(), "_").concat(item === null || item === void 0 ? void 0 : item.event_type.toUpperCase(), "_").concat((item === null || item === void 0 ? void 0 : item.amount) >= 0 ? 'POSITIVE' : 'NEGATIVE');
  var lang_event_text = !!(item !== null && item !== void 0 && (_item$event = item.event) !== null && _item$event !== void 0 && _item$event.order_id) ? ":author ".concat((item === null || item === void 0 ? void 0 : item.amount) >= 0 ? 'Add' : 'Reduce', " money in Order No. :order_id") : ":author ".concat((item === null || item === void 0 ? void 0 : item.amount) >= 0 ? 'Add' : 'Reduce', " money");
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Dot, {
    isTop: idx === 0
  }), /*#__PURE__*/_react.default.createElement(_styles.DateBlock, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(item === null || item === void 0 ? void 0 : item.created_at)), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: (item === null || item === void 0 ? void 0 : item.amount) > 0 && theme.colors.primary,
      fontWeight: 'bold'
    }
  }, (item === null || item === void 0 ? void 0 : item.amount) > 0 && '+ ', type !== 'credit_point' ? parsePrice(item === null || item === void 0 ? void 0 : item.amount) : item === null || item === void 0 ? void 0 : item.amount)), /*#__PURE__*/_react.default.createElement(_styles.MessageBlock, null, /*#__PURE__*/_react.default.createElement("span", null, t(LANG_EVENT_KEY, lang_event_text).replace(':author', (_item$event$author$na = item === null || item === void 0 ? void 0 : (_item$event2 = item.event) === null || _item$event2 === void 0 ? void 0 : (_item$event2$author = _item$event2.author) === null || _item$event2$author === void 0 ? void 0 : _item$event2$author.name) !== null && _item$event$author$na !== void 0 ? _item$event$author$na : '').replace(':order_id', (_item$event$order_id = item === null || item === void 0 ? void 0 : (_item$event3 = item.event) === null || _item$event3 === void 0 ? void 0 : _item$event3.order_id) !== null && _item$event$order_id !== void 0 ? _item$event$order_id : ''))), !!(item !== null && item !== void 0 && item.description) && /*#__PURE__*/_react.default.createElement(_styles.DescriptionBlock, null, /*#__PURE__*/_react.default.createElement("span", null, item === null || item === void 0 ? void 0 : item.description)), !!(item !== null && item !== void 0 && item.code) && /*#__PURE__*/_react.default.createElement(_styles.DescriptionBlock, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, t('CODE', 'Code'), ":"), " ", item === null || item === void 0 ? void 0 : item.code)));
};
exports.WalletTransactionItem = WalletTransactionItem;