"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminSelector = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _MultiSelect = require("../../../styles/MultiSelect");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AdminSelectorUI = function AdminSelectorUI(props) {
  var adminList = props.adminList,
    defaultValue = props.defaultValue,
    isPhoneView = props.isPhoneView,
    isFilterView = props.isFilterView,
    small = props.small,
    padding = props.padding,
    handleChangeAdmin = props.handleChangeAdmin,
    filterValues = props.filterValues;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  // const [defaultOption, setDefaultOption] = useState(null)
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    adminsMultiOptionList = _useState2[0],
    setAdminsMultiOptionList = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var AdminLoading = [{
    value: 'default',
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
      small: small
    }, t('LOADING', 'loading'), "...")
  }];
  (0, _react.useEffect)(function () {
    var _aadminOptionList = [{
      value: 'default',
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
        padding: '0px'
      }, t('SELECT_ADMIN', 'Select admin')),
      color: 'primary',
      disabled: !isFilterView,
      showDisable: true
    }];
    if (!adminList.loading) {
      var _adminList;
      if (searchValue) {
        _adminList = adminList.admins.filter(function (admin) {
          return (admin.name + admin.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
        });
      } else {
        _adminList = adminList.admins;
      }
      var _adminsOptionListTemp = _adminList.map(function (admin, i) {
        var _theme$images$icons;
        return {
          value: admin.id,
          showDisable: true,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, {
            small: small,
            isPhoneView: isPhoneView,
            padding: padding,
            isFilterView: isFilterView
          }, /*#__PURE__*/_react.default.createElement(_styles.WrapperAdminImage, {
            small: small,
            className: "admin-photo"
          }, /*#__PURE__*/_react.default.createElement(_styles.AdminImage, {
            bgimage: admin.photo || ((_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.noAdmin),
            small: small
          })), /*#__PURE__*/_react.default.createElement(_styles.OptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.AdminNameContainer, {
            className: "admin-info"
          }, /*#__PURE__*/_react.default.createElement(_styles.AdminName, {
            small: small
          }, admin.name, " ", admin.lastname))))
        };
      });
      setAdminsMultiOptionList(_adminsOptionListTemp);
      var _iterator = _createForOfIteratorHelper(_adminsOptionListTemp),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          _aadminOptionList.push(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, [adminList, searchValue]);

  // useEffect(() => {
  //   setDefaultOption(defaultValue)
  // }, [defaultValue])

  var Placeholder = /*#__PURE__*/_react.default.createElement(_styles.PlaceholderTitle, null, t('SELECT_ADMIN', 'Select admin'));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !adminList.loading ? /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
    defaultValue: filterValues.adminIds,
    placeholder: Placeholder,
    options: adminsMultiOptionList,
    optionInnerMargin: "10px",
    optionInnerMaxHeight: "150px",
    onChange: function onChange(admin) {
      return handleChangeAdmin(admin);
    }
  }) : /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
    defaultValue: "default",
    options: AdminLoading,
    optionInnerMargin: "10px",
    optionInnerMaxHeight: "150px",
    className: "admin-select"
  }));
};
var AdminSelector = function AdminSelector(props) {
  var AdminControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AdminSelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.AdminList, AdminControlProps));
};
exports.AdminSelector = AdminSelector;