"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BranchTitle, null, /*#__PURE__*/_react.default.createElement("h2", null, business === null || business === void 0 ? void 0 : business.name), (business === null || business === void 0 ? void 0 : (_business$ribbon = business.ribbon) === null || _business$ribbon === void 0 ? void 0 : _business$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: business === null || business === void 0 ? void 0 : (_business$ribbon2 = business.ribbon) === null || _business$ribbon2 === void 0 ? void 0 : _business$ribbon2.color,
    isRoundRect: (business === null || business === void 0 ? void 0 : (_business$ribbon3 = business.ribbon) === null || _business$ribbon3 === void 0 ? void 0 : _business$ribbon3.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (business === null || business === void 0 ? void 0 : (_business$ribbon4 = business.ribbon) === null || _business$ribbon4 === void 0 ? void 0 : _business$ribbon4.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, business === null || business === void 0 ? void 0 : (_business$ribbon5 = business.ribbon) === null || _business$ribbon5 === void 0 ? void 0 : _business$ribbon5.text)), /*#__PURE__*/_react.default.createElement(_styles.BranchContent, null, /*#__PURE__*/_react.default.createElement(_styles.BranchInfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : business.address), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeList, null, Object.keys(business).length > 0 && /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_GrClock.default, null), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.convertHoursToMinutes)((orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? business === null || business === void 0 ? void 0 : business.delivery_time : business === null || business === void 0 ? void 0 : business.pickup_time))), (business === null || business === void 0 ? void 0 : business.distance) >= 0 && /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_GrLocation.default, null), /*#__PURE__*/_react.default.createElement("span", null, parseDistance(business === null || business === void 0 ? void 0 : business.distance))), orderType === 1 && (business === null || business === void 0 ? void 0 : business.delivery_price) >= 0 && /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_GrDeliver.default, null), /*#__PURE__*/_react.default.createElement("span", null, business && parsePrice(business === null || business === void 0 ? void 0 : business.delivery_price)))), /*#__PURE__*/_react.default.createElement(_styles.Medadata, {
    isCustomerMode: isShowCallcenterInformation
  }, isShowCallcenterInformation && /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformation, null, /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "green"
  }, /*#__PURE__*/_react.default.createElement(_BiCar.default, null), business === null || business === void 0 ? void 0 : (_business$available_d = business.available_drivers) === null || _business$available_d === void 0 ? void 0 : _business$available_d.length), /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "red"
  }, /*#__PURE__*/_react.default.createElement(_BiCar.default, null), business === null || business === void 0 ? void 0 : (_business$busy_driver = business.busy_drivers) === null || _business$busy_driver === void 0 ? void 0 : _business$busy_driver.length), /*#__PURE__*/_react.default.createElement(_styles.CallCenterInformationBullet, {
    bgcolor: "rgb(252,225,5)"
  }, /*#__PURE__*/_react.default.createElement(_BiBasket.default, null), business === null || business === void 0 ? void 0 : (_business$active_orde = business.active_orders) === null || _business$active_orde === void 0 ? void 0 : _business$active_orde.length))), !!businessWillCloseSoonMinutes && (orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.moment) === null && isBusinessOpen && /*#__PURE__*/_react.default.createElement("h1", null, businessWillCloseSoonMinutes, " ", t('MINUTES_TO_CLOSE', 'minutes to close'))), /*#__PURE__*/_react.default.createElement(_styles.OrderBtnWrapper, null, !isCartStore && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
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

var BusinessController = function BusinessController(props) {
  var businessControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessControllerUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessController, businessControllerProps);
};

exports.BusinessController = BusinessController;