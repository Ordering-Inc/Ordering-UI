"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalProfile = void 0;
var _react = _interopRequireDefault(require("react"));
var _BusinessPreorder = require("../BusinessPreorder");
var _orderingComponents = require("ordering-components");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProfessionalProfile = function ProfessionalProfile(props) {
  var currentProfessional = props.currentProfessional,
    handleChangeProfessionalSelected = props.handleChangeProfessionalSelected,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var handleSelectProfessional = function handleSelectProfessional() {
    handleChangeProfessionalSelected(currentProfessional);
    onClose && onClose();
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, null, currentProfessional !== null && currentProfessional !== void 0 && currentProfessional.photo ? /*#__PURE__*/_react.default.createElement(_styles.ProfessionalPhoto, {
    bgimage: optimizeImage(currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.photo, 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.NameWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.name, " ", currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.lastname)), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.ScheduleWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SCHEDULE', 'Schedule')), currentProfessional !== null && currentProfessional !== void 0 && currentProfessional.schedule ? /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: currentProfessional,
    isProfessional: true,
    isDisabled: true,
    maxDays: 50,
    useOrderContext: false
  }) : /*#__PURE__*/_react.default.createElement("p", null, t('NO_SCHEDULE', 'No schedule'))), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return handleSelectProfessional();
    },
    color: "primary"
  }, t('BOOK', 'Book'))));
};
exports.ProfessionalProfile = ProfessionalProfile;