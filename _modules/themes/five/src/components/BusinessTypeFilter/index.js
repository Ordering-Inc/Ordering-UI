"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessTypeFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _Tabs = require("../../styles/Tabs");

var _styles = require("./styles");

var _AutoScroll = require("../../../../../components/AutoScroll");

var _Buttons = require("../../styles/Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var BusinessTypeFilterUI = function BusinessTypeFilterUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;

  var typesState = props.typesState,
      currentTypeSelected = props.currentTypeSelected,
      handleChangeBusinessType = props.handleChangeBusinessType,
      isSearchMode = props.isSearchMode,
      filters = props.filters,
      handleChangeFilters = props.handleChangeFilters;
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

  var handleChangeCategory = function handleChangeCategory(category) {
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), isSearchMode ? /*#__PURE__*/_react.default.createElement(_styles.SearchTypeContainer, {
    id: "container"
  }, types.map(function (type, i) {
    var _filters$business_typ2, _filters$business_typ3, _filters$business_typ4;

    return type.enabled && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      key: type === null || type === void 0 ? void 0 : type.id,
      color: filters !== null && filters !== void 0 && (_filters$business_typ2 = filters.business_types) !== null && _filters$business_typ2 !== void 0 && _filters$business_typ2.includes(type === null || type === void 0 ? void 0 : type.id) || (type === null || type === void 0 ? void 0 : type.id) === null && (filters === null || filters === void 0 ? void 0 : (_filters$business_typ3 = filters.business_types) === null || _filters$business_typ3 === void 0 ? void 0 : _filters$business_typ3.length) === 0 ? 'primary' : 'secondary',
      onClick: function onClick() {
        return handleChangeActiveBusinessType(type);
      }
    }, t("BUSINESS_TYPE_".concat(type.name.replace(/\s/g, '_').toUpperCase()), type.name), " ", (filters === null || filters === void 0 ? void 0 : (_filters$business_typ4 = filters.business_types) === null || _filters$business_typ4 === void 0 ? void 0 : _filters$business_typ4.includes(type === null || type === void 0 ? void 0 : type.id)) && 'X');
  })) : /*#__PURE__*/_react.default.createElement(_styles.TypeContainer, {
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
    return type.enabled && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      key: type.id,
      active: type.id === currentTypeSelected,
      className: "category"
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

var BusinessTypeFilter = function BusinessTypeFilter(props) {
  var businessTypeFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessTypeFilterUI,
    defaultBusinessType: props.defaultBusinessType || null,
    onChangeBusinessType: props.handleChangeBusinessType
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessTypeFilter, businessTypeFilterProps);
};

exports.BusinessTypeFilter = BusinessTypeFilter;