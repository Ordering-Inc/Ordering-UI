"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickupBusinessesListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _BusinessTypeFilter = require("../BusinessTypeFilter");

var _Buttons = require("../../styles/Buttons");

var _SearchBar = require("../SearchBar");

var _BusinessController = require("../BusinessController");

var _NotFoundSource = require("../NotFoundSource");

var _Modal = require("../Modal");

var _AddressForm = require("../AddressForm");

var _AddressList = require("../AddressList");

var _BusinessesMap = require("../BusinessesMap");

var _PickupOrderTypeToggleButton = require("../PickupOrderTypeToggleButton");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PickupBusinessesListingUI = function PickupBusinessesListingUI(props) {
  var _document$getElementB, _businessesList$busin, _orderState$options4, _orderState$options4$, _orderState$options5;

  var initialOrderType = props.initialOrderType,
      businessesList = props.businessesList,
      paginationProps = props.paginationProps,
      searchValue = props.searchValue,
      getBusinesses = props.getBusinesses,
      handleChangeSearch = props.handleChangeSearch,
      handleBusinessClick = props.handleBusinessClick,
      handleChangeBusinessType = props.handleChangeBusinessType;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var PIXELS_TO_SCROLL = ((_document$getElementB = document.getElementById('footer')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetHeight) + 100 || 700;

  var _useState = (0, _react.useState)({
    listOpen: false,
    formOpen: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      modals = _useState2[0],
      setModals = _useState2[1];

  var userCustomer = parseInt(window.localStorage.getItem('user-customer'));

  var handleClickAddress = function handleClickAddress(e) {
    if (auth) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
    } else {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
    }
  };

  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options, _orderState$options$a;

    if (!(orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options$a = _orderState$options.address) !== null && _orderState$options$a !== void 0 && _orderState$options$a.location)) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
      return;
    }

    setModals({
      listOpen: false,
      formOpen: false
    });
  };

  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle;

    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < document.documentElement.offsetHeight;
    var hasMore = !(paginationProps.totalPages === paginationProps.currentPage);
    if (badScrollPosition || businessesList.loading || !hasMore) return;
    getBusinesses();
  }, [businessesList, paginationProps]);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return /*#__PURE__*/_react.default.createElement(_styles.PickupBusinessContainer, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    isCustomMode: true,
    search: searchValue,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch
  }), /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapPickupButton, null, /*#__PURE__*/_react.default.createElement(_PickupOrderTypeToggleButton.PickupOrderTypeToggleButton, {
    initialOrderType: initialOrderType
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinesses, null, /*#__PURE__*/_react.default.createElement(_styles.LeftContent, null, /*#__PURE__*/_react.default.createElement(_styles.LeftInnerContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    noAutoScroll: true,
    handleChangeBusinessType: handleChangeBusinessType
  }))), /*#__PURE__*/_react.default.createElement("h1", null, t('RESTAURANTS_NEARBY', 'Restaurants Nearby')), /*#__PURE__*/_react.default.createElement(_styles.PickupBusinessList, null, !businessesList.loading && businessesList.businesses.length === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return handleClickAddress();
    }
  }, t('CHANGE_ADDRESS', 'Select other Address'))), (_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    var _orderState$options2;

    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      handleCustomClick: handleBusinessClick,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type
    });
  }), businessesList.loading && _toConsumableArray(Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 10).keys()).map(function (i) {
    var _orderState$options3;

    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type
    });
  }), businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && businessesList.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessMap, null, !businessesList.loading && !configState.loading ? /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : _orderState$options4$.location
  }) : /*#__PURE__*/_react.default.createElement(_styles.MapSkeleton, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESS_FORM', 'Address Form'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.address) || {},
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveAddress: function onSaveAddress() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESSES', 'Addresses'),
    open: modals.listOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer) ? null : userCustomer,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    onAccept: function onAccept() {
      return handleFindBusinesses();
    }
  })));
};

var PickupBusinessesListing = function PickupBusinessesListing(props) {
  var PickupBusinessesListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PickupBusinessesListingUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, PickupBusinessesListingProps);
};

exports.PickupBusinessesListing = PickupBusinessesListing;