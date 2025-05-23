"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InsertVideo = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("../../../../styles");
var _utils = require("../../../../../../../utils");
var _styles2 = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var InsertVideo = exports.InsertVideo = function InsertVideo(props) {
  var editorContext = props.editorContext,
    onClose = props.onClose,
    handleRestoreEditor = props.handleRestoreEditor;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    videoUrl = _useState2[0],
    setVideoUrl = _useState2[1];
  var getVideoEmbedded = function getVideoEmbedded(video) {
    if (video.indexOf('youtube')) {
      return '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + (0, _utils.formatUrlVideo)(video) + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }
  };
  var handleInsertClick = function handleInsertClick() {
    var HTMLstring = getVideoEmbedded(videoUrl);
    handleRestoreEditor();
    editorContext.invoke('editor.pasteHTML', HTMLstring);
    onClose();
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.InsertLinkContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('INSERT_VIDEO', 'Insert video')), /*#__PURE__*/_react.default.createElement(_styles2.WrapperInput, null, /*#__PURE__*/_react.default.createElement("label", null, t('VIDEO_URL', 'Video url')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "text",
    onChange: function onChange(e) {
      return setVideoUrl(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return handleInsertClick();
    }
  }, t('INSERT', 'Insert')));
};