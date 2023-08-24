"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaxSectionItem = void 0;
var _orderingComponents = require("ordering-components");
var _react = _interopRequireDefault(require("react"));
var _styles = require("../styles");
var _utils = require("../../../../../../utils");
var _Accordion = require("../Accordion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MaxSectionItem = function MaxSectionItem(props) {
  var _configs$distance_uni, _ref;
  var filters = props.filters,
    handleChangeFilters = props.handleChangeFilters,
    title = props.title,
    options = props.options,
    filter = props.filter;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var distanceUnit = configs === null || configs === void 0 || (_configs$distance_uni = configs.distance_unit) === null || _configs$distance_uni === void 0 ? void 0 : _configs$distance_uni.value;
  var units = {
    mi: 1609,
    km: 1000
  };
  var parseValue = function parseValue(option) {
    return filter === 'max_distance' ? "".concat((option / units[distanceUnit]).toFixed(0), " ").concat(t("".concat(distanceUnit === null || distanceUnit === void 0 ? void 0 : distanceUnit.toUpperCase()), (0, _utils.capitalize)(distanceUnit))) : filter === 'max_eta' ? "".concat(option, " ").concat(t('TIME_MIN', 'min')) : parsePrice(option);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.MaxFilterContainer, null, /*#__PURE__*/_react.default.createElement(_Accordion.FilterAccordion, {
    title: title
  }, /*#__PURE__*/_react.default.createElement(_styles.ProgressContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProgressBar, {
    style: {
      width: "".concat((_ref = options.indexOf(filters === null || filters === void 0 ? void 0 : filters[filter]) / 3 * 100) !== null && _ref !== void 0 ? _ref : 100, "%")
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.MaxItemContainer, null, options.map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.MaxItem, {
      key: option,
      active: (filters === null || filters === void 0 ? void 0 : filters[filter]) === option || option === 'default' && ((filters === null || filters === void 0 ? void 0 : filters[filter]) === 'default' || !(filters !== null && filters !== void 0 && filters[filter])),
      onClick: function onClick() {
        return handleChangeFilters(filter, option);
      }
    }, option === 'default' ? "".concat(parseValue(options[i - 1]), "+") : parseValue(option));
  }))));
};
exports.MaxSectionItem = MaxSectionItem;