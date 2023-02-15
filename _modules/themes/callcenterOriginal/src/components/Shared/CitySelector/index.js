"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
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
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cityOptions = _useState2[0],
    setCityOptions = _useState2[1];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles2.PlaceholderTitle, {
    isDefault: isDefault
  }, t('SELECT_CITY', 'Select City'));
  (0, _react.useEffect)(function () {
    if (citiesList !== null && citiesList !== void 0 && citiesList.loading) return;
    var _cityOptions = citiesList === null || citiesList === void 0 ? void 0 : citiesList.cities.map(function (city) {
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
  }, [citiesList, isDefault]);
  (0, _react.useEffect)(function () {
    if (!isAddMode) return;
    if (cityOptions.length === 1) {
      var _citiesList$cities$;
      handleChangeCity(citiesList === null || citiesList === void 0 ? void 0 : (_citiesList$cities$ = citiesList.cities[0]) === null || _citiesList$cities$ === void 0 ? void 0 : _citiesList$cities$.id);
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
    }
  })));
};
var CitySelector = function CitySelector(props) {
  var cityListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CitySelectorUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CityList, cityListProps);
};
exports.CitySelector = CitySelector;