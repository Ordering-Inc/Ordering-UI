"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorContentUI = exports.OrderTypeSelectorContent = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));

var _BsArrowLeft = _interopRequireDefault(require("@meronex/icons/bs/BsArrowLeft"));

var _Modal = require("../Modal");

var _styles = require("./styles");

var _Inputs = require("../../../../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _Confirm = require("../Confirm");

var _LogoutButton = require("../LogoutButton");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderTypeSelectorContentUI = function OrderTypeSelectorContentUI(props) {
  var _configState$configs, _configState$configs$, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;

  var handleChangeOrderType = props.handleChangeOrderType,
      orderTypes = props.orderTypes,
      onClose = props.onClose,
      logo = props.logo,
      handleBusinessPage = props.handleBusinessPage,
      businessId = props.businessId,
      isDisabledTables = props.isDisabledTables;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderStatus = _useOrder2[0];

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      orderTypeSelected = _useState2[0],
      setOrderTypeSelected = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1]; // const [pagination, setPagination] = useState({})


  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      places = _useState6[0],
      setPlaces = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      placeId = _useState8[0],
      setPlaceId = _useState8[1];

  var inputRef = (0, _react.useRef)();
  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];

  var handleClickOrderType = function handleClickOrderType(_ref) {
    var value = _ref.value,
        text = _ref.text,
        label = _ref.label;
    handleChangeOrderType && handleChangeOrderType(value);

    if (!label) {
      handleBusinessPage();
      return;
    }

    onClose && onClose();
    setOrderTypeSelected({
      open: true,
      type: text,
      label: label
    });
  };

  var getPlaces = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var response, _yield$response$json, result, error;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/places"));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;
              error = _yield$response$json.error;

              if (error) {
                setAlertState({
                  open: true,
                  content: result
                });
              } else {
                setPlaces(result.map(function (place) {
                  return {
                    name: place.name,
                    id: place.id,
                    enabled: place.enabled
                  };
                }));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setAlertState({
                open: true,
                content: _context.t0.message
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function getPlaces() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChangePlace = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (placeId) {
                _context2.next = 3;
                break;
              }

              setAlertState({
                open: true,
                content: [t('PLACE_ID_REQURED', 'Place id is required')]
              });
              return _context2.abrupt("return");

            case 3:
              if (!(places.some(function (place) {
                return place.id === parseInt(placeId);
              }) || isDisabledTables)) {
                _context2.next = 9;
                break;
              }

              _context2.next = 6;
              return window.localStorage.setItem('place_id', placeId);

            case 6:
              handleBusinessPage();
              _context2.next = 10;
              break;

            case 9:
              setAlertState({
                open: true,
                content: [t('THE_PLACES_NOT_EXISTS', 'The place does not exists')]
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleChangePlace() {
      return _ref3.apply(this, arguments);
    };
  }();

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var onChangePlaceId = function onChangePlaceId(e) {
    inputRef.current.value = inputRef.current.value.replace(/[^0-9.]+/g, '');
    setPlaceId(e.target.value.replace(/[^0-9.]+/g, ''));
  };

  var ordersRedirect = function ordersRedirect() {
    events.emit('go_to_page', {
      page: 'orders'
    });
  };

  (0, _react.useEffect)(function () {
    getPlaces();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "order-type",
    style: {
      overflow: 'hidden'
    }
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListTitle, null, t('SELECT_YOUR_ORDER_TYPE', 'Select your order type')), auth && /*#__PURE__*/_react.default.createElement(_styles.IconsContainer, null, /*#__PURE__*/_react.default.createElement("svg", {
    onClick: ordersRedirect,
    width: "20px",
    height: "20px",
    viewBox: "0 0 16 16",
    fill: theme.colors.darkTextColor,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.5 3C14.6326 3 14.7598 3.05268 14.8536 3.14645C14.9473 3.24021 15 3.36739 15 3.5V12.5C15 12.6326 14.9473 12.7598 14.8536 12.8536C14.7598 12.9473 14.6326 13 14.5 13H1.5C1.36739 13 1.24021 12.9473 1.14645 12.8536C1.05268 12.7598 1 12.6326 1 12.5V3.5C1 3.36739 1.05268 3.24021 1.14645 3.14645C1.24021 3.05268 1.36739 3 1.5 3H14.5ZM1.5 2C1.10218 2 0.720644 2.15804 0.43934 2.43934C0.158035 2.72064 0 3.10218 0 3.5L0 12.5C0 12.8978 0.158035 13.2794 0.43934 13.5607C0.720644 13.842 1.10218 14 1.5 14H14.5C14.8978 14 15.2794 13.842 15.5607 13.5607C15.842 13.2794 16 12.8978 16 12.5V3.5C16 3.10218 15.842 2.72064 15.5607 2.43934C15.2794 2.15804 14.8978 2 14.5 2H1.5Z",
    fill: theme.colors.darkTextColor
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.00005 5.50004C7.00005 5.36743 7.05272 5.24025 7.14649 5.14649C7.24026 5.05272 7.36744 5.00004 7.50005 5.00004H12.5C12.6327 5.00004 12.7598 5.05272 12.8536 5.14649C12.9474 5.24025 13 5.36743 13 5.50004C13 5.63265 12.9474 5.75982 12.8536 5.85359C12.7598 5.94736 12.6327 6.00004 12.5 6.00004H7.50005C7.36744 6.00004 7.24026 5.94736 7.14649 5.85359C7.05272 5.75982 7.00005 5.63265 7.00005 5.50004ZM5.50405 4.64604C5.55061 4.69248 5.58755 4.74766 5.61276 4.80841C5.63796 4.86915 5.65094 4.93427 5.65094 5.00004C5.65094 5.06581 5.63796 5.13093 5.61276 5.19167C5.58755 5.25242 5.55061 5.30759 5.50405 5.35404L4.00405 6.85404C3.9576 6.9006 3.90242 6.93755 3.84168 6.96275C3.78093 6.98796 3.71581 7.00093 3.65005 7.00093C3.58428 7.00093 3.51916 6.98796 3.45841 6.96275C3.39767 6.93755 3.34249 6.9006 3.29605 6.85404L2.79605 6.35404C2.74956 6.30755 2.71268 6.25236 2.68752 6.19162C2.66236 6.13088 2.64941 6.06578 2.64941 6.00004C2.64941 5.86726 2.70216 5.73993 2.79605 5.64604C2.88993 5.55215 3.01727 5.49941 3.15005 5.49941C3.28282 5.49941 3.41016 5.55215 3.50405 5.64604L3.65005 5.79304L4.79605 4.64604C4.84249 4.59948 4.89767 4.56253 4.95841 4.53733C5.01916 4.51212 5.08428 4.49915 5.15005 4.49915C5.21581 4.49915 5.28093 4.51212 5.34168 4.53733C5.40242 4.56253 5.4576 4.59948 5.50405 4.64604ZM7.00005 9.50004C7.00005 9.36743 7.05272 9.24025 7.14649 9.14649C7.24026 9.05272 7.36744 9.00004 7.50005 9.00004H12.5C12.6327 9.00004 12.7598 9.05272 12.8536 9.14649C12.9474 9.24025 13 9.36743 13 9.50004C13 9.63265 12.9474 9.75983 12.8536 9.85359C12.7598 9.94736 12.6327 10 12.5 10H7.50005C7.36744 10 7.24026 9.94736 7.14649 9.85359C7.05272 9.75983 7.00005 9.63265 7.00005 9.50004ZM5.50405 8.64604C5.55061 8.69249 5.58755 8.74766 5.61276 8.80841C5.63796 8.86915 5.65094 8.93427 5.65094 9.00004C5.65094 9.06581 5.63796 9.13093 5.61276 9.19167C5.58755 9.25242 5.55061 9.30759 5.50405 9.35404L4.00405 10.854C3.9576 10.9006 3.90242 10.9375 3.84168 10.9628C3.78093 10.988 3.71581 11.0009 3.65005 11.0009C3.58428 11.0009 3.51916 10.988 3.45841 10.9628C3.39767 10.9375 3.34249 10.9006 3.29605 10.854L2.79605 10.354C2.74956 10.3076 2.71268 10.2524 2.68752 10.1916C2.66236 10.1309 2.64941 10.0658 2.64941 10C2.64941 9.9343 2.66236 9.8692 2.68752 9.80846C2.71268 9.74772 2.74956 9.69253 2.79605 9.64604C2.84253 9.59955 2.89772 9.56268 2.95846 9.53752C3.0192 9.51236 3.0843 9.49941 3.15005 9.49941C3.21579 9.49941 3.28089 9.51236 3.34163 9.53752C3.40237 9.56268 3.45756 9.59955 3.50405 9.64604L3.65005 9.79304L4.79605 8.64604C4.84249 8.59948 4.89767 8.56253 4.95841 8.53733C5.01916 8.51212 5.08428 8.49915 5.15005 8.49915C5.21581 8.49915 5.28093 8.51212 5.34168 8.53733C5.40242 8.56253 5.4576 8.59948 5.50405 8.64604Z",
    fill: theme.colors.darkTextColor
  })), /*#__PURE__*/_react.default.createElement(_styles.LogoutButtonContainer, null, /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, null)))), /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(logo, 'h_200,c_limit')
  })), orderTypes && orderTypes.filter(function (ordertype) {
    return configTypes.includes(ordertype.value);
  }).map(function (item, i) {
    var _orderStatus$options;

    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListItemContainer, {
      key: i,
      bgimage: item === null || item === void 0 ? void 0 : item.image,
      onClick: function onClick() {
        return handleClickOrderType({
          value: item.value,
          text: item.text,
          label: item.label
        });
      },
      active: (orderStatus === null || orderStatus === void 0 ? void 0 : (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.type) === (item === null || item === void 0 ? void 0 : item.value)
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeTitle, null, item.text), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeDescription, null, item.description), /*#__PURE__*/_react.default.createElement(_styles.OrderStartWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('START_MY_ORDER', 'Start my order')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null))));
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: orderTypeSelected === null || orderTypeSelected === void 0 ? void 0 : orderTypeSelected.open,
    onClose: function onClose() {
      return setOrderTypeSelected(_objectSpread(_objectSpread({}, orderTypeSelected), {}, {
        open: false
      }));
    },
    hideCloseDefault: true,
    height: "calc(100vh + 100px)",
    padding: "30px 40px 10px 40px"
  }, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_BsArrowLeft.default, {
    size: 20,
    onClick: function onClick() {
      return setOrderTypeSelected(_objectSpread(_objectSpread({}, orderTypeSelected), {}, {
        open: false
      }));
    },
    color: theme.colors.arrowColor
  })), /*#__PURE__*/_react.default.createElement(_styles.TypeContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, orderTypeSelected === null || orderTypeSelected === void 0 ? void 0 : orderTypeSelected.type), /*#__PURE__*/_react.default.createElement("label", null, orderTypeSelected === null || orderTypeSelected === void 0 ? void 0 : orderTypeSelected.label), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: "#",
    onChange: function onChange(e) {
      return onChangePlaceId(e);
    },
    type: "text",
    ref: inputRef,
    min: 0
  })), !isDisabledTables && /*#__PURE__*/_react.default.createElement(_styles.Table, null, places.length > 0 && /*#__PURE__*/_react.default.createElement("h2", null, t('AVAILABLE_PLACES', 'Available places')), places.map(function (place) {
    return /*#__PURE__*/_react.default.createElement(_styles.PlaceName, {
      key: place.id,
      isDisabled: !place.enabled
    }, /*#__PURE__*/_react.default.createElement("p", null, place.name), " ", /*#__PURE__*/_react.default.createElement("span", null, t('TABLE', 'Table'), " ", place.id));
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    style: {
      width: '100%'
    },
    height: "44px",
    onClick: handleChangePlace
  }, t('CONTINUE', 'Continue')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    }
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.OrderTypeSelectorContentUI = OrderTypeSelectorContentUI;

var OrderTypeSelectorContent = function OrderTypeSelectorContent(props) {
  var _theme$images, _theme$images2, _theme$images2$dummie, _theme$defaultLanguag, _theme$images3, _theme$images3$delive, _theme$defaultLanguag2, _theme$images4, _theme$images4$delive, _theme$defaultLanguag3, _theme$images5, _theme$images5$delive, _theme$defaultLanguag4, _theme$images6, _theme$images6$delive;

  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var theme = (0, _styledComponents.useTheme)();

  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderTypeSelectorContentUI,
    logo: ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo) || props.logo || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo),
    orderTypes: props.orderTypes || [{
      value: 2,
      text: t('PICKUP', 'Pickup'),
      description: t('ORDERTYPE_DESCRIPTION_PICKUP', theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ORDERTYPE_DESCRIPTION_PICKUP),
      image: (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$delive = _theme$images3.deliveryTypes) === null || _theme$images3$delive === void 0 ? void 0 : _theme$images3$delive.pickUp
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in'),
      description: t('ORDERTYPE_DESCRIPTION_EATIN', theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.ORDERTYPE_DESCRIPTION_EATIN),
      image: (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$delive = _theme$images4.deliveryTypes) === null || _theme$images4$delive === void 0 ? void 0 : _theme$images4$delive.eatIn,
      label: t('TABLE_NUMBER', 'Table number')
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside'),
      description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.ORDERTYPE_DESCRIPTION_CURBSIDE),
      image: (_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$delive = _theme$images5.deliveryTypes) === null || _theme$images5$delive === void 0 ? void 0 : _theme$images5$delive.curbside
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru'),
      description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.ORDERTYPE_DESCRIPTION_DRIVETHRU),
      image: (_theme$images6 = theme.images) === null || _theme$images6 === void 0 ? void 0 : (_theme$images6$delive = _theme$images6.deliveryTypes) === null || _theme$images6$delive === void 0 ? void 0 : _theme$images6$delive.driveThru
    }]
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};

exports.OrderTypeSelectorContent = OrderTypeSelectorContent;