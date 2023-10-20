"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersTable = void 0;
var _react = _interopRequireWildcard(require("react"));
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
var _Shared = require("../../Shared");
var _utils = require("../../../../../../utils");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_dayjs.default.extend(_utc.default);
var OrdersTable = exports.OrdersTable = function OrdersTable(props) {
  var _configState$configs, _orderList$orders3;
  var hidePhoto = props.hidePhoto,
    isSelectedOrders = props.isSelectedOrders,
    orderList = props.orderList,
    pagination = props.pagination,
    selectedOrderIds = props.selectedOrderIds,
    orderDetailId = props.orderDetailId,
    getPageOrders = props.getPageOrders,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    setSelectedOrderIds = props.setSelectedOrderIds,
    currentTourStep = props.currentTourStep,
    isTourOpen = props.isTourOpen,
    handleOpenTour = props.handleOpenTour,
    setIsTourOpen = props.setIsTourOpen,
    slaSettingTime = props.slaSettingTime,
    groupStatus = props.groupStatus,
    allowColumns = props.allowColumns,
    setAllowColumns = props.setAllowColumns,
    handleDrop = props.handleDrop,
    saveUserSettings = props.saveUserSettings;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    optimizeImage = _useUtils2$.optimizeImage,
    getTimeAgo = _useUtils2$.getTimeAgo,
    parsePrice = _useUtils2$.parsePrice;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isAllChecked = _useState2[0],
    setIsAllChecked = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    setCurrentTime = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    dragOverd = _useState6[0],
    setDragOverd = _useState6[1];
  var handleChangePage = function handleChangePage(page) {
    getPageOrders(pagination.pageSize, page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(pagination.from / pageSize);
    getPageOrders(pageSize, expectedPage);
  };
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var isEnabledRowInColor = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.row_in_color_enabled) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === '1';
  var parseDateCustom = function parseDateCustom(date) {
    var _configState$configs$;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // method added for NaN errors
    var formatTime = (options === null || options === void 0 ? void 0 : options.formatTime) || ((_configState$configs$ = configState.configs.format_time) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value) || '24';
    var formatDate = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      outputFormat: (options === null || options === void 0 ? void 0 : options.outputFormat) || (formatTime === '24' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD hh:mm:ss A'),
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };
    if (!(0, _dayjs.default)(date, formatDate.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }
    var _date = formatDate.utc ? _dayjs.default.utc(date, formatDate.inputFormat).local() : (0, _dayjs.default)(date, formatDate.inputFormat);
    return _date.format(formatDate.outputFormat);
  };
  var optionsDefault = [{
    value: 'status',
    content: t('STATUS', 'Status')
  }, {
    value: 'orderNumber',
    content: t('INVOICE_ORDER_NO', 'Order No.')
  }, {
    value: 'cartGroupId',
    content: t('GROUP_ORDER', 'Group Order')
  }, {
    value: 'driverGroupId',
    content: t('EXPORT_DRIVER_GROUP_ID', 'Driver Group Id')
  }, {
    value: 'dateTime',
    content: t('DATE_TIME', 'Date and time')
  }, {
    value: 'business',
    content: t('BUSINESS', 'Business')
  }, {
    value: 'customer',
    content: t('CUSTOMER', 'Customer')
  }, {
    value: 'driver',
    content: t('DRIVER', 'Driver')
  }, {
    value: 'advanced',
    content: t('ADVANCED_LOGISTICS', 'Advance Logistics')
  }, {
    value: 'timer',
    content: t('SLA_TIMER', 'SLA’s timer')
  }, {
    value: 'eta',
    content: t('ETA', 'ETA')
  }, {
    value: 'total',
    content: t('EXPORT_TOTAL', 'Total')
  }, {
    value: 'externalId',
    content: t('EXTERNAL_ID', 'External id')
  }];
  var getDelayMinutes = function getDelayMinutes(order) {
    // targetMin = delivery_datetime  + eta_time - now()
    var offset = 300;
    var cdtToutc = (0, _dayjs.default)(order === null || order === void 0 ? void 0 : order.delivery_datetime).add(offset, 'minutes').format('YYYY-MM-DD HH:mm:ss');
    var _delivery = order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDateCustom(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDateCustom(cdtToutc);
    var _eta = order === null || order === void 0 ? void 0 : order.eta_time;
    var diffTimeAsSeconds = (0, _dayjs.default)(_delivery).add(_eta, 'minutes').diff((0, _dayjs.default)().utc(), 'seconds');
    return Math.ceil(diffTimeAsSeconds / 60);
  };
  var displayDelayedTime = function displayDelayedTime(order) {
    var tagetedMin = getDelayMinutes(order);
    // get day, hour and minutes
    var sign = tagetedMin >= 0 ? '' : '- ';
    tagetedMin = Math.abs(tagetedMin);
    var day = Math.floor(tagetedMin / 1440);
    var restMinOfTargetedMin = tagetedMin - 1440 * day;
    var restHours = Math.floor(restMinOfTargetedMin / 60);
    var restMins = restMinOfTargetedMin - 60 * restHours;
    // make standard time format
    day = day === 0 ? '' : day + 'day  ';
    restHours = restHours < 10 ? '0' + restHours : restHours;
    restMins = restMins < 10 ? '0' + restMins : restMins;
    var finalTaget = sign + day + restHours + ':' + restMins;
    return finalTaget;
  };

  // const getStatusClassName = (minutes) => {
  //   if (isNaN(Number(minutes))) return 'in_time'
  //   const delayTime = configState?.configs?.order_deadlines_delayed_time?.value
  //   return minutes > 0 ? 'in_time' : Math.abs(minutes) <= delayTime ? 'at_risk' : 'delayed'
  // }

  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      setCurrentTime(Date.now());
    }, slaSettingTime);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  var getLogisticTag = function getLogisticTag(status) {
    switch (parseInt(status)) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('IN_PROGRESS', 'In progress');
      case 2:
        return t('IN_QUEUE', 'In queue');
      case 3:
        return t('EXPIRED', 'Expired');
      case 4:
        return t('RESOLVED', 'Resolved');
      default:
        return t('UNKNOWN', 'Unknown');
    }
  };
  var getPriorityTag = function getPriorityTag(priority) {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low');
      case 0:
        return t('NORMAL', 'Normal');
      case 1:
        return t('HIGH', 'High');
      case 2:
        return t('URGENT', 'Urgent');
      default:
        return t('UNKNOWN', 'Unknown');
    }
  };
  var getOrderStatus = function getOrderStatus(s) {
    var _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _theme$defaultLanguag16, _theme$defaultLanguag17, _theme$defaultLanguag18, _theme$defaultLanguag19, _theme$defaultLanguag20, _theme$defaultLanguag21, _theme$defaultLanguag22;
    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.PENDING) || 'Pending')
    }, {
      key: 1,
      value: t('COMPLETED_BY_ADMIN', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.COMPLETED) || 'Completed by admin')
    }, {
      key: 2,
      value: t('REJECTED', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.REJECTED) || 'Rejected')
    }, {
      key: 3,
      value: t('ORDER_STATUS_IN_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.DRIVER_IN_BUSINESS) || 'Driver arrived to business')
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.PREPARATION_COMPLETED) || 'Preparation Completed')
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.REJECTED_BY_BUSINESS) || 'Rejected by business')
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.REJECTED_BY_DRIVER) || 'Rejected by Driver')
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.ACCEPTED_BY_BUSINESS) || 'Accepted by business')
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ACCEPTED_BY_DRIVER) || 'Accepted by driver')
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.PICK_UP_COMPLETED_BY_DRIVER) || 'Pick up completed by driver')
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.PICK_UP_FAILED_BY_DRIVER) || 'Pick up Failed by driver')
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.DELIVERY_COMPLETED_BY_DRIVER) || 'Delivery completed by driver')
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.DELIVERY_FAILED_BY_DRIVER) || 'Delivery Failed by driver')
    }, {
      key: 13,
      value: t('PREORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.PREORDER) || 'PreOrder')
    }, {
      key: 14,
      value: t('ORDER_NOT_READY', (theme === null || theme === void 0 || (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.ORDER_NOT_READY) || 'Order not ready')
    }, {
      key: 15,
      value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER) || 'Order picked up completed by customer')
    }, {
      key: 16,
      value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag17 = theme.defaultLanguages) === null || _theme$defaultLanguag17 === void 0 ? void 0 : _theme$defaultLanguag17.ORDER_STATUS_CANCELLED_BY_CUSTOMER) || 'Order cancelled by customer')
    }, {
      key: 17,
      value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag18 = theme.defaultLanguages) === null || _theme$defaultLanguag18 === void 0 ? void 0 : _theme$defaultLanguag18.ORDER_NOT_PICKEDUP_BY_CUSTOMER) || 'Order not picked up by customer')
    }, {
      key: 18,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag19 = theme.defaultLanguages) === null || _theme$defaultLanguag19 === void 0 ? void 0 : _theme$defaultLanguag19.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS) || 'Driver almost arrived to business')
    }, {
      key: 19,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', (theme === null || theme === void 0 || (_theme$defaultLanguag20 = theme.defaultLanguages) === null || _theme$defaultLanguag20 === void 0 ? void 0 : _theme$defaultLanguag20.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER) || 'Driver almost arrived to customer')
    }, {
      key: 20,
      value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag21 = theme.defaultLanguages) === null || _theme$defaultLanguag21 === void 0 ? void 0 : _theme$defaultLanguag21.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS) || 'Customer almost arrived to business')
    }, {
      key: 21,
      value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', (theme === null || theme === void 0 || (_theme$defaultLanguag22 = theme.defaultLanguages) === null || _theme$defaultLanguag22 === void 0 ? void 0 : _theme$defaultLanguag22.ORDER_CUSTOMER_ARRIVED_BUSINESS) || 'Customer arrived to business')
    }, {
      key: 22,
      value: t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver')
    }, {
      key: 23,
      value: t('ORDER_DRIVER_ON_WAY', 'Driver on way')
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };
  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    var _column = allowColumns[type];
    var updatedAllowColumns = _objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, _objectSpread(_objectSpread({}, _column), {}, {
      visable: !(_column !== null && _column !== void 0 && _column.visable)
    })));
    setAllowColumns(updatedAllowColumns);
    if (type === 'externalId') {
      saveUserSettings(JSON.parse(JSON.stringify(updatedAllowColumns)));
    }
  };
  var handleClickOrder = function handleClickOrder(order, e) {
    var inValid = !isSelectedOrders && (e.target.closest('.orderCheckBox') || e.target.closest('.driverInfo') || e.target.closest('.orderStatusTitle'));
    if (inValid) return;
    handleOpenOrderDetail(order);
  };
  var handleSelecteAllOrder = function handleSelecteAllOrder() {
    var _orderList$orders;
    var orderIds = (_orderList$orders = orderList.orders) === null || _orderList$orders === void 0 ? void 0 : _orderList$orders.reduce(function (ids, order) {
      return [].concat(_toConsumableArray(ids), [order.id]);
    }, []);
    if (!isAllChecked) {
      setSelectedOrderIds([].concat(_toConsumableArray(selectedOrderIds), _toConsumableArray(orderIds)));
    } else {
      var orderIdsToDeleteSet = new Set(orderIds);
      var updatedSelectedOrderIds = selectedOrderIds.filter(function (name) {
        return !orderIdsToDeleteSet.has(name);
      });
      setSelectedOrderIds(updatedSelectedOrderIds);
    }
  };
  /**
   * Method to handle drag start
   */
  var handleDragStart = function handleDragStart(event, columnName) {
    var _allowColumns$columnN;
    event.dataTransfer.setData('transferColumnName', columnName);
    var ghostEle = document.createElement('div');
    ghostEle.classList.add('ghostDragging');
    ghostEle.innerHTML = (_allowColumns$columnN = allowColumns[columnName]) === null || _allowColumns$columnN === void 0 ? void 0 : _allowColumns$columnN.title;
    document.body.appendChild(ghostEle);
    event.dataTransfer.setDragImage(ghostEle, 0, 0);
  };
  /**
   * Method to handle drag over
   */
  var handleDragOver = function handleDragOver(event, columnName) {
    event.preventDefault();
    setDragOverd(columnName);
  };

  /**
   * Method to handle drag end
   */
  var handleDragEnd = function handleDragEnd() {
    var elements = document.getElementsByClassName('ghostDragging');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    setDragOverd('');
  };
  (0, _react.useEffect)(function () {
    var _orderList$orders2;
    if (orderList.loading) return;
    var orderIds = (_orderList$orders2 = orderList.orders) === null || _orderList$orders2 === void 0 ? void 0 : _orderList$orders2.reduce(function (ids, order) {
      return [].concat(_toConsumableArray(ids), [order.id]);
    }, []);
    var _isAllChecked = orderIds.every(function (elem) {
      return selectedOrderIds.includes(elem);
    });
    setIsAllChecked(_isAllChecked);
  }, [orderList.orders, selectedOrderIds]);
  var handleChangeKeyboard = function handleChangeKeyboard(evt) {
    if (evt.code === 'Escape') setIsTourOpen && setIsTourOpen(false);
    if (evt.keyCode === 37 && currentTourStep === 1) handleOpenTour();
    if (evt.keyCode === 37 && currentTourStep === 4) handleOpenOrderDetail(orderList === null || orderList === void 0 ? void 0 : orderList.orders[0], true);
    if (evt.keyCode === 39 && currentTourStep === 0) handleOpenOrderDetail(orderList === null || orderList === void 0 ? void 0 : orderList.orders[0]);
  };
  (0, _react.useEffect)(function () {
    if (!isTourOpen) return;
    document.addEventListener('keydown', handleChangeKeyboard);
    return function () {
      return document.removeEventListener('keydown', handleChangeKeyboard);
    };
  }, [isTourOpen, currentTourStep]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, {
    id: "orderTable",
    isSelectedOrders: isSelectedOrders,
    noScroll: isTourOpen && currentTourStep === 0
  }, /*#__PURE__*/_react.default.createElement(_styles.Table, {
    className: "orders_table",
    noFixedHeader: !orderList.loading && ((_orderList$orders3 = orderList.orders) === null || _orderList$orders3 === void 0 ? void 0 : _orderList$orders3.length) <= 5
  }, !isSelectedOrders && /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, allowColumns && (Object.keys(allowColumns).filter(function (col) {
    var _allowColumns$col, _allowColumns$col2;
    return ((_allowColumns$col = allowColumns[col]) === null || _allowColumns$col === void 0 ? void 0 : _allowColumns$col.visable) && ((_allowColumns$col2 = allowColumns[col]) === null || _allowColumns$col2 === void 0 ? void 0 : _allowColumns$col2.order) !== 0;
  }).length === 0 ? /*#__PURE__*/_react.default.createElement("th", {
    className: "orderPrice"
  }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    handleChangeAllowColumns: handleChangeAllowColumns,
    isOrder: true
  })) : Object.keys(allowColumns).filter(function (col) {
    var _allowColumns$col3, _allowColumns$col4;
    return ((_allowColumns$col3 = allowColumns[col]) === null || _allowColumns$col3 === void 0 ? void 0 : _allowColumns$col3.visable) && ((_allowColumns$col4 = allowColumns[col]) === null || _allowColumns$col4 === void 0 ? void 0 : _allowColumns$col4.order) !== 0;
  }).sort(function (col1, col2) {
    var _allowColumns$col5, _allowColumns$col6;
    return ((_allowColumns$col5 = allowColumns[col1]) === null || _allowColumns$col5 === void 0 ? void 0 : _allowColumns$col5.order) - ((_allowColumns$col6 = allowColumns[col2]) === null || _allowColumns$col6 === void 0 ? void 0 : _allowColumns$col6.order);
  }).map(function (column, i, array) {
    var _allowColumns$column$3, _allowColumns$column7, _allowColumns$column8, _theme$images$icons3, _allowColumns$column9;
    if (column === 'slaBar') {
      return;
    }
    if (column === 'orderNumber') {
      var _allowColumns$orderNu, _allowColumns$dateTim, _allowColumns$slaBar;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, /*#__PURE__*/_react.default.createElement("th", {
        className: !(allowColumns !== null && allowColumns !== void 0 && (_allowColumns$orderNu = allowColumns.orderNumber) !== null && _allowColumns$orderNu !== void 0 && _allowColumns$orderNu.visable || allowColumns !== null && allowColumns !== void 0 && (_allowColumns$dateTim = allowColumns.dateTime) !== null && _allowColumns$dateTim !== void 0 && _allowColumns$dateTim.visable) ? 'orderNo small' : 'orderNo',
        key: "noDragTh-".concat(i),
        colSpan: allowColumns !== null && allowColumns !== void 0 && (_allowColumns$slaBar = allowColumns.slaBar) !== null && _allowColumns$slaBar !== void 0 && _allowColumns$slaBar.visable ? 2 : 1
      }, /*#__PURE__*/_react.default.createElement(_styles.CheckBox, {
        isChecked: !orderList.loading && isAllChecked,
        onClick: function onClick() {
          return handleSelecteAllOrder();
        },
        className: "orderCheckBox"
      }, !orderList.loading && isAllChecked ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), t('ORDER', 'Order')), column === _toConsumableArray(array).pop() && /*#__PURE__*/_react.default.createElement("th", {
        className: "orderPrice",
        key: "noDragTh-".concat(i)
      }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
        allowColumns: allowColumns,
        optionsDefault: optionsDefault,
        handleChangeAllowColumns: handleChangeAllowColumns,
        isOrder: true
      })));
    }
    if (column === 'externalId') {
      var _allowColumns$column$, _allowColumns$column, _allowColumns$column2, _theme$images$icons, _allowColumns$column3;
      return /*#__PURE__*/_react.default.createElement(_styles.DragTh, {
        key: "dragTh-".concat(i),
        onDragOver: function onDragOver(e) {
          return handleDragOver === null || handleDragOver === void 0 ? void 0 : handleDragOver(e, column);
        },
        onDrop: function onDrop(e) {
          return handleDrop(e, column);
        },
        onDragEnd: function onDragEnd(e) {
          return handleDragEnd(e);
        },
        colSpan: (_allowColumns$column$ = (_allowColumns$column = allowColumns[column]) === null || _allowColumns$column === void 0 ? void 0 : _allowColumns$column.colSpan) !== null && _allowColumns$column$ !== void 0 ? _allowColumns$column$ : 1,
        className: (_allowColumns$column2 = allowColumns[column]) === null || _allowColumns$column2 === void 0 ? void 0 : _allowColumns$column2.className,
        selectedDragOver: column === dragOverd
      }, /*#__PURE__*/_react.default.createElement("div", {
        draggable: true,
        onDragStart: function onDragStart(e) {
          return handleDragStart === null || handleDragStart === void 0 ? void 0 : handleDragStart(e, column);
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
        alt: "six dots"
      }), /*#__PURE__*/_react.default.createElement("span", null, (_allowColumns$column3 = allowColumns[column]) === null || _allowColumns$column3 === void 0 ? void 0 : _allowColumns$column3.title)));
    }
    if (column === 'total' || column !== 'total' && column === _toConsumableArray(array).pop()) {
      var _allowColumns$column$2, _allowColumns$column4, _allowColumns$column5, _theme$images$icons2, _allowColumns$column6;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, column !== 'total' && column === _toConsumableArray(array).pop() && /*#__PURE__*/_react.default.createElement(_styles.DragTh, {
        key: "dragTh-".concat(i),
        onDragOver: function onDragOver(e) {
          return handleDragOver === null || handleDragOver === void 0 ? void 0 : handleDragOver(e, column);
        },
        onDrop: function onDrop(e) {
          return handleDrop(e, column);
        },
        onDragEnd: function onDragEnd(e) {
          return handleDragEnd(e);
        },
        colSpan: (_allowColumns$column$2 = (_allowColumns$column4 = allowColumns[column]) === null || _allowColumns$column4 === void 0 ? void 0 : _allowColumns$column4.colSpan) !== null && _allowColumns$column$2 !== void 0 ? _allowColumns$column$2 : 1,
        className: (_allowColumns$column5 = allowColumns[column]) === null || _allowColumns$column5 === void 0 ? void 0 : _allowColumns$column5.className,
        selectedDragOver: column === dragOverd
      }, /*#__PURE__*/_react.default.createElement("div", {
        draggable: true,
        onDragStart: function onDragStart(e) {
          return handleDragStart === null || handleDragStart === void 0 ? void 0 : handleDragStart(e, column);
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: (_theme$images$icons2 = theme.images.icons) === null || _theme$images$icons2 === void 0 ? void 0 : _theme$images$icons2.sixDots,
        alt: "six dots"
      }), /*#__PURE__*/_react.default.createElement("span", null, (_allowColumns$column6 = allowColumns[column]) === null || _allowColumns$column6 === void 0 ? void 0 : _allowColumns$column6.title))), /*#__PURE__*/_react.default.createElement("th", {
        className: "orderPrice",
        key: "noDragTh-".concat(i)
      }, /*#__PURE__*/_react.default.createElement(_Shared.ColumnAllowSettingPopover, {
        allowColumns: allowColumns,
        optionsDefault: optionsDefault,
        handleChangeAllowColumns: handleChangeAllowColumns,
        isOrder: true
      })));
    }
    return (column !== 'timer' || column === 'timer' && (groupStatus === 'pending' || groupStatus === 'inProgress')) && /*#__PURE__*/_react.default.createElement(_styles.DragTh, {
      key: "dragTh-".concat(i),
      onDragOver: function onDragOver(e) {
        return handleDragOver === null || handleDragOver === void 0 ? void 0 : handleDragOver(e, column);
      },
      onDrop: function onDrop(e) {
        return handleDrop(e, column);
      },
      onDragEnd: function onDragEnd(e) {
        return handleDragEnd(e);
      },
      colSpan: (_allowColumns$column$3 = (_allowColumns$column7 = allowColumns[column]) === null || _allowColumns$column7 === void 0 ? void 0 : _allowColumns$column7.colSpan) !== null && _allowColumns$column$3 !== void 0 ? _allowColumns$column$3 : 1,
      className: (_allowColumns$column8 = allowColumns[column]) === null || _allowColumns$column8 === void 0 ? void 0 : _allowColumns$column8.className,
      selectedDragOver: column === dragOverd
    }, /*#__PURE__*/_react.default.createElement("div", {
      draggable: true,
      onDragStart: function onDragStart(e) {
        return handleDragStart === null || handleDragStart === void 0 ? void 0 : handleDragStart(e, column);
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (_theme$images$icons3 = theme.images.icons) === null || _theme$images$icons3 === void 0 ? void 0 : _theme$images$icons3.sixDots,
      alt: "six dots"
    }), /*#__PURE__*/_react.default.createElement("span", null, (_allowColumns$column9 = allowColumns[column]) === null || _allowColumns$column9 === void 0 ? void 0 : _allowColumns$column9.title)));
  })))), orderList.loading || !allowColumns ? _toConsumableArray(Array(10).keys()).map(function (i) {
    var _allowColumns$slaBar2, _allowColumns$orderNu2, _allowColumns$dateTim2, _allowColumns$orderNu3, _allowColumns$dateTim3, _allowColumns$externa, _allowColumns$cartGro, _allowColumns$driverG, _allowColumns$status, _allowColumns$busines, _allowColumns$custome, _allowColumns$driver, _allowColumns$deliver, _allowColumns$status2, _allowColumns$advance, _allowColumns$advance2, _allowColumns$advance3, _allowColumns$total;
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 || (_allowColumns$slaBar2 = allowColumns.slaBar) === null || _allowColumns$slaBar2 === void 0 ? void 0 : _allowColumns$slaBar2.visable) && /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, null)), /*#__PURE__*/_react.default.createElement("td", {
      className: !(allowColumns !== null && allowColumns !== void 0 && (_allowColumns$orderNu2 = allowColumns.orderNumber) !== null && _allowColumns$orderNu2 !== void 0 && _allowColumns$orderNu2.visable || allowColumns !== null && allowColumns !== void 0 && (_allowColumns$dateTim2 = allowColumns.dateTime) !== null && _allowColumns$dateTim2 !== void 0 && _allowColumns$dateTim2.visable) ? 'orderNo small' : 'orderNo'
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderNumberContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBox, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 25,
      height: 25,
      style: {
        margin: '10px'
      }
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 || (_allowColumns$orderNu3 = allowColumns.orderNumber) === null || _allowColumns$orderNu3 === void 0 ? void 0 : _allowColumns$orderNu3.visable) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), (allowColumns === null || allowColumns === void 0 || (_allowColumns$dateTim3 = allowColumns.dateTime) === null || _allowColumns$dateTim3 === void 0 ? void 0 : _allowColumns$dateTim3.visable) && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    })))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$externa = allowColumns.externalId) === null || _allowColumns$externa === void 0 ? void 0 : _allowColumns$externa.visable) && /*#__PURE__*/_react.default.createElement("td", {
      className: "externalId"
    }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$cartGro = allowColumns.cartGroupId) === null || _allowColumns$cartGro === void 0 ? void 0 : _allowColumns$cartGro.visable) && /*#__PURE__*/_react.default.createElement("td", {
      className: "statusInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$driverG = allowColumns.driverGroupId) === null || _allowColumns$driverG === void 0 ? void 0 : _allowColumns$driverG.visable) && /*#__PURE__*/_react.default.createElement("td", {
      className: "statusInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$status = allowColumns.status) === null || _allowColumns$status === void 0 ? void 0 : _allowColumns$status.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "statusInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$busines = allowColumns.business) === null || _allowColumns$busines === void 0 ? void 0 : _allowColumns$busines.visable) && /*#__PURE__*/_react.default.createElement("td", {
      className: "businessInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, !hidePhoto && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$custome = allowColumns.customer) === null || _allowColumns$custome === void 0 ? void 0 : _allowColumns$custome.visable) && /*#__PURE__*/_react.default.createElement("td", {
      className: "customerInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, !hidePhoto && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$driver = allowColumns.driver) === null || _allowColumns$driver === void 0 ? void 0 : _allowColumns$driver.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "driverInfo"
    }, /*#__PURE__*/_react.default.createElement(_styles.DriversInfo, {
      className: "d-flex align-items-center"
    }, !hidePhoto && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      style: {
        margin: '10px'
      }
    }))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$deliver = allowColumns.deliveryType) === null || _allowColumns$deliver === void 0 ? void 0 : _allowColumns$deliver.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderType"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 35,
      height: 35
    }))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$status2 = allowColumns.status) === null || _allowColumns$status2 === void 0 ? void 0 : _allowColumns$status2.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderStatusTitle"
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusSelector, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$advance = allowColumns.advanced) === null || _allowColumns$advance === void 0 ? void 0 : _allowColumns$advance.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "logistic"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$advance2 = allowColumns.advanced) === null || _allowColumns$advance2 === void 0 ? void 0 : _allowColumns$advance2.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "attempts"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), (allowColumns === null || allowColumns === void 0 || (_allowColumns$advance3 = allowColumns.advanced) === null || _allowColumns$advance3 === void 0 ? void 0 : _allowColumns$advance3.visable) && !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "priority"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })))), !isSelectedOrders && /*#__PURE__*/_react.default.createElement("td", {
      className: "orderPrice"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, (allowColumns === null || allowColumns === void 0 || (_allowColumns$total = allowColumns.total) === null || _allowColumns$total === void 0 ? void 0 : _allowColumns$total.visable) && /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))));
  }) : orderList.orders.map(function (order, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTbody, {
      key: i,
      className: parseInt(orderDetailId) === order.id ? 'active' : '',
      onClick: function onClick(e) {
        return handleClickOrder(order, e);
      },
      "data-tour": i === 0 ? 'tour_start' : '',
      "data-status": isEnabledRowInColor && (order === null || order === void 0 ? void 0 : order.time_status)
    }, /*#__PURE__*/_react.default.createElement("tr", null, Object.keys(allowColumns).filter(function (col) {
      var _allowColumns$col7;
      return (_allowColumns$col7 = allowColumns[col]) === null || _allowColumns$col7 === void 0 ? void 0 : _allowColumns$col7.visable;
    }).sort(function (col1, col2) {
      var _allowColumns$col8, _allowColumns$col9;
      return ((_allowColumns$col8 = allowColumns[col1]) === null || _allowColumns$col8 === void 0 ? void 0 : _allowColumns$col8.order) - ((_allowColumns$col9 = allowColumns[col2]) === null || _allowColumns$col9 === void 0 ? void 0 : _allowColumns$col9.order);
    }).map(function (column, index) {
      if (column === 'slaBar') {
        return /*#__PURE__*/_react.default.createElement("td", {
          key: "slaBar".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement(_styles.Timestatus, {
          timeState: order === null || order === void 0 ? void 0 : order.time_status
        }));
      }
      if (column === 'externalId' && !isSelectedOrders) {
        return /*#__PURE__*/_react.default.createElement("td", {
          className: "externalId",
          key: "externalId".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, order === null || order === void 0 ? void 0 : order.external_id)));
      }
      if (column === 'orderNumber') {
        var _allowColumns$orderNu4, _allowColumns$dateTim4, _allowColumns$orderNu5, _allowColumns$dateTim5;
        return /*#__PURE__*/_react.default.createElement("td", {
          className: !(allowColumns !== null && allowColumns !== void 0 && (_allowColumns$orderNu4 = allowColumns.orderNumber) !== null && _allowColumns$orderNu4 !== void 0 && _allowColumns$orderNu4.visable || allowColumns !== null && allowColumns !== void 0 && (_allowColumns$dateTim4 = allowColumns.dateTime) !== null && _allowColumns$dateTim4 !== void 0 && _allowColumns$dateTim4.visable) ? 'small' : '',
          key: "orderNumber".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement(_styles.OrderNumberContainer, null, !isSelectedOrders && /*#__PURE__*/_react.default.createElement(_styles.CheckBox, {
          isChecked: selectedOrderIds.includes(order === null || order === void 0 ? void 0 : order.id),
          onClick: function onClick() {
            return handleSelectedOrderIds(order.id);
          },
          className: "orderCheckBox"
        }, selectedOrderIds.includes(order === null || order === void 0 ? void 0 : order.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("div", {
          className: "info"
        }, (allowColumns === null || allowColumns === void 0 || (_allowColumns$orderNu5 = allowColumns.orderNumber) === null || _allowColumns$orderNu5 === void 0 ? void 0 : _allowColumns$orderNu5.visable) && /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, t('INVOICE_ORDER_NO', 'Order No.'), " ", order === null || order === void 0 ? void 0 : order.id), (allowColumns === null || allowColumns === void 0 || (_allowColumns$dateTim5 = allowColumns.dateTime) === null || _allowColumns$dateTim5 === void 0 ? void 0 : _allowColumns$dateTim5.visable) && /*#__PURE__*/_react.default.createElement("p", {
          className: "date"
        }, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDateCustom(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDateCustom(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
          utc: false
        })))));
      }
      if (column === 'status' && !isSelectedOrders) {
        var _getOrderStatus;
        return /*#__PURE__*/_react.default.createElement("td", {
          className: "statusInfo",
          key: "statusInfo".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, (_getOrderStatus = getOrderStatus(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value)));
      }
      if (column === 'cartGroupId') {
        return /*#__PURE__*/_react.default.createElement("td", {
          className: "orderGroupId",
          key: "cart_group_id".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, (order === null || order === void 0 ? void 0 : order.cart_group_id) && /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, t('No', 'No'), ". ", order === null || order === void 0 ? void 0 : order.cart_group_id)));
      }
      if (column === 'driverGroupId') {
        return /*#__PURE__*/_react.default.createElement("td", {
          className: "orderGroupId",
          key: "cart_group_id".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement(_styles.StatusInfo, null, (order === null || order === void 0 ? void 0 : order.driver_group_id) && /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, t('No', 'No'), ". ", order === null || order === void 0 ? void 0 : order.driver_group_id)));
      }
      if (column === 'business') {
        var _order$business, _theme$images, _order$business2, _order$business3;
        return /*#__PURE__*/_react.default.createElement("td", {
          className: "businessInfo",
          key: "businessInfo".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, !hidePhoto && /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement("img", {
          src: optimizeImage(((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_50,c_limit'),
          loading: "lazy",
          alt: ""
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "info"
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business3 = order.business) === null || _order$business3 === void 0 || (_order$business3 = _order$business3.city) === null || _order$business3 === void 0 ? void 0 : _order$business3.name))));
      }
      if (column === 'customer') {
        var _order$customer, _order$customer2, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9;
        return /*#__PURE__*/_react.default.createElement("td", {
          className: "customerInfo",
          key: "customerInfo".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, !hidePhoto && /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, order !== null && order !== void 0 && (_order$customer = order.customer) !== null && _order$customer !== void 0 && _order$customer.photo ? /*#__PURE__*/_react.default.createElement("img", {
          src: optimizeImage(order === null || order === void 0 || (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo, 'h_50,c_limit'),
          loading: "lazy",
          alt: ""
        }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null), /*#__PURE__*/_react.default.createElement(_styles.OrdersCountWrapper, {
          isNew: (order === null || order === void 0 || (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.orders_count) === 0
        }, (order === null || order === void 0 || (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.orders_count) || t('NEW', 'New'))), /*#__PURE__*/_react.default.createElement("div", {
          className: "info"
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, !(order !== null && order !== void 0 && (_order$customer5 = order.customer) !== null && _order$customer5 !== void 0 && _order$customer5.email) && !(order !== null && order !== void 0 && (_order$customer6 = order.customer) !== null && _order$customer6 !== void 0 && _order$customer6.cellphone) && !(order !== null && order !== void 0 && (_order$customer7 = order.customer) !== null && _order$customer7 !== void 0 && _order$customer7.name) ? t('GUEST_USER', 'Guest user') : order === null || order === void 0 || (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.cellphone))));
      }
      if (column === 'driver' && !isSelectedOrders) {
        var _order$driver, _order$driver2, _order$driver3, _order$driver4;
        return /*#__PURE__*/_react.default.createElement("td", {
          key: "driver".concat(i, "-").concat(index)
        }, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, !hidePhoto && /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, order !== null && order !== void 0 && (_order$driver = order.driver) !== null && _order$driver !== void 0 && _order$driver.photo ? /*#__PURE__*/_react.default.createElement("img", {
          src: optimizeImage(order === null || order === void 0 || (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo, 'h_50,c_limit'),
          loading: "lazy",
          alt: ""
        }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("div", {
          className: "info"
        }, order !== null && order !== void 0 && order.driver ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, order === null || order === void 0 || (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.name), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.cellphone)) : /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, t('NO_DRIVER', 'No Driver')))));
      }
      if (column === 'advanced' && !isSelectedOrders) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
          key: "advanced".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement("td", {
          className: "logistic"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "info"
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, t('LOGISTIC', 'Logistic')), /*#__PURE__*/_react.default.createElement("p", null, getLogisticTag(order === null || order === void 0 ? void 0 : order.logistic_status), /*#__PURE__*/_react.default.createElement(_styles.LogisticStatusDot, {
          status: order === null || order === void 0 ? void 0 : order.logistic_status
        })))), /*#__PURE__*/_react.default.createElement("td", {
          className: "attempts"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "info"
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, t('ATTEMPTS', 'Attempts')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : order.logistic_attemps))), /*#__PURE__*/_react.default.createElement("td", {
          className: "priority"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "info"
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, t('PRIORITY', 'Priority')), /*#__PURE__*/_react.default.createElement("p", null, getPriorityTag(order === null || order === void 0 ? void 0 : order.priority), /*#__PURE__*/_react.default.createElement(_styles.PriorityDot, {
          priority: order === null || order === void 0 ? void 0 : order.priority
        })))));
      }
      if (column === 'timer' && (groupStatus === 'pending' || groupStatus === 'inProgress')) {
        return /*#__PURE__*/_react.default.createElement("td", {
          className: "timer",
          key: "timer".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement(_styles.Timer, null, /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, t('TIMER', 'Timer')), /*#__PURE__*/_react.default.createElement("p", {
          className: order === null || order === void 0 ? void 0 : order.time_status
        }, displayDelayedTime(order))));
      }
      if (column === 'total') {
        var _allowColumns$total2, _order$summary;
        return /*#__PURE__*/_react.default.createElement("td", {
          className: "orderPrice",
          key: "total".concat(i, "-").concat(index)
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "info"
        }, (allowColumns === null || allowColumns === void 0 || (_allowColumns$total2 = allowColumns.total) === null || _allowColumns$total2 === void 0 ? void 0 : _allowColumns$total2.visable) && /*#__PURE__*/_react.default.createElement("p", {
          className: "bold"
        }, parsePrice(order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total, {
          currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
        })), !((order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12) && /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
          utc: false
        }))));
      }
    }), /*#__PURE__*/_react.default.createElement("td", null)));
  }))), pagination && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize),
    handleChangePage: handleChangePage,
    defaultPageSize: pagination.pageSize,
    handleChangePageSize: handleChangePageSize
  })));
};