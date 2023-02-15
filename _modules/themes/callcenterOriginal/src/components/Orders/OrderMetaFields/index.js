"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderMetaFields = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _Shared = require("../../Shared");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _BsTrash = _interopRequireDefault(require("@meronex/icons/bs/BsTrash"));
var _BsPlusSquare = _interopRequireDefault(require("@meronex/icons/bs/BsPlusSquare"));
var _DashboardSelect = require("../../../styles/Select/DashboardSelect");
var _reactHookForm = require("react-hook-form");
var _jsoneditorReact = require("jsoneditor-react");
require("jsoneditor-react/es/editor.min.css");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MetaFieldsUI = function MetaFieldsUI(props) {
  var orderId = props.orderId,
    metaFieldsList = props.metaFieldsList,
    actionState = props.actionState,
    handleDeleteMetaField = props.handleDeleteMetaField,
    handeAddMetaField = props.handeAddMetaField;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)('text'),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedMetaKey = _useState4[0],
    setSelectedMetaKey = _useState4[1];
  var _useState5 = (0, _react.useState)('1'),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedBoolean = _useState6[0],
    setSelectedBoolean = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    metaKey = _useState8[0],
    setMetaKey = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    metaValue = _useState10[0],
    setMetaValue = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    json = _useState12[0],
    setJson = _useState12[1];
  var metaTypeOptions = [{
    value: 'integer',
    content: t('INTEGER', 'integer')
  }, {
    value: 'decimal',
    content: t('DECIMAL', 'decimal')
  }, {
    value: 'boolean',
    content: t('BOOLEAN', 'boolean')
  }, {
    value: 'text',
    content: t('TEXT', 'text')
  }, {
    value: 'json',
    content: t('JSON', 'json')
  }];
  var booleanOptions = [{
    value: '1',
    content: t('TRUE', 'true')
  }, {
    value: '0',
    content: t('FALSE', 'false')
  }];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangeJson = function handleChangeJson(v) {
    setJson(v);
  };
  var onSubmit = function onSubmit() {
    var value;
    if (selectedMetaKey === 'json') {
      value = JSON.stringify(json);
    } else if (selectedMetaKey === 'boolean') {
      value = selectedBoolean;
    } else {
      value = metaValue;
    }
    handeAddMetaField({
      key: metaKey,
      order_id: orderId,
      value: value,
      value_type: selectedMetaKey
    });
  };
  (0, _react.useEffect)(function () {
    if (document.getElementById('meta_key')) {
      document.getElementById('meta_key').value = '';
    }
    if (document.getElementById('meta_value')) {
      document.getElementById('meta_value').value = '';
    }
  }, [selectedMetaKey]);
  (0, _react.useEffect)(function () {
    var _actionState$result, _actionState$result3;
    if (!actionState.loading && (_actionState$result = actionState.result) !== null && _actionState$result !== void 0 && _actionState$result.error) {
      var _actionState$result2;
      setAlertState({
        open: true,
        content: ((_actionState$result2 = actionState.result) === null || _actionState$result2 === void 0 ? void 0 : _actionState$result2.result) || [t('ERROR')]
      });
    }
    if (!actionState.loading && !((_actionState$result3 = actionState.result) !== null && _actionState$result3 !== void 0 && _actionState$result3.error)) {
      if (document.getElementById('meta_key')) {
        document.getElementById('meta_key').value = '';
      }
      if (document.getElementById('meta_value')) {
        document.getElementById('meta_value').value = '';
      }
    }
  }, [actionState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, metaFieldsList.loading ? /*#__PURE__*/_react.default.createElement(_styles.WrapMetaFields, null, _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 30
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 30
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 30
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 25,
      height: 30
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.WrapMetaFields, null, /*#__PURE__*/_react.default.createElement(_styles.MetaTitle, null, t('CUSTOM_FIELDS', 'Custom Fields')), metaFieldsList.metaFields.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, metaFieldsList.metaFields.map(function (metaField) {
    return /*#__PURE__*/_react.default.createElement(_styles.MetaContainer, {
      key: metaField.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "meta_type"
    }, metaField.value_type), /*#__PURE__*/_react.default.createElement("div", {
      className: "meta_key"
    }, /*#__PURE__*/_react.default.createElement(_styles.RoundBorder, null, metaField.key)), /*#__PURE__*/_react.default.createElement("div", {
      className: "meta_value"
    }, /*#__PURE__*/_react.default.createElement(_styles.RoundBorder, null, metaField.value_type === 'boolean' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, metaField.value === '0' ? t('FALSE', 'fase') : t('TRUE', 'true')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, metaField.value)), /*#__PURE__*/_react.default.createElement(_BsTrash.default, {
      onClick: function onClick() {
        return handleDeleteMetaField(metaField.id);
      }
    })));
  })) : /*#__PURE__*/_react.default.createElement(_styles.NoMetaField, null, t('NO_METAFIELD', 'No MetaField')), /*#__PURE__*/_react.default.createElement(_styles.MetaAddForm, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.MetaAddContainer, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "meta_type"
  }, /*#__PURE__*/_react.default.createElement(_DashboardSelect.Select, {
    defaultValue: selectedMetaKey || 'text',
    options: metaTypeOptions,
    onChange: function onChange(key) {
      return setSelectedMetaKey(key);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "meta_key"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "key",
    id: "meta_key"
    // value={metaKey}
    ,
    onChange: function onChange(e) {
      return setMetaKey(e.target.value);
    },
    placeholder: t('KEY', 'key'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Key is required').replace('_attribute_', t('KEY', 'Key'))
    })
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "meta_value"
  }, selectedMetaKey === 'text' && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "value",
    id: "meta_value"
    // value={metaValue}
    ,
    onChange: function onChange(e) {
      return setMetaValue(e.target.value);
    },
    placeholder: t('VALUE', 'Vlue'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('VALUE', 'Vlue'))
    })
  }), selectedMetaKey === 'integer' && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "value"
    // value={metaValue}
    ,
    onChange: function onChange(e) {
      return setMetaValue(e.target.value);
    },
    placeholder: t('VALUE', 'Vlue'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('VALUE', 'Vlue')),
      pattern: {
        value: /^\d+$/,
        message: t('VALIDATION_ERROR_INTEGER', 'Invalid integer').replace('_attribute_', t('VALUE', 'Vlue'))
      }
    })
  }), selectedMetaKey === 'decimal' && /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "value"
    // value={metaValue}
    ,
    onChange: function onChange(e) {
      return setMetaValue(e.target.value);
    },
    placeholder: t('VALUE', 'Vlue'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', t('VALUE', 'Vlue')),
      pattern: {
        value: /^[+-]?\d*\.?\d+(?:[Ee][+-]?\d+)?$/,
        message: t('VALIDATION_ERROR_DECIMAL', 'Invalid decimal').replace('_attribute_', t('VALUE', 'Vlue'))
      }
    })
  }), selectedMetaKey === 'boolean' && /*#__PURE__*/_react.default.createElement(_DashboardSelect.Select, {
    className: "select-input",
    defaultValue: selectedBoolean || '1',
    options: booleanOptions,
    onChange: function onChange(val) {
      return setSelectedBoolean(val);
    }
  }), selectedMetaKey === 'json' && /*#__PURE__*/_react.default.createElement("div", {
    className: "json_editor"
  }, /*#__PURE__*/_react.default.createElement(_jsoneditorReact.JsonEditor, {
    value: json,
    onChange: function onChange(v) {
      return handleChangeJson(v);
    }
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_BsPlusSquare.default, null))))), actionState.loading && /*#__PURE__*/_react.default.createElement(_styles.WrapperSpinnerLoader, null, /*#__PURE__*/_react.default.createElement(_Shared.SpinnerLoader, null))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ERROR'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
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
var OrderMetaFields = function OrderMetaFields(props) {
  var MetaFieldsProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: MetaFieldsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MetaFields, MetaFieldsProps);
};
exports.OrderMetaFields = OrderMetaFields;