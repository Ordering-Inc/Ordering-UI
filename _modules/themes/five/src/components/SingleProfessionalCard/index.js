"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (professional === null || professional === void 0 ? void 0 : (_professional$occupat = professional.occupation) === null || _professional$occupat === void 0 ? void 0 : _professional$occupat.name) && /*#__PURE__*/_react.default.createElement("p", null, professional === null || professional === void 0 ? void 0 : (_professional$occupat2 = professional.occupation) === null || _professional$occupat2 === void 0 ? void 0 : _professional$occupat2.name)), /*#__PURE__*/_react.default.createElement(_styles.ActionWrapper, {
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
var SingleProfessionalCard = function SingleProfessionalCard(props) {
  var singleProfessionalCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleProfessionalCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SingleProfessionalCard, singleProfessionalCardProps);
};
exports.SingleProfessionalCard = SingleProfessionalCard;