"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoScroll = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));
var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AutoScroll = function AutoScroll(_ref) {
  var children = _ref.children;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var scrollWrapperRef = (0, _react.useRef)();
  var scrollContainerRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    wrapperScrollLeft = _useState2[0],
    setWrapperScrollLeft = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    wrapperWidth = _useState4[0],
    setWrapperWidth = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    containerWidth = _useState6[0],
    setContainerWidth = _useState6[1];
  var handleScrolling = function handleScrolling(left) {
    if (left) {
      var _left = -scrollContainerRef.current.offsetWidth / 10 > -200 ? -200 : -scrollContainerRef.current.offsetWidth / 10;
      scrollWrapperRef.current.scrollBy({
        top: 0,
        left: _left,
        behavior: 'smooth'
      });
      setWrapperScrollLeft(scrollWrapperRef.current.scrollLeft + _left);
    } else {
      var _left2 = +scrollContainerRef.current.offsetWidth / 10 < 200 ? 200 : +scrollContainerRef.current.offsetWidth / 10;
      scrollWrapperRef.current.scrollBy({
        top: 0,
        left: _left2,
        behavior: 'smooth'
      });
      setWrapperScrollLeft(scrollWrapperRef.current.scrollLeft + _left2);
    }
  };
  (0, _react.useEffect)(function () {
    var _scrollWrapperRef$cur, _scrollContainerRef$c;
    setWrapperScrollLeft(scrollWrapperRef.current.scrollLeft);
    setWrapperWidth(scrollWrapperRef === null || scrollWrapperRef === void 0 || (_scrollWrapperRef$cur = scrollWrapperRef.current) === null || _scrollWrapperRef$cur === void 0 ? void 0 : _scrollWrapperRef$cur.offsetWidth);
    setContainerWidth(scrollContainerRef === null || scrollContainerRef === void 0 || (_scrollContainerRef$c = scrollContainerRef.current) === null || _scrollContainerRef$c === void 0 ? void 0 : _scrollContainerRef$c.offsetWidth);
  }, [scrollWrapperRef, scrollContainerRef, width, children]);
  return /*#__PURE__*/_react.default.createElement(_styles.ScrollBox, {
    className: "scroll-box"
  }, /*#__PURE__*/_react.default.createElement(_styles.ScrollBoxWrapper, {
    className: "scroll-box__wrapper",
    ref: scrollWrapperRef
  }, wrapperScrollLeft > 10 && /*#__PURE__*/_react.default.createElement(_styles.ArrowButton, {
    onMouseDown: function onMouseDown() {
      return handleScrolling(true);
    },
    className: "left-autoscroll"
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, null)), /*#__PURE__*/_react.default.createElement(_styles.ScrollBoxContainer, {
    className: "scroll-box__container",
    role: "list",
    ref: scrollContainerRef
  }, children), wrapperScrollLeft + wrapperWidth + 10 < containerWidth && /*#__PURE__*/_react.default.createElement(_styles.ArrowButton, {
    isRight: true,
    onMouseDown: function onMouseDown() {
      return handleScrolling();
    },
    className: "right-autoscroll"
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, null))));
};
exports.AutoScroll = AutoScroll;