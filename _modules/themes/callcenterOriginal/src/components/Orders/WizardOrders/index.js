"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WizardOrders = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _reactour = _interopRequireDefault(require("reactour"));
var _bodyScrollLock = require("body-scroll-lock");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var WizardOrders = function WizardOrders(props) {
  var isTourOpen = props.isTourOpen,
    setIsTourOpen = props.setIsTourOpen,
    currentStep = props.currentStep,
    detailsOrder = props.detailsOrder;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var tourSteps = [{
    selector: '[data-tour="tour_start"]',
    content: function content(goTo) {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "1."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_ORDER_START', 'Lets see your trial, we will guide you step by step.')));
    },
    position: 'bottom'
  }, {
    selector: '[data-tour="tour_detail"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "2."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_ORDER_DETAIL', 'Then, you can see all the order details.')));
    },
    position: 'left'
  }, {
    selector: '[data-tour="tour_driver"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, "3."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_ASSIGN_DRIVER', 'Assign a driver for your delivery order')));
    },
    position: 'left'
  }, {
    selector: '[data-tour="tour_message"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement("span", null, (detailsOrder === null || detailsOrder === void 0 ? void 0 : detailsOrder.delivery_type) === 1 ? 4 : 3, "."), /*#__PURE__*/_react.default.createElement("p", null, t('TOUR_ORDER_CHAT', 'Finally, you can use the order chat to communicate with customer or driver')));
    },
    position: 'left'
  }, {
    selector: '[data-tour="tour_start"]',
    content: function content() {
      return /*#__PURE__*/_react.default.createElement(_styles.HelperContent, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Stars, null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", null, t('THATS_IT', 'THAT’S IT'), "!!"), " ", t('TOUR_ORDER_COMPLETED', 'Now, you can see all your order that your store receive')));
    },
    position: 'center'
  }];
  return /*#__PURE__*/_react.default.createElement(_reactour.default, {
    steps: tourSteps,
    isOpen: isTourOpen,
    onRequestClose: function onRequestClose() {
      return setIsTourOpen(false);
    },
    maskClassName: "mask",
    className: "helper",
    rounded: 8,
    onAfterOpen: function onAfterOpen(target) {
      return (0, _bodyScrollLock.disableBodyScroll)(target);
    },
    onBeforeClose: function onBeforeClose(target) {
      return (0, _bodyScrollLock.enableBodyScroll)(target);
    },
    showNavigation: false,
    showCloseButton: false,
    disableFocusLock: true,
    startAt: currentStep,
    goToStep: currentStep,
    disableKeyboardNavigation: true
  });
};
exports.WizardOrders = WizardOrders;