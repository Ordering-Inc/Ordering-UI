"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Promotions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _SearchBar = require("../SearchBar");

var _Buttons = require("../../styles/Buttons");

var _Modal = require("../Modal");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _NotFoundSource = require("../NotFoundSource");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var PromotionsUI = function PromotionsUI(props) {
  var _offersState$offers, _offersState$offers2, _offerSelected$busine;

  var offersState = props.offersState,
      handleSearchValue = props.handleSearchValue,
      searchValue = props.searchValue,
      offerSelected = props.offerSelected,
      setOfferSelected = props.setOfferSelected;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parseDate = _useUtils2$.parseDate,
      parsePrice = _useUtils2$.parsePrice;

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var handleClickOffer = function handleClickOffer(offer) {
    setOpenModal(true);
    setOfferSelected(offer);
  };

  var handleBusinessClick = function handleBusinessClick(business) {
    events.emit('go_to_page', {
      page: 'business',
      params: {
        store: business.slug
      }
    });
  };

  var filteredOffers = offersState === null || offersState === void 0 ? void 0 : (_offersState$offers = offersState.offers) === null || _offersState$offers === void 0 ? void 0 : _offersState$offers.filter(function (offer) {
    return offer.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  var targetString = (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.target) === 1 ? t('SUBTOTAL', 'Subtotal') : (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.target) === 2 ? t('DELIVERY_FEE', 'Delivery fee') : t('SERVICE_FEE', 'Service fee');
  return /*#__PURE__*/_react.default.createElement(_styles.PromotionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PromotionTitle, null, t('PROMOTIONS', 'Promotions')), /*#__PURE__*/_react.default.createElement(_styles.SearchBarContainer, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    placeholder: t('SEARCH_OFFERS', 'Search offers'),
    onSearch: handleSearchValue
  })), (offersState === null || offersState === void 0 ? void 0 : offersState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5).keys()).map(function (key, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SingleOfferContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.OfferInformation, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 20,
      width: 150
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 15,
      width: 225
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 15,
      width: 380
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 44,
      width: 110
    }));
  })), (!(offersState !== null && offersState !== void 0 && offersState.loading) && (filteredOffers === null || filteredOffers === void 0 ? void 0 : filteredOffers.length) === 0 || (offersState === null || offersState === void 0 ? void 0 : offersState.error)) && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: (offersState === null || offersState === void 0 ? void 0 : offersState.error) || t('NOT_FOUND_OFFERS', 'Not found offers')
  }), !(offersState !== null && offersState !== void 0 && offersState.loading) && ((_offersState$offers2 = offersState.offers) === null || _offersState$offers2 === void 0 ? void 0 : _offersState$offers2.length) > 0 && (filteredOffers === null || filteredOffers === void 0 ? void 0 : filteredOffers.map(function (offer) {
    return /*#__PURE__*/_react.default.createElement(_styles.SingleOfferContainer, {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement(_styles.OfferInformation, null, /*#__PURE__*/_react.default.createElement("h2", null, offer === null || offer === void 0 ? void 0 : offer.name), /*#__PURE__*/_react.default.createElement(_styles.Description, null, offer === null || offer === void 0 ? void 0 : offer.description), /*#__PURE__*/_react.default.createElement(_styles.ExpiresAt, null, t('EXPIRES', 'Expires'), " ", parseDate(offer === null || offer === void 0 ? void 0 : offer.end, {
      outputFormat: 'MMM DD, YYYY'
    })), /*#__PURE__*/_react.default.createElement(_styles.AvailableBusinesses, null, /*#__PURE__*/_react.default.createElement("p", null, t('APPLY_FOR', 'Apply for'), ":"), offer.businesses.map(function (business, i) {
      var _offer$businesses;

      return /*#__PURE__*/_react.default.createElement("p", {
        key: business === null || business === void 0 ? void 0 : business.id
      }, ' ', business === null || business === void 0 ? void 0 : business.name, i + 1 < ((_offer$businesses = offer.businesses) === null || _offer$businesses === void 0 ? void 0 : _offer$businesses.length) ? ',' : '');
    }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleClickOffer(offer);
      }
    }, t('VIEW_OFFER', 'View offer')));
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    title: "".concat(offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.name, " / ").concat(t('VALUE_OF_OFFER', 'Value of offer'), ": ").concat((offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.rate_type) === 1 ? "".concat(offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.rate, "%") : "".concat(parsePrice(offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.rate)))
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.OfferData, null, (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.type) === 2 && /*#__PURE__*/_react.default.createElement(_styles.Code, null, /*#__PURE__*/_react.default.createElement("p", null, t('YOUR_CODE', 'Your code')), /*#__PURE__*/_react.default.createElement("span", null, offerSelected.coupon)), /*#__PURE__*/_react.default.createElement("p", null, t('APPLIES_TO', 'Applies to'), ": ", targetString), (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.auto) && /*#__PURE__*/_react.default.createElement("p", null, t('OFFER_AUTOMATIC', 'This offer applies automatic')), (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.minimum) && /*#__PURE__*/_react.default.createElement("p", null, t('MINIMUM_PURCHASE_FOR_OFFER', 'Minimum purshase for use this offer'), ": ", parsePrice(offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.minimum)), (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.max_discount) && /*#__PURE__*/_react.default.createElement("p", null, t('MAX_DISCOUNT_ALLOWED', 'Max discount allowed'), ": ", parsePrice(offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.max_discount)), (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.description) && /*#__PURE__*/_react.default.createElement("p", null, offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.description)), /*#__PURE__*/_react.default.createElement("h2", null, t('AVAILABLE_BUSINESSES_FOR_OFFER', 'Available businesses for this offer')), /*#__PURE__*/_react.default.createElement("div", null, offerSelected === null || offerSelected === void 0 ? void 0 : (_offerSelected$busine = offerSelected.businesses) === null || _offerSelected$busine === void 0 ? void 0 : _offerSelected$busine.map(function (business) {
    return /*#__PURE__*/_react.default.createElement(_styles.SingleBusinessOffer, {
      key: business.id
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
      bgimage: business === null || business === void 0 ? void 0 : business.logo
    }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("p", null, business.name), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      onClick: function onClick() {
        return handleBusinessClick(business);
      },
      color: "primary"
    }, t('GO_TO_BUSINESSS', 'Go to business'))));
  })))));
};

var Promotions = function Promotions(props) {
  var PromotionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PromotionsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PromotionsController, PromotionsProps);
};

exports.Promotions = Promotions;