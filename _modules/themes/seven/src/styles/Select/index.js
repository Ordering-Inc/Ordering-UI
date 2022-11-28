"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _BisDownArrow = _interopRequireDefault(require("@meronex/icons/bi/BisDownArrow"));
var _Selects = require("../Selects");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Select = function Select(props) {
  var placeholder = props.placeholder,
    options = props.options,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    notAsync = props.notAsync,
    notReload = props.notReload,
    isFullWidth = props.isFullWidth,
    noborder = props.noborder;
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
  return /*#__PURE__*/_react.default.createElement(_Selects.Select, {
    id: "select-input",
    isHome: isHome,
    disabled: orderState.loading && !notReload,
    onMouseUp: handleSelectClick,
    noborder: noborder,
    fullwidth: isFullWidth
  }, !selectedOption && /*#__PURE__*/_react.default.createElement(_Selects.Selected, {
    fullwidth: isFullWidth
  }, placeholder || '', /*#__PURE__*/_react.default.createElement(_Selects.Chevron, null, /*#__PURE__*/_react.default.createElement(_BisDownArrow.default, null))), selectedOption && /*#__PURE__*/_react.default.createElement(_Selects.Selected, {
    fullwidth: isFullWidth
  }, /*#__PURE__*/_react.default.createElement(_Selects.Header, null, selectedOption.showOnSelected || selectedOption.content), /*#__PURE__*/_react.default.createElement(_Selects.Chevron, null, /*#__PURE__*/_react.default.createElement(_BisDownArrow.default, null))), open && options && /*#__PURE__*/_react.default.createElement(_Selects.Options, {
    id: "list",
    position: "right",
    ref: dropdownReference,
    fullwidth: isFullWidth
  }, options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_Selects.Option, {
      id: "item",
      key: option.value,
      selected: value === option.value,
      onClick: function onClick() {
        return handleChangeOption(option);
      },
      fullwidth: isFullWidth
    }, option.content);
  })));
};
exports.Select = Select;