"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _SearchBar = require("../SearchBar");

var _BsArrowRightShort = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRightShort"));

var _Buttons = require("../../styles/Buttons");

var _BusinessTypeFilter = require("../BusinessTypeFilter");

var _PickupOrderTypeToggleButton = require("../PickupOrderTypeToggleButton");

var _styles = require("./styles");

var _styledComponents = require("styled-components");

var _FeaturedBusinessListing = require("../FeaturedBusinessListing");

var _AllBusinessesListing = require("../AllBusinessesListing");

var _ReviewSettingPopover = require("../ReviewSettingPopover");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessesListing = function BusinessesListing(props) {
  var _orderState$options, _theme$images, _theme$images$general, _theme$images2, _theme$images2$logos;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var orderType = (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) || 1;

  var _useState = (0, _react.useState)(4.5),
      _useState2 = _slicedToArray(_useState, 2),
      reviewQuality = _useState2[0],
      setReviewQuality = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      openPopover = _useState4[0],
      setOpenPopover = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isPickupClicked = _useState6[0],
      setIsPickupClicked = _useState6[1];

  var handleGoToPage = function handleGoToPage(search) {
    events.emit('go_to_page', {
      page: 'filter',
      search: "?".concat(search)
    });
  };

  var handleChangeCategory = function handleChangeCategory(value) {
    handleGoToPage("category=".concat(value));
  };

  var handleReviewSettingValue = function handleReviewSettingValue(value) {
    setReviewQuality(value);
  };

  var handleTogglePopover = function handleTogglePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, !openPopover[type])));
  };

  var handleClosePopover = function handleClosePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, false)));
  };

  (0, _react.useEffect)(function () {
    if (!isPickupClicked) return;

    if (orderType === 2) {
      events.emit('go_to_page', {
        page: 'filter'
      });
    }
  }, [orderType, isPickupClicked]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    isCustomMode: true,
    isEnterKeyLoad: true,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: function onSearch(val) {
      return handleGoToPage("search=".concat(val));
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    handleChangeBusinessType: handleChangeCategory
  }), /*#__PURE__*/_react.default.createElement(_styles.WrappperButtonGroup, null, /*#__PURE__*/_react.default.createElement(_PickupOrderTypeToggleButton.PickupOrderTypeToggleButton, {
    handleCustomClick: function handleCustomClick() {
      return setIsPickupClicked(true);
    }
  }), /*#__PURE__*/_react.default.createElement(_ReviewSettingPopover.ReviewSettingPopover, {
    open: openPopover.reviewSetting,
    reviewQuality: reviewQuality,
    onClick: function onClick() {
      return handleTogglePopover('reviewSetting');
    },
    onClose: function onClose() {
      return handleClosePopover('reviewSetting');
    },
    handleReviewSettingValue: handleReviewSettingValue
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secondary",
    onClick: function onClick() {
      return handleGoToPage('timeLimit=0:30');
    }
  }, t('UNDER_30_MIN', 'Under 30 min'))), /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderingPass, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.orderingPass,
    onClick: function onClick() {
      return !auth && events.emit('go_to_page', {
        page: 'signup'
      });
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "130px",
    height: "30px",
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.logotypeInvert,
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("p", null, t('$ 0 delivery fees, reduced service fees.')), /*#__PURE__*/_react.default.createElement("p", null, t('Sign Up for Ordering Pass')), /*#__PURE__*/_react.default.createElement(_styles.WrapperGoButton, null, /*#__PURE__*/_react.default.createElement(_BsArrowRightShort.default, null))), /*#__PURE__*/_react.default.createElement(_FeaturedBusinessListing.FeaturedBusinessListing, _extends({}, props, {
    orderType: 1,
    isSortByReview: true,
    twoColumnView: true,
    defaultShowNumber: 4
  }))), /*#__PURE__*/_react.default.createElement(_AllBusinessesListing.AllBusinessesListing, _extends({}, props, {
    handleGoToPage: handleGoToPage,
    handleChangeCategory: handleChangeCategory
  }))));
};

exports.BusinessesListing = BusinessesListing;