"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectBusinesses = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SelectBusinesses = exports.SelectBusinesses = function SelectBusinesses(props) {
  var businessList = props.businessList,
    selectedBusiness = props.selectedBusiness,
    setSelectedBusiness = props.setSelectedBusiness;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    businessOptions = _useState2[0],
    setBusinessOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var onChange = function onChange(val) {
    var findStore = businessList === null || businessList === void 0 ? void 0 : businessList.businesses.find(function (store) {
      return (store === null || store === void 0 ? void 0 : store.slug) === val;
    });
    setSelectedBusiness(findStore);
    setSearchValue('');
  };
  (0, _react.useEffect)(function () {
    if (businessList !== null && businessList !== void 0 && businessList.loading || !(businessList !== null && businessList !== void 0 && businessList.businesses)) return;
    var _businessOptions = [];
    businessList.businesses.filter(function (business) {
      return ((business === null || business === void 0 ? void 0 : business.name) || '').toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }).map(function (business) {
      var _theme$images;
      _businessOptions.push({
        value: business === null || business === void 0 ? void 0 : business.slug,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement("img", {
          src: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_50,c_limit'),
          alt: ""
        }), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : business.name))
      });
    });
    setBusinessOptions(_businessOptions);
  }, [businessList, searchValue]);
  (0, _react.useEffect)(function () {
    if (!selectedBusiness || businessList !== null && businessList !== void 0 && businessList.loading || !(businessList !== null && businessList !== void 0 && businessList.businesses)) return;
    var found = businessList.businesses.find(function (store) {
      return (store === null || store === void 0 ? void 0 : store.slug) === (selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.slug);
    });
    if (!found) setSelectedBusiness(null);
  }, [businessList, selectedBusiness]);
  return /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('SELECT_BUSINESS', 'Select business')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SELECT_BUSINESS', 'Select business')),
    options: businessOptions,
    defaultValue: selectedBusiness === null || selectedBusiness === void 0 ? void 0 : selectedBusiness.slug,
    onChange: onChange,
    optionInnerMaxHeight: "300px",
    isShowSearchBar: true,
    searchValue: searchValue,
    handleChangeSearch: setSearchValue
  }));
};