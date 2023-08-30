"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapMessages = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _orderingComponents = require("ordering-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MapMessages = function MapMessages(props) {
  var messages = props.messages,
    messagesToShow = props.messagesToShow,
    order = props.order,
    filterSpecialStatus = props.filterSpecialStatus,
    handleModalImage = props.handleModalImage,
    getLevel = props.getLevel,
    business = props.business,
    driver = props.driver,
    getLogisticTagStatus = props.getLogisticTagStatus,
    getStatus = props.getStatus;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    parseTime = _useUtils2$.parseTime;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, messages === null || messages === void 0 ? void 0 : messages.messages.map(function (message) {
    var _message$change, _message$change2, _message$change3, _message$change4, _message$driver, _message$driver2, _messagesToShow$messa, _message$can_see, _message$can_see2;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: message.id
    }, message.type === 1 && (message === null || message === void 0 || (_message$change = message.change) === null || _message$change === void 0 ? void 0 : _message$change.attribute) !== 'driver_group_id' && /*#__PURE__*/_react.default.createElement(_styles.MessageContentWrapper, {
      key: message.id
    }, ((_message$change2 = message.change) === null || _message$change2 === void 0 ? void 0 : _message$change2.attribute) !== 'driver_id' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessageCreatedDate, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(message.created_at, {
      outputFormat: 'MMM DD, YYYY'
    }))), /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, t('ORDER', 'Order'), " ", ' ', /*#__PURE__*/_react.default.createElement("strong", null, t(message.change.attribute.toUpperCase(), message.change.attribute.replace('_', ' '))), " ", ' ', t('CHANGED_FROM', 'Changed from'), " ", ' ', filterSpecialStatus.includes(message.change.attribute) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.change.old === null ? /*#__PURE__*/_react.default.createElement("strong", null, "0") : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, message.change.old), " ", ' '), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", t('TO', 'to'), " ", ' ', " ", /*#__PURE__*/_react.default.createElement("strong", null, message.change.new), " ", t('MINUTES', 'Minutes'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.change.old !== null && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, ((_message$change3 = message.change) === null || _message$change3 === void 0 ? void 0 : _message$change3.attribute) === 'logistic_status' ? getLogisticTagStatus(parseInt(message.change.old, 10)) : t(getStatus(parseInt(message.change.old, 10)))), " ", ' '), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", t('TO', 'to'), " ", ' ', " ", /*#__PURE__*/_react.default.createElement("strong", null, ((_message$change4 = message.change) === null || _message$change4 === void 0 ? void 0 : _message$change4.attribute) === 'logistic_status' ? getLogisticTagStatus(parseInt(message.change.new, 10)) : t(getStatus(parseInt(message.change.new, 10)))), " ")), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, parseTime(message.created_at))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MessageCreatedDate, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(message.created_at, {
      outputFormat: 'MMM DD, YYYY'
    }))), /*#__PURE__*/_react.default.createElement(_styles.MessageConsole, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, message.change.new ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, (_message$driver = message.driver) === null || _message$driver === void 0 ? void 0 : _message$driver.name, " ", ' ', " ", ((_message$driver2 = message.driver) === null || _message$driver2 === void 0 ? void 0 : _message$driver2.lastname) && message.driver.lastname, " "), t('WAS_ASSIGNED_AS_DRIVER', 'Was assigned as driver'), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("br", null), " ", message.comment.length)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DRIVER_UNASSIGNED', 'Driver unassigned')), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, parseTime(message.created_at)))))), ((messagesToShow === null || messagesToShow === void 0 || (_messagesToShow$messa = messagesToShow.messages) === null || _messagesToShow$messa === void 0 ? void 0 : _messagesToShow$messa.length) || (message === null || message === void 0 || (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes('2')) && business || (message === null || message === void 0 || (_message$can_see2 = message.can_see) === null || _message$can_see2 === void 0 ? void 0 : _message$can_see2.includes('4')) && driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.type === 2 && (user === null || user === void 0 ? void 0 : user.id) === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MessageCreatedDate, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(message.created_at, {
      outputFormat: 'MMM DD, YYYY'
    }))), /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, parseTime(message.created_at))))), message.type === 3 && user.id === message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MessageCreatedDate, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(message.created_at, {
      outputFormat: 'MMM DD, YYYY'
    }))), /*#__PURE__*/_react.default.createElement(_styles.MessageCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleCustomer, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onClick: function onClick() {
        return handleModalImage(message.source);
      },
      alt: "chat-image",
      width: "168px",
      height: "300px"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, parseTime(message.created_at))))), message.type === 2 && (user === null || user === void 0 ? void 0 : user.id) !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MessageCreatedDate, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(message.created_at, {
      outputFormat: 'MMM DD, YYYY'
    }))), /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")")), message.comment, /*#__PURE__*/_react.default.createElement(_styles.TimeofSentByAdmin, null, parseTime(message.created_at))))), message.type === 3 && user.id !== message.author_id && /*#__PURE__*/_react.default.createElement(_styles.MessageContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.MessageCreatedDate, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(message.created_at, {
      outputFormat: 'MMM DD, YYYY'
    }))), /*#__PURE__*/_react.default.createElement(_styles.MessageBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleBusines, {
      name: "image"
    }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_styles.MyName, null, message.author.name, " (", order.customer_id === message.author.id ? getLevel(3) : getLevel(message.author.level), ")")), /*#__PURE__*/_react.default.createElement(_styles.ChatImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: message.source,
      onClick: function onClick() {
        return handleModalImage(message.source);
      },
      alt: "chat-image",
      width: "168px",
      height: "300px"
    })), message.comment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message.comment), /*#__PURE__*/_react.default.createElement(_styles.TimeofSent, null, parseTime(message.created_at)))))));
  }));
};
exports.MapMessages = MapMessages;