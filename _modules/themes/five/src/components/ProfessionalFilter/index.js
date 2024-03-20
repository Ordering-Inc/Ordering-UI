"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalFilter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Modal = require("../Modal");
var _ProfessionalProfile = require("../ProfessionalProfile");
var _AutoScroll = require("../AutoScroll");
var _ProfessionalInfo = require("../ProfessionalInfo");
var _SingleProfessionalCard = require("../SingleProfessionalCard");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProfessionalFilter = exports.ProfessionalFilter = function ProfessionalFilter(props) {
  var professionals = props.professionals,
    professionalSelected = props.professionalSelected,
    handleChangeProfessionalSelected = props.handleChangeProfessionalSelected,
    handleUpdateProfessionals = props.handleUpdateProfessionals;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    reviewOpen = _useState4[0],
    setReviewOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    currentProfessional = _useState6[0],
    setCurrentProfessional = _useState6[1];
  var handleOpenProfile = function handleOpenProfile(e, professional) {
    if (e.target.closest('.info') || e.target.closest('.favorite')) return;
    setCurrentProfessional(professional);
    setOpen(true);
  };
  var handleCloseProfile = function handleCloseProfile() {
    setCurrentProfessional(null);
    setOpen(false);
    setReviewOpen(false);
  };
  var onUpdateProfessionals = function onUpdateProfessionals(id, changes) {
    var updatedProfessional = professionals.find(function (professional) {
      return professional.id === id;
    });
    handleUpdateProfessionals(_objectSpread(_objectSpread({}, updatedProfessional), changes));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PROFESSIONALS', 'Professionals')), /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProfessionalListing, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "professionalId"
  }, /*#__PURE__*/_react.default.createElement(_styles.ProfessionalItem, {
    active: !professionalSelected,
    onClick: function onClick() {
      return handleChangeProfessionalSelected(null);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('ANY_PROFESSIONAL_MEMBER', 'Any professional member'))), professionals.map(function (professional) {
    return /*#__PURE__*/_react.default.createElement(_SingleProfessionalCard.SingleProfessionalCard, {
      isSmallPhoto: true,
      handleProfessionalClick: handleOpenProfile,
      active: (professional === null || professional === void 0 ? void 0 : professional.id) === (professionalSelected === null || professionalSelected === void 0 ? void 0 : professionalSelected.id),
      key: professional.id,
      professional: professional,
      handleUpdateProfessionals: onUpdateProfessionals
    });
  }))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: open,
    width: "760px",
    padding: "0",
    onClose: function onClose() {
      return handleCloseProfile();
    }
  }, /*#__PURE__*/_react.default.createElement(_ProfessionalProfile.ProfessionalProfile, {
    currentProfessional: currentProfessional,
    onClose: handleCloseProfile,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: reviewOpen,
    width: "760px",
    padding: "0",
    onClose: function onClose() {
      return handleCloseProfile();
    }
  }, /*#__PURE__*/_react.default.createElement(_ProfessionalInfo.ProfessionalInfo, {
    userId: currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.id
  })));
};