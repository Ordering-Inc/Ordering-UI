"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _orderingComponents = require("ordering-components");
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ToastBar = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  visibility: hidden;\n  background-color: ", ";\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 9999;\n  bottom: 30px;\n  font-size: 14px;\n  min-width: 200px;\n  max-width: 200px;\n\n  /* Animations to fade the snackbar in and out */\n  @-webkit-keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n  }\n\n  @keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n  }\n\n  @-webkit-keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n  }\n\n  @keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n  }\n\n  @media(min-width: 380px){\n    font-size: 16px;\n    min-width: 250px;\n    max-width: initial;\n  }\n"])), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
});
var ToastContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"])));
var Toast = function Toast() {
  var _useToast = (0, _orderingComponents.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    toastConfig = _useToast2[0],
    hideToast = _useToast2[1].hideToast;
  var toastRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (!toastConfig && !toastRef.current) {
      return;
    }
    var toast = document.getElementById('toast-bar');
    toast.style.visibility = 'visible';
    toast.style.animation = 'fadein 0.5s, fadeout 0.5s 2.5s';
    setTimeout(function () {
      toast.style.visibility = 'hidden';
      hideToast();
    }, duration);
  }, [toastConfig]);
  if (!toastConfig) {
    return null;
  }
  var type = toastConfig.type,
    message = toastConfig.message,
    duration = toastConfig.duration;
  var backgroundColor = '#6ba4ff';
  switch (type) {
    case _orderingComponents.ToastType.Info:
      backgroundColor = '#6ba4ff';
      break;
    case _orderingComponents.ToastType.Error:
      backgroundColor = '#D83520';
      break;
    case _orderingComponents.ToastType.Success:
      backgroundColor = '#73bd24';
      break;
  }
  return /*#__PURE__*/_react.default.createElement(ToastContainer, null, /*#__PURE__*/_react.default.createElement(ToastBar, {
    backgroundColor: backgroundColor,
    id: "toast-bar",
    ref: toastRef
  }, message));
};
exports.Toast = Toast;