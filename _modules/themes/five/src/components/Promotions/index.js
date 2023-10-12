"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var _utils = require("../../../../../utils");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
  var theme = (0, _styledComponents.useTheme)();
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
  var _useSite = (0, _orderingComponents.useSite)(),
    _useSite2 = _slicedToArray(_useSite, 1),
    site = _useSite2[0].site;
  var businessUrlTemplate = (0, _utils.checkSiteUrl)(site === null || site === void 0 ? void 0 : site.business_url_template, '/store/:business_slug');
  var handleClickOffer = function handleClickOffer(offer) {
    setOpenModal(true);
    setOfferSelected(offer);
  };
  var handleBusinessClick = function handleBusinessClick(business) {
    if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
      events.emit('go_to_page', {
        page: 'business',
        params: {
          business_slug: business.slug
        }
      });
    } else {
      events.emit('go_to_page', {
        page: 'business',
        search: "?".concat(businessUrlTemplate.split('?')[1].replace(':business_slug', '')).concat(business.slug)
      });
    }
  };
  var filteredOffers = offersState === null || offersState === void 0 || (_offersState$offers = offersState.offers) === null || _offersState$offers === void 0 ? void 0 : _offersState$offers.filter(function (offer) {
    var _offer$name;
    return offer === null || offer === void 0 || (_offer$name = offer.name) === null || _offer$name === void 0 || (_offer$name = _offer$name.toLowerCase()) === null || _offer$name === void 0 ? void 0 : _offer$name.includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
  });
  var targetString = (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.target) === 1 ? t('SUBTOTAL', 'Subtotal') : (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.target) === 2 ? t('DELIVERY_FEE', 'Delivery fee') : t('SERVICE_FEE', 'Service fee');
  return /*#__PURE__*/_react.default.createElement(_styles.PromotionsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PromotionTitle, null, t('PROMOTIONS', 'Promotions')), /*#__PURE__*/_react.default.createElement(_styles.SearchBarContainer, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    placeholder: t('SEARCH_PROMOTION', 'Search promotion'),
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
    var _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles.SingleOfferContainer, {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement(_styles.OfferInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
      bgimage: (offer === null || offer === void 0 ? void 0 : offer.image) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)
    }), /*#__PURE__*/_react.default.createElement(_styles.OfferInformation, null, /*#__PURE__*/_react.default.createElement("h2", null, offer === null || offer === void 0 ? void 0 : offer.name), /*#__PURE__*/_react.default.createElement(_styles.Description, null, offer === null || offer === void 0 ? void 0 : offer.description), /*#__PURE__*/_react.default.createElement(_styles.ExpiresAt, null, t('EXPIRES', 'Expires'), " ", parseDate(offer === null || offer === void 0 ? void 0 : offer.end, {
      outputFormat: 'MMM DD, YYYY'
    })), /*#__PURE__*/_react.default.createElement(_styles.AvailableBusinesses, null, /*#__PURE__*/_react.default.createElement("p", null, t('APPLY_FOR', 'Apply for'), ":"), /*#__PURE__*/_react.default.createElement("p", null, offer.businesses.map(function (business, i) {
      var _offer$businesses;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: business === null || business === void 0 ? void 0 : business.id
      }, ' ', business === null || business === void 0 ? void 0 : business.name, i + 1 < ((_offer$businesses = offer.businesses) === null || _offer$businesses === void 0 ? void 0 : _offer$businesses.length) ? ',' : '');
    }))))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleClickOffer(offer);
      }
    }, t('VIEW_OFFER', 'View offer')));
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.OfferView, null, /*#__PURE__*/_react.default.createElement("h2", null, "".concat(offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.name, " / ").concat(t('VALUE_OF_OFFER', 'Value of offer'), ": ").concat((offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.rate_type) === 1 ? "".concat(offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.rate, "%") : "".concat(parsePrice(offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.rate)))), /*#__PURE__*/_react.default.createElement(_styles.OfferData, null, (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.type) === 2 && /*#__PURE__*/_react.default.createElement(_styles.Code, null, /*#__PURE__*/_react.default.createElement("p", null, t('YOUR_CODE', 'Your code')), /*#__PURE__*/_react.default.createElement("span", null, offerSelected.coupon)), /*#__PURE__*/_react.default.createElement("p", null, t('APPLIES_TO', 'Applies to'), ": ", targetString), (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.auto) && /*#__PURE__*/_react.default.createElement("p", null, t('OFFER_AUTOMATIC', 'This offer applies automatic')), (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.minimum) && /*#__PURE__*/_react.default.createElement("p", null, t('MINIMUM_PURCHASE_FOR_OFFER', 'Minimum purshase for use this offer'), ": ", parsePrice(offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.minimum)), (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.max_discount) && /*#__PURE__*/_react.default.createElement("p", null, t('MAX_DISCOUNT_ALLOWED', 'Max discount allowed'), ": ", parsePrice(offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.max_discount)), (offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.description) && /*#__PURE__*/_react.default.createElement("p", null, offerSelected === null || offerSelected === void 0 ? void 0 : offerSelected.description)), /*#__PURE__*/_react.default.createElement("h2", null, t('AVAILABLE_BUSINESSES_FOR_OFFER', 'Available businesses for this offer')), /*#__PURE__*/_react.default.createElement("div", null, offerSelected === null || offerSelected === void 0 || (_offerSelected$busine = offerSelected.businesses) === null || _offerSelected$busine === void 0 ? void 0 : _offerSelected$busine.map(function (business) {
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
var Promotions = exports.Promotions = function Promotions(props) {
  var PromotionsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PromotionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PromotionsController, PromotionsProps);
};