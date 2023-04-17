"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBasicInformation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _Modal = require("../Modal");
var _BusinessInformation = require("../BusinessInformation");
var _BusinessReviews = require("../BusinessReviews");
var _BsInfoCircle = _interopRequireDefault(require("@meronex/icons/bs/BsInfoCircle"));
var _orderingComponents = require("ordering-components");
var _MomentContent = require("../MomentContent");
var _SearchProducts = require("../SearchProducts");
var _SearchProducts2 = require("../../../../six/src/components/BusinessProductsListing/SearchProducts");
var _styles = require("./styles");
var _BusinessPreorder = require("../BusinessPreorder");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));
var _isBetween = _interopRequireDefault(require("dayjs/plugin/isBetween"));
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _BusinessInfoComponent = require("./BusinessInfoComponent");
var _SearchComponent = require("./SearchComponent");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Buttons = _interopRequireDefault(require("../../styles/Buttons"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_dayjs.default.extend(_timezone.default);
_dayjs.default.extend(_isBetween.default);
var types = ['food', 'laundry', 'alcohol', 'groceries'];
var BusinessBasicInformation = function BusinessBasicInformation(props) {
  var _theme$business_view, _theme$business_view$, _theme$business_view$2, _theme$business_view$3, _theme$business_view$4, _theme$business_view$5, _theme$business_view$6, _theme$business_view2, _theme$business_view3, _theme$business_view4, _theme$business_view5, _theme$business_view6, _theme$business_view7, _theme$business_view8, _theme$business_view9, _theme$business_view10, _theme$business_view11, _theme$business_view12, _theme$business_view13, _theme$business_view14, _theme$business_view15, _theme$business_view16, _theme$business_view17, _theme$business_view18, _theme$business_view19, _theme$business_view20, _theme$header, _theme$header$compone, _theme$header$compone2, _theme$header$compone3, _props$beforeElements, _props$beforeComponen, _business$reviews, _business$reviews2, _props$afterComponent, _props$afterElements;
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
    isCustomerMode = props.isCustomerMode,
    isCustomLayout = props.isCustomLayout,
    setCategoryClicked = props.setCategoryClicked,
    categoryClicked = props.categoryClicked;
  var business = businessState.business,
    loading = businessState.loading;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var windowSize = (0, _useWindowSize.useWindowSize)();
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
  var hideLogo = theme === null || theme === void 0 ? void 0 : (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 ? void 0 : (_theme$business_view$ = _theme$business_view.components) === null || _theme$business_view$ === void 0 ? void 0 : (_theme$business_view$2 = _theme$business_view$.header) === null || _theme$business_view$2 === void 0 ? void 0 : (_theme$business_view$3 = _theme$business_view$2.components) === null || _theme$business_view$3 === void 0 ? void 0 : (_theme$business_view$4 = _theme$business_view$3.business) === null || _theme$business_view$4 === void 0 ? void 0 : (_theme$business_view$5 = _theme$business_view$4.components) === null || _theme$business_view$5 === void 0 ? void 0 : (_theme$business_view$6 = _theme$business_view$5.logo) === null || _theme$business_view$6 === void 0 ? void 0 : _theme$business_view$6.hidden;
  var hideInfoIcon = theme === null || theme === void 0 ? void 0 : (_theme$business_view2 = theme.business_view) === null || _theme$business_view2 === void 0 ? void 0 : (_theme$business_view3 = _theme$business_view2.components) === null || _theme$business_view3 === void 0 ? void 0 : (_theme$business_view4 = _theme$business_view3.header) === null || _theme$business_view4 === void 0 ? void 0 : (_theme$business_view5 = _theme$business_view4.components) === null || _theme$business_view5 === void 0 ? void 0 : (_theme$business_view6 = _theme$business_view5.business) === null || _theme$business_view6 === void 0 ? void 0 : (_theme$business_view7 = _theme$business_view6.components) === null || _theme$business_view7 === void 0 ? void 0 : (_theme$business_view8 = _theme$business_view7.business_info) === null || _theme$business_view8 === void 0 ? void 0 : _theme$business_view8.hidden;
  var isInfoShrunken = (theme === null || theme === void 0 ? void 0 : (_theme$business_view9 = theme.business_view) === null || _theme$business_view9 === void 0 ? void 0 : (_theme$business_view10 = _theme$business_view9.components) === null || _theme$business_view10 === void 0 ? void 0 : (_theme$business_view11 = _theme$business_view10.header) === null || _theme$business_view11 === void 0 ? void 0 : (_theme$business_view12 = _theme$business_view11.components) === null || _theme$business_view12 === void 0 ? void 0 : (_theme$business_view13 = _theme$business_view12.business) === null || _theme$business_view13 === void 0 ? void 0 : (_theme$business_view14 = _theme$business_view13.components) === null || _theme$business_view14 === void 0 ? void 0 : (_theme$business_view15 = _theme$business_view14.layout) === null || _theme$business_view15 === void 0 ? void 0 : _theme$business_view15.position) === 'shrunken';
  var searchLayout = theme === null || theme === void 0 ? void 0 : (_theme$business_view16 = theme.business_view) === null || _theme$business_view16 === void 0 ? void 0 : (_theme$business_view17 = _theme$business_view16.components) === null || _theme$business_view17 === void 0 ? void 0 : (_theme$business_view18 = _theme$business_view17.product_search) === null || _theme$business_view18 === void 0 ? void 0 : (_theme$business_view19 = _theme$business_view18.components) === null || _theme$business_view19 === void 0 ? void 0 : (_theme$business_view20 = _theme$business_view19.layout) === null || _theme$business_view20 === void 0 ? void 0 : _theme$business_view20.type;
  var isChew = (theme === null || theme === void 0 ? void 0 : (_theme$header = theme.header) === null || _theme$header === void 0 ? void 0 : (_theme$header$compone = _theme$header.components) === null || _theme$header$compone === void 0 ? void 0 : (_theme$header$compone2 = _theme$header$compone.layout) === null || _theme$header$compone2 === void 0 ? void 0 : (_theme$header$compone3 = _theme$header$compone2.type) === null || _theme$header$compone3 === void 0 ? void 0 : _theme$header$compone3.toLowerCase()) === 'chew';
  var businessInfoComponentProps = {
    isChew: isChew,
    loading: loading,
    business: business,
    isInfoShrunken: isInfoShrunken,
    isCustomerMode: isCustomerMode,
    setIsPreOrder: setIsPreOrder,
    setIsBusinessReviews: setIsBusinessReviews,
    categoryState: categoryState,
    searchValue: searchValue,
    errorQuantityProducts: errorQuantityProducts,
    setOpenSearchProducts: setOpenSearchProducts,
    handleChangeSortBy: handleChangeSortBy,
    sortByValue: sortByValue,
    sortByOptions: sortByOptions,
    isCustomLayout: isCustomLayout
  };
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
    if (searchElement) {
      var limit = window.pageYOffset >= (searchElement === null || searchElement === void 0 ? void 0 : searchElement.offsetTop) && window.pageYOffset > 0;
      if (limit) {
        var classAdded = searchElement.classList.contains('fixed-search');
        !classAdded && searchElement.classList.add('fixed-search');
      } else {
        searchElement && searchElement.classList.remove('fixed-search');
      }
    }
    var businessNameElement = document.getElementById('business_name');
    if (businessNameElement) {
      var _limit = window.pageYOffset >= (businessNameElement === null || businessNameElement === void 0 ? void 0 : businessNameElement.offsetTop) - 55 && window.pageYOffset > 0;
      if (_limit) {
        var _classAdded = businessNameElement.classList.contains('fixed-name');
        !_classAdded && businessNameElement.classList.add('fixed-name');
      } else {
        businessNameElement && businessNameElement.classList.remove('fixed-name');
      }
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [windowSize === null || windowSize === void 0 ? void 0 : windowSize.width]);
  (0, _react.useEffect)(function () {
    window.scroll({
      top: window.scrollY - 1,
      left: 0
    });
  }, [sortByValue]);
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
      handleChangeSearch && handleChangeSearch('');
      setOpenSearchProducts(false);
      window.scroll({
        top: window.scrollY - 1,
        left: 0
      });
    },
    business: businessState.business
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoWrapper, null, !isInfoShrunken && !isChew && /*#__PURE__*/_react.default.createElement(_BusinessInfoComponent.BusinessInfoComponent, businessInfoComponentProps), ((business === null || business === void 0 ? void 0 : business.header) || (business === null || business === void 0 ? void 0 : business.logo) || loading || isInfoShrunken) && /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, {
    bgimage: business === null || business === void 0 ? void 0 : business.header,
    isSkeleton: isSkeleton,
    id: "container",
    isClosed: !(business !== null && business !== void 0 && business.open),
    isChew: isChew
  }, !loading && !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement("h1", null, t('CLOSED', 'Closed')), !hideLogo && (business === null || business === void 0 ? void 0 : business.logo) && !isChew && /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, !loading && /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage(business === null || business === void 0 ? void 0 : business.logo, 'h_200,c_limit')
  }))), (isInfoShrunken || isChew) && /*#__PURE__*/_react.default.createElement(_BusinessInfoComponent.BusinessInfoComponent, businessInfoComponentProps), !loading && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isInfoShrunken && /*#__PURE__*/_react.default.createElement(_styles.SearchComponentContainer, null, /*#__PURE__*/_react.default.createElement(_SearchComponent.SearchComponent, {
    setOpenSearchProducts: setOpenSearchProducts,
    handleChangeSortBy: handleChangeSortBy,
    sortByValue: sortByValue,
    sortByOptions: sortByOptions
  })), searchLayout === 'floating' && /*#__PURE__*/_react.default.createElement(_styles.WrapperFloatingSearch, null, /*#__PURE__*/_react.default.createElement(_SearchProducts2.SearchProducts, {
    handleChangeSearch: handleChangeSearch,
    searchValue: searchValue,
    sortByOptions: sortByOptions,
    sortByValue: sortByValue,
    onChange: function onChange(val) {
      return handleChangeSortBy && handleChangeSortBy(val);
    },
    businessState: businessState,
    disablePadding: true
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessMoreDetail, null, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
    onClick: function onClick() {
      return setOpenBusinessInformation(true);
    }
  })))), !(business !== null && business !== void 0 && business.header) && !(business !== null && business !== void 0 && business.logo) && !loading && !isInfoShrunken && !hideInfoIcon && /*#__PURE__*/_react.default.createElement(_styles.BusinessMoreDetail, {
    position: "relative"
  }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
    onClick: function onClick() {
      return setOpenBusinessInformation(true);
    }
  }))), windowSize.width <= 768 && categoryClicked && /*#__PURE__*/_react.default.createElement(_styles.BackButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.default, {
    color: "primary",
    initialIcon: true,
    onClick: function onClick() {
      return setCategoryClicked(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowLeft, null), /*#__PURE__*/_react.default.createElement("div", null, t('GO_TO_ALL_CATEGORIES', 'Go to all categories')))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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
    reviews: (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.reviews,
    businessName: business.name,
    stars: (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total
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
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
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