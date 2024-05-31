"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessTypeFilter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _Tabs = require("../../styles/Tabs");
var _styles = require("./styles");
var _AutoScroll = require("../../../../../components/AutoScroll");
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessTypeFilterUI = function BusinessTypeFilterUI(props) {
  var _theme$business_listi, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var typesState = props.typesState,
    currentTypeSelected = props.currentTypeSelected,
    handleChangeBusinessType = props.handleChangeBusinessType,
    isSearchMode = props.isSearchMode,
    filters = props.filters,
    handleChangeFilters = props.handleChangeFilters,
    isAppoint = props.isAppoint;
  var loading = typesState.loading,
    error = typesState.error,
    types = typesState.types;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    load = _useState2[0],
    setLoad = _useState2[1];
  var theme = (0, _styledComponents.useTheme)();
  var isCategoriesHidden = theme === null || theme === void 0 || (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.categories) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.all) === null || _theme$business_listi === void 0 ? void 0 : _theme$business_listi.hidden;
  var handleChangeCategory = function handleChangeCategory(category) {
    if (isAppoint && category === currentTypeSelected && !isCategoriesHidden) {
      handleChangeBusinessType(null);
      return;
    }
    handleChangeBusinessType && handleChangeBusinessType(category);
  };
  var handleChangeActiveBusinessType = function handleChangeActiveBusinessType(type) {
    var _filters$business_typ;
    if ((type === null || type === void 0 ? void 0 : type.id) === null) {
      handleChangeFilters('business_types', []);
      return;
    }
    if (filters !== null && filters !== void 0 && (_filters$business_typ = filters.business_types) !== null && _filters$business_typ !== void 0 && _filters$business_typ.includes(type === null || type === void 0 ? void 0 : type.id)) {
      var arrayAux = filters === null || filters === void 0 ? void 0 : filters.business_types;
      var index = arrayAux === null || arrayAux === void 0 ? void 0 : arrayAux.indexOf(type === null || type === void 0 ? void 0 : type.id);
      arrayAux.splice(index, 1);
      handleChangeFilters('business_types', arrayAux);
    } else {
      handleChangeFilters('business_types', [].concat(_toConsumableArray(filters === null || filters === void 0 ? void 0 : filters.business_types), [type === null || type === void 0 ? void 0 : type.id]));
    }
  };
  (0, _react.useEffect)(function () {
    if (isCategoriesHidden && currentTypeSelected === null) {
      if (types && (types === null || types === void 0 ? void 0 : types.length) > 0) {
        var _types$;
        !isSearchMode && !isAppoint && handleChangeCategory((_types$ = types[1]) === null || _types$ === void 0 ? void 0 : _types$.id);
      }
    }
  }, [types, currentTypeSelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), isSearchMode && /*#__PURE__*/_react.default.createElement(_styles.SearchTypeContainer, {
    id: "container"
  }, types.map(function (type, i) {
    var _filters$business_typ2, _filters$business_typ3, _filters$business_typ4;
    return type.enabled && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      key: type === null || type === void 0 ? void 0 : type.id,
      color: filters !== null && filters !== void 0 && (_filters$business_typ2 = filters.business_types) !== null && _filters$business_typ2 !== void 0 && _filters$business_typ2.includes(type === null || type === void 0 ? void 0 : type.id) || (type === null || type === void 0 ? void 0 : type.id) === null && (filters === null || filters === void 0 || (_filters$business_typ3 = filters.business_types) === null || _filters$business_typ3 === void 0 ? void 0 : _filters$business_typ3.length) === 0 ? 'primary' : 'lightGray',
      onClick: function onClick() {
        return handleChangeActiveBusinessType(type);
      }
    }, t("BUSINESS_TYPE_".concat(type.name.replace(/\s/g, '_').toUpperCase()), type.name), " ", (filters === null || filters === void 0 || (_filters$business_typ4 = filters.business_types) === null || _filters$business_typ4 === void 0 ? void 0 : _filters$business_typ4.includes(type === null || type === void 0 ? void 0 : type.id)) && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null));
  })), isAppoint && /*#__PURE__*/_react.default.createElement(_styles.SearchTypeContainer, {
    id: "container"
  }, loading ? _toConsumableArray(Array(6)).map(function (_, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      id: "skeleton",
      key: i,
      height: 28,
      width: 70
    });
  }) : types.map(function (type, i) {
    return type.enabled && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      key: type === null || type === void 0 ? void 0 : type.id,
      color: type.id === currentTypeSelected ? 'primary' : 'lightGray',
      onClick: function onClick() {
        return handleChangeCategory(type.id);
      }
    }, t("BUSINESS_TYPE_".concat(type.name.replace(/\s/g, '_').toUpperCase()), type.name), " ", currentTypeSelected && type.id === currentTypeSelected && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null));
  })), !isSearchMode && !isAppoint && /*#__PURE__*/_react.default.createElement(_styles.TypeContainer, {
    id: "container"
  }, loading && /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    className: "category",
    style: styles.wrapperSkeleton
  }, _toConsumableArray(Array(4)).map(function (_, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      id: "skeleton",
      key: i,
      height: 40,
      width: 120
    });
  })))), !loading && !error && types && types.length > 0 && /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, types.map(function (type, i) {
    return (isCategoriesHidden ? type.enabled && type.name !== 'All' : type.enabled) && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      key: type.id,
      active: type.id === currentTypeSelected || i === 0
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoryTitle, {
      active: type.id === currentTypeSelected,
      load: load,
      onLoad: function onLoad() {
        return setLoad(true);
      },
      onClick: function onClick() {
        return handleChangeCategory(type.id);
      }
    }, t("BUSINESS_TYPE_".concat(type.name.replace(/\s/g, '_').toUpperCase()), type.name)));
  }))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var styles = {
  wrapperSkeleton: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
};
var BusinessTypeFilter = exports.BusinessTypeFilter = function BusinessTypeFilter(props) {
  var businessTypeFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessTypeFilterUI,
    defaultBusinessType: props.defaultBusinessType || null,
    onChangeBusinessType: props.handleChangeBusinessType
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessTypeFilter, businessTypeFilterProps);
};