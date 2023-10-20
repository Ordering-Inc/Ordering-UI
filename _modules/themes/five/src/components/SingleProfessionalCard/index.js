"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleProfessionalCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _ProfessionalInfo = require("../ProfessionalInfo");
var _Modal = require("../Modal");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleProfessionalCardUI = function SingleProfessionalCardUI(props) {
  var _professional$occupat, _professional$occupat2;
  var professional = props.professional,
    isSkeleton = props.isSkeleton,
    handleFavoriteProfessional = props.handleFavoriteProfessional,
    isSmallPhoto = props.isSmallPhoto,
    active = props.active,
    handleProfessionalClick = props.handleProfessionalClick;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var handleChangeFavorite = function handleChangeFavorite() {
    if (auth) {
      handleFavoriteProfessional && handleFavoriteProfessional(!(professional !== null && professional !== void 0 && professional.favorite));
    }
  };
  var handleOpenProfileInfo = function handleOpenProfileInfo() {
    setOpen(true);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, {
    active: active,
    isCursor: !!handleProfessionalClick,
    onClick: function onClick(e) {
      return handleProfessionalClick && handleProfessionalClick(e, professional);
    }
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    style: {
      width: '86px',
      height: '86px'
    }
  }) : professional !== null && professional !== void 0 && professional.photo ? /*#__PURE__*/_react.default.createElement(_styles.UserPhoto, {
    bgimage: professional === null || professional === void 0 ? void 0 : professional.photo,
    isSmallPhoto: isSmallPhoto
  }) : /*#__PURE__*/_react.default.createElement(_styles.UserDummyAvatarWrapper, {
    isSmallPhoto: isSmallPhoto
  }, /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoWrapper, null, /*#__PURE__*/_react.default.createElement("h4", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 18,
    width: 120
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, professional === null || professional === void 0 ? void 0 : professional.name, " ", professional === null || professional === void 0 ? void 0 : professional.last_name)), isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 80
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (professional === null || professional === void 0 || (_professional$occupat = professional.occupation) === null || _professional$occupat === void 0 ? void 0 : _professional$occupat.name) && /*#__PURE__*/_react.default.createElement("p", null, professional === null || professional === void 0 || (_professional$occupat2 = professional.occupation) === null || _professional$occupat2 === void 0 ? void 0 : _professional$occupat2.name)), /*#__PURE__*/_react.default.createElement(_styles.ActionWrapper, {
    isSmallPhoto: isSmallPhoto
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 16,
    height: 16
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 16,
    height: 16,
    style: {
      margin: '0px 7px'
    }
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, {
    className: "info",
    onClick: function onClick() {
      return handleOpenProfileInfo();
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return handleChangeFavorite();
    },
    className: "favorite"
  }, professional !== null && professional !== void 0 && professional.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null)))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: open,
    width: "760px",
    padding: "0",
    onClose: function onClose() {
      return setOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ProfessionalInfo.ProfessionalInfo, {
    userId: professional === null || professional === void 0 ? void 0 : professional.id
  })));
};
var SingleProfessionalCard = exports.SingleProfessionalCard = function SingleProfessionalCard(props) {
  var singleProfessionalCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleProfessionalCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SingleProfessionalCard, singleProfessionalCardProps);
};