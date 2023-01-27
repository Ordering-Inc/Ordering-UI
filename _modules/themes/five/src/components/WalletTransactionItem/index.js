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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var WalletTransactionItem = function WalletTransactionItem(props) {
  var _item$event, _item$description, _itemDescription$pop, _item$event$author$na, _item$event2, _item$event2$author, _item$event$order_id, _item$event3, _itemDescription$join;
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
  var itemDescription = item === null || item === void 0 ? void 0 : (_item$description = item.description) === null || _item$description === void 0 ? void 0 : _item$description.split(' ');
  var order_id = (_itemDescription$pop = itemDescription === null || itemDescription === void 0 ? void 0 : itemDescription.pop()) !== null && _itemDescription$pop !== void 0 ? _itemDescription$pop : '';
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Dot, {
    isTop: idx === 0
  }), /*#__PURE__*/_react.default.createElement(_styles.DateBlock, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(item === null || item === void 0 ? void 0 : item.created_at)), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: (item === null || item === void 0 ? void 0 : item.amount) > 0 && theme.colors.primary,
      fontWeight: 'bold'
    }
  }, (item === null || item === void 0 ? void 0 : item.amount) > 0 && '+ ', type !== 'credit_point' ? parsePrice(item === null || item === void 0 ? void 0 : item.amount) : item === null || item === void 0 ? void 0 : item.amount)), /*#__PURE__*/_react.default.createElement(_styles.MessageBlock, null, /*#__PURE__*/_react.default.createElement("span", null, t(LANG_EVENT_KEY, lang_event_text).replace(':author', (_item$event$author$na = item === null || item === void 0 ? void 0 : (_item$event2 = item.event) === null || _item$event2 === void 0 ? void 0 : (_item$event2$author = _item$event2.author) === null || _item$event2$author === void 0 ? void 0 : _item$event2$author.name) !== null && _item$event$author$na !== void 0 ? _item$event$author$na : '').replace(':order_id', (_item$event$order_id = item === null || item === void 0 ? void 0 : (_item$event3 = item.event) === null || _item$event3 === void 0 ? void 0 : _item$event3.order_id) !== null && _item$event$order_id !== void 0 ? _item$event$order_id : ''))), !!(item !== null && item !== void 0 && item.description) && /*#__PURE__*/_react.default.createElement(_styles.DescriptionBlock, null, /*#__PURE__*/_react.default.createElement("span", null, "".concat(t('ACCUMULATION_CREDIT_POINT_BY_ORDER', (_itemDescription$join = itemDescription === null || itemDescription === void 0 ? void 0 : itemDescription.join(' ')) !== null && _itemDescription$join !== void 0 ? _itemDescription$join : 'Accumulation credit point by order'), " ").concat(order_id))), !!(item !== null && item !== void 0 && item.code) && /*#__PURE__*/_react.default.createElement(_styles.DescriptionBlock, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("strong", null, t('CODE', 'Code'), ":"), " ", item === null || item === void 0 ? void 0 : item.code)));
};
exports.WalletTransactionItem = WalletTransactionItem;