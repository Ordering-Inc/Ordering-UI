"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EventComponent = function EventComponent(props) {
  var _event$professional, _event$professional2, _event$professional3, _event$professional4;
  var event = props.event;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    parseDate = _useUtils2$.parseDate;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var getTime = function getTime(time) {
    var _configs$format_time;
    return parseDate(time, {
      outputFormat: (configs === null || configs === void 0 || (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12' ? 'hh:mm a' : 'HH:mm'
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles.EventContainer, null, /*#__PURE__*/_react.default.createElement(_styles.EventProfessionalPhoto, null, event !== null && event !== void 0 && (_event$professional = event.professional) !== null && _event$professional !== void 0 && _event$professional.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(event === null || event === void 0 || (_event$professional2 = event.professional) === null || _event$professional2 === void 0 ? void 0 : _event$professional2.photo, 'h_40,c_limit'),
    alt: ""
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, event === null || event === void 0 || (_event$professional3 = event.professional) === null || _event$professional3 === void 0 ? void 0 : _event$professional3.name, " ", event === null || event === void 0 || (_event$professional4 = event.professional) === null || _event$professional4 === void 0 ? void 0 : _event$professional4.lastname), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, getTime(event.start), " - ", getTime(event.end))));
};
exports.EventComponent = EventComponent;