"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBasicInformation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styledComponents = require("styled-components");

var _Modal = require("../Modal");

var _BusinessInformation = require("../BusinessInformation");

var _BusinessReviews = require("../BusinessReviews");

var _BsInfoCircle = _interopRequireDefault(require("@meronex/icons/bs/BsInfoCircle"));

var _orderingComponents = require("ordering-components");

var _utils = require("../../../../../utils");

var _Select = require("../../styles/Select");

var _MomentContent = require("../MomentContent");

var _CgSearch = _interopRequireDefault(require("@meronex/icons/cg/CgSearch"));

var _SearchProducts = require("../SearchProducts");

var _styles = require("./styles");

var _BusinessPreorder = require("../BusinessPreorder");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));

var _isBetween = _interopRequireDefault(require("dayjs/plugin/isBetween"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_dayjs.default.extend(_timezone.default);

_dayjs.default.extend(_isBetween.default);

var types = ['food', 'laundry', 'alcohol', 'groceries'];

var BusinessBasicInformation = function BusinessBasicInformation(props) {
  var _configs$preorder_sta, _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _orderingTheme$theme$5, _orderingTheme$theme$6, _orderingTheme$theme$7, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _orderingTheme$theme7, _orderingTheme$theme8, _orderingTheme$theme9, _orderingTheme$theme10, _orderingTheme$theme11, _orderingTheme$theme12, _orderingTheme$theme13, _orderingTheme$theme14, _orderingTheme$theme15, _orderingTheme$theme16, _orderingTheme$theme17, _orderingTheme$theme18, _orderingTheme$theme19, _orderingTheme$theme20, _orderingTheme$theme21, _orderingTheme$theme22, _orderingTheme$theme23, _orderingTheme$theme24, _orderingTheme$theme25, _orderingTheme$theme26, _orderingTheme$theme27, _orderingTheme$theme28, _orderingTheme$theme29, _orderingTheme$theme30, _orderingTheme$theme31, _orderingTheme$theme32, _orderingTheme$theme33, _orderingTheme$theme34, _orderingTheme$theme35, _orderingTheme$theme36, _orderingTheme$theme37, _orderingTheme$theme38, _orderingTheme$theme39, _orderingTheme$theme40, _orderingTheme$theme41, _orderingTheme$theme42, _orderingTheme$theme43, _orderingTheme$theme44, _orderingTheme$theme45, _orderingTheme$theme46, _orderingTheme$theme47, _orderingTheme$theme48, _orderingTheme$theme49, _orderingTheme$theme50, _orderingTheme$theme51, _orderingTheme$theme52, _orderingTheme$theme53, _orderingTheme$theme54, _orderingTheme$theme55, _orderingTheme$theme56, _orderingTheme$theme57, _orderingTheme$theme58, _orderingTheme$theme59, _orderingTheme$theme60, _orderingTheme$theme61, _orderingTheme$theme62, _orderingTheme$theme63, _orderingTheme$theme64, _orderingTheme$theme65, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$dummies, _business$reviews3, _business$reviews4, _props$afterComponent, _props$afterElements;

  var isSkeleton = props.isSkeleton,
      businessState = props.businessState,
      setOpenBusinessInformation = props.setOpenBusinessInformation,
      openBusinessInformation = props.openBusinessInformation,
      handleChangeSearch = props.handleChangeSearch,
      searchValue = props.searchValue,
      sortByOptions = props.sortByOptions,
      sortByValue = props.sortByValue,
      handleChangeSortBy = props.handleChangeSortBy,
      categoryState = props.categoryState,
      errorQuantityProducts = props.errorQuantityProducts,
      isCustomerMode = props.isCustomerMode;
  var business = businessState.business,
      loading = businessState.loading;
  var theme = (0, _styledComponents.useTheme)();

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDistance = _useUtils2$.parseDistance,
      optimizeImage = _useUtils2$.optimizeImage;

  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
      _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
      orderingTheme = _useOrderingTheme2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isBusinessReviews = _useState2[0],
      setIsBusinessReviews = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPreOrder = _useState4[0],
      setIsPreOrder = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openSearchProducts = _useState6[0],
      setOpenSearchProducts = _useState6[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var isPreOrderSetting = (configs === null || configs === void 0 ? void 0 : (_configs$preorder_sta = configs.preorder_status_enabled) === null || _configs$preorder_sta === void 0 ? void 0 : _configs$preorder_sta.value) === '1';
  var showLogo = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme$ = _orderingTheme$theme.business_view) !== null && _orderingTheme$theme$ !== void 0 && (_orderingTheme$theme$2 = _orderingTheme$theme$.components) !== null && _orderingTheme$theme$2 !== void 0 && (_orderingTheme$theme$3 = _orderingTheme$theme$2.header) !== null && _orderingTheme$theme$3 !== void 0 && (_orderingTheme$theme$4 = _orderingTheme$theme$3.components) !== null && _orderingTheme$theme$4 !== void 0 && (_orderingTheme$theme$5 = _orderingTheme$theme$4.business) !== null && _orderingTheme$theme$5 !== void 0 && (_orderingTheme$theme$6 = _orderingTheme$theme$5.components) !== null && _orderingTheme$theme$6 !== void 0 && (_orderingTheme$theme$7 = _orderingTheme$theme$6.logo) !== null && _orderingTheme$theme$7 !== void 0 && _orderingTheme$theme$7.hidden);
  var showDeliveryFee = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme2 = orderingTheme.theme) !== null && _orderingTheme$theme2 !== void 0 && (_orderingTheme$theme3 = _orderingTheme$theme2.business_view) !== null && _orderingTheme$theme3 !== void 0 && (_orderingTheme$theme4 = _orderingTheme$theme3.components) !== null && _orderingTheme$theme4 !== void 0 && (_orderingTheme$theme5 = _orderingTheme$theme4.header) !== null && _orderingTheme$theme5 !== void 0 && (_orderingTheme$theme6 = _orderingTheme$theme5.components) !== null && _orderingTheme$theme6 !== void 0 && (_orderingTheme$theme7 = _orderingTheme$theme6.business) !== null && _orderingTheme$theme7 !== void 0 && (_orderingTheme$theme8 = _orderingTheme$theme7.components) !== null && _orderingTheme$theme8 !== void 0 && (_orderingTheme$theme9 = _orderingTheme$theme8.fee) !== null && _orderingTheme$theme9 !== void 0 && _orderingTheme$theme9.hidden);
  var showTime = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme10 = orderingTheme.theme) !== null && _orderingTheme$theme10 !== void 0 && (_orderingTheme$theme11 = _orderingTheme$theme10.business_view) !== null && _orderingTheme$theme11 !== void 0 && (_orderingTheme$theme12 = _orderingTheme$theme11.components) !== null && _orderingTheme$theme12 !== void 0 && (_orderingTheme$theme13 = _orderingTheme$theme12.header) !== null && _orderingTheme$theme13 !== void 0 && (_orderingTheme$theme14 = _orderingTheme$theme13.components) !== null && _orderingTheme$theme14 !== void 0 && (_orderingTheme$theme15 = _orderingTheme$theme14.business) !== null && _orderingTheme$theme15 !== void 0 && (_orderingTheme$theme16 = _orderingTheme$theme15.components) !== null && _orderingTheme$theme16 !== void 0 && (_orderingTheme$theme17 = _orderingTheme$theme16.time) !== null && _orderingTheme$theme17 !== void 0 && _orderingTheme$theme17.hidden);
  var showBusinessInfo = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme18 = orderingTheme.theme) !== null && _orderingTheme$theme18 !== void 0 && (_orderingTheme$theme19 = _orderingTheme$theme18.business_view) !== null && _orderingTheme$theme19 !== void 0 && (_orderingTheme$theme20 = _orderingTheme$theme19.components) !== null && _orderingTheme$theme20 !== void 0 && (_orderingTheme$theme21 = _orderingTheme$theme20.header) !== null && _orderingTheme$theme21 !== void 0 && (_orderingTheme$theme22 = _orderingTheme$theme21.components) !== null && _orderingTheme$theme22 !== void 0 && (_orderingTheme$theme23 = _orderingTheme$theme22.business) !== null && _orderingTheme$theme23 !== void 0 && (_orderingTheme$theme24 = _orderingTheme$theme23.components) !== null && _orderingTheme$theme24 !== void 0 && (_orderingTheme$theme25 = _orderingTheme$theme24.business_info) !== null && _orderingTheme$theme25 !== void 0 && _orderingTheme$theme25.hidden);
  var showReviews = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme26 = orderingTheme.theme) !== null && _orderingTheme$theme26 !== void 0 && (_orderingTheme$theme27 = _orderingTheme$theme26.business_view) !== null && _orderingTheme$theme27 !== void 0 && (_orderingTheme$theme28 = _orderingTheme$theme27.components) !== null && _orderingTheme$theme28 !== void 0 && (_orderingTheme$theme29 = _orderingTheme$theme28.header) !== null && _orderingTheme$theme29 !== void 0 && (_orderingTheme$theme30 = _orderingTheme$theme29.components) !== null && _orderingTheme$theme30 !== void 0 && (_orderingTheme$theme31 = _orderingTheme$theme30.business) !== null && _orderingTheme$theme31 !== void 0 && (_orderingTheme$theme32 = _orderingTheme$theme31.components) !== null && _orderingTheme$theme32 !== void 0 && (_orderingTheme$theme33 = _orderingTheme$theme32.reviews) !== null && _orderingTheme$theme33 !== void 0 && _orderingTheme$theme33.hidden);
  var showDistance = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme34 = orderingTheme.theme) !== null && _orderingTheme$theme34 !== void 0 && (_orderingTheme$theme35 = _orderingTheme$theme34.business_view) !== null && _orderingTheme$theme35 !== void 0 && (_orderingTheme$theme36 = _orderingTheme$theme35.components) !== null && _orderingTheme$theme36 !== void 0 && (_orderingTheme$theme37 = _orderingTheme$theme36.header) !== null && _orderingTheme$theme37 !== void 0 && (_orderingTheme$theme38 = _orderingTheme$theme37.components) !== null && _orderingTheme$theme38 !== void 0 && (_orderingTheme$theme39 = _orderingTheme$theme38.business) !== null && _orderingTheme$theme39 !== void 0 && (_orderingTheme$theme40 = _orderingTheme$theme39.components) !== null && _orderingTheme$theme40 !== void 0 && (_orderingTheme$theme41 = _orderingTheme$theme40.distance) !== null && _orderingTheme$theme41 !== void 0 && _orderingTheme$theme41.hidden);
  var showSort = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme42 = orderingTheme.theme) !== null && _orderingTheme$theme42 !== void 0 && (_orderingTheme$theme43 = _orderingTheme$theme42.business_view) !== null && _orderingTheme$theme43 !== void 0 && (_orderingTheme$theme44 = _orderingTheme$theme43.components) !== null && _orderingTheme$theme44 !== void 0 && (_orderingTheme$theme45 = _orderingTheme$theme44.header) !== null && _orderingTheme$theme45 !== void 0 && (_orderingTheme$theme46 = _orderingTheme$theme45.components) !== null && _orderingTheme$theme46 !== void 0 && (_orderingTheme$theme47 = _orderingTheme$theme46.business) !== null && _orderingTheme$theme47 !== void 0 && (_orderingTheme$theme48 = _orderingTheme$theme47.components) !== null && _orderingTheme$theme48 !== void 0 && (_orderingTheme$theme49 = _orderingTheme$theme48.sort) !== null && _orderingTheme$theme49 !== void 0 && _orderingTheme$theme49.hidden);
  var isInfoShrunken = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme50 = orderingTheme.theme) === null || _orderingTheme$theme50 === void 0 ? void 0 : (_orderingTheme$theme51 = _orderingTheme$theme50.business_view) === null || _orderingTheme$theme51 === void 0 ? void 0 : (_orderingTheme$theme52 = _orderingTheme$theme51.components) === null || _orderingTheme$theme52 === void 0 ? void 0 : (_orderingTheme$theme53 = _orderingTheme$theme52.header) === null || _orderingTheme$theme53 === void 0 ? void 0 : (_orderingTheme$theme54 = _orderingTheme$theme53.components) === null || _orderingTheme$theme54 === void 0 ? void 0 : (_orderingTheme$theme55 = _orderingTheme$theme54.business) === null || _orderingTheme$theme55 === void 0 ? void 0 : (_orderingTheme$theme56 = _orderingTheme$theme55.components) === null || _orderingTheme$theme56 === void 0 ? void 0 : (_orderingTheme$theme57 = _orderingTheme$theme56.layout) === null || _orderingTheme$theme57 === void 0 ? void 0 : _orderingTheme$theme57.position) === 'shrunken';
  var hideCity = orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme58 = orderingTheme.theme) === null || _orderingTheme$theme58 === void 0 ? void 0 : (_orderingTheme$theme59 = _orderingTheme$theme58.business_view) === null || _orderingTheme$theme59 === void 0 ? void 0 : (_orderingTheme$theme60 = _orderingTheme$theme59.components) === null || _orderingTheme$theme60 === void 0 ? void 0 : (_orderingTheme$theme61 = _orderingTheme$theme60.header) === null || _orderingTheme$theme61 === void 0 ? void 0 : (_orderingTheme$theme62 = _orderingTheme$theme61.components) === null || _orderingTheme$theme62 === void 0 ? void 0 : (_orderingTheme$theme63 = _orderingTheme$theme62.business) === null || _orderingTheme$theme63 === void 0 ? void 0 : (_orderingTheme$theme64 = _orderingTheme$theme63.components) === null || _orderingTheme$theme64 === void 0 ? void 0 : (_orderingTheme$theme65 = _orderingTheme$theme64.city) === null || _orderingTheme$theme65 === void 0 ? void 0 : _orderingTheme$theme65.hidden;

  var getBusinessType = function getBusinessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;

      return business[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 ? void 0 : (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };

  (0, _react.useEffect)(function () {
    var _businessState$busine, _businessState$busine2, _businessState$busine3;

    if (businessState !== null && businessState !== void 0 && businessState.loading) return;
    var timeout = null;
    var currentDate = (0, _dayjs.default)().tz(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.timezone);
    var lapse = null;

    if (businessState !== null && businessState !== void 0 && (_businessState$busine2 = businessState.business) !== null && _businessState$busine2 !== void 0 && (_businessState$busine3 = _businessState$busine2.today) !== null && _businessState$busine3 !== void 0 && _businessState$busine3.enabled) {
      var _businessState$busine4, _businessState$busine5, _businessState$busine6;

      lapse = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : (_businessState$busine5 = _businessState$busine4.today) === null || _businessState$busine5 === void 0 ? void 0 : (_businessState$busine6 = _businessState$busine5.lapses) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.find(function (lapse) {
        var from = currentDate.hour(lapse.open.hour).minute(lapse.open.minute);
        var to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute);
        return currentDate.unix() >= from.unix() && currentDate.unix() <= to.unix();
      });
    }

    if (lapse) {
      var to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute);
      var timeToClose = (to.unix() - currentDate.unix()) * 1000;
      timeout = setTimeout(function () {
        setIsPreOrder(true);
      }, timeToClose);
    }

    return function () {
      timeout && clearTimeout(timeout);
    };
  }, [businessState === null || businessState === void 0 ? void 0 : businessState.business]);
  (0, _react.useEffect)(function () {
    document.body.style.overflowY = openSearchProducts ? 'hidden' : 'auto';
  }, [openSearchProducts]);

  var handleScroll = function handleScroll() {
    var searchElement = document.getElementById('search-component');
    if (!searchElement) return;
    var limit = window.pageYOffset >= (searchElement === null || searchElement === void 0 ? void 0 : searchElement.offsetTop) && window.pageYOffset > 0;

    if (limit) {
      var classAdded = searchElement.classList.contains('fixed-search');
      !classAdded && searchElement.classList.add('fixed-search');
    } else {
      searchElement && searchElement.classList.remove('fixed-search');
    }
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  (0, _react.useEffect)(function () {
    window.scroll({
      top: window.scrollY - 1,
      left: 0
    });
  }, [sortByValue]);

  var SearchComponent = function SearchComponent() {
    return /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, {
      id: "search-component"
    }, /*#__PURE__*/_react.default.createElement(_styles.SearchIconWrapper, {
      onClick: function onClick() {
        return setOpenSearchProducts(true);
      }
    }, /*#__PURE__*/_react.default.createElement(_CgSearch.default, null)), showSort && /*#__PURE__*/_react.default.createElement(_Select.Select, {
      notAsync: true,
      notReload: true,
      options: sortByOptions,
      defaultValue: sortByValue,
      onChange: function onChange(val) {
        return handleChangeSortBy && handleChangeSortBy(val);
      }
    }));
  };

  var SocialNetWork = function SocialNetWork(_ref) {
    var url = _ref.url,
        icon = _ref.icon;
    return /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, {
      href: url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, icon);
  };

  var BusinessInfoComponent = function BusinessInfoComponent() {
    var _business$ribbon, _business$ribbon2, _business$ribbon3, _business$ribbon4, _business$ribbon5, _business$city, _business$city2, _orderState$options, _business$reviews, _business$reviews2, _categoryState$produc, _business$professiona;

    return /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, {
      isInfoShrunken: isInfoShrunken
    }, !loading ? /*#__PURE__*/_react.default.createElement(_styles.TitleWrapper, null, /*#__PURE__*/_react.default.createElement("h2", {
      className: "bold"
    }, business === null || business === void 0 ? void 0 : business.name), (business === null || business === void 0 ? void 0 : (_business$ribbon = business.ribbon) === null || _business$ribbon === void 0 ? void 0 : _business$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
      bgColor: business === null || business === void 0 ? void 0 : (_business$ribbon2 = business.ribbon) === null || _business$ribbon2 === void 0 ? void 0 : _business$ribbon2.color,
      isRoundRect: (business === null || business === void 0 ? void 0 : (_business$ribbon3 = business.ribbon) === null || _business$ribbon3 === void 0 ? void 0 : _business$ribbon3.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
      isCapsule: (business === null || business === void 0 ? void 0 : (_business$ribbon4 = business.ribbon) === null || _business$ribbon4 === void 0 ? void 0 : _business$ribbon4.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
    }, business === null || business === void 0 ? void 0 : (_business$ribbon5 = business.ribbon) === null || _business$ribbon5 === void 0 ? void 0 : _business$ribbon5.text)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: isCustomerMode ? 100 : 150,
      height: isCustomerMode ? 35 : 'auto'
    }), showBusinessInfo && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("p", {
      className: "type"
    }, getBusinessType()) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: isCustomerMode ? 100 : 150
    })), typeof hideCity !== 'undefined' && !hideCity && (business === null || business === void 0 ? void 0 : (_business$city = business.city) === null || _business$city === void 0 ? void 0 : _business$city.name) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("p", {
      className: "type"
    }, business === null || business === void 0 ? void 0 : (_business$city2 = business.city) === null || _business$city2 === void 0 ? void 0 : _business$city2.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: isCustomerMode ? 100 : 150
    })), !loading ? /*#__PURE__*/_react.default.createElement(_styles.SocialList, null, (business === null || business === void 0 ? void 0 : business.facebook_profile) && /*#__PURE__*/_react.default.createElement(SocialNetWork, {
      url: business === null || business === void 0 ? void 0 : business.facebook_profile,
      icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Facebook, null)
    }), (business === null || business === void 0 ? void 0 : business.instagram_profile) && /*#__PURE__*/_react.default.createElement(SocialNetWork, {
      url: business === null || business === void 0 ? void 0 : business.instagram_profile,
      icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Instagram, null)
    }), (business === null || business === void 0 ? void 0 : business.tiktok_profile) && /*#__PURE__*/_react.default.createElement(SocialNetWork, {
      url: business === null || business === void 0 ? void 0 : business.tiktok_profile,
      icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Tiktok, null)
    }), (business === null || business === void 0 ? void 0 : business.pinterest_profile) && /*#__PURE__*/_react.default.createElement(SocialNetWork, {
      url: business === null || business === void 0 ? void 0 : business.pinterest_profile,
      icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pinterest, null)
    }), (business === null || business === void 0 ? void 0 : business.whatsapp_number) && /*#__PURE__*/_react.default.createElement(SocialNetWork, {
      url: business === null || business === void 0 ? void 0 : business.whatsapp_number,
      icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Whatsapp, null)
    }), (business === null || business === void 0 ? void 0 : business.snapchat_profile) && /*#__PURE__*/_react.default.createElement(SocialNetWork, {
      url: business === null || business === void 0 ? void 0 : business.snapchat_profile,
      icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Snapchat, null)
    })) : /*#__PURE__*/_react.default.createElement(_styles.SocialList, null, _toConsumableArray(Array(5).keys()).map(function (i) {
      return /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, {
        isSkeleton: true,
        key: i
      }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        width: 27,
        height: 27
      }));
    })), /*#__PURE__*/_react.default.createElement(_styles.BusinessDetail, {
      isSkeleton: loading
    }, (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && showDeliveryFee && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivery fee')), business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0)), /*#__PURE__*/_react.default.createElement("span", {
      className: "dot"
    }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: isCustomerMode ? 70 : 50
    })), showTime && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)), /*#__PURE__*/_react.default.createElement("span", {
      className: "dot"
    }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time)), /*#__PURE__*/_react.default.createElement("span", {
      className: "dot"
    }, "\u2022"))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: isCustomerMode ? 70 : 50
    })), showDistance && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0)), /*#__PURE__*/_react.default.createElement("span", {
      className: "dot"
    }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: isCustomerMode ? 70 : 50
    })), showReviews && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("div", {
      className: "review"
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, {
      className: "start"
    }), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: isCustomerMode ? 100 : 50
    }))), !loading ? /*#__PURE__*/_react.default.createElement("div", {
      className: "preorder-Reviews"
    }, isPreOrderSetting && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return setIsPreOrder(true);
      }
    }, t('PREORDER', 'Preorder')), /*#__PURE__*/_react.default.createElement("span", {
      className: "dot"
    }, "\u2022")), ((_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.reviews) && /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return setIsBusinessReviews(true);
      }
    }, t('REVIEWS', 'Reviews'))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: isCustomerMode ? 100 : 150
    })))), ((categoryState === null || categoryState === void 0 ? void 0 : (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.length) !== 0 || searchValue) && !errorQuantityProducts && !isInfoShrunken && !(business !== null && business !== void 0 && (_business$professiona = business.professionals) !== null && _business$professiona !== void 0 && _business$professiona.length) && /*#__PURE__*/_react.default.createElement(SearchComponent, null));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), openSearchProducts && /*#__PURE__*/_react.default.createElement(_SearchProducts.SearchProducts, _extends({}, props, {
    onClose: function onClose() {
      handleChangeSearch('');
      setOpenSearchProducts(false);
      window.scroll({
        top: window.scrollY - 1,
        left: 0
      });
    },
    business: businessState.business
  })), !isInfoShrunken && /*#__PURE__*/_react.default.createElement(BusinessInfoComponent, null), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, {
    bgimage: business === null || business === void 0 ? void 0 : business.header,
    isSkeleton: isSkeleton,
    id: "container",
    isClosed: !(business !== null && business !== void 0 && business.open)
  }, !loading && !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement("h1", null, t('CLOSED', 'Closed')), showLogo && /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, !loading ? /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 70,
    width: 70
  }))), isInfoShrunken && /*#__PURE__*/_react.default.createElement(BusinessInfoComponent, null), !loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isInfoShrunken && /*#__PURE__*/_react.default.createElement(_styles.SearchComponentContainer, null, /*#__PURE__*/_react.default.createElement(SearchComponent, null)), /*#__PURE__*/_react.default.createElement(_styles.BusinessMoreDetail, null, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
    onClick: function onClick() {
      return setOpenBusinessInformation(true);
    }
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openBusinessInformation,
    onClose: setOpenBusinessInformation,
    padding: "0",
    hideCloseDefault: true,
    isTransparent: true
  }, /*#__PURE__*/_react.default.createElement(_BusinessInformation.BusinessInformation, {
    business: business,
    getBusinessType: getBusinessType,
    optimizeImage: optimizeImage,
    onClose: setOpenBusinessInformation
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: isBusinessReviews,
    onClose: function onClose() {
      return setIsBusinessReviews(false);
    },
    padding: "20px"
  }, /*#__PURE__*/_react.default.createElement(_BusinessReviews.BusinessReviews, {
    businessId: business.id,
    reviews: (_business$reviews3 = business.reviews) === null || _business$reviews3 === void 0 ? void 0 : _business$reviews3.reviews,
    businessName: business.name,
    stars: (_business$reviews4 = business.reviews) === null || _business$reviews4 === void 0 ? void 0 : _business$reviews4.total
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isPreOrder,
    width: isCustomerMode ? '700px' : '760px',
    onClose: function onClose() {
      return setIsPreOrder(false);
    },
    padding: isCustomerMode && '20px'
  }, isCustomerMode ? /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, {
    onClose: function onClose() {
      return setIsPreOrder(false);
    }
  }) : /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: business,
    handleClick: function handleClick() {
      return setIsPreOrder(false);
    }
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.BusinessBasicInformation = BusinessBasicInformation;