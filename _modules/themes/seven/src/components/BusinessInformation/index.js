"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInformationUI = exports.BusinessInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../../../../utils");
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _BusinessReviews = require("../../../../../components/BusinessReviews");
var _Modal = require("../../../../../components/Modal");
var _styles = require("./styles");
var _Tabs = require("../../styles/Tabs");
var _GrDeliver = _interopRequireDefault(require("@meronex/icons/gr/GrDeliver"));
var _FaStar = _interopRequireDefault(require("@meronex/icons/fa/FaStar"));
var _FiClock = _interopRequireDefault(require("@meronex/icons/fi/FiClock"));
var _GrLocation = _interopRequireDefault(require("@meronex/icons/gr/GrLocation"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _AutoScroll = require("../../../../../components/AutoScroll");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessInformationUI = exports.BusinessInformationUI = function BusinessInformationUI(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images2, _theme$images3, _business$reviews, _orderState$options, _business$reviews2, _business$offers, _configs$google_maps_, _business$reviews3, _business$reviews4, _business$reviews5, _business$offers2, _props$afterComponent, _props$afterElements;
  var business = props.business,
    getBusinessType = props.getBusinessType,
    optimizeImage = props.optimizeImage,
    businessLocation = props.businessLocation,
    businessSchedule = props.businessSchedule,
    businessPhotos = props.businessPhotos,
    businessVideos = props.businessVideos,
    onClose = props.onClose;
  var theme = (0, _styledComponents.useTheme)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)('General Info'),
    _useState2 = _slicedToArray(_useState, 2),
    tabValue = _useState2[0],
    setTabValue = _useState2[1];
  var daysOfWeek = [t('SUNDAY_ABBREVIATION', 'Sun'), t('MONDAY_ABBREVIATION', 'Mon'), t('TUESDAY_ABBREVIATION', 'Tues'), t('WEDNESDAY_ABBREVIATION', 'Wed'), t('THURSDAY_ABBREVIATION', 'Thur'), t('FRIDAY_ABBREVIATION', 'Fri'), t('SATURDAY_ABBREVIATION', 'Sat')];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDistance = _useUtils2$.parseDistance;
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalImage = _useState4[0],
    setModalImage = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    image = _useState6[0],
    setImage = _useState6[1];
  var scheduleFormatted = function scheduleFormatted(_ref) {
    var hour = _ref.hour,
      minute = _ref.minute;
    var checkTime = function checkTime(val) {
      return val < 10 ? "0".concat(val) : val;
    };
    return "".concat(checkTime(hour), ":").concat(checkTime(minute));
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
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, null, /*#__PURE__*/_react.default.createElement("img", {
    src: business.header,
    alt: "business-image",
    width: "444px",
    height: "250px",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessBasicContent, null, ((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage ? optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo), 'h_200,c_limit') : (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.dummies) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.businessLogo)
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "bold"
  }, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_FaStar.default, {
    className: "start"
  }), business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total)), getBusinessType && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, getBusinessType())), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)) : /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_FiClock.default, null), (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time))), /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_GrLocation.default, null), parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0)), /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement(_GrDeliver.default, null), business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0))))))), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, business.reviews && /*#__PURE__*/_react.default.createElement(_styles.FlexTabs, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return setTabValue('General Info');
    },
    active: tabValue === 'General Info'
  }, t('GENERAL_INFO', 'General Info')), ((_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.reviews) && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return setTabValue('Reviews');
    },
    active: tabValue === 'Reviews'
  }, t('REVIEWS', 'Reviews')), (business === null || business === void 0 || (_business$offers = business.offers) === null || _business$offers === void 0 ? void 0 : _business$offers.length) > 0 && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return setTabValue('Offers');
    },
    active: tabValue === 'Offers'
  }, t('OFFERS', 'Offers')))), tabValue === 'General Info' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, business.about && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_ABOUT', 'Business short description')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, business.about)), business.description && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_DESCRIPTION', 'Business description')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, business.description)), businessLocation.location && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_LOCATION', 'Business location')), businessLocation.location && /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    location: businessLocation.location,
    mapControls: businessLocation.googleMapsControls || business.googleMapsControls
  }))), (businessSchedule === null || businessSchedule === void 0 ? void 0 : businessSchedule.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_OPENING_TIME', 'Business Opening Time')), /*#__PURE__*/_react.default.createElement(_styles.ScheduleSection, null, /*#__PURE__*/_react.default.createElement(_styles.ScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    modal: true
  }, businessSchedule.map(function (schedule, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ScheduleBlock, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("h4", null, daysOfWeek[i]), schedule.enabled ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, scheduleFormatted(schedule.lapses[0].open)), /*#__PURE__*/_react.default.createElement("p", null, scheduleFormatted(schedule.lapses[0].close))) : /*#__PURE__*/_react.default.createElement("p", {
      style: {
        fontWeight: 500
      }
    }, t('CLOSED_TODAY', 'Closed Today')));
  }))))), /*#__PURE__*/_react.default.createElement(_styles.DeliveryInfo, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h5", null, t('DELIVERY_TIME', 'Delivery Time'), ": ", (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)), /*#__PURE__*/_react.default.createElement("h5", null, t('PICKUP_TIME', 'Pickup Time'), ": ", (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time))))), (businessPhotos === null || businessPhotos === void 0 ? void 0 : businessPhotos.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessMediaContent, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_PHOTO_GALLERY', 'Business Photo Gallery')), /*#__PURE__*/_react.default.createElement("div", null, businessPhotos.map(function (photo, i) {
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
  }))), (businessVideos === null || businessVideos === void 0 ? void 0 : businessVideos.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessMediaContent, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('BUSINESS_VIDEOS', 'Business Videos')), /*#__PURE__*/_react.default.createElement("div", null, businessVideos.map(function (video, i) {
    return /*#__PURE__*/_react.default.createElement("iframe", {
      key: i,
      src: (0, _utils.formatUrlVideo)(video.video),
      width: "191",
      height: "128",
      frameBorder: "0",
      allow: "autoplay; encrypted-media",
      allowFullScreen: true
    });
  })))), tabValue === 'Reviews' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_business$reviews3 = business.reviews) === null || _business$reviews3 === void 0 ? void 0 : _business$reviews3.reviews) && /*#__PURE__*/_react.default.createElement(_BusinessReviews.BusinessReviews, {
    businessId: business.id,
    reviews: (_business$reviews4 = business.reviews) === null || _business$reviews4 === void 0 ? void 0 : _business$reviews4.reviews,
    businessName: business.name,
    stars: (_business$reviews5 = business.reviews) === null || _business$reviews5 === void 0 ? void 0 : _business$reviews5.total
  })), tabValue === 'Offers' && /*#__PURE__*/_react.default.createElement(_styles.OffersSection, null, /*#__PURE__*/_react.default.createElement(_styles.OfferText, null, /*#__PURE__*/_react.default.createElement(_styles.OfferTextP, null, t('DISCOUNTS_OF', 'Discounts of'), " ", business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement(_styles.OfferTextP, null, business === null || business === void 0 ? void 0 : business.address)), /*#__PURE__*/_react.default.createElement(_styles.OfferTable, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('OFFERT_NAME', 'Offer Name')), /*#__PURE__*/_react.default.createElement("th", null, t('OFFERT_PRICE', 'Offer Price')), /*#__PURE__*/_react.default.createElement("th", null, t('OFFERT_START_DATE', 'Start Date')), /*#__PURE__*/_react.default.createElement("th", null, t('OFFERT_END_DATE', 'End Date')))), /*#__PURE__*/_react.default.createElement("tbody", null, business === null || business === void 0 || (_business$offers2 = business.offers) === null || _business$offers2 === void 0 ? void 0 : _business$offers2.map(function (offer) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, offer.name), /*#__PURE__*/_react.default.createElement("td", null, offer.rate_type === 1 ? "".concat(offer.rate, " % ").concat(t('MIN', 'Min'), ": ").concat(parsePrice(offer.minimum)) : "".concat(parsePrice(offer.rate), " ").concat(t('MIN', 'Min'), ": ").concat(parsePrice(offer.minimum))), /*#__PURE__*/_react.default.createElement("td", null, offer.start), /*#__PURE__*/_react.default.createElement("td", null, offer.end));
  })))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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