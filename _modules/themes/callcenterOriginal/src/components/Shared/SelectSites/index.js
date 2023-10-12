"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectSites = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("../../../styles");
var _SearchBar = require("../SearchBar");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SelectSites = exports.SelectSites = function SelectSites(props) {
  var isAddMode = props.isAddMode,
    isDisabled = props.isDisabled,
    selectedSitesIds = props.selectedSitesIds,
    allSites = props.allSites,
    handleSelectSite = props.handleSelectSite,
    handleSelectAllSites = props.handleSelectAllSites,
    handleSelectNoneSites = props.handleSelectNoneSites,
    handleUpdateClick = props.handleUpdateClick,
    handleAddClick = props.handleAddClick;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredSites = _useState4[0],
    setFilteredSites = _useState4[1];
  (0, _react.useEffect)(function () {
    var _filteredSites = [];
    if (searchValue) {
      _filteredSites = allSites.filter(function (site) {
        var _site$name;
        return site === null || site === void 0 || (_site$name = site.name) === null || _site$name === void 0 ? void 0 : _site$name.toLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
      });
    } else {
      _filteredSites = _toConsumableArray(allSites);
    }
    setFilteredSites(_filteredSites);
  }, [searchValue]);
  return /*#__PURE__*/_react.default.createElement(_styles2.ChannelsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    placeholder: t('SEARCH', 'Search'),
    isCustomLayout: true,
    search: searchValue,
    onSearch: function onSearch(val) {
      return setSearchValue(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectAllSites();
    }
  }, t('SELECT_ALL', 'Select all')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    onClick: function onClick() {
      return handleSelectNoneSites();
    }
  }, t('SELECT_NONE', 'Select none'))), filteredSites.map(function (site) {
    return /*#__PURE__*/_react.default.createElement(_styles2.ChannelItem, {
      key: site.id
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: selectedSitesIds.includes(site.id),
      onChange: function onChange(e) {
        return handleSelectSite(e.target.checked, site.id);
      }
    }), /*#__PURE__*/_react.default.createElement("span", null, site.name));
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: isDisabled,
    onClick: function onClick() {
      isAddMode ? handleAddClick() : handleUpdateClick();
    }
  }, isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')));
};