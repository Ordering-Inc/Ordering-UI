"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInformationUI = exports.BusinessInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../../../../utils");
var _orderingComponents = require("ordering-components");
var _Modal = require("../Modal");
var _styles = require("./styles");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _ScheduleAccordion = require("../ScheduleAccordion");
var _styledComponents = require("styled-components");
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessInformationUI = exports.BusinessInformationUI = function BusinessInformationUI(props) {
  var _theme$business_view, _theme$business_view2, _theme$business_view3, _theme$business_view4, _theme$business_view5, _theme$business_view6, _theme$business_view7, _theme$business_view8, _theme$business_view9, _configs$general_hour, _props$beforeElements, _props$beforeComponen, _configs$google_maps_, _props$afterComponent, _props$afterElements;
  var business = props.business,
    businessLocation = props.businessLocation,
    businessSchedule = props.businessSchedule,
    businessPhotos = props.businessPhotos,
    businessVideos = props.businessVideos,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalImage = _useState2[0],
    setModalImage = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    image = _useState4[0],
    setImage = _useState4[1];
  var theme = (0, _styledComponents.useTheme)();
  var hideLocation = theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.information) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.location) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.hidden;
  var hideSchedule = theme === null || theme === void 0 || (_theme$business_view2 = theme.business_view) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.information) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.schedule) === null || _theme$business_view2 === void 0 ? void 0 : _theme$business_view2.hidden;
  var hideDescription = theme === null || theme === void 0 || (_theme$business_view3 = theme.business_view) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.information) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.description) === null || _theme$business_view3 === void 0 ? void 0 : _theme$business_view3.hidden;
  var hideAbout = theme === null || theme === void 0 || (_theme$business_view4 = theme.business_view) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.information) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.about) === null || _theme$business_view4 === void 0 ? void 0 : _theme$business_view4.hidden;
  var hideVideos = theme === null || theme === void 0 || (_theme$business_view5 = theme.business_view) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.information) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.videos) === null || _theme$business_view5 === void 0 ? void 0 : _theme$business_view5.hidden;
  var hideDeliveryTime = theme === null || theme === void 0 || (_theme$business_view6 = theme.business_view) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.components) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.information) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.components) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.delivery_time) === null || _theme$business_view6 === void 0 ? void 0 : _theme$business_view6.hidden;
  var hidePickupTime = theme === null || theme === void 0 || (_theme$business_view7 = theme.business_view) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.components) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.information) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.components) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.pickup_time) === null || _theme$business_view7 === void 0 ? void 0 : _theme$business_view7.hidden;
  var hideImages = theme === null || theme === void 0 || (_theme$business_view8 = theme.business_view) === null || _theme$business_view8 === void 0 || (_theme$business_view8 = _theme$business_view8.components) === null || _theme$business_view8 === void 0 || (_theme$business_view8 = _theme$business_view8.information) === null || _theme$business_view8 === void 0 || (_theme$business_view8 = _theme$business_view8.components) === null || _theme$business_view8 === void 0 || (_theme$business_view8 = _theme$business_view8.images) === null || _theme$business_view8 === void 0 ? void 0 : _theme$business_view8.hidden;
  var hideAddress = theme === null || theme === void 0 || (_theme$business_view9 = theme.business_view) === null || _theme$business_view9 === void 0 || (_theme$business_view9 = _theme$business_view9.components) === null || _theme$business_view9 === void 0 || (_theme$business_view9 = _theme$business_view9.information) === null || _theme$business_view9 === void 0 || (_theme$business_view9 = _theme$business_view9.components) === null || _theme$business_view9 === void 0 || (_theme$business_view9 = _theme$business_view9.address) === null || _theme$business_view9 === void 0 ? void 0 : _theme$business_view9.hidden;
  var formatTime = configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.value;
  var fillStyle = {
    fillColor: theme.colors.primary,
    strokeColor: theme.colors.darkPrimaryColor,
    fillOpacity: 0.2,
    strokeWeight: 2,
    editable: false
  };
  var checkTime = function checkTime(val) {
    return val < 10 ? "0".concat(val) : val;
  };
  var timeFormated = function timeFormated(time) {
    return (0, _moment.default)("1900-01-01 ".concat(checkTime(time.hour), ":").concat(checkTime(time.minute))).format(formatTime);
  };
  var handleModalImage = function handleModalImage(src) {
    setImage(src);
    setModalImage(true);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformationContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onClose(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessTitle, null, business === null || business === void 0 ? void 0 : business.name), !hideAbout && business.about && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_ABOUT', 'Business short description')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, business.about)), !hideDescription && business.description && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_DESCRIPTION', 'Business description')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, business.description)), !hideLocation && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessLocation.location && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_LOCATION', 'Business location')), businessLocation.location && /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    location: businessLocation.location,
    mapControls: businessLocation.googleMapsControls || business.googleMapsControls,
    businessZones: business === null || business === void 0 ? void 0 : business.zones,
    fillStyle: fillStyle
  }))), !hideAddress && (business === null || business === void 0 ? void 0 : business.address) && /*#__PURE__*/_react.default.createElement(_styles.BusinessAddress, null, business === null || business === void 0 ? void 0 : business.address), (business === null || business === void 0 ? void 0 : business.address_notes) && /*#__PURE__*/_react.default.createElement(_styles.BusinessAddressNotes, null, business === null || business === void 0 ? void 0 : business.address_notes), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), (businessSchedule === null || businessSchedule === void 0 ? void 0 : businessSchedule.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hideSchedule && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('OPENING_TIME', 'Opening time')), /*#__PURE__*/_react.default.createElement(_styles.ScheduleSection, null, /*#__PURE__*/_react.default.createElement(_styles.ScheduleContainer, null, businessSchedule.map(function (schedule, i) {
    return /*#__PURE__*/_react.default.createElement(_ScheduleAccordion.ScheduleAccordion, {
      key: i,
      weekIndex: i,
      timeFormated: timeFormated,
      schedule: schedule
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), /*#__PURE__*/_react.default.createElement(_styles.DeliveryInfo, null, /*#__PURE__*/_react.default.createElement("div", null, !hideDeliveryTime && /*#__PURE__*/_react.default.createElement("h5", null, t('DELIVERY_TIME', 'Delivery Time'), ": ", (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)), !hidePickupTime && /*#__PURE__*/_react.default.createElement("h5", null, t('PICKUP_TIME', 'Pickup Time'), ": ", (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time)))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), !hideVideos && (businessVideos === null || businessVideos === void 0 ? void 0 : businessVideos.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessMediaContent, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('VIDEOS', 'Videos')), /*#__PURE__*/_react.default.createElement("div", null, businessVideos.map(function (video, i) {
    return /*#__PURE__*/_react.default.createElement("iframe", {
      key: i,
      src: (0, _utils.formatUrlVideo)(video.video),
      width: "191",
      height: "128",
      frameBorder: "0",
      allow: "autoplay; encrypted-media",
      allowFullScreen: true
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), !hideImages && (businessPhotos === null || businessPhotos === void 0 ? void 0 : businessPhotos.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessMediaContent, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('IMAGES', 'Images')), /*#__PURE__*/_react.default.createElement("div", null, businessPhotos.map(function (photo, i) {
    return /*#__PURE__*/_react.default.createElement("img", {
      key: i,
      src: photo.file,
      alt: "photo-".concat(i),
      width: "191",
      height: "128",
      onClick: function onClick() {
        return handleModalImage(photo.file);
      },
      loading: "lazy"
    });
  })))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    onClose: function onClose() {
      return setModalImage(false);
    },
    open: modalImage,
    padding: "0",
    hideCloseDefault: true,
    isTransparent: true,
    height: "auto"
  }, /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return setModalImage(false);
    }
  })), /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    width: "320px",
    height: "180px",
    loading: "lazy"
  })))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var BusinessInformation = exports.BusinessInformation = function BusinessInformation(props) {
  var googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  };
  var BusinessInformationProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessInformationUI,
    googleMapsControls: googleMapsControls
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessInformation, BusinessInformationProps);
};