"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _BsChevronDown = _interopRequireDefault(require("@meronex/icons/bs/BsChevronDown"));
var _two = require("../../../Selects/theme/two");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Select = exports.Select = function Select(props) {
  var placeholder = props.placeholder,
    options = props.options,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    notAsync = props.notAsync,
    notReload = props.notReload;
  var isHome = window.location.pathname === '/' || window.location.pathname === '/home';
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var defaultOption = options === null || options === void 0 ? void 0 : options.find(function (option) {
    return option.value === defaultValue;
  });
  var _useState3 = (0, _react.useState)(defaultOption),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedOption = _useState4[0],
    setSelectedOption = _useState4[1];
  var _useState5 = (0, _react.useState)(defaultValue),
    _useState6 = _slicedToArray(_useState5, 2),
    value = _useState6[0],
    setValue = _useState6[1];
  var dropdownReference = (0, _react.useRef)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var handleSelectClick = function handleSelectClick(e) {
    !open && setOpen(true);
  };
  var closeSelect = function closeSelect(e) {
    if (open) {
      var _dropdownReference$cu;
      var outsideDropdown = !((_dropdownReference$cu = dropdownReference.current) !== null && _dropdownReference$cu !== void 0 && _dropdownReference$cu.contains(e.target));
      if (outsideDropdown) {
        setOpen(false);
      }
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setOpen(false);
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener('mouseup', closeSelect);
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      document.removeEventListener('mouseup', closeSelect);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    if (!notAsync) {
      var _defaultOption = options === null || options === void 0 ? void 0 : options.find(function (option) {
        return option.value === defaultValue;
      });
      setSelectedOption(_defaultOption);
      setValue(defaultValue);
    }
  }, [defaultValue, options]);
  var handleChangeOption = function handleChangeOption(option) {
    setSelectedOption(option);
    setValue(option.value);
    onChange && onChange(option.value);
    setOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement(_two.Select, {
    id: "select-input",
    isHome: isHome,
    disabled: orderState.loading && !notReload,
    onMouseUp: handleSelectClick
  }, !selectedOption && /*#__PURE__*/_react.default.createElement(_two.Selected, null, placeholder || '', /*#__PURE__*/_react.default.createElement(_two.Chevron, null, /*#__PURE__*/_react.default.createElement(_BsChevronDown.default, null))), selectedOption && /*#__PURE__*/_react.default.createElement(_two.Selected, null, /*#__PURE__*/_react.default.createElement(_two.Header, null, selectedOption.showOnSelected || selectedOption.content), /*#__PURE__*/_react.default.createElement(_two.Chevron, null, /*#__PURE__*/_react.default.createElement(_BsChevronDown.default, null))), open && options && /*#__PURE__*/_react.default.createElement(_two.Options, {
    id: "list",
    position: "right",
    ref: dropdownReference
  }, options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_two.Option, {
      id: "item",
      key: option.value,
      selected: value === option.value,
      onClick: function onClick() {
        return handleChangeOption(option);
      }
    }, option.content);
  })));
};