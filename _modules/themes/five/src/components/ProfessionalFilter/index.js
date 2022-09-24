"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("./styles");

var _Modal = require("../Modal");

var _ProfessionalProfile = require("../ProfessionalProfile");

var _AutoScroll = require("../AutoScroll");

var _ProfessionalInfo = require("../ProfessionalInfo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProfessionalFilter = function ProfessionalFilter(props) {
  var professionals = props.professionals,
      professionalSelected = props.professionalSelected,
      handleChangeProfessionalSelected = props.handleChangeProfessionalSelected;

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
    if (e.target.closest('.info')) return;
    setCurrentProfessional(professional);
    setOpen(true);
  };

  var handleOpenReview = function handleOpenReview(professional) {
    setReviewOpen(true);
    setCurrentProfessional(professional);
  };

  var handleCloseProfile = function handleCloseProfile() {
    setCurrentProfessional(null);
    setOpen(false);
    setReviewOpen(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PROFESSIONALS', 'Professionals')), /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProfessionalListing, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "professionalId"
  }, /*#__PURE__*/_react.default.createElement(_styles.ProfessionalItem, {
    active: !professionalSelected,
    onClick: function onClick() {
      return handleChangeProfessionalSelected(null);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('ANY_PROFESSIONAL_MEMBER', 'Any professional member'))), professionals.map(function (professional, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ProfessionalItem, {
      key: i,
      active: (professional === null || professional === void 0 ? void 0 : professional.id) === (professionalSelected === null || professionalSelected === void 0 ? void 0 : professionalSelected.id),
      onClick: function onClick(e) {
        return handleOpenProfile(e, professional);
      }
    }, professional !== null && professional !== void 0 && professional.photo ? /*#__PURE__*/_react.default.createElement(_styles.ProfessionalPhoto, {
      bgimage: professional === null || professional === void 0 ? void 0 : professional.photo
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null), /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "name"
    }, professional === null || professional === void 0 ? void 0 : professional.name, " ", professional === null || professional === void 0 ? void 0 : professional.lastname), /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, {
      className: "info",
      onClick: function onClick() {
        return handleOpenReview(professional);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles.HeartIconWrapper, null, professional !== null && professional !== void 0 && professional.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null)))));
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

exports.ProfessionalFilter = ProfessionalFilter;