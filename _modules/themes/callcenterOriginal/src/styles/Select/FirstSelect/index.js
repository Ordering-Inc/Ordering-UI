"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Select = function Select(props) {
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
exports.Select = Select;