"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _FiPhone = _interopRequireDefault(require("@meronex/icons/fi/FiPhone"));
var _FaUserCircle = _interopRequireDefault(require("@meronex/icons/fa/FaUserCircle"));
var _HiOutlineChat = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineChat"));
var _BiCaretUp = _interopRequireDefault(require("@meronex/icons/bi/BiCaretUp"));
var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));
var _BiStoreAlt = _interopRequireDefault(require("@meronex/icons/bi/BiStoreAlt"));
var _AiFillExclamationCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillExclamationCircle"));
var _BsArrowLeft = _interopRequireDefault(require("@meronex/icons/bs/BsArrowLeft"));
var _AiOutlineExclamationCircle = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineExclamationCircle"));
var _Buttons = require("../../styles/Buttons");
var _NotFoundSource = require("../NotFoundSource");
var _ProductItemAccordion = require("../ProductItemAccordion");
var _Modal = require("../Modal");
var _Messages = require("../Messages");
var _ProductShare = require("../ProductShare");
var _ReviewOrder = require("../ReviewOrder");
var _ReviewProduct = require("../ReviewProduct");
var _ReviewDriver = require("../ReviewDriver");
var _OrderSuccessModal = require("../OrderSuccessModal");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
var _utils = require("../../utils");
var _TaxInformation = require("../TaxInformation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderDetailsUI = function OrderDetailsUI(props) {
  var _theme$confirmation, _theme$confirmation$c, _theme$confirmation$c2, _theme$confirmation$c3, _theme$confirmation$c4, _theme$confirmation2, _theme$confirmation2$, _theme$confirmation2$2, _theme$confirmation2$3, _theme$confirmation2$4, _theme$confirmation3, _theme$confirmation3$, _theme$confirmation3$2, _theme$confirmation3$3, _theme$confirmation3$4, _theme$confirmation4, _theme$confirmation4$, _theme$confirmation4$2, _theme$confirmation4$3, _theme$confirmation4$4, _theme$confirmation5, _theme$confirmation5$, _theme$confirmation5$2, _theme$confirmation5$3, _theme$confirmation5$4, _theme$confirmation6, _theme$confirmation6$, _theme$confirmation6$2, _theme$confirmation6$3, _theme$confirmation6$4, _theme$confirmation7, _theme$confirmation7$, _theme$confirmation7$2, _theme$confirmation7$3, _theme$confirmation7$4, _theme$confirmation8, _theme$confirmation8$, _theme$confirmation8$2, _theme$confirmation8$3, _theme$confirmation8$4, _theme$confirmation9, _theme$confirmation9$, _theme$confirmation9$2, _theme$confirmation9$3, _theme$confirmation9$4, _theme$confirmation10, _theme$confirmation11, _theme$confirmation12, _theme$confirmation13, _theme$confirmation14, _theme$confirmation15, _theme$confirmation16, _theme$confirmation17, _theme$confirmation18, _theme$confirmation19, _theme$confirmation20, _theme$confirmation21, _theme$confirmation22, _theme$confirmation23, _theme$confirmation24, _theme$confirmation25, _theme$confirmation26, _theme$confirmation27, _theme$confirmation28, _theme$confirmation29, _order$driver, _order$driver2, _theme$images2, _theme$images2$dummie, _order$business, _order$business2, _theme$images3, _theme$images3$dummie, _order$customer, _order$customer2, _theme$images4, _theme$images4$dummie, _props$beforeElements, _props$beforeComponen, _theme$defaultLanguag25, _theme$defaultLanguag26, _order$business3, _theme$images5, _theme$images5$dummie, _order$business4, _order$business5, _order$business6, _order$business7, _theme$defaultLanguag27, _theme$defaultLanguag28, _getOrderStatus, _getOrderStatus2, _theme$defaultLanguag29, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$delivery_optio, _order$delivery_optio2, _order$delivery_optio3, _configs$guest_uuid_a, _theme$defaultLanguag30, _theme$defaultLanguag31, _theme$defaultLanguag32, _order$driver3, _configs$google_maps_, _order$driver4, _theme$defaultLanguag33, _order$driver5, _order$driver6, _order$driver7, _order$driver8, _theme$defaultLanguag34, _order$driver9, _theme$defaultLanguag35, _order$products, _theme$defaultLanguag36, _order$summary$subtot, _order$summary2, _ref, _order$summary3, _order$offers, _theme$defaultLanguag37, _theme$defaultLanguag38, _order$summary$discou, _order$summary4, _order$offers2, _order$offers3, _order$offers3$filter, _order$summary5, _order$summary6, _order$summary7, _ref2, _order$summary8, _order$summary$subtot2, _order$summary9, _order$taxes3, _order$summary$tax2, _order$summary10, _order$fees, _order$summary$servic, _order$summary11, _order$taxes4, _order$taxes5, _order$fees2, _order$fees3, _order$fees3$filter, _order$offers4, _order$offers5, _order$offers5$filter, _order$summary12, _theme$defaultLanguag39, _order$summary13, _order$offers6, _order$offers7, _order$offers7$filter, _order$summary14, _theme$defaultLanguag40, _order$summary15, _configs$driver_tip_t, _configs$driver_tip_u, _order$summary$driver, _order$summary16, _theme$defaultLanguag41, _order$summary$total, _order$summary17, _theme$defaultLanguag42, _theme$defaultLanguag43, _theme$defaultLanguag44, _theme$defaultLanguag45, _theme$defaultLanguag46, _openTaxModal$data, _openTaxModal$data2, _openTaxModal$data3, _openTaxModal$data4, _openTaxModal$data$fi, _openTaxModal$data5, _openTaxModal$data6, _props$afterComponent, _props$afterElements;
  var userCustomerId = props.userCustomerId,
    handleBusinessRedirect = props.handleBusinessRedirect,
    handleOrderRedirect = props.handleOrderRedirect,
    googleMapsControls = props.googleMapsControls,
    driverLocation = props.driverLocation,
    urlToShare = props.urlToShare,
    messages = props.messages,
    setMessages = props.setMessages,
    readMessages = props.readMessages,
    messagesReadList = props.messagesReadList,
    isCustomerMode = props.isCustomerMode;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseNumber = _useUtils2$.parseNumber,
    parseDate = _useUtils2$.parseDate;
  var _useState = (0, _react.useState)({
      business: false,
      driver: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    openMessages = _useState2[0],
    setOpenMessages = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isReviewOpen = _useState4[0],
    setIsReviewOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOrderReviewed = _useState6[0],
    setIsOrderReviewed = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isProductReviewed = _useState8[0],
    setIsProductReviewed = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isDriverReviewed = _useState10[0],
    setIsDriverReviewed = _useState10[1];
  var _useState11 = (0, _react.useState)({
      order: false,
      product: false,
      driver: false
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    reviewStatus = _useState12[0],
    setReviewStatus = _useState12[1];
  var _useState13 = (0, _react.useState)({
      business: false,
      driver: false
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    unreadAlert = _useState14[0],
    setUnreadAlert = _useState14[1];
  var _useState15 = (0, _react.useState)(true),
    _useState16 = _slicedToArray(_useState15, 2),
    openSuccessModal = _useState16[0],
    setOpenSuccessModal = _useState16[1];
  var _useState17 = (0, _react.useState)({
      open: false,
      tax: null,
      type: ''
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    openTaxModal = _useState18[0],
    setOpenTaxModal = _useState18[1];
  var _props$order = props.order,
    order = _props$order.order,
    loading = _props$order.loading,
    businessData = _props$order.businessData,
    error = _props$order.error;
  var isFromCheckPage = JSON.parse(window.localStorage.getItem('business-address'));
  var showDeliveryDate = !(theme !== null && theme !== void 0 && (_theme$confirmation = theme.confirmation) !== null && _theme$confirmation !== void 0 && (_theme$confirmation$c = _theme$confirmation.components) !== null && _theme$confirmation$c !== void 0 && (_theme$confirmation$c2 = _theme$confirmation$c.order) !== null && _theme$confirmation$c2 !== void 0 && (_theme$confirmation$c3 = _theme$confirmation$c2.components) !== null && _theme$confirmation$c3 !== void 0 && (_theme$confirmation$c4 = _theme$confirmation$c3.date) !== null && _theme$confirmation$c4 !== void 0 && _theme$confirmation$c4.hidden);
  var showDeliveryProgress = !(theme !== null && theme !== void 0 && (_theme$confirmation2 = theme.confirmation) !== null && _theme$confirmation2 !== void 0 && (_theme$confirmation2$ = _theme$confirmation2.components) !== null && _theme$confirmation2$ !== void 0 && (_theme$confirmation2$2 = _theme$confirmation2$.order) !== null && _theme$confirmation2$2 !== void 0 && (_theme$confirmation2$3 = _theme$confirmation2$2.components) !== null && _theme$confirmation2$3 !== void 0 && (_theme$confirmation2$4 = _theme$confirmation2$3.progress) !== null && _theme$confirmation2$4 !== void 0 && _theme$confirmation2$4.hidden);
  var showBusinessMessages = !(theme !== null && theme !== void 0 && (_theme$confirmation3 = theme.confirmation) !== null && _theme$confirmation3 !== void 0 && (_theme$confirmation3$ = _theme$confirmation3.components) !== null && _theme$confirmation3$ !== void 0 && (_theme$confirmation3$2 = _theme$confirmation3$.business) !== null && _theme$confirmation3$2 !== void 0 && (_theme$confirmation3$3 = _theme$confirmation3$2.components) !== null && _theme$confirmation3$3 !== void 0 && (_theme$confirmation3$4 = _theme$confirmation3$3.messages) !== null && _theme$confirmation3$4 !== void 0 && _theme$confirmation3$4.hidden);
  var showBusinessAddress = !(theme !== null && theme !== void 0 && (_theme$confirmation4 = theme.confirmation) !== null && _theme$confirmation4 !== void 0 && (_theme$confirmation4$ = _theme$confirmation4.components) !== null && _theme$confirmation4$ !== void 0 && (_theme$confirmation4$2 = _theme$confirmation4$.business) !== null && _theme$confirmation4$2 !== void 0 && (_theme$confirmation4$3 = _theme$confirmation4$2.components) !== null && _theme$confirmation4$3 !== void 0 && (_theme$confirmation4$4 = _theme$confirmation4$3.address) !== null && _theme$confirmation4$4 !== void 0 && _theme$confirmation4$4.hidden);
  var showBusinessMap = !(theme !== null && theme !== void 0 && (_theme$confirmation5 = theme.confirmation) !== null && _theme$confirmation5 !== void 0 && (_theme$confirmation5$ = _theme$confirmation5.components) !== null && _theme$confirmation5$ !== void 0 && (_theme$confirmation5$2 = _theme$confirmation5$.business) !== null && _theme$confirmation5$2 !== void 0 && (_theme$confirmation5$3 = _theme$confirmation5$2.components) !== null && _theme$confirmation5$3 !== void 0 && (_theme$confirmation5$4 = _theme$confirmation5$3.map) !== null && _theme$confirmation5$4 !== void 0 && _theme$confirmation5$4.hidden);
  var showBusinessLogo = !(theme !== null && theme !== void 0 && (_theme$confirmation6 = theme.confirmation) !== null && _theme$confirmation6 !== void 0 && (_theme$confirmation6$ = _theme$confirmation6.components) !== null && _theme$confirmation6$ !== void 0 && (_theme$confirmation6$2 = _theme$confirmation6$.business) !== null && _theme$confirmation6$2 !== void 0 && (_theme$confirmation6$3 = _theme$confirmation6$2.components) !== null && _theme$confirmation6$3 !== void 0 && (_theme$confirmation6$4 = _theme$confirmation6$3.logo) !== null && _theme$confirmation6$4 !== void 0 && _theme$confirmation6$4.hidden);
  var showDriverName = !(theme !== null && theme !== void 0 && (_theme$confirmation7 = theme.confirmation) !== null && _theme$confirmation7 !== void 0 && (_theme$confirmation7$ = _theme$confirmation7.components) !== null && _theme$confirmation7$ !== void 0 && (_theme$confirmation7$2 = _theme$confirmation7$.driver) !== null && _theme$confirmation7$2 !== void 0 && (_theme$confirmation7$3 = _theme$confirmation7$2.components) !== null && _theme$confirmation7$3 !== void 0 && (_theme$confirmation7$4 = _theme$confirmation7$3.name) !== null && _theme$confirmation7$4 !== void 0 && _theme$confirmation7$4.hidden);
  var showDriverPhone = !(theme !== null && theme !== void 0 && (_theme$confirmation8 = theme.confirmation) !== null && _theme$confirmation8 !== void 0 && (_theme$confirmation8$ = _theme$confirmation8.components) !== null && _theme$confirmation8$ !== void 0 && (_theme$confirmation8$2 = _theme$confirmation8$.driver) !== null && _theme$confirmation8$2 !== void 0 && (_theme$confirmation8$3 = _theme$confirmation8$2.components) !== null && _theme$confirmation8$3 !== void 0 && (_theme$confirmation8$4 = _theme$confirmation8$3.phone) !== null && _theme$confirmation8$4 !== void 0 && _theme$confirmation8$4.hidden);
  var showDriverMessages = !(theme !== null && theme !== void 0 && (_theme$confirmation9 = theme.confirmation) !== null && _theme$confirmation9 !== void 0 && (_theme$confirmation9$ = _theme$confirmation9.components) !== null && _theme$confirmation9$ !== void 0 && (_theme$confirmation9$2 = _theme$confirmation9$.driver) !== null && _theme$confirmation9$2 !== void 0 && (_theme$confirmation9$3 = _theme$confirmation9$2.components) !== null && _theme$confirmation9$3 !== void 0 && (_theme$confirmation9$4 = _theme$confirmation9$3.messages) !== null && _theme$confirmation9$4 !== void 0 && _theme$confirmation9$4.hidden);
  var showDriverEmail = !(theme !== null && theme !== void 0 && (_theme$confirmation10 = theme.confirmation) !== null && _theme$confirmation10 !== void 0 && (_theme$confirmation11 = _theme$confirmation10.components) !== null && _theme$confirmation11 !== void 0 && (_theme$confirmation12 = _theme$confirmation11.driver) !== null && _theme$confirmation12 !== void 0 && (_theme$confirmation13 = _theme$confirmation12.components) !== null && _theme$confirmation13 !== void 0 && (_theme$confirmation14 = _theme$confirmation13.email) !== null && _theme$confirmation14 !== void 0 && _theme$confirmation14.hidden);
  var showDriverPhoto = !(theme !== null && theme !== void 0 && (_theme$confirmation15 = theme.confirmation) !== null && _theme$confirmation15 !== void 0 && (_theme$confirmation16 = _theme$confirmation15.components) !== null && _theme$confirmation16 !== void 0 && (_theme$confirmation17 = _theme$confirmation16.driver) !== null && _theme$confirmation17 !== void 0 && (_theme$confirmation18 = _theme$confirmation17.components) !== null && _theme$confirmation18 !== void 0 && (_theme$confirmation19 = _theme$confirmation18.photo) !== null && _theme$confirmation19 !== void 0 && _theme$confirmation19.hidden);
  var showCustomerAddress = !(theme !== null && theme !== void 0 && (_theme$confirmation20 = theme.confirmation) !== null && _theme$confirmation20 !== void 0 && (_theme$confirmation21 = _theme$confirmation20.components) !== null && _theme$confirmation21 !== void 0 && (_theme$confirmation22 = _theme$confirmation21.customer) !== null && _theme$confirmation22 !== void 0 && (_theme$confirmation23 = _theme$confirmation22.components) !== null && _theme$confirmation23 !== void 0 && (_theme$confirmation24 = _theme$confirmation23.address) !== null && _theme$confirmation24 !== void 0 && _theme$confirmation24.hidden);
  var showCustomerPhoto = !(theme !== null && theme !== void 0 && (_theme$confirmation25 = theme.confirmation) !== null && _theme$confirmation25 !== void 0 && (_theme$confirmation26 = _theme$confirmation25.components) !== null && _theme$confirmation26 !== void 0 && (_theme$confirmation27 = _theme$confirmation26.customer) !== null && _theme$confirmation27 !== void 0 && (_theme$confirmation28 = _theme$confirmation27.components) !== null && _theme$confirmation28 !== void 0 && (_theme$confirmation29 = _theme$confirmation28.photo) !== null && _theme$confirmation29 !== void 0 && _theme$confirmation29.hidden);
  var getOrderStatus = function getOrderStatus(s) {
    var _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _theme$defaultLanguag16, _theme$defaultLanguag17, _theme$defaultLanguag18, _theme$defaultLanguag19, _theme$defaultLanguag20, _theme$defaultLanguag21, _theme$defaultLanguag22, _theme$defaultLanguag23, _theme$defaultLanguag24;
    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.PENDING) || 'Pending'),
      slug: 'PENDING',
      percentage: 25
    }, {
      key: 1,
      value: t('COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.COMPLETED) || 'Completed'),
      slug: 'COMPLETED',
      percentage: 100
    }, {
      key: 2,
      value: t('REJECTED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.REJECTED) || 'Rejected'),
      slug: 'REJECTED',
      percentage: 0
    }, {
      key: 3,
      value: t('DRIVER_IN_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.DRIVER_IN_BUSINESS) || 'Driver in business'),
      slug: 'DRIVER_IN_BUSINESS',
      percentage: 60
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.PREPARATION_COMPLETED) || 'Preparation Completed'),
      slug: 'PREPARATION_COMPLETED',
      percentage: 70
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.REJECTED_BY_BUSINESS) || 'Rejected by business'),
      slug: 'REJECTED_BY_BUSINESS',
      percentage: 0
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.REJECTED_BY_DRIVER) || 'Rejected by Driver'),
      slug: 'REJECTED_BY_DRIVER',
      percentage: 0
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.ACCEPTED_BY_BUSINESS) || 'Accepted by business'),
      slug: 'ACCEPTED_BY_BUSINESS',
      percentage: 35
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ACCEPTED_BY_DRIVER) || 'Accepted by driver'),
      slug: 'ACCEPTED_BY_DRIVER',
      percentage: 45
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.PICK_UP_COMPLETED_BY_DRIVER) || 'Pick up completed by driver'),
      slug: 'PICK_UP_COMPLETED_BY_DRIVER',
      percentage: 80
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.PICK_UP_FAILED_BY_DRIVER) || 'Pick up Failed by driver'),
      slug: 'PICK_UP_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.DELIVERY_COMPLETED_BY_DRIVER) || 'Delivery completed by driver'),
      slug: 'DELIVERY_COMPLETED_BY_DRIVER',
      percentage: 100
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.DELIVERY_FAILED_BY_DRIVER) || 'Delivery Failed by driver'),
      slug: 'DELIVERY_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 13,
      value: t('PREORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.PREORDER) || 'PreOrder'),
      slug: 'PREORDER',
      percentage: 0
    }, {
      key: 14,
      value: t('ORDER_NOT_READY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.ORDER_NOT_READY) || 'Order not ready'),
      slug: 'ORDER_NOT_READY',
      percentage: 65
    }, {
      key: 15,
      value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER) || 'Order picked up completed by customer'),
      slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER',
      percentage: 100
    }, {
      key: 16,
      value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag17 = theme.defaultLanguages) === null || _theme$defaultLanguag17 === void 0 ? void 0 : _theme$defaultLanguag17.ORDER_STATUS_CANCELLED_BY_CUSTOMER) || 'Order cancelled by customer'),
      slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 17,
      value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag18 = theme.defaultLanguages) === null || _theme$defaultLanguag18 === void 0 ? void 0 : _theme$defaultLanguag18.ORDER_NOT_PICKEDUP_BY_CUSTOMER) || 'Order not picked up by customer'),
      slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 18,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag19 = theme.defaultLanguages) === null || _theme$defaultLanguag19 === void 0 ? void 0 : _theme$defaultLanguag19.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS) || 'Driver almost arrived to business'),
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS',
      percentage: 55
    }, {
      key: 19,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag20 = theme.defaultLanguages) === null || _theme$defaultLanguag20 === void 0 ? void 0 : _theme$defaultLanguag20.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER) || 'Driver almost arrived to customer'),
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER',
      percentage: 90
    }, {
      key: 20,
      value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag21 = theme.defaultLanguages) === null || _theme$defaultLanguag21 === void 0 ? void 0 : _theme$defaultLanguag21.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS) || 'Customer almost arrived to business'),
      slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS',
      percentage: 90
    }, {
      key: 21,
      value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag22 = theme.defaultLanguages) === null || _theme$defaultLanguag22 === void 0 ? void 0 : _theme$defaultLanguag22.ORDER_CUSTOMER_ARRIVED_BUSINESS) || 'Customer arrived to business'),
      slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS',
      percentage: 95
    }, {
      key: 22,
      value: t('ORDER_LOOKING_FOR_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag23 = theme.defaultLanguages) === null || _theme$defaultLanguag23 === void 0 ? void 0 : _theme$defaultLanguag23.ORDER_LOOKING_FOR_DRIVER) || 'Looking for driver'),
      slug: 'ORDER_LOOKING_FOR_DRIVER',
      percentage: 35
    }, {
      key: 23,
      value: t('ORDER_DRIVER_ON_WAY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag24 = theme.defaultLanguages) === null || _theme$defaultLanguag24 === void 0 ? void 0 : _theme$defaultLanguag24.ORDER_DRIVER_ON_WAY) || 'Driver on way'),
      slug: 'ORDER_DRIVER_ON_WAY',
      percentage: 45
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };
  var getImage = function getImage(status) {
    try {
      var _theme$images, _theme$images$order;
      return (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$order = _theme$images.order) === null || _theme$images$order === void 0 ? void 0 : _theme$images$order["status".concat(status)];
    } catch (error) {
      return 'https://picsum.photos/75';
    }
  };
  var handleOpenReview = function handleOpenReview() {
    if (!(order !== null && order !== void 0 && order.review) && !isOrderReviewed) setReviewStatus({
      order: true,
      product: false,
      driver: false
    });else if (!isProductReviewed) setReviewStatus({
      order: false,
      product: true,
      driver: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else {
      setIsReviewOpen(false);
      return;
    }
    setIsReviewOpen(true);
  };
  var handleCloseReivew = function handleCloseReivew() {
    setReviewStatus({
      order: false,
      product: false,
      driver: false
    });
    setIsReviewOpen(false);
  };
  var closeReviewOrder = function closeReviewOrder() {
    if (!isProductReviewed) setReviewStatus({
      order: false,
      product: true,
      driver: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else handleCloseReivew();
  };
  var closeReviewProduct = function closeReviewProduct() {
    if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else {
      setIsDriverReviewed(true);
      handleCloseReivew();
    }
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  var handleOpenMessages = function handleOpenMessages(data) {
    setOpenMessages(data);
    readMessages();
    if ((order === null || order === void 0 ? void 0 : order.unread_count) > 0) {
      data.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
  };
  var unreadMessages = function unreadMessages() {
    var length = messages === null || messages === void 0 ? void 0 : messages.messages.length;
    var unreadLength = order === null || order === void 0 ? void 0 : order.unread_count;
    var unreadedMessages = messages.messages.slice(length - unreadLength, length);
    var business = unreadedMessages.some(function (message) {
      var _message$can_see;
      return message === null || message === void 0 ? void 0 : (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes(2);
    });
    var driver = unreadedMessages.some(function (message) {
      var _message$can_see2;
      return message === null || message === void 0 ? void 0 : (_message$can_see2 = message.can_see) === null || _message$can_see2 === void 0 ? void 0 : _message$can_see2.includes(4);
    });
    setUnreadAlert({
      business: business,
      driver: driver
    });
  };
  var getIncludedTaxes = function getIncludedTaxes() {
    var _order$taxes;
    if ((order === null || order === void 0 ? void 0 : (_order$taxes = order.taxes) === null || _order$taxes === void 0 ? void 0 : _order$taxes.length) === 0) {
      var _order$summary$tax, _order$summary;
      return order.tax_type === 1 ? (_order$summary$tax = order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.tax) !== null && _order$summary$tax !== void 0 ? _order$summary$tax : 0 : 0;
    } else {
      return order === null || order === void 0 ? void 0 : order.taxes.reduce(function (taxIncluded, tax) {
        var _tax$summary;
        return taxIncluded + (tax.type === 1 ? (_tax$summary = tax.summary) === null || _tax$summary === void 0 ? void 0 : _tax$summary.tax : 0);
      }, 0);
    }
  };
  var getIncludedTaxesDiscounts = function getIncludedTaxesDiscounts() {
    var _order$taxes2, _order$taxes2$filter;
    return order === null || order === void 0 ? void 0 : (_order$taxes2 = order.taxes) === null || _order$taxes2 === void 0 ? void 0 : (_order$taxes2$filter = _order$taxes2.filter(function (tax) {
      return (tax === null || tax === void 0 ? void 0 : tax.type) === 1;
    })) === null || _order$taxes2$filter === void 0 ? void 0 : _order$taxes2$filter.reduce(function (carry, tax) {
      var _tax$summary$tax_afte, _tax$summary2, _tax$summary3;
      return carry + ((_tax$summary$tax_afte = tax === null || tax === void 0 ? void 0 : (_tax$summary2 = tax.summary) === null || _tax$summary2 === void 0 ? void 0 : _tax$summary2.tax_after_discount) !== null && _tax$summary$tax_afte !== void 0 ? _tax$summary$tax_afte : tax === null || tax === void 0 ? void 0 : (_tax$summary3 = tax.summary) === null || _tax$summary3 === void 0 ? void 0 : _tax$summary3.tax);
    }, 0);
  };
  var locations = [_objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.driverPhoto)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.businessLogo)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo) || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$dummie = _theme$images4.dummies) === null || _theme$images4$dummie === void 0 ? void 0 : _theme$images4$dummie.customerPhoto)
  })];
  (0, _react.useEffect)(function () {
    if (driverLocation) {
      locations[0] = driverLocation;
    }
  }, [driverLocation]);
  (0, _react.useEffect)(function () {
    unreadMessages();
  }, [messages === null || messages === void 0 ? void 0 : messages.messages]);
  (0, _react.useEffect)(function () {
    if (messagesReadList !== null && messagesReadList !== void 0 && messagesReadList.length) {
      openMessages.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
  }, [messagesReadList]);
  (0, _react.useEffect)(function () {
    if (!loading) {
      setOpenSuccessModal(false);
      localStorage.removeItem('business-address');
    }
  }, [loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, !loading && order && Object.keys(order).length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Content, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.Header, null, isCustomerMode && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'search'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_BsArrowLeft.default, null), t('GO_TO_BUSINESSLIST', 'Go to business list')), /*#__PURE__*/_react.default.createElement(_styles.HeaderImg, null, /*#__PURE__*/_react.default.createElement("img", {
    src: businessData === null || businessData === void 0 ? void 0 : businessData.header,
    alt: "business-header",
    height: "200px",
    width: "355px",
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.HeaderInfo, {
    className: "order-header"
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderText, {
    column: true
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_MESSAGE_RECEIVED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag25 = theme.defaultLanguages) === null || _theme$defaultLanguag25 === void 0 ? void 0 : _theme$defaultLanguag25.ORDER_MESSAGE_RECEIVED) || 'Your order has been received')), /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_MESSAGE_HEADER_TEXT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag26 = theme.defaultLanguages) === null || _theme$defaultLanguag26 === void 0 ? void 0 : _theme$defaultLanguag26.ORDER_MESSAGE_HEADER_TEXT) || 'Once business accepts your order, we will send you an email, thank you!'))))), /*#__PURE__*/_react.default.createElement(_styles.OrderBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, null, showBusinessLogo && /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: (order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.logo) || ((_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$dummie = _theme$images5.dummies) === null || _theme$images5$dummie === void 0 ? void 0 : _theme$images5$dummie.businessLogo)
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.name), showBusinessAddress && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.address), showDriverPhone && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.cellphone), showDriverEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.email))), /*#__PURE__*/_react.default.createElement(_styles.ActionsBlock, null, (order === null || order === void 0 ? void 0 : order.driver) && (order === null || order === void 0 ? void 0 : order.driver.phone) && showDriverPhone && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return window.open("tel:".concat(order === null || order === void 0 ? void 0 : order.driver.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_FiPhone.default, null)), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_BiStoreAlt.default, {
    onClick: function onClick() {
      return handleBusinessRedirect(businessData === null || businessData === void 0 ? void 0 : businessData.slug);
    }
  })), showBusinessMessages && /*#__PURE__*/_react.default.createElement(_styles.MessagesIcon, {
    onClick: function onClick() {
      return handleOpenMessages({
        driver: false,
        business: true
      });
    }
  }, (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && unreadAlert.business && /*#__PURE__*/_react.default.createElement(_styles.ExclamationWrapper, null, /*#__PURE__*/_react.default.createElement(_AiFillExclamationCircle.default, null)), /*#__PURE__*/_react.default.createElement(_HiOutlineChat.default, null)))), /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.OrderData, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag27 = theme.defaultLanguages) === null || _theme$defaultLanguag27 === void 0 ? void 0 : _theme$defaultLanguag27.ORDER) || 'Order'), " #", order === null || order === void 0 ? void 0 : order.id), (order === null || order === void 0 ? void 0 : order.status) !== 0 && (order === null || order === void 0 ? void 0 : order.integration_id) && /*#__PURE__*/_react.default.createElement("h1", null, t('TICKET', 'Ticket'), ": ", order === null || order === void 0 ? void 0 : order.integration_id), showDeliveryDate && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, t('DATE_TIME_FOR_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag28 = theme.defaultLanguages) === null || _theme$defaultLanguag28 === void 0 ? void 0 : _theme$defaultLanguag28.DATE_TIME_FOR_ORDER) || 'Date and time for your order')), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), showDeliveryProgress && /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.percentage
  })), showDeliveryProgress && /*#__PURE__*/_react.default.createElement(_styles.OrderStatus, null, /*#__PURE__*/_react.default.createElement("span", null, (_getOrderStatus2 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.value), /*#__PURE__*/_react.default.createElement(_styles.StatusImage, null, /*#__PURE__*/_react.default.createElement("img", {
    src: getImage((order === null || order === void 0 ? void 0 : order.status) || 0),
    alt: "status",
    width: "70px",
    height: "70px",
    loading: "lazy"
  })))), /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag29 = theme.defaultLanguages) === null || _theme$defaultLanguag29 === void 0 ? void 0 : _theme$defaultLanguag29.CUSTOMER) || 'Customer')), /*#__PURE__*/_react.default.createElement(_styles.OrderCustomer, null, showCustomerPhoto && /*#__PURE__*/_react.default.createElement("div", {
    className: "photo"
  }, order !== null && order !== void 0 && (_order$customer3 = order.customer) !== null && _order$customer3 !== void 0 && _order$customer3.photo ? /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.photo,
    width: "80",
    height: "80"
  }) : /*#__PURE__*/_react.default.createElement(_FaUserCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.name, " ", order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.lastname), showCustomerAddress && /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.address))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.CommentContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('DELIVERY_PREFERENCE', 'Delivery preference')), /*#__PURE__*/_react.default.createElement("span", null, order !== null && order !== void 0 && (_order$delivery_optio = order.delivery_option) !== null && _order$delivery_optio !== void 0 && _order$delivery_optio.name ? t(order === null || order === void 0 ? void 0 : (_order$delivery_optio2 = order.delivery_option) === null || _order$delivery_optio2 === void 0 ? void 0 : _order$delivery_optio2.name.toUpperCase().replace(/\s/g, '_'), order === null || order === void 0 ? void 0 : (_order$delivery_optio3 = order.delivery_option) === null || _order$delivery_optio3 === void 0 ? void 0 : _order$delivery_optio3.name) : t('EITHER_WAY', 'Either way'))), (order === null || order === void 0 ? void 0 : order.comment) && /*#__PURE__*/_react.default.createElement(_styles.CommentContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : order.comment)), parseInt(configs === null || configs === void 0 ? void 0 : (_configs$guest_uuid_a = configs.guest_uuid_access) === null || _configs$guest_uuid_a === void 0 ? void 0 : _configs$guest_uuid_a.value, 10) && (order === null || order === void 0 ? void 0 : order.hash_key) && /*#__PURE__*/_react.default.createElement(_styles.ShareOrder, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('SHARE_THIS_DELIVERY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag30 = theme.defaultLanguages) === null || _theme$defaultLanguag30 === void 0 ? void 0 : _theme$defaultLanguag30.SHARE_THIS_DELIVERY) || 'Share this delivery')), /*#__PURE__*/_react.default.createElement("p", null, t('LET_SOMEONE_FOLLOW_ALONG', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag31 = theme.defaultLanguages) === null || _theme$defaultLanguag31 === void 0 ? void 0 : _theme$defaultLanguag31.LET_SOMEONE_FOLLOW_ALONG) || 'Let someone follow along'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/_react.default.createElement(_ProductShare.ProductShare, {
    withBtn: true,
    btnText: t('SHARE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag32 = theme.defaultLanguages) === null || _theme$defaultLanguag32 === void 0 ? void 0 : _theme$defaultLanguag32.SHARE) || 'Share'),
    defaultUrl: urlToShare(order === null || order === void 0 ? void 0 : order.hash_key)
  }))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showBusinessMap && (order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.location) && parseInt(order === null || order === void 0 ? void 0 : order.status) === 9 && /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    location: order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.location,
    locations: locations,
    mapControls: googleMapsControls
  })), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('YOUR_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag33 = theme.defaultLanguages) === null || _theme$defaultLanguag33 === void 0 ? void 0 : _theme$defaultLanguag33.YOUR_DRIVER) || 'Your Driver')), /*#__PURE__*/_react.default.createElement(_styles.OrderDriver, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriver, null, showDriverPhoto && /*#__PURE__*/_react.default.createElement("div", {
    className: "photo"
  }, order !== null && order !== void 0 && (_order$driver5 = order.driver) !== null && _order$driver5 !== void 0 && _order$driver5.photo ? /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.photo,
    width: "70",
    height: "70"
  }) : /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, showDriverName && /*#__PURE__*/_react.default.createElement("h1", null, order === null || order === void 0 ? void 0 : (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.name, " ", order === null || order === void 0 ? void 0 : (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.lastname), /*#__PURE__*/_react.default.createElement("span", null, t('DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag34 = theme.defaultLanguages) === null || _theme$defaultLanguag34 === void 0 ? void 0 : _theme$defaultLanguag34.DRIVER) || 'Driver')))), /*#__PURE__*/_react.default.createElement(_styles.ActionsBlock, null, showDriverPhone && order.driver && ((_order$driver9 = order.driver) === null || _order$driver9 === void 0 ? void 0 : _order$driver9.phone) && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return window.open("tel:".concat(order.driver.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_FiPhone.default, null)), showDriverMessages && /*#__PURE__*/_react.default.createElement(_styles.MessagesIcon, {
    onClick: function onClick() {
      return handleOpenMessages({
        driver: true,
        business: false
      });
    }
  }, (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && (unreadAlert === null || unreadAlert === void 0 ? void 0 : unreadAlert.driver) && /*#__PURE__*/_react.default.createElement(_styles.ExclamationWrapper, null, /*#__PURE__*/_react.default.createElement(_AiFillExclamationCircle.default, null)), /*#__PURE__*/_react.default.createElement(_HiOutlineChat.default, null)))))), /*#__PURE__*/_react.default.createElement(_styles.SectionTitle, null, t('YOUR_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag35 = theme.defaultLanguages) === null || _theme$defaultLanguag35 === void 0 ? void 0 : _theme$defaultLanguag35.YOUR_ORDER) || 'Your Order')), /*#__PURE__*/_react.default.createElement(_styles.OrderProducts, null, (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product
    });
  }))), /*#__PURE__*/_react.default.createElement(_styles.OrderBill, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag36 = theme.defaultLanguages) === null || _theme$defaultLanguag36 === void 0 ? void 0 : _theme$defaultLanguag36.SUBTOTAL) || 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(((_order$summary$subtot = order === null || order === void 0 ? void 0 : (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.subtotal) !== null && _order$summary$subtot !== void 0 ? _order$summary$subtot : order === null || order === void 0 ? void 0 : order.subtotal) + getIncludedTaxes()))), ((_ref = (order === null || order === void 0 ? void 0 : (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.discount) > 0) !== null && _ref !== void 0 ? _ref : (order === null || order === void 0 ? void 0 : order.discount) > 0) && (order === null || order === void 0 ? void 0 : (_order$offers = order.offers) === null || _order$offers === void 0 ? void 0 : _order$offers.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, (order === null || order === void 0 ? void 0 : order.offer_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag37 = theme.defaultLanguages) === null || _theme$defaultLanguag37 === void 0 ? void 0 : _theme$defaultLanguag37.DISCOUNT) || 'Discount'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.offer_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag38 = theme.defaultLanguages) === null || _theme$defaultLanguag38 === void 0 ? void 0 : _theme$defaultLanguag38.DISCOUNT) || 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((_order$summary$discou = order === null || order === void 0 ? void 0 : (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.discount) !== null && _order$summary$discou !== void 0 ? _order$summary$discou : order === null || order === void 0 ? void 0 : order.discount))), (order === null || order === void 0 ? void 0 : (_order$offers2 = order.offers) === null || _order$offers2 === void 0 ? void 0 : _order$offers2.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$offers3 = order.offers) === null || _order$offers3 === void 0 ? void 0 : (_order$offers3$filter = _order$offers3.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _order$offers3$filter === void 0 ? void 0 : _order$offers3$filter.map(function (offer) {
    var _offer$summary;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, offer.name, offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_1'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_AiOutlineExclamationCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary = offer.summary) === null || _offer$summary === void 0 ? void 0 : _offer$summary.discount)));
  })), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.Divider, null))), (order === null || order === void 0 ? void 0 : (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.subtotal_with_discount) > 0 && (order === null || order === void 0 ? void 0 : (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.discount) > 0 && (order === null || order === void 0 ? void 0 : (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), (order === null || order === void 0 ? void 0 : order.tax_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref2 = (order === null || order === void 0 ? void 0 : (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.subtotal_with_discount) + getIncludedTaxesDiscounts()) !== null && _ref2 !== void 0 ? _ref2 : 0)) : /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$subtot2 = order === null || order === void 0 ? void 0 : (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.subtotal_with_discount) !== null && _order$summary$subtot2 !== void 0 ? _order$summary$subtot2 : 0))), (order === null || order === void 0 ? void 0 : (_order$taxes3 = order.taxes) === null || _order$taxes3 === void 0 ? void 0 : _order$taxes3.length) === 0 && (order === null || order === void 0 ? void 0 : order.tax_type) === 2 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TAX', 'Tax'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.tax, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$tax2 = order === null || order === void 0 ? void 0 : (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.tax) !== null && _order$summary$tax2 !== void 0 ? _order$summary$tax2 : 0))), (order === null || order === void 0 ? void 0 : (_order$fees = order.fees) === null || _order$fees === void 0 ? void 0 : _order$fees.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', 'Service fee'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.service_fee, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$servic = order === null || order === void 0 ? void 0 : (_order$summary11 = order.summary) === null || _order$summary11 === void 0 ? void 0 : _order$summary11.service_fee) !== null && _order$summary$servic !== void 0 ? _order$summary$servic : 0))), (order === null || order === void 0 ? void 0 : (_order$taxes4 = order.taxes) === null || _order$taxes4 === void 0 ? void 0 : _order$taxes4.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$taxes5 = order.taxes) === null || _order$taxes5 === void 0 ? void 0 : _order$taxes5.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0;
  }).map(function (tax) {
    var _ref3, _tax$summary$tax_afte2, _tax$summary4, _tax$summary5;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", null, (tax === null || tax === void 0 ? void 0 : tax.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)")), /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: tax,
          type: 'tax'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_AiOutlineExclamationCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref3 = (_tax$summary$tax_afte2 = tax === null || tax === void 0 ? void 0 : (_tax$summary4 = tax.summary) === null || _tax$summary4 === void 0 ? void 0 : _tax$summary4.tax_after_discount) !== null && _tax$summary$tax_afte2 !== void 0 ? _tax$summary$tax_afte2 : tax === null || tax === void 0 ? void 0 : (_tax$summary5 = tax.summary) === null || _tax$summary5 === void 0 ? void 0 : _tax$summary5.tax) !== null && _ref3 !== void 0 ? _ref3 : 0)));
  })), (order === null || order === void 0 ? void 0 : (_order$fees2 = order.fees) === null || _order$fees2 === void 0 ? void 0 : _order$fees2.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$fees3 = order.fees) === null || _order$fees3 === void 0 ? void 0 : (_order$fees3$filter = _order$fees3.filter(function (fee) {
    return !((fee === null || fee === void 0 ? void 0 : fee.fixed) === 0 && (fee === null || fee === void 0 ? void 0 : fee.percentage) === 0);
  })) === null || _order$fees3$filter === void 0 ? void 0 : _order$fees3$filter.map(function (fee) {
    var _ref4, _fee$summary, _fee$summary$percenta, _fee$summary2, _fee$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: fee.id
    }, /*#__PURE__*/_react.default.createElement("td", null, (fee === null || fee === void 0 ? void 0 : fee.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), "(", (fee === null || fee === void 0 ? void 0 : fee.fixed) > 0 && "".concat(parsePrice(fee === null || fee === void 0 ? void 0 : fee.fixed), " + "), fee.percentage, "%)", /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: fee,
          type: 'fee'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_AiOutlineExclamationCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref4 = (fee === null || fee === void 0 ? void 0 : (_fee$summary = fee.summary) === null || _fee$summary === void 0 ? void 0 : _fee$summary.fixed) + ((_fee$summary$percenta = fee === null || fee === void 0 ? void 0 : (_fee$summary2 = fee.summary) === null || _fee$summary2 === void 0 ? void 0 : _fee$summary2.percentage_after_discount) !== null && _fee$summary$percenta !== void 0 ? _fee$summary$percenta : fee === null || fee === void 0 ? void 0 : (_fee$summary3 = fee.summary) === null || _fee$summary3 === void 0 ? void 0 : _fee$summary3.percentage)) !== null && _ref4 !== void 0 ? _ref4 : 0)));
  })), (order === null || order === void 0 ? void 0 : (_order$offers4 = order.offers) === null || _order$offers4 === void 0 ? void 0 : _order$offers4.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$offers5 = order.offers) === null || _order$offers5 === void 0 ? void 0 : (_order$offers5$filter = _order$offers5.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 3;
  })) === null || _order$offers5$filter === void 0 ? void 0 : _order$offers5$filter.map(function (offer) {
    var _offer$summary2;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, offer.name, offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_3'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_AiOutlineExclamationCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary2 = offer.summary) === null || _offer$summary2 === void 0 ? void 0 : _offer$summary2.discount)));
  })), (order === null || order === void 0 ? void 0 : (_order$summary12 = order.summary) === null || _order$summary12 === void 0 ? void 0 : _order$summary12.delivery_price) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag39 = theme.defaultLanguages) === null || _theme$defaultLanguag39 === void 0 ? void 0 : _theme$defaultLanguag39.DELIVERY_FEE) || 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary13 = order.summary) === null || _order$summary13 === void 0 ? void 0 : _order$summary13.delivery_price))), (order === null || order === void 0 ? void 0 : (_order$offers6 = order.offers) === null || _order$offers6 === void 0 ? void 0 : _order$offers6.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$offers7 = order.offers) === null || _order$offers7 === void 0 ? void 0 : (_order$offers7$filter = _order$offers7.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 2;
  })) === null || _order$offers7$filter === void 0 ? void 0 : _order$offers7$filter.map(function (offer) {
    var _offer$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, offer.name, offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_2'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_AiOutlineExclamationCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary3 = offer.summary) === null || _offer$summary3 === void 0 ? void 0 : _offer$summary3.discount)));
  })), ((order === null || order === void 0 ? void 0 : (_order$summary14 = order.summary) === null || _order$summary14 === void 0 ? void 0 : _order$summary14.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag40 = theme.defaultLanguages) === null || _theme$defaultLanguag40 === void 0 ? void 0 : _theme$defaultLanguag40.DRIVER_TIP) || 'Driver tip'), ' ', ((order === null || order === void 0 ? void 0 : (_order$summary15 = order.summary) === null || _order$summary15 === void 0 ? void 0 : _order$summary15.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.driver_tip, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$driver = order === null || order === void 0 ? void 0 : (_order$summary16 = order.summary) === null || _order$summary16 === void 0 ? void 0 : _order$summary16.driver_tip) !== null && _order$summary$driver !== void 0 ? _order$summary$driver : order === null || order === void 0 ? void 0 : order.totalDriverTip))))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag41 = theme.defaultLanguages) === null || _theme$defaultLanguag41 === void 0 ? void 0 : _theme$defaultLanguag41.TOTAL) || 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$total = order === null || order === void 0 ? void 0 : (_order$summary17 = order.summary) === null || _order$summary17 === void 0 ? void 0 : _order$summary17.total) !== null && _order$summary$total !== void 0 ? _order$summary$total : order === null || order === void 0 ? void 0 : order.total))))), (order === null || order === void 0 ? void 0 : order.comment) && /*#__PURE__*/_react.default.createElement("table", {
    className: "comments"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : order.comment))))), (parseInt(order === null || order === void 0 ? void 0 : order.status) === 1 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 2 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 5 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 6 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 10 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 11 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 12) && (!(order !== null && order !== void 0 && order.review) || order.driver && !(order !== null && order !== void 0 && order.user_review)) && (!isOrderReviewed || !isProductReviewed || !isDriverReviewed) && /*#__PURE__*/_react.default.createElement(_styles.ReviewsAction, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: handleOpenReview
  }, t('REVIEW_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag42 = theme.defaultLanguages) === null || _theme$defaultLanguag42 === void 0 ? void 0 : _theme$defaultLanguag42.REVIEW_ORDER) || 'Review your Order'))), !userCustomerId && /*#__PURE__*/_react.default.createElement(_styles.FootActions, null, /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, t('MY_ORDERS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag43 = theme.defaultLanguages) === null || _theme$defaultLanguag43 === void 0 ? void 0 : _theme$defaultLanguag43.MY_ORDERS) || 'My Orders'), /*#__PURE__*/_react.default.createElement(_BiCaretUp.default, null))))), loading && !error && isFromCheckPage && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, {
    isLoading: true,
    className: "skeleton-loading"
  }, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openSuccessModal,
    width: "50%",
    hideCloseDefault: true,
    onClose: function onClose() {
      return setOpenSuccessModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_OrderSuccessModal.OrderSuccessModal, {
    isOrderDetail: true
  }))), !loading && error && (error.includes('ERROR_ACCESS_EXPIRED') ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t(error[0], 'Sorry, the order has expired.')
  }) : /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag44 = theme.defaultLanguages) === null || _theme$defaultLanguag44 === void 0 ? void 0 : _theme$defaultLanguag44.NOT_FOUND_ORDER) || 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag45 = theme.defaultLanguages) === null || _theme$defaultLanguag45 === void 0 ? void 0 : _theme$defaultLanguag45.ORDERS_REDIRECT) || 'Go to Orders'),
    onClickButton: handleOrderRedirect
  })), (openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openMessages.driver || openMessages.business,
    onClose: function onClose() {
      return setOpenMessages({
        driver: false,
        business: false
      });
    },
    padding: "0",
    width: "70%"
  }, /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    business: openMessages.business,
    driver: openMessages.driver,
    messages: messages,
    setMessages: setMessages,
    readMessages: readMessages
  })), isReviewOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isReviewOpen,
    onClose: handleCloseReivew,
    title: order ? reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? t('REVIEW_ORDER', 'Review order') : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? t('REVIEW_PRODUCT', 'Review Product') : t('REVIEW_DRIVER', 'Review Driver') : t('LOADING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag46 = theme.defaultLanguages) === null || _theme$defaultLanguag46 === void 0 ? void 0 : _theme$defaultLanguag46.LOADING) || 'Loading...')
  }, reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: order,
    closeReviewOrder: closeReviewOrder,
    setIsReviewed: setIsOrderReviewed
  }) : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? /*#__PURE__*/_react.default.createElement(_ReviewProduct.ReviewProduct, {
    order: order,
    closeReviewProduct: closeReviewProduct,
    setIsProductReviewed: setIsProductReviewed
  }) : /*#__PURE__*/_react.default.createElement(_ReviewDriver.ReviewDriver, {
    order: order,
    closeReviewDriver: handleCloseReivew,
    setIsDriverReviewed: setIsDriverReviewed
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openTaxModal.open,
    padding: "20px",
    closeOnBackdrop: true,
    title: "".concat(((_openTaxModal$data = openTaxModal.data) === null || _openTaxModal$data === void 0 ? void 0 : _openTaxModal$data.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " ").concat(((_openTaxModal$data2 = openTaxModal.data) === null || _openTaxModal$data2 === void 0 ? void 0 : _openTaxModal$data2.rate_type) !== 2 ? "(".concat(typeof ((_openTaxModal$data3 = openTaxModal.data) === null || _openTaxModal$data3 === void 0 ? void 0 : _openTaxModal$data3.rate) === 'number' ? "".concat((_openTaxModal$data4 = openTaxModal.data) === null || _openTaxModal$data4 === void 0 ? void 0 : _openTaxModal$data4.rate, "%") : "".concat(parsePrice((_openTaxModal$data$fi = (_openTaxModal$data5 = openTaxModal.data) === null || _openTaxModal$data5 === void 0 ? void 0 : _openTaxModal$data5.fixed) !== null && _openTaxModal$data$fi !== void 0 ? _openTaxModal$data$fi : 0), " + ").concat((_openTaxModal$data6 = openTaxModal.data) === null || _openTaxModal$data6 === void 0 ? void 0 : _openTaxModal$data6.percentage, "%"), ")") : '', "  "),
    onClose: function onClose() {
      return setOpenTaxModal({
        open: false,
        tax: null,
        type: ''
      });
    },
    modalTitleStyle: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_TaxInformation.TaxInformation, {
    type: openTaxModal.type,
    data: openTaxModal.data,
    products: order === null || order === void 0 ? void 0 : order.products
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
var OrderDetails = function OrderDetails(props) {
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap',
      // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    UIComponent: OrderDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderDetails, orderDetailsProps);
};
exports.OrderDetails = OrderDetails;