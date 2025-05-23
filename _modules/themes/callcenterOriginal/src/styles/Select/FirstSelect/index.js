"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FiChevronDown = _interopRequireDefault(require("@meronex/icons/fi/FiChevronDown"));
var _BsTrash = _interopRequireDefault(require("@meronex/icons/bs/BsTrash"));
var _DashboardSelects = require("../../DashboardSelects");
var _Buttons = require("../../Buttons");
var _orderingComponents = require("ordering-components");
var _Shared = require("../../../components/Shared");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
    type = props.type,
    noSelected = props.noSelected,
    className = props.className,
    onEdit = props.onEdit,
    onDelete = props.onDelete,
    isShowSearchBar = props.isShowSearchBar,
    searchValue = props.searchValue,
    handleChangeSearch = props.handleChangeSearch,
    searchBarIsCustomLayout = props.searchBarIsCustomLayout,
    searchBarPlaceholder = props.searchBarPlaceholder,
    searchBarIsNotLazyLoad = props.searchBarIsNotLazyLoad,
    isDisabled = props.isDisabled,
    position = props.position;
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
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var dropdownReference = (0, _react.useRef)();
  var handleSelectClick = function handleSelectClick(e) {
    if (e.target.closest('.react-datepicker-wrapper') || e.target.closest('.react-datepicker')) return;
    setOpen(!open);
  };
  var closeSelect = function closeSelect(e) {
    if (open) {
      var _dropdownReference$cu;
      var outsideDropdown = !((_dropdownReference$cu = dropdownReference.current) !== null && _dropdownReference$cu !== void 0 && _dropdownReference$cu.contains(e.target));
      if (outsideDropdown) {
        if (isShowSearchBar) {
          handleChangeSearch('');
        }
        setOpen(false);
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (!open) return;
    document.addEventListener('click', closeSelect);
    return function () {
      return document.removeEventListener('click', closeSelect);
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
    if (option.value === null || option.disabled || e.target.closest('.delete') !== null || e.target.closest('.edit') !== null) return;
    if (!noSelected) {
      setSelectedOption(option);
      setValue(option.value);
    }
    onChange && onChange(option.value);
  };
  return /*#__PURE__*/_react.default.createElement(_DashboardSelects.Select, {
    type: type,
    className: className || 'select',
    isDisabled: isDisabled
  }, !selectedOption && /*#__PURE__*/_react.default.createElement(_DashboardSelects.Selected, {
    onClick: handleSelectClick,
    isDisabled: isDisabled
  }, placeholder || '', /*#__PURE__*/_react.default.createElement(_DashboardSelects.Chevron, {
    className: "select-arrow"
  }, /*#__PURE__*/_react.default.createElement(_FiChevronDown.default, null))), selectedOption && /*#__PURE__*/_react.default.createElement(_DashboardSelects.Selected, {
    onClick: handleSelectClick,
    isDisabled: isDisabled
  }, /*#__PURE__*/_react.default.createElement(_DashboardSelects.Header, null, selectedOption.showOnSelected || selectedOption.content), /*#__PURE__*/_react.default.createElement(_DashboardSelects.Chevron, null, /*#__PURE__*/_react.default.createElement(_FiChevronDown.default, null))), open && options && /*#__PURE__*/_react.default.createElement(_DashboardSelects.Options, {
    className: "list",
    isAbsolute: true,
    position: position || 'right',
    ref: dropdownReference
  }, isShowSearchBar && /*#__PURE__*/_react.default.createElement(_DashboardSelects.SearchBarWrapper, {
    className: "search-bar-container"
  }, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    lazyLoad: !searchBarIsNotLazyLoad,
    isCustomLayout: searchBarIsCustomLayout,
    search: searchValue,
    onSearch: handleChangeSearch,
    placeholder: searchBarPlaceholder || ''
  })), /*#__PURE__*/_react.default.createElement(_DashboardSelects.OptionsInner, {
    className: "list-wrapper",
    optionInnerMargin: props.optionInnerMargin,
    optionInnerMaxHeight: props.optionInnerMaxHeight || 'initial'
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
    }, option.content, (option.editFunctionality || option.deleteFunctionality) && /*#__PURE__*/_react.default.createElement(_DashboardSelects.FunctionalityContainer, {
      disabled: value === option.value
    }, option.editFunctionality && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      borderRadius: "8px",
      color: "lightPrimary",
      onClick: function onClick() {
        return onEdit(option, i);
      },
      className: "edit"
    }, t('EDIT', 'Edit')), option.deleteFunctionality && /*#__PURE__*/_react.default.createElement(_BsTrash.default, {
      className: "delete",
      onClick: function onClick() {
        return onDelete(option.value);
      }
    })));
  }))));
};