"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InsertLink = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var InsertLink = exports.InsertLink = function InsertLink(props) {
  var editorContext = props.editorContext,
    onClose = props.onClose,
    handleRestoreEditor = props.handleRestoreEditor,
    isLinkButton = props.isLinkButton;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    changesState = _useState2[0],
    setChangesState = _useState2[1];
  var handleChangeInput = function handleChangeInput(e) {
    setChangesState(_objectSpread(_objectSpread({}, changesState), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var handleInsertClick = function handleInsertClick() {
    var _changesState$isNewWi;
    handleRestoreEditor();
    editorContext.invoke('editor.createLink', {
      text: isLinkButton ? "<button style='font-size: 9px;color: white;padding: 6px 11px; cursor: pointer; border-radius: 4px; background: #2C7BE5; border: none;'>".concat((changesState === null || changesState === void 0 ? void 0 : changesState.text) || 'button', "</button>") : (changesState === null || changesState === void 0 ? void 0 : changesState.text) || '',
      url: (changesState === null || changesState === void 0 ? void 0 : changesState.url) || '',
      isNewWindow: (_changesState$isNewWi = changesState === null || changesState === void 0 ? void 0 : changesState.isNewWindow) !== null && _changesState$isNewWi !== void 0 ? _changesState$isNewWi : true
    });
    onClose();
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.InsertLinkContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('INSERT_LINK', 'Insert link')), /*#__PURE__*/_react.default.createElement(_styles2.WrapperInput, null, /*#__PURE__*/_react.default.createElement("label", null, t('LINK_TEXT', 'Text to display')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "text",
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperInput, null, /*#__PURE__*/_react.default.createElement("label", null, t('LINK_URL', 'Url')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "url",
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    defaultChecked: true,
    onClick: function onClick(e) {
      return setChangesState(_objectSpread(_objectSpread({}, changesState), {}, {
        isNewWindow: e.target.checked
      }));
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, t('IS_NEW_WINDOW', 'Open in a new window'))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return handleInsertClick();
    }
  }, t('INSERT', 'Insert')));
};