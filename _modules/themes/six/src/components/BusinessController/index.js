"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessController = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _Confirm = require("../../../../../components/Confirm");
var _BsExclamationCircle = _interopRequireDefault(require("@meronex/icons/bs/BsExclamationCircle"));
var _utils = require("../../../../../utils");
var _styles = require("./styles");
var _GrClock = _interopRequireDefault(require("@meronex/icons/gr/GrClock"));
var _GrDeliver = _interopRequireDefault(require("@meronex/icons/gr/GrDeliver"));
var _GrLocation = _interopRequireDefault(require("@meronex/icons/gr/GrLocation"));
var _GrStar = _interopRequireDefault(require("@meronex/icons/gr/GrStar"));
var _BiCar = _interopRequireDefault(require("@meronex/icons/bi/BiCar"));
var _BiBasket = _interopRequireDefault(require("@meronex/icons/bi/BiBasket"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _five = require("../../../../five");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// import BusinessInformation from '../BusinessInformation'

var BusinessControllerUI = function BusinessControllerUI(props) {
  var _theme$business_listi, _theme$business_listi2, _theme$business_listi3, _theme$business_listi4, _theme$business_listi5, _theme$business_listi6, _theme$business_listi7, _theme$business_listi8, _theme$business_listi9, _theme$business_listi10, _theme$business_listi11, _theme$business_listi12, _theme$business_listi13, _theme$business_listi14, _theme$business_listi15, _theme$business_listi16, _theme$business_listi17, _theme$business_listi18, _theme$business_listi19, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$dummies, _theme$images2, _theme$images2$dummie, _business$reviews, _business$reviews2, _business$reviews3, _orderState$options, _business$available_d, _business$busy_driver, _business$active_orde, _business$reviews4, _business$reviews5, _business$reviews6, _props$afterComponent, _props$afterElements;
  var isSkeleton = props.isSkeleton,
    business = props.business,
    orderState = props.orderState,
    handleClick = props.handleClick,
    orderType = props.orderType,
    isCustomLayout = props.isCustomLayout,
    isShowCallcenterInformation = props.isShowCallcenterInformation,
    handleShowBusinessInfo = props.handleShowBusinessInfo,
    handleFavoriteBusiness = props.handleFavoriteBusiness;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDistance = _useUtils2$.parseDistance,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var favoriteRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var layout = (theme === null || theme === void 0 ? void 0 : (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 ? void 0 : (_theme$business_listi2 = _theme$business_listi.components) === null || _theme$business_listi2 === void 0 ? void 0 : (_theme$business_listi3 = _theme$business_listi2.layout) === null || _theme$business_listi3 === void 0 ? void 0 : _theme$business_listi3.type) || 'starbucks';
  var hideCategories = theme === null || theme === void 0 ? void 0 : (_theme$business_listi4 = theme.business_listing_view) === null || _theme$business_listi4 === void 0 ? void 0 : (_theme$business_listi5 = _theme$business_listi4.components) === null || _theme$business_listi5 === void 0 ? void 0 : (_theme$business_listi6 = _theme$business_listi5.business) === null || _theme$business_listi6 === void 0 ? void 0 : (_theme$business_listi7 = _theme$business_listi6.components) === null || _theme$business_listi7 === void 0 ? void 0 : (_theme$business_listi8 = _theme$business_listi7.categories) === null || _theme$business_listi8 === void 0 ? void 0 : _theme$business_listi8.hidden;
  var hideAddress = (_theme$business_listi9 = theme === null || theme === void 0 ? void 0 : (_theme$business_listi10 = theme.business_listing_view) === null || _theme$business_listi10 === void 0 ? void 0 : (_theme$business_listi11 = _theme$business_listi10.components) === null || _theme$business_listi11 === void 0 ? void 0 : (_theme$business_listi12 = _theme$business_listi11.business) === null || _theme$business_listi12 === void 0 ? void 0 : (_theme$business_listi13 = _theme$business_listi12.components) === null || _theme$business_listi13 === void 0 ? void 0 : (_theme$business_listi14 = _theme$business_listi13.address) === null || _theme$business_listi14 === void 0 ? void 0 : _theme$business_listi14.hidden) !== null && _theme$business_listi9 !== void 0 ? _theme$business_listi9 : true;
  var hideBusinessFavorite = theme === null || theme === void 0 ? void 0 : (_theme$business_listi15 = theme.business_listing_view) === null || _theme$business_listi15 === void 0 ? void 0 : (_theme$business_listi16 = _theme$business_listi15.components) === null || _theme$business_listi16 === void 0 ? void 0 : (_theme$business_listi17 = _theme$business_listi16.business) === null || _theme$business_listi17 === void 0 ? void 0 : (_theme$business_listi18 = _theme$business_listi17.components) === null || _theme$business_listi18 === void 0 ? void 0 : (_theme$business_listi19 = _theme$business_listi18.favorite) === null || _theme$business_listi19 === void 0 ? void 0 : _theme$business_listi19.hidden;
  var types = ['food', 'alcohol', 'groceries', 'laundry'];
  var businessType = function businessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;
      return business[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 ? void 0 : (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };
  var handleShowAlert = function handleShowAlert() {
    setAlertState({
      open: true,
      content: [t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The Business is closed at the moment')]
    });
  };
  var handleChangeFavorite = function handleChangeFavorite() {
    if (auth) {
      handleFavoriteBusiness && handleFavoriteBusiness(!(business !== null && business !== void 0 && business.favorite));
    }
  };
  var scheduleFormatted = function scheduleFormatted(_ref) {
    var hour = _ref.hour,
      minute = _ref.minute;
    var checkTime = function checkTime(val) {
      return val < 10 ? "0".concat(val) : val;
    };
    return "".concat(checkTime(hour), ":").concat(checkTime(minute));
  };
  var getScheduleOpen = function getScheduleOpen(business) {
    var _business$today;
    var currentDate = (0, _dayjs.default)().tz(business === null || business === void 0 ? void 0 : business.timezone);
    var lapse = null;
    if (business !== null && business !== void 0 && (_business$today = business.today) !== null && _business$today !== void 0 && _business$today.enabled) {
      var _business$today2, _business$today2$laps;
      lapse = business === null || business === void 0 ? void 0 : (_business$today2 = business.today) === null || _business$today2 === void 0 ? void 0 : (_business$today2$laps = _business$today2.lapses) === null || _business$today2$laps === void 0 ? void 0 : _business$today2$laps.find(function (lapse) {
        var from = currentDate.hour(lapse.open.hour).minute(lapse.open.minute);
        var to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute);
        return currentDate.unix() >= from.unix() && currentDate.unix() <= to.unix();
      });
    }
    return lapse ? "".concat(scheduleFormatted(lapse.open), " - ").concat(scheduleFormatted(lapse.close)) : '';
  };
  var handleClickBusiness = function handleClickBusiness(e, business) {
    var _favoriteRef$current;
    if (favoriteRef !== null && favoriteRef !== void 0 && (_favoriteRef$current = favoriteRef.current) !== null && _favoriteRef$current !== void 0 && _favoriteRef$current.contains(e.target)) return;
    handleClick(business);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ContainerCard, {
    isSkeleton: isSkeleton
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessCard, {
    isSkeleton: isSkeleton,
    onClick: function onClick(e) {
      return !isSkeleton && handleClick && (!(business !== null && business !== void 0 && business.open) && isCustomLayout ? handleShowAlert() : handleClickBusiness(e, business));
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, {
    isSkeleton: isSkeleton
  }, !isSkeleton && (business !== null && business !== void 0 && business.logo || (_theme$images = theme.images) !== null && _theme$images !== void 0 && (_theme$images$dummies = _theme$images.dummies) !== null && _theme$images$dummies !== void 0 && _theme$images$dummies.businessLogo) ? /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo), 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 70,
    width: 70
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, null, /*#__PURE__*/_react.default.createElement(_styles.NameWrapper, null, business !== null && business !== void 0 && business.name ? /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, business === null || business === void 0 ? void 0 : business.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), layout === 'mapview' && /*#__PURE__*/_react.default.createElement(_styles.BusinessInfomation, null, (business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "reviews"
  }, /*#__PURE__*/_react.default.createElement(_GrStar.default, null), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total)) : (business === null || business === void 0 ? void 0 : (_business$reviews3 = business.reviews) === null || _business$reviews3 === void 0 ? void 0 : _business$reviews3.total) !== 0 && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }), !hideBusinessFavorite && /*#__PURE__*/_react.default.createElement("div", {
    className: "favorite",
    ref: favoriteRef,
    onClick: handleChangeFavorite
  }, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, business !== null && business !== void 0 && business.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 16,
    height: 16
  })), business && handleShowBusinessInfo ? /*#__PURE__*/_react.default.createElement(_BsExclamationCircle.default, {
    onClick: function onClick() {
      return handleShowBusinessInfo(business);
    }
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 20
  }))), !isShowCallcenterInformation && !hideCategories && /*#__PURE__*/_react.default.createElement(_styles.Categories, null, Object.keys(business).length > 0 ? businessType() : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), !isShowCallcenterInformation && !hideAddress && /*#__PURE__*/_react.default.createElement(_styles.Address, null, Object.keys(business).length > 0 ? business === null || business === void 0 ? void 0 : business.address : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), layout !== 'mapview' && /*#__PURE__*/_react.default.createElement(_styles.Medadata, {
    isCustomerMode: isShowCallcenterInformation
  }, Object.keys(business).length > 0 ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_GrClock.default, null), (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? business === null || business === void 0 ? void 0 : business.delivery_time : business === null || business === void 0 ? void 0 : business.pickup_time) || /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }), (business === null || business === void 0 ? void 0 : business.distance) >= 0 ? /*#__PURE__*/_react.default.createElement("p", {
    className: "bullet"
  }, /*#__PURE__*/_react.default.createElement(_GrLocation.default, null), parseDistance(business === null || business === void 0 ? void 0 : business.distance)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }), orderType === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (business === null || business === void 0 ? void 0 : business.delivery_price) >= 0 ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_GrDeliver.default, null), business && parsePrice(business === null || business === void 0 ? void 0 : business.delivery_price)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  })), isShowCallcenterInformation && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformation, null, /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "green"
  }, /*#__PURE__*/_react.default.createElement(_BiCar.default, null), business === null || business === void 0 ? void 0 : (_business$available_d = business.available_drivers) === null || _business$available_d === void 0 ? void 0 : _business$available_d.length), /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "red"
  }, /*#__PURE__*/_react.default.createElement(_BiCar.default, null), business === null || business === void 0 ? void 0 : (_business$busy_driver = business.busy_drivers) === null || _business$busy_driver === void 0 ? void 0 : _business$busy_driver.length), /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "rgb(252,225,5)"
  }, /*#__PURE__*/_react.default.createElement(_BiBasket.default, null), business === null || business === void 0 ? void 0 : (_business$active_orde = business.active_orders) === null || _business$active_orde === void 0 ? void 0 : _business$active_orde.length)), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (business === null || business === void 0 ? void 0 : (_business$reviews4 = business.reviews) === null || _business$reviews4 === void 0 ? void 0 : _business$reviews4.total) > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "reviews"
  }, /*#__PURE__*/_react.default.createElement(_GrStar.default, null), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : (_business$reviews5 = business.reviews) === null || _business$reviews5 === void 0 ? void 0 : _business$reviews5.total)) : (business === null || business === void 0 ? void 0 : (_business$reviews6 = business.reviews) === null || _business$reviews6 === void 0 ? void 0 : _business$reviews6.total) !== 0 && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }))), /*#__PURE__*/_react.default.createElement(_styles.Medadata, null, !isSkeleton > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "schedule"
  }, "".concat(t('SCHEDULE', 'Schedule'), ": ").concat(getScheduleOpen(business))), /*#__PURE__*/_react.default.createElement(_styles.SelectStoreContainer, null, /*#__PURE__*/_react.default.createElement(_five.Button, {
    outline: true
  }, t('SELECT_BUSINESS', 'Select business')))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 70
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120,
    height: 20
  })))))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('BUSINESS_CLOSED', 'Business Closed'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var BusinessController = function BusinessController(props) {
  var businessControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessControllerUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessController, businessControllerProps);
};
exports.BusinessController = BusinessController;