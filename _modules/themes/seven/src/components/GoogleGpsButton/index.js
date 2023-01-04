"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleGpsButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var GoogleGpsButtonUI = function GoogleGpsButtonUI(props) {
  var handleGPS = props.handleGPS,
    isGoogleButton = props.isGoogleButton,
    googleReady = props.googleReady,
    isLoading = props.isLoading,
    IconButton = props.IconButton,
    IconLoadingButton = props.IconLoadingButton;
  (0, _react.useEffect)(function () {
    handleGPS();
  }, [googleReady]);
  return /*#__PURE__*/_react.default.createElement(_styles.GpsButtonStyle, {
    className: props.className || '',
    type: "button",
    disabled: isGoogleButton && !googleReady || isLoading,
    onClick: handleGPS
  }, isLoading ? IconLoadingButton ? /*#__PURE__*/_react.default.createElement(IconLoadingButton, null) : '...' : IconButton ? /*#__PURE__*/_react.default.createElement(IconButton, null) : 'GPS');
};
var GoogleGpsButton = function GoogleGpsButton(props) {
  var gpsButtonProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: GoogleGpsButtonUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleGpsButton, gpsButtonProps);
};
exports.GoogleGpsButton = GoogleGpsButton;