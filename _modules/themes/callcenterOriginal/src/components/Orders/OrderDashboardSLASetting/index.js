"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusBlock = exports.OrderDashboardSLASettingUI = exports.OrderDashboardSLASetting = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactHookForm = require("react-hook-form");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderDashboardSLASettingUI = function OrderDashboardSLASettingUI(props) {
  var _theme$images$icons, _theme$images$icons2, _theme$images$icons3;
  var settingsState = props.settingsState,
    handleInputChange = props.handleInputChange,
    handleClickUpdate = props.handleClickUpdate;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    settingOpen = _useState2[0],
    setSettingOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentTabItem = _useState4[0],
    setCurrentTabItem = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedTabStatus = _useState6[0],
    setSelectedTabStatus = _useState6[1];
  var theme = (0, _styledComponents.useTheme)();
  var formMethods = (0, _reactHookForm.useForm)();
  var _useState7 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alertState = _useState8[0],
    setAlertState = _useState8[1];
  var defaultOrderTypes = [{
    key: 1,
    name: t('DELIVERY', 'Delivery')
  }, {
    key: 2,
    name: t('PICKUP', 'Pickup')
  }, {
    key: 3,
    name: t('EAT_IN', 'Eat in')
  }, {
    key: 4,
    name: t('CURBSIDE', 'Curbside')
  }, {
    key: 5,
    name: t('DRIVE_THRU', 'Drive thru')
  }];
  var deliveryStatus = [{
    key: t('OK', 'Ok'),
    des: t('DELIVERY_OK_STATUS_DESC', 'Get delivery time from the businesses.'),
    timmer: false,
    icon: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.clock1,
    backColor: '#00D27A'
  }, {
    key: t('AT_RISK', 'At risk'),
    des: t('DELIVERY_ATRISK_STATUS_DESC', 'Is the time between delivery time of busines and the delayed time.'),
    timmer: false,
    icon: (_theme$images$icons2 = theme.images.icons) === null || _theme$images$icons2 === void 0 ? void 0 : _theme$images$icons2.clockRisk,
    backColor: '#FFC700'
  }, {
    key: t('DELAYED', 'Delayed'),
    des: t('DELIVERY_DELAYED_STATUS_DESC', 'If this time is exceeded, the order will be delayed.'),
    timmer: false,
    icon: (_theme$images$icons3 = theme.images.icons) === null || _theme$images$icons3 === void 0 ? void 0 : _theme$images$icons3.clockDelayed,
    backColor: '#E63757'
  }];
  var handleCloseSettings = function handleCloseSettings() {
    setSettingOpen(false);
  };
  var onSubmit = function onSubmit(data) {
    if (data && Object.keys(data).length > 0) {
      handleClickUpdate();
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    setSelectedTabStatus(deliveryStatus);
  }, []);
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _settingsState$result;
    if (settingsState !== null && settingsState !== void 0 && (_settingsState$result = settingsState.result) !== null && _settingsState$result !== void 0 && _settingsState$result.error) {
      var _settingsState$result2;
      setAlertState({
        open: true,
        content: settingsState === null || settingsState === void 0 ? void 0 : (_settingsState$result2 = settingsState.result) === null || _settingsState$result2 === void 0 ? void 0 : _settingsState$result2.result
      });
    }
  }, [settingsState === null || settingsState === void 0 ? void 0 : settingsState.result]);
  return /*#__PURE__*/_react.default.createElement(_styles2.SettingContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundary",
    onClick: function onClick() {
      return setSettingOpen(true);
    }
  }, t('SLA_SETTING', 'SLA’s settings')), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    open: settingOpen,
    onClose: function onClose() {
      return handleCloseSettings();
    },
    width: "fit-content"
  }, /*#__PURE__*/_react.default.createElement(_styles2.SettingControlPanel, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.SettingHeader, null, t('SLA_SETTINGS', 'SLA’s settings')), /*#__PURE__*/_react.default.createElement(_styles2.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, defaultOrderTypes.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: item.key,
      active: item.key === currentTabItem,
      onClick: function onClick() {
        return setCurrentTabItem(item.key);
      }
    }, item.name);
  }))), /*#__PURE__*/_react.default.createElement(_styles2.DeliveryStatusWrapper, null, selectedTabStatus && selectedTabStatus.length > 0 && selectedTabStatus.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(StatusBlock, {
      key: i,
      item: item,
      last: i + 1 === selectedTabStatus.length,
      formMethods: formMethods,
      handleInputChange: handleInputChange
    });
  })), /*#__PURE__*/_react.default.createElement(_styles2.Actions, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    type: "submit"
  }, t('ACCEPT', 'Accept'))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('SLA_SETTING', 'SLA’s settings'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
exports.OrderDashboardSLASettingUI = OrderDashboardSLASettingUI;
var StatusBlock = function StatusBlock(props) {
  var _configs$order_deadli2;
  var item = props.item,
    last = props.last,
    formMethods = props.formMethods,
    handleInputChange = props.handleInputChange;
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState9 = (0, _react.useState)(38),
    _useState10 = _slicedToArray(_useState9, 2),
    inputWidth = _useState10[0],
    setInputWidth = _useState10[1];
  var handleMiuteChange = function handleMiuteChange(e) {
    var _configs$order_deadli;
    setInputWidth((e.target.value.length + 1) * 8.5);
    handleInputChange(e.target.value, configs === null || configs === void 0 ? void 0 : (_configs$order_deadli = configs.order_deadlines_delayed_time) === null || _configs$order_deadli === void 0 ? void 0 : _configs$order_deadli.id);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.StatusItems, null, /*#__PURE__*/_react.default.createElement(_styles2.ItemHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: item === null || item === void 0 ? void 0 : item.icon,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.ItemStatus, {
    backColor: item === null || item === void 0 ? void 0 : item.backColor
  }), /*#__PURE__*/_react.default.createElement("span", null, item === null || item === void 0 ? void 0 : item.key)), /*#__PURE__*/_react.default.createElement(_styles2.ItemContent, null, /*#__PURE__*/_react.default.createElement("p", null, item === null || item === void 0 ? void 0 : item.des)), last && /*#__PURE__*/_react.default.createElement(_styles2.TimerInputWrapper, null, /*#__PURE__*/_react.default.createElement("input", {
    name: "minute",
    type: "text",
    placeholder: "MM",
    disabled: true,
    defaultValue: configs === null || configs === void 0 ? void 0 : (_configs$order_deadli2 = configs.order_deadlines_delayed_time) === null || _configs$order_deadli2 === void 0 ? void 0 : _configs$order_deadli2.value,
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_MINUTE_REQUIRED', 'The field minute is required').replace('_attribute_', t('MINUTE', 'Minute'))
    }),
    style: {
      width: inputWidth
    },
    onChange: function onChange(e) {
      return handleMiuteChange(e);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), last && /*#__PURE__*/_react.default.createElement(_styles2.OverLine, null));
};
exports.StatusBlock = StatusBlock;
var OrderDashboardSLASetting = function OrderDashboardSLASetting(props) {
  var _useConfig3 = (0, _orderingComponents.useConfig)(),
    _useConfig4 = _slicedToArray(_useConfig3, 1),
    configs = _useConfig4[0].configs;
  var settingsListProps = _objectSpread(_objectSpread({}, props), {}, {
    category: {
      configs: [_objectSpread({}, configs === null || configs === void 0 ? void 0 : configs.order_deadlines_delayed_time)]
    },
    UIComponent: OrderDashboardSLASettingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SettingsList, settingsListProps);
};
exports.OrderDashboardSLASetting = OrderDashboardSLASetting;