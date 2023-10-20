"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoScroll = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useWindowSize2 = require("../../../../../../hooks/useWindowSize");
var _styles = require("./styles");
var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));
var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));
var _ThemeContext = require("../../../../../../contexts/ThemeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AutoScroll = exports.AutoScroll = function AutoScroll(_ref) {
  var children = _ref.children,
    modal = _ref.modal,
    special = _ref.special,
    innerScroll = _ref.innerScroll,
    scrollId = _ref.scrollId;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    parentElement = _useState2[0],
    setParentElement = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    containerElement = _useState4[0],
    setContainerElement = _useState4[1];
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme2 = _slicedToArray(_useTheme, 1),
    theme = _useTheme2[0];
  var autoScrollId = scrollId || 'autoscroll';
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    parentWidth = _useState6[0],
    setParentWidth = _useState6[1];
  (0, _react.useLayoutEffect)(function () {
    var _document;
    var element = (_document = document) === null || _document === void 0 || (_document = _document.getElementById("".concat(autoScrollId))) === null || _document === void 0 ? void 0 : _document.parentNode;
    element && element.parentNode.addEventListener('scroll', handleScroll);
    var containerElement = element === null || element === void 0 ? void 0 : element.parentNode;
    setParentWidth(element === null || element === void 0 ? void 0 : element.offsetWidth);
    setParentElement(element);
    setContainerElement(containerElement);
    return function () {
      if (containerElement !== null && containerElement !== void 0 && containerElement.length) {
        containerElement.removeEventListener('scroll', handleScroll);
      }
    };
  });
  (0, _react.useEffect)(function () {
    handleScroll();
  });
  var handleScroll = function handleScroll() {
    var _document2;
    var autoScrollContainer = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.getElementById("".concat(autoScrollId));
    var botonRight = autoScrollContainer === null || autoScrollContainer === void 0 ? void 0 : autoScrollContainer.querySelector('.right-autoscroll');
    var botonLeft = autoScrollContainer === null || autoScrollContainer === void 0 ? void 0 : autoScrollContainer.querySelector('.left-autoscroll');
    if (botonLeft || botonRight) {
      if (theme !== null && theme !== void 0 && theme.rtl) {
        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) * -1 < 40) {
          botonRight && botonRight.classList.add('hidden');
        } else {
          botonRight && botonRight.classList.remove('hidden');
        }
        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) * -1 > (parentElement === null || parentElement === void 0 ? void 0 : parentElement.scrollWidth) - (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) - 20) {
          botonLeft && botonLeft.classList.add('hidden');
        } else {
          botonLeft && botonLeft.classList.remove('hidden');
        }
      } else {
        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) < 40) {
          botonLeft && botonLeft.classList.add('hidden');
        } else {
          botonLeft && botonLeft.classList.remove('hidden');
        }
        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) > (parentElement === null || parentElement === void 0 ? void 0 : parentElement.scrollWidth) - (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) - 40) {
          botonRight && botonRight.classList.add('hidden');
        } else {
          botonRight && botonRight.classList.remove('hidden');
        }
      }
    }
  };
  var scrolling = function scrolling(left) {
    if (left) {
      containerElement.scrollBy({
        top: 0,
        left: -parentElement.offsetWidth / 10 > -200 ? -200 : -parentElement.offsetWidth / 10,
        behavior: 'smooth'
      });
    } else {
      containerElement.scrollBy({
        top: 0,
        left: +parentElement.offsetWidth / 10 < 200 ? 200 : +parentElement.offsetWidth / 10,
        behavior: 'smooth'
      });
    }
  };
  (0, _react.useEffect)(function () {
    var _document3;
    if (!scrollId) return;
    var element = (_document3 = document) === null || _document3 === void 0 || (_document3 = _document3.getElementById("".concat(autoScrollId))) === null || _document3 === void 0 ? void 0 : _document3.parentNode;
    if (!element) return;
    setParentWidth(element.width);
    setParentElement(element);
  }, [scrollId]);
  return /*#__PURE__*/_react.default.createElement(_styles.AutoscrollContainer, {
    modal: modal,
    id: "".concat(autoScrollId)
  }, (!special ? width < parentWidth + 50 : width < parentWidth) || (!special && innerScroll ? (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) < parentWidth + 50 : (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) < parentWidth) ? /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, {
    className: "left-autoscroll",
    onMouseDown: function onMouseDown() {
      return scrolling(true);
    }
  }) : '', children, (!special ? width < parentWidth + 50 : width < parentWidth) || (!special && innerScroll ? (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) < parentWidth + 50 : (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) < parentWidth) ? /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, {
    className: "right-autoscroll",
    onMouseDown: function onMouseDown() {
      return scrolling();
    }
  }) : '');
};