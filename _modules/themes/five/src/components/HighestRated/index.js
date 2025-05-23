"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighestRated = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _BusinessController = require("../BusinessController");
var _Buttons = require("../../styles/Buttons");
var _NotFoundSource = require("../NotFoundSource");
var _styles = require("./styles");
var _AutoScroll = require("../AutoScroll");
var _Modal = _interopRequireDefault(require("../Modal"));
var _BusinessPreorder = require("../BusinessPreorder");
var _utils = require("../../../../../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var HighestRatedUI = function HighestRatedUI(props) {
  var _businessesList$busin, _orderState$options, _orderState$options2, _businessesList$busin3, _props$beforeElements, _props$beforeComponen, _businessesList$busin4, _props$afterComponent, _props$afterElements;
  var businessesList = props.businessesList,
    handleBusinessClick = props.handleBusinessClick,
    isCustomLayout = props.isCustomLayout,
    handleClickAddress = props.handleClickAddress,
    setHasHighRatedBusiness = props.setHasHighRatedBusiness,
    isCustomerMode = props.isCustomerMode,
    favoriteIds = props.favoriteIds,
    setFavoriteIds = props.setFavoriteIds;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPreorder = _useState2[0],
    setIsPreorder = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    preorderBusiness = _useState4[0],
    setPreorderBusiness = _useState4[1];
  var isBusinessWithReviews = businessesList === null || businessesList === void 0 || (_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.every(function (business) {
    var _business$reviews;
    return (business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) === 0;
  });
  var cateringTypeString = (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 7 ? 'catering_delivery' : (orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 8 ? 'catering_pickup' : null;
  var cateringValues = (preorderBusiness === null || preorderBusiness === void 0 ? void 0 : preorderBusiness.configs) && (0, _utils.getCateringValues)(cateringTypeString, preorderBusiness === null || preorderBusiness === void 0 ? void 0 : preorderBusiness.configs);
  var handleClosePreorder = function handleClosePreorder() {
    setIsPreorder(false);
    setPreorderBusiness(null);
  };
  (0, _react.useEffect)(function () {
    if (preorderBusiness) setIsPreorder(true);
  }, [preorderBusiness]);
  (0, _react.useEffect)(function () {
    if (!businessesList.loading) {
      setHasHighRatedBusiness(!isBusinessWithReviews);
    }
  }, [businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses]);
  (0, _react.useEffect)(function () {
    var _businessesList$busin2;
    if (!(businessesList !== null && businessesList !== void 0 && (_businessesList$busin2 = businessesList.businesses) !== null && _businessesList$busin2 !== void 0 && _businessesList$busin2.length)) return;
    var ids = _toConsumableArray(favoriteIds !== null && favoriteIds !== void 0 ? favoriteIds : []);
    businessesList.businesses.forEach(function (business) {
      if (business !== null && business !== void 0 && business.favorite) {
        ids.push(business.id);
      }
    });
    setFavoriteIds && setFavoriteIds(_toConsumableArray(new Set(ids)));
  }, [businessesList === null || businessesList === void 0 || (_businessesList$busin3 = businessesList.businesses) === null || _businessesList$busin3 === void 0 ? void 0 : _businessesList$busin3.length]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HighestRatedContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('HIGHEST_RATED', 'Highest rated')), /*#__PURE__*/_react.default.createElement(_styles.Description, null, t('TOP_RATINGS_AND_GREAT_SERVICE', 'Top ratings and great service')), /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, !isCustomerMode && !businessesList.loading && (businessesList.businesses.length === 0 || isBusinessWithReviews) && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESSES_HIGHEST_RATED', 'No highest rated businesses found, please change filters or change address.')
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return handleClickAddress();
    }
  }, t('CHANGE_ADDRESS', 'Select other Address'))), /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "highestRated"
  }, !(businessesList !== null && businessesList !== void 0 && businessesList.loading) && (businessesList === null || businessesList === void 0 || (_businessesList$busin4 = businessesList.businesses) === null || _businessesList$busin4 === void 0 ? void 0 : _businessesList$busin4.map(function (business) {
    var _business$reviews2, _orderState$options3;
    return (business === null || business === void 0 || (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total) > 0 && /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open && (business === null || business === void 0 ? void 0 : business.enabled) !== false,
      handleCustomClick: handleBusinessClick,
      orderType: orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type,
      isCustomLayout: isCustomLayout,
      isCustomerMode: isCustomerMode,
      favoriteIds: favoriteIds,
      setFavoriteIds: setFavoriteIds,
      onPreorderBusiness: setPreorderBusiness
    });
  }))), businessesList.loading && _toConsumableArray(Array(8).keys()).map(function (i) {
    var _orderState$options4;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type
    });
  }), businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && businessesList.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  })))), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: isPreorder,
    width: "760px",
    onClose: function onClose() {
      return handleClosePreorder();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, _extends({
    business: preorderBusiness,
    handleClick: handleBusinessClick,
    showButton: true,
    cateringPreorder: !!cateringTypeString
  }, cateringValues))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var HighestRated = exports.HighestRated = function HighestRated(props) {
  var highestRatedProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: HighestRatedUI,
    initialOrderByValue: 'rating'
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, highestRatedProps);
};