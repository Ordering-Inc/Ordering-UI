"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymethodTypeSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _MultiSelect = require("../../../styles/MultiSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PaymethodTypeSelector = exports.PaymethodTypeSelector = function PaymethodTypeSelector(props) {
  var paymethodsList = props.paymethodsList,
    filterValues = props.filterValues,
    handleChangePaymethodType = props.handleChangePaymethodType;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    paymethodsTypes = _useState2[0],
    setPaymethodsTypes = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.PlaceholderTitle, null, t('SELECT_PAYMETHOD', 'Select paymethod'));
  var paymthodsLoading = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('PAYMETHODS_LOADING', 'Paymethods loading'), "...")
  }];
  (0, _react.useEffect)(function () {
    var _paymthodsOptionList = [];
    if (!paymethodsList.loading) {
      var _paymthodsOption = paymethodsList.paymethods.filter(function (option) {
        return option === null || option === void 0 ? void 0 : option.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      }).map(function (paymethod) {
        var _paymethod$gateway;
        return {
          value: paymethod.id,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t(paymethod === null || paymethod === void 0 || (_paymethod$gateway = paymethod.gateway) === null || _paymethod$gateway === void 0 ? void 0 : _paymethod$gateway.toUpperCase(), paymethod.name))
        };
      });
      var _iterator = _createForOfIteratorHelper(_paymthodsOption),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          _paymthodsOptionList.push(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setPaymethodsTypes(_paymthodsOptionList);
  }, [paymethodsList, searchValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !paymethodsList.loading ? /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
    defaultValue: filterValues.paymethodIds,
    placeholder: placeholder,
    options: paymethodsTypes,
    optionBottomBorder: true,
    onChange: function onChange(paymethod) {
      return handleChangePaymethodType(paymethod);
    },
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: searchValue,
    handleChangeSearch: function handleChangeSearch(val) {
      return setSearchValue(val);
    }
  }) : /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
    defaultValue: "default",
    options: paymthodsLoading,
    optionBottomBorder: true,
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: searchValue,
    handleChangeSearch: function handleChangeSearch(val) {
      return setSearchValue(val);
    }
  }));
};