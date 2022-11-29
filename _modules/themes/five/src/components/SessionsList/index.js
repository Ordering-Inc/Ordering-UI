"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Buttons = require("../../styles/Buttons");
var _Confirm = require("../Confirm");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SessionsListUI = function SessionsListUI(props) {
  var sessionsList = props.sessionsList,
    actionState = props.actionState,
    handleDeleteSession = props.handleDeleteSession,
    handleDeleteAllSessions = props.handleDeleteAllSessions;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useState = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirm = _useState2[0],
    setConfirm = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var onDeleteSession = function onDeleteSession(session) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_SESSION', 'Are you sure to delete this session?'),
      handleOnAccept: function handleOnAccept() {
        handleDeleteSession(session);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var onDeleteAllSessions = function onDeleteAllSessions(isOldUser, deleteCurrent) {
    setConfirm({
      open: true,
      content: isOldUser ? t('QUESTION_ENABLE_ALL_SESSIONS', 'Are you sure to enable all sessions?') : deleteCurrent ? t('QUESTION_DELETE_ALL_SESSIONS', 'Are you sure that you want to delete all sessions?') : t('QUESTION_DELETE_ALL_SESSIONS_EXCEPT_CURRENT', 'Are you sure that you want to delete all sessions except current?'),
      handleOnAccept: function handleOnAccept() {
        handleDeleteAllSessions(deleteCurrent);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  (0, _react.useEffect)(function () {
    if (actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error
      });
    }
  }, [actionState.error]);
  return /*#__PURE__*/_react.default.createElement(_styles.SessionsListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('SESSIONS', 'Sessions')), (user === null || user === void 0 ? void 0 : user.session_strategy) === 'jwt_session' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, sessionsList.loading ? _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SessionItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 16
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }));
  }) : sessionsList.sessions.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles.SessionsWrapper, null, sessionsList.sessions.map(function (session) {
    return /*#__PURE__*/_react.default.createElement(_styles.SessionItem, {
      key: session.id
    }, /*#__PURE__*/_react.default.createElement(_styles.DurationWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, parseDate(session.created_at)), /*#__PURE__*/_react.default.createElement("span", null, "-"), /*#__PURE__*/_react.default.createElement("p", null, parseDate(session.valid_thru))), session.current && /*#__PURE__*/_react.default.createElement("p", {
      className: "current"
    }, "(", t('CURRENT', 'Current'), ")"), /*#__PURE__*/_react.default.createElement(_styles.SeessionDelete, {
      onClick: function onClick() {
        return onDeleteSession(session);
      }
    }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null)));
  }), /*#__PURE__*/_react.default.createElement(_styles.ButtonsGroup, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    disabled: actionState.loading,
    onClick: function onClick() {
      return onDeleteAllSessions(false, true);
    }
  }, t('DELETE_ALL_SESSIONS', 'Delete all sessions')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    disabled: actionState.loading,
    onClick: function onClick() {
      return onDeleteAllSessions(false, false);
    }
  }, t('DELETE_ALL_SESSIONS_EXCEPT_CURRENT', 'Delete all sessions except current')))) : /*#__PURE__*/_react.default.createElement(_styles.NoMessage, null, t('YOU_DONT_HAVE_ANY_SESSIONS', 'You don\'t have any sessions'))) : /*#__PURE__*/_react.default.createElement(_styles.NoSessionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.NoMessage, null, t('YOU_DONT_HAVE_ENABLED_THE_SESSIONS', 'You don\'t have enabled the sessions, please active them to have a better control of your sessions.')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onDeleteAllSessions(true, false);
    }
  }, t('ACTIVE_SESSIONS', 'Active sessions'))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
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
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var SessionsList = function SessionsList(props) {
  var sessionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SessionsListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.Sessions, sessionsProps);
};
exports.SessionsList = SessionsList;