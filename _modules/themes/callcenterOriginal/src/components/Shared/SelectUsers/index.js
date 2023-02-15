"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectUsers = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Pagination = require("../Pagination");
var _SearchBar = require("../SearchBar");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SelectUsersUI = function SelectUsersUI(props) {
  var usersList = props.usersList,
    paginationProps = props.paginationProps,
    getUsers = props.getUsers,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    isAddMode = props.isAddMode,
    isDisabled = props.isDisabled,
    selectedUserIds = props.selectedUserIds,
    handleSelectUser = props.handleSelectUser,
    handleAddPromotion = props.handleAddPromotion,
    handleUpdateClick = props.handleUpdateClick,
    handleSelectAllUsers = props.handleSelectAllUsers;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    all = _useState2[0],
    setAll = _useState2[1];
  var _useState3 = (0, _react.useState)(10),
    _useState4 = _slicedToArray(_useState3, 2),
    paginationSize = _useState4[0],
    setPaginationSize = _useState4[1];
  var handleChangePage = function handleChangePage(page) {
    getUsers(page, paginationSize);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(paginationProps.from / pageSize);
    setPaginationSize(pageSize);
    getUsers(expectedPage, pageSize);
  };
  (0, _react.useEffect)(function () {
    setAll(!!!(selectedUserIds !== null && selectedUserIds !== void 0 && selectedUserIds.length));
  }, [selectedUserIds]);
  var handleAllCheck = function handleAllCheck(check) {
    if (!check) {
      handleSelectAllUsers();
      setAll(true);
    } else {
      setAll(false);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.UsersContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    isCustomLayout: true,
    placeholder: t('SEARCH', 'Search'),
    searchValue: searchValue,
    onSearch: onSearch
  })), usersList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.UserItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 18,
      height: 18
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.UserItem, null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    checked: all,
    onChange: function onChange() {
      return handleAllCheck(all);
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "name"
  }, t('ALL', 'All'))), (!all || !!(searchValue !== null && searchValue !== void 0 && searchValue.length)) && usersList.users.map(function (user) {
    return /*#__PURE__*/_react.default.createElement(_styles2.UserItem, {
      key: user.id
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: selectedUserIds.includes(user.id),
      onChange: function onChange(e) {
        return handleSelectUser(e.target.checked, user.id);
      }
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname));
  })), (!all || !!(searchValue !== null && searchValue !== void 0 && searchValue.length)) && (usersList === null || usersList === void 0 ? void 0 : usersList.users.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    paginationSize: paginationSize,
    currentPage: paginationProps.currentPage,
    totalPages: paginationProps.totalPages,
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: isDisabled,
    onClick: function onClick() {
      isAddMode ? handleAddPromotion() : handleUpdateClick();
    }
  }, isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')));
};
var SelectUsers = function SelectUsers(props) {
  var usersProps = _objectSpread(_objectSpread({}, props), {}, {
    defaultUserTypesSelected: [3],
    UIComponent: SelectUsersUI,
    isSearchByUserEmail: true,
    isSearchByUserPhone: true,
    isSearchByUserName: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UsersList, usersProps);
};
exports.SelectUsers = SelectUsers;