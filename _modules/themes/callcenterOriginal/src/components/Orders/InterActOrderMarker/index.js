"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterActOrderMarker = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InterActOrderMarker = exports.InterActOrderMarker = function InterActOrderMarker(props) {
  var _driver$drivergroups, _theme$images;
  var image = props.image,
    customer = props.customer,
    business = props.business,
    driver = props.driver;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    infoShow = _useState2[0],
    setInfoShow = _useState2[1];
  var infoRef = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)('0px'),
    _useState4 = _slicedToArray(_useState3, 2),
    infoTop = _useState4[0],
    setInfoTop = _useState4[1];
  (0, _react.useEffect)(function () {
    if (!infoShow) return;
    setInfoTop("-".concat(infoRef.current.scrollHeight + 55, "px"));
  }, [infoShow]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, infoShow && /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, {
    ref: infoRef,
    style: {
      transform: "translate(-50%, ".concat(infoTop, ")")
    }
  }, business && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('NAME', 'Name'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Text, null, business.name)), (business === null || business === void 0 ? void 0 : business.email) && /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('EMAIL', 'Email'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Text, null, business.email)), (business === null || business === void 0 ? void 0 : business.phone) && /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('PHONE', 'Phone'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Text, null, business.phone))), customer && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('NAME', 'Name'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Text, null, customer.name, " ", customer.lastname)), (customer === null || customer === void 0 ? void 0 : customer.order_id) && /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('INVOICE_ORDER_NO', 'Order No')), /*#__PURE__*/_react.default.createElement(_styles.Text, null, customer.order_id)), (customer === null || customer === void 0 ? void 0 : customer.email) && /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('EMAIL', 'Email'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Text, null, customer.email)), (customer === null || customer === void 0 ? void 0 : customer.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('CELLPHONE', 'Cellphone'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Text, null, customer.cellphone))), driver && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('NAME', 'Name'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Text, null, driver.name, " ", driver.lastname)), (driver === null || driver === void 0 ? void 0 : driver.email) && /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('EMAIL', 'Email'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Text, null, driver.email)), (driver === null || driver === void 0 ? void 0 : driver.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('CELLPHONE', 'Cellphone'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Text, null, driver.cellphone)), (driver === null || driver === void 0 || (_driver$drivergroups = driver.drivergroups) === null || _driver$drivergroups === void 0 ? void 0 : _driver$drivergroups.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('DRIVER_GROUP', 'Driver group'), ":"), driver.drivergroups.map(function (group) {
    return /*#__PURE__*/_react.default.createElement(_styles.Text, {
      key: group.id
    }, group.name, ",");
  })), (driver === null || driver === void 0 ? void 0 : driver.last_location_at) && /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Text, {
    fontWeight: "bold"
  }, t('LAST_LOCATION', 'Last location'), ":"), /*#__PURE__*/_react.default.createElement(_styles.Text, null, parseDate(driver.last_location_at, {
    utc: false
  }))))), /*#__PURE__*/_react.default.createElement(_styles.WrapperMapMarker, {
    onMouseOver: function onMouseOver() {
      return setInfoShow(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setInfoShow(false);
    }
  }, image ? /*#__PURE__*/_react.default.createElement(_styles.MapMarkerImg, {
    bgimage: image
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, customer && /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null), driver && /*#__PURE__*/_react.default.createElement(_styles.MapMarkerImg, {
    bgimage: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.noDriver
  }))));
};