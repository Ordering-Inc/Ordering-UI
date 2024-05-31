"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessController = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Confirm = require("../Confirm");
var _Buttons = require("../../styles/Buttons");
var _utils = require("../../../../../utils");
var _GrClock = _interopRequireDefault(require("@meronex/icons/gr/GrClock"));
var _GrDeliver = _interopRequireDefault(require("@meronex/icons/gr/GrDeliver"));
var _GrLocation = _interopRequireDefault(require("@meronex/icons/gr/GrLocation"));
var _BiCar = _interopRequireDefault(require("@meronex/icons/bi/BiCar"));
var _BiBasket = _interopRequireDefault(require("@meronex/icons/bi/BiBasket"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var BusinessControllerUI = function BusinessControllerUI(props) {
  var _business$ribbon, _business$ribbon2, _business$ribbon3, _business$ribbon4, _business$ribbon5, _orderState$options, _business$available_d, _business$busy_driver, _business$active_orde, _orderState$options2;
  var isSkeleton = props.isSkeleton,
    isCartStore = props.isCartStore,
    business = props.business,
    handleClick = props.handleClick,
    orderType = props.orderType,
    isCustomLayout = props.isCustomLayout,
    isShowCallcenterInformation = props.isShowCallcenterInformation,
    isBusinessOpen = props.isBusinessOpen,
    businessWillCloseSoonMinutes = props.businessWillCloseSoonMinutes,
    handleCartStoreClick = props.handleCartStoreClick;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDistance = _useUtils2$.parseDistance;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var handleShowAlert = function handleShowAlert() {
    setAlertState({
      open: true,
      content: [t('ERROR_ADD_PRODUCT_BUSINESS_CLOSED', 'The Business is closed at the moment')]
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BranchListContainer, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BranchTitle, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  })), /*#__PURE__*/_react.default.createElement(_styles.BranchContent, null, /*#__PURE__*/_react.default.createElement(_styles.BranchInfoBlock, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 250
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeList, null, _toConsumableArray(Array(4).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderType, {
      isSkeleton: isSkeleton,
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      height: 20
    }));
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 25
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderBtnWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 35
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BranchTitle, null, /*#__PURE__*/_react.default.createElement("h2", null, business === null || business === void 0 ? void 0 : business.name), (business === null || business === void 0 || (_business$ribbon = business.ribbon) === null || _business$ribbon === void 0 ? void 0 : _business$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: business === null || business === void 0 || (_business$ribbon2 = business.ribbon) === null || _business$ribbon2 === void 0 ? void 0 : _business$ribbon2.color,
    isRoundRect: (business === null || business === void 0 || (_business$ribbon3 = business.ribbon) === null || _business$ribbon3 === void 0 ? void 0 : _business$ribbon3.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (business === null || business === void 0 || (_business$ribbon4 = business.ribbon) === null || _business$ribbon4 === void 0 ? void 0 : _business$ribbon4.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, business === null || business === void 0 || (_business$ribbon5 = business.ribbon) === null || _business$ribbon5 === void 0 ? void 0 : _business$ribbon5.text)), /*#__PURE__*/_react.default.createElement(_styles.BranchContent, null, /*#__PURE__*/_react.default.createElement(_styles.BranchInfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : business.address), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeList, null, Object.keys(business).length > 0 && /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_GrClock.default, null), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? business === null || business === void 0 ? void 0 : business.delivery_time : business === null || business === void 0 ? void 0 : business.pickup_time))), (business === null || business === void 0 ? void 0 : business.distance) >= 0 && /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_GrLocation.default, null), /*#__PURE__*/_react.default.createElement("span", null, parseDistance(business === null || business === void 0 ? void 0 : business.distance))), orderType === 1 && (business === null || business === void 0 ? void 0 : business.delivery_price) >= 0 && /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_GrDeliver.default, null), /*#__PURE__*/_react.default.createElement("span", null, business && parsePrice(business === null || business === void 0 ? void 0 : business.delivery_price)))), /*#__PURE__*/_react.default.createElement(_styles.Medadata, {
    isCustomerMode: isShowCallcenterInformation
  }, isShowCallcenterInformation && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformation, null, /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "green"
  }, /*#__PURE__*/_react.default.createElement(_BiCar.default, null), business === null || business === void 0 || (_business$available_d = business.available_drivers) === null || _business$available_d === void 0 ? void 0 : _business$available_d.length), /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "red"
  }, /*#__PURE__*/_react.default.createElement(_BiCar.default, null), business === null || business === void 0 || (_business$busy_driver = business.busy_drivers) === null || _business$busy_driver === void 0 ? void 0 : _business$busy_driver.length), /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "rgb(252,225,5)"
  }, /*#__PURE__*/_react.default.createElement(_BiBasket.default, null), business === null || business === void 0 || (_business$active_orde = business.active_orders) === null || _business$active_orde === void 0 ? void 0 : _business$active_orde.length))), !!businessWillCloseSoonMinutes && (orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.moment) === null && isBusinessOpen && /*#__PURE__*/_react.default.createElement("h1", null, businessWillCloseSoonMinutes, " ", t('MINUTES_TO_CLOSE', 'minutes to close'))), /*#__PURE__*/_react.default.createElement(_styles.OrderBtnWrapper, null, !isCartStore && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return !isSkeleton && handleClick && (!isBusinessOpen && isCustomLayout ? handleShowAlert() : handleClick(business));
    }
  }, t('START_ORDER', 'Start order')), isCartStore && handleCartStoreClick && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    disabled: props.disabledStoreBtn,
    color: "primary",
    onClick: function onClick() {
      return handleCartStoreClick(business.id);
    }
  }, t('SELECT', 'Select')))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  }));
};
var BusinessController = exports.BusinessController = function BusinessController(props) {
  var businessControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessControllerUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessController, businessControllerProps);
};