"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactPopper = require("react-popper");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _FiChevronDown = _interopRequireDefault(require("@meronex/icons/fi/FiChevronDown"));
var _Shared = require("../../../components/Shared");
var _DashboardSelects = require("../../DashboardSelects");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Select = exports.Select = function Select(props) {
  var _referenceElement$cur2;
  var placeholder = props.placeholder,
    options = props.options,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    notAsync = props.notAsync,
    noSelected = props.noSelected,
    isSecondIcon = props.isSecondIcon,
    isShowSearchBar = props.isShowSearchBar,
    searchValue = props.searchValue,
    handleChangeSearch = props.handleChangeSearch,
    searchBarIsCustomLayout = props.searchBarIsCustomLayout,
    searchBarPlaceholder = props.searchBarPlaceholder,
    searchBarIsNotLazyLoad = props.searchBarIsNotLazyLoad,
    className = props.className;
  var defaultOption = options === null || options === void 0 ? void 0 : options.find(function (option) {
    return option.value === defaultValue;
  });
  var _useState = (0, _react.useState)(defaultOption),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOption = _useState2[0],
    setSelectedOption = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultValue),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    sessionState = _useSession2[0];
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)();
  var popper = (0, _reactPopper.usePopper)(referenceElement.current, popperElement.current, {
    placement: 'bottom',
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement.current
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 12]
      }
    }]
  });
  var styles = popper.styles,
    attributes = popper.attributes,
    update = popper.update;
  (0, _react.useEffect)(function () {
    update && update();
  }, [open, sessionState]);
  var handleClickOutside = function handleClickOutside(e) {
    var _popperElement$curren, _referenceElement$cur;
    if (!open) return;
    var outsidePopover = !((_popperElement$curren = popperElement.current) !== null && _popperElement$curren !== void 0 && _popperElement$curren.contains(e.target));
    var outsidePopoverMenu = !((_referenceElement$cur = referenceElement.current) !== null && _referenceElement$cur !== void 0 && _referenceElement$cur.contains(e.target));
    if (outsidePopover && outsidePopoverMenu) {
      if (isShowSearchBar) {
        handleChangeSearch('');
      }
      setOpen(false);
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setOpen(false);
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    if (isShowSearchBar && searchValue) return;
    if (!notAsync) {
      var _defaultOption = options === null || options === void 0 ? void 0 : options.find(function (option) {
        return option.value === defaultValue;
      });
      setSelectedOption(_defaultOption);
      setValue(defaultValue);
    }
  }, [defaultValue, options, searchValue]);
  var handleChangeOption = function handleChangeOption(e, option) {
    if (e.target.closest('.disabled') === null) setOpen(!open);
    if (option.value === null || option.disabled) return;
    if (!noSelected) {
      setSelectedOption(option);
      setValue(option.value);
    }
    onChange && onChange(option.value);
  };
  var handleClickHeader = function handleClickHeader(e) {
    if (e.target.closest('.open-disabled')) return;
    setOpen(!open);
  };
  var popStyle = _objectSpread(_objectSpread({}, styles.popper), {}, {
    display: open ? 'block' : 'none',
    minWidth: (referenceElement === null || referenceElement === void 0 || (_referenceElement$cur2 = referenceElement.current) === null || _referenceElement$cur2 === void 0 ? void 0 : _referenceElement$cur2.offsetWidth) || '100px'
  });
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)';
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflow: 'hidden'
    },
    className: className || 'select-wrapper'
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    className: "select",
    ref: referenceElement,
    onClick: function onClick(e) {
      return handleClickHeader(e);
    }
  }, !selectedOption && /*#__PURE__*/_react.default.createElement(_DashboardSelects.Selected, null, placeholder || '', /*#__PURE__*/_react.default.createElement(_DashboardSelects.Chevron, null, isSecondIcon ? /*#__PURE__*/_react.default.createElement(_FiChevronDown.default, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CaretDownFill, null))), selectedOption && /*#__PURE__*/_react.default.createElement(_DashboardSelects.Selected, null, /*#__PURE__*/_react.default.createElement(_DashboardSelects.Header, null, selectedOption.showOnSelected || selectedOption.content), /*#__PURE__*/_react.default.createElement(_DashboardSelects.Chevron, null, isSecondIcon ? /*#__PURE__*/_react.default.createElement(_FiChevronDown.default, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CaretDownFill, null)))), /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, _extends({
    className: "list",
    ref: popperElement,
    style: popStyle
  }, attributes.popper), /*#__PURE__*/_react.default.createElement(_DashboardSelects.Options, {
    className: "options"
  }, isShowSearchBar && /*#__PURE__*/_react.default.createElement(_DashboardSelects.SearchBarWrapper, {
    className: "search-bar-container"
  }, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: !searchBarIsNotLazyLoad,
    isCustomLayout: searchBarIsCustomLayout,
    search: searchValue,
    onSearch: handleChangeSearch,
    placeholder: searchBarPlaceholder || ''
  })), /*#__PURE__*/_react.default.createElement(_DashboardSelects.OptionsInner, {
    optionInnerMargin: props.optionInnerMargin,
    optionInnerMaxHeight: props.optionInnerMaxHeight
  }, options.map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_DashboardSelects.Option, {
      key: i,
      selected: value === option.value,
      color: option.color,
      onClick: function onClick(e) {
        return handleChangeOption(e, option);
      },
      optionBottomBorder: props.optionBottomBorder,
      disabled: option.disabled,
      showDisable: option === null || option === void 0 ? void 0 : option.showDisable,
      className: option.disabled ? 'disabled' : null
    }, option.content);
  })))));
};