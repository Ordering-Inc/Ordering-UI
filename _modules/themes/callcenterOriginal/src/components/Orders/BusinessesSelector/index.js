"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessesSelector = function BusinessesSelector(props) {
  var filterValues = props.filterValues,
    businessesList = props.businessesList,
    handleChangeBusinesses = props.handleChangeBusinesses;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    businessTypes = _useState2[0],
    setBusinessTypes = _useState2[1];
  var Placeholder = /*#__PURE__*/_react.default.createElement(_styles2.PlaceholderTitle, null, t('SELECT_BUSINESS', 'Select business'));
  var businessesLoading = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('BUSINESSES_LOADING', 'Businesses loading'), "...")
  }];
  (0, _react.useEffect)(function () {
    var _businessesOptionList = [];
    if (!businessesList.loading) {
      var _businessesOption = businessesList.businesses.map(function (business) {
        return {
          value: business.id,
          content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperBusinessImage, null, business.logo && /*#__PURE__*/_react.default.createElement(_styles2.BusinessImage, {
            bgimage: business.logo
          })), /*#__PURE__*/_react.default.createElement(_styles2.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionName, null, business.name), /*#__PURE__*/_react.default.createElement(_styles2.OptionCategory, null, (business === null || business === void 0 ? void 0 : business.alcohol) && t('ALCOHOL', 'Alcohol'), (business === null || business === void 0 ? void 0 : business.food) && t('FOOD', 'Food'), (business === null || business === void 0 ? void 0 : business.groceries) && t('GROCERIES', 'Groceries'), (business === null || business === void 0 ? void 0 : business.laundry) && t('LAUNDRY', 'Laundry'))))
        };
      });
      var _iterator = _createForOfIteratorHelper(_businessesOption),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          _businessesOptionList.push(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setBusinessTypes(_businessesOptionList);
  }, [businessesList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !businessesList.loading ? /*#__PURE__*/_react.default.createElement(_styles.MultiSelect, {
    defaultValue: filterValues.businessIds,
    placeholder: Placeholder,
    options: businessTypes,
    optionInnerMargin: "10px",
    optionInnerMaxHeight: "150px",
    optionBottomBorder: true,
    onChange: function onChange(business) {
      return handleChangeBusinesses(business);
    }
  }) : /*#__PURE__*/_react.default.createElement(_styles.MultiSelect, {
    defaultValue: "default",
    options: businessesLoading,
    optionInnerMargin: "10px",
    optionInnerMaxHeight: "150px",
    optionBottomBorder: true
  }));
};
exports.BusinessesSelector = BusinessesSelector;