"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileOptions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _Tabs = require("../../../styles/Tabs");

var _Tabs2 = require("../../../themes/five/src/styles/Tabs");

var _BsPerson = _interopRequireDefault(require("@meronex/icons/bs/BsPerson"));

var _AiOutlineUnorderedList = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineUnorderedList"));

var _FaAddressBook = _interopRequireDefault(require("@meronex/icons/fa/FaAddressBook"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProfileOptions = function ProfileOptions(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _orderingTheme$theme$5, _theme$colors, _theme$colors2;

  var value = props.value,
      pfchangs = props.pfchangs;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 1),
      tabValue = _useState2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
      _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
      orderingTheme = _useOrderingTheme2[0];

  var theme = (0, _styledComponents.useTheme)();
  var showAddressListTab = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.profile) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.address_list) === null || _orderingTheme$theme$3 === void 0 ? void 0 : (_orderingTheme$theme$4 = _orderingTheme$theme$3.components) === null || _orderingTheme$theme$4 === void 0 ? void 0 : (_orderingTheme$theme$5 = _orderingTheme$theme$4.layout) === null || _orderingTheme$theme$5 === void 0 ? void 0 : _orderingTheme$theme$5.position) === 'new_page';

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  var TabsComponent = pfchangs ? _Tabs2.Tabs : _Tabs.Tabs;
  var TabComponent = pfchangs ? _Tabs2.Tab : _Tabs.Tab;
  var pfchangsTabProps = pfchangs ? {
    borderBottom: true,
    pfchangs: true,
    activeColor: (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.gold,
    color: (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.gold
  } : {};
  return /*#__PURE__*/_react.default.createElement(_styles.FlexTabs, {
    pfchangs: pfchangs
  }, /*#__PURE__*/_react.default.createElement(TabsComponent, {
    variant: "primary"
  }, /*#__PURE__*/_react.default.createElement(TabComponent, _extends({
    onClick: function onClick() {
      return handleGoToPage({
        page: 'profile'
      });
    },
    active: tabValue === 'account'
  }, pfchangsTabProps), /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement(_BsPerson.default, null), " ", t('MY_ACCOUNT', 'My Account'))), showAddressListTab && /*#__PURE__*/_react.default.createElement(TabComponent, _extends({
    onClick: function onClick() {
      return handleGoToPage({
        page: 'addresses'
      });
    },
    active: tabValue === 'addresses'
  }, pfchangsTabProps), /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement(_FaAddressBook.default, null), " ", t('MY_ADDRESSES', 'My Addresses'))), /*#__PURE__*/_react.default.createElement(TabComponent, _extends({
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    },
    active: tabValue === 'orders'
  }, pfchangsTabProps), /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement(_AiOutlineUnorderedList.default, null), " ", t('MY_ORDERS', 'My orders')))));
};

exports.ProfileOptions = ProfileOptions;