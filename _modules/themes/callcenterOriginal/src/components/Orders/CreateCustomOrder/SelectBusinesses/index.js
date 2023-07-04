"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectBusinesses = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SelectBusinesses = function SelectBusinesses(props) {
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
exports.SelectBusinesses = SelectBusinesses;