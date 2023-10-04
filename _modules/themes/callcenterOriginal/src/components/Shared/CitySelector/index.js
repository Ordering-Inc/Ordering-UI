"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CitySelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("../../../styles");
var _Select = require("../../../styles/Select");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var CitySelectorUI = function CitySelectorUI(props) {
  var isAddMode = props.isAddMode,
    citiesList = props.citiesList,
    isDefault = props.isDefault,
    filterValues = props.filterValues,
    defaultValue = props.defaultValue,
    handleChangeCity = props.handleChangeCity,
    position = props.position,
    optionInnerMaxHeight = props.optionInnerMaxHeight;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cityOptions = _useState2[0],
    setCityOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles2.PlaceholderTitle, {
    isDefault: isDefault
  }, t('SELECT_CITY', 'Select City'));
  (0, _react.useEffect)(function () {
    if (citiesList !== null && citiesList !== void 0 && citiesList.loading) return;
    var _cityOptions = citiesList === null || citiesList === void 0 ? void 0 : citiesList.cities.filter(function (option) {
      return option === null || option === void 0 ? void 0 : option.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }).map(function (city) {
      return {
        value: city.id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
          noPadding: true,
          isDefault: isDefault
        }, city === null || city === void 0 ? void 0 : city.name),
        showOnSelected: /*#__PURE__*/_react.default.createElement(_styles2.Option, {
          isDefault: isDefault
        }, city === null || city === void 0 ? void 0 : city.name)
      };
    });
    setCityOptions(_cityOptions);
  }, [citiesList, isDefault, searchValue]);
  (0, _react.useEffect)(function () {
    if (!isAddMode) return;
    if (cityOptions.length === 1) {
      var _citiesList$cities$;
      handleChangeCity(citiesList === null || citiesList === void 0 || (_citiesList$cities$ = citiesList.cities[0]) === null || _citiesList$cities$ === void 0 ? void 0 : _citiesList$cities$.id);
    }
  }, [cityOptions, isAddMode]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, citiesList !== null && citiesList !== void 0 && citiesList.loading ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    style: {
      height: '100%',
      lineHeight: 'normal'
    }
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isDefault ? /*#__PURE__*/_react.default.createElement(_Select.Select, {
    position: position,
    optionInnerMaxHeight: optionInnerMaxHeight,
    placeholder: placeholder,
    defaultValue: defaultValue,
    options: cityOptions,
    onChange: function onChange(city) {
      return handleChangeCity(city);
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles.MultiSelect, {
    placeholder: placeholder,
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.cityIds,
    options: cityOptions,
    onChange: function onChange(city) {
      return handleChangeCity(city);
    },
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: searchValue,
    handleChangeSearch: function handleChangeSearch(val) {
      return setSearchValue(val);
    }
  })));
};
var CitySelector = exports.CitySelector = function CitySelector(props) {
  var cityListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CitySelectorUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CityList, cityListProps);
};