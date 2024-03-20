"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CitiesControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _IosRadioButtonOff = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOff"));
var _RiRadioButtonFill = _interopRequireDefault(require("@meronex/icons/ri/RiRadioButtonFill"));
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _SearchBar = require("../SearchBar");
var _styles2 = require("../Modal/styles");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CitiesControl = exports.CitiesControl = function CitiesControl(props) {
  var _orderState$options, _cities$filter;
  var cities = props.cities,
    onClose = props.onClose,
    handleChangeCity = props.handleChangeCity;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useState = (0, _react.useState)(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.city_id),
    _useState2 = _slicedToArray(_useState, 2),
    cityState = _useState2[0],
    setCityState = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    cityFilter = _useState4[0],
    setCityFilter = _useState4[1];
  var handleClick = function handleClick() {
    var _orderState$options2;
    cityState !== (orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.city_id) && handleChangeCity(cityState);
    onClose && onClose();
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.ModalIconWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onClose();
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ModalHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.ModalTitle, null, t('SELECT_A_STORE', 'Select a store'))), orderState !== null && orderState !== void 0 && orderState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40,
    count: 3,
    style: {
      marginBottom: '10px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SearchBarContainer, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    name: "city-filter",
    placeholder: t('SEARCH_CITIES', 'Search Cities'),
    onSearch: function onSearch(val) {
      return setCityFilter(val);
    },
    search: cityFilter
  })), cities === null || cities === void 0 || (_cities$filter = cities.filter(function (city) {
    var _city$name, _city$name$toLowerCas, _cityFilter$toLowerCa;
    return city === null || city === void 0 || (_city$name = city.name) === null || _city$name === void 0 || (_city$name$toLowerCas = _city$name.toLowerCase) === null || _city$name$toLowerCas === void 0 || (_city$name$toLowerCas = _city$name$toLowerCas.call(_city$name)) === null || _city$name$toLowerCas === void 0 ? void 0 : _city$name$toLowerCas.includes(cityFilter === null || cityFilter === void 0 || (_cityFilter$toLowerCa = cityFilter.toLowerCase) === null || _cityFilter$toLowerCa === void 0 ? void 0 : _cityFilter$toLowerCa.call(cityFilter));
  })) === null || _cities$filter === void 0 ? void 0 : _cities$filter.map(function (city) {
    return (city === null || city === void 0 ? void 0 : city.enabled) && /*#__PURE__*/_react.default.createElement(_styles.CityItem, {
      key: city === null || city === void 0 ? void 0 : city.id,
      onClick: function onClick() {
        return setCityState((city === null || city === void 0 ? void 0 : city.id) === cityState ? null : city === null || city === void 0 ? void 0 : city.id);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "radio"
    }, (city === null || city === void 0 ? void 0 : city.id) === cityState ? /*#__PURE__*/_react.default.createElement(_RiRadioButtonFill.default, {
      className: "city-checked"
    }) : /*#__PURE__*/_react.default.createElement(_IosRadioButtonOff.default, null)), city === null || city === void 0 ? void 0 : city.name);
  }))), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleClick();
    }
  }, t('CONTINUE', 'Continue')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)));
};